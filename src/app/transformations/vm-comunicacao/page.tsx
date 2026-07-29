import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function VmComunicacaoPage() {
  return (
    <ExecutiveTransformationCase
      eyebrow="VM Comunicação · Ecossistema digital"
      title="De canais isolados a um ecossistema digital conectado."
      lead="Como Coordenador Web, a atuação conectou Jornalismo, Web Design, publicações, sites, eventos e marketing em uma lógica comum de produto, conteúdo e relacionamento."
      context="A pesquisa com centenas de respostas funcionou como mecanismo de decisão para compreender a audiência e orientar arquitetura, proposta de valor e funcionalidades. Odonto1 foi posicionado como produto Premium, reunindo vídeos, áudios, ebooks e outros conteúdos ricos. A estratégia de Inbound Marketing utilizou RD Station, segmentação e régua de comunicação para conectar produto, revistas e eventos em uma experiência contínua."
      operatingModel={[
        { title: "Pesquisa como base", description: "A escuta da audiência orientou decisões de produto, arquitetura e proposta de valor sem depender apenas de hipóteses internas." },
        { title: "Produto Premium", description: "Conteúdo rico, assinatura e experiência digital foram organizados como partes de uma proposta de valor integrada." },
        { title: "Inbound e relacionamento", description: "RD Station, segmentação e nutrição apoiaram uma régua de comunicação conectada aos interesses da audiência." },
        { title: "Ecossistema conectado", description: "Revistas, eventos e produto passaram a compor oportunidades de upsell, cross-sell, retenção e recorrência." },
      ]}
      outcomes={[
        "Uma leitura mais integrada entre conteúdo, produto, marketing e canais digitais.",
        "Decisões orientadas pela pesquisa e pela proposta de valor do produto Premium.",
        "Estrutura para apoiar relacionamento recorrente em vez de experiências digitais isoladas.",
      ]}
      evidence={[
        { title: "Odonto1", description: "Evidência do produto Premium, da pesquisa como decisão e da integração de conteúdo rico com a jornada digital.", href: "/cases/odonto1" },
        { title: "Revistas", description: "Evidência da frente editorial conectada ao ecossistema de audiência e conteúdo." },
        { title: "Eventos", description: "Evidência da conexão entre experiências digitais, publicações e iniciativas de relacionamento." },
      ]}
    />
  );
}
