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
    "O ecossistema educacional gerava dezenas de milhões de atividades acadêmicas distribuídas entre atividades de estudo, provas, TCCs, relatórios de estágio, papers e atividades extensionistas.",
    "Aproximadamente 500 avaliadores dividiam esse trabalho com outras responsabilidades acadêmicas. Sem apoio de IA, cada atividade recebia pouco mais de um minuto de atenção humana.",
    "A proposta do Hub de Correções foi usar IA para priorizar os casos que realmente exigem avaliação, permitindo ampliar o tempo dedicado às atividades críticas para a ordem de aproximadamente doze minutos por avaliação.",
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

export const diva: EditorialCase = {
  slug: "diva",
  title: "Estruturando uma experiência móvel para apoiar decisões em HealthTech",
  company: "Carenet",
  category: "HealthTech",
  tags: ["UX", "Discovery", "Architecture", "Design System", "Front-end"],
  period: "Desde 2020",
  summary: "Uma frente de UX para estruturar fluxos, arquitetura e padrões de interface em um produto de HealthTech em evolução.",
  executiveSummary: "Atuei na estruturação da experiência do Diva, conectando arquitetura da informação, prototipação, Design System e conversas com Engenharia para apoiar a evolução consistente do produto.",
  context: [
    "O contexto HealthTech exigia que jornadas e informações fossem organizadas de modo claro em uma experiência móvel submetida a regras, prioridades e dependências de produto.",
    "A evolução do Diva ocorreu dentro de uma frente mais ampla de estruturação de UX, processos e padrões compartilhados na Carenet.",
  ],
  problem: [
    "Decisões de interface, arquitetura e implementação precisavam ganhar consistência para acompanhar a evolução do produto.",
    "Era necessário aproximar UX e Engenharia para discutir fluxos e padrões antes que se tornassem escolhas isoladas de implementação.",
  ],
  contribution: [
    "Estruturação de fluxos e arquitetura da informação",
    "Prototipação para discussão de decisões de experiência",
    "Definição e aplicação de padrões de Design System",
    "Apoio à evolução do produto com Produto e Engenharia",
    "Processo de UX orientado por clareza, consistência e viabilidade",
  ],
  solution: "Estruturei uma base de experiência que articulou fluxos, arquitetura e padrões reutilizáveis de interface, permitindo que UX e Engenharia discutissem a evolução do Diva com mais clareza e consistência.",
  quantitativeResults: [],
  qualitativeResults: [
    "A experiência passou a contar com uma base mais consistente para evolução de fluxos e interfaces.",
    "Arquitetura, protótipos e padrões de Design System aproximaram as discussões entre UX e Engenharia.",
  ],
  evidence: [
    { type: "Interface", src: "/imagem/carenet/diva/aprovadas/capa-google-play-x05.png", alt: "Capa do Diva" },
  ],
  stack: [
    { group: "UX", items: ["Arquitetura da Informação", "Fluxos", "Prototipação", "Design de Interação"] },
    { group: "Research", items: ["Discovery", "Processo de UX"] },
    { group: "Front-end", items: ["Design System", "Alinhamento com Engenharia"] },
  ],
  learnings: [
    "Em produtos de HealthTech, clareza de fluxo e consistência de padrões ajudam a tornar decisões complexas mais discutíveis.",
    "Design System ganha valor quando aproxima experiência, arquitetura e implementação ao longo da evolução do produto.",
  ],
  cta: "contact",
  heroImage: { src: "/imagem/carenet/diva/aprovadas/capa-google-play-x05.png", alt: "Capa do Diva" },
};

export const renegociacao: EditorialCase = {
  slug: "renegociacao",
  title: "Tornando a renegociação financeira mais clara no autoatendimento",
  company: "Uniasselvi",
  category: "EdTech",
  tags: ["UX", "Research", "Discovery", "Analytics", "Journey", "Architecture"],
  period: "2022–2025",
  summary: "Uma experiência de back-office, web e app para organizar a renegociação de débitos acadêmicos em uma jornada de autoatendimento.",
  executiveSummary:
    "Atuei na estruturação da jornada de renegociação para traduzir regras financeiras, opções de acordo e próximos passos em uma experiência digital mais clara para estudantes e para a operação.",
  context: [
    "A renegociação de débitos acadêmicos exigia a compreensão de regras, valores e possibilidades de acordo em diferentes momentos da jornada financeira do estudante.",
    "O projeto conectou experiências de app, web e back-office para apoiar o autoatendimento e a operação financeira.",
  ],
  problem: [
    "A complexidade de regras e taxas acumuladas criava fricção cognitiva durante a tomada de decisão do estudante.",
    "Era necessário organizar opções de negociação e pagamento sem depender exclusivamente de canais de atendimento humano.",
  ],
  contribution: [
    "Pesquisa com públicos relacionados à jornada financeira",
    "Análise de negócio e estruturação de requisitos",
    "Arquitetura da informação e fluxos de renegociação",
    "Prototipação para app, web e back-office",
    "Estruturação de mensagens e próximos passos da interface",
    "Validação de regras transacionais com Engenharia",
  ],
  solution:
    "Estruturei uma esteira de autoatendimento que organiza a visualização de débitos, opções de negociação e formas de pagamento em uma sequência de decisão mais clara. Requisitos, regras de negócio, fluxos e protótipos foram alinhados com a operação e validados com Engenharia antes da implementação.",
  quantitativeResults: [],
  qualitativeResults: [
    "A jornada consolidou pesquisa, regras de negócio e protótipos para orientar a experiência de renegociação em diferentes superfícies.",
    "A validação das regras transacionais com Engenharia antecedeu a implementação e ajudou a reduzir ambiguidades na definição da solução.",
  ],
  evidence: [
    {
      type: "Interface",
      src: "/imagem/cases/renegociacao/renegociacao-02.png",
      alt: "Telas do financeiro no aplicativo do aluno",
    },
  ],
  stack: [
    {
      group: "UX",
      items: ["Jornada financeira", "Arquitetura da Informação", "Prototipação"],
    },
    {
      group: "Research",
      items: ["Pesquisa", "Análise de negócio", "Requisitos e regras de negócio"],
    },
    {
      group: "Analytics",
      items: ["Definição de indicadores", "Acompanhamento de métricas"],
    },
  ],
  learnings: [
    "Em jornadas financeiras, clareza de regras, opções e próximos passos é parte central da experiência.",
    "A conexão entre pesquisa, negócio, Design e Engenharia ajuda a reduzir ambiguidades antes da implementação.",
  ],
  cta: "contact",
  heroImage: {
    src: "/imagem/cases/renegociacao/renegociacao-capa.png",
    alt: "Capa da Renegociação",
  },
};

export const bibliotecaVirtualPpc: EditorialCase = {
  slug: "biblioteca-virtual-ppc",
  title: "Organizando o acervo digital para a jornada acadêmica e regulatória",
  company: "Uniasselvi",
  category: "EdTech",
  tags: ["UX", "Discovery", "Accessibility", "Architecture", "Design System"],
  period: "2022–2025",
  summary: "Uma frente de biblioteca virtual voltada à descoberta de acervo pedagógico e à integração de requisitos acadêmicos.",
  executiveSummary: "Atuei na estruturação da experiência de biblioteca virtual para aproximar curadoria pedagógica, leitura digital, busca acadêmica e requisitos de acessibilidade.",
  context: ["A jornada de consulta ao acervo reunia diferentes fontes e critérios de bibliografia básica e complementar.", "A experiência precisava conectar a curadoria pedagógica à navegação e à leitura de conteúdo digital."],
  problem: ["Interfaces e integrações de editoras parceiras apresentavam padrões inconsistentes para busca e leitura.", "Era necessário organizar a descoberta do acervo com atenção a requisitos de acessibilidade e auditoria acadêmica."],
  contribution: ["Discovery e levantamento de requisitos", "Arquitetura da informação para busca e acervo", "Diretrizes de acessibilidade para leitura digital", "Alinhamento entre curadoria pedagógica e Engenharia", "Componentização no Design System"],
  solution: "Estruturei uma experiência de consulta ao acervo orientada por taxonomia, critérios de bibliografia e diretrizes de acessibilidade, articulando a jornada acadêmica com as restrições técnicas das integrações envolvidas.",
  quantitativeResults: [],
  qualitativeResults: ["A solução estabeleceu uma base mais consistente para descoberta e leitura do acervo pedagógico digital.", "A discussão de acessibilidade e padrões de interface passou a fazer parte da definição da experiência."],
  evidence: [{ type: "Documentação", src: "/imagem/uniasselvi/portfolio/biblioteca-virtual-ppc.svg", alt: "Identidade editorial da Biblioteca Virtual PPC" }],
  stack: [{ group: "UX", items: ["Arquitetura da Informação", "Acessibilidade", "Design System"] }, { group: "Research", items: ["Levantamento de requisitos", "Curadoria acadêmica"] }],
  learnings: ["A descoberta de conteúdo acadêmico depende tanto da taxonomia quanto da clareza da interface.", "Acessibilidade precisa orientar integrações e decisões de produto desde o início."],
  cta: "contact",
  heroImage: { src: "/imagem/uniasselvi/portfolio/biblioteca-virtual-ppc.svg", alt: "Identidade editorial da Biblioteca Virtual PPC" },
};

export const curricularizacaoExtensao: EditorialCase = {
  slug: "curricularizacao-extensao",
  title: "Estruturando a curricularização da extensão em uma jornada digital auditável",
  company: "Uniasselvi",
  category: "EdTech",
  tags: ["UX", "Discovery", "Journey", "Architecture", "Design System"],
  period: "2022–2025",
  summary: "Uma experiência para organizar o registro e a validação de atividades extensionistas no contexto acadêmico.",
  executiveSummary: "Atuei na definição de uma jornada digital para transformar registros dispersos de extensão em uma experiência mais estruturada para estudantes, tutores e operação acadêmica.",
  context: ["Atividades extensionistas exigiam registros e validações distribuídos entre diferentes participantes da jornada acadêmica.", "O cenário pedia uma forma mais estruturada de relacionar regras, evidências e acompanhamento das atividades."],
  problem: ["A falta de padronização no envio de portfólios e relatórios gerava esforço adicional de validação.", "Era necessário traduzir requisitos institucionais para uma experiência compreensível na jornada de estudantes e tutores."],
  contribution: ["Mapeamento de jornada e requisitos", "Arquitetura da informação", "Definição de fluxos de envio e validação", "Componentização para Design System", "Alinhamento com Produto e Engenharia"],
  solution: "Estruturei uma experiência de registro, envio e validação de atividades extensionistas, conectando regras institucionais, acompanhamento da jornada e padrões reutilizáveis de interface.",
  quantitativeResults: [],
  qualitativeResults: ["A proposta consolidou uma forma mais estruturada de registrar e validar atividades extensionistas.", "Padrões reutilizáveis ajudaram a alinhar a experiência entre diferentes contextos acadêmicos."],
  evidence: [{ type: "Documentação", src: "/imagem/uniasselvi/portfolio/curricularizacao-extensao.svg", alt: "Identidade editorial da Curricularização da Extensão" }],
  stack: [{ group: "UX", items: ["Jornada", "Arquitetura da Informação", "Design System"] }, { group: "Research", items: ["Requisitos institucionais", "Mapeamento de processo"] }],
  learnings: ["Processos institucionais ganham clareza quando regras e etapas são tratadas como parte da experiência.", "Padrões compartilhados reduzem ambiguidade entre operação, produto e tecnologia."],
  cta: "contact",
  heroImage: { src: "/imagem/uniasselvi/portfolio/curricularizacao-extensao.svg", alt: "Identidade editorial da Curricularização da Extensão" },
};

export const autonomiaDocencia: EditorialCase = {
  slug: "autonomia-docencia",
  title: "Apoiando a autonomia docente na gestão de diários de classe",
  company: "Uniasselvi",
  category: "EdTech",
  tags: ["UX", "Discovery", "Journey", "Architecture", "Front-end"],
  period: "2022–2025",
  summary: "Uma evolução da experiência de diário de classe para reduzir fricções administrativas na rotina docente.",
  executiveSummary: "Atuei na estruturação de uma experiência de preenchimento e acompanhamento de diários de classe, com foco em reduzir etapas repetitivas e alinhar necessidades docentes às restrições técnicas.",
  context: ["Docentes dependiam de sistemas de diário de classe para registrar notas e frequências em sua rotina acadêmica.", "A jornada reunia tarefas repetitivas e necessidades de continuidade mesmo diante de oscilações de conexão."],
  problem: ["O preenchimento de registros exigia muitos cliques e aumentava a carga administrativa.", "Era necessário definir uma experiência mais fluida sem ignorar limites de rede e persistência de dados."],
  contribution: ["Discovery da rotina docente", "Arquitetura de fluxos de lançamento", "Prototipação de preenchimento em lote", "Definição de interações com teclado", "Alinhamento técnico com Engenharia"],
  solution: "Estruturei fluxos de preenchimento mais diretos e uma proposta de lançamento em lote, orientando a interface por atalhos de teclado, continuidade de uso e requisitos de persistência dos registros.",
  quantitativeResults: [],
  qualitativeResults: ["A solução organizou uma alternativa mais direta para tarefas administrativas recorrentes de docentes.", "Decisões de interface foram alinhadas às limitações técnicas de rede e armazenamento dos registros."],
  evidence: [{ type: "Documentação", src: "/imagem/uniasselvi/portfolio/autonomia-docencia.svg", alt: "Identidade editorial da Autonomia Docência" }],
  stack: [{ group: "UX", items: ["Jornada", "Design de Interação", "Prototipação"] }, { group: "Front-end", items: ["Persistência", "Interações por teclado"] }],
  learnings: ["Reduzir atrito operacional começa por entender tarefas repetitivas no contexto real de uso.", "Design e Engenharia precisam tratar continuidade e persistência como decisões de experiência."],
  cta: "contact",
  heroImage: { src: "/imagem/uniasselvi/portfolio/autonomia-docencia.svg", alt: "Identidade editorial da Autonomia Docência" },
};

export const revistasVm: EditorialCase = {
  slug: "revistas-vm",
  title: "Conectando publicação impressa, presença digital e descoberta editorial",
  company: "VM Comunicação",
  category: "Enterprise",
  tags: ["UX", "Research", "Analytics", "Architecture", "Front-end"],
  period: "2014–2019",
  summary: "Evolução de revistas especializadas para superfícies digitais mais integradas à audiência e ao ecossistema VM.",
  executiveSummary: "Como Coordenador Web, atuei na integração entre Jornalismo e Desenvolvimento para transformar publicações impressas em experiências digitais orientadas por conteúdo, descoberta e relacionamento.",
  context: ["As revistas especializadas precisavam ampliar sua presença digital sem perder a lógica editorial construída no impresso.", "A frente digital também apoiava pesquisa de audiência e a preparação do ecossistema para estratégias de relacionamento."],
  problem: ["O ciclo de publicação e atualização digital exigia coordenação entre times editoriais e técnicos.", "Era necessário estruturar superfícies que apoiassem SEO, leitura, descoberta de conteúdo e preparação para Inbound Marketing."],
  contribution: ["Integração entre Jornalismo e Desenvolvimento", "Arquitetura de informação editorial", "Estratégia de SEO", "Estruturação de Google Analytics", "Preparação para Inbound Marketing", "Evolução de fluxos de publicação"],
  solution: "Estruturei superfícies editoriais digitais para aproximar conteúdo, busca, monitoramento e relacionamento, conectando o trabalho jornalístico aos fluxos de desenvolvimento e à evolução do ecossistema VM.",
  quantitativeResults: [],
  qualitativeResults: ["A operação passou a ter uma base digital mais integrada para publicação, descoberta e acompanhamento de conteúdo.", "A pesquisa de audiência e os canais editoriais ajudaram a preparar decisões posteriores de produto e relacionamento."],
  evidence: [{ type: "Interface", src: "/imagem/vm/revistas/aprovadas/2-site-revistaimplantnews.png", alt: "Site da revista ImplantNews" }],
  stack: [{ group: "UX", items: ["Arquitetura editorial", "Jornada de leitura", "UX Writing"] }, { group: "Analytics", items: ["Google Analytics", "SEO"] }, { group: "Front-end", items: ["Fluxos de publicação", "Integração editorial"] }],
  learnings: ["A transição do impresso para o digital exige integrar ritmo editorial, arquitetura e distribuição de conteúdo.", "Dados de audiência ajudam a conectar decisões de conteúdo, produto e relacionamento."],
  cta: "contact",
  heroImage: { src: "/imagem/vm/revistas/aprovadas/2-site-revistaimplantnews.png", alt: "Site da revista ImplantNews" },
};

export const eventosVm: EditorialCase = {
  slug: "eventos-vm",
  title: "Estruturando experiências digitais para o ecossistema de eventos VM",
  company: "VM Comunicação",
  category: "Enterprise",
  tags: ["UX", "Discovery", "Analytics", "Architecture", "Front-end"],
  period: "2014–2019",
  summary: "Sites e jornadas digitais para congressos conectados à audiência, ao conteúdo e às iniciativas de relacionamento da VM.",
  executiveSummary: "Como Coordenador Web, atuei na estruturação de experiências digitais para eventos, conectando sites, vídeo, mídia, carrinho próprio, monitoramento e a adoção de novas rotinas automatizadas.",
  context: ["Os eventos do ecossistema VM precisavam de superfícies digitais próprias para informação, relacionamento e conversão.", "A operação reunia sites, conteúdos em vídeo, mídia paga e iniciativas comerciais em diferentes momentos da jornada."],
  problem: ["Era necessário conectar jornadas de evento e canais digitais sem depender de experiências isoladas.", "A automação alterava rotinas de trabalho e exigia acompanhamento da mudança entre áreas envolvidas."],
  contribution: ["Arquitetura de sites de eventos", "Integração com YouTube", "Estratégia de Google Ads", "Estruturação de carrinho próprio", "Instrumentação de Analytics", "Apoio à gestão da mudança"],
  solution: "Estruturei experiências digitais de evento que articulavam conteúdo, mídia, carrinho e acompanhamento de dados, apoiando a conexão entre as frentes de divulgação, relacionamento e operação.",
  quantitativeResults: [],
  qualitativeResults: ["Os eventos passaram a contar com uma base digital mais conectada aos canais de conteúdo, mídia e relacionamento.", "A organização das rotinas ajudou a tornar a adoção de automações mais compreensível para as áreas envolvidas."],
  evidence: [{ type: "Interface", src: "/imagem/vm/eventos/aprovadas/site-in26.png", alt: "Site do IN Congress" }],
  stack: [{ group: "UX", items: ["Jornada de evento", "Arquitetura da Informação", "Prototipação"] }, { group: "Analytics", items: ["Google Analytics", "Google Ads"] }, { group: "Front-end", items: ["Sites de eventos", "Carrinho próprio", "YouTube"] }],
  learnings: ["Uma experiência de evento ganha consistência quando conteúdo, conversão e relacionamento compartilham a mesma jornada.", "Automação requer clareza de processo e acompanhamento da mudança entre as áreas."],
  cta: "contact",
  heroImage: { src: "/imagem/vm/eventos/aprovadas/site-in26.png", alt: "Site do IN Congress" },
};

export const cdc: EditorialCase = {
  slug: "cdc",
  title: "Estruturando Discovery para jornadas de crédito CDC",
  company: "Listo",
  category: "Fintech",
  tags: ["UX", "Research", "Discovery", "Journey", "Architecture", "Leadership"],
  period: "2019–2021",
  summary: "Uma frente de Discovery para aproximar negócio, operações e Engenharia em jornadas B2B e B2C de crédito direto ao consumidor.",
  executiveSummary: "Atuei na estruturação de Lean Inception, shadowing, workshops multidisciplinares e protótipos para jornadas de crédito CDC.",
  context: ["A jornada de crédito CDC reunia diferentes atores, regras de negócio e necessidades B2B e B2C.", "O contexto exigia alinhamento desde o início entre Produto, negócio, operações e Engenharia, especialmente durante a pandemia."],
  problem: ["Decisões de jornada e regras de negócio podiam chegar à Engenharia com ambiguidade e retrabalho.", "Era necessário criar um processo compartilhado de descoberta e validação para uma jornada financeira complexa."],
  contribution: ["Cofacilitação do Workshop Lean Inception com Daniela Freitas", "Shadowing e Discovery", "Business Analysis", "Workshops multidisciplinares", "Jornadas B2B e B2C", "Engenharia envolvida desde o primeiro dia"],
  solution: "Estruturei uma frente de Discovery que combinou observação, alinhamento multidisciplinar, análise de negócio e protótipos para tornar decisões de crédito CDC mais claras antes da implementação.",
  quantitativeResults: [],
  qualitativeResults: ["O trabalho criou uma base comum para discutir jornada, regras e prioridades entre áreas distintas.", "A presença de Engenharia desde o início apoiou a validação técnica das decisões em um período de mudanças intensas."],
  evidence: [{ type: "Documentação", src: "/imagem/listo/BANNER_1_97a153db13.png", alt: "Identidade editorial do CDC Listo" }],
  stack: [{ group: "UX", items: ["Lean Inception", "Jornada", "Prototipação"] }, { group: "Research", items: ["Shadowing", "Discovery", "Business Analysis"] }],
  learnings: ["Uma semana de Lean Inception reduziu meses de retrabalho de alinhamento entre Negócio e Engenharia.", "Jornadas financeiras complexas dependem de alinhamento contínuo entre quem define regras, quem constrói e quem opera."],
  cta: "contact",
  heroImage: { src: "/imagem/listo/BANNER_1_97a153db13.png", alt: "Identidade editorial do CDC Listo" },
};

export const kgc: EditorialCase = {
  slug: "kgc",
  title: "Apoiando decisões de crédito pessoal por meio de Discovery e prototipação",
  company: "Listo",
  category: "Fintech",
  tags: ["UX", "Research", "Discovery", "Journey", "Architecture"],
  period: "2019–2021",
  summary: "Uma frente de crédito pessoal estruturada a partir do alinhamento entre stakeholders, descoberta e validação com Desenvolvimento.",
  executiveSummary: "Atuei na condução de Discovery, alinhamento de stakeholders e protótipos para dar clareza a decisões de uma jornada de crédito pessoal antes de sua aprovação técnica.",
  context: ["A jornada de crédito pessoal exigia conciliar interesses de stakeholders e viabilidade de desenvolvimento.", "O projeto precisava tornar suas decisões de produto compreensíveis antes do detalhamento técnico."],
  problem: ["Regras e expectativas de diferentes stakeholders precisavam ser traduzidas em uma jornada de crédito coerente.", "Aprovação com desenvolvedores dependia de protótipos e decisões de interface suficientemente claros."],
  contribution: ["Alinhamento de stakeholders", "Product Discovery", "Mapeamento de jornada", "Prototipação", "Discussões de aprovação com desenvolvedores"],
  solution: "Estruturei a descoberta e a prototipação da jornada de crédito pessoal como instrumentos de alinhamento, permitindo que decisões de produto fossem discutidas com stakeholders e desenvolvedores antes da implementação.",
  quantitativeResults: [],
  qualitativeResults: ["Protótipos passaram a apoiar uma conversa mais concreta sobre a experiência e suas regras.", "A validação com desenvolvedores ajudou a aproximar decisão de produto e viabilidade técnica."],
  evidence: [{ type: "Documentação", src: "/imagem/listo/Design_sem_nome_13_eec4c125e2.png", alt: "Identidade editorial do KGC" }],
  stack: [{ group: "UX", items: ["Jornada", "Prototipação", "Arquitetura da Informação"] }, { group: "Research", items: ["Discovery", "Alinhamento de stakeholders"] }],
  learnings: ["Em produtos de crédito, protótipos ajudam a tornar regras e decisões negociáveis antes do desenvolvimento.", "Viabilidade técnica precisa entrar na conversa ainda durante a descoberta."],
  cta: "contact",
  heroImage: { src: "/imagem/listo/Design_sem_nome_13_eec4c125e2.png", alt: "Identidade editorial do KGC" },
};

export const gestaoMultiunidades: EditorialCase = {
  slug: "gestao-multiunidades",
  title: "Estruturando uma experiência multiunidades para operações franqueadas",
  company: "Listo",
  category: "Fintech",
  tags: ["UX", "Research", "Discovery", "Architecture", "Design System", "Leadership"],
  period: "2019–2021",
  summary: "Uma experiência para organizar relações entre matriz, filiais, franqueador, franqueado, permissões e regras de operação.",
  executiveSummary: "Atuei no Discovery e na arquitetura de uma experiência multiunidades, conectando decisões de CEO e COO a uma estrutura de permissões, royalties e padrões de interface reutilizáveis.",
  context: ["A operação multiunidades reunia relações distintas entre matriz e filiais, além de franqueador e franqueado.", "Permissões, royalties e responsabilidades precisavam ser compreendidos em uma mesma arquitetura de produto."],
  problem: ["A variedade de perfis e regras operacionais aumentava a complexidade da experiência.", "Era necessário alinhar a visão de negócio com uma arquitetura de informação e padrões escaláveis de interface."],
  contribution: ["Discovery com CEO e COO", "Mapeamento de perfis e permissões", "Arquitetura da informação", "Estruturação de regras de royalties", "Definição de padrões para Design System"],
  solution: "Estruturei a descoberta e a arquitetura da experiência multiunidades a partir das relações entre perfis, permissões e regras operacionais, criando uma base de padrões para a evolução do produto.",
  quantitativeResults: [],
  qualitativeResults: ["A solução tornou explícitas relações de operação que antes estavam distribuídas entre diferentes perfis e regras.", "A arquitetura e o Design System estabeleceram uma base mais consistente para evoluir a experiência."],
  evidence: [{ type: "Documentação", src: "/imagem/listo/Prancheta_4_59e2f2d95d.png", alt: "Identidade editorial da Gestão Multiunidades" }],
  stack: [{ group: "UX", items: ["Arquitetura da Informação", "Design System", "Jornada"] }, { group: "Research", items: ["Discovery executivo", "Mapeamento de operação"] }],
  learnings: ["Produtos multiunidades exigem que perfis, permissões e regras de negócio sejam legíveis como uma única experiência.", "Discovery com liderança ajuda a conectar arquitetura de produto e modelo operacional."],
  cta: "contact",
  heroImage: { src: "/imagem/listo/Prancheta_4_59e2f2d95d.png", alt: "Identidade editorial da Gestão Multiunidades" },
};
