/**
 * Blocos de conteúdo reaproveitados entre produtos.
 *
 * Aplicações, conformidade e boa parte das perguntas frequentes são idênticas
 * dentro de uma mesma família de equipamento. Centralizar aqui evita 30 cópias
 * do mesmo parágrafo divergirem com o tempo — e mantém a redação consistente,
 * que é o que o Google lê como sinal de qualidade.
 *
 * Nada aqui é número de catálogo: é conhecimento de domínio.
 *
 * ⚠️ Ao mexer nas afirmações normativas, cuidado com três confusões comuns
 * entre NBR 16291:2014 e ANSI/ISEA Z358.1-2014 (R2020) — a NBR derivou da
 * edição 2009 da ANSI e não acompanhou as mudanças de 2014:
 *   - a faixa de água morna 16–38 °C é da ANSI; a NBR pede temperatura ambiente
 *   - a metragem (~17 m / 55 ft) é da ANSI; a NBR fixa só os 10 segundos
 *   - altura dos bocais do lava-olhos: 85–115 cm na NBR, 83,8–134,6 cm na ANSI
 */

import type { Faq } from './schema'

// ---------------------------------------------------------------- aplicações

export const aplicacoesIndustriais = [
  'Indústria química e petroquímica',
  'Indústria farmacêutica',
  'Laboratórios de análise e pesquisa',
  'Indústria alimentícia e de bebidas',
  'Estações de tratamento de água e efluentes',
  'Galvanoplastia e tratamento de superfícies',
]

export const aplicacoesCorrosivas = [
  'Áreas de manuseio de ácidos e bases fortes',
  'Casas de química de estações de tratamento',
  'Galvanoplastia e banhos químicos',
  'Indústria de papel e celulose',
  'Ambientes com névoa salina ou alta umidade',
]

export const aplicacoesLaboratorio = [
  'Bancadas de laboratório químico',
  'Laboratórios de controle de qualidade',
  'Salas de preparo de amostras',
  'Universidades e centros de pesquisa',
  'Farmácias de manipulação',
]

export const aplicacoesCampo = [
  'Obras e canteiros sem rede hidráulica',
  'Áreas externas e pátios de descarga',
  'Manutenção industrial em campo',
  'Transferência e transporte de produtos químicos',
  'Frentes de trabalho temporárias',
]

// -------------------------------------------------------------- conformidade

export const conformidadeBase = [
  'Fabricado conforme os requisitos da ABNT NBR 16291:2014 — Chuveiros e lava-olhos de emergência: requisitos gerais',
  'Referência à ANSI/ISEA Z358.1-2014 (R2020); a NBR 16291 foi baseada na edição 2009 dessa norma',
  'Fabricação própria, com controle de qualidade em todas as etapas de produção',
  'Sinalização em verde conforme a NR-26 e a ABNT NBR 7195, que atribui à cor o significado de segurança',
]

export const conformidadeAcionamento = [
  ...conformidadeBase,
  'Acionamento em um único movimento, sem uso das mãos, mantendo-se aberto até fechamento manual',
]

// ------------------------------------------------------------- itens comuns

export const itensPadrao = [
  'Equipamento montado, pronto para instalação',
  'Placa de sinalização',
  'Válvula de acionamento',
]

export const opcionaisComuns = [
  'Sinaleira luminosa de acionamento',
  'Sensor de fluxo para alarme remoto',
  'Scald valve (válvula de proteção térmica)',
  'Capa protetora contra intempéries',
  'Pedal de acionamento adicional',
]

// ---------------------------------------------------------------------- FAQ

/** Perguntas que valem para qualquer equipamento da linha. */
export const faqGerais: Faq[] = [
  {
    pergunta: 'O equipamento atende à norma ABNT NBR 16291?',
    resposta:
      'Sim. Toda a linha Yank EPC é fabricada segundo os requisitos da ABNT NBR 16291:2014, que define construção, acionamento, sinalização e desempenho de chuveiros e lava-olhos de emergência. A norma também exige que o equipamento seja instalado a no máximo 10 segundos de caminhada do ponto de risco e mantido livre de obstruções.',
  },
  {
    pergunta: 'Com que frequência o equipamento precisa ser testado?',
    resposta:
      'A recomendação normativa é de acionamento semanal, por tempo suficiente para eliminar a água parada da tubulação e confirmar o funcionamento, além de uma inspeção completa anual. O teste semanal é o que garante que o equipamento vai funcionar no dia em que for realmente necessário — e é o registro que a fiscalização costuma pedir.',
  },
  {
    pergunta: 'O equipamento chega montado?',
    resposta:
      'Sim. Os equipamentos saem montados de fábrica, o que reduz o tempo de instalação e elimina erros de montagem em campo. Basta a ligação hidráulica e a fixação no local previsto.',
  },
  {
    pergunta: 'Como solicitar um orçamento?',
    resposta:
      'Pelo WhatsApp, no botão de orçamento desta página — a mensagem já vai com o modelo preenchido. Também é possível falar pelo telefone (11) 91300-6556 ou por e-mail em yank@yank.com.br.',
  },
]

export const faqMaterial: Faq = {
  pergunta: 'Qual material devo escolher: aço inox, PVC ou galvanizado?',
  resposta:
    'Depende do agente químico e do ambiente. O aço inox AISI 304 é o padrão para a maioria das indústrias e o mais durável em ambiente agressivo. O PVC é indicado onde há ácidos que atacam o aço, como em galvanoplastia e casas de química. O aço galvanizado com pintura é a opção de melhor custo para ambientes internos e menos agressivos.',
}

export const faqAcionamentoAutomatico: Faq = {
  pergunta: 'Qual a vantagem do acionamento automático?',
  resposta:
    'No modelo automático a água é liberada assim que a pessoa pisa na plataforma, sem precisar localizar e puxar a alavanca. Em um acidente com os olhos comprometidos, isso elimina a etapa mais difícil do socorro. É a escolha usual em áreas de risco químico elevado.',
}

export const faqTransportavel: Faq = {
  pergunta: 'O equipamento funciona sem rede hidráulica?',
  resposta:
    'Sim. O modelo transportável é autônomo: a água fica armazenada no próprio cilindro em aço inoxidável, pressurizado, o que permite usá-lo em obras, áreas externas e frentes de trabalho onde não há ponto de água. A autonomia depende do volume escolhido e da vazão de uso.',
}

export const faqInstalacao: Faq = {
  pergunta: 'Onde o equipamento deve ser instalado?',
  resposta:
    'Em local desobstruído, no mesmo nível da área de risco e a uma distância percorrível em até 10 segundos. O trajeto não pode ter degraus, portas com trava ou desvios, e o ponto precisa estar sinalizado e com iluminação adequada. A referência é o tempo: a ABNT NBR 16291 não fixa metragem, e a ANSI/ISEA Z358.1 cita cerca de 17 metros apenas como equivalência aproximada.',
}
