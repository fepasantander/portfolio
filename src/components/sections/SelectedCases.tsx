"use client";

import { useEffect, useMemo, useRef, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { publishedPortfolioCases } from "@/data/case-production-pipeline";
import { portfolioCatalog, type PortfolioCatalogEntry } from "@/data/portfolio-curation";
import { Container } from "../ui/Container";

const carouselCycles = [0, 1, 2];

type PortfolioCard = PortfolioCatalogEntry & {
  href?: string;
  summary?: string;
};

function CaseCard({ item, hiddenClone }: { item: PortfolioCard; hiddenClone: boolean }) {
  const href = item.href;
  const openCaseInNewTab = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== "Enter" || !href) return;
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };
  const content = <>
    <div className="relative aspect-[16/8] overflow-hidden bg-black">
      <Image src={item.thumbnail.src} alt={item.thumbnail.alt} fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 48vw, 42vw" className={`transition-transform duration-500 group-hover:scale-[1.025] ${item.id === "sofia" ? "object-contain p-3 object-top" : "object-cover"}`} />
    </div>
    <div className="border-t-2 border-transparent p-5 transition-colors duration-300 group-hover:border-[#00ffff]">
      <p className="text-xs uppercase tracking-wider text-zinc-500">{item.company}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.label}</h3>
      {item.status === "published" && item.summary ? <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.summary}</p> : <p className="mt-3 inline-flex rounded-full border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">Work in progress</p>}
      {href ? <Link data-case-link href={href} target="_blank" rel="noopener noreferrer" tabIndex={hiddenClone ? -1 : undefined} onPointerDown={(event) => event.stopPropagation()} onKeyDown={openCaseInNewTab} className="mt-5 inline-flex text-sm font-medium text-cyan-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 dark:text-cyan-300 dark:focus-visible:ring-offset-black">Ver case <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span></Link> : <span className="mt-5 inline-flex text-sm font-medium text-zinc-500 dark:text-zinc-400">Em preparação</span>}
    </div>
  </>;

  const cardClass = "group w-[86vw] shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#00ffff] hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 motion-reduce:transform-none sm:w-[70vw] md:w-[48vw] lg:w-[42%]";

  return <article data-case-card aria-hidden={hiddenClone || undefined} className={`${cardClass} ${item.href ? "" : "cursor-default"}`}>{content}</article>;
}

export default function SelectedCases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ pointerId: -1, startX: 0, startScrollLeft: 0, moved: false });
  const catalog = useMemo<PortfolioCard[]>(() => {
    const publishedBySlug = new Map(publishedPortfolioCases.map((item) => [item.slug, item]));

    return [...portfolioCatalog]
      .sort((a, b) => a.order - b.order)
      .map((entry) => {
        const published = entry.publishedCaseSlug ? publishedBySlug.get(entry.publishedCaseSlug) : undefined;

        return { ...entry, href: published ? `/cases/${published.slug}` : undefined, summary: published?.summary };
      });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const frame = window.requestAnimationFrame(() => {
      track.scrollLeft = track.scrollWidth / carouselCycles.length;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const normalizeLoop = () => {
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = track.scrollWidth / carouselCycles.length;
    if (track.scrollLeft < cycleWidth * 0.25) track.scrollLeft += cycleWidth;
    if (track.scrollLeft > cycleWidth * 1.75) track.scrollLeft -= cycleWidth;
  };

  const moveByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-case-card]");
    track.scrollBy({ left: direction * (card ? card.offsetWidth + 20 : track.clientWidth * 0.42), behavior: "smooth" });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { pointerId: event.pointerId, startX: event.clientX, startScrollLeft: track.scrollLeft, moved: false };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || drag.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 6) drag.moved = true;
    track.scrollLeft = drag.startScrollLeft - delta;
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== event.pointerId) return;
    dragRef.current.pointerId = -1;
    normalizeLoop();
  };

  return (
    <section id="cases" aria-labelledby="cases-title" className="overflow-hidden py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Portfolio</p>
            <h2 id="cases-title" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Atuação como especialista</h2>
          </div>
          <div className="flex gap-3" aria-label="Navegação dos Cases">
            <button type="button" onClick={() => moveByCard(-1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-900 transition-colors hover:border-[#00ffff] hover:bg-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-50 dark:focus-visible:ring-offset-black" aria-label="Case anterior"><ArrowLeft aria-hidden="true" className="h-5 w-5" /></button>
            <button type="button" onClick={() => moveByCard(1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-900 transition-colors hover:border-[#00ffff] hover:bg-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-50 dark:focus-visible:ring-offset-black" aria-label="Próximo Case"><ArrowRight aria-hidden="true" className="h-5 w-5" /></button>
          </div>
        </div>
      </Container>
      <div ref={trackRef} role="region" aria-label="Cases do Portfolio" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); moveByCard(-1); } if (event.key === "ArrowRight") { event.preventDefault(); moveByCard(1); } }} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerEnd} onPointerCancel={handlePointerEnd} onScroll={normalizeLoop} className="mt-10 flex cursor-grab gap-5 overflow-x-auto px-5 pb-4 outline-none select-none focus-visible:ring-2 focus-visible:ring-[#00ffff] sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2))] active:cursor-grabbing" style={{ touchAction: "pan-y" }}>
        {carouselCycles.flatMap((cycle) => catalog.map((item) => <CaseCard key={`${cycle}-${item.id}`} item={item} hiddenClone={cycle !== 1} />))}
      </div>
    </section>
  );
}
