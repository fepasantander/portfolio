export interface CaseStudySection {
  title: string;
  paragraphs: string[];
}

export interface CaseStudy {
  slug: string;
  company: string;
  title: string;
  role: string;
  duration: string;
  challenge: string;
  contribution: string;
  impact: string;
  tags: string[];
  figmaUrl?: string;
  storytelling: CaseStudySection[];
  screenshots: string[];
  logoPath?: string;
  logoBg?: string;
  logoAlt?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "vitru-chat-llm",
    company: "Vitru",
    title: "VitruChat LLM — Plataforma Corporativa Multiagentes de IA",
    role: "Senior UX Designer | Innovation Lab",
    duration: "Jun/2025 – Atual",
    logoPath: "/imagem/vitru/logo-vitru-negative.png",
    logoBg: "bg-zinc-950 dark:bg-black",
    challenge: "Desenhar a experiência de uso de uma plataforma corporativa baseada em LLMs e arquitetura multiagentes, garantindo alta usabilidade, adoção e segurança para milhares de usuários.",
    contribution: "Responsável pelo UX end-to-end do produto no Innovation Lab. Conduzi o Product Discovery, estruturei jornadas conversacionais, defini princípios de usabilidade, métricas de UX para IA e especifiquei a documentação funcional para a Engenharia.",
    impact: "Consolidação da estratégia de IA da holding, contribuindo para levar a Vitru ao 1º lugar no segmento Educação do Prêmio Valor Inovação Brasil 2025.",
    tags: ["Artificial Intelligence", "LLMs", "UX Strategy", "Multi-agents", "Design Systems"],
    figmaUrl: "https://www.figma.com/proto/ektGl7UR42SIKCTavuUZMh/VitruChatLLM?node-id=2777-20907&t=TzGPyAVMwROz2uSN-0&scaling=scale-down-width&content-scaling=fixed&page-id=1450%3A5460&starting-point-node-id=2798%3A15073",
    storytelling: [
      {
        title: "1. Introdução e Contexto",
        paragraphs: [
          "No ecossistema da Vitru Educação (responsável pelas marcas Uniasselvi e UniCesumar), a evolução tecnológica demandava uma centralização de IA Generativa. O VitruChat nasceu como a plataforma oficial para empoderar colaboradores e estudantes com assistentes inteligentes de alto nível.",
          "O projeto foi concebido pelo Innovation Lab da holding com a missão de conectar modelos de linguagem de larga escala (LLMs) a problemas reais do cotidiano acadêmico e corporativo."
        ]
      },
      {
        title: "2. O Processo de Discovery e Alinhamento",
        paragraphs: [
          "Antes de projetar qualquer interface de conversa, conduzimos sessões estruturadas de UX Research, Business Analysis e alinhamento de viabilidade técnica. Reunimos stakeholders de Produto, Negócio e Engenharia de Software para mapear os fluxos operacionais.",
          "Essa esteira de validação contínua reduziu ambiguidades e permitiu que a arquitetura dos agentes inteligentes respondesse com precisão às necessidades reais dos usuários sem criar gargalos na engenharia."
        ]
      },
      {
        title: "3. Design de Interação e Arquitetura Multiagentes",
        paragraphs: [
          "O principal desafio de design foi traduzir o conceito complexo de 'múltiplos agentes de IA especialistas' em um fluxo de chat unificado e intuitivo. Desenhamos componentes que deixavam claro qual modelo ou agente estava operando em cada tarefa (ex: redação, análise de dados, programação).",
          "Para garantir a consistência visual, estruturei o Design System específico da Vitru para produtos de IA, estabelecendo padrões para estados de carregamento de respostas de IA, feedback de acurácia (likes/dislikes) e formatação de saídas em rich text."
        ]
      },
      {
        title: "4. Impacto e Reconhecimento",
        paragraphs: [
          "Ao conectar sistemas complexos e simplificar decisões, o VitruChat se consolidou como pilar estratégico de inovação do grupo. Essa e outras iniciativas posicionaram a Vitru como líder do segmento de Educação na 11ª edição do Prêmio Valor Inovação Brasil 2025.",
          "Este projeto demonstra como o design focado em clareza técnica e viabilidade de negócio consegue acelerar o time-to-market e a adoção de soluções de Inteligência Artificial Generativa corporativa."
        ]
      }
    ],
    screenshots: [] // Usuário poderá colocar caminhos de imagens depois
  }
];
