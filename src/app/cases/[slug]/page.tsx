import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MasterCaseTemplate } from "@/components/cases/MasterCaseTemplate";
import { publishedPortfolioCases } from "@/data/case-production-pipeline";

export function generateStaticParams() {
  return publishedPortfolioCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = publishedPortfolioCases.find((entry) => entry.slug === slug);

  if (!item) return {};

  return {
    title: `${item.title} | Felipe Santander`,
    description: item.summary,
    alternates: { canonical: `/cases/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.summary,
      images: [item.heroImage.src],
    },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = publishedPortfolioCases.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": ["CreativeWork", "Project"], name: item.title, description: item.summary }) }} />
    <MasterCaseTemplate item={item} />
  </>;
}
