# Yank EPC — Auditoria de SEO e Plano de Ação

**Site:** https://yank.com.br/
**Data da auditoria:** 21/07/2026
**Stack detectada:** WordPress + LiteSpeed Cache + Rank Math SEO + LayerSlider (host: Atmos Host)

---

## 0. Resumo executivo

A queixa principal — *"quando pesquisam Chuveiro e Lava Olhos, o site nunca aparece"* — foi **reproduzida e confirmada**. A causa não é penalidade nem problema técnico de indexação: é **ausência de páginas para rankear**.

Testes realizados:

| Busca | Yank aparece? |
|---|---|
| `Yank EPC chuveiro lava olhos` (marca) | ✅ Sim — 4 resultados, posições de topo |
| `"chuveiro e lava olhos" comprar` | ❌ Não aparece |
| `chuveiro lava olhos emergência NBR 16291 fabricante` | ❌ Não aparece |

**Diagnóstico:** o site rankeia perfeitamente para quem já conhece a marca, e é invisível para quem está procurando o produto. Isso significa que **100% do tráfego orgânico atual é de gente que já conhece a Yank** — o site não capta demanda nova.

**A causa raiz, em uma frase:** o site tem **12 URLs no total** (2 delas lixo), e **nenhuma página de produto**. Os ~28 produtos existem apenas como títulos `<h2>` com códigos de modelo (`CLM-E AI`, `LS`, `CM`, `CLA`) dentro de 7 páginas de categoria. Não há URL para o Google indexar, ranquear ou mostrar.

Os concorrentes que ocupam a primeira página (Cienlab, LojaSynth, Prolab, Net Suprimentos, Hipperquímica, 7Lab, EPI Zeus, Multi Soluções) têm **uma URL dedicada por produto**, com descrição, especificações, fotos e preço/orçamento. É por isso que aparecem e a Yank não.

**Prognóstico:** o problema é totalmente corrigível e o site tem bases técnicas boas (HTTPS, redirects, canonicals, sitemap, mobile — tudo correto). O trabalho é de **arquitetura de conteúdo**, não de conserto técnico.

---

## 1. Inventário atual do site

Sitemap completo (`sitemap_index.xml` → `page-sitemap.xml`) — **12 URLs, zero produtos, zero blog**:

| URL | Título atual | Meta description | Palavras únicas |
|---|---|---|---|
| `/` | Yank EPC - Chuveiro e Lava Olhos de Emergência | 152 ch ✅ | ~466 |
| `/chuveiros-e-lava-olhos-de-emergencia/` | Chuveiros e Lava Olhos - Yank EPC | 228 ch ⚠️ truncada | ~408 |
| `/chuveiros-de-emergencia/` | Chuveiros de Emergência - Yank EPC | 90 ch, **com erro de grafia** | ~159 |
| `/lava-olhos-de-emergencia/` | Lava Olhos - Yank EPC | **"Manual"** (6 ch) ❌ | ~200 |
| `/especiais/` | Especiais - Yank EPC | **"O Mais Completo Chuveiro ELava Olhos De Emergência :"** ❌ | ~168 |
| `/transportaveis/` | Transportáveis - Yank EPC | lixo auto-gerado ❌ | ~191 |
| `/pecas-e-acessorios/` | Peças e Acessórios - Yank EPC | lixo auto-gerado ❌ | ~139 |
| `/acessorios-e-sinalizadores/` | Acessórios e Sinalizadores - Yank EPC | **AUSENTE** ❌ | ~112 |
| `/a-empresa/` | Yank EPC - A Empresa - Yank EPC | 152 ch ✅ | ~428 |
| `/contato/` | Contato - Yank EPC | lixo auto-gerado ❌ | ~115 |
| `/teste-produtos/` | **teste Produtos - Yank EPC** | 🔴 página de teste indexada, **sem H1** | ~121 |
| `/sample-page/` | **Sample Page - Yank EPC** | 🔴 página padrão do WordPress, em inglês | ~260 |

> ⚠️ A contagem de palavras acima inclui o menu de navegação, que se repete **4×** em cada página. O conteúdo único real da página mais importante (`/chuveiros-e-lava-olhos-de-emergencia/`) é de **~250 palavras**. Concorrentes que rankeiam operam com 800–2.000 palavras + tabela de especificações + FAQ.

### Catálogo real (produtos que existem, mas não têm página)

| Categoria | Modelos |
|---|---|
| Chuveiros e Lava Olhos | CLM-E AI SD, CLM-E AI, CLM-E PVC, CLM-E AG, CLM-E CT, CLA, CLESP |
| Chuveiros de Emergência | CM, CA |
| Lava Olhos | LS, LM, LM PVC, LA |
| Especiais | JKW-151, CLMM |
| Transportáveis | LM-UA, CM-UA, CLM-UA |
| Peças e Acessórios | CAPA, DUCHA, PEDAL, FAIXA, PROTETORES, SCALD VALVE, SENSOR, SINALEIRA, TAMPA, ALÇA PUXE, PLACA PUXE, EMERGÊNCIA |

**~28 produtos = ~28 páginas que deveriam existir e não existem.**

---

## 2. Problemas encontrados, por severidade

### 🔴 CRÍTICO — causa direta da queixa

**C1. Não existem páginas de produto.**
Cada produto é apenas um `<h2>` com o código do modelo dentro da página de categoria. Não há URL, não há conteúdo, não há como rankear. Este é ~80% do problema.

**C2. Os títulos visíveis dos produtos são códigos internos.**
Os `<h2>` são literalmente `CLM-E AI SD`, `LS`, `LM`, `CM`, `CA`, `CLA`. Ninguém pesquisa por esses termos. O Google lê a página e não encontra nenhuma menção a "chuveiro de emergência em aço inox" associada a um produto específico — só bullets soltos de especificação.

**C3. Conteúdo raso em todas as páginas.**
~250 palavras únicas na página principal de produto. Não há: como escolher, onde instalar, requisitos da NBR 16291, vazão, tabela comparativa entre modelos, manutenção, FAQ. Não há nada que responda à dúvida de quem está pesquisando.

**C4. Zero conteúdo informativo / blog.**
Não existe `post-sitemap.xml` — o site nunca publicou um artigo. Toda a demanda de topo de funil ("o que exige a NBR 16291", "qual a vazão mínima de um chuveiro de emergência", "com que frequência testar", "chuveiro de emergência é obrigatório?") vai inteira para os concorrentes. É esse conteúdo que constrói autoridade e faz as páginas de produto rankearem.

**C5. Títulos e meta descriptions desperdiçados.**
- `Lava Olhos - Yank EPC` — 21 caracteres de ~60 disponíveis; falta "de Emergência", falta qualquer termo comercial.
- Meta description de `/lava-olhos-de-emergencia/` é a palavra **"Manual"**.
- `/acessorios-e-sinalizadores/` **não tem meta description**.
- `/contato/`, `/pecas-e-acessorios/`, `/transportaveis/`, `/especiais/` têm descriptions auto-geradas a partir do conteúdo (aparecem como "CAPA Orçamento DUCHA Orçamento PEDAL Orçamento..." — ilegível na SERP).
- Erro de grafia em produção: `/chuveiros-de-emergencia/` → *"fabricados com **mateiral** de **altissima** qualidade"*.

### 🟠 ALTO

**A1. Páginas-lixo indexadas.**
`/sample-page/` (página padrão do WordPress, texto em inglês) e `/teste-produtos/` (página de teste, **sem H1**) estão em `index, follow` e no sitemap. Sinalizam site abandonado/descuidado.

**A2. Structured data errado e incompleto.**
- A home está marcada como `Article` com `author: LuizMarcelo` — está errado; é o site de uma empresa, não um artigo de blog.
- **Não existe schema `Product`** em lugar nenhum — por isso a Yank nunca aparece nos resultados ricos de produto.
- Não existe `LocalBusiness`/`Organization` com endereço, telefone e horário (o endereço existe no rodapé mas não está estruturado).
- Não existe `BreadcrumbList` nem `FAQPage`.
- `primaryImageOfPage` aponta para `https://yank.com.br/v1/wp-content/uploads/2025/01/slider-2.webp` — uma URL de staging antiga que hoje **redireciona (301)**. Referência quebrada dentro do schema.
- `sameAs: ["https://yank.com.br/v1"]` — aponta para o próprio site antigo, não para as redes sociais.

**A3. Texto alternativo genérico em 100% das imagens.**
As 102 imagens do site têm `alt="YANK EPC"` (ou `"Yank EPC"`). As fotos dos produtos são o principal ativo visual da empresa e não geram **nenhum** tráfego de busca por imagens. Deveria ser `alt="Chuveiro e lava-olhos de emergência CLM-E AI em aço inox AISI 304"`.

**A4. Redes sociais desconectadas do site.**
O Instagram (`@yankepc`) rankeia para buscas de marca — às vezes acima de páginas do próprio site. Não há links do site para o Instagram nem `sameAs` no schema, então o Google não associa os perfis à empresa.

### 🟡 MÉDIO

**M1. Performance / Core Web Vitals.**
- HTML da home: **267 KB** (muito acima do saudável para uma página institucional).
- **129 KB de CSS inline** + 22 KB de JS inline + LayerSlider + jQuery.
- TTFB com cache: **0,13–0,16 s** ✅ (LiteSpeed funcionando bem).
- TTFB **sem cache: 3,3–3,6 s** ❌.
- Requisição com User-Agent mobile (bucket de cache separado, via `vary: User-Agent`): **2,5 s** ❌. Como o Google usa indexação mobile-first, o rastreamento tende a cair no bucket lento.

**M2. Nenhum formulário de contato — só WhatsApp.**
Todos os botões "Orçamento" são links `wa.me`. Não há formulário, não há captura de e-mail, não há evento de conversão rastreável. Impossível medir o ROI de SEO. (O `mailto:` do rodapé ainda traz o texto *"gostaria de mais **iformações**"* — erro de grafia.)

**M3. Página `/acessorios-e-sinalizadores/` praticamente vazia.**
112 palavras, nenhum `<h2>`, sem meta description. Duplica o propósito de `/pecas-e-acessorios/`.

**M4. Backlinks do domínio antigo perdidos.**
A empresa aparece em buscas como *"YANK - Metalúrgica Ltda."* no domínio `jankowiski.com.br`, que **não resolve mais em DNS** (domínio morto). Se a Yank ainda controla esse domínio, todo o histórico de links dele está sendo desperdiçado.

### ✅ O que já está correto (não mexer)

- HTTPS com HTTP/2 + HTTP/3, `alt-svc` configurado.
- Redirects canônicos corretos: `http://`, `www.` e `http://www.` → `https://yank.com.br/` (301).
- Tags `canonical` corretas em todas as páginas.
- `robots.txt` correto, com sitemap declarado.
- `<meta name="viewport">` presente; `<html lang="pt-BR">` correto.
- Arquivo de autor (`/author/luizmarcelo/`) já está `noindex` ✅.
- Rank Math instalado e funcionando — a ferramenta está lá, só não foi preenchida.
- LiteSpeed Cache entregando 130 ms em páginas cacheadas.

---

## 3. Plano de ação

### Fase 1 — Correções imediatas (semana 1) — baixo esforço, ganho rápido

| # | Ação | Onde |
|---|---|---|
| 1.1 | Excluir `/sample-page/` e `/teste-produtos/` (ou `noindex` + remover do sitemap) | WP Admin → Páginas |
| 1.2 | Corrigir erro de grafia: "mateiral de altissima" → "material de altíssima" | `/chuveiros-de-emergencia/` |
| 1.3 | Corrigir "iformações" → "informações" no link `mailto:` do rodapé | Template do rodapé |
| 1.4 | Escrever title + meta description manualmente nas 10 páginas reais | Rank Math, por página |
| 1.5 | Trocar o `alt` de todas as imagens de produto por descrições reais | Biblioteca de Mídia |
| 1.6 | Adicionar links para o Instagram no rodapé + `sameAs` no schema | Rodapé + Rank Math → Social |
| 1.7 | Corrigir o schema da home: `Article` → `WebPage`; remover `author`; corrigir `primaryImageOfPage` (hoje aponta para `/v1/`, que dá 301) | Rank Math → Configurações do Schema |
| 1.8 | Adicionar schema `LocalBusiness` com endereço (Rua Adelino Gasparine, 251 — Jardim Verona, Itatiba/SP, CEP 13253-533), telefone e horário | Rank Math → Local SEO |
| 1.9 | Verificar/criar o Google Business Profile de Itatiba e vincular ao site | Google Business |
| 1.10 | Confirmar Search Console + Bing Webmaster Tools e enviar o sitemap | GSC |

**Modelo de titles e descriptions para a Fase 1:**

| Página | Title proposto (≤60 ch) | Meta description proposta (≤155 ch) |
|---|---|---|
| `/` | Chuveiro e Lava Olhos de Emergência \| Fabricante — Yank EPC | Fabricante de chuveiros e lava-olhos de emergência há mais de 30 anos. Equipamentos em aço inox conforme a ABNT NBR 16291. Solicite seu orçamento. |
| `/chuveiros-e-lava-olhos-de-emergencia/` | Chuveiro e Lava Olhos de Emergência — Aço Inox e PVC \| Yank | Chuveiros com lava-olhos acoplado em aço inox AISI 304, PVC ou galvanizado. Acionamento manual ou automático, conforme NBR 16291. Peça um orçamento. |
| `/chuveiros-de-emergencia/` | Chuveiro de Emergência Industrial \| Fabricante — Yank EPC | Chuveiros de emergência para indústria e laboratório, com acionamento manual ou automático. Fabricação própria conforme a ABNT NBR 16291:2014. |
| `/lava-olhos-de-emergencia/` | Lava-Olhos de Emergência — Bancada e Coluna \| Yank EPC | Lava-olhos de emergência em aço inox e PVC para laboratórios e indústria. Modelos de bancada, coluna e portátil. Conforme NBR 16291. |
| `/transportaveis/` | Chuveiro e Lava-Olhos Portátil / Transportável \| Yank EPC | Chuveiros e lava-olhos autônomos de 50 e 75 litros em aço inox, para áreas sem rede hidráulica. Ideais para obras e áreas externas. |
| `/especiais/` | Chuveiros de Emergência Especiais sob Medida \| Yank EPC | Equipamentos de emergência sob medida para aplicações específicas. Projetos personalizados conforme a necessidade da sua operação. |
| `/pecas-e-acessorios/` | Peças e Acessórios para Chuveiro de Emergência \| Yank EPC | Ducha, pedal, sensor, scald valve, sinaleira, alça puxe e placas de sinalização. Peças de reposição originais Yank EPC. |
| `/a-empresa/` | A Empresa — 30 Anos em Equipamentos de Emergência \| Yank | Yank EPC (antiga Yank Metalúrgica): mais de 30 anos fabricando chuveiros e lava-olhos de emergência. Certificação SGS e ISO 9001. |
| `/contato/` | Contato — Orçamento de Chuveiro de Emergência \| Yank EPC | Fale com a Yank EPC em Itatiba/SP. Orçamento de chuveiros e lava-olhos de emergência por WhatsApp, telefone ou e-mail. |

---

### Fase 2 — Páginas de produto (semanas 2–6) — **a correção principal**

Esta é a fase que resolve a queixa. Sem ela, nada mais importa.

**Criar uma página indexável por produto**, com URL descritiva (não o código do modelo):

```
/chuveiros-e-lava-olhos-de-emergencia/
    ├── clm-e-ai-aco-inox-304/              (CLM-E AI)
    ├── clm-e-ai-sd-aco-inox-com-ducha/     (CLM-E AI SD)
    ├── clm-e-pvc/                          (CLM-E PVC)
    ├── clm-e-ag-aco-galvanizado/           (CLM-E AG)
    ├── clm-e-ct-cortina-de-protecao/       (CLM-E CT)
    ├── cla-acionamento-automatico/         (CLA)
    └── clesp-plataforma-unica/             (CLESP)
/chuveiros-de-emergencia/
    ├── cm-acionamento-manual/
    └── ca-acionamento-automatico/
/lava-olhos-de-emergencia/
    ├── ls-lava-olhos-de-bancada/
    ├── lm-lava-olhos-de-coluna/
    ├── lm-pvc/
    └── la-lava-olhos-automatico/
/transportaveis/
    ├── clm-ua-chuveiro-lava-olhos-portatil/
    ├── cm-ua-chuveiro-portatil/
    └── lm-ua-lava-olhos-portatil/
```

**Regra de ouro para o H1 de cada produto:** o termo que as pessoas pesquisam vem primeiro, o código do modelo vem depois.

> ❌ Hoje: `<h2>CLM-E AI</h2>`
> ✅ Proposto: `<h1>Chuveiro e Lava-Olhos de Emergência em Aço Inox AISI 304 — Modelo CLM-E AI</h1>`

**Template obrigatório de página de produto (600–1.000 palavras):**

1. **H1** no formato acima
2. Foto principal + galeria, com `alt` descritivo em cada imagem
3. Parágrafo de abertura (2–3 frases) descrevendo o que é e para quem serve
4. **Tabela de especificações técnicas** — material, bitola (3/4" ou 1"), vazão (L/min), tipo de acionamento, dimensões, peso, tipo de crivo/bacia, sinalização
5. **Aplicações** — em que setores se usa (química, farmacêutica, laboratório, alimentícia, tratamento de água…)
6. **Conformidade** — como o modelo atende a ABNT NBR 16291:2014 (e ANSI/ISEA Z358.1, se aplicável)
7. **Itens inclusos** e opcionais
8. Link para download do manual / desenho técnico (PDF)
9. **FAQ** — 3 a 5 perguntas reais
10. CTA de orçamento (formulário **+** WhatsApp — ver Fase 4)
11. Links internos: para a categoria pai, para 2–3 modelos relacionados e para 1–2 artigos do blog

**Schema `Product` em cada página** (hoje inexistente):

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Chuveiro e Lava-Olhos de Emergência em Aço Inox AISI 304 CLM-E AI",
  "sku": "CLM-E AI",
  "brand": { "@type": "Brand", "name": "Yank EPC" },
  "manufacturer": { "@id": "https://yank.com.br/#organization" },
  "image": ["https://yank.com.br/wp-content/uploads/.../clm-e-ai.webp"],
  "description": "Chuveiro de emergência com lava-olhos acoplado, 100% aço inox AISI 304...",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "url": "https://yank.com.br/chuveiros-e-lava-olhos-de-emergencia/clm-e-ai-aco-inox-304/",
    "seller": { "@id": "https://yank.com.br/#organization" }
  }
}
```

> Nota: sem preço público, use `Offer` sem `price` ou com `PriceSpecification` do tipo "sob consulta". Não invente preço — dado falso em schema gera penalização manual.

**Também nesta fase:**
- Adicionar `BreadcrumbList` em todas as páginas + breadcrumbs visíveis
- Reescrever as páginas de categoria como hubs reais: texto introdutório (300–500 palavras) + **tabela comparativa dos modelos da categoria** + links para cada produto
- Resolver `/acessorios-e-sinalizadores/`: fundir com `/pecas-e-acessorios/` e aplicar 301, ou dar conteúdo próprio de verdade

---

### Fase 3 — Conteúdo e autoridade (mês 2 em diante)

Criar `/blog/` (ou `/conteudo/`) e publicar **2 artigos por mês**. Cada artigo linka para as páginas de produto relevantes.

Pauta inicial, priorizada por intenção de busca:

| # | Artigo | Intenção | Linka para |
|---|---|---|---|
| 1 | NBR 16291: o que a norma exige de chuveiros e lava-olhos de emergência | Informacional, alto volume | Todas as categorias |
| 2 | Chuveiro de emergência é obrigatório? O que dizem as NRs e a NBR 16291 | Informacional, dúvida de compliance | Categorias |
| 3 | Qual a vazão mínima de um chuveiro de emergência e de um lava-olhos? | Técnica, muito pesquisada | CLM-E AI, LS |
| 4 | Onde instalar o chuveiro de emergência: distância, altura e acesso | Técnica | Categorias |
| 5 | Aço inox, PVC ou galvanizado: como escolher o material | **Comparativo — alta conversão** | CLM-E AI, CLM-E PVC, CLM-E AG |
| 6 | Acionamento manual x automático: qual escolher | **Comparativo — alta conversão** | CM/CA, CLA, CLESP |
| 7 | Teste semanal de chuveiro de emergência: como fazer e registrar | Manutenção, gera recorrência | Peças e acessórios |
| 8 | Chuveiro de emergência portátil: quando faz sentido | Nicho | Transportáveis |
| 9 | Lava-olhos de bancada x de coluna: diferenças e aplicações | Comparativo | LS, LM |
| 10 | Manutenção preventiva: peças que mais precisam de reposição | Pós-venda | Peças e acessórios |

**Fora do site (off-page):**
- Recuperar o domínio antigo `jankowiski.com.br`: se a Yank ainda o controla, apontar 301 para `yank.com.br` e recuperar o histórico de links. Se não controla, considerar reaver.
- Cadastro em diretórios e marketplaces B2B do setor (Soluções Industriais, Mercado Industrial, Guia da Indústria, catálogos de EPI/EPC).
- Publicar os manuais e desenhos técnicos em PDF como recursos linkáveis.
- Associações setoriais e a certificadora (SGS) — pedir link na página de empresas certificadas.

---

### Fase 4 — Conversão e medição (paralelo à Fase 2)

- **Adicionar formulário de orçamento** em cada página de produto, com o modelo pré-preenchido (mantendo o WhatsApp como opção secundária). Hoje não há como medir nenhuma conversão.
- Configurar **eventos de conversão no GA4** (GTM já instalado: `GT-MBH6J9B4`) para: envio de formulário, clique no WhatsApp, clique no telefone, download de manual.
- Vincular **Search Console ↔ GA4** e acompanhar mensalmente: impressões e cliques por consulta **não-marca**.
- Criar uma planilha de acompanhamento de posição para ~20 termos-alvo.

---

### Fase 5 — Performance (mês 2–3)

- Reduzir o CSS inline (129 KB) — ativar Critical CSS do LiteSpeed e adiar o resto.
- Avaliar a remoção do LayerSlider da home (é o componente mais pesado; um banner estático costuma converter igual ou melhor e melhora o LCP).
- Investigar o TTFB de 3,5 s sem cache e os 2,5 s no bucket mobile — pedir ao Atmos Host para revisar o cache mobile (`vary: User-Agent`); considerar pré-aquecimento de cache (crawler do LiteSpeed).
- Servir as imagens já em WebP com `width`/`height` explícitos (evita CLS).
- Medir antes e depois no PageSpeed Insights, **em mobile**.

---

## 4. Mapa de palavras-chave

| Palavra-chave alvo | Página responsável | Situação hoje |
|---|---|---|
| chuveiro e lava olhos de emergência | `/chuveiros-e-lava-olhos-de-emergencia/` | ❌ não rankeia |
| chuveiro lava olhos | idem | ❌ não rankeia |
| chuveiro de emergência | `/chuveiros-de-emergencia/` | ❌ não rankeia |
| lava olhos de emergência | `/lava-olhos-de-emergencia/` | ❌ não rankeia |
| chuveiro de emergência inox | nova página CLM-E AI | ⬜ não existe |
| chuveiro de emergência PVC | nova página CLM-E PVC | ⬜ não existe |
| chuveiro de emergência automático | nova página CLA / CLESP | ⬜ não existe |
| lava olhos de bancada | nova página LS | ⬜ não existe |
| lava olhos de coluna | nova página LM | ⬜ não existe |
| chuveiro lava olhos portátil | `/transportaveis/` | ❌ não rankeia |
| chuveiro de emergência NBR 16291 | artigo #1 | ⬜ não existe |
| vazão chuveiro de emergência | artigo #3 | ⬜ não existe |
| fabricante chuveiro de emergência | `/` + `/a-empresa/` | ❌ não rankeia |
| chuveiro de emergência para laboratório | categoria + artigo | ⬜ não existe |
| peças para chuveiro de emergência | `/pecas-e-acessorios/` | ❌ não rankeia |

---

## 5. Concorrentes de referência

Empresas que hoje ocupam as posições que a Yank deveria disputar — todas com página dedicada por produto:

| Concorrente | O que faz melhor |
|---|---|
| [Cienlab](https://www.cienlab.com.br/chuveiro-lava-olhos/) | Uma URL por variação de produto; cita a NBR no título |
| [LojaSynth](https://www.lojasynth.com/descartaveis-epis/chuveiros-de-emergencia/chuveiro-e-lava-olhos-de-emergencia-em-inox) | URL profunda e descritiva; e-commerce com preço |
| [Hipperquímica](https://hipperquimica.com.br/chuveiro-lava-olhos-de-emergencia/) | Página inteira otimizada em torno da NBR 16291:2014 |
| [7Lab](https://www.7lab.com.br/equipamentos-para-laboratorio/chuveiro-lava-olhos/chuveiro-lava-olhos-7lab) | Especificações técnicas completas + conformidade ANSI |
| [Net Suprimentos](https://www.netsuprimentos.com.br/epis-e-seguranca/produtos-tecnicos/chuveiro-e-lava-olhos) | Categoria com filtros e muitos produtos indexados |
| [Prolab](https://www.lojaprolab.com.br/produto/chuveiro-lava-olhos-de-emergencia-80307) | Preço visível e entrega para todo o Brasil |
| [Haws](https://hawsco.com.br/produtos/chuveiros-e-lava-olhos) | Concorrente direto de fabricação, catálogo bem estruturado |
| [EPI Zeus](https://epizeus.com.br/chuveiro-de-emergencia-com-lava-olhos) | URL casada exatamente com o termo de busca |
| [Arican](https://www.arican.com.br/epc-equipamentos-de-protecao-coletiva/chuveiro-e-lava-olhos-de-emergencia.html) | Posicionamento por "EPC", igual ao da Yank |

**Vantagem competitiva da Yank a explorar:** é **fabricante** (30+ anos, certificação SGS, ISO 9001), enquanto boa parte dos que rankeiam são apenas revendedores. Isso é um diferencial de E-E-A-T forte e hoje está completamente subaproveitado — precisa aparecer nos títulos, nas páginas de produto e no schema.

---

## 6. Expectativa de resultados

| Prazo | Resultado esperado |
|---|---|
| Semanas 1–2 | Indexação limpa; snippets legíveis na SERP; possível melhora de CTR imediata |
| Mês 2 | ~28 novas URLs indexadas; primeiras aparições em cauda longa ("chuveiro de emergência inox", "lava olhos de bancada") |
| Mês 3–4 | Páginas de produto na 2ª–3ª página para os termos principais; tráfego não-marca começa a existir |
| Mês 6 | 1ª página para termos de cauda longa e modelos; primeira página disputável para "chuveiro e lava olhos de emergência" |
| Mês 9–12 | Competitivo nos termos genéricos principais, sustentado pelo blog e por backlinks |

**A métrica que importa** não é posição isolada: é **cliques de consultas não-marca no Search Console**, que hoje é essencialmente zero. É esse número que traduz a queixa original em algo mensurável.

---

## 7. Ordem de execução (o que fazer primeiro)

1. **Fase 1** inteira — é rápida, barata e limpa o terreno.
2. **Fase 2 em 3 lotes**, começando pelos produtos de maior procura:
   - Lote 1: CLM-E AI, CLM-E PVC, CLA (os mais vendidos, já destacados na home)
   - Lote 2: restante de Chuveiros e Lava Olhos + Lava Olhos
   - Lote 3: Chuveiros, Transportáveis, Especiais, Peças
3. **Fase 4** junto com o Lote 1 — sem medição não há como provar resultado.
4. **Fase 3** a partir do mês 2, em ritmo constante.
5. **Fase 5** quando as fases 1–2 estiverem entregues.

> **Não pule a Fase 2.** Ajustar títulos e meta descriptions em 12 páginas sem criar as páginas de produto vai melhorar marginalmente as buscas de marca e **não vai resolver a queixa**. O site não aparece para "Chuveiro e Lava Olhos" porque não existe uma página sobre "Chuveiro e Lava Olhos" — existe uma lista de códigos de modelo.

---

## Anexo — Como as evidências foram coletadas

- Download e análise dos 12 HTMLs do sitemap (title, description, canonical, robots, H1/H2, contagem de palavras, links).
- `robots.txt`, `sitemap_index.xml`, `page-sitemap.xml`, `local-sitemap.xml`.
- Testes de redirect: `http://`, `www.`, `http://www.` → todos 301 corretos.
- Extração e validação do JSON-LD de structured data.
- Auditoria de `alt` nas 102 imagens do site.
- Medição de TTFB com e sem cache, e com User-Agents desktop / mobile / Googlebot.
- Buscas reais para verificar a queixa (marca vs. não-marca) e mapear concorrentes.
- Verificação de caminhos comuns: `/v1/` (301), `/author/luizmarcelo/` (200, já noindex), `/produtos/`, `/blog/` (301).

Arquivos brutos da auditoria: `pages/*.html`, `sitemap_index.xml`, `page-sitemap.xml` neste diretório.
