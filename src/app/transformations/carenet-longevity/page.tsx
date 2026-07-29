import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function CarenetLongevityPage() {
  return (
    <ExecutiveTransformationCase
      eyebrow="Carenet Longevity · HealthTech"
      title="UX estruturada como capacidade de produto em HealthTech complexo."
      lead="A transformação organizou UX como uma prática que conecta pesquisa, análise de negócio, arquitetura e interação em produtos de contexto clínico e tecnológico exigente."
      context="Em um ambiente que envolve UTI, IoMT e decisões de alta complexidade, o foco foi criar linguagem compartilhada entre Produto e Tecnologia. Processos, Research, Business Analysis, Design System, arquitetura de informação e prototipação foram tratados como capacidade integrada para reduzir ambiguidade e tornar padrões reaproveitáveis entre produtos."
      operatingModel={[
        { title: "Estruturação de UX", description: "Processos e critérios de experiência deram continuidade às decisões ao longo de diferentes frentes de produto." },
        { title: "Pesquisa e análise", description: "Research e Business Analysis aproximaram o contexto de uso, requisitos e decisões de produto." },
        { title: "Arquitetura e interação", description: "Arquitetura de informação e padrões de interaction design ajudaram a tornar fluxos complexos mais compreensíveis." },
        { title: "Sistema compartilhado", description: "O Design System serviu como linguagem comum para consistência e reaproveitamento entre produtos." },
      ]}
      outcomes={[
        "Mais clareza para discutir decisões entre pessoas de Produto, UX e Tecnologia.",
        "Menos ambiguidade em fluxos e padrões que precisam se manter consistentes em contextos críticos.",
        "Base mais reaproveitável para evoluir experiências sem recomeçar a decisão a cada produto.",
      ]}
      evidence={[
        { title: "Harmonia", description: "Evidência de uma frente do ecossistema que materializa a busca por consistência de experiência." },
        { title: "Diva", description: "Evidência de decisões de arquitetura, interação e linguagem em uma superfície de produto." },
        { title: "Orchestra", description: "Evidência da integração entre produtos, tecnologia e fluxos em um contexto HealthTech." },
      ]}
    />
  );
}
