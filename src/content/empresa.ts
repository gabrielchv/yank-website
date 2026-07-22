/**
 * Dados institucionais — fonte única para header, rodapé, página de contato,
 * JSON-LD (Organization + LocalBusiness) e links de WhatsApp.
 *
 * NAP (nome, endereço, telefone) precisa ser byte a byte igual em todo lugar
 * onde aparecer, inclusive no Google Business Profile: divergência de NAP é um
 * dos sinais que mais atrapalha SEO local.
 */

export const SITE_URL = 'https://yank.com.br'

export const empresa = {
  nome: 'Yank EPC',
  nomeLegal: 'Yank EPC — Chuveiros e Lava-Olhos de Emergência',
  nomeAnterior: 'Yank Metalúrgica Ltda',
  descricaoCurta:
    'Fabricante de chuveiros e lava-olhos de emergência desde 1995, com equipamentos conforme a ABNT NBR 16291.',
  /**
   * Ano declarado pela empresa em `source-files/catalogo.md` e confirmado com
   * ela. O CNPJ 66.900.820/0001-48 registra abertura em 18/09/1991, sob a
   * antecessora Jankowiski Metalúrgica de Precisão — 1995 é o marco da
   * fabricação de chuveiros e lava-olhos, que é o que o site comunica.
   */
  fundadaEm: 1995,
  fundacaoTexto: 'desde 1995',

  /**
   * Endereço operacional, confirmado com a empresa e usado em todo o site,
   * no rodapé e no JSON-LD.
   *
   * Nota para quem cuidar de SEO local: o CNPJ 66.900.820/0001-48 ainda está
   * registrado na Rua Cidade de São Sebastião, 35 — Jardim de Lucca. Vale
   * alinhar o cadastro e o Google Business Profile a este endereço, porque NAP
   * divergente entre as fontes é um dos sinais que mais atrapalham busca local.
   */
  endereco: {
    logradouro: 'Rua Adelino Gasparine, 251',
    bairro: 'Jardim Verona',
    cidade: 'Itatiba',
    estado: 'SP',
    estadoNome: 'São Paulo',
    cep: '13253-533',
    pais: 'BR',
  },

  telefone: {
    /** formato E.164, para links tel: e schema */
    e164: '+5511913006556',
    /** como é exibido no site */
    exibicao: '(11) 91300-6556',
  },

  email: 'yank@yank.com.br',

  whatsapp: {
    numero: '5511913006556',
    /** mensagem padrão quando não há produto no contexto */
    mensagemPadrao:
      'Olá! Gostaria de mais informações sobre os produtos da Yank EPC.',
  },

  /** Corrige a auditoria: o mailto antigo trazia "iformações" */
  mailtoAssunto: 'Contato via site',
  mailtoCorpo: 'Gostaria de mais informações sobre os produtos da Yank EPC.',

  horario: {
    dias: 'Segunda a sexta-feira',
    abre: '07:30',
    fecha: '17:30',
  },

  /**
   * Vão para sameAs no JSON-LD. A auditoria (A4) registra que os perfis
   * existiam no rodapé mas nunca foram declarados no schema, então o Google
   * não associava os perfis à empresa.
   */
  redes: {
    instagram: 'https://www.instagram.com/YANKEPC/',
    facebook: 'https://www.facebook.com/profile.php?id=61570122296368',
  },

  /**
   * ⚠️ Lista deliberadamente vazia.
   *
   * O site anterior anunciava "sistema de qualidade certificado pela SGS /
   * ISO 9001" no presente. O certificado localizado é o SGS ICS **BR12/7085**,
   * emitido para Yank Metalúrgica Ltda contra a **ISO 9001:2008**, válido de
   * 28/07/2012 a **27/07/2015**. Não foi encontrada renovação, e a própria
   * ISO 9001:2008 foi substituída pela edição 2015.
   *
   * Anunciar certificação vencida é risco jurídico (CDC/CONAR), não só de SEO.
   * Para republicar, basta preencher esta lista com o certificado vigente —
   * o rodapé volta a exibi-la sozinho.
   */
  certificacoes: [] as readonly string[],

  missao:
    'Desenvolver e fornecer soluções inovadoras em chuveiros e lava-olhos de emergência, garantindo qualidade, durabilidade e segurança, protegendo vidas no ambiente industrial.',
  visao:
    'Ser referência em segurança industrial, oferecendo produtos certificados e inovadores, atendendo normas rigorosas e garantindo máxima eficiência em emergências.',
  valores:
    'Cremos em Deus, Ética, Respeito, Comprometimento e Simplicidade. Atuamos com transparência, excelência e responsabilidade, priorizando sempre a segurança das pessoas.',
} as const

export const enderecoLinha = `${empresa.endereco.logradouro} — ${empresa.endereco.bairro}, ${empresa.endereco.cidade}/${empresa.endereco.estado}, CEP ${empresa.endereco.cep}`

/** Link de WhatsApp com mensagem contextual ao produto que a pessoa está vendo. */
export function linkWhatsApp(contexto?: string) {
  const texto = contexto
    ? `Olá! Gostaria de solicitar um orçamento do modelo ${contexto} (Yank EPC).`
    : empresa.whatsapp.mensagemPadrao
  return `https://wa.me/${empresa.whatsapp.numero}?text=${encodeURIComponent(texto)}`
}

export const linkTelefone = `tel:${empresa.telefone.e164}`

export const linkEmail = `mailto:${empresa.email}?subject=${encodeURIComponent(
  empresa.mailtoAssunto,
)}&body=${encodeURIComponent(empresa.mailtoCorpo)}`
