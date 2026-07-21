import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/content/empresa'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Não há área privada; só o que o Next expõe internamente.
        disallow: ['/_next/'],
      },
    ],
    sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
    host: SITE_URL,
  }
}
