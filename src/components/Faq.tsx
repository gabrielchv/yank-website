import type { Faq as TipoFaq } from '@/content/schema'

/**
 * FAQ com <details>/<summary> nativos.
 *
 * Sem JavaScript: o navegador já sabe abrir e fechar, o conteúdo está no HTML
 * desde o primeiro byte (o Google lê tudo, aberto ou fechado) e não há custo
 * de hidratação. Um acordeão em React aqui seria 3 KB de JS para reimplementar
 * pior o que a plataforma faz de graça.
 */
export function Faq({ perguntas, titulo = 'Perguntas frequentes' }: { perguntas: TipoFaq[]; titulo?: string }) {
  if (perguntas.length === 0) return null

  return (
    <section aria-labelledby="faq-titulo">
      <h2 id="faq-titulo" className="text-2xl font-bold tracking-tight text-tinta-900 sm:text-3xl">
        {titulo}
      </h2>
      <div className="mt-6 divide-y divide-marca-100 border-y border-marca-100">
        {perguntas.map((f) => (
          <details key={f.pergunta} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-tinta-900 marker:hidden [&::-webkit-details-marker]:hidden">
              {f.pergunta}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-marca-600 transition-transform group-open:rotate-45"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </summary>
            <p className="prosa mt-3 pr-9 text-[0.95rem]">{f.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
