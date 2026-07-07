"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { TrendingUp, Layers, Code, Brain } from "lucide-react";

export const Approach = () => {
  const pillars = [
    {
      title: "Strategy",
      icon: <TrendingUp className="h-5 w-5 text-zinc-950 dark:text-zinc-50" />,
      description: "Conecto os objetivos de negócios do cliente diretamente ao roadmap de produto, eliminando desperdício de desenvolvimento. Minha abordagem garante que cada funcionalidade construída atenda a um indicador de performance mensurável. Traduzo visão executiva em prioridades claras de produto.",
    },
    {
      title: "Design",
      icon: <Layers className="h-5 w-5 text-zinc-950 dark:text-zinc-50" />,
      description: "Crio sistemas de design (Design Systems) e arquiteturas de informação robustas que garantem consistência e escalabilidade. O foco está na clareza da interface, reduzindo fricções cognitivas para o usuário final. Design para mim não é decoração; é como o sistema se comporta sob estresse.",
    },
    {
      title: "Technology",
      icon: <Code className="h-5 w-5 text-zinc-950 dark:text-zinc-50" />,
      description: "Trabalho lado a lado com a engenharia garantindo que a arquitetura do produto seja modular e limpa desde o primeiro dia. Entendo as restrições técnicas para propor soluções realistas que diminuem o débito técnico acumulado. Facilitador da comunicação direta entre design e desenvolvimento.",
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-5 w-5 text-zinc-950 dark:text-zinc-50" />,
      description: "Integro inteligência artificial e automação de maneira prática e responsável, focando na geração de valor real ao usuário. Ajudo organizações a desenhar fluxos de trabalho inteligentes que combinam agentes de IA e interfaces intuitivas. Evito modismos focando estritamente em problemas reais.",
    },
  ];

  return (
    <section id="approach" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            Minha Metodologia
          </span>
          <Heading level={2}>
            Integração como motor de velocidade e maturidade.
          </Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">
            Atuo na intersecção entre negócios, design e engenharia, reduzindo o ruído de comunicação e garantindo que o produto final seja idêntico à estratégia concebida.
          </Paragraph>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Card 
              key={pillar.title} 
              className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 border border-zinc-200/40 dark:border-zinc-800">
                  {pillar.icon}
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-medium m-0">
                  {pillar.title}
                </Heading>
              </div>
              
              <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Approach;
