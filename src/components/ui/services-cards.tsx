"use client";
import { HoverEffect } from "./card-hover-effect";

const services = [
  {
    title: "Desenvolvedor Frontend",
    description:
      "Construo interfaces rápidas e escaláveis usando React e Next.js, com performance, acessibilidade e UX integradas desde o início. Arquitetura limpa, código de fácil manutenção e interfaces que parecem intencionais.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V88H40ZM216,200H40V104H216v96Zm-152-56a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H72A8,8,0,0,1,64,144Zm0,32a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H72A8,8,0,0,1,64,176ZM192,68a12,12,0,1,1-12-12A12,12,0,0,1,192,68Zm-32,0a12,12,0,1,1-12-12A12,12,0,0,1,160,68Z"/>
      </svg>
    ),
  },
  {
    title: "Desenvolvedor Backend",
    description:
      "Desenvolvo e dou suporte à lógica de backend, APIs e fluxo de dados para aplicações web modernas. De autenticação e CRUD a integrações com serviços de terceiros — foco no essencial, sem overengineering.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"/>
      </svg>
    ),
  },
  {
    title: "Desenvolvedor Full Stack",
    description:
      "Combino experiência em frontend e backend para criar soluções completas. Da concepção ao deploy, gerencio todo o ciclo de desenvolvimento com foco em escalabilidade e manutenibilidade.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"/>
      </svg>
    ),
  },
];

export default function ServicesCards() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <HoverEffect
        items={services.map((s) => ({
          title: s.title,
          description: s.description,
          icon: s.icon,
        }))}
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
      />
    </div>
  );
}
