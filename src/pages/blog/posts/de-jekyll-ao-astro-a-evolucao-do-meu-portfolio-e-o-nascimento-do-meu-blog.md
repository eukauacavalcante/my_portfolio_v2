---
layout: ../../../layouts/blog/PostLayout.astro
title: "De Jekyll ao Astro: a evolução do meu portfólio e o nascimento do meu blog."
description: "As escolhas, os erros e os aprendizados que me trouxeram até aqui, e ao lançamento do meu blog."
author: "Kauã Cavalcante"
publishedOn: "03/07/2026"
updatedOn: "03/08/2026"
readingTime: 15
image:
    url: "blog/post-1/imagem-representativa.jpeg"
    alt: "Um celular com o site do blog aberto. Ao fundo, um monitor com o site do portfólio aberto na tela inicial."
tags: ["portfolio", "blog", "novo"]
---

Depois de algumas semanas reconstruindo meu portfólio com foco em performance, finalmente publiquei a nova versão — e junto com ela nasceu este blog.

Antes de iniciar, quero deixar claro que eu utilizo o travessão (--) desde o Ensino Médio. Este conteúdo não foi gerado por IA generativa. No mínimo, eu a utilizarei somente para correção de informações.

## A Primeira Versão

A primeira versão do portfólio foi utilizando apenas HTML, CSS e um pouco de JavaScript. Eu buscava facilidade para deploy pois não conhecia uma forma fácil e gratuita, optei por usar o Github Pages. Para evitar repetições de componentes -- já pensando em centralização -- eu construí o projeto utilizando a arquitetura de diretórios do Jekyll.

Portanto, eu precisava apenas organizar os componentes de maneira correta, como: 

```
_includes/
├── footer.html
└── header.html
```

É um conceito que tem compatibilidade com o Github Pages. Porém, com o tempo eu fui percebendo a extrema limitação de trabalhar somente com isso: 

- não funcionava localmente, as mudanças eram vistas somente após o deploy;
- interação extremamente limitada com JavaScript puro;
- os motivos acima já eram suficientes para utilizar algo novo.

Em uma conversa com o meu professor, onde eu apresentei a ele o meu currículo (pedindo para ele avaliar se estava OK), ele me recomendou estudar novas tecnologias para complementar minhas skills no front-end: React e algum framework React. Após isso, fiz uma pesquisa e encontrei o Next.js com uma proposta de "foque no desenvolvimento, a complexidade é por nossa parte". Me interessei e fui assistir cursos no Youtube para entender a parte teórica (era meu primeiro contato com TypeScript, antes eu apenas utilizava Django para fullstack), e logo após isso fui direto para prática.

Em primeiro contato, notei a velocidade na qual você consegue desenvolver aplicações no Next.js. App Router, arquivos "mágicos", Tailwind já integrado... Isso tudo me incentivou ainda mais e me viciou o suficiente para eu não pensar duas vezes: reconstruí meu portfólio em Next.js.

## SSR, CSR.. Tudo isso para um portfólio?

Após um tempo aprendendo ainda mais sobre Next.js -- inclusive iniciando um projeto novo, o front-end do **Vortex Project** --, eu entendi que ele poderia ser demais para um portfólio. Muitos conceitos de arquitetura, tudo feito utilizando TypeScript, preocupação demais com a performance... Para um projeto estático como um portfólio, ele já não seria o ideal.

## Do Next.js para Astro

Em certo dia, rolando o feed do Twitter (me recuso a chamar de X), eu vi uma publicação do Chris (sócio da [AbacatePay](https://abacatepay.com)) relatando que estava em trabalho de transição do Next.js para o Astro. Os motivos envolviam versões com bugs que eram descobertos de acordo com o aumento da complexidade do projeto. O Astro seria uma opção para resolver esses problemas.

Após ler essa postagem do Chris, eu anotei o nome do framework Astro para procurar mais informações sobre. Dias depois, pesquisei sobre o Astro e fui direto ler a documentação para saber o que o Astro tinha para oferecer que me faria separar um tempinho do meu dia para aprender sobre. E fiquei surpreso.

De acordo com as informações que anotei em meu caderno, o Astro é um framework "all-in-one" (tudo em um). Há centenas de maneiras de uso: blogs (como esse), e-commerce, landing pages. E além de tudo, o que mais me chamou atenção no Astro foi a sua arquitetura de front-end que visa reduzir a depedência de pacotes de JavaScript e a complexidade em geral para desenvolver algo moderno.

Veja essa lista de características do Astro:
- Content-driven: o melhor para sites ricos em conteúdo;
- Server-first: ele é um Multi Page App (MPA), gerando HTML estático no build time — sem JavaScript no cliente (SSR real também é suportado via adaptadores).
- Rápido por natureza: 0% de JavaScript no client-side por padrão.
- Por último, developer-focused: teoricamente você já tem todas as ferramentas necessárias para construir algo.

Abaixo, mostro um gráfico derivado de uma pesquisa realizada pelo HTTP Archive, que mostra a diferença do Astro em relação a outros frameworks web bastante utilizados. Na pesquisa, são comparados dados de acessibilidade e SEO (Search Engine Optimization).

<div style="display: flex; justify-content: center;">
  <img src="/blog/post-1/origins-with-good-scores.svg" alt="img" />
</div>

Confira mais informações no site [httparchive.org](https://httparchive.org/reports/techreport/tech?client=mobile&tech=Astro,WordPress,Gatsby,Next.js,Nuxt.js&geo=ALL&rank=ALL&page=1).

Há diversas outras características que diferenciam o Astro de outros frameworks. Não vou dar uma aula aqui, confira a documentação completa em [docs.astro.build](https://docs.astro.build).

## Então Astro é o melhor?

Para responder essa pergunta, utilizarei o velho e ainda atual "depende". Muitos conceitos do mundo da tecnologia também podem ser observados na vida real.

Segundo Nietzsche, em A Vontade de Poder:

> Não há fatos, apenas interpretações.

Cada aplicação tem a sua necessidade. Basta você, como engenheiro de software, entender qual seria a melhor opção. Eu quero dizer que: depende do seu projeto, da arquitetura que você prefere, da tecnologia que você quer utilizar, etc. O importante no final é você entregar uma aplicação escalável, seguindo boas práticas de UX/UI e SEO, e além de tudo, otimizada. No final, depende de você, não exclusivamente da tecnologia.

Para reforçar meu argumento, quero deixar um pensamento que até posso dissertar melhor em outra publicação:

A Inteligência Artificial pode construir um sistema do zero, mas todo o conhecimento de performance, segurança, manutenabilidade e escalabilidade, vem de você. A IA entende prompts de momento, já você consegue enxergar o futuro.

## O que terá no Blog?

Aqui, postarei minha rotina de estudo e como desenvolvo minhas aplicações. Avaliando a real necessidade de um blog, cheguei à conclusão que eu aprenderia muito mais explicando conceitos simples e complexos. Afinal, no meio da explicação eu também descubro coisas novas. Como diz o ditado, o sinal definitivo de que alguém realmente conhece um assunto é a capacidade de ensiná-lo.

Para as postagens, planejo utilizar uma linguagem mais natural, sem excesso de formalidade. Não quero dizer que vou me permitir cometer erros de português, apenas que pretendo tratar cada conteúdo como um “diário técnico”, refletindo sobre assuntos que estão em debate no mundo da tecnologia. Além disso, pretendo seguir uma sequência de desenvolvimento fácil de compreender: apresento o tema, explico diferentes contextos e, ao final, proponho uma solução na minha visão (se for o caso).

Estou pensando em realizar postagens semanalmente. A todo momento eu estou descobrindo algo novo e seria interessante compartilhar isso por aqui.

Espero que você, que está lendo esta publicação escrita em uma madrugada, tenha interesse em saber mais sobre quem eu sou e queira ler mais artigos. Lembre-se que a sua existência é algo raro, então mostre-me que estás vivo: vamos nos conectar no LinkedIn: [linkedin.com/in/eukauacavalcante](https://linkedin.com/in/eukauacavalcante).

Até a próxima!
