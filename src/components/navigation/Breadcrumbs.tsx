"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPlatformArea, type PlatformAreaId } from "@/lib/platform-navigation";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  areaId?: PlatformAreaId;
}

export function Breadcrumbs({ items, areaId }: BreadcrumbsProps) {
  const area = areaId ? getPlatformArea(areaId) : null;
  const trail = area ? [{ label: area.label, href: area.href }, ...items] : items;
  const pathname = usePathname() ?? "/";
  const opensAnotherDocument = (href: string) => (href.split("#")[0] || "/") !== pathname;

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" target={opensAnotherDocument("/") ? "_blank" : undefined} rel={opensAnotherDocument("/") ? "noopener noreferrer" : undefined} className="hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50">
            Início
          </Link>
        </li>
        {trail.map((item) => (
          <li key={`${item.href ?? "current"}-${item.label}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} target={opensAnotherDocument(item.href) ? "_blank" : undefined} rel={opensAnotherDocument(item.href) ? "noopener noreferrer" : undefined} className="hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:hover:text-zinc-50">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-zinc-900 dark:text-zinc-100">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
