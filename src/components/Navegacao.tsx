'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BotaoWhatsApp, LinkRastreado } from './BotaoWhatsApp'
import { IconeTelefone } from './Icones'

/**
 * Navegação interativa — a ÚNICA parte do cabeçalho que vira JavaScript.
 *
 * Recebe os links já prontos por props, de propósito: se este arquivo
 * importasse `@/content/categorias`, o Zod e todo o texto das categorias
 * entrariam no bundle do navegador. Foi exatamente o que aconteceu na primeira
 * versão — 304 KB de chunk cliente por causa de um import mal colocado.
 *
 * Regra para manter: nada de `@/content/*` validado por Zod dentro de arquivo
 * marcado com 'use client'.
 */

export type Link = { href: string; label: string }

type Props = {
  institucionais: Link[]
  categorias: Link[]
  finais: Link[]
  telefone: { href: string; exibicao: string }
}

export function Navegacao({ institucionais, categorias, finais, telefone }: Props) {
  const [aberto, setAberto] = useState(false)
  const caminho = usePathname()

  const fechar = () => setAberto(false)

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!aberto) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  const ativo = (href: string) => caminho === href || caminho.startsWith(href)
  const todos = [...institucionais, ...categorias, ...finais]

  return (
    <>
      <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
        {todos.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={ativo(l.href) ? 'page' : undefined}
            className={`rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
              ativo(l.href)
                ? 'bg-marca-50 text-marca-800'
                : 'text-tinta-700 hover:bg-marca-50 hover:text-marca-800'
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <BotaoWhatsApp variante="compacto" className="hidden sm:inline-flex">
          Orçamento
        </BotaoWhatsApp>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-tinta-700 hover:bg-marca-50 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {aberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-mobile"
          aria-label="Principal (mobile)"
          className="absolute inset-x-0 top-full border-t border-marca-100 bg-white shadow-lg lg:hidden"
        >
          <div className="conteudo max-h-[calc(100dvh-4rem)] overflow-y-auto py-3">
            {institucionais.map((l) => (
              <ItemMobile key={l.href} href={l.href} aoNavegar={fechar}>
                {l.label}
              </ItemMobile>
            ))}

            <p className="px-1 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-tinta-500">
              Produtos
            </p>
            {categorias.map((l) => (
              <ItemMobile key={l.href} href={l.href} aoNavegar={fechar}>
                {l.label}
              </ItemMobile>
            ))}

            <div className="mt-4 border-t border-marca-100 pt-3">
              {finais.map((l) => (
                <ItemMobile key={l.href} href={l.href} aoNavegar={fechar}>
                  {l.label}
                </ItemMobile>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2 pb-2">
              <BotaoWhatsApp variante="primario" />
              <LinkRastreado
                href={telefone.href}
                evento="phone_click"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-marca-800 ring-1 ring-inset ring-marca-200"
              >
                <IconeTelefone className="h-5 w-5" />
                {telefone.exibicao}
              </LinkRastreado>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

/*
  Fecha o menu no próprio clique, e não num efeito que observa a rota: assim o
  overlay some imediatamente, sem render em cascata (react-hooks/set-state-in-effect).
*/
function ItemMobile({
  href,
  aoNavegar,
  children,
}: {
  href: string
  aoNavegar: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={aoNavegar}
      className="block rounded-lg px-1 py-3 text-base font-medium text-tinta-900 hover:bg-marca-50"
    >
      {children}
    </Link>
  )
}
