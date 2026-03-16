<div align="center">

# Portfólio Pessoal

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
![Astro](https://img.shields.io/badge/Astro-v5.18.0-white?logo=astro)
![React](https://img.shields.io/badge/React-v19-61DAFB?logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)

[kauacavalcante.vercel.app](https://kauacavalcante.vercel.app)

Meu portfólio pessoal moderno e responsivo que apresenta minhas habilidades como desenvolvedor full stack, projetos e stack tecnológica de forma intuitiva e acessível.

> **v2:** Esta é a segunda versão do portfólio, reconstruída com Astro. Confira a primeira versão em Next.js: [portfólio_v1](https://github.com/eukauacavalcante/my_portfolio).

</div>

---

## Visão Geral

Buscando mais simplicidade e performance para algo de conteúdo estático, o portfólio foi reconstruído com Astro, que entrega HTML puro por padrão, hidratando JavaScript apenas onde necessário. Além do portfólio em si, o projeto também integra um blog pessoal.

---

## Stack Tecnológica

### Framework Principal
- **[Astro 5.18.0](https://astro.build)**: framework web otimizado para sites orientados a conteúdo, com suporte a ilhas de componentes interativos.

### UI e Estilização
- **[React 19](https://react.dev)**: biblioteca para construção de componentes interativos via integração `@astrojs/react`
- **[Tailwind CSS v4](https://tailwindcss.com)**: framework utility-first integrado via `@tailwindcss/vite`, com plugin de tipografia

### Utilitários
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)**: composição e mesclagem segura de classes CSS
- **[embla-carousel](https://www.embla-carousel.com/)**: biblioteca para carrossel de imagens responsivo

---

## Comparação de Performance

Métricas coletadas via DevTools (Network tab) comparando a v1 em Next.js com a v2 em Astro:

| Métrica              | Next.js | Astro  | Diferença | Melhoria               |
| -------------------- | ------- | ------ | --------- | ---------------------- |
| **Resources**        | 7.5 MB  | 3.6 MB | -3.9 MB   | **52% menor**          |
| **Finish**           | 1.02 s  | 0.33 s | -0.69 s   | **67.6% mais rápido**  |
| **DOMContentLoaded** | 506 ms  | 241 ms | -265 ms   | **52.4% mais rápido**  |
| **Load**             | 829 ms  | 245 ms | -584 ms   | **70.4% mais rápido**  |
| **LCP**              | 2.58 s  | 0.26 s | -2.32 s   | **89.9% mais rápido**  |

