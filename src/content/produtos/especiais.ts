import type { Produto } from '../schema'
import {
  aplicacoesIndustriais,
  conformidadeBase,
  faqGerais,
  faqInstalacao,
  faqMaterial,
  itensPadrao,
  opcionaisComuns,
} from '../blocos'

const CATEGORIA = 'especiais'

/** ⚠️ Especificações marcadas `provisorio: true` e `preco` são MOCK — ver produtos/chuveiros-e-lava-olhos.ts */

export const especiais: Produto[] = [
  {
    slug: 'jkw-151-completo-com-sensores',
    codigo: 'JKW-151',
    categoria: CATEGORIA,
    nomeCurto: 'JKW-151',
    h1: 'Chuveiro e Lava-Olhos de Emergência Completo com Sensores e Alarme — Modelo JKW-151',
    titleSeo: 'Chuveiro Lava-Olhos Completo com Sensor JKW-151 | Yank',
    metaDescription:
      'Equipamento de emergência mais completo da linha: bitola 1.1/4", sensores, sinaleira, scald valve e alarme. Aço galvanizado ou inox, conforme NBR 16291.',
    resumo:
      'O equipamento mais completo da linha Yank EPC: bitola reforçada de 1.1/4" e os recursos de monitoramento que nos demais modelos são opcionais.',
    descricao: [
      'O JKW-151 é o topo da linha Yank EPC e existe para um cenário específico: áreas de risco elevado onde o acionamento precisa ser percebido remotamente. Ele reúne, de série, os recursos que nos demais modelos são opcionais — sensores de fluxo, sinaleira luminosa, scald valve e alarme — e trabalha com bitola de 1.1/4", superior à da linha padrão.',
      'O sensor de fluxo é o que muda a natureza do equipamento. Ao detectar o acionamento, envia o sinal para a sala de controle ou para o sistema de alarme da planta. Em uma área sem presença constante de outras pessoas — turno da noite, setor isolado, operação com um único trabalhador —, essa é a diferença entre um acidente atendido em segundos e um acidente descoberto tarde demais.',
      'A scald valve merece atenção à parte. Em redes expostas ao sol ou próximas a fontes de calor, a água parada na tubulação pode atingir temperatura capaz de agravar a queimadura química com uma queimadura térmica. A válvula bloqueia a passagem de água acima da faixa segura, protegendo o usuário justamente no momento em que ele está mais vulnerável.',
      'A bitola de 1.1/4" acompanha essa lógica: sustenta o acionamento simultâneo de chuveiro e lava-olhos sem queda de desempenho, mesmo em redes de maior extensão. A estrutura é fornecida em aço galvanizado com pintura epóxi verde ou em aço inox, com crivos e bacias em aço inox.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 1.1/4"',
      'Crivos e bacias em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Sensores, sinaleira, scald valve e alarme',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '1.1/4"', provisorio: false },
      { label: 'Crivos e bacias', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Monitoramento', valor: 'Sensor de fluxo, sinaleira e alarme', provisorio: false },
      { label: 'Proteção térmica', valor: 'Scald valve', provisorio: false },
      { label: 'Vazão do chuveiro', valor: '76 L/min', provisorio: true },
      { label: 'Vazão do lava-olhos', valor: '12 L/min', provisorio: true },
      { label: 'Tensão da sinaleira', valor: '220 V', provisorio: true },
      { label: 'Peso aproximado', valor: '54 kg', provisorio: true },
    ],
    aplicacoes: [
      'Áreas de risco elevado sem supervisão presencial',
      'Operações em turno noturno ou com trabalhador isolado',
      'Indústria química e petroquímica',
      'Plantas com sistema de alarme centralizado',
      'Áreas com risco de água aquecida na tubulação',
    ],
    conformidade: conformidadeBase,
    itensInclusos: [
      ...itensPadrao,
      'Sensor de fluxo',
      'Sinaleira luminosa',
      'Scald valve',
      'Alarme sonoro',
    ],
    opcionais: ['Integração com sistema supervisório da planta', 'Capa protetora contra intempéries'],
    faq: [
      {
        pergunta: 'Como funciona o sensor de fluxo?',
        resposta:
          'O sensor detecta a passagem de água no momento do acionamento e envia o sinal para a sala de controle ou para o sistema de alarme da planta. Em áreas sem presença constante de outras pessoas, é o que garante que o acidente seja percebido imediatamente, e não apenas quando alguém passar pelo local.',
      },
      {
        pergunta: 'Para que serve a scald valve?',
        resposta:
          'Impede que água aquecida na tubulação chegue ao usuário. Em redes expostas ao sol ou próximas a fontes de calor, a água parada pode ficar quente o bastante para agravar a lesão com uma queimadura térmica sobre a química. A válvula bloqueia a passagem acima da faixa segura.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'jkw-151',
        alt: 'Chuveiro e lava-olhos de emergência JKW-151 completo, com sensor de fluxo, sinaleira luminosa, scald valve e alarme',
      },
    ],
    relacionados: ['clmm-conjugado-multiplo', 'cla-acionamento-automatico', 'clm-e-ai-sd-aco-inox-com-ducha'],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    preco: 9890,
    dataStatus: 'draft',
    ordem: 1,
  },

  {
    slug: 'clmm-conjugado-multiplo',
    codigo: 'CLMM',
    categoria: CATEGORIA,
    nomeCurto: 'CLMM',
    h1: 'Chuveiro e Lava-Olhos de Emergência Conjugado Múltiplo — Modelo CLMM',
    titleSeo: 'Chuveiro e Lava-Olhos Conjugado Múltiplo CLMM | Yank EPC',
    metaDescription:
      'Chuveiro e lava-olhos de emergência conjugado múltiplo, manual, em aço galvanizado ou inox. Para áreas de risco extenso, conforme a ABNT NBR 16291.',
    resumo:
      'Conjugado múltiplo para áreas de risco extenso, onde vários pontos precisam ser cobertos a partir de uma alimentação comum.',
    descricao: [
      'O CLMM atende a um problema de layout: áreas de risco extenso, como linhas de produção longas ou plataformas de processo, em que um único ponto de emergência não consegue cumprir a exigência normativa de 10 segundos de caminhada a partir de qualquer posição de trabalho.',
      'A solução convencional seria instalar vários equipamentos independentes, cada um com sua alimentação. O conjugado múltiplo permite cobrir os pontos necessários a partir de uma alimentação comum, o que simplifica a instalação hidráulica, reduz o custo de infraestrutura e — o que costuma pesar mais — facilita a manutenção e o teste semanal, que passam a ser feitos em um conjunto e não em unidades espalhadas.',
      'A construção segue o padrão da linha: estrutura em aço galvanizado com pintura epóxi verde ou em aço inox, crivos e bacias em aço inox, alimentação em 3/4" ou 1", fixação no chão e placa de sinalização. O acionamento é manual, em um único movimento, com válvula que permanece aberta até o fechamento deliberado.',
      'Por depender diretamente do layout da área, o dimensionamento do CLMM costuma ser feito caso a caso — número de pontos, distâncias e vazão simultânea disponível na rede. Vale enviar a planta da área junto com o pedido de orçamento.',
    ],
    bullets: [
      'Aço galvanizado ou inox',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacias em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Fixação no chão',
      'Modelo manual',
    ],
    especificacoes: [
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox', provisorio: false },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"', provisorio: false },
      { label: 'Crivos e bacias', valor: 'Aço inox', provisorio: false },
      { label: 'Acabamento', valor: 'Pintura verde', provisorio: false },
      { label: 'Acionamento', valor: 'Manual', provisorio: false },
      { label: 'Fixação', valor: 'No chão', provisorio: false },
      { label: 'Configuração', valor: 'Conjugado múltiplo, dimensionado por projeto', provisorio: false },
      { label: 'Vazão por ponto', valor: '76 L/min (chuveiro) e 12 L/min (lava-olhos)', provisorio: true },
      { label: 'Peso aproximado', valor: '62 kg', provisorio: true },
    ],
    aplicacoes: aplicacoesIndustriais,
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Quando o conjugado múltiplo compensa em relação a vários equipamentos isolados?',
        resposta:
          'Em áreas de risco extenso, onde um único ponto não cobre os 10 segundos de caminhada exigidos pela norma a partir de qualquer posição de trabalho. A alimentação comum simplifica a instalação hidráulica e, principalmente, concentra a manutenção e o teste semanal em um conjunto em vez de unidades espalhadas.',
      },
      faqInstalacao,
      faqMaterial,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clmm',
        alt: 'Chuveiro e lava-olhos de emergência conjugado múltiplo CLMM, com múltiplos pontos de atendimento e alimentação comum',
      },
    ],
    relacionados: ['jkw-151-completo-com-sensores', 'clm-e-ai-aco-inox-304', 'clm-e-ct-cortina-de-protecao'],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    preco: 7490,
    dataStatus: 'draft',
    ordem: 2,
  },
]
