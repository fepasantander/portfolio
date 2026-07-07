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
  text: string;
}

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialData[] = [
    {
      initials: "MO",
      name: "Marcos V. O. Belice",
      role: "Gerente Executivo TI na Listo",
      text: "Trabalho há anos com o Felipe, passamos por três empresas em comum (...). Recomendo-o tanto pela expertise técnica no desenvolvimento front-end, quanto pela proatividade em aprender habilidades como marketing digital, UX, gestão de projetos web e planejamento estratégico de negócios, buscando sempre a excelência."
    },
    {
      initials: "TV",
      name: "Thiago Velloso",
      role: "Cyber & Information Security Executivo",
      text: "O Felipe é um profissional extremamente habilidoso, guiado pelas boas práticas de UX. Abraça e supera desafios tornando questões complexas em soluções simples, práticas e de alta qualidade. Possui alto padrão de qualidade nas entregas e busca constante auto-aperfeiçoamento. É ético, resiliente e de alta performance."
    },
    {
      initials: "AV",
      name: "Anderson Venancio",
      role: "Analista UX Sênior | Sr. Product Designer",
      text: "Felipe Santander é um grande profissional! Humano, bastante técnico e sabe conduzir bem os processos de UX. Estabelece boa interação entre os objetivos de negócio, o time de desenvolvimento e as necessidades do usuário. Dedicado e entusiasta da área, busca desenvolver a cultura de Design."
    },
    {
      initials: "RM",
      name: "Rafael Medeiros",
      role: "Development Lead na Carenet Longevity",
      text: "Profissional excepcional! Se dedica em fazer seu trabalho do jeito certo, com muito capricho e suportado por pilares técnicos. O entusiasmo no resultado é contagiante, e o que mais chama atenção é que está o tempo todo antenado e se atualizando. Eu trabalharia com o Santander em qualquer empreitada."
    },
    {
      initials: "DL",
      name: "Débora Lopes",
      role: "IA & Cultura de Inovação Organizacional",
      text: "Felipe é ágil e com grande energia para entregar. Destaca-se pelo apreço aos detalhes que fazem a diferença na experiência do usuário final, sempre pensando em como tornar tudo ainda melhor. Nos projetos que trabalhamos, entregou além do esperado com interfaces lindas, funcionais e amigáveis."
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
            <Card className="flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8">
              <div>
                <Quote className="h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6" />
                <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{testimonials[getVisibleIndex(0)].text}&rdquo;
                </Paragraph>
              </div>
              
              <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/50">
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800">
                  {testimonials[getVisibleIndex(0)].initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                    {testimonials[getVisibleIndex(0)].name}
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                    {testimonials[getVisibleIndex(0)].role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 2: Visible on md (tablet) and up */}
          <div className="hidden md:block animate-in fade-in duration-300">
            <Card className="flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8">
              <div>
                <Quote className="h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6" />
                <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{testimonials[getVisibleIndex(1)].text}&rdquo;
                </Paragraph>
              </div>
              
              <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/50">
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800">
                  {testimonials[getVisibleIndex(1)].initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                    {testimonials[getVisibleIndex(1)].name}
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                    {testimonials[getVisibleIndex(1)].role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 3: Visible on lg (desktop) and up */}
          <div className="hidden lg:block animate-in fade-in duration-300">
            <Card className="flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8">
              <div>
                <Quote className="h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6" />
                <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{testimonials[getVisibleIndex(2)].text}&rdquo;
                </Paragraph>
              </div>
              
              <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/50">
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800">
                  {testimonials[getVisibleIndex(2)].initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                    {testimonials[getVisibleIndex(2)].name}
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                    {testimonials[getVisibleIndex(2)].role}
                  </p>
                </div>
              </div>
            </Card>
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
