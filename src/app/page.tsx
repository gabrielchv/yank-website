import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { CardProduto } from '@/components/CardProduto'
import { IconeCheck, IconeSeta } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { artigosRecentes } from '@/content/blog'
import { categorias } from '@/content/categorias'
import { imageManifest } from '@/content/image-manifest'
import { destaques, produtosDaCategoria } from '@/content/produtos'
import { schemaTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

/*
  A home antiga tinha como H1 "OS MAIS VENDIDOS" — 15 caracteres gastos sem
  nenhum termo de busca, e o schema declarava a página como `Article` com um
  autor pessoa. Aqui o H1 é o termo que a empresa precisa disputar, e o schema
  institucional vive no layout raiz.
*/

export const metadata: Metadata = construirMetadata({
  title: 'Chuveiro e Lava Olhos de Emergência | Fabricante — Yank EPC',
  description:
    'Fabricante de chuveiros e lava-olhos de emergência há mais de 30 anos. Equipamentos em aço inox conforme a ABNT NBR 16291. Solicite seu orçamento.',
  caminho: '/',
})

const hero = imageManifest.hero

const diferenciais = [
  { titulo: 'Fabricante, não revenda', texto: 'Produção própria em Itatiba/SP' },
  { titulo: '+30 anos de mercado', texto: 'Antiga Yank Metalúrgica Ltda' },
  { titulo: 'Certificação SGS', texto: 'Sistema de qualidade ISO 9001' },
  { titulo: 'Conforme NBR 16291', texto: 'E referência ANSI/ISEA Z358.1' },
]

export default function Home() {
  return (
    <>
      <JsonLd dados={schemaTrilha([{ nome: 'Início', caminho: '/' }])} />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative overflow-hidden bg-marca-900">
        <Image
          src={hero.src}
          alt=""
          width={hero.width}
          height={hero.height}
          priority
          fetchPriority="high"
          sizes="100vw"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="conteudo relative py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-marca-800/80 px-3 py-1 text-sm font-medium text-marca-100 ring-1 ring-inset ring-marca-700">
              Fabricante há mais de 30 anos · Itatiba/SP
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Chuveiro e Lava-Olhos de Emergência
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-marca-100 sm:text-xl">
              Equipamentos de proteção coletiva fabricados em aço inox AISI 304, PVC e aço
              galvanizado, conforme a ABNT NBR 16291. Três décadas protegendo quem trabalha com
              produto químico.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BotaoWhatsApp />
              <Link
                href="/chuveiros-e-lava-olhos-de-emergencia/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/20"
              >
                Ver catálogo
                <IconeSeta />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- barra de prova */}
      <section aria-label="Diferenciais" className="border-b border-marca-100 bg-marca-50">
        <div className="conteudo grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <div key={item.titulo} className="flex gap-3">
              <IconeCheck className="mt-0.5 h-5 w-5 shrink-0 text-marca-600" />
              <div>
                <p className="text-sm font-semibold text-tinta-900">{item.titulo}</p>
                <p className="text-sm text-tinta-500">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- categorias */}
      <section className="conteudo py-16 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl">
            Linha completa de equipamentos de emergência
          </h2>
          <p className="prosa mt-4 text-lg">
            Da coluna conjugada em aço inox ao lava-olhos de bancada, do modelo automático por
            plataforma ao equipamento autônomo para frentes sem rede hidráulica.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c) => {
            const qtd = produtosDaCategoria(c.slug).length
            return (
              <Link
                key={c.slug}
                href={`/${c.slug}/`}
                className="group flex flex-col rounded-xl border border-marca-100 bg-white p-6 transition-all hover:border-marca-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-tinta-900 group-hover:text-marca-700">
                  {c.nome}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tinta-500">{c.resumo}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
                  {qtd} {qtd === 1 ? 'modelo' : 'modelos'}
                  <IconeSeta className="h-4 w-4" />
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* -------------------------------------------------------- destaques */}
      <section className="bg-marca-50/60 py-16 lg:py-20">
        <div className="conteudo">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl">
                Os mais especificados
              </h2>
              <p className="prosa mt-3">
                Os modelos que mais aparecem em projeto industrial — e por quê.
              </p>
            </div>
            <Link
              href="/chuveiros-e-lava-olhos-de-emergencia/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 hover:gap-2.5 motion-safe:transition-all"
            >
              Ver todos os modelos
              <IconeSeta className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destaques.map((p) => (
              <CardProduto key={p.slug} produto={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- empresa */}
      <section className="conteudo py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl">
              Compromisso com a segurança há mais de 30 anos
            </h2>
            <div className="prosa mt-5">
              <p>
                A Yank EPC, anteriormente Yank Metalúrgica Ltda, desenvolve chuveiros e lava-olhos
                de emergência para ambientes industriais há mais de três décadas. Somos{' '}
                <strong>fabricante</strong> — o equipamento é projetado, produzido e montado aqui,
                em Itatiba/SP.
              </p>
              <p>
                Isso muda o que conseguimos oferecer: configuração fora do padrão de catálogo,
                material escolhido pelo agente químico da sua área, e resposta técnica de quem
                construiu a peça — não de quem apenas a revende.
              </p>
              <p>
                Nosso sistema de qualidade é certificado pela SGS e alinhado à ISO 9001, e os
                equipamentos seguem a ABNT NBR 16291:2014, com referência à ANSI/ISEA Z358.1.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/a-empresa/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-marca-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-marca-800"
              >
                Conheça a empresa
                <IconeSeta />
              </Link>
              <BotaoWhatsApp variante="secundario">Falar com um especialista</BotaoWhatsApp>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-marca-100">
            <Image
              src={imageManifest.empresa.src}
              alt="Fábrica da Yank EPC em Itatiba, São Paulo, onde os chuveiros e lava-olhos de emergência são produzidos"
              width={imageManifest.empresa.width}
              height={imageManifest.empresa.height}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- blog */}
      <section className="border-t border-marca-100 py-16 lg:py-20">
        <div className="conteudo">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl">
                Antes de especificar
              </h2>
              <p className="prosa mt-3">
                Norma, material e acionamento explicados por quem fabrica o equipamento.
              </p>
            </div>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 hover:gap-2.5 motion-safe:transition-all"
            >
              Todos os artigos
              <IconeSeta className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {artigosRecentes.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}/`}
                className="group flex flex-col rounded-xl border border-marca-100 p-6 transition-all hover:border-marca-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-marca-600">
                  {a.tempoLeitura} min de leitura
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-tinta-900 group-hover:text-marca-700">
                  {a.titulo}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-tinta-500">{a.resumo}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
                  Ler artigo
                  <IconeSeta className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- cta */}
      <section className="bg-marca-800">
        <div className="conteudo flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Precisa de ajuda para especificar o equipamento certo?
            </h2>
            <p className="mt-3 text-marca-100">
              Envie o agente químico, o layout da área e as condições da rede. Como fabricante,
              conseguimos apontar onde a especificação não vai fechar antes de o equipamento ser
              instalado.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <BotaoWhatsApp />
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/20"
            >
              Outros contatos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
