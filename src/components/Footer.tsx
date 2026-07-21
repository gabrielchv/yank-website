import Image from 'next/image'
import Link from 'next/link'
import { categorias } from '@/content/categorias'
import { empresa, linkEmail, linkTelefone } from '@/content/empresa'
import { imageManifest } from '@/content/image-manifest'
import { artigosRecentes } from '@/content/blog'
import { LinkRastreado } from './BotaoWhatsApp'
import { IconeEmail, IconeFacebook, IconeInstagram, IconeLocal, IconeTelefone } from './Icones'

/**
 * Rodapé — server component, sem JavaScript além do rastreio de clique.
 *
 * O NAP aqui é o mesmo objeto que alimenta o JSON-LD de LocalBusiness, então
 * não há como divergirem. Divergência de NAP entre site, schema e Google
 * Business é um dos erros que mais atrapalham SEO local.
 *
 * O mailto também corrige o "iformações" que a auditoria encontrou em
 * produção (Fase 1, item 1.3).
 */

const logo = imageManifest['logo-branco']

export function Footer() {
  return (
    <footer className="mt-20 bg-marca-900 text-marca-100">
      <div className="conteudo grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={`${empresa.nome} — chuveiros e lava-olhos de emergência`}
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-marca-200">
            {empresa.descricaoCurta}
          </p>
          <ul className="mt-4 space-y-1 text-sm text-marca-300">
            {empresa.certificacoes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={empresa.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Yank EPC"
              className="rounded-lg bg-marca-800 p-2.5 text-white transition-colors hover:bg-marca-700"
            >
              <IconeInstagram />
            </a>
            <a
              href={empresa.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Yank EPC"
              className="rounded-lg bg-marca-800 p-2.5 text-white transition-colors hover:bg-marca-700"
            >
              <IconeFacebook />
            </a>
          </div>
        </div>

        <nav aria-label="Produtos">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Produtos</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categorias.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}/`} className="text-marca-200 transition-colors hover:text-white">
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Conteúdo">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Conteúdo</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/a-empresa/" className="text-marca-200 transition-colors hover:text-white">
                A Empresa
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="text-marca-200 transition-colors hover:text-white">
                Blog
              </Link>
            </li>
            {artigosRecentes.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}/`}
                  className="text-marca-200 transition-colors hover:text-white"
                >
                  {a.titulo.length > 46 ? `${a.titulo.slice(0, 46)}…` : a.titulo}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contato/" className="text-marca-200 transition-colors hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h2>
          <address className="mt-4 space-y-3.5 text-sm not-italic">
            <p className="flex gap-2.5 text-marca-200">
              <IconeLocal className="mt-0.5 h-5 w-5 shrink-0 text-marca-400" />
              <span>
                {empresa.endereco.logradouro}
                <br />
                {empresa.endereco.bairro}, {empresa.endereco.cidade}/{empresa.endereco.estado}
                <br />
                CEP {empresa.endereco.cep}
              </span>
            </p>
            <p>
              <LinkRastreado
                href={linkTelefone}
                evento="phone_click"
                className="flex items-center gap-2.5 text-marca-200 transition-colors hover:text-white"
              >
                <IconeTelefone className="h-5 w-5 shrink-0 text-marca-400" />
                {empresa.telefone.exibicao}
              </LinkRastreado>
            </p>
            <p>
              <LinkRastreado
                href={linkEmail}
                evento="email_click"
                className="flex items-center gap-2.5 break-all text-marca-200 transition-colors hover:text-white"
              >
                <IconeEmail className="h-5 w-5 shrink-0 text-marca-400" />
                {empresa.email}
              </LinkRastreado>
            </p>
            <p className="text-marca-300">
              {empresa.horario.dias}, das {empresa.horario.abre} às {empresa.horario.fecha}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-marca-800">
        <div className="conteudo flex flex-col gap-2 py-6 text-xs text-marca-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {empresa.nome} — {empresa.nomeAnterior}. Todos os direitos
            reservados.
          </p>
          <p>Equipamentos conforme a ABNT NBR 16291:2014</p>
        </div>
      </div>
    </footer>
  )
}
