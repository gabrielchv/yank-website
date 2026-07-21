import type { Metadata } from 'next'
import { SITE_URL, empresa } from '@/content/empresa'

/**
 * Metadata por página.
 *
 * A auditoria (C5) lista o estrago do estado atual: title de 21 caracteres
 * num espaço de 60, meta description que é literalmente a palavra "Manual",
 * página sem description nenhuma e quatro descriptions auto-geradas que
 * aparecem na SERP como "CAPA Orçamento DUCHA Orçamento PEDAL Orçamento".
 * Aqui todo title e toda description são escritos à mão, por página.
 */

export const OG_PADRAO = '/site/hero.webp'

type Opcoes = {
  title: string
  description: string
  /** caminho absoluto do site, com barra final — ex.: '/lava-olhos-de-emergencia/' */
  caminho: string
  imagem?: string
  tipo?: 'website' | 'article'
  publicadoEm?: string
  atualizadoEm?: string
  noindex?: boolean
}

export function urlAbsoluta(caminho: string): string {
  return new URL(caminho, SITE_URL).toString()
}

export function construirMetadata({
  title,
  description,
  caminho,
  imagem = OG_PADRAO,
  tipo = 'website',
  publicadoEm,
  atualizadoEm,
  noindex = false,
}: Opcoes): Metadata {
  const url = urlAbsoluta(caminho)
  const imagemUrl = urlAbsoluta(imagem)

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: empresa.nome,
      locale: 'pt_BR',
      type: tipo,
      images: [{ url: imagemUrl, width: 1400, height: 500, alt: description.slice(0, 120) }],
      ...(publicadoEm ? { publishedTime: publicadoEm } : {}),
      ...(atualizadoEm ? { modifiedTime: atualizadoEm } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imagemUrl],
    },
  }
}
