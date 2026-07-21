# Yank EPC — site

Substituição do WordPress de `yank.com.br` por um Next.js estático, resolvendo o
diagnóstico da auditoria em `seo-analysis/plan.md`: o site não aparecia em
buscas por "chuveiro e lava olhos" porque **não existia página para rankear** —
12 URLs no total, nenhuma de produto.

Agora são **43 URLs indexáveis**: 6 hubs de categoria, 30 produtos, 3 artigos e
as páginas institucionais.

## Comandos

```bash
npm run dev            # desenvolvimento
npm run check:data     # lista os produtos com dado provisório
npm run typecheck      # tsc --noEmit
npm run lint
npm run images         # rebaixa e reencoda as imagens do WordPress antigo
npm run build          # BLOQUEIA enquanto houver produto em rascunho
NEXT_PUBLIC_ALLOW_DRAFT=1 npm run build   # preview com dados provisórios
```

## O portão de dados provisórios

Os 30 produtos estão com `dataStatus: 'draft'`, porque as especificações
numéricas (vazão, dimensões, peso) e os preços são **provisórios** — foram
gerados para o layout ser desenhado contra conteúdo realista, não vieram do
catálogo.

`npm run build` **falha de propósito** enquanto isso for verdade. Publicar um
preço inventado dentro do schema `Product` gera ação manual do Google, e uma
vazão errada num equipamento de segurança é problema além do SEO.

Rode `npm run check:data` para ver exatamente o que falta em cada produto.

### Como publicar um produto

Nos arquivos de `src/content/produtos/`:

1. Substitua os valores pelos reais do catálogo.
2. Remova `provisorio: true` de cada linha conferida.
3. Ajuste ou remova `preco`.
4. Mude `dataStatus` para `'verified'`.

Nada mais precisa mudar: a tabela passa a exibir as linhas, o preço entra no
`Offer` do JSON-LD e o produto sai da lista do portão.

**O que já é real e não precisa conferência:** os `bullets` (extraídos do site
atual), as descrições, aplicações, conformidade e FAQ — escritos a partir da
NBR 16291 e do domínio, não de dado de catálogo.

## Estrutura

```
src/
├── app/                        rotas (App Router, tudo SSG)
│   ├── (catalogo)/[categoria]/[produto]/
│   ├── blog/[slug]/
│   ├── sitemap.ts robots.ts
├── components/                 UI — só 3 arquivos são 'use client'
├── content/                    dados, validados por Zod
│   ├── schema.ts               esquema único do catálogo
│   ├── blocos.ts               conteúdo reaproveitado entre produtos
│   ├── categorias.ts
│   ├── produtos/               um arquivo por categoria
│   ├── blog/
│   ├── empresa.ts              NAP — fonte única de site, rodapé e JSON-LD
│   └── image-manifest.ts       GERADO por scripts/fetch-images.ts
├── lib/                        seo.ts, schema-org.ts
└── proxy.ts                    410 nas duas páginas-lixo do WordPress
```

### Regra importante ao editar componentes

**Nenhum arquivo com `'use client'` pode importar de `@/content/*` validado por
Zod.** Isso arrasta o Zod e todo o texto do catálogo para o bundle do navegador
— aconteceu na primeira versão do `Header` e custou 110 KB de JavaScript.
Componentes de cliente recebem dados já resolvidos por props (ver
`Navegacao.tsx`).

## Imagens

`npm run images` baixa as imagens do WordPress antigo, escolhe a maior versão
disponível de cada uma, reencoda para WebP e gera `src/content/image-manifest.ts`
com as dimensões reais (usadas para reservar espaço e manter CLS em zero).

Para trocar por fotografia em alta resolução, basta substituir o arquivo em
`public/produtos/` e rodar `npm run images` novamente — nenhum código muda.

O texto alternativo de cada imagem fica em `imagens[].alt`, no arquivo do
produto. Os textos atuais são **rascunhos descritivos** e devem ser revisados.

## Deploy — Firebase App Hosting

1. `git push` para o GitHub.
2. No console do Firebase, crie um backend do App Hosting apontando para o repo.
3. Configure `NEXT_PUBLIC_GA_ID` em `apphosting.yaml`.
4. **Não** defina `NEXT_PUBLIC_ALLOW_DRAFT` em produção.

Após o cutover:

- Enviar `/sitemap.xml` no Search Console.
- Pedir remoção de `/sample-page/` e `/teste-produtos/` (já respondem 410).
- Acompanhar **cliques de consultas não-marca**, que hoje são essencialmente
  zero e são a métrica que traduz a queixa original.
