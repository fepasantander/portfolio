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

const renegociacaoEvidencePath = "/imagem/cases/renegociacao";

const renegociacaoEvidenceAlt = [
  "Apresentação da plataforma de Renegociação",
  "Telas do financeiro no aplicativo do aluno",
  "Tela de Renegociação no back-office",
  "Opções de pagamento por cartão de crédito no back-office",
  "Opções de pagamento no back-office",
  "Promoções de renegociação no back-office",
  "Telas de gestão da Renegociação",
  "Board de requisitos e regras de negócio",
  "Estruturação da pesquisa de Renegociação",
  "Fluxograma de parcelas customizadas",
  "Mapas de empatia",
  "Matriz CSD da Renegociação",
  "Painel semântico da Renegociação",
  "Timeline do projeto de Renegociação",
] as const;

export const renegociacaoVisualEvidence: readonly VisualEvidence[] = renegociacaoEvidenceAlt.map((alt, index) => {
  const order = index + 1;
  const sequence = String(order).padStart(2, "0");

  return {
    src: `${renegociacaoEvidencePath}/renegociacao-${sequence}.png`,
    alt,
    order,
  };
});

export const renegociacaoCover = {
  src: `${renegociacaoEvidencePath}/renegociacao-capa.png`,
  alt: "Capa da Renegociação",
};

const revistasVmEvidencePath = "/imagem/vm/revistas/aprovadas";

export const revistasVmVisualEvidence: readonly VisualEvidence[] = [
  { src: `${revistasVmEvidencePath}/1-capa-revistaimplantnews.png`, alt: "Capa da revista ImplantNews", order: 1 },
  { src: `${revistasVmEvidencePath}/2-site-revistaimplantnews.png`, alt: "Site da revista ImplantNews", order: 2 },
  { src: `${revistasVmEvidencePath}/3-capa-revistaimplantnewsperio.png`, alt: "Capa da revista ImplantNews Perio", order: 3 },
  { src: `${revistasVmEvidencePath}/4-site-revistaimplantnewsperio.png`, alt: "Site da revista ImplantNews Perio", order: 4 },
  { src: `${revistasVmEvidencePath}/5-capa-ortodontiaSPO.png`, alt: "Capa da revista Ortodontia SPO", order: 5 },
  { src: `${revistasVmEvidencePath}/6-site-ortodontiaSPO.png`, alt: "Site da revista Ortodontia SPO", order: 6 },
  { src: `${revistasVmEvidencePath}/7-capa-revistaprotesenews.png`, alt: "Capa da revista PróteseNews", order: 7 },
  { src: `${revistasVmEvidencePath}/8-site-revistaprotesenews.png`, alt: "Site da revista PróteseNews", order: 8 },
];

export const revistasVmCover = {
  src: `${revistasVmEvidencePath}/2-site-revistaimplantnews.png`,
  alt: "Site da revista ImplantNews",
};

const eventosVmEvidencePath = "/imagem/vm/eventos/aprovadas";

export const eventosVmVisualEvidence: readonly VisualEvidence[] = [
  { src: `${eventosVmEvidencePath}/site-in26.png`, alt: "Site do IN Congress", order: 1 },
  { src: `${eventosVmEvidencePath}/site-orto26.png`, alt: "Site do Orto Congress", order: 2 },
];

export const eventosVmCover = {
  src: `${eventosVmEvidencePath}/site-in26.png`,
  alt: "Site do IN Congress",
};

const divaEvidencePath = "/imagem/carenet/diva/aprovadas";

export const divaVisualEvidence: readonly VisualEvidence[] = [
  { src: `${divaEvidencePath}/Captura de tela 2026-07-02 145217.png`, alt: "Tela aprovada do Diva", order: 1 },
  { src: `${divaEvidencePath}/Captura de tela 2026-07-02 145313.png`, alt: "Tela aprovada do Diva", order: 2 },
  { src: `${divaEvidencePath}/Captura de tela 2026-07-02 145408.png`, alt: "Tela aprovada do Diva", order: 3 },
  { src: `${divaEvidencePath}/Captura de tela 2026-07-02 145504.png`, alt: "Tela aprovada do Diva", order: 4 },
  { src: `${divaEvidencePath}/Captura de tela 2026-07-02 145603.png`, alt: "Tela aprovada do Diva", order: 5 },
  { src: `${divaEvidencePath}/Captura de tela 2026-07-02 145646.png`, alt: "Tela aprovada do Diva", order: 6 },
];

export const divaCover = {
  src: `${divaEvidencePath}/capa-google-play-x05.png`,
  alt: "Capa do Diva",
};
