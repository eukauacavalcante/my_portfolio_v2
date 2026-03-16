// TODO: trocar ícones por svg
// icon: `<conteúdo svg>`
// aplica set:html={icon} em [slug].astro para renderizar no template

const projects = [
  {
    slug: "vortex-project",
    images: [
      "/src/assets/projects/vortex/vortex-banner.png",
      "/src/assets/projects/vortex/vortex-home.png",
      "/src/assets/projects/vortex/vortex-login.png"
    ],
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2a6 6 0 0 1 5.996 5.775L18 8h1a2 2 0 0 1 1.995 1.85L21 10v10a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20V10a2 2 0 0 1 1.85-1.995L5 8h1a6 6 0 0 1 6-6m7 8H5v10h14zm-7 2a2 2 0 0 1 1.134 3.647l-.134.085V17a1 1 0 0 1-1.993.117L11 17v-1.268A2 2 0 0 1 12 12m0-8a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4"/></g></svg>`
      },
      {
        title: "Compartilhe ideias com quem entende você",
        description: "Publicação e interação com projetos e conteúdos técnicos dentro de uma comunidade focada em desenvolvimento.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 80 80"><path fill="currentColor" d="M24.967 39.306a6.097 6.097 0 0 1-11.934 0l-.13-.618a6.6 6.6 0 0 1 1.138-5.258l.21-.286a5.89 5.89 0 0 1 9.497 0l.21.286a6.6 6.6 0 0 1 1.139 5.258zM8 56.133C8 57.164 8.836 58 9.867 58h8.727a13.5 13.5 0 0 1 5.305-9.205a19.4 19.4 0 0 0-11.814.646A6.35 6.35 0 0 0 8 55.371zM70.133 58h-8.727a13.5 13.5 0 0 0-5.305-9.205a19.4 19.4 0 0 1 11.814.646A6.35 6.35 0 0 1 72 55.372v.761A1.867 1.867 0 0 1 70.133 58m-15.1-18.693a6.097 6.097 0 0 0 11.934 0l.13-.619a6.6 6.6 0 0 0-1.138-5.258l-.21-.286a5.89 5.89 0 0 0-9.497 0l-.21.286a6.6 6.6 0 0 0-1.139 5.258zM55.8 64H24.2a3.2 3.2 0 0 1-3.2-3.2v-1.207c0-4.57 2.827-8.664 7.1-10.282a33.6 33.6 0 0 1 23.8 0A10.995 10.995 0 0 1 59 59.593V60.8a3.2 3.2 0 0 1-3.2 3.2M35.141 39.078a10.546 10.546 0 0 0 15.176-7.176l.205-.966a11.32 11.32 0 0 0-1.975-9.08l-.33-.446a10.22 10.22 0 0 0-16.434 0l-.33.446a11.32 11.32 0 0 0-1.975 9.08l.205.966a10.55 10.55 0 0 0 5.458 7.176"/></svg>`
      },
      {
        title: "Segurança em primeiro lugar",
        description: "Backend estruturado com validação de dados, autenticação baseada em token e controle de acesso por usuário.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12z"/></svg>`
      },
      {
        title: "Responsividade para todos os dispositivos",
        description: "Acesse o Vortex por onde achar melhor! Seja no seu computador ou celular.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><g fill="currentColor"><path d="M1.5 32h14a.5.5 0 0 0 0-1h-14a.5.5 0 0 1-.5-.5v-29a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v5a.5.5 0 0 0 1 0v-5c0-.827-.673-1.5-1.5-1.5h-21C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5"/><path d="M18 10.5v20c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-20c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5m13 0v20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-20a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5"/><circle cx="12" cy="28" r="1"/><circle cx="25" cy="28" r="1"/></g></svg>`
      }
    ],
  },
  {
    slug: "morpheus-env",
    images: [
      "/src/assets/projects/morpheus/morpheus-home.png",
      "/src/assets/projects/morpheus/morpheus-conversor.png",
      "/src/assets/projects/morpheus/morpheus-moni.png",
    ],
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 23H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1" opacity="0.25"/><path fill="currentColor" d="M14 23h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1"/><path fill="currentColor" d="M22 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1" opacity="0.5"/></svg>`
      },
      {
        title: "Análise por IA",
        description: "Utilização de IA generativa para interpretar dados do sistema e fornecer insights.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18 10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM8 14v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0m6 0v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0m0-10c0 .74-.403 1.383-1 1.73V6h3a4 4 0 0 1 4 4v.05a2.501 2.501 0 0 1 0 4.9V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1.05a2.5 2.5 0 0 1 0-4.9V10a4 4 0 0 1 4-4h3v-.27A2 2 0 1 1 14 4"/></g></svg>`
      },
      {
        title: "Conversor Numérico",
        description: "Suporte completo para conversões entre binário, hexadecimal, octal e decimal.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5h-7L8 19l-3-6H3m11 0l6 6m-6 0l6-6"/></svg>`
      },
      {
        title: "Operações Lógicas",
        description: "Execute operações AND, OR e XOR para trabalhar com valores booleanos.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-6M2 9h7m-7 6h7M8 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14"/></svg>`
      },
      {
        title: "Autenticação Segura",
        description: "Sistema robusto com validação de email temporário e proteção avançada.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2a6 6 0 0 1 5.996 5.775L18 8h1a2 2 0 0 1 1.995 1.85L21 10v10a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20V10a2 2 0 0 1 1.85-1.995L5 8h1a6 6 0 0 1 6-6m7 8H5v10h14zm-7 2a2 2 0 0 1 1.134 3.647l-.134.085V17a1 1 0 0 1-1.993.117L11 17v-1.268A2 2 0 0 1 12 12m0-8a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4"/></g></svg>`
      },
      {
        title: "Notificações",
        description: "Notificações por email com autenticação OAuth2 do Google integrada.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.812 11l2.178 2.17a1.1 1.1 0 0 0 1.05.3a1.12 1.12 0 0 0 .809-.74l3.576-10.72A1.118 1.118 0 0 0 11.987.57L1.267 4.147a1.12 1.12 0 0 0-.74.859a1.1 1.1 0 0 0 .3 1l2.737 2.737l-.09 3.466zM13.106.79L3.564 8.742" stroke-width="1"/></svg>`
      }
    ],
  },
];

export default projects;
