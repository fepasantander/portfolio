import Link from "next/link";

type ProductTransformationJournalProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  onClick?: () => void;
};

export function ProductTransformationJournal({ title, description, buttonLabel, href, onClick }: ProductTransformationJournalProps) {
  return <section aria-labelledby="product-transformation-journal-title" className="relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-zinc-950 p-8 text-white shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_20px_60px_rgba(8,145,178,0.12)] sm:p-12"><div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" /><div className="relative max-w-3xl"><p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Product Transformation Journal</p><h2 id="product-transformation-journal-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2><p className="mt-5 max-w-2xl leading-relaxed text-zinc-300">{description}</p><Link href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="mt-8 inline-flex rounded-md bg-cyan-300 px-5 py-3 font-medium text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_28px_rgba(34,211,238,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">{buttonLabel}</Link></div></section>;
}
