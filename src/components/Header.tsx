import Image from 'next/image'
import Link from 'next/link'
import { categorias } from '@/content/categorias'
import { empresa, linkTelefone } from '@/content/empresa'
import { imageManifest } from '@/content/image-manifest'
import { LinkRastreado } from './BotaoWhatsApp'
import { IconeTelefone } from './Icones'
import { Navegacao } from './Navegacao'

/**
 * Cabeçalho — server component.
 *
 * Só a <Navegacao> é cliente, e ela recebe os links já resolvidos por props,
 * para que o Zod e o conteúdo das categorias não vazem para o bundle.
 *
 * O site atual repete o menu inteiro 4× em cada página (auditoria §1), o que
 * infla a contagem de palavras e dilui o conteúdo real da página. Aqui ele
 * aparece uma vez no cabeçalho e uma vez no rodapé.
 */

const logo = imageManifest.logo

export function Header() {
  const institucionais = [{ href: '/a-empresa/', label: 'A Empresa' }]
  const linksCategorias = categorias.map((c) => ({ href: `/${c.slug}/`, label: c.nomeMenu }))
  const finais = [
    { href: '/blog/', label: 'Blog' },
    { href: '/contato/', label: 'Contato' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-marca-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      {/* Faixa de contato — some no mobile para não roubar altura do topo */}
      <div className="hidden bg-marca-700 text-white md:block">
        <div className="conteudo flex h-9 items-center justify-between text-sm">
          <p>Fabricante de chuveiros e lava-olhos de emergência há {empresa.fundacaoTexto}</p>
          <LinkRastreado
            href={linkTelefone}
            evento="phone_click"
            className="inline-flex items-center gap-2 font-medium hover:underline"
          >
            <IconeTelefone className="h-4 w-4" />
            {empresa.telefone.exibicao}
          </LinkRastreado>
        </div>
      </div>

      <div className="conteudo relative flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="shrink-0" aria-label={`${empresa.nome} — página inicial`}>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={`${empresa.nome} — fabricante de chuveiros e lava-olhos de emergência`}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <Navegacao
          institucionais={institucionais}
          categorias={linksCategorias}
          finais={finais}
          telefone={{ href: linkTelefone, exibicao: empresa.telefone.exibicao }}
        />
      </div>
    </header>
  )
}
