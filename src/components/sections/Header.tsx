"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Menu, X } from "lucide-react";
import { analytics } from "@/lib/analytics";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Problema", href: "#problem" },
    { label: "Abordagem", href: "#approach" },
    { label: "Transformações", href: "#transformations" },
    { label: "Filosofia", href: "#about" },
  ];

  const handleNavClick = (label: string, href: string) => {
    setIsOpen(false);
    analytics.trackCTA(`Header Nav: ${label}`, href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-900/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity"
          onClick={() => handleNavClick("Logo Home", "#")}
        >
          Felipe Santander
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              onClick={() => handleNavClick(item.label, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 hover:opacity-90 px-4 py-2 rounded-md transition-opacity"
            onClick={() => handleNavClick("CTA Contact", "#contact")}
          >
            Falar com Felipe
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 px-6 py-6 flex flex-col gap-5 shadow-lg animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors py-1"
              onClick={() => handleNavClick(item.label, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-center font-medium bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 py-3 rounded-md mt-2 transition-opacity"
            onClick={() => handleNavClick("CTA Contact Mobile", "#contact")}
          >
            Falar com Felipe
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
