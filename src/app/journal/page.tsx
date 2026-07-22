import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";
import { publishedJournalCases } from "@/lib/portfolio-navigation";

export const metadata: Metadata = { title: "Journal | Felipe Santander", description: "Decisões, processos e evidências por trás das transformações de produto.", alternates: { canonical: "/journal" } };

export default function JournalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Journal" }]} />
          <section aria-labelledby="journal-title" className="max-w-3xl">
            <h1 id="journal-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Product Transformation Journal</h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">O Portfolio mostra resultados. O Journal mostra decisões.</p>
          </section>
          <nav aria-label="Cases publicados no Journal" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publishedJournalCases.map((caseItem) => (
              <Link key={caseItem.href} href={caseItem.href} className="rounded-lg border border-zinc-200 p-5 font-medium hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:hover:border-zinc-500">
                {caseItem.label}
              </Link>
            ))}
          </nav>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
