import Link from 'next/link'
import type { ItemTrilha } from '@/lib/schema-org'

/**
 * Breadcrumbs visíveis. A auditoria (A2) aponta a ausência de BreadcrumbList —
 * o schema correspondente é emitido junto, pelas páginas.
 *
 * O último item não é link: é a página atual.
 */
export function Trilha({ itens }: { itens: ItemTrilha[] }) {
  return (
    <nav aria-label="Você está aqui" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-tinta-500">
        {itens.map((item, i) => {
          const ultimo = i === itens.length - 1
          return (
            <li key={item.caminho} className="flex items-center gap-2">
              {ultimo ? (
                <span aria-current="page" className="text-tinta-700">
                  {item.nome}
                </span>
              ) : (
                <>
                  <Link href={item.caminho} className="transition-colors hover:text-marca-700">
                    {item.nome}
                  </Link>
                  <span aria-hidden="true" className="text-tinta-300">
                    /
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
