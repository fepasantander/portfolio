import Link from "next/link";

export interface BreadcrumbItem { label: string; href?: string; }

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500 dark:text-zinc-400"><ol className="flex flex-wrap items-center gap-x-2 gap-y-1"><li><Link href="/" className="hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50">Início</Link></li>{items.map((item) => <li key={item.label} className="flex items-center gap-2"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href} className="hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50">{item.label}</Link> : <span aria-current="page" className="text-zinc-900 dark:text-zinc-100">{item.label}</span>}</li>)}</ol></nav>;
}
