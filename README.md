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
 
| Métrica              | Next.js  | Astro    | Diferença | Melhoria               |
| -------------------- | -------- | -------- | --------- | ---------------------- |
| **Requests**         | 19       | 11       | -8        | **42.1% menos**        |
| **Transferred**      | 304 kB   | 256 kB   | -48 kB    | **15.8% menor**        |
| **Resources**        | 1.0 MB   | 552 kB   | -472 kB   | **46.1% menor**        |
| **Finish**           | 768 ms   | 592 ms   | -176 ms   | **22.9% mais rápido**  |
| **DOMContentLoaded** | 616 ms   | 226 ms   | -390 ms   | **63.3% mais rápido**  |
| **Load**             | 635 ms   | 237 ms   | -398 ms   | **62.7% mais rápido**  |
| **LCP**              | 1.45 s   | 0.30 s   | -1.15 s   | **79.3% mais rápido**  |
