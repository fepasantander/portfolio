import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, FileCheck2, Search, Sparkles } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

const availableCases = [
  { title: "VitruChat LLM", href: "/transformations/vitru-oportunidades-tecnologicas", icon: Sparkles, problem: "How to increase internal AI productivity without exposing sensitive corporate information.", contribution: "Plataforma corporativa de IA Generativa para uso interno dos colaboradores da Vitru.", evidence: "28 evidências visuais catalogadas." },
  { title: "SofIA", href: "/transformations/sofia-administrative-ai-assistant", icon: Brain, problem: "How to reduce administrative friction and introduce students to the learning platform through an intelligent onboarding experience.", contribution: "Onboarding e assistência administrativa que prepara a evolução para um Agente de Secretaria.", evidence: "Evidências visuais em atualização." },
];

const futureInitiatives = [
  { title: "Hub de Correções", icon: FileCheck2 },
  { title: "Pesquisa Corporativa de IA", icon: Search },
];

export default function VitruInnovationLabPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-950 transition-colors duration-300 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pb-24 pt-32">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
            <Link href="/#transformations" className="transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:hover:text-white">Início</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Vitru Educação — Innovation Lab</span>
          </nav>
          <Link href="/#transformations" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:text-zinc-400 dark:hover:text-white">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar para as Transformações
          </Link>
          <section className="border-b border-zinc-100 pb-12 dark:border-zinc-900" aria-labelledby="innovation-lab-title">
            <span className="mb-3 block text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">Vitru Educação · Innovation Lab</span>
            <Heading id="innovation-lab-title" level={1} className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Innovation Lab</Heading>
            <Paragraph variant="lead" className="mt-5 max-w-3xl text-zinc-700 dark:text-zinc-300">Programa de inovação que explora oportunidades de Inteligência Artificial de forma estruturada, conectando produto, negócio e engenharia.</Paragraph>
          </section>
          <section className="py-16" aria-labelledby="available-cases-title">
            <div className="mb-8 max-w-3xl"><Heading id="available-cases-title" level={2}>Cases disponíveis</Heading><Paragraph className="mt-4">Cada case apresenta uma iniciativa publicada do Innovation Lab e pode ser explorado diretamente.</Paragraph></div>
            <div className="grid gap-6 md:grid-cols-2">
              {availableCases.map(({ title, href, icon: Icon, problem, contribution, evidence }) => (
                <Card key={title} className="flex h-full flex-col border-violet-200 dark:border-violet-900/60">
                  <div className="mb-5 flex items-start justify-between gap-4"><div className="rounded-xl bg-violet-100 p-3 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"><Icon className="size-6" aria-hidden="true" /></div><span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">Case completo</span></div>
                  <Heading level={3} className="mb-5 text-2xl">{title}</Heading>
                  <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"><p><span className="font-semibold text-zinc-800 dark:text-zinc-100">Problema: </span>{problem}</p><p><span className="font-semibold text-zinc-800 dark:text-zinc-100">Contribuição: </span>{contribution}</p><p className="text-xs text-zinc-500 dark:text-zinc-400">{evidence}</p></div>
                  <Link href={href} className="mt-8 inline-flex items-center gap-2 self-start rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:focus-visible:outline-violet-400">Explorar case <ArrowRight className="size-4" aria-hidden="true" /></Link>
                </Card>
              ))}
            </div>
          </section>
          <section className="border-t border-zinc-200 py-16 dark:border-zinc-800" aria-labelledby="future-initiatives-title">
            <div className="mb-8 max-w-3xl"><Heading id="future-initiatives-title" level={2}>Iniciativas futuras</Heading><Paragraph className="mt-4">Estas iniciativas permanecem visíveis como parte do programa, mas ainda não têm case publicado.</Paragraph></div>
            <div className="grid gap-6 md:grid-cols-2">
              {futureInitiatives.map(({ title, icon: Icon }) => <Card key={title} hoverEffect={false} aria-disabled="true" className="cursor-not-allowed border-dashed border-zinc-200 bg-zinc-50/40 opacity-70 dark:border-zinc-800 dark:bg-zinc-950/40"><div className="mb-5 flex items-start justify-between gap-4"><div className="rounded-xl bg-zinc-100 p-3 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400"><Icon className="size-6" aria-hidden="true" /></div><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">Em breve</span></div><Heading level={3} className="text-2xl text-zinc-600 dark:text-zinc-300">{title}</Heading></Card>)}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
