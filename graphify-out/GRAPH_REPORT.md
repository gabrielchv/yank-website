# Graph Report - .  (2026-07-21)

## Corpus Check
- 169 files · ~185,198 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 853 nodes · 1544 edges · 43 communities (34 shown, 9 thin omitted)
- Extraction: 87% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 188 edges (avg confidence: 0.88)
- Token cost: 176,197 input · 0 output

## Community Hubs (Navigation)
- Catálogo e Blocos de Conteúdo
- Caveman Skill Docs (.continue)
- Caveman Skill Docs (.roo)
- Caveman Skill Docs (.agents)
- Dependências npm
- Produtos e Site WordPress Legado
- Empresa, Normas e Stack WordPress
- Compress CLI (.agents)
- Compress CLI (.continue)
- Compress CLI (.roo)
- Configuração TypeScript
- Benchmark e Validate (.agents)
- Benchmark e Validate (.continue)
- Benchmark e Validate (.roo)
- Componentes de UI e Analytics
- Páginas Institucionais
- Páginas de Categoria e Produto
- Layout Raiz e Metadados SEO
- Fotos de Acionamento e Plataforma
- Catálogo Fotográfico de Conjuntos
- Home, 404 e Cards de Produto
- Identidade Visual e Banners
- Sinalização, Sensores e Acessórios
- Lava-Olhos e Unidades Autônomas
- Conteúdo Estruturado e Sitemap
- Arquitetura SSG e Performance
- Diagnóstico SEO — Páginas de Produto
- Structured Data e NAP
- Pipeline de Imagens
- Páginas de Artigo do Blog
- Portão de Dados e Schema Zod
- Analytics, Deploy e Métricas
- Títulos, H1 e CTAs de Conversão
- Conteúdo, Blog e Backlinks
- Proxy e Redirecionamentos
- Pacote scripts (.agents)
- Pacote scripts (.continue)
- Configuração ESLint
- Configuração Next.js
- Configuração PostCSS
- Documentos Raiz do Projeto
- Pacote scripts (.roo)
- Conteúdo Raso — Achado SEO

## God Nodes (most connected - your core abstractions)
1. `schemaTrilha()` - 16 edges
2. `compilerOptions` - 16 edges
3. `validate()` - 14 edges
4. `validate()` - 14 edges
5. `validate()` - 14 edges
6. `compress_file()` - 12 edges
7. `compress_file()` - 12 edges
8. `compress_file()` - 12 edges
9. `construirMetadata()` - 12 edges
10. `Chuveiros e Lava Olhos (/chuveiros-e-lava-olhos-de-emergencia/)` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Portão de dados provisórios (build bloqueia rascunho)` --semantically_similar_to--> `A2 — Structured data errado e incompleto`  [INFERRED] [semantically similar]
  README.md → seo-analysis/plan.md
- `npm run images — pipeline WebP e dimensões para CLS zero` --semantically_similar_to--> `Template obrigatório de página de produto (600–1.000 palavras)`  [INFERRED] [semantically similar]
  README.md → seo-analysis/plan.md
- `Regra: nenhum 'use client' importa de @/content/*` --semantically_similar_to--> `M1 — Performance / Core Web Vitals (267 KB, TTFB 3,5 s)`  [INFERRED] [semantically similar]
  README.md → seo-analysis/plan.md
- `src/content/empresa.ts — NAP fonte única` --semantically_similar_to--> `Organization #organization (Yank EPC)`  [INFERRED] [semantically similar]
  README.md → seo-analysis/home.html
- `runConfig — minInstances 0, escala a zero` --semantically_similar_to--> `M1 — Performance / Core Web Vitals (267 KB, TTFB 3,5 s)`  [INFERRED] [semantically similar]
  apphosting.yaml → seo-analysis/plan.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Fluxo do portão de dados provisórios** — readme_draft_data_gate, readme_datastatus_draft, readme_check_data_script, readme_npm_run_build, readme_content_schema_zod, apphosting_next_public_allow_draft [EXTRACTED 1.00]
- **All six pages share identical Astra/Elementor chrome: same global nav, same footer NAP block, same Rank Math @graph skeleton, same LiteSpeed inlined critical CSS** — seo_analysis_pages_a_empresa_page, seo_analysis_pages_acessorios_e_sinalizadores_page, seo_analysis_pages_chuveiros_de_emergencia_page, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_page, seo_analysis_pages_contato_page, seo_analysis_pages_especiais_page, seo_analysis_pages_a_empresa_wordpress_stack, seo_analysis_pages_a_empresa_global_nav, seo_analysis_pages_a_empresa_site_footer [INFERRED 0.95]
- **Safety compliance and certification framework claimed across the site (ANSI Z358.1-2009, ABNT NBR 16291:2014, ISO 9001:2008 via SGS)** — seo_analysis_pages_a_empresa_ansi_z358_1_2009, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_abnt_nbr_16291_2014, seo_analysis_pages_a_empresa_iso_9001_2008, seo_analysis_pages_a_empresa_linha_de_produtos [INFERRED 0.85]
- **CLM combined emergency shower + eyewash product family (manual and automatic variants)** — seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_clm_e_ai_sd, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_clm_e_ai, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_clm_e_pvc, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_clm_e_ag, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_clm_e_ct, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_cla, seo_analysis_pages_chuveiros_e_lava_olhos_de_emergencia_clesp, seo_analysis_pages_especiais_clmm [EXTRACTED 1.00]
- **Pages sharing the identical global product navigation and footer** — seo_analysis_pages_home_page, seo_analysis_pages_lava_olhos_de_emergencia_page, seo_analysis_pages_pecas_e_acessorios_page, seo_analysis_pages_transportaveis_page, seo_analysis_pages_teste_produtos_page, seo_analysis_pages_sample_page_page, seo_analysis_pages_home_global_navigation [EXTRACTED 1.00]
- **Index-hygiene defects found across the legacy WordPress site** — seo_analysis_pages_home_legacy_v1_urls, seo_analysis_pages_sample_page_orphan_placeholder_defect, seo_analysis_pages_teste_produtos_duplicate_content_defect, seo_analysis_pages_lava_olhos_de_emergencia_thin_meta_description, seo_analysis_pages_pecas_e_acessorios_keyword_stuffed_description [INFERRED 0.85]
- **Quote-request funnel: product listings feed Orçamento CTA and WhatsApp contact instead of checkout** — seo_analysis_pages_pecas_e_acessorios_orcamento_cta, seo_analysis_pages_home_whatsapp_cta, seo_analysis_pages_pecas_e_acessorios_page, seo_analysis_pages_teste_produtos_page, seo_analysis_pages_lava_olhos_de_emergencia_page, seo_analysis_pages_transportaveis_page [INFERRED 0.85]
- **Achados críticos que compõem o diagnóstico da auditoria** — seo_analysis_plan_diagnostico_ausencia_paginas, seo_analysis_plan_c1_sem_paginas_produto, seo_analysis_plan_c2_titulos_codigos_modelo, seo_analysis_plan_c3_conteudo_raso, seo_analysis_plan_c4_sem_blog, seo_analysis_plan_c5_titles_meta [EXTRACTED 1.00]
- **Remediação de structured data (JSON-LD errado → Product/LocalBusiness/Breadcrumb)** — seo_analysis_home_article_schema_luizmarcelo, seo_analysis_home_primaryimageofpage_v1, seo_analysis_plan_a2_structured_data_errado, seo_analysis_plan_schema_product, seo_analysis_plan_localbusiness, seo_analysis_plan_breadcrumblist, readme_lib_schema_org [INFERRED 0.85]
- **Família de equipamentos montados sobre plataforma de grelha verde (CA, CLA, CLESP)** — public_produtos_ca_chuveiro_acionamento_automatico, public_produtos_cla_conjunto_automatico, public_produtos_clesp_plataforma_unica, public_produtos_cla_plataforma_grelhada [INFERRED 0.85]
- **Padrão visual de sinalização de emergência amarelo/preto aplicado a toda a linha** — public_produtos_alca_puxe_placa_puxe, public_produtos_clm_e_ai_placa_emergencia, public_produtos_ca_chuveiro_acionamento_automatico, public_produtos_cla_conjunto_automatico, public_produtos_clesp_plataforma_unica, public_produtos_clm_e_ag_aco_galvanizado, public_produtos_clm_e_ai_aco_inox_304, public_produtos_clm_e_ai_sd_aco_inox_com_ducha, public_produtos_capa_cortina_de_emergencia [INFERRED 0.85]
- **Família CLM-E: coluna única com flange de piso, chuveiro e lava-olhos integrados, variando o material (AG, AI, AI SD)** — public_produtos_clm_e_ag_aco_galvanizado, public_produtos_clm_e_ai_aco_inox_304, public_produtos_clm_e_ai_sd_aco_inox_com_ducha, public_produtos_clm_e_ai_bacia_lava_olhos_dupla_saida [INFERRED 0.95]
- **Yank Emergency Shower + Eyewash Product Line (Combined Units)** — public_produtos_clm_e_ct_chuveiro_lava_olhos_cortina, public_produtos_clm_e_pvc_chuveiro_lava_olhos_pvc, public_produtos_clmm_chuveiro_lava_olhos_multiplo, public_produtos_clm_ua_chuveiro_lava_olhos_unidade_autonoma, public_produtos_faixa_chuveiro_lava_olhos_faixa_zebrada [INFERRED 0.85]
- **Mobile Autonomous 50 L Emergency Units (No Plumbing Required)** — public_produtos_clm_ua_chuveiro_lava_olhos_unidade_autonoma, public_produtos_cm_ua_chuveiro_unidade_autonoma, public_produtos_clm_ua_unidade_autonoma_50_litros, public_produtos_faixa_marca_jankowiski_yank [INFERRED 0.85]
- **Shared Emergency Signage and Activation Standard Across Product Line** — public_produtos_cm_placa_sinalizacao_emergencia, public_produtos_cm_acionador_puxe, public_produtos_faixa_sinalizacao_zebrada_alta_visibilidade, public_produtos_cm_chuveiro_emergencia_coluna, public_produtos_clmm_chuveiro_lava_olhos_multiplo [INFERRED 0.85]
- **Complete Emergency Station Installation (unit, foot actuator, signage)** — public_produtos_jkw_151_combined_shower_eyewash, public_produtos_pedal_foot_pedal_actuator, public_produtos_placa_emergencia_sign, public_produtos_la_pedestal_eyewash_grate [INFERRED 0.75]
- **Yank Eyewash Station Product Family (mounting/supply variants of one design)** — public_produtos_lm_pedestal_eyewash, public_produtos_lm_pvc_pedestal_eyewash_pvc, public_produtos_la_pedestal_eyewash_grate, public_produtos_ls_wall_eyewash, public_produtos_lm_ua_autonomous_eyewash_unit [INFERRED 0.85]
- **Emergency Actuation Mechanisms (hands-free / rapid-trigger designs)** — public_produtos_jkw_151_pull_rod_actuation, public_produtos_pedal_hands_free_activation, public_produtos_ls_empurre_yank_placard, public_produtos_pedal_foot_pedal_actuator [INFERRED 0.85]
- **Acessórios de Ampliação do Chuveiro/Lava-Olhos de Emergência Yank EPC** — public_produtos_placa_puxe_placa_sinalizacao_puxe, public_produtos_protetores_protetores_crivo_lava_olhos, public_produtos_scald_valve_valvula_antiescaldamento, public_produtos_sensor_sensor_fluxo_indutivo, public_produtos_sinaleira_sinaleira_luminosa, public_produtos_tampa_tampa_protetora_bacia [INFERRED 0.85]
- **Cadeia de Percepção do Acionamento de Emergência (detectar, sinalizar, orientar)** — public_produtos_sensor_sensor_fluxo_indutivo, public_produtos_sinaleira_sinaleira_luminosa, public_produtos_placa_puxe_placa_sinalizacao_puxe, public_produtos_sensor_monitoramento_remoto_acionamento [INFERRED 0.75]
- **Proteção Física do Conjunto de Lava-Olhos (tampa, protetores de crivo, válvula térmica)** — public_produtos_tampa_tampa_protetora_bacia, public_produtos_protetores_protetores_crivo_lava_olhos, public_produtos_scald_valve_valvula_antiescaldamento, public_produtos_tampa_protecao_contra_poeira [INFERRED 0.75]
- **Local Business NAP Trust Signals (facade, address 251, WhatsApp phone, on-product tag)** — public_site_empresa_facade_photo, public_site_empresa_yank_epc_company, public_site_empresa_whatsapp_contact, public_site_hero_inspection_tag, public_site_empresa_physical_trust_signal [INFERRED 0.75]
- **Homepage Hero Carousel Pattern: two 1400x500 product banners, headline left, product cut-out right** — public_site_hero_eyewash_banner, public_site_hero_2_emergency_shower_banner, public_site_hero_chemical_exposure_value_prop, public_site_hero_2_prevention_value_prop [INFERRED 0.85]
- **YANK EPC Brand Identity System (pictogram, wordmark, tagline, light/dark variants)** — public_site_logo_primary_logo, public_site_logo_branco_white_logo, public_site_logo_safety_shower_pictogram, public_site_logo_brand_tagline [INFERRED 0.85]
- **Cavecrew Subagent Trio with Compressed Output Contracts** — _agents_skills_cavecrew_skill_cavecrew_investigator, _agents_skills_cavecrew_skill_cavecrew_builder, _agents_skills_cavecrew_skill_cavecrew_reviewer, _agents_skills_cavecrew_skill_output_contracts, _agents_skills_cavecrew_skill_context_budget_win [EXTRACTED 1.00]
- **Auto-Clarity Escape Hatch Shared Across Caveman Skills** — _agents_skills_caveman_skill_auto_clarity, _agents_skills_caveman_review_skill_auto_clarity, _agents_skills_caveman_commit_skill_auto_clarity, _agents_skills_cavecrew_skill_auto_clarity [INFERRED 0.85]
- **Token-Savings Surfaces (output, input, delegation, measurement)** — _agents_skills_caveman_skill_caveman, _agents_skills_caveman_compress_skill_caveman_compress, _agents_skills_cavecrew_skill_context_budget_win, _agents_skills_caveman_stats_skill_caveman_stats [INFERRED 0.85]
- **Cavecrew Three-Subagent Delegation System** — _continue_skills_cavecrew_skill_cavecrew, _continue_skills_cavecrew_skill_cavecrew_investigator, _continue_skills_cavecrew_skill_cavecrew_builder, _continue_skills_cavecrew_skill_cavecrew_reviewer, _continue_skills_cavecrew_skill_output_contracts [EXTRACTED 1.00]
- **Caveman Skill Suite (modes + sibling skills)** — _continue_skills_caveman_skill_caveman, _continue_skills_caveman_commit_skill_caveman_commit, _continue_skills_caveman_review_skill_caveman_review, _continue_skills_caveman_compress_skill_caveman_compress, _continue_skills_caveman_help_skill_caveman_help, _continue_skills_caveman_stats_skill_caveman_stats [EXTRACTED 1.00]
- **Auto-Clarity Escape Hatch Shared Across Skills** — _continue_skills_caveman_skill_auto_clarity, _continue_skills_caveman_commit_skill_auto_clarity, _continue_skills_caveman_review_skill_auto_clarity, _continue_skills_cavecrew_skill_auto_clarity [INFERRED 0.95]
- **Cavecrew locate-fix-verify delegation flow** — _roo_skills_cavecrew_skill_cavecrew_investigator, _roo_skills_cavecrew_skill_cavecrew_builder, _roo_skills_cavecrew_skill_cavecrew_reviewer, _roo_skills_cavecrew_skill_chaining_patterns, _roo_skills_cavecrew_skill_output_contracts [EXTRACTED 1.00]
- **Auto-clarity escape hatch shared across caveman skills** — _roo_skills_caveman_skill_auto_clarity, _roo_skills_caveman_review_skill_auto_clarity, _roo_skills_caveman_commit_skill_auto_clarity, _roo_skills_cavecrew_skill_auto_clarity [INFERRED 0.85]
- **Caveman skill suite advertised by caveman-help** — _roo_skills_caveman_skill_caveman, _roo_skills_caveman_commit_skill_caveman_commit, _roo_skills_caveman_review_skill_caveman_review, _roo_skills_caveman_compress_skill_caveman_compress, _roo_skills_caveman_help_skill_caveman_help, _roo_skills_caveman_stats_skill_caveman_stats [EXTRACTED 1.00]

## Communities (43 total, 9 thin omitted)

### Community 0 - "Catálogo e Blocos de Conteúdo"
Cohesion: 0.06
Nodes (57): rascunhos, AvisoRascunho(), TabelaEspecificacoes(), aplicacoesCampo, aplicacoesCorrosivas, aplicacoesIndustriais, aplicacoesLaboratorio, conformidadeAcionamento (+49 more)

### Community 1 - "Caveman Skill Docs (.continue)"
Cohesion: 0.05
Nodes (54): cavecrew (README overview), Cavecrew Per-Agent Model Overrides, Cavecrew Inherited Auto-Clarity, cavecrew Delegation Decision Guide, cavecrew-builder (surgical 1-2 file edit subagent), cavecrew-investigator (read-only code locator subagent), cavecrew-reviewer (diff review subagent), Verbatim Tool-Result Context Budget (+46 more)

### Community 2 - "Caveman Skill Docs (.roo)"
Cohesion: 0.06
Nodes (51): cavecrew README, Cavecrew per-agent model overrides, Cavecrew inherited auto-clarity, cavecrew (delegation decision guide), cavecrew-builder subagent, cavecrew-investigator subagent, cavecrew-reviewer subagent, Chaining patterns (locate, fix, verify / parallel scout / single-shot) (+43 more)

### Community 3 - "Caveman Skill Docs (.agents)"
Cohesion: 0.06
Nodes (48): cavecrew (README overview), Cavecrew Per-Agent Model Overrides, Cavecrew Inherited Auto-Clarity, cavecrew Delegation Decision Guide, cavecrew-builder (surgical 1-2 file edit subagent), cavecrew-investigator (read-only locator subagent), cavecrew-reviewer (diff review subagent), Subagent Tool-Result Context Budget Win (+40 more)

### Community 4 - "Dependências npm"
Cohesion: 0.04
Nodes (44): eslint, eslint-config-next, next, dependencies, next, react, react-dom, sharp (+36 more)

### Community 5 - "Produtos e Site WordPress Legado"
Cohesion: 0.07
Nodes (40): CLA, CLM-E AI (chuveiro + lava-olhos aço inox), CLM-E AI SD, CLM-E PVC, Global product navigation (Chuveiros, Lava Olhos, Transportáveis, Peças, Especiais), Legacy /v1/ asset and canonical URL leakage, Home — Yank EPC (Chuveiro e Lava Olhos de Emergência), Schema.org JSON-LD @graph (Organization / WebSite / WebPage / Article) (+32 more)

### Community 6 - "Empresa, Normas e Stack WordPress"
Cohesion: 0.09
Nodes (37): ANSI Z358.1-2009 emergency shower/eyewash standard (plus ABNT, DIN, EU conformity claims), Global product navigation (Home / A Empresa / Produtos > Chuveiros e Lava Olhos, Chuveiros de Emergência, Lava Olhos, Especiais, Transportáveis, Peças e Acessórios / Contato), ISO 9001:2008 quality system certified by SGS, Yank product line taxonomy (chuveiros de emergência, lava olhos, lava mãos; manual / semi-automático / automático / especial; isolado / conjugado), LuizMarcelo (declared schema.org Person / author of all Yank pages), Construction materials offered (aço galvanizado pintado, aço inoxidável AISI 304, PVC), A Empresa - Yank EPC (company page, /a-empresa/), Rank Math JSON-LD @graph (Organization + WebSite + BreadcrumbList + WebPage + Person + Article) (+29 more)

### Community 7 - "Compress CLI (.agents)"
Cohesion: 0.12
Nodes (27): main(), print_usage(), backup_dir_for(), build_compress_prompt(), build_fix_prompt(), call_claude(), compress_file(), is_sensitive_path() (+19 more)

### Community 8 - "Compress CLI (.continue)"
Cohesion: 0.12
Nodes (27): main(), print_usage(), backup_dir_for(), build_compress_prompt(), build_fix_prompt(), call_claude(), compress_file(), is_sensitive_path() (+19 more)

### Community 9 - "Compress CLI (.roo)"
Cohesion: 0.12
Nodes (27): main(), print_usage(), backup_dir_for(), build_compress_prompt(), build_fix_prompt(), call_claude(), compress_file(), is_sensitive_path() (+19 more)

### Community 10 - "Configuração TypeScript"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 11 - "Benchmark e Validate (.agents)"
Cohesion: 0.16
Nodes (22): benchmark_pair(), count_tokens(), main(), print_table(), Path, count_bullets(), extract_code_blocks(), extract_headings() (+14 more)

### Community 12 - "Benchmark e Validate (.continue)"
Cohesion: 0.16
Nodes (22): benchmark_pair(), count_tokens(), main(), print_table(), Path, count_bullets(), extract_code_blocks(), extract_headings() (+14 more)

### Community 13 - "Benchmark e Validate (.roo)"
Cohesion: 0.16
Nodes (22): benchmark_pair(), count_tokens(), main(), print_table(), Path, count_bullets(), extract_code_blocks(), extract_headings() (+14 more)

### Community 14 - "Componentes de UI e Analytics"
Cohesion: 0.14
Nodes (19): Analytics(), registrarEvento(), RelatorioWebVitals(), Window, BotaoWhatsApp(), estilos, LinkRastreado(), Props (+11 more)

### Community 15 - "Páginas Institucionais"
Cohesion: 0.15
Nodes (18): configuracoes, materiais, metadata, normas, PaginaEmpresa(), trilha, metadata, PaginaBlog() (+10 more)

### Community 16 - "Páginas de Categoria e Produto"
Cohesion: 0.19
Nodes (17): correspondeColuna(), generateMetadata(), linhasComparativo(), PaginaCategoria(), Props, generateMetadata(), PaginaProduto(), Props (+9 more)

### Community 17 - "Layout Raiz e Metadados SEO"
Cohesion: 0.14
Nodes (16): inter, metadata, RootLayout(), viewport, Footer(), Header(), empresa, precoVisivel() (+8 more)

### Community 18 - "Fotos de Acionamento e Plataforma"
Cohesion: 0.23
Nodes (17): Acionamento por tração com alça triangular, Marca Yank EPC e selo ISO 9001 impressos na placa, Placa/Alça PUXE — acionamento por tração (foto de produto), CA — Chuveiro de emergência com acionamento automático sobre plataforma (foto de produto), Cortina/capa amarela de emergência com aro superior e faixa refletiva (foto de produto), Privacidade do usuário e contenção do efluente durante o banho de emergência, CLA — Conjunto chuveiro e lava-olhos com acionamento automático sobre plataforma (foto de produto), Plataforma de grelha metálica verde como base drenante e sensor de presença (+9 more)

### Community 19 - "Catálogo Fotográfico de Conjuntos"
Cohesion: 0.25
Nodes (17): Isolated White-Background Product Catalog Photography, CLM-E-CT — Combined Emergency Shower + Eyewash with Privacy Curtain, Yellow Privacy Curtain with Reflective Band (Cortina), CLM-E-PVC — Combined Emergency Shower + Eyewash, PVC Column, Anti-Corrosive Green PVC Column Construction, CLM-UA — Mobile Autonomous Shower + Eyewash Unit on Wheels, Unidade Autônoma 50 Litros — Pressurized 50 L Self-Contained Water Reservoir, Simultaneous Multi-Victim Decontamination Capability (+9 more)

### Community 20 - "Home, 404 e Cards de Produto"
Cohesion: 0.15
Nodes (12): metadata, diferenciais, Home(), metadata, CardProduto(), Props, tituloCard(), IconeCheck() (+4 more)

### Community 21 - "Identidade Visual e Banners"
Cohesion: 0.21
Nodes (16): Company Facade Photo: YANK EPC Storefront at No. 251, Physical Premises as Local-Business Trust Signal, WhatsApp Contact Channel: (11) 91300-6556, YANK EPC (Company Entity, Itatiba - Sao Paulo), Hero Banner 2: Chuveiros de Emergencia (overhead shower head in green-lit plant), Chuveiro de Emergencia (Emergency Safety Shower) Product, Value Proposition: Invest in Prevention, Fast and Easy Installation, Yellow PUXE (Pull) Actuation Tag on Shower Rod (+8 more)

### Community 22 - "Sinalização, Sensores e Acessórios"
Cohesion: 0.17
Nodes (15): Certificação ISO 9001, Marca Yank EPC (logotipo e contato impressos na placa), Placa de Sinalização PUXE (Yank EPC), Selo CIPA Segurança, Sinalização Visual de Acionamento (seta verde + PUXE em fundo amarelo), Bacia de Lava-Olhos em Aço Inox com Par de Crivos, Protetores dos Crivos do Lava-Olhos (tampas plásticas com correntinha), Proteção Térmica contra Água Aquecida na Tubulação (+7 more)

### Community 23 - "Lava-Olhos e Unidades Autônomas"
Cohesion: 0.24
Nodes (14): JKW-151 Combined Emergency Shower and Eyewash Station, Explosion-Proof Signal Light Fixture (JKW-151 mast option), Overhead Pull-Rod / Triangle-Handle Shower Actuation, LA Pedestal Eyewash with Floor Grate Drain Platform, LM Standard Pedestal Eyewash Station, LM-PVC Pedestal Eyewash with PVC Piping and Wall Brace, LM-UA Jankowiski Autonomous 50-Litre Mobile Eyewash Unit, Pressurized Self-Contained Water Reservoir (no plumbing required) (+6 more)

### Community 24 - "Conteúdo Estruturado e Sitemap"
Cohesion: 0.22
Nodes (8): acionamento, artigos, artigosPorSlug, brutos, materiais, nbr16291, categorias, Artigo

### Community 25 - "Arquitetura SSG e Performance"
Cohesion: 0.19
Nodes (13): 48 rotas pré-renderizadas servidas pelo Cloud CDN, runConfig — minInstances 0, escala a zero, src/content/image-manifest.ts (gerado), npm run images — pipeline WebP e dimensões para CLS zero, Navegacao.tsx (cliente recebe dados por props), Arquitetura SSG com App Router, src/proxy.ts — 410 nas páginas-lixo do WordPress, Regra: nenhum 'use client' importa de @/content/* (+5 more)

### Community 26 - "Diagnóstico SEO — Páginas de Produto"
Cohesion: 0.21
Nodes (12): 43 URLs indexáveis (6 hubs, 30 produtos, 3 artigos), BreadcrumbList e breadcrumbs visíveis, C1 — Não existem páginas de produto, Catálogo real — ~28 modelos sem página (CLM-E AI, LS, CM, CLA…), Concorrentes de referência (Cienlab, Hipperquímica, Haws, 7Lab…), Diagnóstico: ausência de páginas para rankear, Fase 2 — Páginas de produto (correção principal), Inventário: 12 URLs, zero produtos, zero blog (+4 more)

### Community 27 - "Structured Data e NAP"
Cohesion: 0.26
Nodes (12): src/content/empresa.ts — NAP fonte única, Schema Article com author LuizMarcelo (incorreto), Organization #organization (Yank EPC), primaryImageOfPage apontando para /v1/ (301 quebrado), JSON-LD @graph do Rank Math na home, sameAs: ["https://yank.com.br/v1"] no Person, A2 — Structured data errado e incompleto, A4 — Redes sociais desconectadas (sem sameAs) (+4 more)

### Community 28 - "Pipeline de Imagens"
Cohesion: 0.22
Nodes (10): Alvo, baixar(), Entrada, main(), manifest, OUT_PRODUTOS, OUT_SITE, processar() (+2 more)

### Community 29 - "Páginas de Artigo do Blog"
Cohesion: 0.33
Nodes (6): formatarData(), generateMetadata(), PaginaArtigo(), Props, getArtigo(), schemaArtigo()

### Community 30 - "Portão de Dados e Schema Zod"
Cohesion: 0.36
Nodes (8): NEXT_PUBLIC_ALLOW_DRAFT (apenas em preview), npm run check:data, src/content/schema.ts — esquema único do catálogo (Zod), dataStatus: 'draft' | 'verified', Portão de dados provisórios (build bloqueia rascunho), src/lib/schema-org.ts e seo.ts, npm run build (falha de propósito com rascunho), Schema Product com Offer (não inventar preço)

### Community 31 - "Analytics, Deploy e Métricas"
Cohesion: 0.33
Nodes (7): NEXT_PUBLIC_GA_ID, Deploy via Firebase App Hosting, Cliques de consultas não-marca (métrica do cutover), GTM GT-MBH6J9B4 e GA4 G-GOX6AJFZI via Site Kit, A1 — Páginas-lixo indexadas (/sample-page/, /teste-produtos/), Métrica que importa — cliques de consultas não-marca, Fase 4 — Conversão e medição (GA4, formulário)

### Community 32 - "Títulos, H1 e CTAs de Conversão"
Cohesion: 0.40
Nodes (6): H1 da home: "OS MAIS VENDIDOS", H2 de produto na home: CLM-E AI, CLM-E PVC, CLM-E AI SD, CLA, CTAs de orçamento por wa.me (WhatsApp), C2 — Títulos de produto são códigos internos, M2 — Nenhum formulário de contato, só WhatsApp, Regra de ouro do H1 — termo de busca antes do código

### Community 33 - "Conteúdo, Blog e Backlinks"
Cohesion: 0.50
Nodes (4): C4 — Zero conteúdo informativo / blog, Fase 3 — Conteúdo e autoridade (blog, 2 artigos/mês), M4 — Backlinks perdidos de jankowiski.com.br, ABNT NBR 16291:2014

## Ambiguous Edges - Review These
- `primaryImageOfPage apontando para /v1/ (301 quebrado)` → `v1.html — captura vazia (0 bytes) do domínio de staging /v1/`  [AMBIGUOUS]
  seo-analysis/v1.html · relation: references
- `Yank product line taxonomy (chuveiros de emergência, lava olhos, lava mãos; manual / semi-automático / automático / especial; isolado / conjugado)` → `Acessórios e Sinalizadores (/acessorios-e-sinalizadores/)`  [AMBIGUOUS]
  seo-analysis/pages/acessorios-e-sinalizadores.html · relation: conceptually_related_to
- `CLM-E AI SD` → `CLM-E AID (test page listing)`  [AMBIGUOUS]
  seo-analysis/pages/teste-produtos.html · relation: semantically_similar_to
- `A2 — Structured data errado e incompleto` → `v1.html — captura vazia (0 bytes) do domínio de staging /v1/`  [AMBIGUOUS]
  seo-analysis/v1.html · relation: references
- `Cortina/capa amarela de emergência com aro superior e faixa refletiva (foto de produto)` → `CLM-E AI — Conjunto chuveiro e lava-olhos em aço inox 304, coluna com flange de piso (foto de produto)`  [AMBIGUOUS]
  public/produtos/capa.webp · relation: conceptually_related_to
- `Acionador PUXE — Triangular Pull-Handle Shower Activator` → `Ducha Manual — Handheld Drench Hose with Flexible Metal Hose and Wall Cradle`  [AMBIGUOUS]
  public/produtos/ducha.webp · relation: conceptually_related_to
- `Scald Valve (válvula antiescaldamento em linha, quatro bitolas)` → `Lava-Olhos de Parede com Coluna Verde e Placa de Identificação Yank`  [AMBIGUOUS]
  public/produtos/scald-valve.webp · relation: conceptually_related_to

## Knowledge Gaps
- **180 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+175 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `primaryImageOfPage apontando para /v1/ (301 quebrado)` and `v1.html — captura vazia (0 bytes) do domínio de staging /v1/`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Yank product line taxonomy (chuveiros de emergência, lava olhos, lava mãos; manual / semi-automático / automático / especial; isolado / conjugado)` and `Acessórios e Sinalizadores (/acessorios-e-sinalizadores/)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `CLM-E AI SD` and `CLM-E AID (test page listing)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `A2 — Structured data errado e incompleto` and `v1.html — captura vazia (0 bytes) do domínio de staging /v1/`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Cortina/capa amarela de emergência com aro superior e faixa refletiva (foto de produto)` and `CLM-E AI — Conjunto chuveiro e lava-olhos em aço inox 304, coluna com flange de piso (foto de produto)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Acionador PUXE — Triangular Pull-Handle Shower Activator` and `Ducha Manual — Handheld Drench Hose with Flexible Metal Hose and Wall Cradle`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Scald Valve (válvula antiescaldamento em linha, quatro bitolas)` and `Lava-Olhos de Parede com Coluna Verde e Placa de Identificação Yank`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._