/**
 * Gera as imagens públicas a partir dos originais em source-files/.
 *
 * Substitui scripts/fetch-images.ts (que baixava do WordPress antigo e reencodava
 * material já comprimido duas vezes). Aqui a fonte é o arquivo original entregue
 * pelo cliente, então o WebP é gerado uma única vez, com qualidade alta.
 *
 * Uso:  npm run images
 *
 * Para trocar a foto de um produto: coloque o arquivo em source-files/, aponte a
 * candidata aqui e rode o script. Entre várias candidatas, a de maior resolução
 * vence — nenhuma mudança de código de página é necessária.
 */
import { readFile, mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const FONTE = join(process.cwd(), 'source-files')
const OUT_PRODUTOS = join(process.cwd(), 'public', 'produtos')
const OUT_SITE = join(process.cwd(), 'public', 'site')

/** slug de destino -> arquivos em source-files/, da melhor para a pior */
type Alvo = {
  nome: string
  destino: string
  candidatas: string[]
  lossless?: boolean
  /** arte plana entregue sobre fundo branco chapado: recorta o fundo */
  recortarFundoBranco?: boolean
}

/**
 * Troca o fundo branco de uma arte plana por transparência.
 *
 * Um flood fill a partir das bordas resolveria o fundo, mas não alcança o
 * branco fechado dentro das letras — o vazio do A, do P, do R ficaria branco
 * sobre qualquer fundo que não fosse branco. Por isso o branco é tratado por
 * componente conexo: some tudo, menos o que estiver dentro da caixa do ícone,
 * que é o pictograma e precisa continuar branco sobre o verde.
 */
async function recortarFundoBranco(entrada: Buffer): Promise<ReturnType<typeof sharp>> {
  const { data, info } = await sharp(entrada).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const W = info.width
  const H = info.height
  const N = W * H

  const claro = (k: number) => {
    const i = k * 4
    const min = Math.min(data[i], data[i + 1], data[i + 2])
    const max = Math.max(data[i], data[i + 1], data[i + 2])
    return min > 150 && max - min < 40
  }
  const verde = (k: number) => {
    const i = k * 4
    return data[i + 1] > data[i] + 20 && data[i + 1] > data[i + 2] + 20
  }

  type Caixa = { x0: number; y0: number; x1: number; y1: number; area: number }

  /** componentes conexos de 4 vizinhos sobre um predicado */
  function componentes(pred: (k: number) => boolean) {
    const rotulo = new Int32Array(N).fill(-1)
    const caixas: Caixa[] = []
    for (let s = 0; s < N; s++) {
      if (rotulo[s] !== -1 || !pred(s)) continue
      const id = caixas.length
      const caixa: Caixa = { x0: W, y0: H, x1: -1, y1: -1, area: 0 }
      const pilha = [s]
      rotulo[s] = id
      while (pilha.length) {
        const k = pilha.pop() as number
        const x = k % W
        const y = (k / W) | 0
        caixa.area++
        if (x < caixa.x0) caixa.x0 = x
        if (x > caixa.x1) caixa.x1 = x
        if (y < caixa.y0) caixa.y0 = y
        if (y > caixa.y1) caixa.y1 = y
        const vizinhos = [x > 0 ? k - 1 : -1, x < W - 1 ? k + 1 : -1, y > 0 ? k - W : -1, y < H - 1 ? k + W : -1]
        for (const v of vizinhos) {
          if (v >= 0 && rotulo[v] === -1 && pred(v)) {
            rotulo[v] = id
            pilha.push(v)
          }
        }
      }
      caixas.push(caixa)
    }
    return { rotulo, caixas }
  }

  const manchasVerdes = componentes(verde)
  const icone = manchasVerdes.caixas.reduce<Caixa | null>((a, c) => (!a || c.area > a.area ? c : a), null)
  if (!icone) throw new Error('nenhum bloco de cor encontrado — a arte mudou?')

  const fundo = componentes(claro)
  const preservar = fundo.caixas.map(
    (c) => c.x0 >= icone.x0 && c.x1 <= icone.x1 && c.y0 >= icone.y0 && c.y1 <= icone.y1,
  )

  // desfaz a composição sobre branco: C = a*F + (1-a)*255
  for (let k = 0; k < N; k++) {
    const id = fundo.rotulo[k]
    if (id === -1 || preservar[id]) continue
    const i = k * 4
    const a = 255 - Math.min(data[i], data[i + 1], data[i + 2])
    if (a === 0) {
      data[i + 3] = 0
      continue
    }
    for (let c = 0; c < 3; c++) {
      data[i + c] = Math.max(0, Math.min(255, Math.round((data[i + c] * 255 - 255 * (255 - a)) / a)))
    }
    data[i + 3] = a
  }

  return sharp(data, { raw: { width: W, height: H, channels: 4 } })
}

const produtos: Alvo[] = [
  // Chuveiros e lava-olhos
  { nome: 'CLM-E AI SD', destino: 'clm-e-ai-sd', candidatas: ['clm-e-aid.webp', 'clmd-e-inox.jpg'] },
  { nome: 'CLM-E AI', destino: 'clm-e-ai', candidatas: ['clm-e-ai.jpeg', 'clm-e-ai.webp', 'clm-e-inox.jpg'] },
  { nome: 'CLM-E PVC', destino: 'clm-e-pvc', candidatas: ['clm-e-pvc.webp', 'clm-e-pvc.jpg'] },
  { nome: 'CLM-E AG', destino: 'clm-e-ag', candidatas: ['clm-e.jpeg', 'clm-e-1.jpg'] },
  { nome: 'CLM-E CT', destino: 'clm-e-ct', candidatas: ['clm-e-ct.jpg'] },
  { nome: 'CLA', destino: 'cla', candidatas: ['CLA.webp', 'CLA.jpg'] },
  { nome: 'CLESP', destino: 'clesp', candidatas: ['CLESP.jpg'] },
  // Chuveiros
  { nome: 'CM', destino: 'cm', candidatas: ['cm.jpg'] },
  { nome: 'CA', destino: 'ca', candidatas: ['CA.jpg'] },
  // Lava-olhos
  { nome: 'LS', destino: 'ls', candidatas: ['ls.jpg'] },
  { nome: 'LM', destino: 'lm', candidatas: ['lm.jpg'] },
  { nome: 'LM PVC', destino: 'lm-pvc', candidatas: ['lm-pvc.jpg'] },
  { nome: 'LA', destino: 'la', candidatas: ['LA.jpg'] },
  // Especiais
  { nome: 'JKW-151', destino: 'jkw-151', candidatas: ['JKW-151.jpg'] },
  { nome: 'CLMM', destino: 'clmm', candidatas: ['CLMM.png'] },
  // Transportáveis
  { nome: 'LM-UA', destino: 'lm-ua', candidatas: ['LM-UA-50.jpg'] },
  { nome: 'CM-UA', destino: 'cm-ua', candidatas: ['CM-UA-50.jpg'] },
  { nome: 'CLM-UA', destino: 'clm-ua', candidatas: ['CLM-UA-50.jpg'] },
  // Peças e acessórios
  { nome: 'CAPA', destino: 'capa', candidatas: ['capa-protetora.png'] },
  { nome: 'DUCHA', destino: 'ducha', candidatas: ['ducha.png'] },
  { nome: 'PEDAL', destino: 'pedal', candidatas: ['edal.png'] },
  { nome: 'FAIXA', destino: 'faixa', candidatas: ['faixas.png'] },
  { nome: 'PROTETORES', destino: 'protetores', candidatas: ['protetores.png'] },
  { nome: 'SCALD VALVE', destino: 'scald-valve', candidatas: ['scald.png'] },
  { nome: 'SENSOR', destino: 'sensor', candidatas: ['sensor.png'] },
  { nome: 'SINALEIRA', destino: 'sinaleira', candidatas: ['sinaleira.png'] },
  { nome: 'TAMPA', destino: 'tampa', candidatas: ['tampa.png'] },
  { nome: 'ALÇA PUXE', destino: 'alca-puxe', candidatas: ['alca-puxe.png'] },
  { nome: 'PLACA PUXE', destino: 'placa-puxe', candidatas: ['placa-puxe.png'] },
  { nome: 'PLACA EMERGÊNCIA', destino: 'placa-emergencia', candidatas: ['placa-emergencia.png'] },
]

const site: Alvo[] = [
  // Logos são arte vetorizada rasterizada: WebP com perda borra as bordas do
  // texto no tamanho pequeno do cabeçalho, então vão sem perda (custam ~10KB).
  // O original veio com fundo branco chapado, o que deixava um retângulo branco
  // em volta da marca em qualquer fundo que não fosse branco.
  {
    nome: 'Logo',
    destino: 'logo',
    candidatas: ['logo-yank-2024-a.png', 'logo-yank-top.png'],
    lossless: true,
    recortarFundoBranco: true,
  },
  { nome: 'Logo branco', destino: 'logo-branco', candidatas: ['logo-yank-branco.png'], lossless: true },
  { nome: 'Hero', destino: 'hero', candidatas: ['slide-01-generated.png', 'slide-01.webp'] },
  { nome: 'Hero alt', destino: 'hero-2', candidatas: ['slider-2.webp'] },
  { nome: 'Fábrica', destino: 'empresa', candidatas: ['empresa.png'] },
]

type Entrada = { src: string; width: number; height: number }
const manifest: Record<string, Entrada> = {}

async function processar(alvo: Alvo, pastaSaida: string, prefixoPublico: string) {
  let melhor: { buf: Buffer; w: number; h: number; arquivo: string } | null = null

  for (const arquivo of alvo.candidatas) {
    let buf: Buffer
    try {
      buf = await readFile(join(FONTE, arquivo))
    } catch {
      console.warn(`  ! ${alvo.nome.padEnd(18)} candidata ausente: ${arquivo}`)
      continue
    }
    try {
      const meta = await sharp(buf).metadata()
      const w = meta.width ?? 0
      const h = meta.height ?? 0
      if (!melhor || w * h > melhor.w * melhor.h) melhor = { buf, w, h, arquivo }
    } catch {
      console.warn(`  ! ${alvo.nome.padEnd(18)} ilegível: ${arquivo}`)
    }
  }

  if (!melhor) {
    console.error(`  ✗ ${alvo.nome.padEnd(18)} nenhuma candidata utilizável`)
    return
  }

  // Cap em 1600px de largura: acima disso não há ganho visual nesta UI.
  const destino = join(pastaSaida, `${alvo.destino}.webp`)
  const precisaReduzir = melhor.w > 1600

  // Fonte já é WebP no tamanho final: copia os bytes. Reencodar WebP com perda
  // sobre WebP com perda só empilha artefato e ainda engorda o arquivo.
  let saida: Buffer
  if (melhor.arquivo.endsWith('.webp') && !precisaReduzir && !alvo.recortarFundoBranco) {
    saida = melhor.buf
  } else {
    const pipeline = alvo.recortarFundoBranco
      ? await recortarFundoBranco(melhor.buf)
      : sharp(melhor.buf).rotate()
    if (precisaReduzir) pipeline.resize({ width: 1600 })
    saida = await (alvo.lossless
      ? pipeline.webp({ lossless: true, effort: 6 })
      : pipeline.webp({ quality: 92, effort: 6, smartSubsample: true })
    ).toBuffer()
  }
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
    `  ✓ ${alvo.nome.padEnd(18)} ${metaFinal.width}x${metaFinal.height}  ${origemKb}KB → ${kb}KB  (${melhor.arquivo})`,
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
  const corpo = `// GERADO por scripts/build-images.ts — não editar à mão.
// Dimensões reais de cada arquivo, usadas para reservar espaço no layout (CLS = 0).

export type ImagemManifest = { src: string; width: number; height: number }

export const imageManifest = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, ImagemManifest>

export type ChaveImagem = keyof typeof imageManifest
`
  await writeFile(arquivo, corpo)
  console.log(`\nManifest escrito em src/content/image-manifest.ts (${Object.keys(manifest).length} imagens)`)

  // O otimizador do Next indexa o cache por URL (/site/hero.webp), não pelo
  // conteúdo: trocar o arquivo mantendo o nome faz o dev server continuar
  // servindo os bytes antigos com X-Nextjs-Cache: HIT. Invalidar aqui.
  for (const cache of ['.next/dev/cache/images', '.next/cache/images']) {
    await rm(join(process.cwd(), cache), { recursive: true, force: true })
  }
  console.log('Cache de imagens do Next invalidado.\n')
}

main()
