import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PlatformAreas from "@/components/sections/PlatformAreas";
import HowIThink from "@/components/sections/HowIThink";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Felipe Santander — Estratégia, Design e Impacto",
  description: "Felipe Santander conecta usuários, negócio e tecnologia para transformar problemas complexos em produtos digitais melhores.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Felipe Santander — Estratégia, Design e Impacto",
    description: "Felipe Santander conecta usuários, negócio e tecnologia para transformar problemas complexos em produtos digitais melhores.",
    url: "/",
    siteName: "Felipe Santander — Portfolio",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Felipe Santander — Estratégia, Design e Impacto" }],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-950 transition-colors duration-300 selection:bg-zinc-200 dark:bg-black dark:text-zinc-50 dark:selection:bg-zinc-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PlatformAreas />
        <HowIThink />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
