import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { Metadata } from "next";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Perfil profissional, especialidades e trajetória de Felipe Santander.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre | Felipe Santander",
    description: "Perfil profissional, especialidades e trajetória de Felipe Santander.",
    url: "/about",
    siteName: "Felipe Santander — Portfolio",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Felipe Santander — Perfil profissional" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | Felipe Santander",
    description: "Perfil profissional, especialidades e trajetória de Felipe Santander.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pt-28">
        <Container><Breadcrumbs items={[{ label: "Sobre" }]} /></Container>
        <About />
      </main>
      <Footer />
    </div>
  );
}
