import { z } from 'zod'

/**
 * Esquema dos dados do catálogo.
 *
 * Regra central: só entra aqui dado conferido. Vazão, dimensões e peso são
 * opcionais e só existem quando vierem do catálogo do fabricante. Enquanto
 * forem provisórios, o produto fica com `dataStatus: 'draft'` e o build de
 * produção falha (ver scripts/check-data.ts) — impedindo publicar número
 * inventado dentro do schema Product, que é problema de SEO e, num equipamento
 * de segurança, problema de verdade.
 *
 * Preço não existe no esquema, por decisão de negócio: a Yank EPC trabalha com
 * orçamento sob consulta, e nenhum valor é publicado no site nem no JSON-LD.
 */

export const especificacaoSchema = z.object({
  label: z.string(),
  valor: z.string(),
  /**
   * true = valor ainda não conferido no catálogo do fabricante. Segura o
   * produto em 'draft' e bloqueia o build de produção. Omitir equivale a
   * declarar o valor conferido — que é o estado de todas as linhas hoje.
   */
  provisorio: z.boolean().optional(),
})

export const faqSchema = z.object({
  pergunta: z.string(),
  resposta: z.string(),
})

export const imagemSchema = z.object({
  /** chave no image-manifest gerado por scripts/fetch-images.ts */
  chave: z.string(),
  /**
   * Texto alternativo. Descreve o equipamento, não a marca.
   * Estes são rascunhos — revisar todos antes de publicar.
   */
  alt: z.string().min(15, 'alt precisa descrever o equipamento, não só "Yank EPC"'),
})

export const produtoSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  codigo: z.string(),
  categoria: z.string(),

  /** Termo de busca primeiro, código do modelo depois. Nunca só o código. */
  h1: z.string(),
  /** Nome curto para cards e breadcrumbs */
  nomeCurto: z.string(),

  titleSeo: z.string().max(65),
  metaDescription: z.string().min(110).max(165),

  /** 2–3 frases: o que é e para quem serve */
  resumo: z.string(),
  /** Parágrafos do corpo */
  descricao: z.array(z.string()).min(2),

  /** Características reais, extraídas do site atual — não são provisórias */
  bullets: z.array(z.string()).min(3),

  especificacoes: z.array(especificacaoSchema).default([]),

  aplicacoes: z.array(z.string()).min(3),
  conformidade: z.array(z.string()).min(1),
  itensInclusos: z.array(z.string()).default([]),
  opcionais: z.array(z.string()).default([]),

  faq: z.array(faqSchema).min(2),

  imagens: z.array(imagemSchema).min(1),

  /** slugs de produtos relacionados */
  relacionados: z.array(z.string()).default([]),
  /** slugs de artigos do blog relacionados */
  artigos: z.array(z.string()).default([]),

  /**
   * 'draft'    — contém especificação provisória
   * 'verified' — todo dado exibido foi conferido contra o catálogo real
   */
  dataStatus: z.enum(['draft', 'verified']),

  /** Ordem dentro da categoria */
  ordem: z.number().int().default(0),
})

export const categoriaSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  nome: z.string(),
  nomeMenu: z.string(),
  h1: z.string(),
  titleSeo: z.string().max(65),
  metaDescription: z.string().min(110).max(165),
  resumo: z.string(),
  /** Texto do hub — a auditoria pede 300–500 palavras por categoria */
  descricao: z.array(z.string()).min(3),
  /** Colunas da tabela comparativa dos modelos da categoria */
  comparativo: z.array(z.string()).default([]),
  faq: z.array(faqSchema).default([]),
  artigos: z.array(z.string()).default([]),
  ordem: z.number().int().default(0),
})

export const artigoSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  titulo: z.string(),
  titleSeo: z.string().max(65),
  metaDescription: z.string().min(110).max(165),
  resumo: z.string(),
  publicadoEm: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  atualizadoEm: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  tempoLeitura: z.number().int().positive(),
  /** Blocos do corpo — deliberadamente simples, sem MDX */
  corpo: z.array(
    z.union([
      z.object({ tipo: z.literal('h2'), texto: z.string() }),
      z.object({ tipo: z.literal('h3'), texto: z.string() }),
      z.object({ tipo: z.literal('p'), texto: z.string() }),
      z.object({ tipo: z.literal('ul'), itens: z.array(z.string()) }),
      z.object({ tipo: z.literal('ol'), itens: z.array(z.string()) }),
      z.object({ tipo: z.literal('destaque'), texto: z.string() }),
      z.object({
        tipo: z.literal('tabela'),
        cabecalho: z.array(z.string()),
        linhas: z.array(z.array(z.string())),
      }),
    ]),
  ),
  faq: z.array(faqSchema).default([]),
  produtos: z.array(z.string()).default([]),
  categorias: z.array(z.string()).default([]),
})

export type Especificacao = z.infer<typeof especificacaoSchema>
export type Faq = z.infer<typeof faqSchema>
export type Imagem = z.infer<typeof imagemSchema>
export type Produto = z.infer<typeof produtoSchema>
export type Categoria = z.infer<typeof categoriaSchema>
export type Artigo = z.infer<typeof artigoSchema>
export type BlocoArtigo = Artigo['corpo'][number]
