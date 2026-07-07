import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Approach from "@/components/sections/Approach";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Felipe Santander — Product Leader & Strategy Executive",
  description: "I transform complex business challenges into scalable digital products through Strategy, UX Design, Design Systems and Artificial Intelligence.",
  openGraph: {
    title: "Felipe Santander — Product Leader & Strategy Executive",
    description: "I transform complex business challenges into scalable digital products through Strategy, UX Design, Design Systems and Artificial Intelligence.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      {/* Structural layout components */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Approach />
        <Transformations />
        <Testimonials />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
