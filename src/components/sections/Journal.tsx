import Link from "next/link";
import { Container } from "../ui/Container";

export default function Journal() {
  return <section aria-labelledby="journal-title" className="py-20"><Container><div className="max-w-2xl"><h2 id="journal-title" className="text-2xl font-semibold tracking-tight">Product Transformation Journal</h2><p className="mt-3 text-zinc-600 dark:text-zinc-400">O Portfolio mostra resultados. O Journal mostra decisões.</p><Link href="/journal" className="mt-6 inline-flex font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">Explorar o Journal</Link></div></Container></section>;
}
