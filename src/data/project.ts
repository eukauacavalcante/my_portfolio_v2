const projects = [
  {
    slug: "acesso360",
    logo: "projects/acesso360/acesso360-logo-square-dark.webp",
    images: [
      "/projects/acesso360/acesso360-banner-2-dark.webp",
      "/projects/acesso360/anima-lab-1.webp",
      "/projects/acesso360/anima-lab-2.webp"
    ],
    title: "Acesso360",
    phrase: "Um sistema de controle de acesso físico para campi universitários.",
    resume: "O Acesso360 consiste em um sistema de controle de acesso físico baseado em uma arquitetura Multi-Tenant em nível de banco de dados, projetado para isolar os dados de diferentes campus mantendo uma única API centralizada. A solução atua como intermediária entre os dispositivos de catraca e o banco de dados central, processando credenciais em tempo real (biometria digital e Registro Acadêmico) e retornando a decisão de liberar ou bloquear o acesso.\n\nComo líder da equipe e arquiteto do sistema, atuei diretamente na governança do projeto e em parceria estratégica com a gestão da Faculdade Internacional da Paraíba e a rede de inovação tecnológica Ânima HUB para alinhar os requisitos operacionais e de segurança às regras de negócio da instituição. Além de liderar o time, planejei toda a infraestrutura técnica, modelagem de dados multi-tenant, fluxos de integração de hardware e o desenvolvimento core da API.",
    tags: ["FastAPI", "Projeto Acadêmico"],
    date: "2026",
    github: "",
    linkedin: "",
    documentation: "",
    website: "",
    isPrivate: true,
    privateDescription: "O sistema encontra-se atualmente em sua fase final de testes e validações práticas conduzidas pela nossa equipe de engenharia, acompanhando a instalação e calibração dos novos sensores diretamente nas catracas físicas do campus.",
    stack: {
        backend: ["FastAPI", "Python"],
        ops: ["Docker"],
        database: ["PostgreSQL"],
    },
    functionalities: [
      {
        title: "Identificação Flexível na Catraca",
        description: "O sistema permite a liberação do acesso utilizando tanto a leitura da biometria digital quanto a digitação das credenciais diretamente no teclado do dispositivo.",
      },
      {
        title: "Proteção da Privacidade (LGPD)",
        description: "As informações pessoais e biométricas são protegidas por criptografia e o dispositivo exibe apenas o resultado de liberação para garantir o sigilo dos dados.",
      },
      {
        title: "Passagem Rápida e Sem Travamentos",
        description: "O software responde em milissegundos e possui alta estabilidade para garantir que o fluxo de pessoas nas catracas nunca seja interrompido.",
      },
      {
        title: "Acesso Descomplicado para Visitantes",
        description: "O sistema oferece um fluxo para cadastros temporários que liberam a entrada de convidados e prestadores de serviço com um prazo de validade específico.",
      }
    ],
  },
  {
    slug: "morpheus-env",
    logo: "projects/morpheus-env/morpheus-env-logo.webp",
    images: [
      "/projects/morpheus-env/morpheus-home.webp",
      "/projects/morpheus-env/morpheus-conversor.webp",
      "/projects/morpheus-env/morpheus-moni.webp",
    ],
    title: "Morpheus Env",
    phrase: "Projeto acadêmico com o objetivo de utilizar práticas de segurança e implementação de ferramentas educacionais.",
    resume: "Morpheus Env é um simulador web que oferece ferramentas educacionais para análise de sistemas computacionais. O projeto foi desenvolvido com fins experimentais e acadêmicos, voltado à pesquisa, aprendizado e demonstração de conceitos.",
    tags: ["Django", "Projeto Acadêmico"],
    date: "2025",
    github: "https://github.com/eukauacavalcante/morpheus_env",
    linkedin: "https://www.linkedin.com/posts/eukauacavalcante_morpheus-env-activity-7398835065323036672-TlVp",
    documentation: "https://eukauacavalcante.github.io/morpheus_env/",
    website: "",
    isPrivate: false,
    stack: {
        frontend: ["Django Templates", "JavaScript", "Tailwind"],
        backend: ["Django", "Django REST Framework", "Python", "Groq AI"],
        database: ["SQLite"],
    },
    functionalities: [
      {
        title: "Monitoramento",
        description: "Análise em tempo real de CPU, RAM e Disco com visualização intuitiva.",
      },
      {
        title: "Análise por IA",
        description: "Utilização de IA generativa para interpretar dados do sistema e fornecer insights.",
      },
      {
        title: "Conversor Numérico",
        description: "Suporte completo para conversões entre binário, hexadecimal, octal e decimal.",
      },
      {
        title: "Operações Lógicas",
        description: "Execute operações AND, OR e XOR para trabalhar com valores booleanos.",
      },
      {
        title: "Autenticação Segura",
        description: "Sistema robusto com validação de email temporário e proteção avançada.",
      },
      {
        title: "Notificações",
        description: "Notificações por email com autenticação OAuth2 do Google integrada.",
      }
    ],
  },
];

export default projects;
