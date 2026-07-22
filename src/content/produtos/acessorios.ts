import type { Faq, Produto } from '../schema'
import { faqGerais } from '../blocos'

const CATEGORIA = 'pecas-e-acessorios'

/**
 * Acessórios e peças de reposição, conforme a lista de `source-files/catalogo.md`.
 *
 * O catálogo nomeia as peças mas não publica medida, bitola ou compatibilidade
 * item a item — por isso `especificacoes` fica vazio aqui de propósito. As
 * descrições são conhecimento de domínio, não dado de catálogo.
 */

type Entrada = {
  slug: string
  codigo: string
  nome: string
  chave: string
  titleSeo: string
  metaDescription: string
  resumo: string
  descricao: string[]
  bullets: string[]
  aplicacoes: string[]
  faq: Faq[]
  alt: string
  relacionados: string[]
}

const conformidadeAcessorio = [
  'Peça original de fabricante, compatível com a configuração de projeto do equipamento Yank EPC',
  'Mantém a conformidade do conjunto com a ABNT NBR 16291:2014',
]

const faqOriginal: Faq = {
  pergunta: 'Por que usar peça original em vez de peça adaptada?',
  resposta:
    'Porque a peça original mantém a configuração com que o equipamento foi projetado e ensaiado — o que importa na hora de demonstrar conformidade em auditoria. Peça adaptada costuma resolver o problema imediato e criar um problema de comprovação depois.',
}

const faqCompatibilidade: Faq = {
  pergunta: 'A peça serve em equipamento de outro fabricante?',
  resposta:
    'As peças são projetadas para a linha Yank EPC. Em equipamentos de outros fabricantes a compatibilidade precisa ser verificada caso a caso — envie fotos e medidas pelo WhatsApp para conferirmos antes da compra.',
}

function montar(e: Entrada, ordem: number): Produto {
  return {
    slug: e.slug,
    codigo: e.codigo,
    categoria: CATEGORIA,
    nomeCurto: e.nome,
    h1: e.nome,
    titleSeo: e.titleSeo,
    metaDescription: e.metaDescription,
    resumo: e.resumo,
    descricao: e.descricao,
    bullets: e.bullets,
    especificacoes: [],
    aplicacoes: e.aplicacoes,
    conformidade: conformidadeAcessorio,
    itensInclusos: [],
    opcionais: [],
    faq: [...e.faq, faqOriginal, faqCompatibilidade, faqGerais[3]],
    imagens: [{ chave: e.chave, alt: e.alt }],
    relacionados: e.relacionados,
    artigos: ['nbr-16291-o-que-a-norma-exige'],
    dataStatus: 'verified',
    ordem,
  }
}

const entradas: Entrada[] = [
  {
    slug: 'ducha-para-chuveiro-de-emergencia',
    codigo: 'DUCHA',
    nome: 'Ducha Manual para Chuveiro de Emergência',
    chave: 'ducha',
    titleSeo: 'Ducha Manual para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Ducha manual com mangote para chuveiro de emergência, permite dirigir o jato a um ponto específico do corpo. Peça original Yank EPC para reposição.',
    resumo:
      'Ducha manual com mangote flexível, para lavagem dirigida a um ponto específico do corpo.',
    descricao: [
      'A ducha manual complementa o crivo fixo do chuveiro de emergência: enquanto o crivo lava o corpo inteiro, a ducha permite apontar o jato para onde a contaminação está. Em respingo localizado, em contaminação de um membro ou quando é preciso lavar sob a roupa enquanto ela é removida, essa diferença define a eficácia da lavagem.',
      'É também o recurso usado quando a vítima está no chão e não consegue permanecer sob o crivo fixo — situação mais comum do que se imagina em acidente com produto químico, em que a pessoa perde o equilíbrio ou desmaia.',
    ],
    bullets: ['Mangote flexível', 'Acionamento por gatilho', 'Compatível com a linha Yank EPC'],
    aplicacoes: [
      'Ampliação de chuveiro de emergência já instalado',
      'Reposição em equipamentos da linha CLM-E AI SD',
      'Áreas com risco de contaminação localizada',
    ],
    faq: [
      {
        pergunta: 'A ducha pode ser instalada em um chuveiro que já está em uso?',
        resposta:
          'Sim, desde que o equipamento tenha ponto previsto para a derivação. Em equipamentos da linha Yank EPC a instalação é direta; em outros casos, envie fotos do conjunto pelo WhatsApp para avaliarmos a adaptação necessária.',
      },
    ],
    alt: 'Ducha manual com mangote flexível para chuveiro de emergência, com gatilho de acionamento',
    relacionados: ['clm-e-ai-sd-aco-inox-com-ducha', 'pedal-de-acionamento', 'alca-puxe'],
  },
  {
    slug: 'pedal-de-acionamento',
    codigo: 'PEDAL',
    nome: 'Pedal de Acionamento para Lava-Olhos e Chuveiro',
    chave: 'pedal',
    titleSeo: 'Pedal de Acionamento para Lava-Olhos | Yank EPC',
    metaDescription:
      'Pedal de acionamento para chuveiro e lava-olhos de emergência, permite abrir a válvula sem usar as mãos. Peça original Yank EPC.',
    resumo:
      'Pedal que libera a água sem uso das mãos, mantendo-as livres para manter as pálpebras abertas durante a lavagem.',
    descricao: [
      'O pedal de acionamento existe por uma razão prática: na lavagem ocular, manter as pálpebras abertas contra o reflexo de fechá-las exige as duas mãos. Se o usuário precisar segurar uma alavanca, ele acaba lavando as pálpebras fechadas — e a irrigação não alcança a córnea, que é onde está a lesão.',
      'Acionado com o pé, permite abrir a válvula e mantê-la aberta sem ocupar as mãos. É item de reposição frequente por ser um componente mecânico de uso direto, sujeito a desgaste e a impacto no piso.',
    ],
    bullets: ['Acionamento sem uso das mãos', 'Construção metálica', 'Peça de reposição de alto giro'],
    aplicacoes: [
      'Reposição em lava-olhos e chuveiros da linha Yank EPC',
      'Ampliação de equipamento com acionamento manual por alça',
      'Laboratórios e áreas de manipulação química',
    ],
    faq: [
      {
        pergunta: 'O pedal substitui a alça puxe?',
        resposta:
          'Não necessariamente — na maioria das instalações os dois coexistem, oferecendo caminhos redundantes para o mesmo comando. Em situação de pânico, ter mais de uma forma de acionar aumenta a chance de o equipamento ser usado corretamente.',
      },
    ],
    alt: 'Pedal metálico de acionamento para chuveiro e lava-olhos de emergência',
    relacionados: ['alca-puxe', 'ducha-para-chuveiro-de-emergencia', 'ls-lava-olhos-de-bancada'],
  },
  {
    slug: 'alca-puxe',
    codigo: 'ALÇA PUXE',
    nome: 'Alça Puxe para Chuveiro de Emergência',
    chave: 'alca-puxe',
    titleSeo: 'Alça Puxe para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Alça puxe para acionamento de chuveiro de emergência em um único movimento. Peça original Yank EPC para reposição e manutenção.',
    resumo:
      'Alça de acionamento em um único movimento, item de desgaste frequente no teste semanal.',
    descricao: [
      'A alça puxe é o comando mais comum do chuveiro de emergência: um único movimento abre a válvula, que permanece aberta até o fechamento deliberado. É o componente que a norma tem em mente quando exige acionamento simples, sem uso das mãos para manter aberto.',
      'Por ser acionada em todo teste semanal e por ficar exposta em área de circulação, é um dos itens de maior desgaste do equipamento. Alça quebrada ou emperrada é uma das falhas mais frequentes encontradas em inspeção — e uma das que mais comprometem o equipamento no momento do acidente.',
    ],
    bullets: ['Acionamento em um único movimento', 'Construção metálica', 'Peça de reposição de alto giro'],
    aplicacoes: [
      'Reposição em chuveiros e conjugados da linha Yank EPC',
      'Manutenção preventiva após inspeção anual',
      'Substituição de alça danificada em área de circulação',
    ],
    faq: [
      {
        pergunta: 'Com que frequência a alça precisa ser substituída?',
        resposta:
          'Não há prazo fixo — depende do uso e da exposição. O que define é a inspeção: alça emperrada, com folga excessiva ou que não retorna corretamente deve ser trocada. O teste semanal é justamente o que revela esse desgaste antes que ele vire falha.',
      },
    ],
    alt: 'Alça puxe metálica para acionamento de chuveiro de emergência',
    relacionados: ['pedal-de-acionamento', 'placa-puxe', 'clesp-plataforma-unica'],
  },
  {
    slug: 'scald-valve',
    codigo: 'SCALD VALVE',
    nome: 'Scald Valve — Válvula de Proteção Térmica',
    chave: 'scald-valve',
    titleSeo: 'Scald Valve para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Scald valve para chuveiro de emergência: bloqueia água acima da faixa segura, evitando queimadura térmica sobre a lesão química. Peça original Yank.',
    resumo:
      'Válvula que bloqueia a passagem de água acima da temperatura segura, evitando agravar a lesão com queimadura térmica.',
    descricao: [
      'Em redes expostas ao sol ou próximas a fontes de calor, a água parada na tubulação pode atingir temperatura capaz de causar queimadura. No momento do acionamento, essa água é a primeira a sair — exatamente sobre a pele já comprometida pelo produto químico. O resultado é uma queimadura térmica somada à química.',
      'A scald valve bloqueia a passagem de água acima da faixa segura, liberando o fluxo apenas quando a temperatura volta ao aceitável. É um acessório frequentemente ignorado na especificação e que se torna crítico em instalações externas, em plantas de clima quente ou em trechos de tubulação sem isolamento térmico.',
    ],
    bullets: ['Bloqueio automático por temperatura', 'Instalação na linha de alimentação', 'Item de série no modelo JKW-151'],
    aplicacoes: [
      'Instalações com tubulação exposta ao sol',
      'Áreas próximas a fontes de calor ou vapor',
      'Plantas em regiões de clima quente',
    ],
    faq: [
      {
        pergunta: 'Em que instalações a scald valve é realmente necessária?',
        resposta:
          'Onde há trecho de tubulação exposto ao sol, proximidade de fontes de calor ou vapor, ou ausência de isolamento térmico. Nessas condições a água parada pode sair quente o bastante para queimar. Em rede interna, protegida e de trecho curto, o risco é bem menor.',
      },
    ],
    alt: 'Scald valve, válvula de proteção térmica para linha de alimentação de chuveiro de emergência',
    relacionados: ['jkw-151-completo-com-sensores', 'sensor-de-fluxo', 'sinaleira'],
  },
  {
    slug: 'sensor-de-fluxo',
    codigo: 'SENSOR',
    nome: 'Sensor de Fluxo para Alarme Remoto',
    chave: 'sensor',
    titleSeo: 'Sensor de Fluxo para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Sensor de fluxo que detecta o acionamento do chuveiro de emergência e envia o sinal para a sala de controle ou alarme da planta. Peça original Yank.',
    resumo:
      'Detecta o acionamento do equipamento e permite enviar o sinal para a sala de controle ou para o alarme da planta.',
    descricao: [
      'O sensor de fluxo transforma um equipamento passivo em um equipamento monitorado. Ao detectar a passagem de água no acionamento, envia um sinal que pode alimentar alarme sonoro, sinaleira ou o sistema supervisório da planta.',
      'O ganho é maior justamente onde o risco é maior: áreas sem presença constante de outras pessoas, turno noturno, setores isolados, operações com um único trabalhador. Nesses cenários, o acidente pode acontecer sem que ninguém perceba — e o sensor é o que garante que o socorro seja acionado em segundos, e não quando alguém passar pelo local.',
    ],
    bullets: ['Detecção por passagem de água', 'Saída para alarme ou supervisório', 'Item de série no modelo JKW-151'],
    aplicacoes: [
      'Áreas sem supervisão presencial constante',
      'Operações em turno noturno',
      'Plantas com sistema de alarme centralizado',
    ],
    faq: [
      {
        pergunta: 'O sensor pode ser integrado ao supervisório da planta?',
        resposta:
          'Sim. A saída do sensor pode alimentar alarme sonoro, sinaleira local ou o sistema supervisório existente. A forma de integração depende do padrão de sinal da planta — informe a configuração no pedido de orçamento.',
      },
    ],
    alt: 'Sensor de fluxo para detecção de acionamento de chuveiro de emergência, com saída para alarme',
    relacionados: ['sinaleira', 'jkw-151-completo-com-sensores', 'scald-valve'],
  },
  {
    slug: 'sinaleira',
    codigo: 'SINALEIRA',
    nome: 'Sinaleira Luminosa de Acionamento',
    chave: 'sinaleira',
    titleSeo: 'Sinaleira Luminosa para Chuveiro de Emergência | Yank',
    metaDescription:
      'Sinaleira luminosa que indica visualmente o acionamento do chuveiro de emergência. Sinalização à distância em áreas amplas ou ruidosas. Yank EPC.',
    resumo:
      'Sinalização luminosa que indica, à distância, que o equipamento de emergência está em uso.',
    descricao: [
      'A sinaleira acende junto com o acionamento e comunica visualmente que alguém está usando o equipamento. Em galpões amplos, áreas ruidosas ou setores com pouca circulação, é o que transforma um acidente silencioso em um chamado de socorro perceptível.',
      'Combinada ao sensor de fluxo, permite levar a indicação também para fora da área — sala de controle, portaria ou painel de supervisão —, ampliando o alcance do alerta para além do campo de visão imediato.',
    ],
    bullets: ['Acionamento simultâneo ao uso do equipamento', 'Alta visibilidade em área ampla', 'Item de série nos modelos CLM-E AI SD e JKW-151'],
    aplicacoes: [
      'Galpões e áreas industriais amplas',
      'Ambientes ruidosos onde o alarme sonoro é insuficiente',
      'Setores com pouca circulação de pessoas',
    ],
    faq: [
      {
        pergunta: 'A sinaleira funciona sem o sensor de fluxo?',
        resposta:
          'Sim, ela pode ser acionada diretamente pelo comando do equipamento. O sensor é necessário quando se deseja também enviar o sinal para fora da área — sala de controle, portaria ou supervisório.',
      },
    ],
    alt: 'Sinaleira luminosa de sinalização de acionamento de chuveiro de emergência',
    relacionados: ['sensor-de-fluxo', 'clm-e-ai-sd-aco-inox-com-ducha', 'jkw-151-completo-com-sensores'],
  },
  {
    slug: 'capa-protetora',
    codigo: 'CAPA',
    nome: 'Capa Protetora para Chuveiro de Emergência',
    chave: 'capa',
    titleSeo: 'Capa Protetora para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Capa protetora contra poeira, intempéries e resíduo de processo para chuveiro e lava-olhos de emergência. Peça original Yank EPC.',
    resumo:
      'Proteção contra poeira, intempéries e resíduo de processo em equipamentos instalados em área externa.',
    descricao: [
      'Equipamento de emergência passa a maior parte da vida sem ser usado — e é nesse período que acumula poeira, resíduo de processo e sujeira arrastada pelo vento, principalmente na bacia do lava-olhos, que fica voltada para cima e funciona como um coletor.',
      'A capa protetora impede esse acúmulo, mantendo limpas as superfícies que entram em contato direto com os olhos e a pele do usuário. Em área externa, também protege contra chuva, sol e névoa salina, prolongando a vida útil do acabamento.',
    ],
    bullets: ['Proteção contra poeira e resíduo', 'Indicada para instalação externa', 'Remoção rápida no acionamento'],
    aplicacoes: [
      'Equipamentos instalados em área externa',
      'Ambientes com poeira ou particulado em suspensão',
      'Áreas próximas a operações de corte, solda ou moagem',
    ],
    faq: [
      {
        pergunta: 'A capa não atrapalha o uso em uma emergência?',
        resposta:
          'A capa é feita para remoção imediata, sem travas ou fixação demorada. Ainda assim, seu uso precisa entrar no treinamento da equipe e na rotina de teste semanal — como qualquer item que fique entre o usuário e o equipamento.',
      },
    ],
    alt: 'Capa protetora para chuveiro e lava-olhos de emergência instalado em área externa',
    relacionados: ['protetores', 'tampa', 'clm-e-ai-aco-inox-304'],
  },
  {
    slug: 'protetores',
    codigo: 'PROTETORES',
    nome: 'Protetores para Bacia de Lava-Olhos',
    chave: 'protetores',
    titleSeo: 'Protetores para Bacia de Lava-Olhos | Yank EPC',
    metaDescription:
      'Protetores para os crivos da bacia do lava-olhos de emergência, mantendo as superfícies de contato livres de poeira e resíduo. Yank EPC.',
    resumo:
      'Protegem os crivos da bacia do lava-olhos, mantendo limpas as superfícies de contato com os olhos.',
    descricao: [
      'Os crivos do lava-olhos são a última superfície por onde a água passa antes de alcançar os olhos. Poeira, resíduo de processo e particulado acumulados ali são levados direto para a córnea já lesionada no momento do uso — o oposto do que o equipamento deveria fazer.',
      'Os protetores cobrem os crivos enquanto o equipamento está em repouso e saem com o próprio jato no acionamento, sem exigir ação do usuário. É um item pequeno com efeito desproporcional sobre a qualidade da lavagem.',
    ],
    bullets: ['Cobertura dos crivos em repouso', 'Liberação automática pelo jato', 'Aplicável a toda a linha de lava-olhos'],
    aplicacoes: [
      'Lava-olhos em ambientes com poeira ou particulado',
      'Áreas próximas a operações de corte, solda ou moagem',
      'Equipamentos instalados em área externa',
    ],
    faq: [
      {
        pergunta: 'É preciso remover os protetores antes de usar?',
        resposta:
          'Não. Os protetores são projetados para sair com o próprio jato no acionamento, sem exigir nenhuma ação do usuário — que, em situação de emergência, não teria condições de removê-los.',
      },
    ],
    alt: 'Protetores para os crivos da bacia de lava-olhos de emergência',
    relacionados: ['capa-protetora', 'tampa', 'ls-lava-olhos-de-bancada'],
  },
  {
    slug: 'tampa',
    codigo: 'TAMPA',
    nome: 'Tampa para Bacia de Lava-Olhos',
    chave: 'tampa',
    titleSeo: 'Tampa para Bacia de Lava-Olhos de Emergência | Yank EPC',
    metaDescription:
      'Tampa para a bacia do lava-olhos de emergência, evitando acúmulo de poeira e resíduo. Peça original Yank EPC para reposição.',
    resumo:
      'Cobre a bacia do lava-olhos em repouso, evitando o acúmulo de poeira e resíduo.',
    descricao: [
      'A bacia do lava-olhos fica voltada para cima e, na prática, funciona como um coletor de tudo que estiver em suspensão no ambiente. Em meses sem uso, acumula poeira, resíduo de processo e até objetos deixados por descuido.',
      'A tampa cobre a bacia enquanto o equipamento está em repouso e é removida no acionamento. É peça de reposição comum, por ser manuseada em todo teste semanal e por ficar exposta a impacto em área de circulação.',
    ],
    bullets: ['Cobre a bacia em repouso', 'Remoção rápida', 'Peça de reposição de alto giro'],
    aplicacoes: [
      'Lava-olhos em ambientes com poeira',
      'Equipamentos instalados em área externa',
      'Reposição após inspeção periódica',
    ],
    faq: [
      {
        pergunta: 'Qual a diferença entre a tampa e os protetores?',
        resposta:
          'A tampa cobre toda a bacia e precisa ser removida; os protetores cobrem apenas os crivos e saem sozinhos com o jato. Em ambientes com muita poeira os dois costumam ser usados juntos.',
      },
    ],
    alt: 'Tampa de proteção para bacia de lava-olhos de emergência',
    relacionados: ['protetores', 'capa-protetora', 'lm-lava-olhos-de-coluna'],
  },
  {
    slug: 'placa-de-sinalizacao-de-emergencia',
    codigo: 'EMERGÊNCIA',
    nome: 'Placa de Sinalização de Emergência',
    chave: 'placa-emergencia',
    titleSeo: 'Placa de Sinalização para Chuveiro de Emergência | Yank',
    metaDescription:
      'Placa de sinalização para identificar o ponto de chuveiro e lava-olhos de emergência, conforme a NR-26. Peça original Yank EPC.',
    resumo:
      'Identifica o ponto de emergência conforme a NR-26, mantendo o equipamento localizável à distância.',
    descricao: [
      'Um equipamento de emergência que não é encontrado não existe. A placa de sinalização é o que torna o ponto localizável à distância, e sua exigência está tanto na ABNT NBR 16291 quanto na NR-26, que trata da sinalização de segurança.',
      'É também o item que mais silenciosamente sai de conformidade: exposta ao sol, a placa desbota até ficar ilegível sem que ninguém repare, porque a equipe já sabe onde o equipamento está. Quem não sabe é o visitante, o terceirizado e o funcionário novo — exatamente quem mais depende dela.',
    ],
    bullets: ['Conforme a NR-26', 'Alta visibilidade', 'Item de reposição por desbotamento'],
    aplicacoes: [
      'Identificação de ponto de emergência',
      'Reposição de placa desbotada ou danificada',
      'Adequação a auditoria de segurança do trabalho',
    ],
    faq: [
      {
        pergunta: 'Com que frequência a placa precisa ser trocada?',
        resposta:
          'Sempre que perder legibilidade ou contraste. Placas expostas ao sol desbotam em poucos anos, e a perda é gradual — por isso vale incluir a verificação de legibilidade na inspeção anual, e não confiar na percepção do dia a dia.',
      },
    ],
    alt: 'Placa de sinalização de chuveiro e lava-olhos de emergência conforme a NR-26',
    relacionados: ['placa-puxe', 'faixa-demarcatoria', 'clm-e-ai-aco-inox-304'],
  },
  {
    slug: 'placa-puxe',
    codigo: 'PLACA PUXE',
    nome: 'Placa Puxe para Acionamento',
    chave: 'placa-puxe',
    titleSeo: 'Placa Puxe para Chuveiro de Emergência | Yank EPC',
    metaDescription:
      'Placa indicativa "PUXE" para o acionamento do chuveiro de emergência, orientando o uso correto sob estresse. Peça original Yank EPC.',
    resumo:
      'Indica como acionar o equipamento — instrução que precisa ser óbvia para quem nunca o usou.',
    descricao: [
      'Em uma emergência química, quem aciona o equipamento raramente é quem foi treinado nele. Pode ser um visitante, um terceirizado ou um colega de outro setor. A placa puxe existe para que a instrução de uso seja compreendida em um segundo, sem depender de treinamento prévio.',
      'É um complemento da sinalização principal: a placa de emergência diz onde o equipamento está, a placa puxe diz o que fazer quando se chega nele.',
    ],
    bullets: ['Instrução de acionamento visível', 'Alta visibilidade', 'Complementa a placa de emergência'],
    aplicacoes: [
      'Identificação do comando de acionamento',
      'Áreas com circulação de terceiros e visitantes',
      'Adequação a auditoria de segurança do trabalho',
    ],
    faq: [
      {
        pergunta: 'A placa puxe é obrigatória?',
        resposta:
          'A exigência normativa central é a sinalização do ponto de emergência. A placa puxe complementa essa sinalização orientando o acionamento, e é fortemente recomendada em áreas com circulação de terceiros, visitantes e funcionários de outros setores.',
      },
    ],
    alt: 'Placa indicativa PUXE para acionamento de chuveiro de emergência',
    relacionados: ['placa-de-sinalizacao-de-emergencia', 'alca-puxe', 'faixa-demarcatoria'],
  },
  {
    slug: 'faixa-demarcatoria',
    codigo: 'FAIXA',
    nome: 'Faixa Demarcatória de Área de Emergência',
    chave: 'faixa',
    titleSeo: 'Faixa Demarcatória para Área de Emergência | Yank EPC',
    metaDescription:
      'Faixa demarcatória para delimitar a área do chuveiro de emergência e manter o acesso desobstruído, conforme a NR-26. Yank EPC.',
    resumo:
      'Delimita a área do equipamento no piso, mantendo o acesso desobstruído.',
    descricao: [
      'A ABNT NBR 16291 exige acesso livre ao equipamento de emergência. Na prática industrial, porém, a área em volta de um chuveiro tende a virar espaço de armazenagem temporária — um pallet aqui, uma caixa ali — até que o acesso deixe de existir sem que ninguém tenha decidido isso.',
      'A faixa demarcatória no piso torna a área visualmente reservada e transforma a obstrução em algo evidente, tanto para a operação quanto para a auditoria. É a forma mais barata de manter uma exigência normativa que se perde por acúmulo.',
    ],
    bullets: ['Demarcação de piso', 'Conforme a NR-26', 'Mantém o acesso desobstruído'],
    aplicacoes: [
      'Demarcação da área de acesso ao equipamento',
      'Áreas de circulação e armazenagem temporária',
      'Adequação a auditoria de segurança do trabalho',
    ],
    faq: [
      {
        pergunta: 'Qual área deve ser demarcada em volta do equipamento?',
        resposta:
          'A área necessária para o uso e o acesso livre, sem obstrução no trajeto. O dimensionamento depende do modelo e do layout — em conjugados com plataforma de acionamento, a demarcação precisa incluir a plataforma e o espaço de posicionamento do usuário.',
      },
    ],
    alt: 'Faixa demarcatória de piso para delimitar a área de chuveiro de emergência',
    relacionados: ['placa-de-sinalizacao-de-emergencia', 'placa-puxe', 'protetores'],
  },
]

export const acessorios: Produto[] = entradas.map((e, i) => montar(e, i + 1))
