import type { Produto } from '../schema'
import {
  aplicacoesCorrosivas,
  aplicacoesIndustriais,
  conformidadeAcionamento,
  conformidadeBase,
  faqAcionamentoAutomatico,
  faqGerais,
  faqInstalacao,
  faqMaterial,
  itensPadrao,
  opcionaisComuns,
} from '../blocos'

const CATEGORIA = 'chuveiros-e-lava-olhos-de-emergencia'
const ARTIGOS = ['aco-inox-pvc-ou-galvanizado', 'acionamento-manual-ou-automatico']

/**
 * Fonte dos dados: `source-files/catalogo.md` (catálogo do fabricante).
 *
 * Só entra aqui o que o catálogo declara: material, bitola, crivos/bacia e tipo
 * de acionamento. Vazão, pressão, altura, dimensões e peso NÃO constam do
 * catálogo e por isso não são publicados — número inventado em equipamento de
 * segurança é problema além do SEO. Se o fabricante fornecer a ficha técnica
 * com esses valores, acrescente-os aqui e nada mais precisa mudar.
 *
 * Preço não existe neste esquema: a venda é sob orçamento.
 */

export const chuveirosELavaOlhos: Produto[] = [
  {
    slug: 'clm-e-ai-sd-aco-inox-com-ducha',
    codigo: 'CLM-E AI SD',
    categoria: CATEGORIA,
    nomeCurto: 'CLM-E AI SD',
    h1: 'Chuveiro e Lava-Olhos de Emergência em Aço Inox com Ducha e Sinaleira — Modelo CLM-E AI SD',
    titleSeo: 'Chuveiro Lava-Olhos Inox com Ducha CLM-E AI SD | Yank',
    metaDescription:
      'Chuveiro e lava-olhos de emergência 100% aço inox AISI 304 com ducha manual e sinaleira luminosa. Acionamento manual conforme NBR 16291. Orçamento rápido.',
    resumo:
      'Versão mais completa da linha em aço inox: além do chuveiro e do lava-olhos conjugados, traz ducha manual para lavagem dirigida e sinaleira luminosa que indica o acionamento à distância.',
    descricao: [
      'O CLM-E AI SD é a configuração mais completa da linha conjugada em aço inox da Yank EPC. Sobre a base do CLM-E AI — coluna 100% em aço inox AISI 304, crivo superior para banho e bacia com crivos para lavagem ocular — ele acrescenta dois recursos que mudam a resposta ao acidente: a ducha manual e a sinaleira.',
      'A ducha manual permite dirigir o jato a um ponto específico do corpo, o que o crivo fixo não faz. Em respingo localizado, em contaminação de membro ou quando é preciso lavar sob a roupa enquanto ela é removida, poder apontar a água resolve situações em que o banho fixo apenas espalha o produto. É também o recurso usado quando a vítima está no chão e não consegue permanecer sob o crivo.',
      'A sinaleira luminosa dispara junto com o acionamento e sinaliza visualmente que o equipamento está em uso. Em áreas amplas, com ruído ou sem presença constante de outras pessoas, é o que transforma um acidente silencioso em um chamado de socorro. Combinada ao sensor de fluxo, permite levar o sinal até a sala de controle.',
      'A escolha do aço inox AISI 304 para toda a estrutura é o que sustenta o equipamento em ambiente agressivo: resiste à corrosão por névoa química, lavagens frequentes e umidade constante, sem a manutenção de pintura que o galvanizado exige. É a especificação padrão para indústria química, farmacêutica e alimentícia.',
    ],
    bullets: [
      '100% aço inox AISI 304',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacia em aço inox',
      'Placa de sinalização',
      'Ducha manual',
      'Sinaleira luminosa',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço inox AISI 304' },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acionamento', valor: 'Manual, por alça puxe' },
    ],
    aplicacoes: aplicacoesIndustriais,
    conformidade: conformidadeBase,
    itensInclusos: [...itensPadrao, 'Ducha manual com mangote', 'Sinaleira luminosa'],
    opcionais: opcionaisComuns.filter((o) => !o.startsWith('Sinaleira')),
    faq: [
      {
        pergunta: 'Para que serve a ducha manual, se o chuveiro já tem crivo fixo?',
        resposta:
          'A ducha permite dirigir o jato a um ponto específico — respingo localizado, contaminação de um membro, ou lavagem sob a roupa enquanto ela é removida. Também atende a vítima que está no chão e não consegue ficar sob o crivo fixo. O crivo lava o corpo todo; a ducha lava onde é preciso.',
      },
      faqMaterial,
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clm-e-ai-sd',
        alt: 'Chuveiro e lava-olhos de emergência CLM-E AI SD em aço inox AISI 304, com coluna, crivo superior, bacia de lava-olhos, ducha manual e sinaleira',
      },
    ],
    relacionados: ['clm-e-ai-aco-inox-304', 'clm-e-ct-cortina-de-protecao', 'cla-acionamento-automatico'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 1,
  },

  {
    slug: 'clm-e-ai-aco-inox-304',
    codigo: 'CLM-E AI',
    categoria: CATEGORIA,
    nomeCurto: 'CLM-E AI',
    h1: 'Chuveiro e Lava-Olhos de Emergência em Aço Inox AISI 304 — Modelo CLM-E AI',
    titleSeo: 'Chuveiro e Lava-Olhos de Emergência Inox CLM-E AI | Yank',
    metaDescription:
      'Chuveiro com lava-olhos acoplado 100% em aço inox AISI 304, bitola 3/4" ou 1". Acionamento manual conforme a ABNT NBR 16291. Fabricante desde 1995.',
    resumo:
      'O modelo mais vendido da linha: coluna conjugada 100% em aço inox AISI 304, que protege corpo e olhos a partir de um único ponto de emergência.',
    descricao: [
      'O CLM-E AI é o equipamento de referência da Yank EPC e o mais especificado em projetos industriais. Reúne chuveiro e lava-olhos na mesma coluna, com construção integralmente em aço inox AISI 304 — do tubo estrutural aos crivos e à bacia. É a configuração que atende à maior parte das áreas de risco químico sem necessidade de customização.',
      'A opção pelo inox AISI 304 não é estética. Em ambiente industrial, o equipamento de emergência passa anos sem ser usado em situação real, exposto a névoa química, lavagem de piso, umidade e variação térmica. O aço carbono pintado, nessas condições, corrói por dentro da tubulação e entope o crivo justamente onde ninguém olha. O inox mantém a seção hidráulica limpa e não depende de repintura para continuar íntegro.',
      'O acionamento é manual, em um único movimento pela alça puxe, e a válvula permanece aberta até o fechamento deliberado — requisito da ABNT NBR 16291:2014, que existe para liberar as mãos do usuário durante a lavagem. A bacia de lava-olhos entrega jatos suaves e simultâneos para os dois olhos, em ângulo que permite manter as pálpebras abertas durante os 15 minutos de irrigação recomendados.',
      'A alimentação pode ser em 3/4" ou 1", definida pela pressão e pela vazão disponíveis na rede do local. Vale dimensionar com folga: um conjugado alimentado por rede subdimensionada entrega banho e lavagem ocular simultâneos abaixo do necessário, e o problema só aparece no dia do acidente.',
    ],
    bullets: [
      '100% aço inox AISI 304',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacia em aço inox',
      'Placa de sinalização',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço inox AISI 304' },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acionamento', valor: 'Manual, por alça puxe' },
    ],
    aplicacoes: aplicacoesIndustriais,
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Por que escolher aço inox AISI 304 e não aço galvanizado?',
        resposta:
          'O inox AISI 304 resiste à corrosão sem depender de pintura, o que importa em um equipamento que fica anos sem uso real exposto a névoa química e umidade. No aço carbono pintado, a corrosão avança por dentro da tubulação e entope o crivo sem sinal externo. O galvanizado continua sendo boa escolha para ambientes internos e menos agressivos, com custo menor.',
      },
      faqMaterial,
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clm-e-ai',
        alt: 'Chuveiro e lava-olhos de emergência CLM-E AI em aço inox AISI 304, com coluna, crivo superior e bacia de lava-olhos com dois crivos',
      },
    ],
    relacionados: ['clm-e-ai-sd-aco-inox-com-ducha', 'clm-e-pvc', 'clm-e-ag-aco-galvanizado'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 2,
  },

  {
    slug: 'clm-e-pvc',
    codigo: 'CLM-E PVC',
    categoria: CATEGORIA,
    nomeCurto: 'CLM-E PVC',
    h1: 'Chuveiro e Lava-Olhos de Emergência em PVC — Modelo CLM-E PVC',
    titleSeo: 'Chuveiro e Lava-Olhos de Emergência em PVC CLM-E PVC | Yank',
    metaDescription:
      'Chuveiro com lava-olhos acoplado 100% em PVC, bitola 1", para áreas com ácidos que atacam o metal. Bacia em aço inox e sinalização conforme NBR 16291.',
    resumo:
      'Conjugado com corpo integralmente em PVC, indicado para áreas onde os agentes químicos atacam estruturas metálicas.',
    descricao: [
      'Há ambientes em que o aço inox não é a melhor escolha — e reconhecê-los evita trocar o equipamento em dois anos. Em áreas de galvanoplastia, casas de química de estações de tratamento e setores com névoa de ácido clorídrico ou sulfúrico, o ataque químico age sobre qualquer estrutura metálica exposta, inclusive o inox AISI 304. É para esse cenário que existe o CLM-E PVC.',
      'O corpo é integralmente em PVC, material inerte à maior parte dos ácidos e bases usados em processo industrial. A bacia do lava-olhos é mantida em aço inox, por ser a superfície de contato direto com o rosto do usuário, e os crivos preservam a mesma geometria de jato dos demais modelos da linha. A alimentação é em 1".',
      'Além da resistência química, o PVC traz duas vantagens práticas: o peso menor facilita a instalação em estruturas que não suportariam a coluna metálica, e o acabamento verde não exige repintura ao longo da vida útil — em ambiente corrosivo, a pintura do galvanizado é justamente o primeiro item a falhar.',
      'A contrapartida é a resistência mecânica. Em áreas de tráfego de empilhadeira, movimentação de carga ou onde há risco de impacto, o modelo em aço continua sendo a especificação correta, eventualmente com protetores. A escolha entre PVC e inox é sobre qual risco predomina no local: ataque químico ou esforço mecânico.',
    ],
    bullets: [
      '100% em PVC',
      'Bitola de 1"',
      'Crivos e bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'PVC' },
      { label: 'Bitola de alimentação', valor: '1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Verde' },
      { label: 'Acionamento', valor: 'Manual, por alça puxe' },
    ],
    aplicacoes: aplicacoesCorrosivas,
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Em que situação o PVC é melhor que o aço inox?',
        resposta:
          'Onde o ataque químico é mais severo que o esforço mecânico: galvanoplastia, casas de química, áreas com névoa de ácido clorídrico ou sulfúrico. Nesses ambientes o ácido ataca até o inox AISI 304. Já em áreas com tráfego de empilhadeira ou risco de impacto, o aço continua sendo a escolha correta.',
      },
      faqMaterial,
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clm-e-pvc',
        alt: 'Chuveiro e lava-olhos de emergência CLM-E PVC com coluna em PVC verde, crivo superior e bacia de lava-olhos em aço inox',
      },
    ],
    relacionados: ['clm-e-ai-aco-inox-304', 'lm-pvc', 'clm-e-ag-aco-galvanizado'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 3,
  },

  {
    slug: 'clm-e-ag-aco-galvanizado',
    codigo: 'CLM-E AG',
    categoria: CATEGORIA,
    nomeCurto: 'CLM-E AG',
    h1: 'Chuveiro e Lava-Olhos de Emergência em Aço Galvanizado — Modelo CLM-E AG',
    titleSeo: 'Chuveiro Lava-Olhos Aço Galvanizado CLM-E AG | Yank EPC',
    metaDescription:
      'Chuveiro com lava-olhos acoplado em aço galvanizado com pintura verde, bitola 3/4" ou 1". Crivos e bacia em inox, conforme a NBR 16291.',
    resumo:
      'Conjugado em aço galvanizado com pintura: a opção de melhor custo para ambientes internos e de agressividade moderada.',
    descricao: [
      'O CLM-E AG entrega a mesma função do conjugado em inox — chuveiro e lava-olhos na mesma coluna, cobrindo os dois cenários de acidente — em aço galvanizado com pintura verde. É a especificação de melhor relação custo-benefício para áreas internas, oficinas, almoxarifados de produto químico e setores onde a exposição corrosiva é moderada.',
      'A galvanização protege o aço por barreira e por ação galvânica; a pintura verde acrescenta uma segunda camada e cumpre o papel de sinalização visual, já que o verde é a cor convencionada para equipamento de emergência. Crivos e bacia são mantidos em aço inox, preservando as superfícies de contato com o usuário e a seção de saída de água.',
      'A alimentação pode ser em 3/4" ou 1", conforme a rede disponível, e o acionamento é manual pela alça puxe, em um único movimento, com válvula que permanece aberta até o fechamento deliberado.',
      'O ponto de atenção é a manutenção da pintura. Diferente do inox, o galvanizado pintado depende da integridade da camada para resistir: riscos, batidas e desgaste precisam de retoque, sob pena de a corrosão avançar a partir do ponto exposto. Em ambiente agressivo ou de difícil manutenção, o CLM-E AI em inox costuma sair mais barato ao longo da vida útil.',
    ],
    bullets: [
      'Aço galvanizado',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado com pintura verde' },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Pintura verde' },
      { label: 'Acionamento', valor: 'Manual, por alça puxe' },
    ],
    aplicacoes: [
      'Oficinas e áreas de manutenção',
      'Almoxarifados de produto químico',
      'Áreas internas de produção',
      'Indústria metalmecânica',
      'Centros de distribuição',
    ],
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'O aço galvanizado dura menos que o inox?',
        resposta:
          'Em ambiente agressivo, sim — mas a diferença está na manutenção, não no material em si. O galvanizado pintado depende da integridade da camada: riscos e batidas precisam de retoque, senão a corrosão avança a partir do ponto exposto. Em área interna e de agressividade moderada, com retoque periódico, atende bem e custa menos.',
      },
      faqMaterial,
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clm-e-ag',
        alt: 'Chuveiro e lava-olhos de emergência CLM-E AG com coluna em aço galvanizado pintado de verde, crivo superior e bacia de lava-olhos em inox',
      },
    ],
    relacionados: ['clm-e-ai-aco-inox-304', 'clm-e-pvc', 'clm-e-ct-cortina-de-protecao'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 4,
  },

  {
    slug: 'clm-e-ct-cortina-de-protecao',
    codigo: 'CLM-E CT',
    categoria: CATEGORIA,
    nomeCurto: 'CLM-E CT',
    h1: 'Chuveiro e Lava-Olhos de Emergência com Cortina de Proteção — Modelo CLM-E CT',
    titleSeo: 'Chuveiro Lava-Olhos com Cortina CLM-E CT | Yank EPC',
    metaDescription:
      'Chuveiro com lava-olhos acoplado e cortina de proteção, em aço galvanizado ou inox. Privacidade e contenção de respingo conforme a NBR 16291.',
    resumo:
      'Conjugado com cortina de proteção envolvendo a área do banho, para contenção de respingo e privacidade durante a remoção de roupa contaminada.',
    descricao: [
      'O procedimento de emergência prevê a remoção da roupa contaminada durante o banho — sem isso, o produto químico retido no tecido continua em contato com a pele e a lavagem não resolve. É justamente para isso que a norma pede válvula que permaneça aberta sem ser segurada: as mãos precisam ficar livres. Na prática, porém, essa etapa é a que mais encontra resistência: em área de circulação, com colegas por perto, a pessoa hesita em se despir, e a hesitação custa exatamente os segundos que importam.',
      'O CLM-E CT resolve isso com uma cortina de proteção que envolve a área do banho. Ela cria o mínimo de privacidade necessário para que a vítima remova a roupa sem hesitar, e ao mesmo tempo contém o respingo da água contaminada, limitando a área afetada e facilitando a limpeza posterior — relevante quando o efluente do banho precisa de destinação controlada.',
      'A estrutura pode ser fornecida em aço galvanizado com pintura verde ou em aço inox, conforme a agressividade do ambiente, com alimentação em 3/4" ou 1". Crivos e bacia são em aço inox e o acionamento é manual, em um único movimento.',
      'É a especificação indicada em áreas de circulação, corredores entre setores, plantas com equipe mista e operações em que o efluente do banho precisa ser contido. Em sala fechada ou área restrita, o ganho da cortina é menor e o CLM-E AI costuma bastar.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Cortina de proteção',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox' },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Pintura verde' },
      { label: 'Acionamento', valor: 'Manual, por alça puxe' },
      { label: 'Cortina', valor: 'Cortina de proteção envolvente' },
    ],
    aplicacoes: [
      'Áreas de circulação e corredores entre setores',
      'Plantas com equipe mista',
      'Operações com efluente que exige contenção',
      'Indústria química e farmacêutica',
      'Laboratórios em área compartilhada',
    ],
    conformidade: conformidadeBase,
    itensInclusos: [...itensPadrao, 'Cortina de proteção'],
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Para que serve a cortina de proteção?',
        resposta:
          'Para duas coisas. Primeiro, dar privacidade: o procedimento de emergência prevê remover a roupa contaminada durante o banho, e em área de circulação a pessoa hesita em fazê-lo — a cortina elimina essa hesitação. Segundo, conter o respingo da água contaminada, limitando a área afetada e facilitando a limpeza e a destinação do efluente.',
      },
      faqInstalacao,
      faqMaterial,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clm-e-ct',
        alt: 'Chuveiro e lava-olhos de emergência CLM-E CT com cortina de proteção envolvendo a área do banho, crivo superior e bacia de lava-olhos',
      },
    ],
    relacionados: ['clm-e-ai-aco-inox-304', 'clm-e-ag-aco-galvanizado', 'clm-e-ai-sd-aco-inox-com-ducha'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 5,
  },

  {
    slug: 'cla-acionamento-automatico',
    codigo: 'CLA',
    categoria: CATEGORIA,
    nomeCurto: 'CLA',
    h1: 'Chuveiro e Lava-Olhos de Emergência Automático por Plataformas Independentes — Modelo CLA',
    titleSeo: 'Chuveiro e Lava-Olhos Automático CLA | Yank EPC',
    metaDescription:
      'Chuveiro e lava-olhos de emergência com acionamento automático por plataformas independentes. Aço galvanizado ou inox, bitola 1", conforme NBR 16291.',
    resumo:
      'Conjugado com acionamento automático: plataformas independentes disparam chuveiro e lava-olhos separadamente, sem exigir que a vítima localize um comando.',
    descricao: [
      'Em um acidente com projeção química nos olhos, a vítima perde justamente o sentido de que precisaria para encontrar a alavanca do equipamento. Essa é a limitação real do acionamento manual, e é o que o CLA elimina: basta pisar na plataforma para a água ser liberada. Nenhuma etapa de busca, nenhuma alavanca a localizar.',
      'O diferencial do CLA em relação ao CLESP está nas plataformas independentes. Chuveiro e lava-olhos têm cada um a sua plataforma, o que permite acionar apenas o necessário — só a lavagem ocular, sem o banho completo, ou o contrário. Além de evitar o desperdício de água e o encharcamento desnecessário, isso importa quando o produto químico está restrito ao rosto e o banho de corpo inteiro espalharia a contaminação.',
      'A estrutura é fornecida em aço galvanizado com pintura verde ou em aço inox, conforme a agressividade do ambiente, com alimentação em 1" — bitola maior, adequada ao volume simultâneo que o equipamento pode demandar. Crivos e bacia são em aço inox.',
      'É a especificação usual em áreas de risco químico elevado: manuseio de ácidos concentrados, bases fortes e produtos com ação imediata sobre a córnea. Nesses pontos, a diferença de poucos segundos entre localizar um comando e simplesmente pisar define a extensão da lesão.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 1"',
      'Crivos e bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Acionamento automático por plataformas independentes',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox' },
      { label: 'Bitola de alimentação', valor: '1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Pintura verde' },
      { label: 'Acionamento', valor: 'Automático, por plataformas independentes' },
    ],
    aplicacoes: [
      'Manuseio de ácidos concentrados e bases fortes',
      'Indústria química e petroquímica',
      'Galvanoplastia',
      'Laboratórios de alto risco',
      'Áreas com risco de lesão ocular imediata',
    ],
    conformidade: conformidadeAcionamento,
    itensInclusos: [...itensPadrao, 'Plataformas de acionamento independentes'],
    opcionais: opcionaisComuns,
    faq: [
      faqAcionamentoAutomatico,
      {
        pergunta: 'Qual a diferença entre o CLA e o CLESP?',
        resposta:
          'Ambos são automáticos. O CLA tem plataformas independentes para chuveiro e lava-olhos, permitindo acionar só o necessário — útil quando a contaminação está restrita ao rosto e o banho completo espalharia o produto. O CLESP usa plataforma única e alça puxe, com acionamento conjunto e instalação mais simples.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'cla',
        alt: 'Chuveiro e lava-olhos de emergência automático CLA com duas plataformas de grelha independentes no piso, coluna do chuveiro com crivo e placa de sinalização e bacia de lava-olhos em coluna própria',
      },
    ],
    relacionados: ['clesp-plataforma-unica', 'clm-e-ai-aco-inox-304', 'la-lava-olhos-automatico'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 6,
  },

  {
    slug: 'clesp-plataforma-unica',
    codigo: 'CLESP',
    categoria: CATEGORIA,
    nomeCurto: 'CLESP',
    h1: 'Chuveiro e Lava-Olhos de Emergência Automático com Plataforma Única — Modelo CLESP',
    titleSeo: 'Chuveiro e Lava-Olhos Automático CLESP | Yank EPC',
    metaDescription:
      'Chuveiro e lava-olhos de emergência com acionamento automático por plataforma única e alça puxe. Aço galvanizado ou inox, conforme a NBR 16291.',
    resumo:
      'Conjugado automático de plataforma única: um único passo aciona chuveiro e lava-olhos ao mesmo tempo, com alça puxe como comando redundante.',
    descricao: [
      'O CLESP é a versão automática de acionamento conjunto. Uma única plataforma no piso dispara chuveiro e lava-olhos simultaneamente, e a alça puxe permanece disponível como comando alternativo. Essa redundância é o ponto forte do modelo: se a vítima não conseguir se posicionar sobre a plataforma, ainda tem a alça; se não conseguir localizar a alça, basta pisar.',
      'Comparado ao CLA, a instalação é mais simples — há uma plataforma em vez de duas — e o acionamento conjunto elimina a decisão de qual comando usar, que em situação de pânico é um obstáculo real. Em contrapartida, não permite acionar apenas a lavagem ocular: o banho vem junto.',
      'Essa característica define a escolha entre os dois. Onde o cenário mais provável envolve contaminação ampla, de corpo e rosto ao mesmo tempo, o acionamento conjunto do CLESP é vantagem. Onde a contaminação tende a ser localizada nos olhos, as plataformas independentes do CLA evitam encharcar e espalhar o produto desnecessariamente.',
      'A estrutura é fornecida em aço galvanizado com pintura verde ou em aço inox, com alimentação em 1", crivos e bacia em aço inox e placa de sinalização.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 1"',
      'Crivos e bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Acionamento automático por plataforma única e alça puxe',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox' },
      { label: 'Bitola de alimentação', valor: '1"' },
      { label: 'Crivos e bacia', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Pintura verde' },
      { label: 'Acionamento', valor: 'Automático por plataforma única, com alça puxe' },
    ],
    aplicacoes: [
      'Áreas com risco de contaminação ampla do corpo',
      'Indústria química e petroquímica',
      'Estações de tratamento de efluentes',
      'Indústria de papel e celulose',
      'Áreas de transferência de produto químico',
    ],
    conformidade: conformidadeAcionamento,
    itensInclusos: [...itensPadrao, 'Plataforma única de acionamento', 'Alça puxe'],
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Vale a pena ter plataforma e alça puxe ao mesmo tempo?',
        resposta:
          'Sim, é uma redundância deliberada. Se a vítima não conseguir se posicionar sobre a plataforma, ainda tem a alça; se não conseguir localizar a alça com a visão comprometida, basta pisar. Em situação de pânico, ter dois caminhos para o mesmo comando aumenta a chance de o equipamento ser acionado.',
      },
      faqAcionamentoAutomatico,
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clesp',
        alt: 'Chuveiro e lava-olhos de emergência automático CLESP sobre plataforma única de grelha verde, com crivo superior, anel de acionamento na coluna, placa de sinalização e bacia de lava-olhos em coluna própria',
      },
    ],
    relacionados: ['cla-acionamento-automatico', 'clm-e-ai-aco-inox-304', 'ca-acionamento-automatico'],
    artigos: ARTIGOS,
    dataStatus: 'verified',
    ordem: 7,
  },
]
