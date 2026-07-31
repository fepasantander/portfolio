"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { VisualEvidence } from "@/data/case-visual-evidence";

interface VisualEvidenceGalleryProps {
  title: string;
  description: string;
  cover: { src: string; alt: string };
  evidence: readonly VisualEvidence[];
}

const focusableSelector = [
  'button:not([disabled])',
  '[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function VisualEvidenceGallery({ title, description, cover, evidence }: VisualEvidenceGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentEvidence = evidence[currentIndex];
  const changeImage = useCallback((offset: number) => {
    setCurrentIndex((index) => (index + offset + evidence.length) % evidence.length);
  }, [evidence.length]);

  const closeDialog = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeImage(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        changeImage(1);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, changeImage]);

  if (!evidence.length) return null;

  return (
    <section aria-labelledby="visual-evidence-title" className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-7">
      <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.7fr)]">
        <div className="relative aspect-[20/11] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
          <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 768px) 100vw, 54vw" loading="lazy" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Experiência visual</p>
          <h2 id="visual-evidence-title" className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300"><Images aria-hidden="true" className="size-4 text-cyan-700 dark:text-cyan-300" />{evidence.length} telas aprovadas</span>
            <button ref={openerRef} type="button" onClick={() => { setCurrentIndex(0); setIsOpen(true); }} className="inline-flex min-h-11 items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-cyan-300 dark:focus-visible:ring-offset-zinc-950">
              Explorar a experiência
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" onMouseDown={closeDialog}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="visual-evidence-dialog-title" className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl" onMouseDown={(event) => event.stopPropagation()} onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)} onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX; if (touchStart !== null && end !== undefined && Math.abs(end - touchStart) > 48) changeImage(end < touchStart ? 1 : -1); setTouchStart(null); }}>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div>
                <h2 id="visual-evidence-dialog-title" className="font-medium text-white">{title}</h2>
                <p className="mt-1 text-sm text-zinc-300">{currentIndex + 1} de {evidence.length}</p>
              </div>
              <button ref={closeButtonRef} type="button" onClick={closeDialog} aria-label="Fechar visualização" className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black p-3 sm:p-6">
              <Image key={currentEvidence.src} src={currentEvidence.src} alt={currentEvidence.alt} width={2000} height={1100} sizes="100vw" className="max-h-[calc(100vh-12rem)] w-auto max-w-full object-contain" />
              <button type="button" onClick={() => changeImage(-1)} aria-label="Tela anterior" className="absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-lg transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:left-5"><ChevronLeft aria-hidden="true" className="size-5" /></button>
              <button type="button" onClick={() => changeImage(1)} aria-label="Próxima tela" className="absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-lg transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-5"><ChevronRight aria-hidden="true" className="size-5" /></button>
            </div>
            {currentEvidence.caption ? <p className="border-t border-white/10 px-5 py-3 text-sm text-zinc-300">{currentEvidence.caption}</p> : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
