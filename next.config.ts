import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /*
    As URLs atuais do WordPress terminam em barra. Preservá-las evita quebrar
    canonical, links externos e o que houver de equity acumulado — a auditoria
    já mostra que o site rankeia para busca de marca, e não vale perder isso.
  */
  trailingSlash: true,

  /*
    Saída autocontida para o container do Cloud Run: o Next só copia as
    dependências que o rastreamento de módulos provou serem necessárias, o que
    tira ~90% do node_modules da imagem. Imagem menor significa cold start mais
    curto — que, com min-instances=0, é o que o visitante sente.
  */
  output: 'standalone',

  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    // As imagens são locais e já reencodadas por scripts/build-images.ts.
    formats: ['image/avif', 'image/webp'],
    // Larguras realmente usadas pelo layout — evita gerar variantes ociosas.
    deviceSizes: [400, 640, 828, 1080, 1400],
    imageSizes: [96, 160, 256, 384],
  },

  async redirects() {
    return [
      // Auditoria M3: página duplicada, 112 palavras, sem H2 e sem description.
      {
        source: '/acessorios-e-sinalizadores',
        destination: '/pecas-e-acessorios/',
        permanent: true,
      },
      // Auditoria A2: staging antigo, ainda referenciado no schema da home.
      {
        source: '/v1/:path*',
        destination: '/',
        permanent: true,
      },
      // O WordPress respondia 301 neste caminho; agora ele existe de verdade.
      {
        source: '/produtos',
        destination: '/chuveiros-e-lava-olhos-de-emergencia/',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      // /_next/static já sai com `immutable` do próprio Next — sobrescrever
      // aqui quebra o comportamento de dev, então fica com o padrão.
      {
        source: '/produtos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ]
  },
}

export default nextConfig
