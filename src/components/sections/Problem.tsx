"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { Briefcase, Compass, Cpu } from "lucide-react";

export const Problem = () => {
  const pillars = [
    {
      title: "Negócio (Business)",
      icon: <Briefcase className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />,
      description: "Foca em receitas, mercados, crescimento e viabilidade comercial. Freqüentemente avança sem entender a complexidade técnica e a viabilidade da engenharia.",
      disconnect: "Falta de alinhamento com a engenharia leva a promessas de produtos inviáveis."
    },
    {
      title: "Produto (Product)",
      icon: <Compass className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />,
      description: "Foca na experiência de usuário, no valor do produto e nos caminhos de evolução (UX/Design). Muitas vezes esmagado entre demandas de negócio e restrições técnicas.",
      disconnect: "Falta de alinhamento com ambos resulta em features sem impacto real ou valor estratégico."
    },
    {
      title: "Engenharia (Engineering)",
      icon: <Cpu className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />,
      description: "Foca em estabilidade, performance, arquitetura e débito técnico. Freqüentemente deixada de fora das decisões estratégicas iniciais de design e negócio.",
      disconnect: "Falta de alinhamento estratégico resulta em retrabalho e arquiteturas inadequadas."
    }
  ];

  return (
    <section id="problem" className="py-24 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/10">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            O Desafio Organizacional
          </span>
          <Heading level={2}>
            As empresas raramente falham por falta de talento. Elas falham por desconexão.
          </Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">
            A lentidão no desenvolvimento e a falha de produtos digitais geralmente não vêm da incapacidade dos times, mas sim do isolamento entre Negócio, Produto e Engenharia.
          </Paragraph>
        </div>

        {/* Connected Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connection Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-zinc-200 dark:bg-zinc-900 -translate-y-1/2 z-0 pointer-events-none" />
          
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title} 
              className="relative z-10 flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800">
                    {pillar.icon}
                  </div>
                  <Heading level={3} className="text-lg font-semibold m-0">
                    {pillar.title}
                  </Heading>
                </div>
                
                <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400">
                  {pillar.description}
                </Paragraph>
              </div>

              {/* Disconnect indicator block at the bottom */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
                  Ponto de Falha
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 italic">
                  {pillar.disconnect}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Problem;
