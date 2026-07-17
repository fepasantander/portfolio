"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, FileCheck2, Image as ImageIcon, Sparkles, X } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

interface EvidenceImage {
  src: string;
  alt: string;
  caption: string;
}

interface EvidenceGroup {
  id: string;
  label: string;
  images: EvidenceImage[];
}

const imagePath = (folder: string, filename: string) => `/imagem/vitru/hub-correcoes/${folder}/${filename}`;

const evidenceGroups: EvidenceGroup[] = [
  {
    id: "arquitetura-dados",
    label: "Arquitetura e dados",
    images: [
      { src: imagePath("boards", "input-dados.png"), alt: "Board de dados de entrada", caption: "Fluxo de dados — entrada" },
      { src: imagePath("boards", "output-dados.png"), alt: "Board de dados de saída", caption: "Fluxo de dados — saída" },
    ],
  },
  {
    id: "home-indicadores",
    label: "Home e indicadores",
    images: [
      { src: imagePath("imagens-mocks", "home_busca.png"), alt: "Estrutura da Home do Hub de Correções", caption: "Estrutura da Home" },
      { src: imagePath("imagens-mocks", "metricas.png"), alt: "Tela de indicadores", caption: "Métricas" },
    ],
  },
  {
    id: "fluxo-correcao",
    label: "Fluxo de correção",
    images: [
      { src: imagePath("imagens-mocks", "provasDiscursivas_table.png"), alt: "Listagem de provas discursivas", caption: "Listagem de provas discursivas" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_table-filtrar.png"), alt: "Listagem de provas discursivas com filtro", caption: "Listagem com filtro" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_corrigir.png"), alt: "Tela de revisão da atividade", caption: "Tela de revisão da atividade" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_corrigir-criterios_correcao.png"), alt: "Critérios de avaliação", caption: "Critérios de Avaliação" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_corrigir-resposta_aluno.png"), alt: "Resposta do aluno", caption: "Resposta do aluno" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_corrigir-analise_plagio.png"), alt: "Análise de plágio", caption: "Análise de plágio" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_corrigir-feedback_atividade.png"), alt: "Feedback da atividade", caption: "Feedback da atividade" },
      { src: imagePath("imagens-mocks", "provasDiscursivas_corrigir-feedback_questoes.png"), alt: "Feedback por questão", caption: "Feedback por questão" },
    ],
  },
];

const evidenceImages = evidenceGroups.flatMap((group) => group.images.map((image) => ({ ...image, groupId: group.id, groupLabel: group.label })));
const highlightIndexes = [2, 6, 7, 8, 3, 0];

function ContentPreparation() {
  return <p className="text-sm text-zinc-500 dark:text-zinc-400">Conteúdo em preparação</p>;
}

function EvidenceSupport({ onOpenGallery }: { onOpenGallery: (index: number, event: React.MouseEvent<HTMLButtonElement>) => void }) {
  const highlights = highlightIndexes.map((index) => ({ image: evidenceImages[index], index }));

  return (
    <section className="space-y-5 border-t border-zinc-100 pt-6 dark:border-zinc-900" aria-labelledby="hub-correcoes-evidences-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Heading id="hub-correcoes-evidences-title" level={3} className="block text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Evidências e Apoio à Decisão (Anexos)</Heading>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{evidenceImages.length} evidências catalogadas em três grupos. Os layouts apoiam a leitura do case; não substituem sua narrativa.</p>
        </div>
        <button type="button" onClick={(event) => onOpenGallery(0, event)} className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"><ImageIcon className="size-4" aria-hidden="true" />Ver evidências visuais</button>
      </div>

      <div aria-labelledby="hub-correcoes-highlights-title">
        <Heading id="hub-correcoes-highlights-title" level={3} className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Destaques visuais selecionados</Heading>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {highlights.map(({ image, index }) => (
            <button key={image.src} type="button" onClick={(event) => onOpenGallery(index, event)} aria-label={`Abrir ${image.caption}`} className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 text-left transition-colors hover:border-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-cyan-400">
              <Image src={image.src} alt="" fill sizes="(min-width: 640px) 36vw, 90vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              <span className="absolute inset-x-0 bottom-0 bg-zinc-950/80 px-3 py-2 text-xs text-white">{image.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const sections = ["Contexto", "Problema", "Minha Atuação", "Processo", "Decisões de Produto", "Resultados", "Aprendizados"];

export default function HubCorrecoesPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const triggerRef = React.useRef<HTMLElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const activeImage = evidenceImages[activeImageIndex];
  const activeGroup = evidenceGroups.find((group) => group.id === activeImage.groupId) ?? evidenceGroups[0];
  const activeGroupImageIndex = activeGroup.images.findIndex((image) => image.src === activeImage.src) + 1;

  const openGallery = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget;
    setActiveImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  React.useEffect(() => {
    if (!isGalleryOpen) {
      triggerRef.current?.focus();
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeGallery();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImageIndex((index) => Math.max(0, index - 1));
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImageIndex((index) => Math.min(evidenceImages.length - 1, index + 1));
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;
      const focusableElements = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

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

            <EvidenceSupport onOpenGallery={openGallery} />

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

      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="gallery-title" aria-describedby="gallery-position" className="relative flex h-[90vh] w-[90vw] max-w-none flex-col overflow-hidden rounded-3xl border border-zinc-200/20 bg-zinc-950 p-4 shadow-2xl sm:p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-zinc-900 pb-4">
              <div><span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Hub de Correções — Anexo de Projeto</span><Heading id="gallery-title" level={3} className="m-0 text-lg font-semibold text-white sm:text-xl">Galeria de evidências</Heading></div>
              <button ref={closeButtonRef} type="button" onClick={closeGallery} className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400" aria-label="Fechar modal"><X className="size-5" aria-hidden="true" /></button>
            </div>
            <div className="flex min-h-0 flex-grow flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2" aria-label="Grupos de evidências">
                {evidenceGroups.map((group) => {
                  const groupStartIndex = evidenceImages.findIndex((image) => image.groupId === group.id);
                  return <button key={group.id} type="button" aria-pressed={activeGroup.id === group.id} onClick={() => setActiveImageIndex(groupStartIndex)} className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 aria-pressed:border-cyan-400 aria-pressed:bg-cyan-400/10 aria-pressed:text-cyan-200">{group.label}</button>;
                })}
              </div>
              <p id="gallery-position" className="text-xs text-zinc-400" aria-live="polite">Grupo atual: {activeGroup.label} · {activeGroupImageIndex} de {activeGroup.images.length} · Total: {activeImageIndex + 1} de {evidenceImages.length}</p>
              <figure className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-2 sm:p-4">
                <div className="relative min-h-0 w-full flex-1"><Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" className="object-contain" priority /></div>
                <figcaption className="pt-3 text-center text-sm font-medium text-zinc-200" aria-live="polite">{activeImage.caption}</figcaption>
              </figure>
              <div className="flex items-center justify-between gap-4">
                <button type="button" onClick={() => setActiveImageIndex((index) => Math.max(0, index - 1))} disabled={activeImageIndex === 0} className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft className="size-4" aria-hidden="true" />Anterior</button>
                <button type="button" onClick={() => setActiveImageIndex((index) => Math.min(evidenceImages.length - 1, index + 1))} disabled={activeImageIndex === evidenceImages.length - 1} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-40">Próxima<ChevronRight className="size-4" aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
