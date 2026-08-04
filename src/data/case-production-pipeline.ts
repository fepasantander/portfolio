import { isPublishableCase, type EditorialCase } from "./editorial-model";
import { cdc, diva, eventosVm, gestaoMultiunidades, hubCorrecoes, kgc, odonto1, renegociacao, revistasVm, sofia, vitruChat } from "./published-cases";

export const productionOrder = ["vitruchat", "hub-correcoes", "sofia", "odonto1", "renegociacao", "revistas-vm", "eventos-vm", "biblioteca-virtual-ppc", "curricularizacao-extensao", "autonomia-docencia", "cdc", "kgc", "gestao-multiunidades", "harmonia", "diva", "listo", "portais-vm"] as const;

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
  { case: hubCorrecoes, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: sofia, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: odonto1, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: renegociacao, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: revistasVm, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: eventosVm, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: diva, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: cdc, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: kgc, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
  { case: gestaoMultiunidades, review: { nda: true, spelling: true, consistency: true, terminology: true, evidence: true, links: true, images: true, stack: true } },
];
export const publishedPortfolioCases = generatePublishedCatalog(caseProductionRecords);
