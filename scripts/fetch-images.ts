/**
 * Baixa as imagens do WordPress antigo e reencoda para WebP otimizado.
 *
 * As fontes no WP são pequenas (a maioria 480x640). O script tenta, para cada
 * imagem, uma lista de candidatas em ordem de preferência e fica com a de maior
 * resolução que responder 200 — assim, quando existir uma versão melhor
 * (ex.: os .webp 813x1024 usados na home), ela é usada automaticamente.
 *
 * Uso:  node scripts/fetch-images.ts
 *
 * Para trocar por fotografia em alta resolução depois, basta substituir o
 * arquivo em public/produtos/ e rodar `node scripts/build-image-manifest.ts`.
 * Nenhuma mudança de código é necessária.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const WP = 'https://yank.com.br/wp-content/uploads'
const OUT_PRODUTOS = join(process.cwd(), 'public', 'produtos')
const OUT_SITE = join(process.cwd(), 'public', 'site')

/** slug de destino -> candidatas no WP, da melhor para a pior */
type Alvo = { nome: string; destino: string; candidatas: string[] }

const produtos: Alvo[] = [
  // Chuveiros e lava-olhos — a home tem versões 813x1024 de quatro deles
  { nome: 'CLM-E AI SD', destino: 'clm-e-ai-sd', candidatas: [`${WP}/2025/02/clm-e-aid.webp`, `${WP}/2025/02/clm-e-aid-813x1024.webp`, `${WP}/2025/02/clmd-e-inox.jpg`] },
  { nome: 'CLM-E AI', destino: 'clm-e-ai', candidatas: [`${WP}/2025/02/clm-e-ai.webp`, `${WP}/2025/02/clm-e-ai-813x1024.webp`, `${WP}/2025/02/clm-e-inox.jpg`] },
  { nome: 'CLM-E PVC', destino: 'clm-e-pvc', candidatas: [`${WP}/2025/02/clm-e-pvc.webp`, `${WP}/2025/02/clm-e-pvc-813x1024.webp`, `${WP}/2025/02/clm-e-pvc.jpg`] },
  { nome: 'CLM-E AG', destino: 'clm-e-ag', candidatas: [`${WP}/2025/02/clm-e-1.jpg`] },
  { nome: 'CLM-E CT', destino: 'clm-e-ct', candidatas: [`${WP}/2025/02/clm-e-ct.jpg`] },
  { nome: 'CLA', destino: 'cla', candidatas: [`${WP}/2025/02/CLA.webp`, `${WP}/2025/02/CLA-813x1024.webp`, `${WP}/2025/01/CLA.jpg`] },
  { nome: 'CLESP', destino: 'clesp', candidatas: [`${WP}/2025/02/CLESP.jpg`] },
  // Chuveiros
  { nome: 'CM', destino: 'cm', candidatas: [`${WP}/2025/02/cm.jpg`] },
  { nome: 'CA', destino: 'ca', candidatas: [`${WP}/2025/02/CA.jpg`] },
  // Lava-olhos
  { nome: 'LS', destino: 'ls', candidatas: [`${WP}/2025/02/ls.jpg`] },
  { nome: 'LM', destino: 'lm', candidatas: [`${WP}/2025/02/lm.jpg`] },
  { nome: 'LM PVC', destino: 'lm-pvc', candidatas: [`${WP}/2025/02/lm-pvc.jpg`] },
  { nome: 'LA', destino: 'la', candidatas: [`${WP}/2025/02/LA.jpg`] },
  // Especiais
  { nome: 'JKW-151', destino: 'jkw-151', candidatas: [`${WP}/2025/02/JKW-151.jpg`] },
  { nome: 'CLMM', destino: 'clmm', candidatas: [`${WP}/2025/02/CLMM.png`] },
  // Transportáveis
  { nome: 'LM-UA', destino: 'lm-ua', candidatas: [`${WP}/2025/02/LM-UA-50.jpg`] },
  { nome: 'CM-UA', destino: 'cm-ua', candidatas: [`${WP}/2025/02/CM-UA-50.jpg`] },
  { nome: 'CLM-UA', destino: 'clm-ua', candidatas: [`${WP}/2025/02/CLM-UA-50.jpg`] },
  // Peças e acessórios
  { nome: 'CAPA', destino: 'capa', candidatas: [`${WP}/2025/02/capa-protetora.png`] },
  { nome: 'DUCHA', destino: 'ducha', candidatas: [`${WP}/2025/02/ducha.png`] },
  { nome: 'PEDAL', destino: 'pedal', candidatas: [`${WP}/2025/02/edal.png`] },
  { nome: 'FAIXA', destino: 'faixa', candidatas: [`${WP}/2025/02/faixas.png`] },
  { nome: 'PROTETORES', destino: 'protetores', candidatas: [`${WP}/2025/02/protetores.png`] },
  { nome: 'SCALD VALVE', destino: 'scald-valve', candidatas: [`${WP}/2025/02/scald.png`] },
  { nome: 'SENSOR', destino: 'sensor', candidatas: [`${WP}/2025/02/sensor.png`] },
  { nome: 'SINALEIRA', destino: 'sinaleira', candidatas: [`${WP}/2025/02/sinaleira.png`] },
  { nome: 'TAMPA', destino: 'tampa', candidatas: [`${WP}/2025/02/tampa.png`] },
  { nome: 'ALÇA PUXE', destino: 'alca-puxe', candidatas: [`${WP}/2025/02/alca-puxe.png`] },
  { nome: 'PLACA PUXE', destino: 'placa-puxe', candidatas: [`${WP}/2025/02/placa-puxe.png`] },
  { nome: 'PLACA EMERGÊNCIA', destino: 'placa-emergencia', candidatas: [`${WP}/2025/02/placa-emergencia.png`] },
]

const site: Alvo[] = [
  { nome: 'Logo', destino: 'logo', candidatas: [`${WP}/2025/02/logo-yank-top.png`] },
  { nome: 'Logo branco', destino: 'logo-branco', candidatas: [`${WP}/2025/02/logo-yank-branco.png`] },
  { nome: 'Hero', destino: 'hero', candidatas: [`${WP}/2025/01/slide-01.webp`, `${WP}/2025/01/slider-2.webp`] },
  { nome: 'Hero alt', destino: 'hero-2', candidatas: [`${WP}/2025/01/slider-2.webp`] },
  { nome: 'Fábrica', destino: 'empresa', candidatas: [`${WP}/2025/02/empresa.png`, 'https://yank.com.br/v1/wp-content/uploads/2025/02/empresa.png'] },
]

type Entrada = { src: string; width: number; height: number }
const manifest: Record<string, Entrada> = {}

async function baixar(url: string): Promise<Buffer | null> {
  try {
    const r = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; yank-migration/1.0)' },
    })
    if (!r.ok) return null
    const buf = Buffer.from(await r.arrayBuffer())
    return buf.byteLength > 1024 ? buf : null
  } catch {
    return null
  }
}

async function processar(alvo: Alvo, pastaSaida: string, prefixoPublico: string) {
  let melhor: { buf: Buffer; w: number; h: number; url: string } | null = null

  for (const url of alvo.candidatas) {
    const buf = await baixar(url)
    if (!buf) continue
    try {
      const meta = await sharp(buf).metadata()
      const w = meta.width ?? 0
      const h = meta.height ?? 0
      if (!melhor || w * h > melhor.w * melhor.h) melhor = { buf, w, h, url }
    } catch {
      /* arquivo ilegível — segue para a próxima candidata */
    }
  }

  if (!melhor) {
    console.warn(`  ✗ ${alvo.nome.padEnd(18)} nenhuma candidata respondeu`)
    return
  }

  // Cap em 1400px de largura: acima disso não há ganho visual nesta UI.
  const destino = join(pastaSaida, `${alvo.destino}.webp`)
  const pipeline = sharp(melhor.buf).rotate()
  if (melhor.w > 1400) pipeline.resize({ width: 1400 })
  const saida = await pipeline.webp({ quality: 82, effort: 6 }).toBuffer()
  const metaFinal = await sharp(saida).metadata()
  await writeFile(destino, saida)

  manifest[alvo.destino] = {
    src: `${prefixoPublico}/${alvo.destino}.webp`,
    width: metaFinal.width ?? melhor.w,
    height: metaFinal.height ?? melhor.h,
  }

  const kb = (saida.byteLength / 1024).toFixed(0)
  const origemKb = (melhor.buf.byteLength / 1024).toFixed(0)
  console.log(
    `  ✓ ${alvo.nome.padEnd(18)} ${metaFinal.width}x${metaFinal.height}  ${origemKb}KB → ${kb}KB  (${melhor.url.split('/').pop()})`,
  )
}

async function main() {
  await mkdir(OUT_PRODUTOS, { recursive: true })
  await mkdir(OUT_SITE, { recursive: true })

  console.log('\nProdutos e acessórios:')
  for (const alvo of produtos) await processar(alvo, OUT_PRODUTOS, '/produtos')

  console.log('\nImagens do site:')
  for (const alvo of site) await processar(alvo, OUT_SITE, '/site')

  const arquivo = join(process.cwd(), 'src', 'content', 'image-manifest.ts')
  const corpo = `// GERADO por scripts/fetch-images.ts — não editar à mão.
// Dimensões reais de cada arquivo, usadas para reservar espaço no layout (CLS = 0).

export type ImagemManifest = { src: string; width: number; height: number }

export const imageManifest = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, ImagemManifest>

export type ChaveImagem = keyof typeof imageManifest
`
  await mkdir(join(process.cwd(), 'src', 'content'), { recursive: true })
  await writeFile(arquivo, corpo)
  console.log(`\nManifest escrito em src/content/image-manifest.ts (${Object.keys(manifest).length} imagens)\n`)
}

main()
