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
  linkedin: string;
  whatsapp?: string;
  whatsappLocked?: boolean;
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
      linkedin: "https://www.linkedin.com/in/marcos-valesk-oliveira-belice-b7a02162/",
      whatsapp: "5511965734682",
      whatsappLocked: false,
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
      linkedin: "https://www.linkedin.com/in/thiago-velloso-85535b54/",
      whatsappLocked: true,
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
      linkedin: "https://www.linkedin.com/in/andivenancio/",
      whatsapp: "5511977580846",
      whatsappLocked: false,
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
      linkedin: "https://www.linkedin.com/in/rafaelmedeiros/",
      whatsapp: "5511976686881",
      whatsappLocked: false,
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
      linkedin: "https://www.linkedin.com/in/deboralopes09/",
      whatsapp: "5521969366654",
      whatsappLocked: true,
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
    },
    {
      initials: "CL",
      name: "Caio Cesar Barreira Luvisotto",
      role: "Coordenador de TI | Squad Lead | PSM | SM",
      linkedin: "https://www.linkedin.com/in/caio-cesar-barreira-luvisotto/",
      whatsapp: "5511955514555",
      whatsappLocked: false,
      text: (
        <>
          O período que trabalhei com Felipe Santander foi de grande satisfação, um profissional{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            muito comprometido e criativo
          </span>
          , habilidoso tanto no âmbito técnico quanto em relacionamentos interpessoais. Suas entregas contribuíram muito à organização, bem como suas{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-[#ff00ff] transition-colors duration-300">
            ideias inovadoras que tracionaram bastante a evolução
          </span>{" "}
          das soluções sustentadas pelo time. Recomendo Felipe Santander com segurança e espero poder voltar a trabalhar com ele.
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

  const presetMessage = "Bom dia, encontrei sua recomendação profissional sobre o Felipe Santander nas redes do mesmo, poderíamos conversar sobre este profissional?";

  const renderCard = (offset: number) => {
    const realIdx = getVisibleIndex(offset);
    const styles = getHoverStyles(realIdx);
    const item = testimonials[realIdx];

    return (
      <Card className={`relative z-10 flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm p-6 sm:p-8 group ${styles.border} transition-all duration-300`}>
        <div className="z-10 relative">
          <Quote className={`h-8 w-8 text-zinc-200 dark:text-zinc-800 mb-6 transition-colors duration-300 ${styles.quote}`} />
          <Paragraph variant="base" className="text-zinc-650 dark:text-zinc-400 italic text-sm sm:text-base leading-relaxed">
            &ldquo;{item.text}&rdquo;
          </Paragraph>
        </div>
        
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900/50 z-10 relative gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className={`h-10 w-10 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-250 font-sans font-semibold text-xs flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800 transition-colors duration-300 ${styles.initials}`}>
              {item.initials}
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 m-0 truncate">
                {item.name}
              </h4>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                {item.role}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 shrink-0">
            {/* LinkedIn */}
            <a
              href={item.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full border border-zinc-200 dark:border-zinc-850 text-zinc-450 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 bg-zinc-50/50 dark:bg-zinc-900/20 flex items-center justify-center"
              title={`Linkedin de ${item.name}`}
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            {!item.whatsappLocked && item.whatsapp ? (
              <a
                href={`https://wa.me/${item.whatsapp}?text=${encodeURIComponent(presetMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full border border-zinc-200 dark:border-zinc-850 text-zinc-450 dark:text-zinc-500 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/40 dark:hover:border-green-400/40 transition-all duration-300 bg-zinc-50/50 dark:bg-zinc-900/20 flex items-center justify-center"
                title={`WhatsApp de ${item.name}`}
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.219 5.221.002 11.626.002c3.102.001 6.021 1.209 8.216 3.407 2.195 2.198 3.4 5.12 3.4 8.225-.005 6.409-5.221 11.627-11.626 11.627-2.005-.002-3.974-.52-5.716-1.503L0 24zm6.273-3.82c1.624.965 3.238 1.486 4.903 1.488 5.437.002 9.855-4.414 9.86-9.854.002-2.635-1.025-5.114-2.894-6.985C16.326 2.957 13.854 1.93 11.222 1.93 5.787 1.93 1.368 6.35 1.364 11.789c-.002 1.737.458 3.43 1.332 4.945l-1.008 3.682 3.771-.989zM17.02 14.28c-.287-.143-1.696-.838-1.959-.933-.263-.096-.454-.143-.646.143-.192.287-.741.933-.909 1.123-.168.19-.336.215-.622.072-.287-.143-1.21-.447-2.306-1.427-.852-.76-1.428-1.701-1.595-1.988-.168-.287-.018-.442.125-.584.129-.127.287-.335.43-.502.143-.168.191-.287.287-.478.096-.191.048-.359-.024-.502-.072-.143-.646-1.554-.885-2.127-.233-.56-.47-.483-.646-.492-.167-.008-.359-.01-.55-.01-.192 0-.502.072-.765.359-.263.287-1.004.981-1.004 2.392 0 1.41 1.028 2.77 1.171 2.962.143.191 2.023 3.09 4.901 4.331.685.295 1.219.471 1.636.604.689.219 1.316.188 1.812.114.553-.083 1.696-.693 1.935-1.363.239-.67.239-1.243.168-1.363-.072-.12-.263-.192-.55-.335z"/>
                </svg>
              </a>
            ) : (
              <button
                disabled
                className="p-1.5 rounded-full border border-zinc-100 dark:border-zinc-900/50 text-zinc-300 dark:text-zinc-700 bg-transparent opacity-35 cursor-not-allowed flex items-center justify-center"
                title="Contato via WhatsApp indisponível"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.219 5.221.002 11.626.002c3.102.001 6.021 1.209 8.216 3.407 2.195 2.198 3.4 5.12 3.4 8.225-.005 6.409-5.221 11.627-11.626 11.627-2.005-.002-3.974-.52-5.716-1.503L0 24zm6.273-3.82c1.624.965 3.238 1.486 4.903 1.488 5.437.002 9.855-4.414 9.86-9.854.002-2.635-1.025-5.114-2.894-6.985C16.326 2.957 13.854 1.93 11.222 1.93 5.787 1.93 1.368 6.35 1.364 11.789c-.002 1.737.458 3.43 1.332 4.945l-1.008 3.682 3.771-.989zM17.02 14.28c-.287-.143-1.696-.838-1.959-.933-.263-.096-.454-.143-.646.143-.192.287-.741.933-.909 1.123-.168.19-.336.215-.622.072-.287-.143-1.21-.447-2.306-1.427-.852-.76-1.428-1.701-1.595-1.988-.168-.287-.018-.442.125-.584.129-.127.287-.335.43-.502.143-.168.191-.287.287-.478.096-.191.048-.359-.024-.502-.072-.143-.646-1.554-.885-2.127-.233-.56-.47-.483-.646-.492-.167-.008-.359-.01-.55-.01-.192 0-.502.072-.765.359-.263.287-1.004.981-1.004 2.392 0 1.41 1.028 2.77 1.171 2.962.143.191 2.023 3.09 4.901 4.331.685.295 1.219.471 1.636.604.689.219 1.316.188 1.812.114.553-.083 1.696-.693 1.935-1.363.239-.67.239-1.243.168-1.363-.072-.12-.263-.192-.55-.335z"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Neon Underglow below the card body */}
        <div className={`absolute -bottom-[1px] left-12 right-12 h-[1px] rounded-full opacity-0 group-hover:opacity-100 blur-[3px] group-hover:blur-[6px] transition-all duration-500 pointer-events-none z-0 ${styles.underglow}`} />
      </Card>
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50/10 dark:bg-zinc-950/20 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-655 block mb-3">
              Reconhecimento de Mercado
            </span>
            <Heading level={2}>
              O que dizem sobre Felipe.
            </Heading>
            <Paragraph variant="lead" className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
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
            {renderCard(0)}
          </div>

          {/* Card 2: Visible on md (tablet) and up */}
          <div className="hidden md:block animate-in fade-in duration-300">
            {renderCard(1)}
          </div>

          {/* Card 3: Visible on lg (desktop) and up */}
          <div className="hidden lg:block animate-in fade-in duration-300">
            {renderCard(2)}
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
