import { artigoSchema, type Artigo } from '../schema'
import { nbr16291 } from './nbr-16291'
import { materiais } from './materiais'
import { acionamento } from './acionamento'

/**
 * Artigos pilares. A auditoria (C4) registra que o site nunca publicou nada —
 * não existe post-sitemap.xml — e que toda a demanda de topo de funil vai
 * inteira para os concorrentes. Estes três são os de maior valor da pauta:
 * o guia da norma (maior volume) e os dois comparativos (maior conversão).
 *
 * Próximos da pauta, a 2 por mês: vazão mínima, onde instalar, teste semanal,
 * portátil, bancada x coluna, manutenção preventiva.
 */

const brutos: Artigo[] = [nbr16291, materiais, acionamento]

export const artigos: Artigo[] = brutos.map((a) => {
  const r = artigoSchema.safeParse(a)
  if (!r.success) {
    throw new Error(
      `Artigo inválido "${a.slug ?? '(sem slug)'}":\n${JSON.stringify(r.error.issues, null, 2)}`,
    )
  }
  return r.data
})

export const artigosPorSlug = new Map(artigos.map((a) => [a.slug, a]))

export function getArtigo(slug: string): Artigo | undefined {
  return artigosPorSlug.get(slug)
}

/** Artigos ordenados do mais recente para o mais antigo. */
export const artigosRecentes = [...artigos].sort((a, b) =>
  b.publicadoEm.localeCompare(a.publicadoEm),
)

export function artigosPorSlugs(slugs: string[]): Artigo[] {
  return slugs.map((s) => artigosPorSlug.get(s)).filter((a): a is Artigo => Boolean(a))
}
