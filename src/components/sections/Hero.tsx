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
      
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Heading level={1} className="leading-tight sm:leading-none">
            Quando Produto, Negócio e Engenharia deixam de compartilhar a mesma visão, a inovação desacelera.
          </Heading>
          
          <Paragraph variant="lead" className="mt-6 max-w-xl">
            Transformo desafios complexos de negócios em produtos digitais escaláveis por meio de Estratégia, UX Design, Design Systems e Inteligência Artificial.
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
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full h-[350px] sm:h-[450px] lg:h-[480px] relative z-10">
          <div className="w-full max-w-[480px] h-full border border-zinc-200/50 dark:border-zinc-900 rounded-2xl bg-zinc-50/50 dark:bg-zinc-950/20 backdrop-blur-3xl overflow-hidden flex items-center justify-center relative group">
            <Image 
              src="/imagem/hero_alignment_visualization.png"
              alt="Conectar sistemas, pessoas e decisões para transformar complexidade em produtos escaláveis (Estratégia, Design e Impacto)"
              width={480}
              height={480}
              priority
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette overlay fading borders into page background (white in light mode / black in dark mode) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_35%,black_100%)] pointer-events-none transition-colors duration-300" />
            
            {/* High-visibility active branding label */}
            <div className="absolute bottom-8 bg-zinc-950/90 dark:bg-black/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-xs font-semibold uppercase tracking-widest text-zinc-100 dark:text-zinc-200 font-mono transition-all duration-300 group-hover:scale-105 hover:border-zinc-600">
              Estratégia, Design e Impacto.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
