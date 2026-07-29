import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";
import { contactNavigation, getWhatsAppHref } from "@/lib/platform-navigation";

const studioWhatsAppHref = getWhatsAppHref(contactNavigation.studio33WhatsAppMessage);

export default function Studio33Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-50">
      <Header />
      <main className="flex-grow pb-20 pt-28">
        <Container>
          <Breadcrumbs items={[{ label: "Studio 33" }]} />
          <section aria-labelledby="studio-title" className="relative mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#ffff00] opacity-20 blur-3xl" />
            <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-[#ffff00]">Studio 33</p>
            <h1 id="studio-title" className="relative mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Projetos digitais objetivos para tirar boas ideias do papel.</h1>
            <p className="relative mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300">Sites, landing pages, UX/UI, identidade digital, MVPs, front-end e IA para empresas e profissionais que precisam avançar com clareza.</p>
            <a href={studioWhatsAppHref} target="_blank" rel="noopener noreferrer" className="relative mt-10 inline-flex items-center gap-2 rounded-md bg-[#ffff00] px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"><MessageCircle aria-hidden="true" className="h-4 w-4" />Quero falar sobre meu projeto <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
          </section>
          <section aria-labelledby="studio-projects-title" className="mt-16"><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ffff00]">Primeiro projeto</p><h2 id="studio-projects-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Orchestra — Carenet</h2><article className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 sm:grid sm:grid-cols-[0.9fr_1.1fr]"><div className="relative aspect-[16/9] bg-black"><Image src="/imagem/carenet/print-orchestra.avif" alt="Orchestra da Carenet" fill sizes="(max-width: 640px) 100vw, 45vw" className="object-contain p-4" /></div><div className="flex flex-col justify-center p-7"><span className="inline-flex w-fit rounded-full border border-zinc-700 px-2.5 py-1 text-xs font-medium text-zinc-300">Work in progress</span><p className="mt-5 leading-relaxed text-zinc-300">Projeto em preparação para apresentação comercial no Studio 33.</p></div></article></section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
