"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { Compass, TrendingUp, Layers, Zap, Brain, Activity } from "lucide-react";

export const WhyHireMe = () => {
  const capabilities = [
    {
      title: "Conectar Produto, Negócio e Engenharia",
      icon: <Compass className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]" />,
      description: (
        <>
          Traduzo objetivos comerciais em{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            arquitetura técnica e experiência de uso
          </span>
          , estabelecendo um vocabulário comum entre as diretorias.
        </>
      ),
    },
    {
      title: "Aumentar a maturidade de UX",
      icon: <TrendingUp className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]" />,
      description: (
        <>
          Estruturo e escalo a{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            cultura de design em organizações tradicionais
          </span>
          , transformando UX de departamento operacional em motor de inovação.
        </>
      ),
    },
    {
      title: "Construir fundações de produto escaláveis",
      icon: <Layers className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]" />,
      description: (
        <>
          Crio{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            Design Systems robustos e bibliotecas de componentes
          </span>{" "}
          reutilizáveis que reduzem o custo de desenvolvimento no Figma e na Engenharia.
        </>
      ),
    },
    {
      title: "Reduzir a fricção entre Design e Desenvolvimento",
      icon: <Zap className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]" />,
      description: (
        <>
          Desenho{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            especificações funcionais e protótipos de alta fidelidade
          </span>{" "}
          integrados que otimizam a entrega técnica e a qualidade final.
        </>
      ),
    },
    {
      title: "Estruturar produtos baseados em IA com responsabilidade",
      icon: <Brain className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]" />,
      description: (
        <>
          Concebo{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            interfaces inteligentes conversacionais
          </span>
          , definindo métricas de usabilidade de IA e fluxos seguros de multiagentes.
        </>
      ),
    },
    {
      title: "Transformar complexidade em execução clara",
      icon: <Activity className="h-5 w-5 text-zinc-950 dark:text-zinc-50 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]" />,
      description: (
        <>
          Decomponho fluxos complexos em{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            jornadas lineares intuitivas
          </span>
          , acelerando o tempo de lançamento do produto (time-to-market).
        </>
      ),
    },
  ];

  return (
    <section id="why-hire-me" className="py-24 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/5">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            Por Que Empresas Me Contratam
          </span>
          <Heading level={2}>
            Capacidades executivas focadas em entrega de valor.
          </Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">
            Não se trata de colecionar softwares ou dominar apenas ferramentas de design. Trata-se de ter a competência técnica de conduzir produtos digitais da concepção ao lançamento técnico.
          </Paragraph>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <Card 
              key={cap.title} 
              className="relative z-10 flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm group hover:border-pink-500/80 dark:hover:border-[#ff00ff]/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 group-hover:border-pink-500/40 dark:group-hover:border-[#ff00ff]/40">
                  {cap.icon}
                </div>
                <Heading level={3} className="text-base sm:text-lg font-medium m-0 transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]">
                  {cap.title}
                </Heading>
              </div>
              
              <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm z-10 relative">
                {cap.description}
              </Paragraph>

              {/* Neon Underglow below the card body (CMYK Magenta & Subtle) */}
              <div className="absolute -bottom-[1px] left-12 right-12 h-[1px] bg-[#ff00ff]/30 rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] group-hover:shadow-[0_8px_20px_6px_rgba(255,0,255,0.35)] transition-all duration-500 pointer-events-none z-0" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyHireMe;
