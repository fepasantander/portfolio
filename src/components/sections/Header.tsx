"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { analytics } from "@/lib/analytics";
import { contactNavigation, platformAreas, resolvePlatformArea } from "@/lib/platform-navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname() ?? "/";
  const activeAreaId = resolvePlatformArea(pathname);
  const opensAnotherDocument = (href: string) => {
    const destinationPath = href.split("#")[0] || "/";
    return destinationPath !== pathname;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusFrame = requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(focusFrame);
    };
  }, [isOpen]);

  const trackNavigation = (label: string, href: string) => {
    setIsOpen(false);
    analytics.trackCTA(`Header Nav: ${label}`, href);
  };

  const linkClassName = (isActive: boolean) =>
    `border-b-2 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black ${isActive ? "border-zinc-950 font-semibold text-zinc-950 dark:border-zinc-50 dark:text-zinc-50" : "border-transparent text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? "border-b border-zinc-200/50 bg-white/80 py-4 backdrop-blur-md dark:border-zinc-900/50 dark:bg-black/80" : "bg-transparent py-6"}`}>
      <Container className="flex items-center justify-between gap-4">
        <Link href="/" target={opensAnotherDocument("/") ? "_blank" : undefined} rel={opensAnotherDocument("/") ? "noopener noreferrer" : undefined} className="shrink-0 text-lg font-semibold tracking-tight text-zinc-900 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:text-zinc-50 dark:focus-visible:ring-offset-black" onClick={() => trackNavigation("Logo Home", "/")}>
          Felipe Santander
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {platformAreas.map((area) => {
            const isActive = activeAreaId === area.id;

            return (
              <Link key={area.id} href={area.href} target={opensAnotherDocument(area.href) ? "_blank" : undefined} rel={opensAnotherDocument(area.href) ? "noopener noreferrer" : undefined} aria-current={isActive ? "page" : undefined} className={linkClassName(isActive)} onClick={() => trackNavigation(area.label, area.href)}>
                {area.label}
              </Link>
            );
          })}
          <Link href={contactNavigation.href} target={opensAnotherDocument(contactNavigation.href) ? "_blank" : undefined} rel={opensAnotherDocument(contactNavigation.href) ? "noopener noreferrer" : undefined} className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-950 dark:focus-visible:ring-offset-black" onClick={() => trackNavigation(contactNavigation.ctaLabel, contactNavigation.href)}>
            {contactNavigation.ctaLabel}
          </Link>
        </nav>

        <button ref={menuButtonRef} type="button" className="p-2 text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:text-zinc-400 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Navegação principal" className="absolute left-0 right-0 top-full max-h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto border-b border-zinc-200 bg-white px-6 py-6 shadow-lg dark:border-zinc-900 dark:bg-black lg:hidden">
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-2">
            {platformAreas.map((area, index) => {
              const isActive = activeAreaId === area.id;

              return (
                <Link key={area.id} ref={index === 0 ? firstMobileLinkRef : undefined} href={area.href} target={opensAnotherDocument(area.href) ? "_blank" : undefined} rel={opensAnotherDocument(area.href) ? "noopener noreferrer" : undefined} aria-current={isActive ? "page" : undefined} className={`${linkClassName(isActive)} text-base`} onClick={() => trackNavigation(area.label, area.href)}>
                  {area.label}
                </Link>
              );
            })}
            <Link href={contactNavigation.href} target={opensAnotherDocument(contactNavigation.href) ? "_blank" : undefined} rel={opensAnotherDocument(contactNavigation.href) ? "noopener noreferrer" : undefined} className="mt-4 rounded-md bg-zinc-950 py-3 text-center font-medium text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-950 dark:focus-visible:ring-offset-black" onClick={() => trackNavigation(contactNavigation.ctaLabel, contactNavigation.href)}>
              {contactNavigation.ctaLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
