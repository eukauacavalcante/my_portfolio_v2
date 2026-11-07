const projects = [
  {
    slug: "mecanos",
    logo: "projects/mecanos/mecanos-logo.webp",
    images: [
      "/projects/mecanos/mecanos-banner.webp",
    ],
    title: "MecanOS",
    phrase: "Plataforma SaaS multi-tenant para gestão de oficinas mecânicas, com isolamento de dados no banco, cobrança por assinatura e comunicação automática com o cliente.",
    resume: "MecanOS é um sistema de gestão para oficinas mecânicas que centraliza a operação do negócio em um só lugar: ordens de serviço, agendamentos, cadastro de clientes e veículos, controle de estoque de peças, fluxo de caixa e notificações automáticas por e-mail. O projeto é um produto SaaS em modelo de assinatura, sendo cada oficina um tenant isolado. A arquitetura é dividida em quatro repositórios independentes: uma API Django, a aplicação web em Next.js, a landing page em Astro e um gateway Nginx que termina o TLS e roteia os domínios. O diferencial técnico está no isolamento multitenant: além do filtro por tenant na camada Python, o próprio PostgreSQL aplica Row-Level Security, de forma que uma falha de código não exponha dados de outra oficina. O projeto está em fase final de testes, com previsão de lançamento público em 2027.",
    tags: ["Django", "Next.js", "Multi-tenant", "SaaS", "PostgreSQL"],
    date: "2026",
    github: "",
    linkedin: "",
    documentation: "",
    website: "https://mecanos.com.br",
    isPrivate: true,
    privateDescription: "O código-fonte deste projeto é mantido em repositórios privados por se tratar de um produto SaaS comercial com modelo de negócios ativo. Para garantir a segurança dos dados e o isolamento entre oficinas, toda a regra de negócio multi-tenant e as políticas de Row-Level Security (RLS) no PostgreSQL foram implementadas sob uma arquitetura proprietária.",
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Astro", "Recharts"],
      backend: ["Django", "Django REST Framework", "Python", "Celery"],
      devops: ["Docker", "Nginx"],
      database: ["PostgreSQL", "Redis"],
    },
    functionalities: [
      {
        title: "Ordens de Serviço",
        description: "Ciclo completo do atendimento, do agendamento à retirada do veículo, com status visível, peças e mão de obra separadas e PDF do orçamento e do comprovante.",
      },
      {
        title: "Controle de Estoque",
        description: "Cadastro de peças com SKU, custo e preço de venda, movimentação de entrada, saída e ajuste, alerta de estoque mínimo e baixa automática ao incluir a peça na OS.",
      },
      {
        title: "Agendamentos",
        description: "Calendário de revisões e serviços com confirmação, conclusão, cancelamento e não comparecimento, podendo originar uma ordem de serviço.",
      },
      {
        title: "Financeiro e Fluxo de Caixa",
        description: "Pagamentos por OS em dinheiro, cartão, Pix ou transferência, contas a receber com aging, fluxo de caixa e relatórios em PDF.",
      },
    ],
  },
  {
    slug: "acesso360",
    logo: "projects/acesso360/access360-logo.webp",
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
        devops: ["Docker"],
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
  }
];

export default projects;
