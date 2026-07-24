import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { Metadata } from "next";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Sobre | Felipe Santander", description: "Perfil profissional, especialidades e trajetória de Felipe Santander.", alternates: { canonical: "/sobre" } };

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
