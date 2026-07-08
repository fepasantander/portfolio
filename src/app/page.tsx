import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowIThink from "@/components/sections/HowIThink";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      {/* Structural layout components */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Problem />
        <HowIThink />
        <WhyHireMe />
        <Transformations />
        <Testimonials />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
