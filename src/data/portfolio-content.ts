import type { CaseCategory, CaseTag, EditorialEvidence, EditorialTechnology } from "./editorial-model";

export interface PortfolioCase {
  slug: string;
  category: CaseCategory;
  tags: CaseTag[];
  company: string;
  name: string;
  summary: string;
  executiveSummary: string;
  context: string[];
  problem: string[];
  contribution: string[];
  solution: string;
  technologies: string[];
  role: string;
  result: string;
  heroImage: { src: string; alt: string };
  gallery: EditorialEvidence[];
  stack: EditorialTechnology[];
  journalHref?: string;
}

export interface JournalCaseReference {
  slug: string;
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo?: { src: string; alt: string };
  linkedInHref?: string;
}

export interface Company {
  name: string;
  caseHref?: string;
  logo?: { src: string; alt: string };
}

// Conteúdo entra somente após aprovação editorial e de ativos.
export const portfolioCases: PortfolioCase[] = [];
export const testimonials: Testimonial[] = [];

export const journalCaseReferences: JournalCaseReference[] = [
  { slug: "vitru-chat-llm", label: "VitruChat", href: "/transformations/vitru-oportunidades-tecnologicas" },
  { slug: "sofia-administrative-ai-assistant", label: "SofIA", href: "/transformations/sofia-administrative-ai-assistant" },
  { slug: "hub-correcoes", label: "Hub de Correções", href: "/transformations/hub-correcoes" },
];

export const companies: Company[] = [
  { name: "Vitru", caseHref: "/transformations/vitru-innovation-lab" },
  { name: "Uniasselvi", caseHref: "/transformations/uniasselvi-plataformas-educacionais" },
  { name: "Carenet", caseHref: "/transformations/carenet-longevity" },
  { name: "Listo", caseHref: "/transformations/listo-sistemas" },
  { name: "VM Comunicação", caseHref: "/transformations/vm-comunicacao" },
];
