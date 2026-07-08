"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { ArrowRight } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { supabase } from "@/lib/supabase/client";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero = () => {
  useEffect(() => {
    const testSupabaseConnection = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Supabase API Error:", error.message);
        } else {
          console.log("Supabase conectado com sucesso! Conexão ativa.");
        }
      } catch (err) {
        console.error("Erro inesperado ao conectar ao Supabase:", err);
      }
    };
    testSupabaseConnection();
  }, []);

  const handlePrimaryClick = () => {
    analytics.trackCTA("Hero: Explore Approach", "#approach");
    const element = document.getElementById("approach");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkedInClick = () => {
    analytics.trackCTA("Hero: LinkedIn", "https://www.linkedin.com/in/felipe-santander/");
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-zinc-100/50 dark:bg-zinc-900/10 blur-[100px] pointer-events-none z-0" />
      
      {/* Background grid lines at 33% opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.33] pointer-events-none z-0" />
      
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Heading level={1} className="leading-tight sm:leading-none">
            Quando Produto, Negócio e Engenharia deixam de compartilhar a mesma visão, a inovação desacelera.
          </Heading>
          
          <Paragraph variant="lead" className="mt-6 max-w-xl">
            Conecto essas três disciplinas para transformar desafios complexos de negócios em produtos digitais escaláveis através de Estratégia, UX Design, Design Systems e Inteligência Artificial.
          </Paragraph>
          
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Button variant="primary" onClick={handlePrimaryClick} className="gap-2 group">
              Conheça minha abordagem
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            
            <a 
              href="https://www.linkedin.com/in/felipe-santander/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkedInClick}
            >
              <Button variant="secondary" className="gap-2">
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>

        {/* Right Visual Column (Systems Abstract Composition) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full relative z-10">
          <div className="w-full max-w-[480px] h-[350px] sm:h-[450px] lg:h-[480px] bg-zinc-100/[0.01] dark:bg-zinc-900/[0.01] overflow-hidden flex items-center justify-center relative group">
            <Image 
              src="/imagem/hero_alignment_visualization.png"
              alt="Conectar sistemas, pessoas e decisões para transformar complexidade em produtos escaláveis (Estratégia, Design e Impacto)"
              width={480}
              height={480}
              priority
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
            />
            {/* Vignette overlay fading borders to page background (white in light mode / black in dark mode) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,white_75%)] dark:bg-[radial-gradient(circle_at_center,transparent_15%,black_75%)] pointer-events-none transition-colors duration-300" />
            
            {/* High-visibility active branding label - Larger area & font */}
            <div className="absolute bottom-8 bg-black/95 dark:bg-zinc-950/95 backdrop-blur-md px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl border border-zinc-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-zinc-100 font-mono transition-all duration-300 group-hover:scale-105 hover:border-zinc-500">
              Estratégia, Design e Impacto.
            </div>
          </div>

          {/* Premium Reflection Below */}
          <div className="w-full max-w-[480px] h-[100px] sm:h-[120px] overflow-hidden pointer-events-none select-none relative opacity-20 dark:opacity-15 transform scale-y-[-1] origin-top bg-zinc-100/[0.01] dark:bg-zinc-900/[0.01]">
            <Image 
              src="/imagem/hero_alignment_visualization.png"
              alt=""
              width={480}
              height={480}
              className="w-full h-[350px] sm:h-[450px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/85 dark:via-black/85 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,white_75%)] dark:bg-[radial-gradient(circle_at_center,transparent_15%,black_75%)]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
