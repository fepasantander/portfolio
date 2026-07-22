import { Circle } from "lucide-react";
import type { EditorialCase } from "@/data/editorial-model";

export function ProjectHighlights({ item }: { item: EditorialCase }) {
  const highlights = item.contribution.slice(0, 3).map((title, index) => ({ title, description: item.qualitativeResults[index] ?? item.summary }));

  return <section aria-labelledby="project-highlights-title" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><h2 id="project-highlights-title" className="sr-only">Project Highlights</h2>{highlights.map((highlight) => <article key={highlight.title} className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"><Circle aria-hidden="true" className="h-4 w-4 text-cyan-600" /><h3 className="mt-4 font-medium">{highlight.title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{highlight.description}</p></article>)}</section>;
}
