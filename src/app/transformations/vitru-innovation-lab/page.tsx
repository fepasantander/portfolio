import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, Cpu, FileCheck2, Search, Sparkles } from "lucide-react";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

const objectives = [
  "Aumentar a produtividade de equipes internas.",
  "Reduzir riscos associados ao uso de Inteligência Artificial.",
  "Acelerar processos de inovação.",
  "Criar novos produtos e experiências digitais.",
  "Preparar a organização para uma estratégia mais ampla de IA.",
];

const principles = [
  "Entender profundamente o problema antes de propor soluções.",
  "Conectar Produto, Negócio e Engenharia.",
  "Estruturar experiências que possam crescer ao longo do tempo.",
  "Reduzir retrabalho futuro.",
  "Transformar complexidade em clareza.",
];

export default function VitruInnovationLabPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main className="flex-grow pb-24 pt-32">
        <Container>
          <Link href="/journal" target="_blank" rel="noopener noreferrer" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-300 dark:hover:text-violet-400">
            <ArrowLeft className="size-4" aria-hidden="true" /> Voltar para Transformações
          </Link>

          <section aria-labelledby="program-title" className="border-b border-zinc-200 pb-16 dark:border-zinc-800">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">Hub de Transformação • Vitru Educação</p>
            <Heading id="program-title" level={1} className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl">Innovation Lab — Construindo Capacidades em Inteligência Artificial Generativa</Heading>
            <Paragraph className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">Programa de Transformação • 2025–2026</Paragraph>
          </section>

          <section aria-labelledby="summary-title" className="py-16">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div>
                <Heading id="summary-title" level={2} className="mb-7">Executive Summary</Heading>
                <Paragraph className="mb-5 max-w-3xl text-lg">O Innovation Lab nasceu com uma missão clara:</Paragraph>
                <Paragraph className="mb-5 max-w-3xl text-lg font-medium text-zinc-900 dark:text-zinc-100">Preparar a Vitru para uma nova geração de produtos digitais baseados em Inteligência Artificial.</Paragraph>
                <Paragraph className="mb-5 max-w-3xl">Mais do que desenvolver projetos isolados, o programa buscava construir capacidades organizacionais que permitissem explorar IA Generativa de forma responsável, escalável e conectada à estratégia da empresa.</Paragraph>
                <Paragraph className="max-w-3xl">Minha participação ocorreu em diferentes iniciativas do programa, ajudando a conectar Produto, Negócio e Engenharia em torno de soluções que poderiam evoluir ao longo do tempo.</Paragraph>
              </div>
              <Card hoverEffect={false} className="h-fit border-violet-200 bg-violet-50/60 dark:border-violet-900/60 dark:bg-violet-950/20">
                <dl className="space-y-5 text-sm">
                  <div><dt className="mb-1 text-zinc-500 dark:text-zinc-400">Empresa</dt><dd className="font-semibold">Vitru Educação</dd></div>
                  <div><dt className="mb-1 text-zinc-500 dark:text-zinc-400">Programa</dt><dd className="font-semibold">Innovation Lab</dd></div>
                  <div><dt className="mb-1 text-zinc-500 dark:text-zinc-400">Período</dt><dd className="font-semibold">2025–2026</dd></div>
                </dl>
              </Card>
            </div>
          </section>

          <section aria-labelledby="context-title" className="border-y border-zinc-200 py-16 dark:border-zinc-800"><div className="max-w-3xl">
            <Heading id="context-title" level={2} className="mb-7">Contexto</Heading>
            <Paragraph className="mb-5">A popularização dos modelos de linguagem de grande escala, conhecidos como LLMs, mudou rapidamente o cenário de tecnologia e educação.</Paragraph>
            <Paragraph className="mb-5">Ferramentas baseadas em IA passaram a ser capazes de produzir textos, corrigir conteúdos, resumir informações e apoiar pesquisas.</Paragraph>
            <Paragraph className="mb-5">Ao mesmo tempo, surgiram desafios importantes relacionados a segurança, governança, produtividade e confiabilidade.</Paragraph>
            <Paragraph>A Vitru criou o Innovation Lab para explorar essas oportunidades de forma estruturada.</Paragraph>
          </div></section>

          <section aria-labelledby="objectives-title" className="py-16">
            <Heading id="objectives-title" level={2} className="mb-7">Objetivos do Programa</Heading>
            <ul className="grid gap-4 md:grid-cols-2" role="list">{objectives.map((objective) => <li key={objective} className="flex items-start gap-3 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-violet-600 dark:text-violet-400" aria-hidden="true" /><span className="text-zinc-700 dark:text-zinc-200">{objective}</span></li>)}</ul>
          </section>

          <section aria-labelledby="contribution-title" className="border-y border-zinc-200 py-16 dark:border-zinc-800"><div className="max-w-3xl">
            <Heading id="contribution-title" level={2} className="mb-7">Minha Contribuição no Programa</Heading>
            <Paragraph className="mb-5">Minha atuação esteve relacionada à experiência de produto e à estruturação de soluções que precisavam evoluir rapidamente.</Paragraph>
            <Paragraph>O trabalho envolvia mais do que interface. Era necessário compreender como os produtos poderiam crescer, quais componentes poderiam ser reutilizados e como garantir que as soluções continuassem evoluindo após o primeiro lançamento.</Paragraph>
          </div></section>

          <section aria-labelledby="initiatives-title" className="py-16">
            <div className="mb-10 max-w-3xl"><Heading id="initiatives-title" level={2} className="mb-5">Produtos Desenvolvidos no Innovation Lab</Heading><Paragraph>O Innovation Lab deu origem a diferentes iniciativas. Cada uma explorava uma aplicação específica de Inteligência Artificial dentro da Vitru.</Paragraph></div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="flex h-full flex-col border-violet-200 dark:border-violet-900/60"><div className="mb-5 flex items-start justify-between gap-4"><div className="rounded-xl bg-violet-100 p-3 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"><Sparkles className="size-6" aria-hidden="true" /></div><span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">Case disponível</span></div><Heading level={3} className="mb-4 text-2xl">VitruChat</Heading><Paragraph className="mb-5">Plataforma corporativa de Inteligência Artificial Generativa criada para colaboradores da Vitru.</Paragraph><div className="mb-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-300"><p>Foco: produtividade, governança e alfabetização em IA.</p><p>O produto permitia que colaboradores utilizassem modelos de linguagem de forma segura dentro do ambiente corporativo.</p></div><Link href="/transformations/vitru-oportunidades-tecnologicas" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 self-start text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-100">Explorar Case Completo <ArrowRight className="size-4" aria-hidden="true" /></Link></Card>
              <Card hoverEffect={false} className="flex h-full flex-col"><div className="mb-5 flex items-start justify-between gap-4"><div className="rounded-xl bg-zinc-100 p-3 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"><Brain className="size-6" aria-hidden="true" /></div><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Case em desenvolvimento</span></div><Heading level={3} className="mb-4 text-2xl">SofIA</Heading><Paragraph>Assistente baseada em Inteligência Artificial voltada para apoiar a experiência educacional.</Paragraph></Card>
              <Card hoverEffect={false} className="flex h-full flex-col"><div className="mb-5 flex items-start justify-between gap-4"><div className="rounded-xl bg-zinc-100 p-3 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"><FileCheck2 className="size-6" aria-hidden="true" /></div><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Case em desenvolvimento</span></div><Heading level={3} className="mb-4 text-2xl">Hub de Correções</Heading><Paragraph>Iniciativa voltada para apoiar processos acadêmicos de correção utilizando Inteligência Artificial.</Paragraph></Card>
              <Card hoverEffect={false} className="flex h-full flex-col"><div className="mb-5 flex items-start justify-between gap-4"><div className="rounded-xl bg-zinc-100 p-3 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"><Search className="size-6" aria-hidden="true" /></div><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Iniciativa do programa</span></div><Heading level={3} className="mb-4 text-2xl">Pesquisa Corporativa sobre IA</Heading><Paragraph className="mb-5">A pesquisa buscava entender como profissionais da Vitru utilizavam Inteligência Artificial, quais eram suas expectativas e quais oportunidades poderiam surgir dentro da organização.</Paragraph><Paragraph>O projeto acabou sendo despriorizado, mas ajudou a estruturar uma visão inicial sobre como IA poderia apoiar decisões futuras.</Paragraph></Card>
            </div>
          </section>

          <section aria-labelledby="principles-title" className="border-y border-zinc-200 py-16 dark:border-zinc-800"><div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"><div><Heading id="principles-title" level={2} className="mb-6">Como Eu Procuro Contribuir</Heading><Paragraph>Em projetos de inovação, procuro trabalhar a partir de alguns princípios:</Paragraph></div><ul className="space-y-4" role="list">{principles.map((principle) => <li key={principle} className="flex gap-3 text-zinc-700 dark:text-zinc-200"><Cpu className="mt-0.5 size-5 shrink-0 text-violet-600 dark:text-violet-400" aria-hidden="true" /><span>{principle}</span></li>)}</ul></div></section>

          <section aria-labelledby="result-title" className="py-16"><div className="max-w-3xl"><Heading id="result-title" level={2} className="mb-7">Resultado do Programa</Heading><Paragraph className="mb-5">O Innovation Lab ajudou a consolidar uma nova forma de pensar produtos digitais dentro da Vitru.</Paragraph><Paragraph className="mb-5">Mais do que criar soluções específicas, o programa contribuiu para que a Inteligência Artificial passasse a ser vista como uma ferramenta de transformação organizacional.</Paragraph><Paragraph>Os aprendizados gerados pelo programa continuaram influenciando projetos futuros dentro da empresa.</Paragraph></div></section>

          <section aria-labelledby="navigation-title" className="rounded-2xl bg-zinc-100 px-6 py-10 dark:bg-zinc-900 sm:px-10"><div className="max-w-3xl"><Heading id="navigation-title" level={2} className="mb-5 text-3xl">Navegação do Programa</Heading><Paragraph className="mb-7">Esta página funciona como porta de entrada para os Cases do Innovation Lab. Cada produto apresentado aqui faz parte do mesmo programa de transformação.</Paragraph><Link href="/transformations/vitru-oportunidades-tecnologicas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">Acessar o Case Completo do VitruChat <ArrowRight className="size-4" aria-hidden="true" /></Link></div></section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
