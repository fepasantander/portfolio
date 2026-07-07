"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";

export const About = () => {
  return (
    <section id="about" className="py-24 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-950/5">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Label */}
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            Filosofia Profissional
          </span>
          <Heading level={2} className="m-0">
            Como eu vejo o desenvolvimento de produtos.
          </Heading>
        </div>

        {/* Right Column Text (First Person) */}
        <div className="lg:col-span-8 space-y-6">
          <Paragraph variant="lead">
            Não vejo meu papel apenas como o criador de telas elegantes. Minha responsabilidade é alinhar a visão comercial à engenharia, garantindo que o produto resolva problemas reais sem acumular débito técnico.
          </Paragraph>

          <Paragraph variant="base">
            Ao longo de anos trabalhando em produtos complexos, percebi que a falta de maturidade em UX não decorre da falta de talento individual, mas de falhas de comunicação organizacional. Quando designers não entendem de negócios e desenvolvedores são excluídos da concepção, o produto sofre.
          </Paragraph>

          <Paragraph variant="base">
            Minha atuação consiste em construir essa ponte de comunicação. Utilizo sistemas de design estruturados para estabelecer um vocabulário comum, prototipagem ágil para validar ideias com dados reais, e um entendimento técnico aprofundado para colaborar diretamente com engenheiros.
          </Paragraph>
          
          <Paragraph variant="base" className="font-serif italic border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 py-1 text-zinc-700 dark:text-zinc-300">
            &ldquo;O sucesso de um produto digital não é medido pela beleza da sua interface nas apresentações executivas. É medido pelo valor prático que ele gera aos usuários e pela facilidade com que o código pode se adaptar às mudanças de mercado.&rdquo;
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default About;
