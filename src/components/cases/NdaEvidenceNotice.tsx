import { LockKeyhole } from "lucide-react";

export function NdaEvidenceNotice() {
  return (
    <section aria-labelledby="nda-evidence-title" className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
      <div className="flex max-w-3xl gap-4">
        <LockKeyhole aria-hidden="true" className="mt-1 size-5 shrink-0 text-cyan-700 dark:text-cyan-300" />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Confidencialidade</p>
          <h2 id="nda-evidence-title" className="mt-3 text-2xl font-semibold tracking-tight">Evidências visuais protegidas por NDA</h2>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">Este projeto contém interfaces, jornadas e decisões estratégicas protegidas por acordo de confidencialidade.</p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">Por esse motivo as telas não são exibidas publicamente.</p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">O conteúdo abaixo descreve meu papel, decisões de produto, processo e resultados obtidos.</p>
        </div>
      </div>
    </section>
  );
}
