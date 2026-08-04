import { ExecutiveTransformationCase } from "@/components/sections/ExecutiveTransformationCase";

export default function VmComunicacaoPage() {
  return (
    <ExecutiveTransformationCase
      company="VM Comunicação"
      role="Coordenador Web"
      period="2014–2019"
      eyebrow="VM Comunicação · transformação operacional"
      title="Conectar impresso, digital, eventos e relacionamento em um ecossistema em evolução."
      lead="A atuação integrou Jornalismo, Web Design, SEO, Analytics, processos editoriais e Inbound Marketing para transformar canais isolados em uma operação digital conectada à audiência e ao negócio."
      organizationalContext={[
        "Revistas, eventos e iniciativas digitais conviviam com ritmos distintos de publicação, distribuição de conteúdo e relacionamento com a audiência.",
        "A evolução digital exigia aproximar Jornalismo, Desenvolvimento e Marketing para que o impresso, os sites, os eventos e os novos produtos deixassem de operar como frentes desconectadas.",
      ]}
      challenge={[
        "Integrar processos editoriais e digitais sem reduzir a experiência a páginas institucionais ou canais isolados.",
        "Transformar pesquisa, dados de audiência, SEO e Analytics em insumos para decisões de produto, conteúdo, relacionamento e operação.",
      ]}
      contribution={[
        "Coordenação Web conectando Jornalismo, Web Design, Desenvolvimento, publicações, sites e eventos.",
        "Estruturação de processos editoriais digitais com SEO e Analytics para apoiar leitura de audiência e evolução dos canais.",
        "Pesquisa de audiência que originou o Odonto1 e orientou a definição de sua proposta de valor Premium.",
        "Estratégia de Inbound Marketing com RD Station, automação, segmentação e régua de comunicação para relacionamento contínuo.",
        "Articulação de vídeos, áudios, ebooks e outros conteúdos ricos a uma estratégia de produto, assinatura e ecossistema.",
      ]}
      transformation={[
        {
          title: "Impresso e digital na mesma estratégia",
          description: "Publicações, sites, eventos e produto passaram a ser considerados como partes complementares de uma jornada de audiência e negócio.",
        },
        {
          title: "Pesquisa que originou um novo produto",
          description: "A pesquisa de audiência estruturou a criação do Odonto1 e deslocou decisões de produto de premissas internas para evidências de público.",
        },
        {
          title: "Operação preparada para Inbound",
          description: "SEO, Analytics, RD Station e automação passaram a conectar conteúdo, segmentação, nutrição e relacionamento em uma mesma lógica de jornada.",
        },
        {
          title: "Gestão da mudança no digital",
          description: "A integração entre Jornalismo e Desenvolvimento aproximou publicação, tecnologia e evolução contínua dos canais.",
        },
      ]}
      processEvolution={[
        "A publicação digital passou a considerar estrutura, SEO e leitura de dados junto com o trabalho editorial.",
        "Pesquisa de audiência passou a orientar proposta de valor, arquitetura e priorização de experiências digitais.",
        "Automação e segmentação com RD Station conectaram conteúdo, nutrição, cross-sell e relacionamento em uma lógica integrada de operação.",
      ]}
      culture={[
        "O digital deixou de ser uma extensão do impresso e passou a fazer parte da discussão de produto, audiência, processo editorial e negócio.",
        "Jornalismo, Design, Desenvolvimento e Marketing passaram a ter mais pontos de encontro na criação e evolução das experiências.",
      ]}
      evidence={[
        { title: "Odonto1", description: "Produto Premium nascido de pesquisa, conteúdo rico e uma experiência de assinatura conectada ao ecossistema.", href: "/cases/odonto1" },
        { title: "Revistas VM", description: "Evidência da integração entre publicação, SEO, Analytics, processos editoriais e operação digital.", href: "/cases/revistas-vm" },
        { title: "Eventos VM", description: "Evidência da conexão entre sites de eventos, mídia, carrinho próprio e leitura de dados.", href: "/cases/eventos-vm" },
      ]}
      learnings={[
        "Transformação digital ganha profundidade quando conteúdo, produto, marketing e tecnologia compartilham a mesma jornada.",
        "Pesquisa, SEO e Analytics se tornam estratégicos quando alteram decisões de proposta de valor e operação, não apenas relatórios.",
        "Gestão da mudança depende de criar pontes reais entre processos editoriais, Desenvolvimento e relacionamento com a audiência.",
      ]}
    />
  );
}
