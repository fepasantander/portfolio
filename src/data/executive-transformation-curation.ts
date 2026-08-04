export type ExecutiveTransformationStatus = "published" | "work-in-progress";

export interface ExecutiveTransformationEntry {
  id: string;
  label: string;
  company: string;
  order: number;
  status: ExecutiveTransformationStatus;
  destination?: string;
  thumbnail: { src: string; alt: string };
}

export const executiveTransformationCatalog: readonly ExecutiveTransformationEntry[] = [
  { id: "vitru-lab", label: "Vitru Educação", company: "Vitru Educação", order: 1, status: "published", destination: "/transformations/vitru-oportunidades-tecnologicas", thumbnail: { src: "/imagem/journal/vitruchat-logotipo.png", alt: "Vitru Educação" } },
  { id: "carenet", label: "Carenet", company: "Carenet", order: 2, status: "published", destination: "/transformations/carenet-longevity", thumbnail: { src: "/imagem/carenet/logo-white.png", alt: "Carenet" } },
  { id: "odonto1", label: "VM Comunicação", company: "VM Comunicação", order: 3, status: "published", destination: "/transformations/vm-comunicacao", thumbnail: { src: "/imagem/vm/odonto1-thumbnail.svg", alt: "VM Comunicação" } },
  { id: "listo", label: "Listo", company: "Listo Sistemas", order: 4, status: "work-in-progress", thumbnail: { src: "/imagem/listo/logo-white-v2.png", alt: "Listo" } },
] as const;
