'use client'

import Script from 'next/script'
import { useEffect } from 'react'

/**
 * GA4 + Core Web Vitals de campo.
 *
 * A auditoria (M2/Fase 4) registra que hoje não existe nenhuma conversão
 * mensurável: todos os CTAs são links wa.me sem rastreio, então é impossível
 * provar retorno de SEO. Aqui o clique em WhatsApp, telefone e e-mail vira
 * evento no GA4.
 *
 * O script entra com `lazyOnload` de propósito: analytics não pode competir
 * com o LCP. E as métricas de web-vitals vão para o próprio GA4 — dá Core Web
 * Vitals por rota sem custo e sem depender do painel de nenhum host.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function registrarEvento(nome: string, parametros: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', nome, parametros)
}

function RelatorioWebVitals() {
  useEffect(() => {
    if (!GA_ID) return
    let cancelado = false

    // Import dinâmico: a lib só é baixada depois da página estar interativa.
    import('web-vitals')
      .then(({ onCLS, onINP, onLCP, onTTFB, onFCP }) => {
        if (cancelado) return
        const enviar = (metrica: { name: string; value: number; id: string; rating: string }) => {
          registrarEvento('web_vitals', {
            metric_name: metrica.name,
            // CLS é fracionário; os demais são milissegundos.
            value: Math.round(metrica.name === 'CLS' ? metrica.value * 1000 : metrica.value),
            metric_id: metrica.id,
            metric_rating: metrica.rating,
            page_path: window.location.pathname,
          })
        }
        onCLS(enviar)
        onINP(enviar)
        onLCP(enviar)
        onTTFB(enviar)
        onFCP(enviar)
      })
      .catch(() => {
        /* falha em analytics nunca deve afetar a página */
      })

    return () => {
      cancelado = true
    }
  }, [])

  return null
}

export function Analytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>
      <RelatorioWebVitals />
    </>
  )
}
