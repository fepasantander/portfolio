export const caseCategories = ["EdTech", "HealthTech", "Fintech", "Innovation", "Enterprise", "IA Generativa"] as const;
export type CaseCategory = (typeof caseCategories)[number];

export const caseTags = ["UX", "Research", "Discovery", "Analytics", "AI", "Figma", "Design System", "Accessibility", "Journey", "Architecture", "Front-end", "Leadership", "MCP", "LLM", "RAG"] as const;
export type CaseTag = (typeof caseTags)[number];

export const technologyGroups = ["UX", "Research", "IA", "Front-end", "Analytics", "Back-end", "Infraestrutura"] as const;
export type TechnologyGroup = (typeof technologyGroups)[number];
export const evidenceTypes = ["Interface", "Fluxos", "Wireframes", "FigJam", "Arquitetura", "Pesquisa", "Boards", "Fotos", "Diagramas", "Documentação"] as const;
export type EvidenceType = (typeof evidenceTypes)[number];
export type CaseCta = "journal" | "contact";

export interface EditorialEvidence { type: EvidenceType; src: string; alt: string; }
export interface EditorialTechnology { group: TechnologyGroup; items: string[]; }
export interface EditorialCase {
  slug: string; title: string; company: string; category: CaseCategory; tags: CaseTag[]; period: string;
  summary: string; executiveSummary: string; context: string[]; problem: string[]; contribution: string[]; solution: string;
  quantitativeResults: string[]; qualitativeResults: string[]; evidence: EditorialEvidence[]; stack: EditorialTechnology[]; learnings: string[]; cta: CaseCta;
  heroImage: { src: string; alt: string };
}

export function isPublishableCase(value: EditorialCase): boolean {
  return Boolean(value.heroImage?.src && value.summary && value.executiveSummary && value.problem.length && value.contribution.length && value.solution && (value.quantitativeResults.length || value.qualitativeResults.length) && value.evidence.length && value.stack.length && value.learnings.length <= 5 && value.problem.length <= 5 && value.cta);
}
