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

/** Dados conforme `source-files/catalogo.md`. Sem vazão/pressão/peso: o catálogo não os declara. */

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
      'A bitola de 1.1/4" acompanha essa lógica: sustenta o acionamento simultâneo de chuveiro e lava-olhos sem queda de desempenho, mesmo em redes de maior extensão. A estrutura é fornecida em aço galvanizado com pintura verde ou em aço inox, com crivos e bacias em aço inox.',
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
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox' },
      { label: 'Bitola de alimentação', valor: '1.1/4"' },
      { label: 'Crivos e bacias', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Pintura verde' },
      { label: 'Monitoramento', valor: 'Sensor de fluxo, sinaleira e alarme' },
      { label: 'Proteção térmica', valor: 'Scald valve' },
      /*
        Ficha técnica NÃO publicada, aguardando confirmação da fábrica.

        O site legado da antecessora (jankowiski.com.br/jkw-151-2.html, capturado
        pelo Internet Archive em 2016) publica, para este mesmo modelo, valores
        que batem com a bitola de 1.1/4" declarada no catálogo atual:

          Vazão                20 GPM chuveiro (75,7 L/min) · 3 GPM na bacia (11,4 L/min)

        ⚠️ Atenção ao rótulo da vazão da bacia: a folha antiga escreve "3 GPM
        Lava-Olhos", mas 3 GPM é o mínimo que a ANSI/ISEA Z358.1 fixa para
        lava-olhos E ROSTO (seção 6). Para lava-olhos simples (seção 5) o
        mínimo é 0,4 GPM (1,5 L/min), e a NBR 16291 pede 1,5 L/min. Se estes
        valores forem publicados, confirme com a fábrica se a bacia do JKW-151
        é de lava-olhos ou de lava-olhos e rosto, e rotule na classe correta.
          Crivos               aço inox 304, Ø 300 mm
          Pedestal             300 mm
          Entrada e saída      Ø 1.1/4" BSP / NPT
          Sensores magnéticos  24 VDC, com alarme
          Scald valve          abre a 40,6 °C · fecha a 35,0 °C
          Sinaleira            blindada verde, lâmpada fria 127 V × 15 W

        São dados de 2016, sob a marca anterior. Confirme com a fábrica que a
        configuração atual é a mesma antes de publicar — aí basta mover as
        linhas para cima.
      */
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
        alt: 'Chuveiro e lava-olhos de emergência JKW-151 em coluna verde com flange de piso, crivo em braço lateral, haste de acionamento com alça puxe, bacia de lava-olhos, mangueira flexível, sinaleira luminosa com gaiola e caixa de comando',
      },
    ],
    relacionados: [
      'clmm-chuveiro-lava-olhos-lava-maos',
      'cla-acionamento-automatico',
      'clm-e-ai-sd-aco-inox-com-ducha',
    ],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    dataStatus: 'verified',
    ordem: 1,
  },

  {
    slug: 'clmm-chuveiro-lava-olhos-lava-maos',
    codigo: 'CLMM',
    categoria: CATEGORIA,
    nomeCurto: 'CLMM',
    h1: 'Chuveiro, Lava-Olhos e Lava-Mãos de Emergência Conjugados — Modelo CLMM',
    titleSeo: 'Chuveiro, Lava-Olhos e Lava-Mãos CLMM | Yank EPC',
    metaDescription:
      'Conjunto de emergência com chuveiro, lava-olhos e lava-mãos na mesma coluna, manual, em aço galvanizado ou inox, bitola 3/4" ou 1". Conforme NBR 16291.',
    resumo:
      'Conjunto completo da linha: chuveiro, lava-olhos e lava-mãos integrados na mesma coluna, com acionamento manual.',
    descricao: [
      'O CLMM é o conjunto mais completo da linha manual da Yank EPC. À coluna conjugada de chuveiro e lava-olhos ele acrescenta um lava-mãos integrado, cobrindo em um único ponto os três cenários de contato com produto químico: o corpo, os olhos e as mãos.',
      'O lava-mãos existe porque as mãos são a via de contato mais frequente e a mais subestimada. É por elas que o produto chega ao rosto, aos olhos e às demais superfícies da área, e é nelas que a contaminação residual persiste depois do atendimento inicial. Ter o lavador no mesmo ponto do chuveiro evita que a pessoa saia da área de emergência para lavar as mãos em uma pia comum — que não tem vazão, nem posição, nem sinalização para isso.',
      'A construção segue o padrão da linha: estrutura em aço galvanizado com pintura verde ou em aço inox, crivos e bacias em aço inox, alimentação em 3/4" ou 1", fixação no chão e placa de sinalização. O acionamento é manual, em um único movimento, com válvula que permanece aberta até o fechamento deliberado.',
      'É a especificação indicada onde a operação envolve manipulação direta e contínua de produto químico — bancadas de dosagem, áreas de pesagem e transferência, laboratórios de processo — e onde faz sentido concentrar as três lavagens em um equipamento só, com uma única rotina de teste e manutenção.',
    ],
    bullets: [
      'Chuveiro, lava-olhos e lava-mãos integrados',
      'Aço galvanizado ou inox',
      'Bitola de 3/4" ou 1"',
      'Crivos e bacias em aço inox',
      'Pintura verde',
      'Placa de sinalização',
      'Modelo manual',
    ],
    especificacoes: [
      { label: 'Configuração', valor: 'Chuveiro + lava-olhos + lava-mãos' },
      { label: 'Material da estrutura', valor: 'Aço galvanizado ou aço inox' },
      { label: 'Bitola de alimentação', valor: '3/4" ou 1"' },
      { label: 'Crivos e bacias', valor: 'Aço inox' },
      { label: 'Acabamento', valor: 'Pintura verde' },
      { label: 'Acionamento', valor: 'Manual' },
    ],
    aplicacoes: aplicacoesIndustriais,
    conformidade: conformidadeBase,
    itensInclusos: itensPadrao,
    opcionais: opcionaisComuns,
    faq: [
      {
        pergunta: 'Qual a diferença entre o CLMM e o conjugado CLM-E?',
        resposta:
          'O CLM-E reúne chuveiro e lava-olhos. O CLMM acrescenta a esse conjunto um lava-mãos integrado, na mesma coluna e com a mesma alimentação. É a escolha para áreas de manipulação direta e contínua de produto químico, em que a lavagem das mãos faz parte da rotina e não apenas do atendimento a acidentes.',
      },
      {
        pergunta: 'O lava-mãos substitui uma pia comum na área?',
        resposta:
          'Não é essa a função. O lava-mãos do CLMM integra o ponto de emergência: fica sinalizado, desobstruído e no mesmo local do chuveiro e do lava-olhos, para que a pessoa não precise deixar a área de emergência durante o atendimento. A pia de uso rotineiro continua sendo item separado da área.',
      },
      faqInstalacao,
      faqMaterial,
      ...faqGerais.slice(0, 3),
    ],
    imagens: [
      {
        chave: 'clmm',
        alt: 'Conjunto de emergência CLMM em coluna verde com crivo de chuveiro no topo, alça puxe, placa de sinalização e duas bacias em aço inox: lava-mãos com torneira e lava-olhos com crivos duplos',
      },
    ],
    relacionados: ['jkw-151-completo-com-sensores', 'clm-e-ai-aco-inox-304', 'clm-e-ct-cortina-de-protecao'],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    dataStatus: 'verified',
    ordem: 2,
  },
]
