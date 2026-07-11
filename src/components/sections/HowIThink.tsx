"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { Search, Target, Code, Brain } from "lucide-react";

export const HowIThink = () => {
  const pillars = [
    {
      title: "Pesquisa quanti-quali aplicada",
      icon: <Search className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]" />,
      description: (
        <>
          Redução de incerteza operacional por meio de{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            pesquisas de amostragem, entrevistas estruturadas
          </span>{" "}
          e testes de usabilidade com usuários finais e conselhos consultivos de especialistas.
        </>
      ),
    },
    {
      title: "Concepção de fluxos e viabilidade",
      icon: <Target className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]" />,
      description: (
        <>
          Mapeamento detalhado de jornadas complexas,{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            fluxogramas funcionais e protótipos de alta fidelidade
          </span>{" "}
          antes da escrita do código, eliminando ambiguidades estratégicas iniciais.
        </>
      ),
    },
    {
      title: "Integração técnica e Handoff",
      icon: <Code className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]" />,
      description: (
        <>
          Alinhamento simbiótico diário com engenharia, definindo{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            limitações de banco de dados, APIs e arquitetura
          </span>{" "}
          de componentes reutilizáveis para mitigar retrabalho de código.
        </>
      ),
    },
    {
      title: "UX aplicada a IA & Data Systems",
      icon: <Brain className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]" />,
      description: (
        <>
          Modelagem de interfaces inteligentes tratando{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            problemas de latência, tolerância a falhas
          </span>{" "}
          e feedback de status em tempo real em jornadas de agentes conversacionais e LLMs.
        </>
      ),
    },
  ];

  return (
    <section id="how-i-think" className="py-24 border-b border-zinc-100 dark:border-zinc-900">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            Estratégia e Execução
          </span>
          <Heading level={2}>
            Como resolvo problemas.
          </Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">
            A evolução de um produto digital começa na clareza do método de trabalho. Sigo processos estruturados que reduzem o desperdício de esforço técnico e alinham a equipe aos objetivos do negócio.
          </Paragraph>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Card 
              key={pillar.title} 
              className="relative z-10 flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm group hover:border-yellow-500/80 dark:hover:border-[#ffff00]/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 group-hover:border-yellow-500/40 dark:group-hover:border-[#ffff00]/40">
                  {pillar.icon}
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-medium m-0 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]">
                  {pillar.title}
                </Heading>
              </div>
              
              <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed z-10 relative">
                {pillar.description}
              </Paragraph>

              {/* Neon Underglow below the card body (CMYK Yellow & Subtle) */}
              <div className="absolute -bottom-[1px] left-12 right-12 h-[1px] bg-[#ffff00]/30 rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] group-hover:shadow-[0_8px_20px_6px_rgba(255,255,0,0.35)] transition-all duration-500 pointer-events-none z-0" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowIThink;
