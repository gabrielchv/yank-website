import type { Produto } from '../schema'
import {
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

const CATEGORIA = 'chuveiros-de-emergencia'
const ARTIGOS = ['acionamento-manual-ou-automatico', 'aco-inox-pvc-ou-galvanizado']

/** ⚠️ Especificações marcadas `provisorio: true` e `preco` são MOCK — ver produtos/chuveiros-e-lava-olhos.ts */

export const chuveiros: Produto[] = [
  {
    slug: 'cm-acionamento-manual',
    codigo: 'CM',
    categoria: CATEGORIA,
    nomeCurto: 'CM',
    h1: 'Chuveiro de Emergência Manual com Fixação no Chão — Modelo CM',
    titleSeo: 'Chuveiro de Emergência Manual CM | Fabricante Yank EPC',
    metaDescription:
      'Chuveiro de emergência industrial com acionamento manual, em aço galvanizado ou inox, bitola 3/4" ou 1". Crivos em inox, conforme a ABNT NBR 16291.',
    resumo:
      'Chuveiro de emergência isolado com acionamento manual por alça, indicado onde o risco predominante é o contato do produto químico com o corpo.',
    descricao: [
      'O CM é o chuveiro de emergência isolado da linha Yank EPC, para áreas em que o risco predominante é o respingo ou derramamento sobre o corpo e a roupa — e não a projeção nos olhos. Docas de descarga, áreas de transferência de produto e corredores de circulação entre setores são os pontos típicos: instalar ali a coluna conjugada seria superdimensionar, enquanto o chuveiro simples cobre o cenário real com custo e manutenção menores.',
      'A coluna é fornecida em aço galvanizado com pintura epóxi verde ou em aço inox, conforme a agressividade do ambiente, com fixação no chão e alimentação em 3/4" ou 1". O crivo é em aço inox e dimensionado para produzir um jato amplo e de baixa energia: a função é remover o contaminante da pele, e um jato concentrado demais espalha o produto em vez de eliminá-lo.',
      'O acionamento é manual, por alça, em um único movimento. A válvula permanece aberta até o fechamento deliberado — exigência da ABNT NBR 16291:2014 que existe para liberar as mãos do usuário, que precisa remover a roupa contaminada durante o banho.',
      'Vale lembrar que a norma exige o equipamento a no máximo 10 segundos de caminhada do ponto de risco, no mesmo nível e com trajeto desobstruído. Um chuveiro corretamente especificado, mas posicionado atrás de uma porta ou de um pallet, não cumpre a função.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 3/4" ou 1"',
      'Crivos em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Fixação no chão',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"', provisorio: false },
      { label: 'Crivo', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Acionamento', valor: 'Manual, por alça puxe', provisorio: false },
      { label: 'Fixação', valor: 'No chão', provisorio: false },
      { label: 'Vazão', valor: '76 L/min', provisorio: true },
      { label: 'Pressão de trabalho', valor: '2,1 a 4,0 bar', provisorio: true },
      { label: 'Altura do crivo', valor: '2.100 mm', provisorio: true },
      { label: 'Peso aproximado', valor: '18 kg', provisorio: true },
    ],
    aplicacoes: [
      'Docas de carga e descarga de produto químico',
      'Áreas de transferência e trasfega',
      'Corredores de circulação entre setores',
      'Indústria metalmecânica e oficinas',
      'Centros de distribuição de produto químico',
    ],
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Quando basta o chuveiro isolado, sem lava-olhos?',
        resposta:
          'Quando o risco predominante da área é o contato do produto com o corpo e a roupa, e não a projeção nos olhos — docas de descarga, áreas de transferência, corredores de circulação. Onde há manuseio direto com risco de respingo no rosto, a especificação correta é o conjugado.',
      },
      faqInstalacao,
      faqMaterial,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'cm',
        alt: 'Chuveiro de emergência CM com coluna pintada de verde, crivo em aço inox, alça de acionamento manual e fixação no chão',
      },
    ],
    relacionados: ['ca-acionamento-automatico', 'clm-e-ai-aco-inox-304', 'cm-ua-chuveiro-portatil'],
    artigos: ARTIGOS,
    preco: 2190,
    dataStatus: 'draft',
    ordem: 1,
  },

  {
    slug: 'ca-acionamento-automatico',
    codigo: 'CA',
    categoria: CATEGORIA,
    nomeCurto: 'CA',
    h1: 'Chuveiro de Emergência Automático por Plataforma — Modelo CA',
    titleSeo: 'Chuveiro de Emergência Automático CA | Yank EPC',
    metaDescription:
      'Chuveiro de emergência com acionamento automático por plataforma, em aço galvanizado ou inox. Crivos em inox e sinalização conforme a NBR 16291.',
    resumo:
      'Chuveiro de emergência isolado com acionamento automático por plataforma: a água é liberada ao pisar, sem necessidade de localizar comando.',
    descricao: [
      'O CA é a versão automática do chuveiro de emergência isolado. Em vez da alça, o comando é uma plataforma no piso: a água é liberada assim que a pessoa se posiciona sob o crivo. Não há etapa de busca, não há alavanca a localizar — o próprio ato de chegar ao equipamento já o aciona.',
      'Essa diferença importa mais do que parece. Em um acidente químico, a vítima chega ao chuveiro em pânico, muitas vezes com a visão parcialmente comprometida pelo respingo ou pelo reflexo de fechar os olhos. Qualquer comando que exija localização precisa consome segundos que atuam diretamente sobre a gravidade da lesão.',
      'A construção acompanha o CM: coluna em aço galvanizado com pintura epóxi verde ou em aço inox, crivo em aço inox, alimentação em 3/4" ou 1" e placa de sinalização. A plataforma é dimensionada para disparar com o peso normal de uma pessoa e para não gerar acionamento acidental por tráfego lateral.',
      'É a especificação indicada em áreas de risco químico elevado e em pontos onde o equipamento fica distante da supervisão direta — combinado com sensor de fluxo e sinaleira, permite que o acionamento seja percebido remotamente.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 3/4" ou 1"',
      'Crivos em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Acionamento através de plataforma',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"', provisorio: false },
      { label: 'Crivo', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Acionamento', valor: 'Automático, por plataforma', provisorio: false },
      { label: 'Vazão', valor: '76 L/min', provisorio: true },
      { label: 'Pressão de trabalho', valor: '2,1 a 4,0 bar', provisorio: true },
      { label: 'Altura do crivo', valor: '2.100 mm', provisorio: true },
      { label: 'Dimensões da plataforma', valor: '600 × 600 mm', provisorio: true },
      { label: 'Peso aproximado', valor: '24 kg', provisorio: true },
    ],
    aplicacoes: aplicacoesIndustriais,
    conformidade: conformidadeAcionamento,
    itensInclusos: [...itensPadrao, 'Plataforma de acionamento'],
    opcionais: opcionaisComuns,
    faq: [
      faqAcionamentoAutomatico,
      {
        pergunta: 'A plataforma pode disparar por acidente?',
        resposta:
          'A plataforma é dimensionada para acionar com o peso de uma pessoa posicionada sob o crivo, e não com tráfego lateral ou passagem rápida. Ainda assim, vale considerar o posicionamento no layout: instalar fora de rota de circulação intensa evita acionamentos indesejados.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'ca',
        alt: 'Chuveiro de emergência automático CA com coluna pintada de verde, crivo em aço inox e plataforma de acionamento no piso',
      },
    ],
    relacionados: ['cm-acionamento-manual', 'cla-acionamento-automatico', 'clesp-plataforma-unica'],
    artigos: ARTIGOS,
    preco: 2890,
    dataStatus: 'draft',
    ordem: 2,
  },
]
