"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { analytics } from "@/lib/analytics";
import { portfolioNavigation } from "@/lib/portfolio-navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const trackNavigation = (label: string, href: string) => {
    setIsOpen(false);
    analytics.trackCTA(`Header Nav: ${label}`, href);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? "border-b border-zinc-200/50 bg-white/80 py-4 backdrop-blur-md dark:border-zinc-900/50 dark:bg-black/80" : "bg-transparent py-6"}`}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900 hover:opacity-80 dark:text-zinc-50" onClick={() => trackNavigation("Logo Home", "/")}>
          Felipe Santander
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {portfolioNavigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-zinc-600 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:text-zinc-400 dark:hover:text-zinc-50" onClick={() => trackNavigation(item.label, item.href)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-950" onClick={() => trackNavigation("Vamos conversar", "/#contact")}>
            Vamos conversar
          </Link>
        </nav>

        <button type="button" className="p-2 text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:text-zinc-400 md:hidden" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Navegação principal" className="absolute left-0 right-0 top-full flex flex-col gap-5 border-b border-zinc-200 bg-white px-6 py-6 shadow-lg dark:border-zinc-900 dark:bg-black md:hidden">
          {portfolioNavigation.map((item) => (
            <Link key={item.label} href={item.href} className="py-1 text-base text-zinc-600 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:text-zinc-400 dark:hover:text-zinc-50" onClick={() => trackNavigation(item.label, item.href)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="mt-2 rounded-md bg-zinc-950 py-3 text-center font-medium text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-950" onClick={() => trackNavigation("Vamos conversar", "/#contact")}>
            Vamos conversar
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
