import { categoriaSchema, type Categoria } from './schema'
import { faqGerais, faqInstalacao, faqMaterial, faqAcionamentoAutomatico } from './blocos'

/**
 * Hubs de categoria. As URLs são exatamente as que já existem hoje no
 * WordPress — preservá-las mantém o pouco de equity que o site tem e evita
 * quebrar links externos e o canonical.
 *
 * A auditoria (C3) registra ~250 palavras únicas na página mais importante do
 * site. Cada hub aqui traz 300–500 palavras próprias + tabela comparativa +
 * links para cada produto.
 */

const dados: Categoria[] = [
  {
    slug: 'chuveiros-e-lava-olhos-de-emergencia',
    nome: 'Chuveiros e Lava-Olhos de Emergência',
    nomeMenu: 'Chuveiros e Lava Olhos',
    h1: 'Chuveiro e Lava-Olhos de Emergência Conjugado',
    titleSeo: 'Chuveiro e Lava Olhos de Emergência | Fabricante Yank',
    metaDescription:
      'Chuveiros com lava-olhos acoplado em aço inox AISI 304, PVC ou galvanizado. Acionamento manual ou automático, conforme NBR 16291. Peça um orçamento.',
    resumo:
      'O equipamento conjugado reúne chuveiro e lava-olhos na mesma coluna, protegendo corpo e olhos a partir de um único ponto de emergência.',
    descricao: [
      'O chuveiro e lava-olhos de emergência conjugado é o equipamento mais utilizado em áreas de risco químico, porque resolve dois cenários de acidente com uma única instalação: o contato do produto químico com o corpo e a projeção nos olhos. Em vez de dois pontos separados, a área de risco recebe uma coluna única, com crivo superior para banho e bacia com crivos para lavagem ocular, alimentados pela mesma rede hidráulica.',
      'A escolha do modelo passa por três decisões. A primeira é o material: aço inox AISI 304 para a maioria das indústrias e para ambientes agressivos, PVC onde há ácidos que atacam o metal, e aço galvanizado com pintura epóxi onde o ambiente é mais brando e o custo pesa. A segunda é a bitola de alimentação, 3/4" ou 1", definida pela pressão e vazão disponíveis na rede. A terceira é o tipo de acionamento.',
      'No acionamento manual, a pessoa puxa a alça ou pisa no pedal. É a configuração mais comum e atende plenamente à norma. No acionamento automático, a água é liberada assim que a plataforma é pisada — o CLA usa plataformas independentes para chuveiro e lava-olhos, e o CLESP usa plataforma única com alça puxe. Em acidentes que comprometem a visão, essa diferença é decisiva: a vítima não precisa localizar um comando.',
      'Todos os modelos desta linha saem montados de fábrica, com crivos e bacia em aço inox, placa de sinalização e válvula de acionamento em um único movimento, que permanece aberta até o fechamento manual — exigência da ABNT NBR 16291:2014. Variações como cortina de proteção (CLM-E CT), ducha manual e sinaleira luminosa (CLM-E AI SD) atendem a situações específicas de layout e de privacidade do usuário durante o banho.',
    ],
    comparativo: ['Modelo', 'Material', 'Bitola', 'Acionamento', 'Destaque'],
    faq: [faqMaterial, faqAcionamentoAutomatico, faqInstalacao, ...faqGerais.slice(0, 2)],
    artigos: ['nbr-16291-o-que-a-norma-exige', 'aco-inox-pvc-ou-galvanizado', 'acionamento-manual-ou-automatico'],
    ordem: 1,
  },

  {
    slug: 'chuveiros-de-emergencia',
    nome: 'Chuveiros de Emergência',
    nomeMenu: 'Chuveiros de Emergência',
    h1: 'Chuveiro de Emergência Industrial',
    titleSeo: 'Chuveiro de Emergência Industrial | Fabricante Yank EPC',
    metaDescription:
      'Chuveiros de emergência para indústria e laboratório, com acionamento manual ou automático. Fabricação própria conforme a ABNT NBR 16291:2014.',
    resumo:
      'Chuveiro de emergência isolado, para áreas onde o risco principal é o contato do produto químico com o corpo.',
    descricao: [
      'O chuveiro de emergência isolado é indicado onde o risco predominante é o respingo ou derramamento sobre o corpo e a roupa, e não a projeção nos olhos — situação comum em áreas de transferência de produto, docas de descarga e corredores de circulação entre setores. Nesses pontos, instalar a coluna conjugada seria superdimensionar; o chuveiro simples cobre o cenário real com custo e manutenção menores.',
      'A construção segue o mesmo padrão da linha conjugada: coluna em aço galvanizado com pintura epóxi ou em aço inox, crivo em aço inox, fixação no chão e placa de sinalização. O crivo é dimensionado para produzir um jato amplo e de baixa energia, que cubra ombros e tronco sem agravar a lesão — um jato concentrado demais espalha o contaminante em vez de removê-lo.',
      'A diferença entre os dois modelos está no comando. O CM é manual: o acionamento é feito pela alça, em um movimento. O CA é automático, disparado pela plataforma no piso, e dispensa qualquer ação consciente além de posicionar-se sob o crivo. A norma exige, em ambos, que a válvula permaneça aberta sem que o usuário precise segurá-la, liberando as mãos para remover roupa contaminada.',
      'A ABNT NBR 16291:2014 determina que o equipamento esteja a no máximo 10 segundos de caminhada do ponto de risco, no mesmo nível, com trajeto desobstruído. Vale planejar a posição junto com o layout da área: um chuveiro corretamente especificado, mas atrás de uma porta ou de um pallet, não cumpre a função.',
    ],
    comparativo: ['Modelo', 'Material', 'Bitola', 'Acionamento', 'Fixação'],
    faq: [faqAcionamentoAutomatico, faqInstalacao, ...faqGerais.slice(0, 2)],
    artigos: ['nbr-16291-o-que-a-norma-exige', 'acionamento-manual-ou-automatico'],
    ordem: 2,
  },

  {
    slug: 'lava-olhos-de-emergencia',
    nome: 'Lava-Olhos de Emergência',
    nomeMenu: 'Lava Olhos',
    h1: 'Lava-Olhos de Emergência',
    titleSeo: 'Lava-Olhos de Emergência: Bancada e Coluna | Yank EPC',
    metaDescription:
      'Lava-olhos de emergência em aço inox e PVC para laboratórios e indústria. Modelos de bancada, de coluna e automático, conforme a NBR 16291.',
    resumo:
      'Equipamento dedicado à lavagem ocular, disponível em versão de bancada, de coluna e com acionamento automático.',
    descricao: [
      'O lava-olhos de emergência é o equipamento de primeira resposta para projeção de produto químico nos olhos — a lesão mais frequente e a que menos tolera demora. Os primeiros segundos determinam a gravidade da sequela, e é por isso que a norma trata a distância até o equipamento com tanto rigor. Um lava-olhos a 30 segundos de caminhada, na prática, não é um lava-olhos.',
      'A escolha entre bancada e coluna é de layout, não de desempenho. O modelo de bancada (LS) é fixado na parede ou na própria bancada, ocupa pouco espaço e é o padrão em laboratórios, salas de preparo de amostra e pontos de manipulação. O modelo de coluna (LM) tem fixação no chão, fica visível de longe e é preferido em áreas industriais amplas, onde a sinalização à distância importa.',
      'Para ambientes onde há ácidos que atacam o metal, o LM PVC oferece a mesma configuração de coluna com corpo integralmente em PVC, mantendo a bacia em aço inox. Já o LA acrescenta acionamento automático por plataforma: a água jorra assim que a pessoa se aproxima e pisa, sem depender de localizar a alavanca com a visão comprometida.',
      'Em todos os modelos, a bacia é em aço inox e os crivos entregam jatos suaves e simultâneos para os dois olhos, com altura e ângulo que permitem manter as pálpebras abertas durante a lavagem. A norma recomenda irrigação contínua por 15 minutos, o que só é viável com equipamento fixo à rede — frascos lava-olhos portáteis são complemento, nunca substituto.',
    ],
    comparativo: ['Modelo', 'Material', 'Bitola', 'Acionamento', 'Fixação'],
    faq: [
      {
        pergunta: 'Qual a diferença entre lava-olhos de bancada e de coluna?',
        resposta:
          'A diferença é de instalação e visibilidade. O de bancada é fixado na parede ou na bancada e ocupa pouco espaço, sendo o padrão em laboratórios. O de coluna é fixado no chão, fica visível à distância e é preferido em áreas industriais amplas. O desempenho de lavagem é o mesmo.',
      },
      {
        pergunta: 'Por quanto tempo os olhos devem ser lavados?',
        resposta:
          'A recomendação é de irrigação contínua por no mínimo 15 minutos, mantendo as pálpebras abertas. Por isso o equipamento precisa ter válvula que permanece aberta sem ser segurada — as mãos do usuário ficam livres para manter os olhos abertos.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 2),
    ],
    artigos: ['nbr-16291-o-que-a-norma-exige', 'aco-inox-pvc-ou-galvanizado'],
    ordem: 3,
  },

  {
    slug: 'especiais',
    nome: 'Equipamentos Especiais',
    nomeMenu: 'Especiais',
    h1: 'Chuveiros e Lava-Olhos de Emergência Especiais',
    titleSeo: 'Chuveiros de Emergência Especiais sob Medida | Yank EPC',
    metaDescription:
      'Equipamentos de emergência sob medida, com sensores, sinaleira, scald valve e alarme. Projetos personalizados conforme a necessidade da operação.',
    resumo:
      'Equipamentos completos e projetos sob medida para operações com exigências acima do padrão da linha.',
    descricao: [
      'Nem toda área de risco cabe no catálogo padrão. Plantas com produtos altamente agressivos, operações noturnas, áreas sem supervisão presencial ou instalações que precisam integrar o acionamento ao sistema de alarme da fábrica exigem um equipamento configurado especificamente para aquele cenário. É o que esta linha atende.',
      'O JKW-151 é o modelo mais completo da Yank EPC. Trabalha com bitola de 1.1/4", superior à da linha padrão, e incorpora os recursos que normalmente são opcionais: sensores de fluxo, sinaleira luminosa, scald valve e alarme. O sensor detecta o acionamento e envia o sinal para a sala de controle — em uma área sem presença constante de outras pessoas, essa é a diferença entre um acidente atendido e um acidente descoberto tarde demais.',
      'A scald valve merece atenção particular. Em redes expostas ao sol ou próximas a fontes de calor, a água parada na tubulação pode atingir temperatura capaz de agravar a queimadura química com uma queimadura térmica. A válvula bloqueia a passagem de água acima da faixa segura, protegendo o usuário no momento do acionamento.',
      'O CLMM é o conjugado múltiplo, indicado para áreas de risco extenso ou linhas de produção onde vários pontos precisam de cobertura a partir de uma alimentação comum. Além dos dois modelos, a fábrica desenvolve projetos sob medida a partir do layout e das exigências da operação — inclusive em configurações de material, altura e acionamento fora do padrão.',
    ],
    comparativo: ['Modelo', 'Material', 'Bitola', 'Recursos', 'Aplicação'],
    faq: [
      {
        pergunta: 'É possível encomendar um equipamento fora do padrão do catálogo?',
        resposta:
          'Sim. A Yank EPC é fabricante, não revenda, o que permite desenvolver o equipamento a partir do layout e das exigências da operação — material, altura, bitola, tipo de acionamento e integração com sistemas de alarme. Envie as condições da área pelo WhatsApp para avaliação.',
      },
      {
        pergunta: 'Para que serve a scald valve?',
        resposta:
          'A scald valve impede que água aquecida na tubulação chegue ao usuário. Em redes expostas ao sol ou próximas a fontes de calor, a água parada pode ficar quente o bastante para agravar a lesão com uma queimadura térmica sobre a queimadura química. A válvula bloqueia a passagem acima da faixa segura.',
      },
      ...faqGerais.slice(0, 2),
    ],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    ordem: 4,
  },

  {
    slug: 'transportaveis',
    nome: 'Transportáveis',
    nomeMenu: 'Transportáveis',
    h1: 'Chuveiro e Lava-Olhos de Emergência Portátil',
    titleSeo: 'Chuveiro e Lava-Olhos Portátil Autônomo | Yank EPC',
    metaDescription:
      'Chuveiros e lava-olhos autônomos de 50 e 75 litros em aço inox, com carrinho, para áreas sem rede hidráulica. Ideais para obras e áreas externas.',
    resumo:
      'Equipamentos autônomos com reservatório próprio e carrinho, para frentes de trabalho sem ponto de água.',
    descricao: [
      'Há áreas de risco que a rede hidráulica não alcança: canteiros de obra, pátios de descarga, manutenção em campo, frentes de trabalho temporárias e operações de transferência de produto químico feitas fora da planta. Nesses lugares, a alternativa costuma ser não ter equipamento nenhum — e é exatamente onde o acidente encontra a resposta mais lenta.',
      'A linha transportável resolve isso com um reservatório próprio em aço inoxidável, montado sobre carrinho, disponível em 50 ou 75 litros. O equipamento é levado até a frente de trabalho e fica posicionado junto à área de risco durante a operação, sendo recolhido depois. Toda a construção é em aço inox, inclusive crivos e bacias, porque o equipamento fica exposto ao tempo e ao manuseio constante.',
      'São três configurações. O CM-UA é o chuveiro isolado, para risco de contato com o corpo. O LM-UA é o lava-olhos isolado, para risco de projeção ocular. O CLM-UA é o conjugado, que cobre os dois cenários — a escolha mais comum quando a operação envolve manuseio direto de produto químico.',
      'O dimensionamento do volume depende do tempo de irrigação pretendido e da vazão do crivo escolhido. Vale lembrar que a norma trata 15 minutos de lavagem como referência para exposição ocular: em operação de risco elevado, o volume maior deixa de ser conforto e passa a ser requisito. Para frentes longas, é usual manter uma unidade reserva ou prever reabastecimento.',
    ],
    comparativo: ['Modelo', 'Configuração', 'Material', 'Volume', 'Mobilidade'],
    faq: [
      {
        pergunta: 'Qual volume escolher, 50 ou 75 litros?',
        resposta:
          'Depende do tempo de irrigação pretendido e da vazão do crivo. Como a referência normativa para exposição ocular é de 15 minutos de lavagem contínua, operações de risco mais elevado costumam exigir o volume maior, ou uma unidade reserva para reabastecimento.',
      },
      faqInstalacao,
      ...faqGerais.slice(0, 3),
    ],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    ordem: 5,
  },

  {
    slug: 'pecas-e-acessorios',
    nome: 'Peças e Acessórios',
    nomeMenu: 'Peças e Acessórios',
    h1: 'Peças e Acessórios para Chuveiro e Lava-Olhos de Emergência',
    titleSeo: 'Peças para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Ducha, pedal, sensor, scald valve, sinaleira, alça puxe e placas de sinalização. Peças de reposição e acessórios originais Yank EPC.',
    resumo:
      'Reposição e acessórios originais para manter o equipamento em conformidade ao longo de toda a vida útil.',
    descricao: [
      'Um chuveiro de emergência não falha de uma vez: falha por partes. O crivo entope com resíduo da tubulação, a válvula perde vedação, a alça quebra, a placa de sinalização desbota até ficar ilegível. Nenhuma dessas falhas impede o equipamento de existir na área — mas todas impedem que ele funcione como a norma exige no momento do acidente, e é o teste semanal que as revela.',
      'Esta linha reúne as peças de reposição e os acessórios de ampliação da linha Yank EPC. Entre as peças de desgaste, as mais requisitadas são a ducha, o pedal de acionamento, a alça puxe e a tampa. Entre os itens de sinalização, a placa de emergência, a placa puxe e as faixas demarcatórias, que mantêm o ponto identificável e o acesso desobstruído conforme a NR-26.',
      'Os acessórios de ampliação transformam um equipamento padrão em um equipamento monitorado. O sensor de fluxo detecta o acionamento e permite enviar o sinal para a sala de controle. A sinaleira sinaliza visualmente que o equipamento está em uso. A scald valve protege contra água aquecida na tubulação. A capa protetora e os protetores preservam o conjunto em áreas externas ou com muita poeira.',
      'Por serem peças originais de fabricante, mantêm a configuração com que o equipamento foi projetado — o que importa quando é preciso demonstrar conformidade em auditoria. Peça adaptada costuma resolver o problema imediato e criar um problema de comprovação depois.',
    ],
    comparativo: [],
    faq: [
      {
        pergunta: 'As peças servem em equipamentos de outros fabricantes?',
        resposta:
          'As peças são projetadas para a linha Yank EPC. Em equipamentos de outros fabricantes a compatibilidade precisa ser verificada caso a caso — envie fotos e as medidas pelo WhatsApp para conferirmos antes da compra.',
      },
      {
        pergunta: 'Quais peças costumam precisar de reposição com mais frequência?',
        resposta:
          'Ducha, alça puxe, pedal de acionamento e as placas de sinalização são os itens de maior desgaste. Crivos entopem com resíduo da tubulação em redes sem filtragem, e vedações de válvula perdem eficiência com o tempo. O teste semanal é o que revela esses desgastes antes que virem falha.',
      },
      ...faqGerais.slice(1, 3),
    ],
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    ordem: 6,
  },
]

export const categorias: Categoria[] = dados.map((c) => categoriaSchema.parse(c))

export const categoriasPorSlug = new Map(categorias.map((c) => [c.slug, c]))

export function getCategoria(slug: string): Categoria | undefined {
  return categoriasPorSlug.get(slug)
}
