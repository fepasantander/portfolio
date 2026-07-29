import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function VitruOportunidadesTecnologicasPage() {
  return (
    <ExecutiveTransformationCase
      eyebrow="Vitru · Oportunidades Tecnológicas"
      title="UX como conexão entre inovação, negócio, usuários e engenharia."
      lead="A transformação na Vitru partiu da organização de uma esteira capaz de transformar hipóteses em soluções com mais clareza, consistência e responsabilidade em contexto de inteligência artificial."
      context="No Innovation Lab, a atuação conectou stakeholders, produto, negócio e engenharia para tratar Discovery, prototipação, Design System e acessibilidade como partes da mesma decisão. IA generativa e agentes foram incorporados com atenção a métricas de IA, governança, restrições técnicas e custo — sem reduzir a experiência a uma coleção de funcionalidades isoladas."
      operatingModel={[
        { title: "Discovery e direcionamento", description: "Hipóteses, necessidades de usuários e objetivos de negócio passaram a orientar decisões antes da implementação." },
        { title: "Design + Engenharia", description: "A colaboração aproximou viabilidade técnica, padrões de interface e prototipação para antecipar decisões e reduzir retrabalho." },
        { title: "IA com responsabilidade", description: "Métricas, governança, custo e restrições técnicas foram tratados como critérios de produto, não como detalhes posteriores." },
        { title: "Consistência e acesso", description: "Design System e acessibilidade sustentaram uma experiência mais coerente entre iniciativas e públicos." },
      ]}
      outcomes={[
        "Redução qualitativa de atritos ao tornar decisões e fluxos mais claros para diferentes públicos.",
        "Mais consistência entre hipóteses, protótipos, implementação e critérios de experiência.",
        "Uma passagem mais estruturada entre problema, decisão e solução, com menos retrabalho evitável.",
      ]}
      evidence={[
        { title: "VitruChat", description: "Evidência da aplicação de IA generativa na experiência interna e na organização de interações de trabalho.", href: "/cases/vitruchat" },
        { title: "SofIA", description: "Evidência da arquitetura conversacional, onboarding e direcionamento da jornada de suporte ao estudante.", href: "/cases/sofia" },
        { title: "Hub de Correções", description: "Evidência de IA assistida, revisão humana, acessibilidade e governança em um fluxo de avaliação.", href: "/cases/hub-correcoes" },
      ]}
    />
  );
}
