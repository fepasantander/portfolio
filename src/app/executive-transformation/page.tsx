import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ExecutiveTransformationCatalog } from "@/components/sections/ExecutiveTransformationCatalog";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";

export default function ExecutiveTransformationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pb-16 pt-28">
        <Container>
          <Breadcrumbs items={[{ label: "Executive Transformation" }]} />
          <section aria-labelledby="executive-title" className="relative mt-10 overflow-hidden border-b border-zinc-200 pb-16 dark:border-zinc-800">
            <span aria-hidden="true" className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#ff00ff] opacity-15 blur-3xl" />
            <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Executive Transformation</p>
            <h1 id="executive-title" className="relative mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">Transformações de produto vistas pela liderança que as torna possíveis.</h1>
            <p className="relative mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">Um ponto de entrada executivo para contextos de estruturação, decisões e alinhamento entre usuários, negócio, design, tecnologia e IA.</p>
          </section>
          <ExecutiveTransformationCatalog />
        </Container>
      </main>
      <CTA variant="executive" />
      <Footer />
    </div>
  );
}
