import Link from "next/link";
import { ArrowLeft, Brain, FileText, FileCheck2, Image as ImageIcon, LayoutGrid, Sparkles } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

type EvidenceKind = "images" | "boards" | "figjam" | "documents";

const evidenceSources: { kind: EvidenceKind; label: string; icon: typeof ImageIcon }[] = [
  { kind: "images", label: "Imagens", icon: ImageIcon },
  { kind: "boards", label: "Boards", icon: LayoutGrid },
  { kind: "figjam", label: "FigJam", icon: Brain },
  { kind: "documents", label: "Documentos", icon: FileText },
];

function ContentPreparation() {
  return <p className="text-sm text-zinc-500 dark:text-zinc-400">Conteúdo em preparação</p>;
}

function EvidenceSupport() {
  return (
    <section className="space-y-4 border-t border-zinc-100 pt-6 dark:border-zinc-900" aria-labelledby="hub-correcoes-evidences-title">
      <div>
        <Heading id="hub-correcoes-evidences-title" level={3} className="block text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Evidências e Apoio à Decisão (Anexos)</Heading>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Conteúdo em preparação. A estrutura está pronta para receber evidências catalogadas.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" role="list" aria-label="Tipos de evidência preparados">
        {evidenceSources.map(({ kind, label, icon: Icon }) => (
          <div key={kind} role="listitem" className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50/30 p-4 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-400">
            <Icon className="mb-3 size-5" aria-hidden="true" />
            <span className="block text-xs font-semibold">{label}</span>
            <span className="mt-1 block text-[10px]">Em preparação</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const sections = ["Contexto", "Problema", "Minha Atuação", "Processo", "Decisões de Produto", "Resultados", "Aprendizados"];

export default function HubCorrecoesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-950 transition-colors duration-300 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pb-24 pt-32">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
            <Link href="/#transformations" className="transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:text-white">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/transformations/vitru-innovation-lab" className="transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:text-white">Vitru Educação</Link>
            <span aria-hidden="true">/</span>
            <Link href="/transformations/vitru-innovation-lab" className="transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:text-white">Innovation Lab</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Hub de Correções</span>
          </nav>
          <Link href="/transformations/vitru-innovation-lab" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:text-zinc-400 dark:hover:text-zinc-50"><ArrowLeft className="size-4" aria-hidden="true" />Voltar ao Innovation Lab</Link>

          <div className="grid grid-cols-1 items-start gap-8 border-b border-zinc-100 pb-12 lg:grid-cols-12 dark:border-zinc-900">
            <div className="lg:col-span-8">
              <span className="mb-3 block text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Case 003 · Conteúdo em preparação</span>
              <Heading level={1} className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Hub de Correções</Heading>
            </div>
            <div className="flex lg:col-span-4 lg:justify-end"><div className="flex h-20 w-44 items-center justify-center rounded-2xl border border-zinc-200/50 bg-zinc-950 p-4 shadow-sm dark:border-zinc-800/80"><FileCheck2 className="size-8 text-white" aria-hidden="true" /></div></div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-12">
            <section className="relative space-y-3 overflow-hidden rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.02] p-6 dark:border-cyan-500/10 dark:bg-cyan-500/[0.01]" aria-labelledby="executive-summary-title">
              <div className="pointer-events-none absolute right-0 top-0 size-24 rounded-full bg-cyan-500/10 blur-2xl" />
              <Heading id="executive-summary-title" level={2} className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400"><Sparkles className="size-4" aria-hidden="true" />Executive Summary</Heading>
              <ContentPreparation />
            </section>

            <EvidenceSupport />

            {sections.map((title) => (
              <section key={title} className="space-y-3" aria-labelledby={`hub-correcoes-${title.toLowerCase().replaceAll(" ", "-")}`}>
                <Heading id={`hub-correcoes-${title.toLowerCase().replaceAll(" ", "-")}`} level={2} className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</Heading>
                <Card hoverEffect={false} className="border-dashed border-zinc-200 bg-zinc-50/30 p-5 dark:border-zinc-800 dark:bg-zinc-900/20"><ContentPreparation /></Card>
              </section>
            ))}
          </div>

          <nav className="mt-16 flex flex-col gap-3 border-t border-zinc-100 pt-8 text-sm dark:border-zinc-900 sm:flex-row sm:items-center sm:justify-between" aria-label="Navegação entre cases">
            <Link href="/transformations/sofia-administrative-ai-assistant" className="inline-flex items-center gap-2 font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:text-zinc-300 dark:hover:text-white"><ArrowLeft className="size-4" aria-hidden="true" />Case anterior: SofIA</Link>
            <span aria-disabled="true" className="text-zinc-400 dark:text-zinc-500">Próximo case</span>
          </nav>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
