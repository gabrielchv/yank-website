import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { CardProduto } from '@/components/CardProduto'
import { Faq } from '@/components/Faq'
import { IconeSeta } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { Trilha } from '@/components/Trilha'
import { artigos, getArtigo } from '@/content/blog'
import { getCategoria } from '@/content/categorias'
import { getProduto } from '@/content/produtos'
import type { BlocoArtigo } from '@/content/schema'
import { schemaArtigo, schemaFaq, schemaTrilha, type ItemTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = getArtigo(slug)
  if (!a) return {}

  return construirMetadata({
    title: a.titleSeo,
    description: a.metaDescription,
    caminho: `/blog/${a.slug}/`,
    tipo: 'article',
    publicadoEm: a.publicadoEm,
    atualizadoEm: a.atualizadoEm ?? a.publicadoEm,
  })
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params
  const a = getArtigo(slug)
  if (!a) notFound()

  const caminho = `/blog/${a.slug}/`
  const produtosLigados = a.produtos.map(getProduto).filter((p) => p !== undefined)
  const categoriasLigadas = a.categorias.map(getCategoria).filter((c) => c !== undefined)

  const trilha: ItemTrilha[] = [
    { nome: 'Início', caminho: '/' },
    { nome: 'Blog', caminho: '/blog/' },
    { nome: a.titulo, caminho },
  ]

  return (
    <>
      <JsonLd dados={schemaTrilha(trilha)} />
      <JsonLd dados={schemaArtigo(a, caminho)} />
      <JsonLd dados={schemaFaq(a.faq)} />

      <div className="border-b border-marca-100 bg-marca-50/60">
        <div className="conteudo py-6">
          <Trilha itens={trilha} />
        </div>
      </div>

      <article className="conteudo pt-10 lg:pt-14">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-marca-600">
            <time dateTime={a.publicadoEm}>{formatarData(a.publicadoEm)}</time> ·{' '}
            {a.tempoLeitura} min de leitura
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-tinta-900 sm:text-4xl lg:text-[2.75rem]">
            {a.titulo}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-600">{a.resumo}</p>
        </header>

        <div className="prosa mt-10 max-w-3xl text-[1.0625rem]">
          {a.corpo.map((bloco, i) => (
            <Bloco key={i} bloco={bloco} />
          ))}
        </div>
      </article>

      {a.faq.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <div className="max-w-3xl">
            <Faq perguntas={a.faq} />
          </div>
        </section>
      )}

      {categoriasLigadas.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
            Categorias relacionadas
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoriasLigadas.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-marca-100 px-5 py-4 transition-all hover:border-marca-300 hover:shadow-md"
              >
                <span className="font-semibold text-tinta-900 group-hover:text-marca-700">
                  {c.nome}
                </span>
                <IconeSeta className="h-4 w-4 shrink-0 text-marca-600" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {produtosLigados.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
            Modelos citados neste artigo
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {produtosLigados.map((p) => (
              <CardProduto key={p.slug} produto={p} />
            ))}
          </div>
        </section>
      )}

      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl bg-marca-800 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Dúvida sobre a sua instalação?
            </h2>
            <p className="mt-3 text-marca-100">
              Fale direto com o fabricante. Avaliamos o layout da área e indicamos a configuração
              adequada.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <BotaoWhatsApp />
          </div>
        </div>
      </section>
    </>
  )
}

function Bloco({ bloco }: { bloco: BlocoArtigo }) {
  switch (bloco.tipo) {
    case 'h2':
      return (
        <h2 className="pt-6 text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
          {bloco.texto}
        </h2>
      )
    case 'h3':
      return <h3 className="pt-4 text-xl font-bold text-tinta-900">{bloco.texto}</h3>
    case 'p':
      return <p>{bloco.texto}</p>
    case 'ul':
      return (
        <ul className="space-y-2.5">
          {bloco.itens.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marca-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="space-y-3">
          {bloco.itens.map((item, i) => (
            <li key={item} className="flex gap-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marca-100 text-sm font-bold text-marca-800">
                {i + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      )
    case 'destaque':
      return (
        <aside className="rounded-xl border-l-4 border-marca-500 bg-marca-50 px-5 py-4 text-tinta-800">
          {bloco.texto}
        </aside>
      )
    case 'tabela':
      return (
        <div className="overflow-x-auto rounded-xl border border-marca-100">
          <table className="w-full min-w-2xl border-collapse text-sm">
            <thead>
              <tr className="bg-marca-700 text-left text-white">
                {bloco.cabecalho.map((col) => (
                  <th key={col} scope="col" className="px-4 py-3 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloco.linhas.map((linha, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-marca-50/60'}>
                  {linha.map((celula, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 align-top ${
                        j === 0 ? 'font-semibold text-tinta-900' : 'text-tinta-700'
                      }`}
                    >
                      {celula}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

function formatarData(iso: string): string {
  // Data fixa vinda dos dados — Intl direto, sem dependência de timezone.
  const [ano, mes, dia] = iso.split('-').map(Number)
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(
    new Date(Date.UTC(ano, mes - 1, dia)),
  )
}
