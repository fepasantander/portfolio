"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { EditorialCase } from "@/data/editorial-model";
import { CaseNavigation } from "./CaseNavigation";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { ProjectHighlights } from "./ProjectHighlights";
import { VisualEvidenceGallery } from "./VisualEvidenceGallery";
import {
  hubCorrecoesCover,
  hubCorrecoesVisualEvidence,
  vitruChatCover,
  vitruChatVisualEvidence,
} from "@/data/case-visual-evidence";

const odonto1Brands = ["Odonto1", "ImplantNews", "PerioNews", "Ortodontia SPO", "IN Congress", "Orto Congress"];

export function MasterCaseTemplate({ item }: { item: EditorialCase }) {
  const [evidenceIndex, setEvidenceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const isVitruChat = item.slug === "vitruchat";
  const isHubCorrecoes = item.slug === "hub-correcoes";
  const isOdonto1 = item.slug === "odonto1";
  const isEvidenceHidden = ["vitruchat", "sofia", "hub-correcoes", "odonto1"].includes(item.slug);
  const caseLabel = item.slug === "sofia" ? "SofIA" : item.slug === "hub-correcoes" ? "Hub de Correções" : isOdonto1 ? "Odonto1" : "VitruChat";
  const hero = item.heroImage;
  const changeEvidence = (offset: number) => {
    setEvidenceIndex((current) => (current + offset + item.evidence.length) % item.evidence.length);
  };

  return (
    <article className="mx-auto max-w-5xl space-y-16 px-5 py-24 sm:px-8">
      <header className="space-y-6">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 dark:hover:text-white">Home</Link>
          <span className="px-2" aria-hidden="true">›</span>
          <span aria-current="page">{caseLabel}</span>
        </nav>
        <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-7 sm:p-12 dark:border-zinc-800">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/20" />
          <div className="relative flex min-h-[370px] max-w-3xl flex-col justify-end text-white">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">{item.category} · {item.company} · {item.period}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{item.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-200">{item.summary}</p>
            <p className="mt-5 text-sm text-zinc-300">{item.contribution.slice(0, 3).join(" · ")}</p>
          </div>
        </div>
        <Link href="/" target="_blank" rel="noopener noreferrer" className="inline-flex font-medium underline underline-offset-4">← Voltar para Home</Link>
      </header>

      <ExecutiveSummary item={item} />
      {isVitruChat ? <VisualEvidenceGallery title="Por dentro do VitruChat" description="Uma visão da experiência construída — fluxos, decisões de interface e diferentes momentos do produto." cover={vitruChatCover} evidence={vitruChatVisualEvidence} /> : null}
      {isHubCorrecoes ? <VisualEvidenceGallery title="Por dentro do Hub de Correções" description="Uma visão da experiência construída para apoiar correção, revisão humana, rastreabilidade e decisões pedagógicas ao longo do fluxo." cover={hubCorrecoesCover} evidence={hubCorrecoesVisualEvidence} /> : null}
      <ProjectHighlights item={item} />

      <section className="max-w-3xl space-y-5">
        <h2 className="text-3xl font-semibold">Contexto</h2>
        {item.context.map((text) => <p key={text} className="leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>)}
      </section>

      <section className="border-l-2 border-yellow-400 bg-zinc-50 px-7 py-8 dark:bg-zinc-900/40">
        <h2 className="text-3xl font-semibold">Problema</h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed marker:text-yellow-500">
          {item.problem.map((text) => <li key={text}>{text}</li>)}
        </ul>
      </section>

      <section className="grid gap-8 border-y border-zinc-200 py-12 md:grid-cols-[0.7fr_1.3fr] dark:border-zinc-800">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-magenta-600">Responsabilidades</p>
          <h2 className="mt-3 text-3xl font-semibold">Minha Atuação e Processo de Discovery</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {item.contribution.map((text) => <li key={text} className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-700">{text}</li>)}
        </ul>
      </section>

      <section className="max-w-3xl">
        <h2 className="text-3xl font-semibold">Solução</h2>
        <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">{item.solution}</p>
      </section>

      <section className="bg-zinc-950 p-8 text-white sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Impacto</p>
        <h2 className="mt-3 text-3xl font-semibold">Resultados</h2>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {[...item.quantitativeResults, ...item.qualitativeResults].map((text) => <li key={text} className="rounded-lg border border-zinc-700 bg-zinc-900/60 p-5 text-zinc-100">{text}</li>)}
        </ul>
      </section>

      {isOdonto1 ? (
        <section>
          <h2 className="text-3xl font-semibold">Marcas relacionadas</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {odonto1Brands.map((brand) => <div key={brand} className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">{brand}</div>)}
          </div>
        </section>
      ) : !isEvidenceHidden && (
        <section>
          <h2 className="text-3xl font-semibold">Evidências</h2>
          <div className="mt-6">
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800" tabIndex={0} aria-label="Galeria de evidências" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart !== null && Math.abs(event.changedTouches[0].clientX - touchStart) > 40) changeEvidence(event.changedTouches[0].clientX < touchStart ? 1 : -1); setTouchStart(null); }} onKeyDown={(event) => { if (event.key === "ArrowRight") changeEvidence(1); if (event.key === "ArrowLeft") changeEvidence(-1); }}>
              <Image src={item.evidence[evidenceIndex].src} alt={item.evidence[evidenceIndex].alt} width={1280} height={800} loading="lazy" sizes="(max-width: 1024px) 100vw, 1024px" className="aspect-video w-full object-contain" />
              <button type="button" aria-label="Evidência anterior" onClick={() => changeEvidence(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-zinc-950">←</button>
              <button type="button" aria-label="Próxima evidência" onClick={() => changeEvidence(1)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-zinc-950">→</button>
            </div>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{item.evidence[evidenceIndex].alt}</p>
          </div>
        </section>
      )}

      <section className="grid gap-6 border-y border-zinc-200 py-10 md:grid-cols-2 dark:border-zinc-800">
        <h2 className="text-3xl font-semibold">Stack</h2>
        <div className="space-y-3">{item.stack.map((group) => <p key={group.group} className="text-sm"><strong>{group.group}</strong><span className="text-zinc-500 dark:text-zinc-400"> — {group.items.join(", ")}</span></p>)}</div>
      </section>

      <section className="max-w-3xl border-l-2 border-cyan-500 pl-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-600">Reflexão</p>
        <h2 className="mt-3 text-3xl font-semibold">Principais Aprendizados</h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed marker:text-cyan-500">
          {(isOdonto1 ? ["A pesquisa com centenas de participantes transformou hipóteses em decisões orientadas por evidências.", "O posicionamento Premium depende de conteúdo, produto e relacionamento operando como uma única experiência.", "Inbound Marketing e RD Station estruturam segmentação, nutrição e recorrência sem perder relevância editorial.", "Upsell, cross-sell e retenção ganham consistência quando fortalecem todo o ecossistema digital."] : item.learnings).map((text) => <li key={text}>{text}</li>)}
        </ul>
      </section>

      <CaseNavigation slug={item.slug} />
    </article>
  );
}
