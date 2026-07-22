import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { IconeCheck, IconeSeta } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { Trilha } from '@/components/Trilha'
import { categorias } from '@/content/categorias'
import { empresa } from '@/content/empresa'
import { imageManifest } from '@/content/image-manifest'
import { schemaTrilha, type ItemTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

export const metadata: Metadata = construirMetadata({
  title: 'A Empresa — Fabricante desde 1995 | Yank EPC',
  description:
    'Yank EPC, antiga Yank Metalúrgica: fabricante de chuveiros e lava-olhos de emergência em Itatiba/SP desde 1995. Fabricação própria e montada.',
  caminho: '/a-empresa/',
})

const trilha: ItemTrilha[] = [
  { nome: 'Início', caminho: '/' },
  { nome: 'A Empresa', caminho: '/a-empresa/' },
]

/*
  Só normas que o catálogo do fabricante declara. O site antigo listava também
  "DIN" e "Diretivas da União Europeia", sem indicar qual norma DIN ou qual
  diretiva — claim genérico e não verificável, removido.
*/
const normas = ['ABNT NBR 16291:2014', 'ANSI/ISEA Z358.1-2014 (R2020)', 'NR-26 e ABNT NBR 7195']

const materiais = ['Aço inox AISI 304', 'PVC', 'Aço galvanizado com pintura verde']

const configuracoes = [
  'Manuais e semiautomáticos',
  'Automáticos por plataforma',
  'Isolados e conjugados',
  'Transportáveis autônomos',
  'Projetos especiais sob medida',
]

export default function PaginaEmpresa() {
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
            Fabricante de equipamentos de emergência desde 1995
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-700">
            A {empresa.nome}, anteriormente conhecida como {empresa.nomeAnterior}, é referência no
            desenvolvimento de chuveiros e lava-olhos de emergência para ambientes industriais.
          </p>
        </div>
      </header>

      <section className="conteudo pt-10 lg:pt-12">
        <div className="overflow-hidden rounded-2xl border border-marca-100">
          <Image
            src={imageManifest.empresa.src}
            alt="Instalações da Yank EPC em Itatiba, São Paulo, onde são fabricados os chuveiros e lava-olhos de emergência"
            width={imageManifest.empresa.width}
            height={imageManifest.empresa.height}
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="conteudo pt-14 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          <div className="prosa max-w-none text-[1.0625rem] lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
              Qualidade e segurança para a sua operação
            </h2>
            <p>
              Com mais de três décadas de experiência no desenvolvimento de chuveiros e lava-olhos
              de emergência, a {empresa.nome} atende o mercado industrial onde a exigência é
              resposta imediata em situação de risco. Nossa missão é oferecer soluções que garantam
              qualidade, durabilidade e funcionalidade para empresas que levam a sério o cuidado
              com seus colaboradores.
            </p>
            <p>
              Todos os produtos são fabricados sob controle de qualidade em todas as etapas, e saem
              da fábrica montados e prontos para instalação. Mais do que equipamentos, entregamos
              soluções confiáveis para ambientes industriais que exigem ação em segundos.
            </p>

            <h3 className="pt-4 text-xl font-bold text-tinta-900">
              Ser fabricante muda o que conseguimos oferecer
            </h3>
            <p>
              Boa parte de quem vende chuveiro e lava-olhos de emergência no Brasil é revenda. A
              diferença aparece quando a sua área não cabe no catálogo: um agente químico que ataca
              o inox, uma rede com pressão limitada, uma altura de instalação fora do padrão, uma
              exigência de integração com o alarme da planta.
            </p>
            <p>
              Como projetamos e produzimos o equipamento aqui em Itatiba, conseguimos ajustar
              material, bitola, altura, tipo de acionamento e recursos de monitoramento à condição
              real da operação — e dizer com antecedência quando a especificação não vai fechar.
              Isso é bem mais barato de descobrir antes da instalação.
            </p>

            <h3 className="pt-4 text-xl font-bold text-tinta-900">Linha de produtos</h3>
            <p>
              Oferecemos uma linha diversificada e personalizável de chuveiros de emergência,
              lava-olhos e equipamentos conjugados, em configurações que cobrem desde o laboratório
              de bancada até a frente de trabalho sem rede hidráulica.
            </p>
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-marca-100 bg-marca-50/60 p-6">
              <h3 className="text-base font-bold text-tinta-900">Normas atendidas</h3>
              <ul className="mt-4 space-y-2 text-sm text-tinta-700">
                {normas.map((n) => (
                  <li key={n} className="flex gap-2.5">
                    <IconeCheck className="mt-0.5 h-4 w-4 shrink-0 text-marca-600" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-marca-100 p-6">
              <h3 className="text-base font-bold text-tinta-900">Materiais</h3>
              <ul className="mt-4 space-y-2 text-sm text-tinta-700">
                {materiais.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marca-500" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-marca-100 p-6">
              <h3 className="text-base font-bold text-tinta-900">Configurações</h3>
              <ul className="mt-4 space-y-2 text-sm text-tinta-700">
                {configuracoes.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marca-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* --------------------------------------- missão, visão e valores */}
      <section className="conteudo pt-14 lg:pt-16">
        <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
          Missão, visão e valores
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { titulo: 'Missão', texto: empresa.missao },
            { titulo: 'Visão', texto: empresa.visao },
            { titulo: 'Valores', texto: empresa.valores },
          ].map((bloco) => (
            <div key={bloco.titulo} className="rounded-xl border border-marca-100 p-6">
              <h3 className="text-lg font-bold text-marca-700">{bloco.titulo}</h3>
              <p className="mt-3 leading-relaxed text-tinta-700">{bloco.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- catálogo */}
      <section className="conteudo pt-14 lg:pt-16">
        <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
          Conheça a linha completa
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c) => (
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

      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl bg-marca-800 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Fale com quem fabrica o equipamento
            </h2>
            <p className="mt-3 text-marca-100">
              Nosso time responde dúvidas técnicas, avalia layout e desenvolve configurações sob
              medida para a sua operação.
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
