import type { Produto } from '../schema'
import {
  aplicacoesCampo,
  conformidadeBase,
  faqGerais,
  faqTransportavel,
  itensPadrao,
} from '../blocos'

const CATEGORIA = 'transportaveis'

/** Dados conforme `source-files/catalogo.md`. Sem vazão/pressão/peso: o catálogo não os declara. */

/** Bullets idênticos nos três modelos — vieram assim do site atual. */
const bulletsUA = [
  'Aço inoxidável',
  'Bitola de 3/4" ou 1"',
  'Crivos e bacias em aço inox',
  'Cilindro em aço inoxidável',
  'Placa de sinalização',
  '50 ou 75 litros de água',
  'Carrinho transportável',
]

const especificacoesUA = [
  { label: 'Material da estrutura', valor: 'Aço inoxidável' },
  { label: 'Bitola', valor: '3/4" ou 1"' },
  { label: 'Cilindro', valor: 'Aço inoxidável' },
  { label: 'Capacidade', valor: '50 ou 75 litros' },
  { label: 'Mobilidade', valor: 'Carrinho transportável' },
]

const faqVolume = {
  pergunta: 'Qual volume escolher, 50 ou 75 litros?',
  resposta:
    'Depende do tempo de irrigação pretendido e da vazão do crivo. Como a referência normativa para exposição ocular é de 15 minutos de lavagem contínua, operações de risco mais elevado costumam exigir o volume de 75 litros, ou uma unidade reserva para reabastecimento durante o atendimento.',
}

const faqPressurizacao = {
  pergunta: 'Como o equipamento mantém a pressão sem rede hidráulica?',
  resposta:
    'O cilindro em aço inoxidável é pressurizado, o que garante vazão constante durante o uso sem depender de ponto de água. Antes de cada frente de trabalho é preciso conferir nível de água e pressão — essa verificação entra na rotina do equipamento portátil do mesmo modo que o teste semanal entra na do equipamento fixo.',
}

export const transportaveis: Produto[] = [
  {
    slug: 'clm-ua-chuveiro-lava-olhos-portatil',
    codigo: 'CLM-UA',
    categoria: CATEGORIA,
    nomeCurto: 'CLM-UA',
    h1: 'Chuveiro e Lava-Olhos de Emergência Portátil Autônomo — Modelo CLM-UA',
    titleSeo: 'Chuveiro e Lava-Olhos Portátil Autônomo CLM-UA | Yank',
    metaDescription:
      'Chuveiro e lava-olhos de emergência portátil, autônomo, em aço inox, com cilindro de 50 ou 75 litros e carrinho. Para áreas sem rede hidráulica.',
    resumo:
      'Conjugado autônomo sobre carrinho, com reservatório próprio de 50 ou 75 litros — cobre banho e lavagem ocular onde não há ponto de água.',
    descricao: [
      'O CLM-UA é a configuração mais completa da linha transportável: reúne chuveiro e lava-olhos em um equipamento autônomo, montado sobre carrinho, com reservatório próprio em aço inoxidável de 50 ou 75 litros. É a escolha usual quando a operação envolve manuseio direto de produto químico fora da planta, e os dois cenários de acidente — contato com o corpo e projeção nos olhos — precisam estar cobertos.',
      'Existem áreas de risco que a rede hidráulica simplesmente não alcança: canteiros de obra, pátios de descarga, manutenção em campo, operações de transferência feitas fora da planta e frentes de trabalho temporárias. Nesses lugares a alternativa costuma ser não ter equipamento nenhum — e é exatamente onde o acidente encontra a resposta mais lenta.',
      'Toda a construção é em aço inox, inclusive crivos, bacias e cilindro, porque o equipamento fica exposto ao tempo e ao manuseio constante, sendo deslocado a cada frente de trabalho. O cilindro é pressurizado, garantindo vazão constante durante o uso sem depender de ponto de água.',
      'A rotina de verificação é diferente da do equipamento fixo: em vez do teste semanal de acionamento, o que precisa ser conferido antes de cada frente é o nível de água e a pressão do cilindro. Um equipamento portátil vazio é indistinguível de um cheio até o momento em que alguém precisa dele.',
    ],
    bullets: bulletsUA,
    especificacoes: [
      ...especificacoesUA,
      { label: 'Configuração', valor: 'Chuveiro + lava-olhos conjugados' },
    ],
    aplicacoes: aplicacoesCampo,
    conformidade: conformidadeBase,
    itensInclusos: [...itensPadrao, 'Cilindro em aço inoxidável', 'Carrinho transportável'],
    opcionais: ['Cilindro reserva para reabastecimento', 'Capa protetora contra intempéries'],
    faq: [faqTransportavel, faqVolume, faqPressurizacao, ...faqGerais.slice(0, 3)],
    imagens: [
      {
        chave: 'clm-ua',
        alt: 'Chuveiro e lava-olhos de emergência portátil CLM-UA sobre carrinho de duas rodas, com cilindro pressurizado de unidade autônoma, haste de chuveiro, bacia de lava-olhos e placa de sinalização',
      },
    ],
    relacionados: ['cm-ua-chuveiro-portatil', 'lm-ua-lava-olhos-portatil', 'clm-e-ai-aco-inox-304'],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    dataStatus: 'verified',
    ordem: 1,
  },

  {
    slug: 'cm-ua-chuveiro-portatil',
    codigo: 'CM-UA',
    categoria: CATEGORIA,
    nomeCurto: 'CM-UA',
    h1: 'Chuveiro de Emergência Portátil Autônomo — Modelo CM-UA',
    titleSeo: 'Chuveiro de Emergência Portátil Autônomo CM-UA | Yank',
    metaDescription:
      'Chuveiro de emergência portátil e autônomo em aço inox, com cilindro de 50 ou 75 litros e carrinho transportável. Para obras e áreas sem rede de água.',
    resumo:
      'Chuveiro autônomo sobre carrinho, para frentes de trabalho onde o risco principal é o contato do produto químico com o corpo.',
    descricao: [
      'O CM-UA é o chuveiro de emergência isolado da linha transportável. Cobre o cenário de respingo ou derramamento sobre o corpo e a roupa em áreas sem rede hidráulica — obras, pátios de descarga, manutenção em campo e operações de transferência feitas fora da planta.',
      'A escolha pelo modelo isolado, em vez do conjugado CLM-UA, faz sentido quando a operação não envolve risco relevante de projeção ocular: transporte e movimentação de embalagens fechadas, por exemplo, ou trabalho em que a manipulação direta do produto é feita por outra equipe. Onde há manuseio aberto, o conjugado é a especificação correta.',
      'A construção é integralmente em aço inox, incluindo crivo e cilindro, com reservatório de 50 ou 75 litros pressurizado, montado sobre carrinho. O equipamento é levado até a frente de trabalho, permanece posicionado junto à área de risco durante a operação e é recolhido depois.',
      'Como todo equipamento portátil, depende de uma rotina de verificação própria: nível de água e pressão do cilindro conferidos antes de cada frente de trabalho, no lugar do teste semanal de acionamento aplicável ao equipamento fixo.',
    ],
    bullets: bulletsUA,
    especificacoes: [
      ...especificacoesUA,
      { label: 'Configuração', valor: 'Chuveiro isolado' },
    ],
    aplicacoes: aplicacoesCampo,
    conformidade: conformidadeBase,
    itensInclusos: [...itensPadrao, 'Cilindro em aço inoxidável', 'Carrinho transportável'],
    opcionais: ['Cilindro reserva para reabastecimento', 'Capa protetora contra intempéries'],
    faq: [
      faqTransportavel,
      {
        pergunta: 'Quando escolher o chuveiro isolado em vez do conjugado portátil?',
        resposta:
          'Quando a operação não envolve risco relevante de projeção ocular — transporte e movimentação de embalagens fechadas, por exemplo. Onde há manuseio aberto de produto químico, com risco de respingo no rosto, o conjugado CLM-UA é a especificação correta.',
      },
      faqVolume,
      faqPressurizacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'cm-ua',
        alt: 'Chuveiro de emergência portátil CM-UA em aço inox, com cilindro pressurizado e carrinho transportável',
      },
    ],
    relacionados: ['clm-ua-chuveiro-lava-olhos-portatil', 'lm-ua-lava-olhos-portatil', 'cm-acionamento-manual'],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    dataStatus: 'verified',
    ordem: 2,
  },

  {
    slug: 'lm-ua-lava-olhos-portatil',
    codigo: 'LM-UA',
    categoria: CATEGORIA,
    nomeCurto: 'LM-UA',
    h1: 'Lava-Olhos de Emergência Portátil Autônomo — Modelo LM-UA',
    titleSeo: 'Lava-Olhos de Emergência Portátil Autônomo LM-UA | Yank',
    metaDescription:
      'Lava-olhos de emergência portátil e autônomo em aço inox, com cilindro de 50 ou 75 litros e carrinho. Para frentes de trabalho sem rede hidráulica.',
    resumo:
      'Lava-olhos autônomo sobre carrinho, para frentes de trabalho onde o risco principal é a projeção de produto químico nos olhos.',
    descricao: [
      'O LM-UA é o lava-olhos autônomo da linha transportável, para operações em campo cujo risco predominante é a projeção de produto químico nos olhos. Com reservatório próprio em aço inoxidável de 50 ou 75 litros, montado sobre carrinho, dispensa qualquer ponto de água na frente de trabalho.',
      'A lavagem ocular é a aplicação em que a autonomia mais importa. A referência normativa é de 15 minutos de irrigação contínua, e nenhum frasco portátil sustenta isso — frascos servem para iniciar a lavagem no trajeto, não para completá-la. Em campo, sem rede hidráulica, o equipamento autônomo é a única forma de cumprir esse tempo.',
      'A construção é integralmente em aço inox, incluindo crivos, bacia e cilindro, porque o equipamento fica exposto ao tempo e é deslocado constantemente. O cilindro pressurizado garante vazão constante durante o uso, e a bacia entrega jatos suaves e simultâneos para os dois olhos.',
      'O dimensionamento do volume deve considerar o tempo de irrigação pretendido: em operação de risco elevado, os 75 litros deixam de ser conforto e passam a ser requisito, e vale prever unidade reserva para reabastecimento durante o atendimento.',
    ],
    bullets: bulletsUA,
    especificacoes: [
      ...especificacoesUA,
      { label: 'Configuração', valor: 'Lava-olhos isolado' },
    ],
    aplicacoes: aplicacoesCampo,
    conformidade: conformidadeBase,
    itensInclusos: [...itensPadrao, 'Cilindro em aço inoxidável', 'Carrinho transportável'],
    opcionais: ['Cilindro reserva para reabastecimento', 'Capa protetora contra intempéries'],
    faq: [
      faqTransportavel,
      {
        pergunta: 'Um frasco lava-olhos portátil não resolveria?',
        resposta:
          'Não. O frasco serve para iniciar a lavagem no trajeto até o equipamento, mas não sustenta os 15 minutos de irrigação contínua que a lavagem ocular exige. Em campo, sem rede hidráulica, o equipamento autônomo com reservatório é a única forma de cumprir esse tempo.',
      },
      faqVolume,
      faqPressurizacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'lm-ua',
        alt: 'Lava-olhos de emergência portátil LM-UA em aço inox, com bacia, cilindro pressurizado e carrinho transportável',
      },
    ],
    relacionados: ['clm-ua-chuveiro-lava-olhos-portatil', 'cm-ua-chuveiro-portatil', 'lm-lava-olhos-de-coluna'],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    dataStatus: 'verified',
    ordem: 3,
  },
]
