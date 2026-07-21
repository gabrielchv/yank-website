import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { CardProduto } from '@/components/CardProduto'
import { Faq } from '@/components/Faq'
import { IconeSeta } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { Trilha } from '@/components/Trilha'
import { artigosPorSlugs } from '@/content/blog'
import { categorias, getCategoria } from '@/content/categorias'
import { produtosDaCategoria } from '@/content/produtos'
import { schemaFaq, schemaListaCategoria, schemaTrilha, type ItemTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

/*
  Hub de categoria. A auditoria (C3) mede ~250 palavras únicas na página mais
  importante do site — sem tabela comparativa, sem FAQ, sem explicação de como
  escolher. Aqui cada hub traz 300–500 palavras próprias, a tabela comparativa
  dos modelos e os links para cada produto.
*/

export const dynamicParams = false

export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }))
}

type Props = { params: Promise<{ categoria: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params
  const c = getCategoria(categoria)
  if (!c) return {}

  return construirMetadata({
    title: c.titleSeo,
    description: c.metaDescription,
    caminho: `/${c.slug}/`,
  })
}

export default async function PaginaCategoria({ params }: Props) {
  const { categoria } = await params
  const c = getCategoria(categoria)
  if (!c) notFound()

  const produtos = produtosDaCategoria(c.slug)
  const artigos = artigosPorSlugs(c.artigos)

  const trilha: ItemTrilha[] = [
    { nome: 'Início', caminho: '/' },
    { nome: c.nome, caminho: `/${c.slug}/` },
  ]

  return (
    <>
      <JsonLd dados={schemaTrilha(trilha)} />
      <JsonLd dados={schemaListaCategoria(c, produtos)} />
      <JsonLd dados={schemaFaq(c.faq)} />

      <div className="border-b border-marca-100 bg-marca-50/60">
        <div className="conteudo py-6">
          <Trilha itens={trilha} />
        </div>
      </div>

      <header className="conteudo pt-10 lg:pt-14">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl lg:text-5xl">
            {c.h1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-tinta-700">{c.resumo}</p>
        </div>
      </header>

      {/* --------------------------------------------------------- modelos */}
      <section aria-labelledby="modelos" className="conteudo pt-10 lg:pt-12">
        <h2 id="modelos" className="sr-only">
          Modelos disponíveis
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {produtos.map((p, i) => (
            <CardProduto key={p.slug} produto={p} prioridade={i === 0} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- comparativo */}
      {c.comparativo.length > 0 && (
        <section aria-labelledby="comparativo" className="conteudo pt-14 lg:pt-16">
          <h2
            id="comparativo"
            className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl"
          >
            Comparativo dos modelos
          </h2>
          <p className="prosa mt-3 max-w-3xl">
            As diferenças que importam na hora de especificar.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-marca-100">
            <table className="w-full min-w-2xl border-collapse text-sm">
              <caption className="sr-only">
                Comparativo entre os modelos de {c.nome}
              </caption>
              <thead>
                <tr className="bg-marca-700 text-left text-white">
                  {c.comparativo.map((col) => (
                    <th key={col} scope="col" className="px-4 py-3 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {produtos.map((p, i) => (
                  <tr key={p.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-marca-50/60'}>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-marca-800">
                      <Link href={`/${c.slug}/${p.slug}/`} className="hover:underline">
                        {p.codigo}
                      </Link>
                    </th>
                    {linhasComparativo(c.comparativo, p.bullets).map((valor, j) => (
                      <td key={j} className="px-4 py-3 align-top text-tinta-700">
                        {valor}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- conteúdo */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="prosa max-w-3xl text-[1.0625rem]">
          {c.descricao.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- faq */}
      {c.faq.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <div className="max-w-3xl">
            <Faq perguntas={c.faq} />
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------- artigos */}
      {artigos.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
            Leituras relacionadas
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {artigos.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}/`}
                className="group flex flex-col rounded-xl border border-marca-100 p-5 transition-all hover:border-marca-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-marca-600">
                  {a.tempoLeitura} min
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-tinta-900 group-hover:text-marca-700">
                  {a.titulo}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-tinta-500">{a.resumo}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
                  Ler
                  <IconeSeta className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- cta */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl bg-marca-800 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Não sabe qual modelo atende à sua área?
            </h2>
            <p className="mt-3 text-marca-100">
              Descreva o agente químico, o layout e as condições da rede. Respondemos com a
              configuração adequada — e apontamos onde a especificação não vai fechar.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <BotaoWhatsApp contexto={c.nome} />
          </div>
        </div>
      </section>
    </>
  )
}

/**
 * Preenche a tabela comparativa a partir dos bullets reais do produto.
 *
 * As colunas variam por categoria (Material/Bitola/Acionamento/Fixação/...),
 * então cada coluna procura o bullet que lhe corresponde. Coluna sem
 * correspondência fica com travessão em vez de célula vazia.
 */
function linhasComparativo(colunas: string[], bullets: string[]): string[] {
  // A primeira coluna é sempre "Modelo", já renderizada como <th>.
  return colunas.slice(1).map((coluna) => {
    const achado = bullets.find((b) => correspondeColuna(coluna, b))
    return achado ?? '—'
  })
}

function correspondeColuna(coluna: string, bullet: string): boolean {
  const c = coluna.toLowerCase()
  const b = bullet.toLowerCase()

  if (c === 'material' || c === 'configuração')
    return /aço|pvc|inox|galvanizado/.test(b) && !/crivo|bacia|cilindro/.test(b)
  if (c === 'bitola') return /polegada|"|\d\/\d/.test(b)
  if (c === 'acionamento') return /acionamento|manual|automático|alça|plataforma/.test(b)
  if (c === 'fixação') return /fixação/.test(b)
  if (c === 'volume') return /litros/.test(b)
  if (c === 'mobilidade') return /carrinho|transport/.test(b)
  if (c === 'recursos') return /sensor|sinaleira|scald|alarme|cortina/.test(b)
  if (c === 'destaque') return /ducha|sinaleira|cortina|acionamento automático/.test(b)
  if (c === 'aplicação') return false
  return false
}
