import type { Metadata } from 'next'
import { BotaoWhatsApp, LinkRastreado } from '@/components/BotaoWhatsApp'
import { IconeEmail, IconeLocal, IconeTelefone } from '@/components/Icones'
import { JsonLd } from '@/components/JsonLd'
import { Trilha } from '@/components/Trilha'
import { empresa, enderecoLinha, linkEmail, linkTelefone } from '@/content/empresa'
import { schemaTrilha, type ItemTrilha } from '@/lib/schema-org'
import { construirMetadata } from '@/lib/seo'

/*
  A página de contato antiga tinha 115 palavras, um H1 e nada mais — nem o
  endereço estruturado, nem horário, nem qualquer orientação sobre o que
  informar num pedido de orçamento.

  O NAP aqui vem do mesmo objeto que alimenta o JSON-LD de LocalBusiness, então
  site e schema não têm como divergir.
*/

export const metadata: Metadata = construirMetadata({
  title: 'Contato — Orçamento de Chuveiro de Emergência | Yank EPC',
  description:
    'Fale com a Yank EPC em Itatiba/SP. Orçamento de chuveiros e lava-olhos de emergência por WhatsApp, telefone ou e-mail. Atendimento de segunda a sexta.',
  caminho: '/contato/',
})

const trilha: ItemTrilha[] = [
  { nome: 'Início', caminho: '/' },
  { nome: 'Contato', caminho: '/contato/' },
]

const mapaUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${empresa.endereco.logradouro}, ${empresa.endereco.bairro}, ${empresa.endereco.cidade} - ${empresa.endereco.estado}, ${empresa.endereco.cep}`,
)}`

const paraAgilizar = [
  'O modelo ou a categoria de equipamento de interesse',
  'O agente químico manipulado na área',
  'Material desejado: aço inox, PVC ou galvanizado',
  'Bitola e pressão disponíveis na rede',
  'Quantidade e cidade de entrega',
]

export default function PaginaContato() {
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
            Contato e orçamento
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-700">
            Fale direto com o fabricante. Respondemos dúvidas técnicas, avaliamos o layout da área
            e enviamos orçamento de chuveiros e lava-olhos de emergência.
          </p>
        </div>
      </header>

      <section className="conteudo pt-10 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <a
            href={linkEmail}
            className="group rounded-xl border border-marca-100 p-6 transition-all hover:border-marca-300 hover:shadow-md"
          >
            <IconeEmail className="h-6 w-6 text-marca-600" />
            <h2 className="mt-4 text-lg font-bold text-tinta-900">E-mail</h2>
            <p className="mt-1 break-all text-marca-700 group-hover:underline">{empresa.email}</p>
            <p className="mt-2 text-sm text-tinta-500">
              Melhor canal para envio de projeto, planta da área e pedidos com muitos itens.
            </p>
          </a>

          <LinkRastreado
            href={linkTelefone}
            evento="phone_click"
            className="group rounded-xl border border-marca-100 p-6 transition-all hover:border-marca-300 hover:shadow-md"
          >
            <IconeTelefone className="h-6 w-6 text-marca-600" />
            <h2 className="mt-4 text-lg font-bold text-tinta-900">Telefone</h2>
            <p className="mt-1 text-marca-700 group-hover:underline">{empresa.telefone.exibicao}</p>
            <p className="mt-2 text-sm text-tinta-500">
              {empresa.horario.dias}, das {empresa.horario.abre} às {empresa.horario.fecha}.
            </p>
          </LinkRastreado>

          <div className="rounded-xl border border-marca-100 bg-marca-50/60 p-6">
            <h2 className="text-lg font-bold text-tinta-900">WhatsApp</h2>
            <p className="mt-2 text-sm text-tinta-600">
              O canal mais rápido para orçamento. A mensagem já vai preenchida.
            </p>
            <div className="mt-4">
              <BotaoWhatsApp />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- endereço e o que enviar */}
      <section className="conteudo pt-14 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
              Onde estamos
            </h2>
            <address className="mt-5 not-italic">
              <p className="flex gap-3 text-lg text-tinta-700">
                <IconeLocal className="mt-1 h-6 w-6 shrink-0 text-marca-600" />
                <span>
                  <strong className="block font-semibold text-tinta-900">{empresa.nomeLegal}</strong>
                  {enderecoLinha}
                </span>
              </p>
            </address>
            <a
              href={mapaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-marca-800 ring-1 ring-inset ring-marca-200 transition-colors hover:bg-marca-50"
            >
              Ver no Google Maps
            </a>

            <div className="mt-8 rounded-xl border border-marca-100 p-6">
              <h3 className="text-base font-bold text-tinta-900">Horário de atendimento</h3>
              <p className="mt-2 text-tinta-700">
                {empresa.horario.dias}
                <br />
                das {empresa.horario.abre} às {empresa.horario.fecha}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
              O que informar para agilizar o orçamento
            </h2>
            <p className="prosa mt-4">
              Quanto mais completo o pedido, mais rápido conseguimos responder com a configuração
              correta em vez de uma rodada de perguntas.
            </p>
            <ol className="mt-6 space-y-3">
              {paraAgilizar.map((item, i) => (
                <li key={item} className="flex gap-3.5 text-tinta-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marca-100 text-sm font-bold text-marca-800">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="conteudo pt-14 lg:pt-16">
        <div className="rounded-2xl bg-marca-800 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Pronto para solicitar um orçamento?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-marca-100">
            Envie sua necessidade pelo WhatsApp e receba a configuração adequada à sua área.
          </p>
          <div className="mt-7 flex justify-center">
            <BotaoWhatsApp />
          </div>
        </div>
      </section>
    </>
  )
}
