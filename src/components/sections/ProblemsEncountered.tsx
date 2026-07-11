"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { 
  LineChart, 
  Unlink, 
  Layers, 
  Puzzle, 
  Search, 
  Cpu, 
  TrendingDown, 
  Users, 
  HardDrive 
} from "lucide-react";

export const ProblemsEncountered = () => {
  const problems = [
    {
      title: "Produtos sem norte estratégico",
      icon: <LineChart className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Produtos que crescem desordenados por demandas avulsas da diretoria ou do comercial, sem uma visão clara de longo prazo."
    },
    {
      title: "UX isolado da Engenharia",
      icon: <Unlink className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Interfaces desenhadas sem considerar a viabilidade de desenvolvimento, resultando em retrabalho constante e frustração mútua."
    },
    {
      title: "Design System inexistente",
      icon: <Layers className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Cada nova funcionalidade é criada do zero absoluta, gerando lentidão crônica nas entregas e inconsistência visual grave no ar."
    },
    {
      title: "Plataformas inconsistentes",
      icon: <Puzzle className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Experiências e comportamentos de interface fragmentados entre portais, que confundem o usuário e elevam o suporte."
    },
    {
      title: "Discovery superficial",
      icon: <Search className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Lançamento sistemático de novas funcionalidades baseadas apenas em palpites, sem validação estruturada com usuários reais."
    },
    {
      title: "IA aplicada apenas por hype",
      icon: <Cpu className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Integração apressada de inteligência artificial ou LLMs para atender ao marketing, sem resolver um gargalo útil de jornada."
    },
    {
      title: "Processos pouco escaláveis",
      icon: <TrendingDown className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Ausência de governança e esteiras claras de design e engenharia, gerando reuniões intermináveis e bloqueios operacionais."
    },
    {
      title: "Times desalinhados",
      icon: <Users className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Dificuldade em fazer Designers, Desenvolvedores e Product Managers compartilharem o mesmo vocabulário e a mesma visão estratégica."
    },
    {
      title: "Código difícil de evoluir",
      icon: <HardDrive className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]" />,
      description: "Débito técnico que impede a evolução fluida do produto, onde qualquer alteração pontual ameaça quebrar a estabilidade."
    }
  ];

  return (
    <section id="problems-encountered" className="py-24 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/5">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            Sintomas Operacionais
          </span>
          <Heading level={2}>
            Problemas que normalmente encontro nas organizações.
          </Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">
            Empresas que perdem velocidade e eficiência operacional geralmente enfrentam estes descompassos diários. Identificar o sintoma é o primeiro passo para reorganizar o ecossistema.
          </Paragraph>
        </div>

        {/* 9 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob) => (
            <Card 
              key={prob.title} 
              className="relative z-10 flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm group hover:border-cyan-500/80 dark:hover:border-[#00ffff]/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 group-hover:border-cyan-500/40 dark:group-hover:border-[#00ffff]/40">
                  {prob.icon}
                </div>
                <Heading level={3} className="text-base sm:text-lg font-medium m-0 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]">
                  {prob.title}
                </Heading>
              </div>
              
              <Paragraph variant="base" className="text-zinc-650 dark:text-zinc-400 leading-relaxed text-sm z-10 relative">
                {prob.description}
              </Paragraph>

              {/* Neon Underglow below the card body (CMYK Cyan & Subtle) */}
              <div className="absolute -bottom-[1px] left-12 right-12 h-[1px] bg-[#00ffff]/30 rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] group-hover:shadow-[0_8px_20px_6px_rgba(0,255,255,0.35)] transition-all duration-500 pointer-events-none z-0" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProblemsEncountered;
