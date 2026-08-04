import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import CTA from "@/components/sections/CTA";

interface Evidence {
  title: string;
  description: string;
  href?: string;
}

interface ExecutiveTransformationCaseProps {
  company: string;
  role: string;
  period: string;
  eyebrow: string;
  title: string;
  lead: string;
  organizationalContext: readonly string[];
  challenge: readonly string[];
  contribution: readonly string[];
  transformation: readonly { title: string; description: string }[];
  processEvolution: readonly string[];
  culture: readonly string[];
  evidence: readonly Evidence[];
  learnings: readonly string[];
}

function EditorialList({ items }: { items: readonly string[] }) {
  return <ul className="space-y-4 border-l border-[#ff00ff] pl-6 text-zinc-700 dark:text-zinc-300">{items.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}</ul>;
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"><div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">{eyebrow}</p><Heading level={2} className="mt-4">{title}</Heading></div>{children}</div>;
}

export function ExecutiveTransformationCase({
  company,
  role,
  period,
  eyebrow,
  title,
  lead,
  organizationalContext,
  challenge,
  contribution,
  transformation,
  processEvolution,
  culture,
  evidence,
  learnings,
}: ExecutiveTransformationCaseProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="pt-28 sm:pt-32">
        <Container>
          <Breadcrumbs items={[{ label: company }]} areaId="executive" />

          <section className="border-b border-zinc-200 pb-14 dark:border-zinc-800 sm:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">{eyebrow}</p>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300"><span>{company}</span><span aria-hidden="true">•</span><span>{role}</span><span aria-hidden="true">•</span><span>{period}</span></div>
            <Heading level={1} className="mt-6 max-w-5xl text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</Heading>
            <Paragraph variant="lead" className="mt-7 max-w-3xl text-zinc-700 dark:text-zinc-300">{lead}</Paragraph>
          </section>

          <section className="py-14 lg:py-20"><SectionIntro eyebrow="Contexto organizacional" title="Onde a transformação precisava começar."><EditorialList items={organizationalContext} /></SectionIntro></section>
          <section className="border-y border-zinc-200 py-14 dark:border-zinc-800 lg:py-20"><SectionIntro eyebrow="O desafio" title="Destravar decisões além da interface."><EditorialList items={challenge} /></SectionIntro></section>
          <section className="py-14 lg:py-20"><SectionIntro eyebrow="Minha atuação" title="UX como parte da decisão de produto."><EditorialList items={contribution} /></SectionIntro></section>

          <section className="border-y border-zinc-200 py-14 dark:border-zinc-800 lg:py-20" aria-labelledby="transformation-title">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Como transformei a organização</p>
            <Heading id="transformation-title" level={2} className="mt-4 max-w-3xl">Mudanças na forma de construir, alinhar e evoluir produtos.</Heading>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-800">{transformation.map((item) => <article key={item.title} className="bg-white p-6 dark:bg-black sm:p-7"><h3 className="text-lg font-semibold tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p></article>)}</div>
          </section>

          <section className="py-14 lg:py-20"><SectionIntro eyebrow="Evolução dos processos" title="Do alinhamento pontual a uma prática mais conectada."><EditorialList items={processEvolution} /></SectionIntro></section>
          <section className="border-y border-zinc-200 py-14 dark:border-zinc-800 lg:py-20"><SectionIntro eyebrow="Cultura de Produto" title="Como UX passou a participar das decisões."><EditorialList items={culture} /></SectionIntro></section>

          <section aria-labelledby="evidence-title" className="py-14 lg:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a800a8] dark:text-[#ff00ff]">Produtos impactados</p>
            <Heading id="evidence-title" level={2} className="mt-4">Evidências de uma capacidade em evolução.</Heading>
            <div className="mt-10 grid gap-4 md:grid-cols-3">{evidence.map((item) => {
              const content: ReactNode = <><h3 className="text-lg font-semibold tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>{item.href ? <span className="mt-6 inline-flex text-sm font-medium text-[#a800a8] dark:text-[#ff00ff]">Ver Case <span aria-hidden="true" className="ml-1">→</span></span> : null}</>;
              const classes = "group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-[#ff00ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff00ff] focus-visible:ring-offset-2 dark:border-zinc-800 dark:focus-visible:ring-offset-black";
              return item.href ? <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</Link> : <article key={item.title} className={classes}>{content}</article>;
            })}</div>
          </section>

          <section className="border-t border-zinc-200 py-14 dark:border-zinc-800 lg:py-20"><SectionIntro eyebrow="Aprendizados Executivos" title="Liderança se torna visível na forma de criar capacidade."><EditorialList items={learnings} /></SectionIntro></section>

          <div className="pb-16"><Link href="/executive-transformation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-[#a800a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff00ff] focus-visible:ring-offset-2 dark:text-zinc-300 dark:hover:text-[#ff00ff] dark:focus-visible:ring-offset-black"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Voltar para Executive Transformation</Link></div>
        </Container>
      </main>
      <CTA variant="executive" />
      <Footer />
    </div>
  );
}
