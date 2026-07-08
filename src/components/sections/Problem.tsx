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
      icon: <Briefcase className="h-6 w-6 text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: (
        <>
          Foca em receitas, mercados, crescimento e{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            viabilidade comercial
          </span>
          . Frequentemente avança sem entender a{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            complexidade técnica
          </span>{" "}
          e a viabilidade da engenharia.
        </>
      ),
      disconnect: (
        <>
          Falta de alinhamento com a engenharia leva a promessas de{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            produtos inviáveis
          </span>
          .
        </>
      )
    },
    {
      title: "Produto (Product)",
      icon: <Compass className="h-6 w-6 text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: (
        <>
          Foca na{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            experiência de usuário
          </span>
          , no valor do produto e nos caminhos de evolução (UX/Design). Muitas vezes esmagado entre demandas de negócio e{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            restrições técnicas
          </span>
          .
        </>
      ),
      disconnect: (
        <>
          Falta de alinhamento com ambos resulta em features{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            sem impacto real
          </span>{" "}
          ou valor estratégico.
        </>
      )
    },
    {
      title: "Engenharia (Engineering)",
      icon: <Cpu className="h-6 w-6 text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: (
        <>
          Foca em{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            estabilidade, performance
          </span>
          , arquitetura e débito técnico. Frequentemente deixada de fora das{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            decisões estratégicas
          </span>{" "}
          iniciais de design e negócio.
        </>
      ),
      disconnect: (
        <>
          Falta de alinhamento estratégico resulta em{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            retrabalho
          </span>{" "}
          e arquiteturas inadequadas.
        </>
      )
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
              className="relative z-10 flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm group hover:border-cyan-500/80 dark:hover:border-[#00ffff]/80 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 group-hover:border-cyan-500/40 dark:group-hover:border-[#00ffff]/40">
                    {pillar.icon}
                  </div>
                  <Heading level={3} className="text-lg font-semibold m-0 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]">
                    {pillar.title}
                  </Heading>
                </div>
                
                <Paragraph variant="base" className="text-zinc-650 dark:text-zinc-450">
                  {pillar.description}
                </Paragraph>
              </div>

              {/* Disconnect indicator block at the bottom */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300 group-hover:border-cyan-500/20 dark:group-hover:border-[#00ffff]/20">
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
                  Ponto de Falha
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 italic">
                  {pillar.disconnect}
                </p>
              </div>

              {/* Neon Underglow below the card body (GT-R Skyline underglow effect - Pure CMYK Cyan & Subtle) */}
              <div className="absolute -bottom-[1px] left-12 right-12 h-[1px] bg-[#00ffff]/30 rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] group-hover:shadow-[0_8px_20px_6px_rgba(0,255,255,0.35)] transition-all duration-500 pointer-events-none z-0" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Problem;
