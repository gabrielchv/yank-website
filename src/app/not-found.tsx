import Link from 'next/link'
import type { Metadata } from 'next'
import { IconeSeta } from '@/components/Icones'
import { categorias } from '@/content/categorias'

export const metadata: Metadata = {
  title: 'Página não encontrada | Yank EPC',
  robots: { index: false, follow: true },
}

export default function NaoEncontrada() {
  return (
    <div className="conteudo flex flex-col items-center py-20 text-center lg:py-28">
      <p className="text-sm font-semibold uppercase tracking-wider text-marca-600">Erro 404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-tinta-900 sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-xl text-lg text-tinta-600">
        O endereço acessado não existe ou foi movido. Abaixo estão as linhas de equipamentos de
        emergência da Yank EPC.
      </p>

      <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
        {categorias.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}/`}
            className="group flex items-center justify-between gap-3 rounded-xl border border-marca-100 px-5 py-4 text-left transition-all hover:border-marca-300 hover:shadow-md"
          >
            <span className="font-semibold text-tinta-900 group-hover:text-marca-700">
              {c.nome}
            </span>
            <IconeSeta className="h-4 w-4 shrink-0 text-marca-600" />
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-marca-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-marca-800"
      >
        Voltar à página inicial
      </Link>
    </div>
  )
}
