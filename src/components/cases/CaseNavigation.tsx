import Link from "next/link";
import { portfolioCases } from "@/data/portfolio-content";

export function CaseNavigation({ slug }: { slug: string }) {
  const index = portfolioCases.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? portfolioCases[index - 1] : undefined;
  const next = index >= 0 ? portfolioCases[index + 1] : undefined;
  return <nav aria-label="Navegação entre cases" className="flex flex-wrap gap-4"><Link href="/cases" className="underline underline-offset-4">Voltar aos Cases</Link>{previous && <Link href={`/cases/${previous.slug}`} className="underline underline-offset-4">Case anterior</Link>}{next && <Link href={`/cases/${next.slug}`} className="underline underline-offset-4">Próximo case</Link>}</nav>;
}
