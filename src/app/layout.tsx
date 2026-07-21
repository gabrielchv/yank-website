import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, empresa } from '@/content/empresa'
import { schemaOrganizacao } from '@/lib/schema-org'

/*
  next/font baixa e auto-hospeda a fonte no build: zero request a domínio
  externo, zero FOUT, e o arquivo entra com hash imutável no CDN. Só o subset
  latin — o site é pt-BR.
*/
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fonte-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chuveiro e Lava Olhos de Emergência | Fabricante — Yank EPC',
    // As páginas passam o título inteiro, sem sufixo automático, para não
    // estourar os ~60 caracteres úteis da SERP.
    template: '%s',
  },
  description: empresa.descricaoCurta,
  applicationName: empresa.nome,
  creator: empresa.nome,
  publisher: empresa.nome,
  formatDetection: { telephone: true, address: true, email: true },
  category: 'Equipamentos de proteção coletiva',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#35631e',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-marca-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Ir para o conteúdo
        </a>

        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />

        <JsonLd dados={schemaOrganizacao()} />
        <Analytics />
      </body>
    </html>
  )
}
