import { isPublishableCase, type EditorialCase } from "./editorial-model";
import { vitruChat, odonto1 } from "./published-cases";

export const productionOrder = ["vitruchat", "sofia-administrative-ai-assistant", "hub-correcoes", "harmonia", "diva", "odonto1", "listo", "portais-vm"] as const;

export interface CaseReviewChecklist {
  nda: boolean; spelling: boolean; consistency: boolean; terminology: boolean; evidence: boolean; links: boolean; images: boolean; stack: boolean;
}

export interface CaseProductionRecord {
  case: EditorialCase;
  review: CaseReviewChecklist;
}

export function canPublishCase(record: CaseProductionRecord): boolean {
  return isPublishableCase(record.case) && Object.values(record.review).every(Boolean);
}

export function generatePublishedCatalog(records: CaseProductionRecord[]): EditorialCase[] {
  return records.filter(canPublishCase).sort((a, b) => productionOrder.indexOf(a.case.slug as typeof productionOrder[number]) - productionOrder.indexOf(b.case.slug as typeof productionOrder[number])).map((record) => record.case);
}

export const caseProductionRecords: CaseProductionRecord[] = [
  { case: vitruChat, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: odonto1, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
];
export const publishedPortfolioCases = generatePublishedCatalog(caseProductionRecords);
