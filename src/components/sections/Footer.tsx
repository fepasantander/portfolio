"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../ui/Container";
import { contactNavigation, institutionalNavigation, platformAreas } from "@/lib/platform-navigation";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() ?? "/";
  const opensAnotherDocument = (href: string) => (href.split("#")[0] || "/") !== pathname;

  return (
    <footer className="border-t border-zinc-100 bg-white py-12 text-xs text-zinc-500 dark:border-zinc-900 dark:bg-black dark:text-zinc-500">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1">
          <Link href="/" target={opensAnotherDocument("/") ? "_blank" : undefined} rel={opensAnotherDocument("/") ? "noopener noreferrer" : undefined} className="w-fit font-semibold text-zinc-900 transition-colors hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:text-zinc-100 dark:hover:text-zinc-300 dark:focus-visible:ring-offset-black">
            Felipe Santander
          </Link>
          <span>Líder de Produto &amp; Executivo de Estratégia</span>
        </div>

        <nav aria-label="Navegação do rodapé" className="flex max-w-xl flex-wrap gap-x-5 gap-y-3 sm:justify-end">
          {platformAreas.map((area) => (
            <Link key={area.id} href={area.href} target={opensAnotherDocument(area.href) ? "_blank" : undefined} rel={opensAnotherDocument(area.href) ? "noopener noreferrer" : undefined} className="transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50 dark:focus-visible:ring-offset-black">
              {area.label}
            </Link>
          ))}
          <Link href={institutionalNavigation.href} target={opensAnotherDocument(institutionalNavigation.href) ? "_blank" : undefined} rel={opensAnotherDocument(institutionalNavigation.href) ? "noopener noreferrer" : undefined} className="transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50 dark:focus-visible:ring-offset-black">
            {institutionalNavigation.label}
          </Link>
          <Link href={contactNavigation.href} target={opensAnotherDocument(contactNavigation.href) ? "_blank" : undefined} rel={opensAnotherDocument(contactNavigation.href) ? "noopener noreferrer" : undefined} className="transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50 dark:focus-visible:ring-offset-black">
            {contactNavigation.label}
          </Link>
        </nav>

        <span>&copy; {currentYear} Felipe Santander. Todos os direitos reservados.</span>
      </Container>
    </footer>
  );
};

export default Footer;
