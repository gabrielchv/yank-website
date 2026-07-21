import Image from 'next/image'
import Link from 'next/link'
import { imageManifest } from '@/content/image-manifest'
import type { Produto } from '@/content/schema'
import { IconeSeta } from './Icones'

/**
 * Card de produto para os hubs de categoria e a home.
 *
 * O título visível é o nome real do equipamento, com o código do modelo como
 * apoio — exatamente o inverso do site atual, onde o card era um <h2> com
 * "CLM-E AI" e nada mais (auditoria C2). Ninguém pesquisa pelo código.
 */

type Props = {
  produto: Produto
  /** true apenas para o primeiro card acima da dobra */
  prioridade?: boolean
}

export function CardProduto({ produto, prioridade = false }: Props) {
  const img = imageManifest[produto.imagens[0].chave as keyof typeof imageManifest]
  const href = `/${produto.categoria}/${produto.slug}/`

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-marca-100 bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-4/5 overflow-hidden bg-marca-50">
        {img && (
          <Image
            src={img.src}
            alt={produto.imagens[0].alt}
            width={img.width}
            height={img.height}
            priority={prioridade}
            loading={prioridade ? undefined : 'lazy'}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <span className="absolute left-3 top-3 rounded-md bg-marca-700 px-2 py-1 text-xs font-semibold tracking-wide text-white">
          {produto.codigo}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold leading-snug text-tinta-900">
          {/* O link cobre o card inteiro, mas o texto do link é o título real */}
          <Link href={href} className="after:absolute after:inset-0">
            {produto.nomeCurto === produto.h1 ? produto.h1 : tituloCard(produto)}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-tinta-500">{produto.resumo}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {produto.bullets.slice(0, 3).map((b) => (
            <li
              key={b}
              className="rounded-md bg-marca-50 px-2 py-1 text-xs font-medium text-marca-800"
            >
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-700 group-hover:gap-2.5 motion-safe:transition-all">
          Ver detalhes
          <IconeSeta className="h-4 w-4" />
        </p>
      </div>
    </article>
  )
}

/**
 * O H1 completo é longo demais para um card. Corta o sufixo " — Modelo XXX",
 * que já está no selo do canto, e mantém o termo de busca.
 */
function tituloCard(p: Produto): string {
  return p.h1.replace(/\s+—\s+Modelo\s+.+$/, '')
}
