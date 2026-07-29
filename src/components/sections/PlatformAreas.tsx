import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { platformAreaAccents, platformAreas } from "@/lib/platform-navigation";

export function PlatformAreas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="border-y border-zinc-100 py-24 dark:border-zinc-900">
      <Container>
        <div className="max-w-3xl">
          <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Três caminhos</span>
          <Heading level={2} id="areas-title">Encontre o contexto certo para a sua próxima decisão.</Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">Uma única marca, com portas claras para diferentes intenções de leitura e colaboração.</Paragraph>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {platformAreas.map((area, index) => {
            const accent = platformAreaAccents[area.id];

            return (
              <Link key={area.id} href={area.href} target="_blank" rel="noopener noreferrer" className={`group relative isolate flex min-h-80 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white p-7 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-4 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-offset-black motion-reduce:transform-none ${accent.borderClass}`}>
                <span aria-hidden="true" className={`pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-72 w-[135%] -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30 group-focus-visible:opacity-30 motion-reduce:transition-none ${accent.glowClass}`} />
                <span aria-hidden="true" className={`pointer-events-none absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none ${accent.glowClass}`} />
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{area.label}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{area.description}</p>
                <p className="mt-6 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{area.audienceLabel}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-zinc-950 dark:text-zinc-50">Explorar área <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default PlatformAreas;
