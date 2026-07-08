"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface TestimonialData {
  initials: string;
  name: string;
  role: string;
  text: React.ReactNode;
}

const getHoverStyles = (index: number) => {
  const mode = index % 3;
  if (mode === 0) {
    // Cyan
    return {
      border: "hover:border-cyan-500/80 dark:hover:border-[#00ffff]/80",
      quote: "group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]",
      initials: "group-hover:border-cyan-500/40 dark:group-hover:border-[#00ffff]/40 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff]",
      underglow: "bg-[#00ffff]/30 group-hover:shadow-[0_8px_20px_6px_rgba(0,255,255,0.35)]",
    };
  } else if (mode === 1) {
    // Yellow
    return {
      border: "hover:border-yellow-500/80 dark:hover:border-[#ffff00]/80",
      quote: "group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]",
      initials: "group-hover:border-yellow-500/40 dark:group-hover:border-[#ffff00]/40 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00]",
      underglow: "bg-[#ffff00]/30 group-hover:shadow-[0_8px_20px_6px_rgba(255,255,0,0.35)]",
    };
  } else {
    // Magenta
    return {
      border: "hover:border-pink-500/80 dark:hover:border-[#ff00ff]/80",
      quote: "group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]",
      initials: "group-hover:border-pink-500/40 dark:group-hover:border-[#ff00ff]/40 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff]",
      underglow: "bg-[#ff00ff]/30 group-hover:shadow-[0_8px_20px_6px_rgba(255,0,255,0.35)]",
    };
  }
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialData[] = [
    {
      initials: "MO",
      name: "Marcos V. O. Belice",
      role: "Gerente Executivo TI na Listo",
      text: (
        <>
          Trabalho há anos com o Felipe, passamos por três empresas em comum (...). Recomendo-o tanto pela{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            expertise técnica no desenvolvimento front-end
          </span>
          , quanto pela proatividade em aprender habilidades como marketing digital, UX, gestão de projetos web e{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            planejamento estratégico de negócios, buscando sempre a excelência
          </span>
          .
        </>
      )
    },
    {
      initials: "TV",
      name: "Thiago Velloso",
      role: "Cyber & Information Security Executivo",
      text: (
        <>
          O Felipe é um profissional extremamente habilidoso,{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            guiado pelas boas práticas de UX
          </span>
          . Abraça e supera desafios{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            tornando questões complexas em soluções simples
          </span>
          , práticas e de alta qualidade. Possui alto padrão de qualidade nas entregas e busca constante auto-aperfeiçoamento. É ético, resiliente e de{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            alta performance
          </span>
          .
        </>
      )
    },
    {
      initials: "AV",
      name: "Anderson Venancio",
      role: "Analista UX Sênior | Sr. Product Designer",
      text: (
        <>
          Felipe Santander é um grande profissional! Humano,{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            bastante técnico e sabe conduzir bem os processos de UX
          </span>
          . Estabelece{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            boa interação entre os objetivos de negócio, o time de desenvolvimento e as necessidades do usuário
          </span>
          . Dedicado e entusiasta da área, busca desenvolver a cultura de Design.
        </>
      )
    },
    {
      initials: "RM",
      name: "Rafael Medeiros",
      role: "Development Lead na Carenet Longevity",
      text: (
        <>
          Profissional excepcional! Se dedica em{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            fazer seu trabalho do jeito certo, com muito capricho
          </span>{" "}
          e{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            suportado por pilares técnicos
          </span>
          . O entusiasmo no resultado é contagiante, e o que mais chama atenção é que está o tempo todo antenado e se atualizando.{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-[#00ffff] transition-colors duration-300">
            Eu trabalharia com o Santander em qualquer empreitada
          </span>
          .
        </>
      )
    },
    {
      initials: "DL",
      name: "Débora Lopes",
      role: "IA & Cultura de Inovação Organizacional",
      text: (
        <>
          Felipe é{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            ágil e com grande energia para entregar
          </span>
          . Destaca-se pelo{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            apreço aos detalhes que fazem a diferença na experiência
          </span>{" "}
          do usuário final, sempre pensando em como tornar tudo ainda melhor. Nos projetos que trabalhamos,{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-yellow-600 dark:group-hover:text-[#ffff00] transition-colors duration-300">
            entregou além do esperado com interfaces lindas, funcionais e amigáveis
          </span>
          .
        </>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    analytics.trackEvent("Testimonials: Next Clicked", { newIndex: (currentIndex + 1) % testimonials.length });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    analytics.trackEvent("Testimonials: Prev Clicked", { newIndex: (currentIndex - 1 + testimonials.length) % testimonials.length });
  };

  // Get index for displaying 3 items sequentially with looping
  const getVisibleIndex = (offset: number) => {
    return (currentIndex + offset) % testimonials.length;
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50/10 dark:bg-zinc-950/20 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
              Reconhecimento de Mercado
            </span>
            <Heading level={2}>
              O que dizem sobre Felipe.
            </Heading>
            <Paragraph variant="lead" className="mt-4 max-w-2xl">
              Depoimentos de líderes de tecnologia, segurança da informação, design e engenharia com quem trabalhei.
            </Paragraph>
          </div>

          {/* Carousel controls */}
          <div className="flex gap-3 items-center">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
          
          {/* Card 1: Always visible */}
          <div className="block animate-in fade-in duration-300">
            {(() => {
              const realIdx = getVisibleIndex(0);
              const styles = getHoverStyles(realIdx);
              return (
                <Card className={`relative z-10 flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8 group ${styles.border} transition-all duration-300`}>
                  <div className="z-10 relative">
                    <Quote className={`h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6 transition-colors duration-300 ${styles.quote}`} />
                    <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
                      &ldquo;{testimonials[realIdx].text}&rdquo;
                    </Paragraph>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/50 z-10 relative">
                    <div className={`h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 ${styles.initials}`}>
                      {testimonials[realIdx].initials}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                        {testimonials[realIdx].name}
                      </h4>
                      <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                        {testimonials[realIdx].role}
                      </p>
                    </div>
                  </div>

                  {/* Neon Underglow below the card body */}
                  <div className={`absolute -bottom-[1px] left-12 right-12 h-[1px] rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] transition-all duration-500 pointer-events-none z-0 ${styles.underglow}`} />
                </Card>
              );
            })()}
          </div>

          {/* Card 2: Visible on md (tablet) and up */}
          <div className="hidden md:block animate-in fade-in duration-300">
            {(() => {
              const realIdx = getVisibleIndex(1);
              const styles = getHoverStyles(realIdx);
              return (
                <Card className={`relative z-10 flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8 group ${styles.border} transition-all duration-300`}>
                  <div className="z-10 relative">
                    <Quote className={`h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6 transition-colors duration-300 ${styles.quote}`} />
                    <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
                      &ldquo;{testimonials[realIdx].text}&rdquo;
                    </Paragraph>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/50 z-10 relative">
                    <div className={`h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 ${styles.initials}`}>
                      {testimonials[realIdx].initials}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                        {testimonials[realIdx].name}
                      </h4>
                      <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                        {testimonials[realIdx].role}
                      </p>
                    </div>
                  </div>

                  {/* Neon Underglow below the card body */}
                  <div className={`absolute -bottom-[1px] left-12 right-12 h-[1px] rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] transition-all duration-500 pointer-events-none z-0 ${styles.underglow}`} />
                </Card>
              );
            })()}
          </div>

          {/* Card 3: Visible on lg (desktop) and up */}
          <div className="hidden lg:block animate-in fade-in duration-300">
            {(() => {
              const realIdx = getVisibleIndex(2);
              const styles = getHoverStyles(realIdx);
              return (
                <Card className={`relative z-10 flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8 group ${styles.border} transition-all duration-300`}>
                  <div className="z-10 relative">
                    <Quote className={`h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6 transition-colors duration-300 ${styles.quote}`} />
                    <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
                      &ldquo;{testimonials[realIdx].text}&rdquo;
                    </Paragraph>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/50 z-10 relative">
                    <div className={`h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 ${styles.initials}`}>
                      {testimonials[realIdx].initials}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                        {testimonials[realIdx].name}
                      </h4>
                      <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                        {testimonials[realIdx].role}
                      </p>
                    </div>
                  </div>

                  {/* Neon Underglow below the card body */}
                  <div className={`absolute -bottom-[1px] left-12 right-12 h-[1px] rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] transition-all duration-500 pointer-events-none z-0 ${styles.underglow}`} />
                </Card>
              );
            })()}
          </div>

        </div>

        {/* Indicator dots */}
        <div className="mt-10 flex justify-center gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-zinc-950 dark:bg-zinc-50"
                  : "w-1.5 bg-zinc-300 dark:bg-zinc-800"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
