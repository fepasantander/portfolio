"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { analytics } from "@/lib/analytics";

export const Hero = () => {
  const handlePrimaryClick = () => {
    analytics.trackCTA("Hero: Explore Cases", "#areas");
    document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkedInClick = () => {
    analytics.trackCTA("Hero: LinkedIn", "https://www.linkedin.com/in/felipe-santander/");
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute left-1/4 top-1/4 z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100/50 blur-[100px] dark:bg-zinc-900/10" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.33]" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-start text-left lg:col-span-7">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Felipe Santander</p>
          <Heading level={1} className="max-w-4xl leading-tight sm:leading-none">Complexidade transformada em estratégia, design e impacto.</Heading>
          <Paragraph variant="lead" className="mt-6 max-w-xl">Eu conecto usuários, negócio e tecnologia para transformar problemas complexos em produtos digitais melhores.</Paragraph>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary" onClick={handlePrimaryClick} className="group gap-2">
              Conheça as áreas
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" />
            </Button>
            <a href="https://www.linkedin.com/in/felipe-santander/" target="_blank" rel="noopener noreferrer" onClick={handleLinkedInClick} className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:focus-visible:ring-offset-black">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center lg:col-span-5 lg:items-end">
          <div className="group relative flex h-[350px] w-full max-w-[480px] items-center justify-center overflow-hidden sm:h-[450px] lg:h-[480px]">
            <Image src="/imagem/hero_alignment_visualization.png" alt="Conexão entre sistemas, pessoas e decisões" width={480} height={480} priority className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,white_75%)] dark:bg-[radial-gradient(circle_at_center,transparent_15%,black_75%)]" />
            <p className="absolute bottom-8 rounded-xl border border-zinc-800/80 bg-black/95 px-8 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-100 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">Estratégia, Design e Impacto</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
