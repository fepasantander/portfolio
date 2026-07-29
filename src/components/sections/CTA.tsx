"use client";

import Link from "next/link";
import { BriefcaseBusiness, Download, Mail, MessageCircle, MoveUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { analytics } from "@/lib/analytics";
import { contactNavigation, getPlatformArea, getWhatsAppHref } from "@/lib/platform-navigation";

const studioArea = getPlatformArea("studio33");
const careerWhatsAppHref = getWhatsAppHref(contactNavigation.careerWhatsAppMessage);
const studioWhatsAppHref = getWhatsAppHref(contactNavigation.studio33WhatsAppMessage);
const executiveWhatsAppHref = getWhatsAppHref("Olá Felipe, venho através de seu Portfólio - Executive e gostaria de ...");

const focusClass = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function ExecutiveCTA() {
  return (
    <section id="contact" aria-labelledby="executive-contact-title" className="bg-black py-28 text-zinc-50 sm:py-36">
      <Container>
        <div className="border-t border-zinc-800 pt-12 sm:pt-16">
          <Heading level={2} id="executive-contact-title" className="max-w-5xl text-left text-5xl leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Vamos construir produtos melhores juntos.</Heading>
          <Paragraph variant="lead" className="mx-auto mt-14 max-w-2xl text-center leading-relaxed text-zinc-300">Estou disponível para apoiar organizações em contextos que precisam estruturar UX, conectar Produto, Design, Tecnologia e Negócio e transformar complexidade em direção, processos e entregas mais consistentes.</Paragraph>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-zinc-300">
            <a href={`mailto:${contactNavigation.email}`} onClick={() => analytics.trackCTA("Executive CTA: Email", `mailto:${contactNavigation.email}`)} className={`inline-flex items-center gap-2 transition-colors hover:text-[#ff00ff] ${focusClass}`}><Mail aria-hidden="true" className="h-4 w-4" />{contactNavigation.email}</a>
            <span aria-hidden="true" className="text-zinc-600">|</span>
            <a href={executiveWhatsAppHref} target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackCTA("Executive CTA: WhatsApp", executiveWhatsAppHref)} className={`inline-flex items-center gap-2 transition-colors hover:text-[#ff00ff] ${focusClass}`}><MessageCircle aria-hidden="true" className="h-4 w-4" />WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href={contactNavigation.linkedInHref} target="_blank" rel="noopener noreferrer" className={`inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-[#ff00ff] sm:w-auto ${focusClass}`}>LinkedIn</a>
            <a href={contactNavigation.curriculum.complete} download className={`inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff] sm:w-auto ${focusClass}`}><Download aria-hidden="true" className="h-4 w-4" />CV Completo (PDF)</a>
            <a href={contactNavigation.curriculum.summary} download className={`inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff] sm:w-auto ${focusClass}`}><Download aria-hidden="true" className="h-4 w-4" />CV Resumo (PDF)</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const CTA = ({ variant = "default" }: { variant?: "default" | "executive" }) => {
  const executive = variant === "executive";

  if (executive) return <ExecutiveCTA />;

  return (
  <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-black py-28 text-zinc-50">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <Heading level={2} id="contact-title" className="text-3xl tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">Vamos construir produtos melhores juntos.</Heading>
        <Paragraph variant="lead" className="mx-auto mt-6 max-w-2xl text-zinc-300">Escolha o contexto da conversa. Para oportunidades de carreira, fale diretamente comigo. Para um projeto digital objetivo, conheça o Studio 33.</Paragraph>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        <div className="group relative isolate overflow-hidden rounded-xl border border-zinc-700 bg-black p-7">
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-0 -z-10 h-64 w-64 rounded-full bg-[#00ffff] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 group-focus-within:opacity-25 motion-reduce:transition-none" />
          <span aria-hidden="true" className="pointer-events-none absolute -top-28 right-0 -z-10 h-64 w-64 rounded-full bg-[#ff00ff] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 group-focus-within:opacity-25 motion-reduce:transition-none" />
          <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" />
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Carreira</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">Para contratação de Felipe em um time, posição ou desafio de produto.</p>
          <a href={careerWhatsAppHref} target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackCTA("CTA Section: WhatsApp", careerWhatsAppHref)} className={`mt-8 inline-flex items-center gap-2 rounded-md bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-[#00ffff] ${focusClass}`}>
            <MessageCircle aria-hidden="true" className="h-4 w-4" />Conversar pelo WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a href={`mailto:${contactNavigation.email}`} onClick={() => analytics.trackCTA("CTA Section: Email", `mailto:${contactNavigation.email}`)} className={`inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-[#00ffff] ${focusClass}`}><Mail aria-hidden="true" className="h-4 w-4" />E-mail</a>
            <a href={contactNavigation.linkedInHref} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-[#00ffff] ${focusClass}`}><span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-current text-[10px] font-semibold">in</span>LinkedIn</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a href={contactNavigation.curriculum.complete} download className={`inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-[#ff00ff] ${focusClass}`}><Download aria-hidden="true" className="h-4 w-4" />Currículo completo</a>
            <a href={contactNavigation.curriculum.summary} download className={`inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-[#ff00ff] ${focusClass}`}><Download aria-hidden="true" className="h-4 w-4" />Currículo resumo</a>
          </div>
        </div>

        <div className="group relative isolate overflow-hidden rounded-xl border border-zinc-700 bg-black p-7">
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-1/2 -z-10 h-72 w-[130%] -translate-x-1/2 rounded-full bg-[#ffff00] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 group-focus-within:opacity-25 motion-reduce:transition-none" />
          <MoveUpRight aria-hidden="true" className="h-5 w-5" />
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Projeto</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">Para projetos digitais objetivos: descubra como o {studioArea.label} pode apoiar a sua iniciativa.</p>
          <a href={studioWhatsAppHref} target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackCTA("CTA Section: Studio WhatsApp", studioWhatsAppHref)} className={`mt-8 inline-flex items-center gap-2 rounded-md bg-[#ffff00] px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50 ${focusClass}`}>
            <MessageCircle aria-hidden="true" className="h-4 w-4" />Quero fazer um projeto pelo Studio 33
          </a>
          <Link href={studioArea.href} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-[#ffff00] ${focusClass}`}>Conhecer o Studio 33 <MoveUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></Link>
        </div>
      </div>
    </Container>
  </section>
  );
};

export default CTA;
