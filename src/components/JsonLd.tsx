/**
 * Injeta JSON-LD no HTML estático.
 *
 * Server component: o script sai pronto no HTML gerado, sem custo de runtime
 * e sem depender de JavaScript no cliente para o Google enxergar.
 */
export function JsonLd({ dados }: { dados: Record<string, unknown> | null }) {
  if (!dados) return null
  return (
    <script
      type="application/ld+json"
      // O conteúdo é gerado por nós, nunca vem de input do usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, '\\u003c') }}
    />
  )
}
