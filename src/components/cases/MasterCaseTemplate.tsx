"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { track } from "@/lib/analytics";
import type { EditorialCase } from "@/data/editorial-model";
import { CaseNavigation } from "./CaseNavigation";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { ProjectHighlights } from "./ProjectHighlights";

export function MasterCaseTemplate({ item, journalHref }: { item: EditorialCase; journalHref?: string }) {
  const [evidenceIndex, setEvidenceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const hero = item.slug === "vitruchat"
    ? { src: "/imagem/vitru/vitruchat/v2-light/Pastas_MenuClosed&PropOpen&PromptOpen.png", alt: "Interface do VitruChat com painel de prompts" }
    : item.heroImage;

  return (
    <article className="mx-auto max-w-5xl space-y-16 px-5 py-24 sm:px-8">
      <header className="space-y-6">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-950 dark:hover:text-white">Home</Link><span className="px-2" aria-hidden="true">›</span>
          <span className="px-2" aria-hidden="true">›</span><span aria-current="page">VitruChat</span>
        </nav>
        <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-7 sm:p-12 dark:border-zinc-800">
          <Image src={hero.src} alt={hero.alt} fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/20" />
          <div className="relative flex min-h-[370px] max-w-3xl flex-col justify-end text-white">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">{item.category} · {item.company} · {item.period}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{item.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-200">{item.summary}</p>
            <p className="mt-5 text-sm text-zinc-300">{item.contribution.slice(0, 3).join(" · ")}</p>
          </div>
        </div>
        <Link href="/" className="inline-flex font-medium underline underline-offset-4">← Voltar para Home</Link>
      </header>
      <ExecutiveSummary item={item} />
      <ProjectHighlights item={item} />
      <section className="max-w-3xl space-y-5"><h2 className="text-3xl font-semibold">Contexto</h2>{item.context.map((text) => <p key={text} className="leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>)}</section>
      <section className="border-l-2 border-yellow-400 bg-zinc-50 px-7 py-8 dark:bg-zinc-900/40"><h2 className="text-3xl font-semibold">Problema</h2><ul className="mt-5 space-y-3 leading-relaxed">{item.problem.map((text) => <li key={text}>{text}</li>)}</ul></section>
      <section className="grid gap-8 border-y border-zinc-200 py-12 md:grid-cols-[0.7fr_1.3fr] dark:border-zinc-800"><div><p className="text-xs uppercase tracking-[0.2em] text-magenta-600">Responsabilidades</p><h2 className="mt-3 text-3xl font-semibold">Minha Contribuição</h2></div><ul className="grid gap-3 sm:grid-cols-2">{item.contribution.map((text) => <li key={text} className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-700">{text}</li>)}</ul></section>
      <section className="max-w-3xl"><h2 className="text-3xl font-semibold">Solução</h2><p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">{item.solution}</p></section>
      <section className="bg-zinc-950 p-8 text-white sm:p-12"><p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Impacto</p><h2 className="mt-3 text-3xl font-semibold">Resultados</h2><ul className="mt-7 grid gap-4 sm:grid-cols-2">{[...item.quantitativeResults, ...item.qualitativeResults].map((text) => <li key={text} className="rounded-lg border border-zinc-700 bg-zinc-900/60 p-5 text-zinc-100">{text}</li>)}</ul></section>
      <section><h2 className="text-3xl font-semibold">Evidências</h2><div className="mt-6"><div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart === null) return; const delta = event.changedTouches[0].clientX - touchStart; if (Math.abs(delta) > 40) setEvidenceIndex((current) => (current + (delta < 0 ? 1 : item.evidence.length - 1)) % item.evidence.length); setTouchStart(null); }} tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowRight") setEvidenceIndex((current) => (current + 1) % item.evidence.length); if (event.key === "ArrowLeft") setEvidenceIndex((current) => (current + item.evidence.length - 1) % item.evidence.length); }} aria-label="Galeria de evidências"><Image src={item.evidence[evidenceIndex].src} alt={item.evidence[evidenceIndex].alt} width={1280} height={800} loading="lazy" className="aspect-video w-full object-contain" /><button type="button" aria-label="Evidência anterior" onClick={() => setEvidenceIndex((current) => (current + item.evidence.length - 1) % item.evidence.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-zinc-950 shadow-sm">←</button><button type="button" aria-label="Próxima evidência" onClick={() => setEvidenceIndex((current) => (current + 1) % item.evidence.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-zinc-950 shadow-sm">→</button></div><p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{item.evidence[evidenceIndex].alt}</p><div className="mt-4 flex gap-2" aria-label="Indicadores da galeria">{item.evidence.map((asset, index) => <button type="button" key={asset.src} aria-label={`Ir para evidência ${index + 1}`} aria-current={index === evidenceIndex} onClick={() => setEvidenceIndex(index)} className={`h-2 rounded-full ${index === evidenceIndex ? "w-6 bg-cyan-500" : "w-2 bg-zinc-300 dark:bg-zinc-700"}`} />)}</div></div></section>
      <section className="grid gap-6 border-y border-zinc-200 py-10 md:grid-cols-2 dark:border-zinc-800"><h2 className="text-3xl font-semibold">Stack</h2><div className="space-y-3">{item.stack.map((group) => <p key={group.group} className="text-sm"><strong>{group.group}</strong><span className="text-zinc-500 dark:text-zinc-400"> — {group.items.join(", ")}</span></p>)}</div></section>
      <section className="max-w-3xl border-l-2 border-cyan-500 pl-6"><p className="text-xs uppercase tracking-[0.2em] text-cyan-600">Reflexão</p><h2 className="mt-3 text-3xl font-semibold">Principais Aprendizados</h2><ul className="mt-5 space-y-3 leading-relaxed">{item.learnings.map((text) => <li key={text}>{text}</li>)}</ul></section>
      {journalHref && <section className="border-y border-zinc-200 py-12 dark:border-zinc-800"><div className="max-w-3xl"><p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600">Product Transformation Journal</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Decisões que continuam além do Case.</h2><p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">Este Case apresenta o resultado e as escolhas principais. O Product Transformation Journal registra como essas decisões foram construídas ao longo do processo.</p><ul className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2 dark:text-zinc-300"><li>Discovery e arquitetura</li><li>Trade-offs de produto</li><li>Experiência e acessibilidade</li><li>Evidências completas</li></ul><Link href={journalHref} onClick={() => track("journal_cta", { case_slug: item.slug })} className="mt-8 inline-flex rounded-md bg-zinc-950 px-5 py-3 font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950">Explorar o Product Transformation Journal</Link><p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">Uma leitura complementar para quem quer entender o processo, não apenas o resultado.</p></div></section>}
      <CaseNavigation slug={item.slug} />
    </article>
  );
}
