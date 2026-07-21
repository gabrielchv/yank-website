import type { Produto } from '@/content/schema'

/**
 * Faixa de aviso em páginas com dado provisório.
 *
 * Só aparece quando o produto está como 'draft' — o que, em produção, é
 * impossível: o build falha antes (scripts/check-data.ts). Ela existe para
 * dev e preview, deixando explícito na tela o que ainda é mock, de modo que
 * ninguém avalie o layout achando que os números já são reais.
 */
export function AvisoRascunho({ produto }: { produto: Produto }) {
  if (produto.dataStatus !== 'draft') return null

  const pendentes = produto.especificacoes.filter((e) => e.provisorio).length
  const partes = [
    pendentes > 0 ? `${pendentes} especificaç${pendentes === 1 ? 'ão' : 'ões'}` : null,
    produto.preco !== undefined ? 'preço' : null,
  ].filter(Boolean)

  return (
    <div
      role="status"
      className="rounded-lg border border-alerta-500/30 bg-alerta-500/5 px-4 py-3 text-sm text-alerta-600"
    >
      <strong className="font-semibold">Dados provisórios nesta página.</strong>{' '}
      {partes.length > 0
        ? `${partes.join(' e ')} ainda não ${partes.length > 1 ? 'foram conferidos' : 'foi conferido'} no catálogo.`
        : 'Este produto ainda não foi marcado como conferido.'}{' '}
      O build de produção fica bloqueado até que sejam preenchidos e{' '}
      <code className="rounded bg-alerta-500/10 px-1 py-0.5 font-mono text-xs">dataStatus</code>{' '}
      vire <code className="rounded bg-alerta-500/10 px-1 py-0.5 font-mono text-xs">verified</code>.
    </div>
  )
}
