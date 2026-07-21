import { produtoSchema, type Produto } from '../schema'
import { categorias } from '../categorias'
import { chuveirosELavaOlhos } from './chuveiros-e-lava-olhos'
import { chuveiros } from './chuveiros'
import { lavaOlhos } from './lava-olhos'
import { especiais } from './especiais'
import { transportaveis } from './transportaveis'
import { acessorios } from './acessorios'

/**
 * Catálogo consolidado. Todo produto passa pelo Zod aqui — erro de dado
 * quebra o build em vez de virar página torta em produção.
 */

const brutos: Produto[] = [
  ...chuveirosELavaOlhos,
  ...chuveiros,
  ...lavaOlhos,
  ...especiais,
  ...transportaveis,
  ...acessorios,
]

export const produtos: Produto[] = brutos.map((p) => {
  const resultado = produtoSchema.safeParse(p)
  if (!resultado.success) {
    throw new Error(
      `Produto inválido "${p.slug ?? '(sem slug)'}":\n${JSON.stringify(resultado.error.issues, null, 2)}`,
    )
  }
  return resultado.data
})

// ------------------------------------------------------------- integridade

const slugs = new Set(produtos.map((p) => p.slug))
const slugsCategorias = new Set(categorias.map((c) => c.slug))

for (const p of produtos) {
  if (!slugsCategorias.has(p.categoria)) {
    throw new Error(`Produto "${p.slug}" aponta para categoria inexistente "${p.categoria}".`)
  }
  for (const r of p.relacionados) {
    if (!slugs.has(r)) {
      throw new Error(`Produto "${p.slug}" referencia relacionado inexistente "${r}".`)
    }
    if (r === p.slug) {
      throw new Error(`Produto "${p.slug}" está relacionado a si mesmo.`)
    }
  }
}

const duplicados = produtos.map((p) => p.slug).filter((s, i, a) => a.indexOf(s) !== i)
if (duplicados.length) {
  throw new Error(`Slugs de produto duplicados: ${duplicados.join(', ')}`)
}

// ---------------------------------------------------------------- consultas

export const produtosPorSlug = new Map(produtos.map((p) => [p.slug, p]))

export function getProduto(slug: string): Produto | undefined {
  return produtosPorSlug.get(slug)
}

export function produtosDaCategoria(categoria: string): Produto[] {
  return produtos.filter((p) => p.categoria === categoria).sort((a, b) => a.ordem - b.ordem)
}

export function getRelacionados(p: Produto): Produto[] {
  return p.relacionados.map((s) => produtosPorSlug.get(s)).filter((x): x is Produto => Boolean(x))
}

/** Produtos em destaque na home — os mais vendidos, conforme o site atual. */
export const destaques: Produto[] = [
  'clm-e-ai-aco-inox-304',
  'clm-e-pvc',
  'clm-e-ai-sd-aco-inox-com-ducha',
  'cla-acionamento-automatico',
]
  .map((s) => produtosPorSlug.get(s))
  .filter((x): x is Produto => Boolean(x))

/**
 * Especificações exibidas na página.
 *
 * Em produção um produto 'draft' nunca chega a renderizar — o build falha antes
 * (scripts/check-data.ts). Logo, se estamos renderizando um 'draft', estamos em
 * dev ou em preview com NEXT_PUBLIC_ALLOW_DRAFT: aí os valores provisórios
 * aparecem de propósito, para o layout ser avaliado contra conteúdo realista.
 * Eles vêm marcados visualmente para não serem confundidos com dado real.
 */
export function especificacoesVisiveis(p: Produto) {
  return p.especificacoes
}

/**
 * O preço, ao contrário, nunca entra no JSON-LD enquanto for provisório —
 * preço falso em schema Product gera ação manual do Google, e o risco não
 * compensa nem em preview.
 */
export function precoVisivel(p: Produto): number | undefined {
  return p.dataStatus === 'verified' ? p.preco : undefined
}

/** Preço para exibição na tela, incluindo o provisório em dev/preview. */
export function precoParaExibicao(p: Produto): { valor: number; provisorio: boolean } | undefined {
  if (p.preco === undefined) return undefined
  return { valor: p.preco, provisorio: p.dataStatus !== 'verified' }
}

export const produtosEmRascunho = produtos.filter((p) => p.dataStatus === 'draft')
