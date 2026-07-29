import { Download, Mail, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import SelectedCases from "@/components/sections/SelectedCases";
import { Container } from "@/components/ui/Container";
import { contactNavigation, getWhatsAppHref } from "@/lib/platform-navigation";

const careerWhatsAppHref = getWhatsAppHref(contactNavigation.careerWhatsAppMessage);

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pt-28">
        <Container>
          <Breadcrumbs items={[{ label: "Portfolio" }]} />
          <section aria-labelledby="portfolio-title" className="relative overflow-hidden border-b border-zinc-200 pb-16 pt-10 dark:border-zinc-800">
            <span aria-hidden="true" className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#00ffff] opacity-15 blur-3xl" />
            <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Portfolio</p>
            <h1 id="portfolio-title" className="relative mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Cases para avaliar como transformo complexidade em produtos digitais claros e viáveis.</h1>
            <p className="relative mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">Para RH, recrutadores, hiring managers e lideranças de Produto, Design e Engenharia: contexto, decisões e resultados de uma atuação que conecta usuários, negócio e tecnologia.</p>
          </section>
        </Container>
        <Companies />
        <SelectedCases />
        <About />
        <section id="contact" aria-labelledby="portfolio-contact-title" className="bg-black py-24 text-zinc-50">
          <Container>
            <div className="max-w-3xl"><p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Contato</p><h2 id="portfolio-contact-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Vamos conversar sobre o próximo desafio de produto.</h2><p className="mt-5 max-w-2xl leading-relaxed text-zinc-300">Para oportunidades de carreira, times e posições que precisem aproximar estratégia, design e engenharia.</p></div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={careerWhatsAppHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#00ffff] px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"><MessageCircle aria-hidden="true" className="h-4 w-4" />WhatsApp</a>
              <a href={`mailto:${contactNavigation.email}`} className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 text-sm font-medium transition-colors hover:border-[#00ffff] hover:text-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"><Mail aria-hidden="true" className="h-4 w-4" />E-mail</a>
              <a href={contactNavigation.linkedInHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 text-sm font-medium transition-colors hover:border-[#00ffff] hover:text-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-black">LinkedIn</a>
              <a href={contactNavigation.curriculum.complete} download className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 text-sm font-medium transition-colors hover:border-[#00ffff] hover:text-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"><Download aria-hidden="true" className="h-4 w-4" />Currículo completo</a>
              <a href={contactNavigation.curriculum.summary} download className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 text-sm font-medium transition-colors hover:border-[#00ffff] hover:text-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"><Download aria-hidden="true" className="h-4 w-4" />Currículo resumo</a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
