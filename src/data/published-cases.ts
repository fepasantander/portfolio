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
  heroImage: { src: "/imagem/cases/vitruchat/vitruchat-capa.png", alt: "Capa do VitruChat" },
};

export const sofia: EditorialCase = {
  slug: "sofia",
  title: "SofIA — da apresentação do ambiente virtual ao primeiro agente de secretaria",
  company: "Vitru Educação — Innovation Lab",
  category: "IA Generativa",
  tags: ["UX", "Discovery", "AI", "Journey", "Accessibility", "Architecture"],
  period: "2025–2026",
  summary: "Uma experiência de onboarding para reduzir atritos no ambiente virtual e preparar a evolução para um agente de secretaria.",
  executiveSummary: "A SofIA nasceu para reduzir contatos administrativos recorrentes ao tornar a relação entre aluno e universidade mais simples. Minha participação concentrou-se no tour guiado que apresenta o Ambiente Virtual de Aprendizagem e prepara a evolução para um Agente de Secretaria Inteligente.",
  context: [
    "Alunos ingressam na universidade sem conhecer o funcionamento do Ambiente Virtual de Aprendizagem.",
    "Localizar disciplinas, notas, informações financeiras, provas e documentos acadêmicos gerava contatos que poderiam ser evitados com uma apresentação inicial mais clara.",
  ],
  problem: [
    "Tours guiados são frequentemente ignorados quando o usuário pode pular a experiência sem compreender o ambiente.",
    "Era necessário projetar experiências distintas para Web e Mobile, preservando os elementos destacados e o acesso às instruções.",
  ],
  contribution: [
    "Definição do roteiro e priorização dos pontos apresentados no tour",
    "Desenho dos fluxos e adaptação da experiência para Web e Mobile",
    "Estratégia de retenção, UX Writing e direcionamento da atenção durante a apresentação",
    "Discussões sobre a evolução da SofIA como Agente de Secretaria baseado em Inteligência Artificial",
  ],
  solution: "Estruturei uma experiência inicial orientada por tour guiado, com uma esfera-guia para conduzir a atenção antes das mensagens explicativas. No Mobile, os balões utilizam rolagem interna para preservar o elemento destacado, com leitura das instruções prevista para ampliar o acesso ao conteúdo.",
  quantitativeResults: [],
  qualitativeResults: [
    "Um tour guiado convencional foi transformado em uma experiência de apresentação orientada à retenção e ao reconhecimento visual.",
    "A solução preparou o produto para evoluir de assistente administrativa para um Agente de Secretaria Inteligente.",
  ],
  evidence: [{ type: "Interface", src: "/imagem/cases/sofia/hero.png", alt: "Identidade visual da SofIA" }],
  stack: [
    { group: "UX", items: ["Onboarding", "UX Writing", "Jornada", "Design de Interação"] },
    { group: "Research", items: ["Product Discovery", "Priorização de fluxos"] },
    { group: "IA", items: ["IA Generativa", "Arquitetura conversacional"] },
  ],
  learnings: [
    "Projetar produtos baseados em Inteligência Artificial começa pela experiência do usuário.",
    "Uma boa experiência de onboarding reduz atritos, acelera a adoção e prepara o terreno para funcionalidades mais sofisticadas.",
  ],
  cta: "journal",
  heroImage: { src: "/imagem/cases/sofia/hero.png", alt: "Identidade visual da SofIA" },
};

export const hubCorrecoes: EditorialCase = {
  slug: "hub-correcoes",
  title: "Human-in-the-Loop AI para avaliação acadêmica em escala",
  company: "Vitru Educação — Innovation Lab",
  category: "IA Generativa",
  tags: ["UX", "Discovery", "AI", "Accessibility", "Architecture", "Analytics"],
  period: "2025–2026",
  summary: "Uma plataforma de avaliação discursiva assistida por IA que preserva a decisão final sob responsabilidade humana.",
  executiveSummary: "O Hub de Correções apoia a avaliação de atividades discursivas em larga escala. Estruturei fluxos, arquitetura da informação e protótipos navegáveis para uma solução Human-in-the-Loop que usa IA como apoio, preserva a revisão de professores e incorpora mecanismos específicos para estudantes PCD.",
  context: [
    "A Vitru possui milhões de avaliações discursivas distribuídas entre atividades de estudo, provas, TCCs, relatórios de estágio, papers e atividades extensionistas.",
    "Aproximadamente 500 profissionais dividiam as avaliações com outras responsabilidades acadêmicas, exigindo qualidade, rigor e supervisão humana.",
  ],
  problem: [
    "Era necessário aumentar a consistência das avaliações e reduzir o esforço operacional sem transformar a IA em substituta da decisão pedagógica.",
    "A solução precisava manter transparência, preservar a autoridade do professor, atender estudantes PCD e permitir evolução contínua do modelo.",
  ],
  contribution: [
    "Arquitetura da informação e fluxograma completo do processo",
    "Protótipo navegável e definição dos principais fluxos de revisão",
    "Estrutura da Home com indicadores e definição de métricas operacionais",
    "Discussão de guard rails para estudantes PCD e compartilhamento de resultados com alunos",
  ],
  solution: "Organizei um fluxo único para diferentes tipos de avaliação: indicadores e filtros, listagem por atividade e uma página de revisão com critérios, respostas do aluno, sugestão da IA, índice de plágio, anexos e decisão final do professor. A IA sugere, o professor revisa e aprova ou ajusta, e o feedback apoia a evolução do sistema.",
  quantitativeResults: [],
  qualitativeResults: [
    "O projeto foi implantado em produção como parte da estratégia de IA da Vitru.",
    "Consolidou práticas de Human-in-the-Loop, governança de IA, acessibilidade, padronização das avaliações e experiência dos avaliadores.",
  ],
  evidence: [{ type: "Interface", src: "/imagem/cases/hub-correcoes/hero.png", alt: "Visão do Hub de Correções" }],
  stack: [
    { group: "UX", items: ["Arquitetura da Informação", "Fluxos", "Protótipos navegáveis"] },
    { group: "Research", items: ["Entrevistas com professores, corretores, coordenadores e especialistas acadêmicos"] },
    { group: "IA", items: ["Human-in-the-Loop", "Governança de IA", "Guard rails"] },
    { group: "Analytics", items: ["Convergência entre IA e avaliadores", "Consistência das notas", "Ajustes manuais"] },
  ],
  learnings: [
    "Projetar IA para avaliações acadêmicas exige compreender o processo pedagógico e equilibrar eficiência com responsabilidade.",
    "A tecnologia acelera o processo; a decisão continua sendo humana.",
  ],
  cta: "journal",
  heroImage: { src: "/imagem/cases/hub-correcoes/hub-de-correcoes-capa.png", alt: "Capa do Hub de Correções" },
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
  context: ["Plataforma multimídia integrada de educação continuada e conteúdo odontológico.", "Uma pesquisa com centenas de participantes passou a orientar as decisões de produto e a definição de prioridades.", "A evolução do ecossistema reuniu conteúdo, relacionamento e canais digitais em uma proposta Premium para o público odontológico."],
  problem: ["Baixa maturidade digital e fragmentação na tomada de decisões de produto, com estratégias editoriais e comerciais baseadas em convicções empíricas internas.", "Era necessário estruturar uma oferta digital Premium capaz de integrar conteúdos ricos, relacionamento e evolução de receita."],
  contribution: ["Diagnóstico da base de clientes", "Estruturação de processos digitais", "Pesquisa com centenas de participantes", "Definição da arquitetura e funcionalidades orientadas pela pesquisa", "Estratégia", "Arquitetura da Informação", "Estratégia de Inbound Marketing", "RD Station para automação, segmentação e nutrição"],
  solution: "Estruturei uma plataforma integrada para conteúdo, relacionamento e evolução dos canais digitais. A estratégia combinou arquitetura orientada pela pesquisa, Inbound Marketing e RD Station para automação, segmentação e nutrição, agregando vídeos, áudios, ebooks e outros conteúdos ricos em uma proposta Premium.",
  quantitativeResults: [],
  qualitativeResults: ["Substituição de decisões empíricas por uma abordagem estruturada baseada em dados e canais integrados.", "Posicionamento do Odonto1 como produto Premium, com uma experiência editorial e de conteúdo mais integrada.", "Base estratégica para upsell, retenção e aumento de LTV por meio de conteúdo, segmentação e nutrição."],
  evidence: [{ type: "Interface", src: "/imagem/vm/ABROSS.png", alt: "Artefato visual do ecossistema Odonto1" }, { type: "Interface", src: "/imagem/vm/Banner_1920_x_346.jpg", alt: "Tela do ecossistema digital odontológico" }, { type: "Interface", src: "/imagem/vm/Banner_site_edicao1.png", alt: "Interface de publicação do ecossistema odontológico" }],
  stack: [{ group: "UX", items: ["Pesquisa", "Estratégia", "Arquitetura da Informação"] }, { group: "Analytics", items: ["RD Station", "Automação", "Segmentação", "Nutrição"] }],
  learnings: ["Conteúdo editorial aprovado para revisão de publicação."],
  cta: "journal",
  heroImage: { src: "/imagem/vm/Banner_1920_x_346.jpg", alt: "Odonto1" },
};
