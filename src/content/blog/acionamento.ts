import type { Artigo } from '../schema'

export const acionamento: Artigo = {
  slug: 'acionamento-manual-ou-automatico',
  titulo: 'Acionamento manual ou automático: qual escolher para o chuveiro de emergência',
  titleSeo: 'Acionamento Manual ou Automático: Qual Escolher | Yank',
  metaDescription:
    'Comparativo entre acionamento manual por alça, pedal e automático por plataforma em chuveiros e lava-olhos de emergência. Critérios de risco e de layout.',
  resumo:
    'A norma aceita os dois. A diferença aparece no comportamento real da vítima: quem foi atingido nos olhos perde justamente o sentido de que precisaria para encontrar a alavanca.',
  publicadoEm: '2026-07-21',
  tempoLeitura: 6,
  corpo: [
    {
      tipo: 'p',
      texto:
        'A ABNT NBR 16291 exige que o acionamento seja feito em um único movimento, em menos de um segundo, e que a válvula permaneça aberta sem precisar ser segurada. Tanto o acionamento manual quanto o automático atendem a esse requisito — então a escolha entre eles não é de conformidade, é de projeto.',
    },
    {
      tipo: 'p',
      texto:
        'E o critério de projeto correto não é o custo do equipamento. É o comportamento previsível de quem vai usá-lo, em pânico, possivelmente sem enxergar.',
    },
    { tipo: 'h2', texto: 'As três formas de acionar' },
    {
      tipo: 'tabela',
      cabecalho: ['Tipo', 'Como funciona', 'Vantagem', 'Limitação'],
      linhas: [
        [
          'Alça puxe',
          'A vítima puxa a alavanca lateral',
          'Simples, robusto, menor custo, sem partes no piso',
          'Exige localizar visualmente a alça',
        ],
        [
          'Pedal',
          'Acionado com o pé, mãos livres',
          'Libera as duas mãos para manter as pálpebras abertas',
          'Ainda exige localizar a posição correta',
        ],
        [
          'Plataforma (automático)',
          'Dispara ao pisar na base do equipamento',
          'Nenhuma etapa de busca — chegar já aciona',
          'Custo maior; exige área no piso',
        ],
      ],
    },
    { tipo: 'h2', texto: 'O problema real do acionamento manual' },
    {
      tipo: 'p',
      texto:
        'Em um acidente com projeção química nos olhos, acontece uma sequência previsível: a vítima fecha os olhos por reflexo, perde a orientação visual e entra em pânico. É nesse estado que ela precisa localizar o equipamento, chegar até ele e encontrar o comando.',
    },
    {
      tipo: 'p',
      texto:
        'As duas primeiras etapas dependem de memória e de sinalização — por isso a norma insiste em distância curta, trajeto livre e placa legível. A terceira, encontrar o comando, é a que o acionamento automático elimina por completo.',
    },
    {
      tipo: 'destaque',
      texto:
        'Não se trata de a alça ser ruim. Trata-se de que, no cenário específico da lesão ocular, o usuário perde exatamente o sentido de que precisaria para usá-la.',
    },
    { tipo: 'h2', texto: 'Por que as mãos livres importam tanto' },
    {
      tipo: 'p',
      texto:
        'Há uma segunda razão, menos evidente, para preferir pedal ou plataforma. Na lavagem ocular, manter as pálpebras abertas contra o reflexo de fechá-las exige as duas mãos. Se o usuário precisar segurar uma alavanca, ele acaba lavando as pálpebras fechadas — e a água não alcança a córnea, que é onde está a lesão.',
    },
    {
      tipo: 'p',
      texto:
        'No banho de corpo inteiro, o raciocínio é equivalente: a norma exige remover a roupa contaminada durante a lavagem, porque o produto retido no tecido continua agindo sobre a pele. Isso também exige as duas mãos.',
    },
    {
      tipo: 'p',
      texto:
        'É por isso que a norma pede válvula que permaneça aberta sozinha, e é por isso que pedal e plataforma são recomendados em áreas de risco elevado mesmo não sendo obrigatórios.',
    },
    { tipo: 'h2', texto: 'Plataformas independentes ou plataforma única?' },
    {
      tipo: 'p',
      texto:
        'Entre os modelos automáticos conjugados há ainda uma escolha, e ela tem consequência prática.',
    },
    {
      tipo: 'ul',
      itens: [
        'Plataformas independentes (modelo CLA): chuveiro e lava-olhos têm cada um a sua plataforma. Permite acionar apenas o necessário — só a lavagem ocular, sem o banho. Isso importa quando a contaminação está restrita ao rosto e o banho de corpo inteiro espalharia o produto para áreas ainda limpas.',
        'Plataforma única com alça puxe (modelo CLESP): um único passo aciona os dois ao mesmo tempo, e a alça fica como comando redundante. Instalação mais simples, e nenhuma decisão a tomar em situação de pânico — vantagem quando o cenário provável envolve contaminação ampla de corpo e rosto.',
      ],
    },
    { tipo: 'h2', texto: 'Critério de decisão' },
    {
      tipo: 'p',
      texto:
        'Na prática, três situações definem a escolha:',
    },
    {
      tipo: 'ol',
      itens: [
        'Risco de lesão ocular imediata — ácidos concentrados, bases fortes, produtos com ação rápida sobre a córnea: acionamento automático. A economia do manual não se sustenta diante da diferença de segundos.',
        'Risco moderado, equipe treinada, área supervisionada: manual por alça ou pedal atende plenamente e é a especificação mais comum na indústria.',
        'Área sem supervisão presencial constante: automático, e vale combinar com sensor de fluxo e sinaleira, para que o acionamento seja percebido remotamente.',
      ],
    },
    {
      tipo: 'p',
      texto:
        'Um cuidado de layout vale para os modelos automáticos: a plataforma deve ficar fora de rota de circulação intensa, para evitar acionamentos indesejados. Ela é dimensionada para disparar com o peso de uma pessoa posicionada sob o crivo, e não com passagem lateral — mas posicionamento ruim cria incômodo desnecessário.',
    },
  ],
  faq: [
    {
      pergunta: 'A norma exige acionamento automático?',
      resposta:
        'Não. A NBR 16291 exige acionamento em um único movimento, em menos de um segundo, com válvula que permaneça aberta sem ser segurada. O acionamento manual por alça ou pedal atende a isso. O automático é uma decisão de projeto, recomendada em áreas de risco elevado.',
    },
    {
      pergunta: 'O acionamento automático pode disparar por acidente?',
      resposta:
        'A plataforma é dimensionada para acionar com o peso de uma pessoa posicionada sob o crivo, e não com tráfego lateral. Ainda assim, vale posicioná-la fora de rota de circulação intensa para evitar acionamentos indesejados.',
    },
    {
      pergunta: 'Qual a diferença entre o CLA e o CLESP?',
      resposta:
        'Ambos são automáticos. O CLA tem plataformas independentes para chuveiro e lava-olhos, permitindo acionar só o necessário. O CLESP usa plataforma única com alça puxe, acionando os dois juntos, com instalação mais simples e um comando redundante.',
    },
  ],
  produtos: [
    'cla-acionamento-automatico',
    'clesp-plataforma-unica',
    'ca-acionamento-automatico',
    'la-lava-olhos-automatico',
  ],
  categorias: ['chuveiros-e-lava-olhos-de-emergencia', 'chuveiros-de-emergencia'],
}
