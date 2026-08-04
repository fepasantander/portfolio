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
  { id: "vitruchat", label: "VitruChat", company: "VitruLab", order: 1, status: "published", publishedCaseSlug: "vitruchat", thumbnail: { src: "/imagem/cases/vitruchat/vitruchat-capa.png", alt: "Capa do VitruChat" } },
  { id: "hub-correcoes", label: "Hub de Correções", company: "VitruLab", order: 2, status: "published", publishedCaseSlug: "hub-correcoes", thumbnail: { src: "/imagem/cases/hub-correcoes/hub-de-correcoes-capa.png", alt: "Capa do Hub de Correções" } },
  { id: "sofia", label: "SofIA", company: "VitruLab", order: 3, status: "published", publishedCaseSlug: "sofia", thumbnail: { src: "/imagem/uniasselvi/sofia/sofia-avatar.png", alt: "Avatar da SofIA" } },
  { id: "revistas", label: "Revistas", company: "VM", order: 4, status: "published", publishedCaseSlug: "revistas-vm", thumbnail: { src: "/imagem/vm/revistas/aprovadas/2-site-revistaimplantnews.png", alt: "Portal da Revista ImplantNews" } },
  { id: "eventos", label: "Eventos", company: "VM", order: 5, status: "published", publishedCaseSlug: "eventos-vm", thumbnail: { src: "/imagem/vm/eventos/aprovadas/site-in26.png", alt: "Portal do Congresso IN 2026" } },
  { id: "renegociacao", label: "Renegociação", company: "Uniasselvi", order: 6, status: "published", publishedCaseSlug: "renegociacao", thumbnail: { src: "/imagem/cases/renegociacao/renegociacao-capa.png", alt: "Capa da Renegociação" } },
  { id: "autonomia", label: "Autonomia Docência", company: "Uniasselvi", order: 7, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/autonomia-docencia.svg", alt: "Identidade editorial de Autonomia Docência" } },
  { id: "biblioteca", label: "Biblioteca Virtual - PPC", company: "Uniasselvi", order: 8, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/biblioteca-virtual-ppc.svg", alt: "Identidade editorial de Biblioteca Virtual PPC" } },
  { id: "curricularizacao", label: "Curricularização Extensão", company: "Uniasselvi", order: 9, status: "work-in-progress", thumbnail: { src: "/imagem/uniasselvi/portfolio/curricularizacao-extensao.svg", alt: "Identidade editorial de Curricularização Extensão" } },
  { id: "cdc", label: "CDC", company: "Listo", order: 10, status: "published", publishedCaseSlug: "cdc", thumbnail: { src: "/imagem/listo/BANNER_1_97a153db13.png", alt: "CDC Listo" } },
  { id: "kgc", label: "KGC", company: "Listo", order: 11, status: "published", publishedCaseSlug: "kgc", thumbnail: { src: "/imagem/listo/Design_sem_nome_13_eec4c125e2.png", alt: "KGC Listo" } },
  { id: "gestao-multiunidades", label: "Gestão Multiunidades", company: "Listo", order: 12, status: "published", publishedCaseSlug: "gestao-multiunidades", thumbnail: { src: "/imagem/listo/Prancheta_4_59e2f2d95d.png", alt: "Gestão Multiunidades Listo" } },
  { id: "diva", label: "Diva", company: "Carenet", order: 13, status: "published", publishedCaseSlug: "diva", thumbnail: { src: "/imagem/carenet/diva/aprovadas/capa-google-play-x05.png", alt: "Capa do Diva" } },
  { id: "odonto1", label: "Odonto1", company: "VM Comunicação", order: 14, status: "published", publishedCaseSlug: "odonto1", thumbnail: { src: "/imagem/vm/odonto1-thumbnail.svg", alt: "Logotipo do Odonto1" } },
] as const;
