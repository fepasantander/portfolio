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
  { id: "vitru-lab", label: "VitruLab", company: "Vitru", order: 1, status: "published", destination: "/transformations/vitru-oportunidades-tecnologicas?tab=vitruchat", thumbnail: { src: "/imagem/journal/vitruchat-logotipo.png", alt: "VitruLab" } },
  { id: "carenet", label: "Carenet", company: "Carenet Longevity", order: 2, status: "published", destination: "/transformations/carenet-longevity?tab=orchestra", thumbnail: { src: "/imagem/carenet/logo-white.png", alt: "Carenet" } },
  { id: "odonto1", label: "Odonto1", company: "VM Comunicação", order: 3, status: "published", destination: "/transformations/vm-comunicacao?tab=odonto1", thumbnail: { src: "/imagem/vm/odonto1-thumbnail.svg", alt: "Odonto1" } },
  { id: "listo", label: "Listo", company: "Listo Sistemas", order: 4, status: "work-in-progress", thumbnail: { src: "/imagem/listo/logo-white-v2.png", alt: "Listo" } },
] as const;
