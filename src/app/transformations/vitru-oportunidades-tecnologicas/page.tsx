import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function VitruOportunidadesTecnologicasPage() {
  return (
    <ExecutiveTransformationCase
      company="Vitru Educação"
      role="Plataformas acadêmicas e Innovation Lab"
      period="2022–2026"
      eyebrow="Vitru Educação · evolução contínua"
      title="Vitru Educação"
      lead="Da evolução das plataformas acadêmicas à inovação em Inteligência Artificial: uma trajetória conectada pela experiência do estudante, pesquisa, Discovery e integração entre Produto e Engenharia."
      organizationalContext={[
        "A atuação começou em jornadas acadêmicas complexas da Uniasselvi: Renegociação, Biblioteca Virtual – PPC, Curricularização da Extensão e Autonomia Docência. Em comum, esses produtos exigiam traduzir regras, processos e necessidades educacionais em experiências mais claras para estudantes, docentes e operação.",
        "No Innovation Lab, essa base evoluiu para iniciativas de IA, pesquisa, experimentação e Discovery. A discussão passou a incluir novos produtos, governança, acessibilidade, prototipação e critérios compartilhados para transformar hipóteses em soluções responsáveis.",
      ]}
      challenge={[
        "Conectar produtos acadêmicos com regras e jornadas distintas a uma prática capaz de reduzir ambiguidade, antecipar decisões e preservar a experiência das pessoas.",
        "Explorar IA generativa sem separar necessidade do usuário, viabilidade técnica, governança, acessibilidade e contexto de negócio.",
      ]}
      contribution={[
        "Pesquisa, análise de negócio, arquitetura da informação, UX Writing e prototipação para jornadas acadêmicas e operacionais.",
        "Discovery e integração com Engenharia para discutir regras, restrições e decisões de implementação desde a formulação do problema.",
        "Design System e acessibilidade como capacidades reutilizáveis entre produtos e superfícies da plataforma.",
        "No Innovation Lab, articulação entre stakeholders, Produto e Engenharia em iniciativas de IA, agentes, governança e critérios de experiência.",
      ]}
      transformation={[
        {
          title: "Da jornada acadêmica à esteira de inovação",
          description: "A experiência construída em produtos educacionais criou repertório para lidar com regras, autonomia, acessibilidade e decisões que depois sustentaram novas iniciativas de IA.",
        },
        {
          title: "Pesquisa com alunos PCD",
          description: "A pesquisa associada à SofIA revelou necessidades que poderiam permanecer invisíveis sem escuta qualificada, reforçando Research como base para empatia, acessibilidade e decisões mais humanas.",
        },
        {
          title: "Produto e Engenharia mais próximos",
          description: "Viabilidade, fluxos e padrões passaram a ser discutidos durante Discovery e prototipação, antes de se tornarem decisões tardias de implementação.",
        },
        {
          title: "IA com responsabilidade",
          description: "Governança, acessibilidade, limites técnicos e critérios de qualidade entraram na conversa como parte inseparável da experiência.",
        },
      ]}
      processEvolution={[
        "Nas plataformas acadêmicas, pesquisa, requisitos, arquitetura e validação com Engenharia apoiaram a organização de jornadas de estudante, docente e operação.",
        "No Innovation Lab, Discovery e prototipação passaram a apoiar a passagem de hipótese para solução com mais clareza e alinhamento interdisciplinar.",
        "A análise heurística comparativa do Edu contribuiu como uma referência de pesquisa para leitura de atritos; não se tornou uma iniciativa concorrente aos produtos priorizados.",
      ]}
      culture={[
        "UX passou a contribuir para priorização, regras, governança e definição de critérios de qualidade — não apenas para a apresentação final da interface.",
        "A evolução de plataformas acadêmicas para iniciativas de IA preservou a mesma pergunta central: como conectar pessoas, negócio e tecnologia em decisões mais conscientes.",
      ]}
      evidence={[
        { title: "Renegociação", description: "Fase 1 · Jornada de autoatendimento para tornar regras financeiras, opções de acordo e próximos passos mais claros.", href: "/cases/renegociacao" },
        { title: "Biblioteca Virtual – PPC", description: "Fase 1 · Work in progress. Descoberta de acervo pedagógico, requisitos acadêmicos, acessibilidade e curadoria digital." },
        { title: "Curricularização da Extensão", description: "Fase 1 · Work in progress. Organização de jornadas e processos ligados às atividades extensionistas acadêmicas." },
        { title: "Autonomia Docência", description: "Fase 1 · Work in progress. Produto voltado à autonomia docente e à organização de rotinas acadêmicas." },
        { title: "VitruChat", description: "Fase 2 · Plataforma corporativa de IA generativa que materializa decisões de governança, agentes e arquitetura de experiência.", href: "/cases/vitruchat" },
        { title: "Hub de Correções", description: "Fase 2 · IA assistida, revisão humana, acessibilidade e governança em fluxos de avaliação acadêmica.", href: "/cases/hub-correcoes" },
        { title: "SofIA", description: "Fase 2 · Onboarding e arquitetura conversacional apoiados por pesquisa e atenção a necessidades de alunos PCD.", href: "/cases/sofia" },
      ]}
      learnings={[
        "A evolução profissional não se resume à tecnologia adotada: ela acontece quando capacidades de pesquisa, arquitetura e colaboração amadurecem junto com o contexto de produto.",
        "Research ajuda a revelar necessidades que não aparecem em métricas ou hipóteses internas, especialmente em experiências que precisam ser mais inclusivas.",
        "IA responsável depende de decisões que conectem usuário, negócio, tecnologia e governança desde o início.",
      ]}
    />
  );
}
