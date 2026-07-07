"use client";

import React from "react";
import { Container } from "../ui/Container";
import { analytics } from "@/lib/analytics";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (label: string) => {
    analytics.trackCTA(`Footer: ${label}`, "https://www.linkedin.com/in/felipe-santander/");
  };

  return (
    <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black text-zinc-500 dark:text-zinc-500 text-xs">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Name and Positioning */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Felipe Santander
          </span>
          <span>
            Líder de Produto &amp; Executivo de Estratégia
          </span>
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/felipe-santander/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("LinkedIn")}
            className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            LinkedIn
          </a>
          <span>
            &copy; {currentYear} Felipe Santander. Todos os direitos reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
