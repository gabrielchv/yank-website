import type { Especificacao } from '@/content/schema'

/**
 * Tabela de especificações técnicas.
 *
 * Renderiza apenas as linhas que existem — nunca uma célula vazia. Valores
 * ainda provisórios recebem marcação visível: em produção eles não chegam a
 * ser renderizados (o build falha antes, ver scripts/check-data.ts), então
 * essa marcação só aparece em dev e preview, para quem está preenchendo os
 * dados enxergar o que falta.
 */
export function TabelaEspecificacoes({ itens }: { itens: Especificacao[] }) {
  if (itens.length === 0) return null

  return (
    <div className="overflow-x-auto rounded-xl border border-marca-100">
      <table className="w-full min-w-md border-collapse text-sm">
        <caption className="sr-only">Especificações técnicas do equipamento</caption>
        <tbody>
          {itens.map((e, i) => (
            <tr
              key={e.label}
              className={i % 2 === 0 ? 'bg-white' : 'bg-marca-50/60'}
            >
              <th
                scope="row"
                className="w-2/5 px-4 py-3 text-left align-top font-medium text-tinta-700"
              >
                {e.label}
              </th>
              <td className="px-4 py-3 align-top text-tinta-900">
                {e.valor}
                {e.provisorio && (
                  <span
                    className="ml-2 whitespace-nowrap rounded bg-alerta-500/10 px-1.5 py-0.5 text-xs font-semibold text-alerta-600"
                    title="Valor provisório — não publicado até ser conferido no catálogo"
                  >
                    provisório
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
