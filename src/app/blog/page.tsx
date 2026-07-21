import Link from 'next/link'
import type { Metadata } from 'next'
import { IconeSeta } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { Trilha } from '@/components/Trilha'
import { artigosRecentes } from '@/content/blog'
import { schemaTrilha, type ItemTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

/*
  O site nunca publicou um artigo — não existe post-sitemap.xml (auditoria C4).
  Toda a demanda de topo de funil ("o que exige a NBR 16291", "qual a vazão
  mínima", "com que frequência testar") vai inteira para os concorrentes.
  É esse conteúdo que constrói autoridade e faz as páginas de produto rankearem.
*/

export const metadata: Metadata = construirMetadata({
  title: 'Blog Técnico — Chuveiros e Lava-Olhos de Emergência | Yank',
  description:
    'Guias técnicos sobre chuveiros e lava-olhos de emergência: NBR 16291, escolha de material, tipo de acionamento, instalação e manutenção. Por um fabricante.',
  caminho: '/blog/',
})

const trilha: ItemTrilha[] = [
  { nome: 'Início', caminho: '/' },
  { nome: 'Blog', caminho: '/blog/' },
]

export default function PaginaBlog() {
  const [destaque, ...demais] = artigosRecentes

  return (
    <>
      <JsonLd dados={schemaTrilha(trilha)} />

      <div className="border-b border-marca-100 bg-marca-50/60">
        <div className="conteudo py-6">
          <Trilha itens={trilha} />
        </div>
      </div>

      <header className="conteudo pt-10 lg:pt-14">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl lg:text-5xl">
            Blog técnico
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-700">
            Norma, materiais, acionamento, instalação e manutenção de chuveiros e lava-olhos de
            emergência — escrito por quem fabrica o equipamento.
          </p>
        </div>
      </header>

      {destaque && (
        <section className="conteudo pt-10 lg:pt-12">
          <Link
            href={`/blog/${destaque.slug}/`}
            className="group block rounded-2xl border border-marca-100 bg-marca-50/60 p-7 transition-all hover:border-marca-300 hover:shadow-lg sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-marca-600">
              Em destaque · {destaque.tempoLeitura} min de leitura
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-tinta-900 group-hover:text-marca-700 sm:text-3xl">
              {destaque.titulo}
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-tinta-600">{destaque.resumo}</p>
            <p className="mt-5 inline-flex items-center gap-1.5 font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
              Ler artigo
              <IconeSeta />
            </p>
          </Link>
        </section>
      )}

      {demais.length > 0 && (
        <section className="conteudo pt-8">
          <h2 className="sr-only">Demais artigos</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {demais.map((a) => (
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
                <p className="mt-2 flex-1 leading-relaxed text-tinta-500">{a.resumo}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
                  Ler artigo
                  <IconeSeta className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl border border-marca-100 px-6 py-8 sm:px-10">
          <h2 className="text-xl font-bold text-tinta-900">Em preparação</h2>
          <p className="prosa mt-3 max-w-3xl">
            Próximos temas da pauta: vazão mínima exigida pela norma, onde instalar o equipamento
            (distância, altura e acesso), como fazer e registrar o teste semanal, quando o modelo
            portátil faz sentido, lava-olhos de bancada x de coluna e manutenção preventiva.
          </p>
        </div>
      </section>
    </>
  )
}
