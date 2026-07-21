import type { MetadataRoute } from 'next'
import { artigos } from '@/content/blog'
import { categorias } from '@/content/categorias'
import { SITE_URL } from '@/content/empresa'
import { produtos } from '@/content/produtos'

/**
 * Sitemap gerado a partir dos dados — nunca escrito à mão.
 *
 * O sitemap antigo tinha 12 URLs, duas delas lixo (/sample-page/ e
 * /teste-produtos/), e nenhuma página de produto. Este sai com as ~40 URLs
 * reais e sempre em sincronia com o catálogo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date()
  const url = (caminho: string) => new URL(caminho, SITE_URL).toString()

  return [
    { url: url('/'), lastModified: agora, changeFrequency: 'monthly', priority: 1 },
    { url: url('/a-empresa/'), lastModified: agora, changeFrequency: 'yearly', priority: 0.6 },
    { url: url('/contato/'), lastModified: agora, changeFrequency: 'yearly', priority: 0.7 },
    { url: url('/blog/'), lastModified: agora, changeFrequency: 'weekly', priority: 0.7 },

    ...categorias.map((c) => ({
      url: url(`/${c.slug}/`),
      lastModified: agora,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    ...produtos.map((p) => ({
      url: url(`/${p.categoria}/${p.slug}/`),
      lastModified: agora,
      changeFrequency: 'monthly' as const,
      // Acessórios têm prioridade menor que os equipamentos principais.
      priority: p.categoria === 'pecas-e-acessorios' ? 0.6 : 0.8,
    })),

    ...artigos.map((a) => ({
      url: url(`/blog/${a.slug}/`),
      lastModified: new Date(a.atualizadoEm ?? a.publicadoEm),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
