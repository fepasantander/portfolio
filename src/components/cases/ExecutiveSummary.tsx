import type { EditorialCase } from "@/data/editorial-model";

export function ExecutiveSummary({ item }: { item: EditorialCase }) {
  return <section aria-labelledby="executive-summary-title" className="grid gap-6 border-y border-zinc-200 py-10 sm:grid-cols-2 dark:border-zinc-800"><div><p className="text-xs uppercase tracking-[0.2em] text-cyan-600">Executive Summary</p><h2 id="executive-summary-title" className="mt-3 text-3xl font-semibold">Visão executiva</h2></div><div className="grid gap-5 text-sm"><div><strong>Contexto</strong><p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.context[0]}</p></div><div><strong>Desafio</strong><p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.problem[0]}</p></div><div><strong>Minha atuação</strong><p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.contribution.join(" · ")}</p></div><div><strong>Resultado</strong><p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.qualitativeResults[0]}</p></div></div></section>;
}
