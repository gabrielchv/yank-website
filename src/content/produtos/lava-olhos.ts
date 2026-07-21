import type { Produto } from '../schema'
import {
  aplicacoesCorrosivas,
  aplicacoesLaboratorio,
  conformidadeAcionamento,
  conformidadeBase,
  faqAcionamentoAutomatico,
  faqGerais,
  faqInstalacao,
  faqMaterial,
  itensPadrao,
  opcionaisComuns,
} from '../blocos'

const CATEGORIA = 'lava-olhos-de-emergencia'
const ARTIGOS = ['nbr-16291-o-que-a-norma-exige', 'aco-inox-pvc-ou-galvanizado']

/** ⚠️ Especificações marcadas `provisorio: true` e `preco` são MOCK — ver produtos/chuveiros-e-lava-olhos.ts */

const faqTempoLavagem = {
  pergunta: 'Por quanto tempo os olhos devem ser lavados?',
  resposta:
    'A referência é de irrigação contínua por no mínimo 15 minutos, mantendo as pálpebras abertas. É por isso que a válvula precisa permanecer aberta sem ser segurada: as mãos do usuário ficam livres para manter os olhos abertos, que é a parte mais difícil do procedimento.',
}

export const lavaOlhos: Produto[] = [
  {
    slug: 'ls-lava-olhos-de-bancada',
    codigo: 'LS',
    categoria: CATEGORIA,
    nomeCurto: 'LS',
    h1: 'Lava-Olhos de Emergência de Bancada com Fixação na Parede — Modelo LS',
    titleSeo: 'Lava-Olhos de Emergência de Bancada LS | Yank EPC',
    metaDescription:
      'Lava-olhos de emergência de bancada com fixação na parede, em aço galvanizado ou inox. Bacia em inox, ideal para laboratórios. Conforme a NBR 16291.',
    resumo:
      'Lava-olhos compacto de bancada, fixado na parede, padrão em laboratórios e pontos de manipulação onde o espaço é limitado.',
    descricao: [
      'O LS é o lava-olhos de bancada da linha Yank EPC, projetado para os pontos em que o risco é a projeção de produto químico nos olhos e o espaço disponível é restrito. Com fixação na parede ou na própria bancada, ocupa pouco espaço e fica ao alcance imediato de quem está manipulando o produto — que é exatamente onde precisa estar.',
      'Em laboratório, o intervalo entre o acidente e a lavagem costuma ser decidido por centímetros, não por metros. Um lava-olhos na outra ponta da sala já é tarde demais para respingo de ácido concentrado. Por isso a instalação de bancada, junto ao ponto de manipulação, é a configuração recomendada em salas de preparo de amostra, controle de qualidade e farmácias de manipulação.',
      'A bacia é em aço inox e os crivos entregam jatos suaves e simultâneos para os dois olhos, em ângulo que permite manter as pálpebras abertas durante a irrigação. A alimentação é em 1/4" e a estrutura pode ser fornecida em aço galvanizado com pintura epóxi verde ou em aço inox.',
      'Vale registrar que frascos lava-olhos portáteis são complemento, não substituto: eles não sustentam os 15 minutos de irrigação contínua que a lavagem ocular exige. O equipamento ligado à rede é o que cumpre a norma.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 1/4"',
      'Bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Fixação na parede',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '1/4"', provisorio: false },
      { label: 'Bacia', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Acionamento', valor: 'Manual', provisorio: false },
      { label: 'Fixação', valor: 'Na parede ou na bancada', provisorio: false },
      { label: 'Vazão', valor: '12 L/min', provisorio: true },
      { label: 'Pressão de trabalho', valor: '2,1 a 4,0 bar', provisorio: true },
      { label: 'Dimensões (L × P × A)', valor: '350 × 300 × 250 mm', provisorio: true },
      { label: 'Peso aproximado', valor: '5 kg', provisorio: true },
    ],
    aplicacoes: aplicacoesLaboratorio,
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns.filter((o) => !o.startsWith('Scald')),
    faq: [
      {
        pergunta: 'Qual a diferença entre o lava-olhos de bancada e o de coluna?',
        resposta:
          'É uma diferença de instalação e visibilidade, não de desempenho. O de bancada (LS) é fixado na parede ou bancada, ocupa pouco espaço e fica junto ao ponto de manipulação — padrão em laboratórios. O de coluna (LM) é fixado no chão e visível de longe, preferido em áreas industriais amplas.',
      },
      faqTempoLavagem,
      {
        pergunta: 'Um frasco lava-olhos portátil substitui este equipamento?',
        resposta:
          'Não. O frasco é complemento, útil para iniciar a lavagem no trajeto até o equipamento fixo, mas não sustenta os 15 minutos de irrigação contínua que a lavagem ocular exige. O equipamento ligado à rede é o que cumpre a norma.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'ls',
        alt: 'Lava-olhos de emergência de bancada LS com bacia em aço inox, dois crivos e fixação na parede',
      },
    ],
    relacionados: ['lm-lava-olhos-de-coluna', 'lm-pvc', 'la-lava-olhos-automatico'],
    artigos: ARTIGOS,
    preco: 1290,
    dataStatus: 'draft',
    ordem: 1,
  },

  {
    slug: 'lm-lava-olhos-de-coluna',
    codigo: 'LM',
    categoria: CATEGORIA,
    nomeCurto: 'LM',
    h1: 'Lava-Olhos de Emergência de Coluna com Fixação no Chão — Modelo LM',
    titleSeo: 'Lava-Olhos de Emergência de Coluna LM | Yank EPC',
    metaDescription:
      'Lava-olhos de emergência de coluna com fixação no chão, em aço galvanizado ou inox. Bacia em inox e alta visibilidade em áreas industriais amplas.',
    resumo:
      'Lava-olhos de coluna com fixação no chão, visível à distância — a configuração preferida em áreas industriais amplas.',
    descricao: [
      'O LM é o lava-olhos de coluna da linha Yank EPC. Fixado no chão, com a bacia na altura de uso, é a configuração indicada para áreas industriais amplas, onde o equipamento precisa ser localizado à distância e não há parede próxima ao ponto de risco para receber um modelo de bancada.',
      'A visibilidade é parte da função. Um lava-olhos que ninguém enxerga da posição de trabalho é um lava-olhos que não será encontrado em pânico. A coluna eleva a sinalização acima de bancadas, tanques e equipamentos de processo, e por isso costuma ser especificada mesmo em locais onde a instalação de parede seria fisicamente possível.',
      'A bacia é em aço inox e os crivos entregam jatos suaves e simultâneos para os dois olhos. A alimentação é em 1/4" e a estrutura pode ser fornecida em aço galvanizado com pintura epóxi verde ou em aço inox, conforme a agressividade do ambiente.',
      'Para áreas onde há ácidos que atacam o metal, a mesma configuração de coluna está disponível integralmente em PVC, no modelo LM PVC. Onde o risco de lesão ocular é elevado e a visão pode ficar comprometida, o LA acrescenta acionamento automático por plataforma.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 1/4"',
      'Bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Fixação no chão',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '1/4"', provisorio: false },
      { label: 'Bacia', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Acionamento', valor: 'Manual', provisorio: false },
      { label: 'Fixação', valor: 'No chão', provisorio: false },
      { label: 'Vazão', valor: '12 L/min', provisorio: true },
      { label: 'Pressão de trabalho', valor: '2,1 a 4,0 bar', provisorio: true },
      { label: 'Altura da bacia', valor: '1.000 mm', provisorio: true },
      { label: 'Peso aproximado', valor: '11 kg', provisorio: true },
    ],
    aplicacoes: [
      'Áreas industriais amplas',
      'Salas de processo e produção',
      'Estações de tratamento de água e efluentes',
      'Indústria alimentícia e de bebidas',
      'Áreas de armazenagem de produto químico',
    ],
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Por que escolher a coluna se há parede disponível?',
        resposta:
          'Por visibilidade. A coluna eleva a sinalização acima de bancadas, tanques e equipamentos de processo, tornando o ponto localizável de longe. Em pânico e com a visão comprometida, encontrar o equipamento é metade do problema — e é por isso que a coluna é especificada mesmo onde a instalação de parede seria possível.',
      },
      faqTempoLavagem,
      faqInstalacao,
      faqMaterial,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'lm',
        alt: 'Lava-olhos de emergência de coluna LM com bacia em aço inox, dois crivos, coluna pintada de verde e fixação no chão',
      },
    ],
    relacionados: ['ls-lava-olhos-de-bancada', 'lm-pvc', 'la-lava-olhos-automatico'],
    artigos: ARTIGOS,
    preco: 1590,
    dataStatus: 'draft',
    ordem: 2,
  },

  {
    slug: 'lm-pvc',
    codigo: 'LM PVC',
    categoria: CATEGORIA,
    nomeCurto: 'LM PVC',
    h1: 'Lava-Olhos de Emergência de Coluna em PVC — Modelo LM PVC',
    titleSeo: 'Lava-Olhos de Emergência de Coluna em PVC LM PVC | Yank',
    metaDescription:
      'Lava-olhos de emergência de coluna 100% em PVC, bitola 3/4" ou 1", com bacia em aço inox. Para áreas com ácidos que atacam estruturas metálicas.',
    resumo:
      'Lava-olhos de coluna com corpo integralmente em PVC, para áreas onde os agentes químicos atacam estruturas metálicas.',
    descricao: [
      'O LM PVC é a versão em PVC do lava-olhos de coluna, para os ambientes em que o aço — inclusive o inox — não sobrevive. Em galvanoplastia, casas de química de estações de tratamento e áreas com névoa de ácido clorídrico ou sulfúrico, o ataque químico age sobre qualquer estrutura metálica exposta, e a troca do equipamento passa a ser rotina.',
      'O corpo integralmente em PVC é inerte à maior parte dos ácidos e bases de processo industrial. A bacia permanece em aço inox, por ser a superfície de contato direto com o rosto do usuário, e os crivos preservam a mesma geometria de jato dos demais modelos da linha. A alimentação é em 3/4" ou 1".',
      'Duas vantagens práticas acompanham a escolha: o peso menor facilita a instalação, e o acabamento verde não exige repintura — em ambiente corrosivo, a pintura do galvanizado é justamente o primeiro item a falhar, e o retoque vira manutenção recorrente.',
      'A contrapartida é a resistência mecânica. Onde há tráfego de empilhadeira, movimentação de carga ou risco de impacto, o modelo em aço continua sendo a especificação correta, eventualmente com protetores. A decisão é sobre qual risco predomina: ataque químico ou esforço mecânico.',
    ],
    bullets: [
      '100% em PVC',
      'Bitola de 3/4" ou 1"',
      'Bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Fixação no chão',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'PVC', provisorio: false },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"', provisorio: false },
      { label: 'Bacia', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Verde', provisorio: false },
      { label: 'Acionamento', valor: 'Manual', provisorio: false },
      { label: 'Fixação', valor: 'No chão', provisorio: false },
      { label: 'Vazão', valor: '12 L/min', provisorio: true },
      { label: 'Pressão de trabalho', valor: '2,1 a 4,0 bar', provisorio: true },
      { label: 'Altura da bacia', valor: '1.000 mm', provisorio: true },
      { label: 'Peso aproximado', valor: '7 kg', provisorio: true },
    ],
    aplicacoes: aplicacoesCorrosivas,
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      faqMaterial,
      faqTempoLavagem,
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'lm-pvc',
        alt: 'Lava-olhos de emergência de coluna LM PVC com corpo em PVC verde, bacia em aço inox e fixação no chão',
      },
    ],
    relacionados: ['lm-lava-olhos-de-coluna', 'clm-e-pvc', 'ls-lava-olhos-de-bancada'],
    artigos: ARTIGOS,
    preco: 1390,
    dataStatus: 'draft',
    ordem: 3,
  },

  {
    slug: 'la-lava-olhos-automatico',
    codigo: 'LA',
    categoria: CATEGORIA,
    nomeCurto: 'LA',
    h1: 'Lava-Olhos de Emergência Automático por Plataforma — Modelo LA',
    titleSeo: 'Lava-Olhos de Emergência Automático LA | Yank EPC',
    metaDescription:
      'Lava-olhos de emergência com acionamento automático por plataforma, em aço galvanizado ou inox. Crivos e bacia em inox, conforme a NBR 16291.',
    resumo:
      'Lava-olhos com acionamento automático por plataforma: a água jorra ao pisar, sem depender de localizar comando com a visão comprometida.',
    descricao: [
      'O LA resolve a limitação mais séria do lava-olhos manual. Em um acidente com projeção química nos olhos, a vítima perde exatamente o sentido de que precisaria para encontrar a alavanca — e o reflexo natural de fechar os olhos com força torna a busca ainda mais difícil. O acionamento automático por plataforma elimina essa etapa: basta chegar e pisar.',
      'A construção segue a linha: crivos e bacia em aço inox, estrutura em aço galvanizado com pintura epóxi verde ou em aço inox, alimentação em 3/4" ou 1" e placa de sinalização. Os jatos são suaves e simultâneos para os dois olhos, em ângulo que permite manter as pálpebras abertas durante a irrigação.',
      'A plataforma é dimensionada para disparar com o peso normal de uma pessoa posicionada em frente à bacia, e não com tráfego lateral. Como a válvula permanece aberta enquanto o usuário estiver na plataforma, as mãos ficam integralmente livres — e na lavagem ocular isso não é conforto: manter as pálpebras abertas contra o reflexo de fechá-las exige as duas mãos.',
      'É a especificação indicada em áreas de manuseio de ácidos concentrados, bases fortes e produtos com ação imediata sobre a córnea, onde a diferença de poucos segundos define a extensão da lesão.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacia em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Acionamento automático por plataforma',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"', provisorio: false },
      { label: 'Crivos e bacia', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Acionamento', valor: 'Automático, por plataforma', provisorio: false },
      { label: 'Vazão', valor: '12 L/min', provisorio: true },
      { label: 'Pressão de trabalho', valor: '2,1 a 4,0 bar', provisorio: true },
      { label: 'Dimensões da plataforma', valor: '500 × 500 mm', provisorio: true },
      { label: 'Peso aproximado', valor: '16 kg', provisorio: true },
    ],
    aplicacoes: [
      'Manuseio de ácidos concentrados e bases fortes',
      'Galvanoplastia e banhos químicos',
      'Laboratórios de alto risco',
      'Indústria química e petroquímica',
      'Áreas com risco de lesão ocular imediata',
    ],
    conformidade: conformidadeAcionamento,
    itensInclusos: [...itensPadrao, 'Plataforma de acionamento'],
    opcionais: opcionaisComuns,
    faq: [
      faqAcionamentoAutomatico,
      faqTempoLavagem,
      {
        pergunta: 'Por que as mãos livres importam tanto na lavagem ocular?',
        resposta:
          'Porque manter as pálpebras abertas contra o reflexo de fechá-las exige as duas mãos. Se o usuário precisar segurar uma alavanca, ele lava as pálpebras fechadas — e a irrigação não alcança a córnea, que é onde está a lesão. Por isso a norma exige válvula que permaneça aberta sozinha.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'la',
        alt: 'Lava-olhos de emergência automático LA com bacia em aço inox, dois crivos e plataforma de acionamento no piso',
      },
    ],
    relacionados: ['lm-lava-olhos-de-coluna', 'cla-acionamento-automatico', 'ls-lava-olhos-de-bancada'],
    artigos: ARTIGOS,
    preco: 2290,
    dataStatus: 'draft',
    ordem: 4,
  },
]
