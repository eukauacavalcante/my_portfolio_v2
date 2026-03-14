const projects = [
    {
        slug: "vortex-project",
        image: "/src/assets/projects/vortex/vortex-banner.png",
        title: "Vortex Project",
        phrase: "Rede social para entusiastas de tecnologia compartilharem projetos e ideias",
        resume: "O Vortex é uma plataforma web colaborativa voltada para desenvolvedores e estudantes de tecnologia. A aplicação foi construída com Django e Django REST Framework no backend e Next.js com TypeScript no frontend, aplicando princípios de arquitetura limpa, separação de responsabilidades e autenticação segura via GitHub OAuth2. O projeto tem como objetivo demonstrar competências full stack, incluindo modelagem de APIs REST, controle de permissões, SSR e boas práticas de organização e escalabilidade.",
        tags: ["Next.js", "Django", "PostgreSQL"],
        date: "2026",
        github: "",
        linkedin: "",
        documentation: "",
        website: "",
        isPrivate: true,
        privateDescription: "O Vortex está em desenvolvimento ativo, com foco em segurança, estabilidade e escalabilidade. Por se tratar de uma plataforma social com autenticação e gestão de usuários, o código é proprietário, assim como qualquer aplicação desse porte. Nosso foco é construir uma base sólida e segura antes de ampliar o acesso.",
        stack: {
            frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
            backend: ["Django", "Django REST Framework", "Python"],
            database: ["PostgreSQL"],
        },
        functionalities: [
          {
            title: "Login seguro através do GitHub OAuth2",
            description: "Autenticação segura via GitHub OAuth2, com gerenciamento de sessão e controle de permissões.",
            icon: "mingcute:lock-line"
          },
          {
            title: "Compartilhe ideias com quem entende você",
            description: "Publicação e interação com projetos e conteúdos técnicos dentro de uma comunidade focada em desenvolvimento.",
            icon: "glyphs:users-bold"
          },
          {
            title: "Segurança em primeiro lugar",
            description: "Backend estruturado com validação de dados, autenticação baseada em token e controle de acesso por usuário.",
            icon: "material-symbols:security"
          },
          {
            title: "Responsividade para todos os dispositivos",
            description: "Acesse o Vortex por onde achar melhor! Seja no seu computador ou celular.",
            icon: "et:mobile"
          }
        ],
    },
    {
        slug: "morpheus-env",
        image: "/src/assets/projects/morpheus-env.png",
        title: "Morpheus Env",
        phrase: "Projeto acadêmico com o objetivo de utilizar práticas de segurança e implementação de ferramentas educacionais.",
        resume: "Morpheus Env é um simulador web que oferece ferramentas educacionais para análise de sistemas computacionais. O projeto foi desenvolvido com fins experimentais e acadêmicos, voltado à pesquisa, aprendizado e demonstração de conceitos.",
        tags: ["Django", "Projeto Acadêmico"],
        date: "2025",
        github: "https://github.com/eukauacavalcante/morpheus_env",
        linkedin: "",
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
            icon: "bitcoin-icons:graph-filled"
          },
          {
            title: "Análise por IA",
            description: "Utilização de IA generativa para interpretar dados do sistema e fornecer insights.",
            icon: "mingcute:robot-line"
          },
          {
            title: "Conversor Numérico",
            description: "Suporte completo para conversões entre binário, hexadecimal, octal e decimal.",
            icon: "mynaui:math-square"
          },
          {
            title: "Operações Lógicas",
            description: "Execute operações AND, OR e XOR para trabalhar com valores booleanos.",
            icon: "tabler:logic-or"
          },
          {
            title: "Autenticação Segura",
            description: "Sistema robusto com validação de email temporário e proteção avançada.",
            icon: "mingcute:lock-line"
          },
          {
            title: "Notificações",
            description: "Notificações por email com autenticação OAuth2 do Google integrada.",
            icon: "streamline:send-email"
          }
        ],
    },
];

export default projects;
