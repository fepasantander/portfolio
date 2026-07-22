import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";
import HowIThink from "@/components/sections/HowIThink";
import SelectedCases from "@/components/sections/SelectedCases";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Journal from "@/components/sections/Journal";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      {/* Structural layout components */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Companies />
        <SelectedCases />
        <Testimonials />
        <HowIThink />
        <About />
        <Journal />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
