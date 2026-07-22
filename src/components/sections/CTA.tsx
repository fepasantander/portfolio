"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Download, Mail, MessageCircle } from "lucide-react";
import { analytics } from "@/lib/analytics";

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

export const CTA = () => {
  const handleLinkedInClick = () => {
    analytics.trackCTA("CTA Section: LinkedIn", "https://www.linkedin.com/in/felipe-santander/");
  };

  const handleDownloadCVCompletoClick = () => {
    analytics.trackDownload("cv-2026-07--felipe-santander-completo.pdf");
    analytics.trackCTA("CTA Section: Download CV Completo", "/pdf/cv-2026-07--felipe-santander-completo.pdf");
  };

  const handleDownloadCVResumoClick = () => {
    analytics.trackDownload("cv-2026-07--felipe-santander-resumo.pdf");
    analytics.trackCTA("CTA Section: Download CV Resumo", "/pdf/cv-2026-07--felipe-santander-resumo.pdf");
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-white dark:bg-black">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-zinc-50 dark:bg-zinc-950/10 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 text-center max-w-4xl">
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          Vamos construir produtos melhores juntos.
        </Heading>
        
        <Paragraph variant="lead" className="mt-6 max-w-xl mx-auto">
          Estou disponível para apoiar organizações por meio de consultorias estratégicas, estruturação de times de design e posições executivas de produto. Vamos conversar sobre como acelerar a maturidade do seu ecossistema digital.
        </Paragraph>

        {/* Informações de Contato Direto */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 font-mono">
          <a 
            href="mailto:fepasantander@gmail.com" 
            onClick={() => analytics.trackCTA("CTA Section: Email", "mailto:fepasantander@gmail.com")}
            className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <Mail className="h-4 w-4" />
            fepasantander@gmail.com
          </a>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-800">|</span>
          <a 
            href={`https://wa.me/5511953423954?text=${encodeURIComponent("Olá Felipe, venho através de seu Portfólio e gostaria de ...")}`}
            onClick={() => analytics.trackCTA("CTA Section: WhatsApp", "https://wa.me/5511953423954")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            +55 11 953.423.954
          </a>
        </div>

        {/* Dynamic CTAs grid */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/felipe-santander/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleLinkedInClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-950 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-50 shadow-sm transition-all duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 sm:w-auto dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>

          <a 
            href="/pdf/cv-2026-07--felipe-santander-completo.pdf" 
            download="cv-2026-07--felipe-santander-completo.pdf"
            onClick={handleDownloadCVCompletoClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-400 sm:w-auto dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" />
            CV Completo (PDF)
          </a>

          <a 
            href="/pdf/cv-2026-07--felipe-santander-resumo.pdf" 
            download="cv-2026-07--felipe-santander-resumo.pdf"
            onClick={handleDownloadCVResumoClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-400 sm:w-auto dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" />
            CV Resumo (PDF)
          </a>

        </div>
      </Container>
    </section>
  );
};

export default CTA;
