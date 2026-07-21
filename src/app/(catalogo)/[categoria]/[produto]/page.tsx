import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AvisoRascunho } from '@/components/AvisoRascunho'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { CardProduto } from '@/components/CardProduto'
import { Faq } from '@/components/Faq'
import { IconeCheck, IconeSeta } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { TabelaEspecificacoes } from '@/components/TabelaEspecificacoes'
import { Trilha } from '@/components/Trilha'
import { artigosPorSlugs } from '@/content/blog'
import { getCategoria } from '@/content/categorias'
import { imageManifest } from '@/content/image-manifest'
import {
  especificacoesVisiveis,
  getProduto,
  getRelacionados,
  precoParaExibicao,
  produtos,
} from '@/content/produtos'
import { schemaFaq, schemaProduto, schemaTrilha, type ItemTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

/*
  A página que resolve a queixa da auditoria.

  Hoje cada produto é só um <h2> com o código do modelo dentro da página de
  categoria — não existe URL para o Google indexar, rankear ou mostrar (C1).
  Aqui cada modelo tem URL própria, H1 com o termo de busca antes do código,
  tabela de especificações, aplicações, conformidade, FAQ e schema Product.
*/

export const dynamicParams = false

export function generateStaticParams() {
  return produtos.map((p) => ({ categoria: p.categoria, produto: p.slug }))
}

type Props = { params: Promise<{ categoria: string; produto: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { produto } = await params
  const p = getProduto(produto)
  if (!p) return {}

  return construirMetadata({
    title: p.titleSeo,
    description: p.metaDescription,
    caminho: `/${p.categoria}/${p.slug}/`,
    imagem: `/produtos/${p.imagens[0].chave}.webp`,
  })
}

export default async function PaginaProduto({ params }: Props) {
  const { categoria, produto } = await params
  const p = getProduto(produto)
  if (!p || p.categoria !== categoria) notFound()

  const c = getCategoria(p.categoria)
  if (!c) notFound()

  const caminho = `/${p.categoria}/${p.slug}/`
  const img = imageManifest[p.imagens[0].chave as keyof typeof imageManifest]
  const specs = especificacoesVisiveis(p)
  const preco = precoParaExibicao(p)
  const relacionados = getRelacionados(p)
  const artigos = artigosPorSlugs(p.artigos)

  const trilha: ItemTrilha[] = [
    { nome: 'Início', caminho: '/' },
    { nome: c.nome, caminho: `/${c.slug}/` },
    { nome: p.nomeCurto, caminho },
  ]

  return (
    <>
      <JsonLd dados={schemaTrilha(trilha)} />
      <JsonLd dados={schemaProduto(p, caminho)} />
      <JsonLd dados={schemaFaq(p.faq)} />

      <div className="border-b border-marca-100 bg-marca-50/60">
        <div className="conteudo py-6">
          <Trilha itens={trilha} />
        </div>
      </div>

      {/* ----------------------------------------------------------- topo */}
      <div className="conteudo grid gap-10 pt-10 lg:grid-cols-2 lg:gap-14 lg:pt-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-marca-100 bg-marca-50">
            {img && (
              <Image
                src={img.src}
                alt={p.imagens[0].alt}
                width={img.width}
                height={img.height}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full object-contain p-6"
              />
            )}
          </div>
        </div>

        <div>
          <p className="inline-flex items-center rounded-md bg-marca-700 px-2.5 py-1 text-sm font-semibold tracking-wide text-white">
            {p.codigo}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-tinta-900 sm:text-4xl">
            {p.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-700">{p.resumo}</p>

          <ul className="mt-7 space-y-2.5">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-tinta-700">
                <IconeCheck className="mt-0.5 h-5 w-5 shrink-0 text-marca-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {preco && (
            <div className="mt-7 rounded-xl border border-marca-100 bg-marca-50/60 px-5 py-4">
              <p className="text-sm text-tinta-500">A partir de</p>
              <p className="mt-1 flex items-baseline gap-2 text-3xl font-bold text-tinta-900">
                {preco.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                {preco.provisorio && (
                  <span className="rounded bg-alerta-500/10 px-1.5 py-0.5 text-xs font-semibold text-alerta-600">
                    provisório
                  </span>
                )}
              </p>
              <p className="mt-1 text-sm text-tinta-500">
                Valor sob consulta conforme material, bitola e configuração.
              </p>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BotaoWhatsApp contexto={p.codigo} />
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-marca-800 ring-1 ring-inset ring-marca-200 transition-colors hover:bg-marca-50"
            >
              Outros contatos
            </Link>
          </div>

          <div className="mt-6">
            <AvisoRascunho produto={p} />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- descrição */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
            Sobre o {p.nomeCurto}
          </h2>
          <div className="prosa mt-5 text-[1.0625rem]">
            {p.descricao.map((par, i) => (
              <p key={i}>{par}</p>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- especificações */}
      {specs.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
              Especificações técnicas
            </h2>
            <div className="mt-6">
              <TabelaEspecificacoes itens={specs} />
            </div>
          </div>
        </section>
      )}

      {/* ---------------------------------- aplicações / itens / opcionais */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-tinta-900">Aplicações</h2>
            <ul className="mt-4 space-y-2 text-tinta-700">
              {p.aplicacoes.map((a) => (
                <li key={a} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marca-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {p.itensInclusos.length > 0 && (
            <div>
              <h2 className="text-xl font-bold tracking-tight text-tinta-900">Itens inclusos</h2>
              <ul className="mt-4 space-y-2 text-tinta-700">
                {p.itensInclusos.map((a) => (
                  <li key={a} className="flex gap-2.5">
                    <IconeCheck className="mt-0.5 h-5 w-5 shrink-0 text-marca-600" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {p.opcionais.length > 0 && (
            <div>
              <h2 className="text-xl font-bold tracking-tight text-tinta-900">Opcionais</h2>
              <ul className="mt-4 space-y-2 text-tinta-700">
                {p.opcionais.map((a) => (
                  <li key={a} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marca-300" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ----------------------------------------------------- conformidade */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl border border-marca-100 bg-marca-50/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900">Conformidade</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {p.conformidade.map((item) => (
              <li key={item} className="flex gap-3 text-tinta-700">
                <IconeCheck className="mt-0.5 h-5 w-5 shrink-0 text-marca-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------- faq */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="max-w-3xl">
          <Faq perguntas={p.faq} />
        </div>
      </section>

      {/* ------------------------------------------------------ relacionados */}
      {relacionados.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
            Modelos relacionados
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((r) => (
              <CardProduto key={r.slug} produto={r} />
            ))}
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------- artigos */}
      {artigos.length > 0 && (
        <section className="conteudo pt-14 lg:pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
            Leituras relacionadas
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {artigos.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}/`}
                className="group flex flex-col rounded-xl border border-marca-100 p-5 transition-all hover:border-marca-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-marca-600">
                  {a.tempoLeitura} min de leitura
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-tinta-900 group-hover:text-marca-700">
                  {a.titulo}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-tinta-500">{a.resumo}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
                  Ler artigo
                  <IconeSeta className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------- cta */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl bg-marca-800 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Orçamento do {p.nomeCurto}
            </h2>
            <p className="mt-3 text-marca-100">
              A mensagem já vai com o modelo preenchido. Informe material, bitola e quantidade para
              agilizarmos a resposta.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <BotaoWhatsApp contexto={p.codigo} />
          </div>
        </div>
      </section>
    </>
  )
}
