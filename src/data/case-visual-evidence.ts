export interface VisualEvidence {
  src: string;
  alt: string;
  order: number;
  caption?: string;
}

const vitruChatEvidencePath = "/imagem/cases/vitruchat";

export const vitruChatVisualEvidence: readonly VisualEvidence[] = Array.from(
  { length: 16 },
  (_, index) => {
    const order = index + 1;
    const sequence = String(order).padStart(2, "0");

    return {
      src: `${vitruChatEvidencePath}/vitruchat-${sequence}.png`,
      alt: `Tela aprovada do VitruChat ${sequence}`,
      order,
    };
  },
);

export const vitruChatCover = {
  src: `${vitruChatEvidencePath}/vitruchat-capa.png`,
  alt: "Capa do VitruChat",
};

const hubCorrecoesEvidencePath = "/imagem/cases/hub-correcoes";

const hubCorrecoesEvidenceAlt = [
  "Apresentação do Hub de Correções",
  "Painel inicial com atividades de avaliação",
  "Painel de indicadores do Hub de Correções",
  "Lista de provas discursivas",
  "Tela de correção de prova discursiva",
  "Modal de análise de plágio",
  "Modal de critérios de correção",
  "Modal de feedback da atividade",
  "Modal de feedback de questão",
  "Modal com resposta do aluno",
  "Filtro de provas discursivas",
  "Mapa de entradas de dados",
  "Mapa de saídas de dados",
] as const;

export const hubCorrecoesVisualEvidence: readonly VisualEvidence[] = hubCorrecoesEvidenceAlt.map((alt, index) => {
  const order = index + 1;
  const sequence = String(order).padStart(2, "0");

  return {
    src: `${hubCorrecoesEvidencePath}/hub-de-correcoes-${sequence}.png`,
    alt,
    order,
  };
});

export const hubCorrecoesCover = {
  src: `${hubCorrecoesEvidencePath}/hub-de-correcoes-capa.png`,
  alt: "Capa do Hub de Correções",
};
