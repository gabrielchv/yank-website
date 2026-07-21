import { SITE_URL, empresa } from '@/content/empresa'
import { precoVisivel } from '@/content/produtos'
import type { Artigo, Categoria, Faq, Produto } from '@/content/schema'
import { urlAbsoluta } from './seo'

/**
 * JSON-LD do site.
 *
 * Corrige os quatro problemas apontados na auditoria (A2):
 *   - a home estava marcada como `Article` com `author: LuizMarcelo` — é o site
 *     de uma empresa, não um post de blog. Agora `Article` só existe no blog.
 *   - não havia `Product` em lugar nenhum, por isso a Yank nunca apareceu em
 *     resultado rico de produto.
 *   - não havia `LocalBusiness` nem `Organization` com NAP estruturado.
 *   - `primaryImageOfPage` apontava para /v1/, que responde 301, e `sameAs`
 *     apontava para o próprio site antigo em vez das redes sociais.
 */

const ID_ORG = `${SITE_URL}/#organization`
const ID_SITE = `${SITE_URL}/#website`

type Json = Record<string, unknown>

const enderecoPostal = {
  '@type': 'PostalAddress',
  streetAddress: empresa.endereco.logradouro,
  addressLocality: empresa.endereco.cidade,
  addressRegion: empresa.endereco.estado,
  postalCode: empresa.endereco.cep,
  addressCountry: empresa.endereco.pais,
}

const redesSociais = [empresa.redes.instagram, empresa.redes.facebook]

/** Organization + LocalBusiness, declarados uma única vez no layout raiz. */
export function schemaOrganizacao(): Json {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': ID_ORG,
        name: empresa.nome,
        legalName: empresa.nomeLegal,
        alternateName: empresa.nomeAnterior,
        url: SITE_URL,
        description: empresa.descricaoCurta,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: urlAbsoluta('/site/logo.webp'),
        },
        image: urlAbsoluta('/site/hero.webp'),
        telephone: empresa.telefone.e164,
        email: empresa.email,
        address: enderecoPostal,
        sameAs: redesSociais,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: empresa.horario.abre,
            closes: empresa.horario.fecha,
          },
        ],
        areaServed: { '@type': 'Country', name: 'Brasil' },
        knowsAbout: [
          'Chuveiro de emergência',
          'Lava-olhos de emergência',
          'ABNT NBR 16291',
          'Equipamento de proteção coletiva',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': ID_SITE,
        url: SITE_URL,
        name: empresa.nome,
        inLanguage: 'pt-BR',
        publisher: { '@id': ID_ORG },
      },
    ],
  }
}

export type ItemTrilha = { nome: string; caminho: string }

export function schemaTrilha(itens: ItemTrilha[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nome,
      item: urlAbsoluta(item.caminho),
    })),
  }
}

export function schemaFaq(perguntas: Faq[]): Json | null {
  if (perguntas.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: perguntas.map((f) => ({
      '@type': 'Question',
      name: f.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: f.resposta },
    })),
  }
}

export function schemaProduto(p: Produto, caminho: string): Json {
  const preco = precoVisivel(p)

  /*
    Sem preço público conferido, a Offer vai sem `price`. Inventar valor aqui
    gera ação manual do Google — e o portão em scripts/check-data.ts existe
    justamente para que isso nunca chegue a produção.
  */
  const oferta: Json = {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    url: urlAbsoluta(caminho),
    seller: { '@id': ID_ORG },
    ...(preco !== undefined ? { price: preco } : {}),
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.h1,
    sku: p.codigo,
    mpn: p.codigo,
    category: p.categoria,
    description: p.resumo,
    brand: { '@type': 'Brand', name: empresa.nome },
    manufacturer: { '@id': ID_ORG },
    image: p.imagens.map((img) => urlAbsoluta(`/produtos/${img.chave}.webp`)),
    offers: oferta,
    ...(p.especificacoes.filter((e) => !e.provisorio).length > 0
      ? {
          additionalProperty: p.especificacoes
            .filter((e) => !e.provisorio)
            .map((e) => ({
              '@type': 'PropertyValue',
              name: e.label,
              value: e.valor,
            })),
        }
      : {}),
  }
}

export function schemaListaCategoria(c: Categoria, produtos: Produto[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.nome,
    description: c.resumo,
    numberOfItems: produtos.length,
    itemListElement: produtos.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.h1,
      url: urlAbsoluta(`/${c.slug}/${p.slug}/`),
    })),
  }
}

export function schemaArtigo(a: Artigo, caminho: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.titulo,
    description: a.resumo,
    datePublished: a.publicadoEm,
    dateModified: a.atualizadoEm ?? a.publicadoEm,
    inLanguage: 'pt-BR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': urlAbsoluta(caminho) },
    // Empresa como autora: não há autor pessoa, e inventar um foi exatamente
    // o erro do schema antigo.
    author: { '@id': ID_ORG },
    publisher: { '@id': ID_ORG },
    image: urlAbsoluta('/site/hero.webp'),
  }
}
