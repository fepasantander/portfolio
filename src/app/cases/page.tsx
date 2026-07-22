import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";
import { publishedPortfolioCases } from "@/data/case-production-pipeline";

export const metadata: Metadata = { title: "Cases | Felipe Santander", description: "Cases de Product Design, UX e estratégia de produto de Felipe Santander.", alternates: { canonical: "/cases" } };

export default function CasesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Cases" }]} />
          <section aria-labelledby="cases-title">
            <h1 id="cases-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Cases</h1>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {publishedPortfolioCases.map((caseItem) => (
                <article key={caseItem.slug} className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
                  <h2 className="text-lg font-medium">{caseItem.title}</h2>
                  <Link href={`/cases/${caseItem.slug}`} className="mt-5 inline-flex text-sm font-medium underline underline-offset-4 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-300">
                    Ver case
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
