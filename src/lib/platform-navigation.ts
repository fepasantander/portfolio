export const platformAreas = [
  {
    id: "portfolio",
    label: "Portfolio",
    shortLabel: "Portfolio",
    href: "/portfolio",
    description: "Cases, processos e resultados de produtos digitais.",
    audienceLabel: "RH, recrutadores, hiring managers, Produto, Design e Engenharia.",
  },
  {
    id: "executive",
    label: "Executive Transformation",
    shortLabel: "Transformation",
    href: "/executive-transformation",
    description: "Transformações de produto, decisões, trade-offs e integração entre usuários, negócio, design, tecnologia e IA.",
    audienceLabel: "C-levels, CPOs, CTOs, Heads, Directors e lideranças.",
  },
  {
    id: "studio33",
    label: "Studio 33",
    shortLabel: "Studio 33",
    href: "/studio-33",
    description: "Projetos digitais objetivos — sites, landing pages, identidades digitais, MVPs, UX/UI, front-end e IA.",
    audienceLabel: "Empresas, profissionais liberais, empreendedores e negócios locais.",
  },
] as const;

export type PlatformArea = (typeof platformAreas)[number];
export type PlatformAreaId = PlatformArea["id"];

export const platformAreaAccents = {
  portfolio: {
    token: "Cyan",
    value: "#00ffff",
    glowClass: "bg-[#00ffff]",
    borderClass: "group-hover:border-[#00ffff] group-focus-visible:border-[#00ffff]",
    labelClass: "bg-[#00ffff] text-zinc-950",
  },
  executive: {
    token: "Magenta",
    value: "#ff00ff",
    glowClass: "bg-[#ff00ff]",
    borderClass: "group-hover:border-[#ff00ff] group-focus-visible:border-[#ff00ff]",
    labelClass: "bg-[#ff00ff] text-zinc-950",
  },
  studio33: {
    token: "Yellow",
    value: "#ffff00",
    glowClass: "bg-[#ffff00]",
    borderClass: "group-hover:border-[#ffff00] group-focus-visible:border-[#ffff00]",
    labelClass: "bg-[#ffff00] text-zinc-950",
  },
} as const;

export const contactNavigation = {
  label: "Contato",
  href: "/#contact",
  ctaLabel: "Vamos conversar",
  email: "fepasantander@gmail.com",
  linkedInHref: "https://www.linkedin.com/in/felipe-santander/",
  whatsAppNumber: "5511953423954",
  careerWhatsAppMessage: "Olá Felipe, venho através de seu Portfólio e gostaria de ...",
  studio33WhatsAppMessage: "Olá, Felipe. Quero conversar sobre um projeto pelo Studio 33.",
  curriculum: {
    complete: "/pdf/cv-2026-07--felipe-santander-completo.pdf",
    summary: "/pdf/cv-2026-07--felipe-santander-resumo.pdf",
  },
} as const;

export function getWhatsAppHref(message: string): string {
  return `https://wa.me/${contactNavigation.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export const institutionalNavigation = {
  label: "Sobre",
  href: "/about",
} as const;

export function getPlatformArea(areaId: PlatformAreaId): PlatformArea {
  const area = platformAreas.find((item) => item.id === areaId);

  if (!area) {
    throw new Error(`Unknown platform area: ${areaId}`);
  }

  return area;
}

export function resolvePlatformArea(pathname: string): PlatformAreaId | null {
  if (pathname === "/portfolio" || pathname.startsWith("/cases/")) {
    return "portfolio";
  }

  if (
    pathname === "/executive-transformation" ||
    pathname === "/journal" ||
    pathname.startsWith("/transformations/")
  ) {
    return "executive";
  }

  if (pathname === "/studio-33") {
    return "studio33";
  }

  return null;
}
