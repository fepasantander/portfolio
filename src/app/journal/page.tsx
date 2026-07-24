import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Journal | Felipe Santander",
  description: "Decisões, processos e evidências por trás das transformações de produto.",
  alternates: { canonical: "/journal" },
};

const journalHighlights = [
  { title: "VitruChat", company: "Vitru Innovation Lab", description: "IA Generativa corporativa, governança e experiência conversacional.", href: "/transformations/vitru-oportunidades-tecnologicas?tab=vitruchat", image: "/imagem/journal/vitruchat-logotipo.png" },
  { title: "SofIA", company: "Vitru Innovation Lab", description: "Evolução da assistência administrativa para um agente de secretaria.", href: "/transformations/vitru-oportunidades-tecnologicas?tab=sofia", image: "/imagem/journal/sofia-grande.png" },
  { title: "Hub de Correções", company: "Vitru Innovation Lab", description: "Discovery e fluxos para correção acadêmica assistida por IA.", href: "/transformations/vitru-oportunidades-tecnologicas?tab=hub-correcoes", image: "/imagem/journal/hub-correcoes-thumb-destaque.png" },
  { title: "Odonto1", company: "VM Comunicações", description: "Conteúdo Premium, relacionamento e decisões orientadas por pesquisa.", href: "/transformations/vm-comunicacao?tab=odonto1", image: "/imagem/vm/odonto1-thumbnail.svg" },
  { title: "Revistas", company: "VM Comunicações", description: "Portais editoriais e modelos responsivos para publicações científicas.", href: "/transformations/vm-comunicacao?tab=revistas", image: "/imagem/journal/vm-revistas-implantnews.png" },
  { title: "Eventos", company: "VM Comunicações", description: "Ecossistema digital para congressos e experiências recorrentes.", href: "/transformations/vm-comunicacao?tab=eventos", image: "/imagem/journal/vm-eventos-in26.png" },
  { title: "Orchestra", company: "Carenet", description: "Plataforma IoMT para operação e informação assistencial.", href: "/transformations/carenet-longevity?tab=orchestra", image: "/imagem/carenet/print-orchestra.avif" },
  { title: "Diva", company: "Carenet", description: "Experiência mobile para triagem, sinais vitais e risco assistencial.", href: "/transformations/carenet-longevity?tab=diva", image: "/imagem/carenet/diva/aprovadas/capa-google-play-x05.png" },
] as const;

export default function JournalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pb-16 pt-28">
        <Container>
          <Breadcrumbs items={[{ label: "Journal" }]} />
          <section aria-labelledby="journal-title" className="max-w-3xl">
            <h1 id="journal-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Product Transformation Journal</h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Investigações sobre as decisões, processos e evidências que orientaram produtos digitais em diferentes contextos.</p>
          </section>
          <section aria-label="Destaques do Journal" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {journalHighlights.map((item) => (
              <Link key={item.title} href={item.href} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-cyan-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="relative aspect-[16/9] bg-[#000000]">
                  <Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={`object-contain p-3 transition duration-300 group-hover:scale-[1.03] ${item.title === "SofIA" ? "object-top" : ""}`} />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">{item.company}</p>
                  <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  <span className="mt-5 inline-flex text-sm font-medium text-cyan-700 dark:text-cyan-300">Abrir investigação <span aria-hidden="true" className="ml-1 transition group-hover:translate-x-1">→</span></span>
                </div>
              </Link>
            ))}
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
