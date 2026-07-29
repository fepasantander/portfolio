import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JournalShowcase } from "@/components/sections/JournalShowcase";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Journal | Felipe Santander",
  description: "Decisões, processos e evidências por trás das transformações de produto.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50"><Header /><main className="flex-grow pb-16 pt-28"><Container><Breadcrumbs items={[{ label: "Journal" }]} /><JournalShowcase /></Container></main><Footer /></div>;
}
