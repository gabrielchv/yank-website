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
    'Fabricante de chuveiros e lava-olhos de emergência há mais de 30 anos, com equipamentos conforme a ABNT NBR 16291.',
  fundacaoTexto: 'mais de 30 anos',

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
    exibicao: '(11) 9.1300-6556',
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

  certificacoes: ['Sistema de qualidade certificado pela SGS', 'ISO 9001'],

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
