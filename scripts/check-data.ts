/**
 * Portão de dados provisórios.
 *
 * Roda antes do build (`prebuild`). Em produção, aborta se algum produto ainda
 * estiver com `dataStatus: 'draft'` — impedindo publicar vazão, dimensão ou
 * peso inventados dentro do schema Product. Isso é problema de SEO e, num
 * equipamento de segurança, problema de verdade.
 *
 * Preço não é verificado aqui porque não existe no catálogo: a venda é sob
 * orçamento e nenhum valor é publicado.
 *
 * Para liberar dev/preview com os dados provisórios:
 *   NEXT_PUBLIC_ALLOW_DRAFT=1 npm run build
 *
 * Para publicar um produto de verdade:
 *   1. substitua os valores pelos reais do catálogo
 *   2. remova `provisorio: true` das linhas conferidas
 *   3. mude `dataStatus` para 'verified'
 */
import { produtos } from '../src/content/produtos'

const permiteRascunho =
  process.env.NEXT_PUBLIC_ALLOW_DRAFT === '1' || process.env.NEXT_PUBLIC_ALLOW_DRAFT === 'true'

const rascunhos = produtos.filter((p) => p.dataStatus === 'draft')
const verificados = produtos.length - rascunhos.length

console.log(
  `\nCatálogo: ${produtos.length} produtos — ${verificados} conferidos, ${rascunhos.length} em rascunho.`,
)

if (rascunhos.length === 0) {
  console.log('✓ Todos os produtos têm dados conferidos.\n')
  process.exit(0)
}

console.log('\nProdutos com dados provisórios:\n')
for (const p of rascunhos) {
  const itens = p.especificacoes.filter((e) => e.provisorio).map((e) => e.label)
  console.log(`  ${p.codigo.padEnd(12)} ${p.slug}`)
  console.log(`  ${' '.repeat(12)} falta conferir: ${itens.join(', ') || '(nada — basta marcar verified)'}\n`)
}

if (permiteRascunho) {
  console.log(
    'NEXT_PUBLIC_ALLOW_DRAFT ativo — seguindo com os dados provisórios.\n' +
      'Use apenas em dev e preview. Não publique assim.\n',
  )
  process.exit(0)
}

console.error(
  `\n✗ Build bloqueado: ${rascunhos.length} produto(s) ainda com dado provisório.\n\n` +
    '  Preencha os valores reais e mude dataStatus para "verified",\n' +
    '  ou rode com NEXT_PUBLIC_ALLOW_DRAFT=1 para gerar um preview.\n',
)
process.exit(1)
