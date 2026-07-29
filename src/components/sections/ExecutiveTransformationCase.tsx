import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

interface Evidence {
  title: string;
  description: string;
  href?: string;
}

interface ExecutiveTransformationCaseProps {
  title: string;
  eyebrow: string;
  lead: string;
  context: string;
  operatingModel: readonly { title: string; description: string }[];
  outcomes: readonly string[];
  evidence: readonly Evidence[];
}

export function ExecutiveTransformationCase({
  title,
  eyebrow,
  lead,
  context,
  operatingModel,
  outcomes,
  evidence,
}: ExecutiveTransformationCaseProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="pt-28 sm:pt-32">
        <Container>
          <Breadcrumbs items={[{ label: title }]} areaId="executive" />

          <section className="border-b border-zinc-200 pb-14 dark:border-zinc-800 sm:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">{eyebrow}</p>
            <Heading level={1} className="mt-5 max-w-5xl text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {title}
            </Heading>
            <Paragraph variant="lead" className="mt-7 max-w-3xl text-zinc-700 dark:text-zinc-300">
              {lead}
            </Paragraph>
          </section>

          <section aria-labelledby="context-title" className="grid gap-8 py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Contexto de transformação</p>
              <Heading id="context-title" level={2} className="mt-4">O trabalho não se organizou por telas.</Heading>
            </div>
            <Paragraph className="max-w-2xl text-zinc-700 dark:text-zinc-300">{context}</Paragraph>
          </section>

          <section aria-labelledby="operating-model-title" className="border-y border-zinc-200 py-14 dark:border-zinc-800 lg:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Como a transformação foi estruturada</p>
            <Heading id="operating-model-title" level={2} className="mt-4 max-w-3xl">Decisões conectadas entre estratégia, experiência e viabilidade.</Heading>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-800">
              {operatingModel.map((item) => (
                <article key={item.title} className="bg-white p-6 dark:bg-black sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="outcomes-title" className="grid gap-8 py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Mudança buscada</p>
              <Heading id="outcomes-title" level={2} className="mt-4">Capacidade para decidir e evoluir com mais consistência.</Heading>
            </div>
            <ul className="space-y-4 border-l border-[#ff00ff] pl-6 text-zinc-700 dark:text-zinc-300">
              {outcomes.map((outcome) => (
                <li key={outcome} className="leading-relaxed">{outcome}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="evidence-title" className="border-t border-zinc-200 py-14 dark:border-zinc-800 lg:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Transformação em prática</p>
            <Heading id="evidence-title" level={2} className="mt-4">Produtos e iniciativas como evidências.</Heading>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {evidence.map((item) => {
                const content: ReactNode = (
                  <>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
                    {item.href ? <span className="mt-6 inline-flex text-sm font-medium text-[#a800a8] dark:text-[#ff00ff]">Ver evidência <span aria-hidden="true" className="ml-1">→</span></span> : null}
                  </>
                );
                const classes = "group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-[#ff00ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff00ff] focus-visible:ring-offset-2 dark:border-zinc-800 dark:focus-visible:ring-offset-black";
                return item.href ? <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</Link> : <article key={item.title} className={classes}>{content}</article>;
              })}
            </div>
          </section>

          <div className="pb-16">
            <Link href="/executive-transformation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-[#a800a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff00ff] focus-visible:ring-offset-2 dark:text-zinc-300 dark:hover:text-[#ff00ff] dark:focus-visible:ring-offset-black">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Voltar para Executive Transformation
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
