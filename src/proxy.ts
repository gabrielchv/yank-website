import { NextResponse } from 'next/server'

/**
 * 410 Gone para as duas páginas-lixo que o WordPress deixou indexadas
 * (auditoria A1): /sample-page/ — página padrão do WordPress, em inglês — e
 * /teste-produtos/ — página de teste, sem H1.
 *
 * Um 404 também funcionaria, mas o Google trata 410 como remoção deliberada e
 * tira a URL do índice bem mais rápido. Como as duas estavam no sitemap e em
 * `index, follow`, vale acelerar.
 *
 * O `matcher` limita o middleware a esses dois caminhos: nenhuma outra rota
 * paga custo de runtime, e o resto do site continua servido direto do CDN.
 */

export function proxy() {
  return new NextResponse(
    '<!doctype html><html lang="pt-BR"><meta charset="utf-8">' +
      '<title>Página removida — Yank EPC</title>' +
      '<p>Esta página foi removida permanentemente. ' +
      '<a href="https://yank.com.br/">Ir para a página inicial</a>.</p>',
    {
      status: 410,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    },
  )
}

/*
  O curinga `:path*` é necessário: com `trailingSlash: true` a requisição chega
  como `/sample-page/`, mas o Next normaliza o matcher removendo a barra final,
  de modo que um matcher literal nunca casaria.
*/
export const config = {
  matcher: ['/sample-page/:path*', '/teste-produtos/:path*'],
}
