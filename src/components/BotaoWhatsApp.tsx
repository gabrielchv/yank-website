'use client'

import { linkWhatsApp } from '@/content/empresa'
import { registrarEvento } from './Analytics'
import { IconeWhatsApp } from './Icones'

/**
 * CTA de orçamento.
 *
 * A mensagem já vai com o modelo preenchido — no site atual todos os botões
 * apontam para o mesmo wa.me genérico, então a Yank recebe "quero um
 * orçamento" sem saber de qual equipamento a pessoa estava falando.
 *
 * O clique dispara evento no GA4, que é o que torna a conversão mensurável
 * (auditoria, Fase 4).
 */

type Props = {
  /** Código do modelo, ex.: 'CLM-E AI'. Sem isso, usa a mensagem genérica. */
  contexto?: string
  variante?: 'primario' | 'secundario' | 'compacto'
  className?: string
  children?: React.ReactNode
}

const estilos = {
  primario:
    'bg-alerta-500 text-white hover:bg-alerta-600 px-6 py-3.5 text-base font-semibold shadow-sm',
  secundario:
    'bg-white text-marca-800 ring-1 ring-inset ring-marca-200 hover:bg-marca-50 px-6 py-3.5 text-base font-semibold',
  compacto:
    'bg-marca-700 text-white hover:bg-marca-800 px-4 py-2.5 text-sm font-semibold',
}

export function BotaoWhatsApp({
  contexto,
  variante = 'primario',
  className = '',
  children,
}: Props) {
  return (
    <a
      href={linkWhatsApp(contexto)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => registrarEvento('whatsapp_click', { modelo: contexto ?? 'geral' })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition-colors ${estilos[variante]} ${className}`}
    >
      <IconeWhatsApp className="h-5 w-5 shrink-0" />
      {children ?? 'Solicitar orçamento'}
    </a>
  )
}

/** Link simples de telefone/e-mail com rastreio, para header e rodapé. */
export function LinkRastreado({
  href,
  evento,
  className = '',
  children,
}: {
  href: string
  evento: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a href={href} onClick={() => registrarEvento(evento)} className={className}>
      {children}
    </a>
  )
}
