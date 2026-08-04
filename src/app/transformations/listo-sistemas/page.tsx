import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function ListoSistemasPage() {
  return (
    <ExecutiveTransformationCase
      company="Listo"
      role="UX e estruturação de produto"
      period="Período sob confidencialidade"
      eyebrow="Listo · crédito e meios de pagamento"
      title="Tornar Discovery uma prática que conecta negócio, operação e Engenharia desde o início."
      lead="Em produtos de crédito e meios de pagamento, a atuação combinou Lean Inception, Shadowing, Discovery, Business Analysis, workshops e prototipação para qualificar decisões em jornadas B2B e B2C."
      organizationalContext={[
        "As soluções envolviam diferentes atores, regras de negócio e relações entre matriz, filiais, franqueador e franqueado.",
        "Decisões de produto precisavam considerar jornadas B2B e B2C, permissões, royalties e a viabilidade de uma operação distribuída.",
      ]}
      challenge={[
        "Criar alinhamento multidisciplinar antes que requisitos e decisões de interface se transformassem em retrabalho durante a implementação.",
        "Tornar visíveis as necessidades de negócio, operação e usuário em produtos com múltiplas regras, dependências e contextos de uso.",
      ]}
      contribution={[
        "Cofacilitação de Lean Inception com Daniela Freitas para criar alinhamento inicial entre as disciplinas envolvidas.",
        "Shadowing, Discovery e Business Analysis para aproximar decisões de produto da realidade de uso e operação.",
        "Workshops multidisciplinares e prototipação para discutir hipóteses antes da implementação.",
        "Integração da Engenharia desde o início para tratar viabilidade, dependências e decisões técnicas como parte do produto.",
        "Arquitetura e Design System para apoiar consistência entre fluxos, permissões e experiências de diferentes unidades.",
      ]}
      transformation={[
        {
          title: "Lean Inception como ponto de alinhamento",
          description: "A cofacilitação criou um espaço inicial para tornar problema, premissas e decisões visíveis entre as disciplinas envolvidas.",
        },
        {
          title: "Discovery próximo da operação",
          description: "Shadowing, Business Analysis e workshops conectaram hipóteses de produto à realidade de uso, negócio e operação.",
        },
        {
          title: "Engenharia desde a descoberta",
          description: "Viabilidade e dependências técnicas passaram a participar das conversas que definiam as hipóteses, os fluxos e os protótipos.",
        },
        {
          title: "Consistência para múltiplas unidades",
          description: "Arquitetura e Design System ajudaram a organizar padrões para matriz, filiais, franquias, permissões e regras distribuídas.",
        },
      ]}
      processEvolution={[
        "Lean Inception, Shadowing e Business Analysis aproximaram a formulação do problema do contexto real de operação.",
        "Workshops multidisciplinares e protótipos passaram a apoiar alinhamento e validação antes da implementação.",
        "A integração contínua com Engenharia tornou o processo mais consciente de viabilidade, dependências e escolhas técnicas.",
      ]}
      culture={[
        "UX passou a contribuir para organizar conversas entre negócio, operação, produto e tecnologia.",
        "A qualidade da decisão deixou de depender apenas da interface final e passou a ser construída ao longo do Discovery.",
      ]}
      evidence={[
        { title: "CDC", description: "Evidência de Lean Inception, Shadowing, Discovery, Business Analysis e workshop multidisciplinar em uma jornada B2B e B2C.", href: "/cases/cdc" },
        { title: "KGC", description: "Evidência de Discovery, protótipos e alinhamento de uma proposta de crédito pessoal com Engenharia.", href: "/cases/kgc" },
        { title: "Gestão Multiunidades", description: "Evidência da organização de matriz, filiais, permissões, royalties e padrões para uma operação distribuída.", href: "/cases/gestao-multiunidades" },
      ]}
      learnings={[
        "Liderança de transformação acontece quando diferentes disciplinas conseguem enxergar e decidir sobre o mesmo problema.",
        "Discovery ganha força quando negócio, operação e Engenharia participam da formulação das hipóteses.",
        "Arquitetura e padrões de experiência sustentam produtos que precisam operar em contextos e unidades diferentes.",
      ]}
    />
  );
}
