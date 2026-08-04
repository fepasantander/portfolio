import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function CarenetLongevityPage() {
  return (
    <ExecutiveTransformationCase
      company="Carenet"
      role="Consultoria contínua em UX e Product Design"
      period="Desde 2020"
      eyebrow="Carenet · estruturação estratégica de UX"
      title="Estruturar UX como uma capacidade compartilhada de produto em um contexto clínico complexo."
      lead="A consultoria iniciada em 2020 começou pela Orchestra e evoluiu para a estruturação da área de UX, de processos e de uma linguagem comum entre pesquisa, negócio, arquitetura, Produto e Tecnologia em HealthTech."
      organizationalContext={[
        "A entrada na consultoria ocorreu pela Orchestra, em um contexto de HealthTech com produtos e fluxos ligados a UTI e IoMT, no qual decisões de UX, arquitetura, requisitos e interação precisavam ganhar consistência.",
        "A atuação contínua desde 2020 evoluiu da Orchestra para a estruturação da área de UX, de processos e de Design System, criando condições para Harmonia e Diva avançarem com uma linguagem de produto mais compartilhada.",
      ]}
      challenge={[
        "Evitar que complexidade clínica e técnica se transformasse em ambiguidade de produto, requisitos desconectados ou padrões isolados.",
        "Estruturar processos de Research, Business Analysis, arquitetura e Design System que apoiassem a evolução de soluções em vez de responder apenas a demandas pontuais.",
      ]}
      contribution={[
        "Estruturação da área de UX e de processos para orientar decisões de produto de forma recorrente.",
        "Pesquisa e Business Analysis como base para esclarecer necessidades, requisitos, riscos e prioridades antes da definição de fluxos.",
        "Arquitetura da informação, Interaction Design e prototipação para tornar decisões complexas discutíveis entre Produto e Tecnologia.",
        "Design System como linguagem comum para reaproveitar padrões e dar coerência à evolução das soluções.",
        "Articulação estratégica entre Produto, Tecnologia e o contexto de operação em HealthTech.",
      ]}
      transformation={[
        {
          title: "Da Orchestra à capacidade de UX",
          description: "A experiência iniciada na Orchestra evoluiu para estruturar critérios, processos e conversas que sustentam decisões de produto em Harmonia, Diva e demais frentes.",
        },
        {
          title: "Processos que aproximam evidência e decisão",
          description: "Pesquisa e Business Analysis ajudaram a reduzir interpretações soltas na definição de jornadas, requisitos e prioridades.",
        },
        {
          title: "Design System como linguagem compartilhada",
          description: "Padrões de interação, arquitetura e implementação passaram a ter uma referência comum para favorecer consistência e reaproveitamento.",
        },
        {
          title: "Estratégia além da interface",
          description: "A atuação conectou arquitetura, interação e protótipos à forma de discutir produto, tecnologia e continuidade entre soluções.",
        },
      ]}
      processEvolution={[
        "Research e Business Analysis passaram a alimentar a discussão de requisitos e jornadas antes da definição visual.",
        "Arquitetura, protótipos e Interaction Design tornaram decisões complexas mais tangíveis para Produto e Tecnologia.",
        "O Design System criou uma base para reaproveitamento, consistência e evolução mais coordenada do ecossistema.",
      ]}
      culture={[
        "UX passou a participar mais cedo das conversas que organizam problema, requisito, arquitetura e experiência.",
        "Produto e Tecnologia ganharam uma linguagem mais clara para discutir decisões em um domínio clínico e técnico sensível.",
      ]}
      evidence={[
        { title: "Orchestra", description: "Work in progress. Ponto de entrada da consultoria em 2020, no início da pandemia, com melhorias visuais e prototipação. Case público ainda não disponível." },
        { title: "Diva", description: "Evidência da ampliação da atuação: estruturação de UX, arquitetura, integração com Engenharia e Design System para a evolução do produto.", href: "/cases/diva" },
        { title: "Harmonia", description: "Work in progress. Evidência da consolidação de processos, padrões e capacidade de UX no ecossistema. Protegido por NDA; Case público ainda não disponível." },
      ]}
      learnings={[
        "Estruturar UX é criar uma capacidade duradoura para que Produto e Tecnologia tomem decisões mais claras e compartilhadas.",
        "Pesquisa, análise de negócio e arquitetura ganham potência quando operam como uma mesma prática de produto.",
        "Liderança estratégica se materializa em processos, linguagem comum e padrões que permitem continuidade entre soluções.",
      ]}
    />
  );
}
