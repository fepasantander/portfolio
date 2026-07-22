import type { EditorialCase, EvidenceType } from "./editorial-model";

const vitruChatBasePath = "/imagem/vitru/vitruchat";

const narrativeAssetNames = [
  "VitruChat_home.png",
  "VitruChat_AprendaUsar.png",
  "Pastas_MenuOpen&PropOpen&PromptOpen.png",
  "Pastas_MenuOpen&PropOpen&PromptOpen-2.png",
  "Acessibilidade_MenuOpen&PropOpen&PromptClosed.png",
  "Indicadores_filterClose&lista.png",
] as const;

function narrativeEvidence(name: (typeof narrativeAssetNames)[number], index: number) {
  const type: EvidenceType = index === 0 ? "Interface" : "Fluxos";
  const folder = index === 2 || index === 4 ? "v2-light" : index === 3 ? "v2-dark" : "v1-light";
  return { type, src: `${vitruChatBasePath}/${folder}/${name}`, alt: name };
}

export const vitruChat: EditorialCase = {
  slug: "vitruchat",
  title: "Transformando IA Generativa em uma plataforma corporativa segura",
  company: "Vitru Educação — Innovation Lab",
  category: "IA Generativa",
  tags: ["UX", "Discovery", "AI", "Figma", "Design System", "Accessibility", "LLM", "MCP"],
  period: "2025–2026",
  summary: "Plataforma corporativa de IA Generativa para ampliar produtividade e estabelecer uso estratégico de agentes inteligentes.",
  executiveSummary: "O VitruChat ofereceu uma alternativa corporativa ao uso indiscriminado de ferramentas públicas de IA. Conduzi a arquitetura da experiência, Product Discovery, fluxos de interação, organização de funcionalidades e interface para colaboradores de diferentes áreas.",
  context: ["A Vitru iniciava uma estratégia corporativa para adoção de Inteligência Artificial em larga escala.", "O Innovation Lab estruturou uma plataforma para centralizar modelos de linguagem, evoluir agentes especializados e oferecer governança."],
  problem: ["Uso descentralizado de plataformas públicas.", "Risco de compartilhamento de informações sensíveis.", "Ausência de métricas corporativas e governança.", "Experiências inconsistentes entre usuários."],
  contribution: ["Product Discovery", "UX Strategy", "Arquitetura da Informação", "Design de Interação", "Estratégia de acessibilidade", "Colaboração com Produto, Engenharia e Innovation Lab"],
  solution: "Estruturei uma plataforma com chat, biblioteca de prompts, skills, arquivos, configurações, consumo, indicadores, acessibilidade, gestão de créditos e histórico, preparada para evolução incremental.",
  quantitativeResults: [],
  qualitativeResults: ["Experiência unificada para colaboradores.", "Arquitetura preparada para agentes inteligentes.", "Acessibilidade incorporada ao produto.", "Estrutura para acompanhamento de indicadores."],
  evidence: narrativeAssetNames.map(narrativeEvidence),
  stack: [{ group: "UX", items: ["UX Strategy", "Interaction Design", "Design System"] }, { group: "Research", items: ["Product Discovery", "UX Research", "FigJam"] }, { group: "IA", items: ["Generative AI", "LLM", "MCP"] }, { group: "Infraestrutura", items: ["Supabase", "Vercel"] }],
  learnings: ["Consolidei minha experiência em produtos baseados em IA Generativa.", "Reforcei a importância de governança, acessibilidade e evolução contínua em plataformas conversacionais."],
  cta: "journal",
  heroImage: { src: `${vitruChatBasePath}/v2-dark/Pastas_MenuOpen&PropOpen&PromptClosed-3.png`, alt: "Interface do VitruChat com navegação e painel de prompts" },
};

export const odonto1: EditorialCase = {
  slug: "odonto1",
  title: "Substituindo decisões conceituais empíricas por dados e podcasts na transição digital",
  company: "VM Comunicação",
  category: "Enterprise",
  tags: ["UX", "Research", "Discovery", "Analytics", "Architecture"],
  period: "2014–2019",
  summary: "Plataforma multimídia integrada de educação continuada e conteúdo odontológico.",
  executiveSummary: "Substituindo decisões conceituais empíricas por dados e podcasts na transição digital.",
  context: ["Plataforma multimídia integrada de educação continuada e conteúdo odontológico."],
  problem: ["Baixa maturidade digital e fragmentação na tomada de decisões de produto, com estratégias editoriais e comerciais baseadas em convicções empíricas internas."],
  contribution: ["Diagnóstico da base de clientes", "Estruturação de processos digitais", "Pesquisa", "Estratégia", "Arquitetura da Informação", "Inbound marketing"],
  solution: "Estruturação de uma plataforma integrada para conteúdo, relacionamento e evolução dos canais digitais.",
  quantitativeResults: [],
  qualitativeResults: ["Substituição de decisões empíricas por uma abordagem estruturada baseada em dados e canais integrados."],
  evidence: [{ type: "Interface", src: "/imagem/vm/ABROSS.png", alt: "Artefato visual do ecossistema Odonto1" }, { type: "Interface", src: "/imagem/vm/Banner_1920_x_346.jpg", alt: "Tela do ecossistema digital odontológico" }, { type: "Interface", src: "/imagem/vm/Banner_site_edicao1.png", alt: "Interface de publicação do ecossistema odontológico" }],
  stack: [{ group: "UX", items: ["Pesquisa", "Estratégia", "Arquitetura da Informação"] }],
  learnings: ["Conteúdo editorial aprovado para revisão de publicação."],
  cta: "journal",
  heroImage: { src: "/imagem/vm/Banner_1920_x_346.jpg", alt: "Odonto1" },
};
