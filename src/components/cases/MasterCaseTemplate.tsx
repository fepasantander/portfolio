"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { EditorialCase } from "@/data/editorial-model";
import { CaseNavigation } from "./CaseNavigation";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { NdaEvidenceNotice } from "./NdaEvidenceNotice";
import { ProjectHighlights } from "./ProjectHighlights";
import { VisualEvidenceGallery } from "./VisualEvidenceGallery";
import {
  eventosVmCover,
  eventosVmVisualEvidence,
  divaCover,
  divaVisualEvidence,
  hubCorrecoesCover,
  hubCorrecoesVisualEvidence,
  renegociacaoCover,
  renegociacaoVisualEvidence,
  revistasVmCover,
  revistasVmVisualEvidence,
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
  const isRenegociacao = item.slug === "renegociacao";
  const isRevistasVm = item.slug === "revistas-vm";
  const isEventosVm = item.slug === "eventos-vm";
  const isDiva = item.slug === "diva";
  const hasNdaEvidence = ["sofia", "odonto1", "biblioteca-virtual-ppc", "curricularizacao-extensao", "autonomia-docencia", "cdc", "kgc", "gestao-multiunidades"].includes(item.slug);
  const isEvidenceHidden = ["vitruchat", "sofia", "hub-correcoes", "odonto1", "renegociacao", "revistas-vm", "eventos-vm", "diva", "biblioteca-virtual-ppc", "curricularizacao-extensao", "autonomia-docencia", "cdc", "kgc", "gestao-multiunidades"].includes(item.slug);
  const caseLabel = item.slug === "sofia" ? "SofIA" : item.slug === "hub-correcoes" ? "Hub de Correções" : isOdonto1 ? "Odonto1" : isRenegociacao ? "Renegociação" : isRevistasVm ? "Revistas VM" : isEventosVm ? "Eventos VM" : isDiva ? "Diva" : item.slug === "biblioteca-virtual-ppc" ? "Biblioteca Virtual – PPC" : item.slug === "curricularizacao-extensao" ? "Curricularização da Extensão" : item.slug === "autonomia-docencia" ? "Autonomia Docência" : item.slug === "cdc" ? "CDC" : item.slug === "kgc" ? "KGC" : item.slug === "gestao-multiunidades" ? "Gestão Multiunidades" : "VitruChat";
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
      {isHubCorrecoes ? (
        <section className="border-l-2 border-cyan-500 bg-cyan-50/60 px-7 py-8 dark:bg-cyan-950/20" aria-labelledby="hub-pcd-title">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Pesquisa</p>
          <h2 id="hub-pcd-title" className="mt-3 text-3xl font-semibold">Como a pesquisa revelou necessidades invisíveis</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300">Entrevistas com pessoas envolvidas na avaliação trouxeram situações de estudantes PCD que poderiam permanecer ocultas em um desenvolvimento orientado apenas por fluxo e tecnologia. Esse aprendizado orientou a discussão de guard rails, acessibilidade e transparência como parte da experiência.</p>
        </section>
      ) : null}
      {isRenegociacao ? <VisualEvidenceGallery title="Por dentro da Renegociação" description="Uma visão da experiência construída para tornar regras financeiras, opções de negociação e próximos passos mais claros para o estudante." cover={renegociacaoCover} evidence={renegociacaoVisualEvidence} /> : null}
      {isRevistasVm ? <VisualEvidenceGallery title="Por dentro das Revistas VM" description="Uma seleção de superfícies editoriais que materializa a integração entre publicação impressa, presença digital e descoberta de conteúdo." cover={revistasVmCover} evidence={revistasVmVisualEvidence} /> : null}
      {isEventosVm ? <VisualEvidenceGallery title="Por dentro dos Eventos VM" description="Uma seleção de superfícies digitais para congressos e experiências de relacionamento do ecossistema VM." cover={eventosVmCover} evidence={eventosVmVisualEvidence} /> : null}
      {isDiva ? (
        <>
          <aside className="border-l-2 border-cyan-500 bg-cyan-50/60 px-7 py-8 dark:bg-cyan-950/20" aria-labelledby="diva-visual-notice-title">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Nota editorial</p>
            <h2 id="diva-visual-notice-title" className="mt-3 text-2xl font-semibold">Interfaces ilustrativas</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300">As interfaces completas do Diva estão protegidas por acordo de confidencialidade. As imagens exibidas a seguir foram capturadas em baixa resolução a partir de vídeos públicos do canal oficial da Carenet no YouTube e têm finalidade exclusivamente ilustrativa.</p>
            <p className="mt-3 max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300">A narrativa deste Case concentra-se na atuação de UX, nas decisões de projeto e no processo que apoiou a evolução do produto.</p>
          </aside>
          <VisualEvidenceGallery title="Por dentro do Diva" description="Uma seleção de telas aprovadas que evidencia a evolução da experiência, dos fluxos e dos padrões de interface do produto." cover={divaCover} evidence={divaVisualEvidence} />
        </>
      ) : null}
      {hasNdaEvidence ? <NdaEvidenceNotice /> : null}
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

      {isRenegociacao ? (
        <section className="border-l-2 border-magenta-500 bg-zinc-50 px-7 py-8 dark:bg-zinc-900/40" aria-labelledby="design-track-title">
          <p className="text-xs uppercase tracking-[0.2em] text-magenta-600">Processo</p>
          <h2 id="design-track-title" className="mt-3 text-3xl font-semibold">Esteira de Design</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Levantamento de Requisitos Funcionais", "Levantamento de Requisitos Não Funcionais", "Regras de Negócio", "Entrevistas em Profundidade", "Fluxogramas", "Mapa de Empatia", "Matriz CSD", "Painel Semântico", "Timeline de Entregas"].map((item) => <li key={item} className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-700">{item}</li>)}
          </ul>
        </section>
      ) : null}

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
