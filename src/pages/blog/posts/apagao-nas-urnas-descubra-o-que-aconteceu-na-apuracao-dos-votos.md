---
layout: ../../../layouts/blog/PostLayout.astro
title: "Apagão nas Urnas? Descubra o que aconteceu na apuração dos votos"
description: "Entenda como funciona o processo de apuração dos votos e o que pode ter causado o apagão nas urnas eletrônicas durante as eleições."
slug: "apagao-nas-urnas-descubra-o-que-aconteceu-na-apuracao-dos-votos"
author: "Kauã Cavalcante"
publishedOn: "10/10/2026"
readingTime: 10
image:
  banner: "blog/post-4/apagao-nas-urnas.webp"
  alt: ""
tags: ["brasil", "eleicoes"]
---

Durante a apuração dos votos no primeiro turno das eleições brasileiras, o site e o aplicativo do Tribunal Superior Eleitoral (TSE) ficaram mais de uma hora sem atualizar os dados. A exibição do resultado ficou simplesmente travada em 64% e, logo após, saltou de maneira brusca para mais de 80%. Muitos ficaram sem entender, e logo surgiram boatos de fraude nas urnas eletrônicas. Uma suposta intervenção estrangeira? Afinal, o que aconteceu nas eleições brasileiras?

No último domingo (4), ocorreu o primeiro turno das eleições nacionais. Milhares de pessoas foram depositar seu voto de confiança em seus candidatos e esperavam, como de costume, o rápido resultado calculado e exibido quase em tempo real graças à nossa tecnologia, que é referência mundial. Nos Estados Unidos, a apuração dos votos leva dias ou, até mesmo, semanas! De acordo com a Secretaria de Estado da Califórnia, nas eleições de 2024, houve uma espera de 38 dias para calcular os votos de 23 milhões de eleitores <a href="#nota1" style="font-size: 9pt;">[1]</a>. No Brasil? Apenas 4 horas para 119,3 milhões <a href="#nota2" style="font-size: 9pt;">[2]</a>, recebendo elogios até do presidente estadunidense Donald Trump pela eficiência e confiança <a href="#nota3" style="font-size: 9pt;">[3]</a>. Levaríamos um artigo inteiro apenas dissertando sobre como a urna eletrônica é construída e sobre sua segurança comprovada. Mas, o que aconteceu com essa tecnologia tão cobiçada justo em uma eleição tão fervorosa?

A urna não tem acesso à internet global. Segundo o detalhamento oficial do próprio TSE, os votos são gravados de forma criptografada em uma mídia física (uma espécie de pendrive superseguro) <a href="#nota4" style="font-size: 9pt;">[4]</a>. Essa mídia é então escoltada até um local autorizado e inserida em uma rede interna privada (VPN) exclusiva da Justiça Eleitoral. Isso já responde parcialmente à nossa maior dúvida: não, os milhões de acessos do público para saber o resultado não passam pela mesma camada de rede que recebe os votos! Pense nisso como um grande restaurante. A apuração dos votos acontece na cozinha (um ambiente fechado, seguro e focado apenas em preparar os pratos). Já o site e o app do TSE são o salão de clientes. A cozinha nunca parou de trabalhar e de enviar os pratos; o que aconteceu foi que o salão lotou subitamente com milhões de clientes gritando ao mesmo tempo para ver o cardápio, sobrecarregando os garçons. O fluxo da cozinha (apuração) seguiu intacto.

Com isso, é correto afirmar que nunca houve um “apagão” na apuração, o sistema esteve recebendo atualizações a cada segundo. No próprio app do TSE, era possível notar isso. Na página inicial, que mostrava o resultado calculado para cada candidato, houve o travamento em 64% das urnas apuradas. Porém, se você navegasse para a aba de “Resumo”, o sistema já exibia 80%. Outros sites que também mostravam a apuração continuavam sendo alimentados pelos dados públicos do TSE. Então, o que ocorreu de fato?

A lentidão estava nas plataformas públicas do próprio Tribunal. Com milhões de acessos simultâneos, é necessária uma infraestrutura pesada de nuvem e processamento de dados. Esse é um desafio recorrente para sites governamentais. Um grande exemplo é o resultado do Enem: milhões de estudantes acessam o SISU freneticamente para matar a ansiedade, gerando lentidão por horas, sendo possível ver o resultado, muitas vezes, somente no dia seguinte.

Resumidamente, o problema não estava na apuração dos votos, até porque a camada onde isso ocorre não é pública (justamente por questões de segurança do sistema). O travamento estava na exibição desses dados, especificamente nas plataformas digitais do TSE. Outros sites estavam recebendo e calculando os votos quase em tempo real. É fundamental separar as coisas: a lentidão em um site por milhões de acessos é um problema de infraestrutura de internet, não uma falha de segurança eleitoral. O “apagão” foi apenas na vitrine. Nos bastidores, a arquitetura de segurança continuou contando voto a voto, provando por que o sistema brasileiro segue sendo um dos mais rápidos e confiáveis do mundo.

<div style="border-top: 1px solid rgba(84, 82, 82);"></div>

### Fontes
<p id="nota1">[1] <a href="https://www.sos.ca.gov/elections/upcoming-elections/vote-counting-process" target="_blank">California Secretary of State - Vote Counting Process</a></p>
<p id="nota2">[2] <a href="https://g1.globo.com/politica/eleicoes/2026/noticia/2026/10/05/eleicao-presidencial-votos-validos-comparacao-historica.ghtml" target="_blank">G1 - Eleição presidencial em 2026 registra 119,3 milhões de votos válidos</a></p>
<p id="nota3">[3] <a href="https://www.cnnbrasil.com.br/internacional/trump-eleicoes-brasil-india-confunde/" target="_blank">CNN Brasil - Trump elogia rapidez da apuração nas eleições do Brasil em rede social</a></p>
<p id="nota4">[4] <a href="https://www12.senado.leg.br/noticias/materias/2026/09/16/urna-eletronica-veja-como-funciona-e-como-o-voto-e-protegido" target="_blank">Senado Federal - Urna eletrônica: veja como funciona e como o voto é protegido</a></p>
