export type PortfolioCatalogStatus = "published" | "work-in-progress";

export interface PortfolioCatalogEntry {
  id: string;
  label: string;
  company: string;
  order: number;
  status: PortfolioCatalogStatus;
  thumbnail: { src: string; alt: string };
  publishedCaseSlug?: string;
}

export const portfolioCatalog: readonly PortfolioCatalogEntry[] = [
  { id: "vitruchat", label: "VitruChat", company: "VitruLab", order: 1, status: "published", publishedCaseSlug: "vitruchat", thumbnail: { src: "/imagem/vitru/vitruchat/v2-light/Pastas_MenuClosed&PropOpen&PromptOpen.png", alt: "Interface do VitruChat" } },
  { id: "hub-correcoes", label: "Hub de Correções", company: "VitruLab", order: 2, status: "published", publishedCaseSlug: "hub-correcoes", thumbnail: { src: "/imagem/cases/hub-correcoes/hero.png", alt: "Visão do Hub de Correções" } },
  { id: "sofia", label: "SofIA", company: "VitruLab", order: 3, status: "published", publishedCaseSlug: "sofia", thumbnail: { src: "/imagem/uniasselvi/sofia/sofia-avatar.png", alt: "Avatar da SofIA" } },
  { id: "revistas", label: "Revistas", company: "VM", order: 4, status: "work-in-progress", thumbnail: { src: "/imagem/vm/revistas/aprovadas/2-site-revistaimplantnews.png", alt: "Portal da Revista ImplantNews" } },
  { id: "eventos", label: "Eventos", company: "VM", order: 5, status: "work-in-progress", thumbnail: { src: "/imagem/vm/eventos/aprovadas/site-in26.png", alt: "Portal do Congresso IN 2026" } },
  { id: "renegociacao", label: "Renegociação", company: "Uniasselvi", order: 6, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/renegociacao.svg", alt: "Identidade provisória de Renegociação" } },
  { id: "autonomia", label: "Autonomia Docência", company: "Uniasselvi", order: 7, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/autonomia-docencia.svg", alt: "Identidade provisória de Autonomia Docência" } },
  { id: "biblioteca", label: "Biblioteca Virtual - PPC", company: "Uniasselvi", order: 8, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/biblioteca-virtual-ppc.svg", alt: "Identidade provisória de Biblioteca Virtual PPC" } },
  { id: "curricularizacao", label: "Curricularização Extensão", company: "Uniasselvi", order: 9, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/curricularizacao-extensao.svg", alt: "Identidade provisória de Curricularização Extensão" } },
  { id: "cdc", label: "CDC", company: "Listo", order: 10, status: "work-in-progress", thumbnail: { src: "/imagem/listo/BANNER_1_97a153db13.png", alt: "Listo" } },
  { id: "kgc", label: "KGC", company: "Listo", order: 11, status: "work-in-progress", thumbnail: { src: "/imagem/listo/Design_sem_nome_13_eec4c125e2.png", alt: "Listo" } },
  { id: "gestao-multiunidades", label: "Gestão Multiunidades", company: "Listo", order: 12, status: "work-in-progress", thumbnail: { src: "/imagem/listo/Prancheta_4_59e2f2d95d.png", alt: "Listo" } },
] as const;
