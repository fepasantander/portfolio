"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Card } from "@/components/ui/Card";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { 
  ArrowLeft, 
  CheckCircle2,
  Cpu,
  Sparkles,
  Award,
  Calendar,
  User,
  Activity,
  Brain,
  FileCheck2,
  X,
  Video,
  ExternalLink,
  LayoutGrid,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  locked?: boolean;
}

interface CaseStudyData {
  title: string;
  challenge: string;
  contribution: string[];
  results: string;
  role: string;
  duration: string;
  metric: string;
  prototypeUrl?: string;
  videoUrl?: string;
  boardUrl?: string;
}

interface EvidenceImage {
  src: string;
  alt: string;
  caption: string;
}

interface EvidenceGroup {
  id: string;
  label: string;
  images: EvidenceImage[];
}

const imagePath = (folder: string, filename: string) => `/imagem/vitru/vitruchat/${folder}/${filename.replaceAll("&", "%26")}`;

const vitruchatEvidenceGroups: EvidenceGroup[] = [
  {
    id: "v1-light",
    label: "Versão 1.0 — Tema claro",
    images: ["Chat_filterOpen&Boxes.png", "Indicadores_filterClose&boxes.png", "Indicadores_filterClose&lista.png", "VitruChat_AprendaUsar.png", "VitruChat_home.png"].map((filename) => ({
      src: imagePath("v1-light", filename),
      alt: "VitruChat LLM — versão 1.0, tema claro",
      caption: "VitruChat LLM — versão 1.0 · Tema claro",
    })),
  },
  {
    id: "v1-tour-guiado",
    label: "Versão 1.0 — Tour guiado",
    images: ["tour_home-step-01.png", "tour_home-step-10-b.png", "tour_home-step-15.png", "tour_home-step-17-b.png"].map((filename) => ({
      src: imagePath("v1-tour-guiado", filename),
      alt: "VitruChat LLM — Tour Guiado",
      caption: "VitruChat LLM — Tour Guiado",
    })),
  },
  {
    id: "v2-light",
    label: "Versão 2.0 — Tema claro",
    images: ["Acessibilidade_MenuOpen&PropOpen&PromptClosed.png", "chatViewProposta.png", "Pastas_MenuClosed&PropClosed&PromptClosed-2.png", "Pastas_MenuClosed&PropClosed&PromptOpen.png", "Pastas_MenuClosed&PropOpen&PromptClosed.png", "Pastas_MenuClosed&PropOpen&PromptOpen.png", "Pastas_MenuOpen&PropClosed&PromptClosed.png", "Pastas_MenuOpen&PropClosed&PromptOpen.png", "Pastas_MenuOpen&PropOpen&PromptClosed-2.png", "Pastas_MenuOpen&PropOpen&PromptOpen.png"].map((filename) => ({
      src: imagePath("v2-light", filename),
      alt: "VitruChat LLM — versão 2.0, tema claro",
      caption: "VitruChat LLM — versão 2.0 · Tema claro",
    })),
  },
  {
    id: "v2-dark",
    label: "Versão 2.0 — Tema escuro",
    images: ["Pastas_MenuClosed&PropClosed&PromptClosed.png", "Pastas_MenuClosed&PropClosed&PromptOpen-2.png", "Pastas_MenuClosed&PropOpen&PromptClosed-2.png", "Pastas_MenuClosed&PropOpen&PromptOpen-2.png", "Pastas_MenuOpen&PropClosed&PromptClosed-2.png", "Pastas_MenuOpen&PropClosed&PromptOpen-2.png", "Pastas_MenuOpen&PropOpen&PromptClosed-3.png", "Pastas_MenuOpen&PropOpen&PromptClosed.png", "Pastas_MenuOpen&PropOpen&PromptOpen-2.png"].map((filename) => ({
      src: imagePath("v2-dark", filename),
      alt: "VitruChat LLM — versão 2.0, tema escuro",
      caption: "VitruChat LLM — versão 2.0 · Tema escuro",
    })),
  },
];

const vitruchatImages = vitruchatEvidenceGroups.flatMap((group) => group.images.map((image) => ({ ...image, groupId: group.id, groupLabel: group.label })));
const priorityEvidenceIndexes = [4, 0, 5, 8, 9, 17, 19, 20];

export default function VitruSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("vitruchat");
  const [activeModal, setActiveModal] = useState<"imagens" | "videos" | "prototipos" | "boards" | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const triggerRef = React.useRef<HTMLElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  const closeModal = () => setActiveModal(null);
  const openGallery = (imageIndex: number, event: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget;
    setActiveImageIndex(imageIndex);
    setActiveModal("imagens");
  };

  React.useEffect(() => {
    if (!activeModal) {
      triggerRef.current?.focus();
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (activeModal === "imagens" && event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImageIndex((index) => Math.max(0, index - 1));
        return;
      }

      if (activeModal === "imagens" && event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImageIndex((index) => Math.min(vitruchatImages.length - 1, index + 1));
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  const projects: ProjectItem[] = [
    {
      id: "vitruchat",
      title: "VitruChat LLM",
      description: "Plataforma corporativa de IA Generativa para uso interno dos colaboradores.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: "sofia",
      title: "SofIA",
      description: "Assistente conversacional baseado em LLM para suporte pedagógico ao aluno.",
      icon: <Brain className="h-5 w-5" />,
      locked: true
    },
    {
      id: "hub-correcoes",
      title: "Hub de Correções",
      description: "Motor de inteligência artificial para correção automatizada de provas discursivas.",
      icon: <FileCheck2 className="h-5 w-5" />,
      locked: true
    }
  ];

  const caseStudies: Record<string, CaseStudyData> = {
    sofia: {
      title: "Otimizando a retenção e humanização do atendimento estudantil escalável com IA",
      challenge: "Gargalo no suporte ao cliente e custo operacional elevado devido à sobrecarga de chamados de atendimento acadêmico de rotina em polo e canais manuais de triagem.",
      contribution: [
        "Cenário Encontrado: Estudantes enfrentavam longas esperas para dúvidas básicas de matrícula/notas, sobrecarregando atendentes físicos com tarefas repetitivas.",
        "Decisões Tomadas: Concepção de fluxos conversacionais integrando regras pedagógicas em linguagem natural e micro-interações de onboarding para guiar o usuário no prompt.",
        "Impacto Gerado: Implementação de metas de contenção baseadas em árvore de decisão integrada a APIs de secretaria, organizando a esteira de suporte da instituição."
      ],
      results: "Redução do fluxo de transbordo de chamados de atendimento repetitivo na plataforma Uniasselvi, otimizando o suporte acadêmico diário.",
      role: "Senior UX Designer (IA)",
      duration: "Junho de 2025 – Atual",
      metric: "Contenção de chamados de rotina"
    },
    "hub-correcoes": {
      title: "Garantindo precisão e acessibilidade na correção automatizada de redações com IA",
      challenge: "Falta de credibilidade e resistência de revisores na adoção de algoritmos de inteligência artificial para correção automática de provas discursivas de grande escala.",
      contribution: [
        "Cenário Encontrado: Adoção nula do motor de IA por falta de transparência na atribuição automática de notas, com alta taxa de contestação docente.",
        "Decisões Tomadas: Design de uma trilha de auditoria transparente exibindo as regras de recomendação do modelo e criação de um painel de validação rápida para o professor editar notas.",
        "Impacto Gerado: Estruturação de fluxos de acessibilidade digital (WCAG), integrando o motor matemático às necessidades reais dos avaliadores docentes."
      ],
      results: "Aumento considerável na velocidade e consistência de correções avaliativas de larga escala, oferecendo segurança operacional aos revisores.",
      role: "Senior UX Designer (IA)",
      duration: "Junho de 2025 – Atual",
      metric: "Redução no ciclo de auditoria"
    }
  };

  const activeCase = caseStudies[selectedProjectId] || caseStudies.sofia;
  const activeImage = vitruchatImages[activeImageIndex];
  const activeGroup = vitruchatEvidenceGroups.find((group) => group.id === activeImage.groupId) ?? vitruchatEvidenceGroups[0];
  const activeGroupImageIndex = activeGroup.images.findIndex((image) => image.src === activeImage.src) + 1;
  const priorityEvidence = priorityEvidenceIndexes.map((index) => ({ image: vitruchatImages[index], index }));
  const evidenceBox = (
    <section className="space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-900" aria-labelledby="evidences-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Heading id="evidences-title" level={3} className="block text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Evidências e Apoio à Decisão (Anexos)</Heading>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Seleção inicial: 8 de {vitruchatImages.length} capturas.</p>
        </div>
        <button type="button" onClick={(event) => openGallery(0, event)} className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-cyan-500 hover:text-cyan-700 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300">
          <ImageIcon className="size-4" aria-hidden="true" />
          Abrir galeria completa
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {priorityEvidence.map(({ image, index }) => (
          <button key={image.src} type="button" onClick={(event) => openGallery(index, event)} aria-label={`Abrir ${image.caption}`} className="group relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 text-left transition-colors hover:border-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-cyan-400">
            <Image src={image.src} alt="" fill sizes="(min-width: 640px) 20vw, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            <span className="sr-only">{image.caption}</span>
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        <Container>
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/#transformations"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para as Transformações
            </Link>
          </div>

          {/* Subhome Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-zinc-100 dark:border-zinc-900">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-655 block mb-3">
                Hub de Inovação • Vitru
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Vitru — Oportunidades Tecnológicas
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
                Uma iniciativa estratégica do Innovation Lab para permitir o uso seguro de IA Generativa pelos colaboradores da Vitru.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-zinc-950 dark:bg-zinc-950">
                <span className="text-2xl font-mono tracking-widest font-bold text-white uppercase">VITRU</span>
              </div>
            </div>
          </div>

          {/* Split Layout: Left Menu / Right Active Case */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-550 block mb-4">
                Projetos do Lab (3)
              </span>

              {projects.map((proj) => {
                const isActive = selectedProjectId === proj.id;

                return (
                  <button
                    key={proj.id}
                    disabled={proj.locked}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group ${
                      proj.locked
                        ? "bg-zinc-50/50 dark:bg-zinc-950/40 border-zinc-200/40 dark:border-zinc-900/60 opacity-55 cursor-not-allowed text-zinc-400 dark:text-zinc-650"
                        : isActive
                        ? "bg-zinc-950 border-zinc-950 dark:bg-zinc-905 dark:border-zinc-800 text-white shadow-md shadow-cyan-500/5"
                        : "bg-white dark:bg-zinc-950 border-zinc-200/60 dark:border-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                    }`}
                  >
                    {/* Active highlight bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />
                    )}

                    <div className={`p-2 rounded-lg shrink-0 ${
                      proj.locked
                        ? "bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-400 dark:text-zinc-650"
                        : isActive 
                        ? "bg-zinc-800 text-cyan-400" 
                        : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500"
                    }`}>
                      {proj.icon}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold text-sm leading-none block ${
                          proj.locked
                            ? "text-zinc-400 dark:text-zinc-550"
                            : "text-zinc-900 dark:text-zinc-100"
                        }`}>
                          {proj.title}
                        </span>
                        {proj.locked ? (
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-mono tracking-wide uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 shrink-0 font-semibold border border-zinc-200/50 dark:border-zinc-800/50">
                            Em breve
                          </span>
                        ) : isActive && (
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-mono tracking-wide uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 shrink-0 font-semibold">
                            Ativo
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] leading-relaxed ${
                        proj.locked
                          ? "text-zinc-400/80 dark:text-zinc-650"
                          : isActive 
                          ? "text-zinc-300" 
                          : "text-zinc-500"
                      }`}>
                        {proj.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Main Content Panel */}
            <div className="lg:col-span-8">
              {selectedProjectId === "vitruchat" ? (
                <div className="space-y-12 animate-in fade-in duration-300">
                  
                  {/* Hero / Header Executivo */}
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">
                      <Sparkles className="h-4 w-4" />
                      Case 001 • Versão 2.0 • Official Source
                    </span>
                    <Heading level={2} className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight">
                      Estruturando uma Plataforma Corporativa de IA Generativa para Escalar Produtividade com Segurança
                    </Heading>
                  </div>

                  {/* Executive Summary */}
                  <div className="p-6 rounded-2xl border border-cyan-500/20 dark:border-cyan-500/10 bg-cyan-500/[0.02] dark:bg-cyan-500/[0.01] space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                    <h4 className="text-sm font-semibold flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                      <Sparkles className="h-4.5 w-4.5" />
                      Executive Summary
                    </h4>
                    <div className="space-y-4">
                      <Paragraph variant="base" className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        A popularização das IAs generativas criou um paradoxo para grandes organizações. Quanto maior a adoção de ferramentas públicas, maior o ganho de produtividade. Ao mesmo tempo, maior o risco de vazamento de informações estratégicas.
                      </Paragraph>
                      <Paragraph variant="base" className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        O desafio do Innovation Lab era encontrar um equilíbrio entre produtividade, governança e segurança, criando uma plataforma corporativa preparada para a evolução da Inteligência Artificial dentro da Vitru.
                      </Paragraph>
                      <Paragraph variant="base" className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Minha contribuição começou pelo desenho da interface, mas rapidamente evoluiu para uma visão mais ampla de produto, propondo uma arquitetura preparada para escalar, reutilizar componentes e aproximar a IA do contexto acadêmico da organização.
                      </Paragraph>
                    </div>
                  </div>

                  {evidenceBox}

                  {/* Contexto Organizacional */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Brain className="h-5 w-5 text-cyan-500 shrink-0" />
                      O Contexto
                    </h3>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      O VitruChat nasceu como uma iniciativa estratégica do Innovation Lab, autorizada pela Diretoria. Seu objetivo era criar um ambiente interno para utilização de IA Generativa pelos colaboradores da empresa.
                    </Paragraph>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      A decisão não buscava restringir o uso da Inteligência Artificial. Buscava permitir seu uso com segurança.
                    </Paragraph>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Ao centralizar a experiência em uma plataforma corporativa, a empresa reduzia riscos de exposição de informações sensíveis e iniciava o processo de letramento em agentes inteligentes.
                    </Paragraph>
                  </div>

                  {/* O Desafio */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Cpu className="h-5 w-5 text-cyan-500 shrink-0" />
                      O Desafio
                    </h3>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      O desafio nunca foi construir apenas um chat. Era necessário criar uma plataforma preparada para:
                    </Paragraph>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-1">
                      {[
                        "adoção em larga escala;",
                        "múltiplos agentes;",
                        "governança futura;",
                        "diferentes motores de IA;",
                        "crescimento contínuo;",
                        "reutilização de componentes;",
                        "evolução do produto sem reconstruções frequentes."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed items-center">
                          <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Além disso, a própria equipe ainda consolidava conhecimentos sobre RAG, custos de tokens, governança de agentes e arquitetura LLM.
                    </Paragraph>
                  </div>

                  {/* Minha Contribuição */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <User className="h-5 w-5 text-cyan-500 shrink-0" />
                      Minha Contribuição
                    </h3>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Fui inicialmente convidado para estruturar a interface da plataforma. Ao compreender melhor o contexto do projeto, procurei ampliar essa contribuição propondo uma visão mais sistêmica.
                    </Paragraph>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Minha intenção passou a ser transformar uma interface em uma plataforma preparada para evolução.
                    </Paragraph>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Entre as principais contribuições estavam:
                    </Paragraph>
                    <ul className="space-y-3.5 pl-1">
                      {[
                        "arquitetura escalável;",
                        "Design System desenvolvido em paralelo;",
                        "componentes reutilizáveis;",
                        "navegação preparada para crescimento;",
                        "menus expansíveis;",
                        "drag and drop para anexos;",
                        "suporte a múltiplos motores de IA;",
                        "preparação para múltiplos agentes;",
                        "temas claro e escuro;",
                        "estrutura de prompts voltada ao letramento em IA;",
                        "fluxo de avaliação por NPS;",
                        "central de acessibilidade."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-655 dark:text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contextualização acadêmica e camada gerencial */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Award className="h-5 w-5 text-cyan-500 shrink-0" />
                      Aproximando a IA do Universo Acadêmico
                    </h3>
                    <div className="space-y-4">
                      <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                        Um dos pontos que considerei mais importantes foi evitar que o VitruChat se tornasse apenas uma interface genérica de LLM.
                      </Paragraph>
                      <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                        Por atuar em um grupo educacional, fazia mais sentido aproximar a experiência do cotidiano de professores, pesquisadores e colaboradores.
                      </Paragraph>
                      <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                        Propus funcionalidades voltadas ao contexto acadêmico, incluindo:
                      </Paragraph>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <Card hoverEffect={false} className="p-5 border-zinc-200/60 dark:border-zinc-900 space-y-3 bg-zinc-50/10 dark:bg-zinc-950/10">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                          <Sparkles className="h-4.5 w-4.5 text-cyan-500" />
                          Contexto Acadêmico
                        </h4>
                        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300 pl-1">
                          {["geração de palavras-chave;", "apoio à escrita científica;", "organização bibliográfica;", "estrutura preparada para referências em ABNT;", "previsão de coautores."].map((feat, i) => (
                            <li key={i} className="flex gap-2 items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                        <Paragraph variant="base" className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          Minha intenção era contextualizar a IA à realidade da empresa, aumentando sua utilidade prática.
                        </Paragraph>
                      </Card>

                      <Card hoverEffect={false} className="p-5 border-zinc-200/60 dark:border-zinc-900 space-y-3 bg-zinc-50/10 dark:bg-zinc-950/10">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                          <Activity className="h-4.5 w-4.5 text-cyan-500" />
                          Pensando Além da Experiência do Usuário
                        </h4>
                        <Paragraph variant="base" className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          Também propus uma camada dedicada à gestão da plataforma. A ideia era permitir que gestores acompanhassem indicadores relacionados ao uso da IA.
                        </Paragraph>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Entre os indicadores previstos estavam:</p>
                        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300 pl-1">
                          {["consumo de tokens;", "efetividade dos prompts;", "custo financeiro estimado;", "consumo energético (kWh);", "estimativa de emissão de CO₂."].map((feat, i) => (
                            <li key={i} className="flex gap-2 items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                        <Paragraph variant="base" className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          Essa proposta ampliava a discussão sobre IA para temas de governança, sustentabilidade e eficiência operacional.
                        </Paragraph>
                      </Card>
                    </div>
                  </div>

                  {/* Escalabilidade */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Cpu className="h-5 w-5 text-cyan-500 shrink-0" />
                      Escalabilidade
                    </h3>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Grande parte das decisões de UX buscava reduzir retrabalho nas versões futuras.
                    </Paragraph>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      Por isso a arquitetura foi pensada para suportar:
                    </Paragraph>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-1">
                      {["crescimento funcional;", "novos agentes;", "novos motores LLM;", "novas integrações;", "novos componentes;", "evolução contínua do produto."].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed items-center">
                          <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Paragraph variant="base" className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      A intenção sempre foi construir uma base sólida para futuras versões.
                    </Paragraph>
                  </div>

                  {/* Limitações */}
                  <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-900/10 space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <X className="h-4.5 w-4.5 text-red-500 shrink-0" />
                      Limitações
                    </h4>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">Durante minha participação foi estruturada uma pesquisa quantitativa corporativa segmentada por vice-presidências.</Paragraph>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">O objetivo era compreender:</Paragraph>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300 pl-1">
                      {["uso atual da IA;", "necessidades futuras;", "integrações desejadas;", "oportunidades de evolução."].map((item, i) => (
                        <li key={i} className="flex gap-2 items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">A pesquisa acabou sendo despriorizada antes de sua aplicação. Mesmo assim, a arquitetura proposta permaneceu preparada para incorporar esses aprendizados posteriormente.</Paragraph>
                  </div>

                  {/* Aprendizados */}
                  <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-900/10 space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Brain className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                      Aprendizados
                    </h4>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">O VitruChat reforçou uma percepção que hoje orienta toda a minha forma de atuar.</Paragraph>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">Projetar produtos baseados em Inteligência Artificial não significa apenas desenhar boas interfaces. Exige compreender governança, escalabilidade, sustentabilidade, custos operacionais, arquitetura e estratégia de produto.</Paragraph>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">Minha intenção passou a ser antecipar necessidades futuras e aproximar Produto, Negócio e Engenharia desde o início do projeto.</Paragraph>
                  </div>

                  {/* Resultado */}
                  <div className="p-6 rounded-2xl border border-cyan-500/20 dark:border-cyan-500/10 bg-cyan-500/[0.02] dark:bg-cyan-500/[0.01] space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                      <Award className="h-4.5 w-4.5 shrink-0" />
                      Resultado
                    </h4>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">Mais do que participar da construção de uma plataforma baseada em IA, este projeto consolidou uma forma de pensar produtos.</Paragraph>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">Hoje procuro estruturar soluções capazes de evoluir continuamente, reduzir retrabalho e conectar diferentes áreas da organização em torno de uma visão comum.</Paragraph>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">Essa visão sistêmica é o principal aprendizado que levo do VitruChat e que continuo aplicando nos projetos seguintes.</Paragraph>
                  </div>

                  {/* Fact Sheet */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                    <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                      <User className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Empresa</span>
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Vitru Educação</span>
                      </div>
                    </Card>

                    <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                      <Calendar className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Área</span>
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Innovation Lab</span>
                      </div>
                    </Card>

                    <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                      <Activity className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Produto</span>
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">VitruChat LLM</span>
                      </div>
                    </Card>
                  </div>

                </div>
              ) : (
                <div className="space-y-12 animate-in fade-in duration-300">
                  
                  {/* Case Title & Overview */}
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">
                      <Sparkles className="h-4 w-4" />
                      Estudo de Caso Ativo
                    </span>
                    <Heading level={2} className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                      {activeCase.title}
                    </Heading>
                    <Paragraph variant="base" className="text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      {activeCase.challenge}
                    </Paragraph>
                  </div>

                  {/* Core Challenges & UX contributions */}
                  <div className="space-y-6">
                    <Heading level={3} className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      Minha Atuação e Impacto no Design de IA:
                    </Heading>
                    <ul className="space-y-4">
                      {activeCase.contribution.map((item, index) => (
                        <li key={index} className="flex gap-3 text-sm text-zinc-655 dark:text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results and recognitions */}
                  <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-900/10 space-y-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Award className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-250" />
                      Resultados de Impacto
                    </h4>
                    <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {activeCase.results}
                    </Paragraph>
                  </div>

                  {/* Media Thumbnails Row (Alteração Solicitada) */}
                  <div className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                    <Heading level={3} className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
                      Evidências e Apoio à Decisão (Anexos)
                    </Heading>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {/* Thumbnail 1: Imagens */}
                      <button
                        disabled
                        className="flex flex-col items-start p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/10 text-left opacity-40 cursor-not-allowed w-full"
                      >
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 mb-3">
                          <ImageIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 block mb-1">
                          Imagens / Mocks
                        </span>
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                          Em breve
                        </span>
                      </button>

                      {/* Thumbnail 2: Vídeos */}
                      {activeCase.videoUrl ? (
                        <a
                          href={activeCase.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-start p-4 rounded-xl border border-zinc-250/60 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-left transition-all duration-300 relative overflow-hidden shadow-sm w-full"
                        >
                          <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
                            <Video className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-semibold text-zinc-850 dark:text-zinc-100 block mb-1">
                            Vídeos / Demo
                          </span>
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">
                            Assistir
                          </span>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex flex-col items-start p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/10 text-left opacity-40 cursor-not-allowed w-full"
                        >
                          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 mb-3">
                            <Video className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 block mb-1">
                            Vídeos / Demo
                          </span>
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                            Em breve
                          </span>
                        </button>
                      )}

                      {/* Thumbnail 3: Protótipos */}
                      {activeCase.prototypeUrl ? (
                        <a
                          href={activeCase.prototypeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-start p-4 rounded-xl border border-zinc-250/60 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-left transition-all duration-300 relative overflow-hidden shadow-sm w-full"
                        >
                          <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
                            <ExternalLink className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-semibold text-zinc-850 dark:text-zinc-100 block mb-1">
                            Protótipo Figma
                          </span>
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">
                            Acessar
                          </span>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex flex-col items-start p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/10 text-left opacity-40 cursor-not-allowed w-full"
                        >
                          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 mb-3">
                            <ExternalLink className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 block mb-1">
                            Protótipo Figma
                          </span>
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                            Em breve
                          </span>
                        </button>
                      )}

                      {/* Thumbnail 4: Boards */}
                      {activeCase.boardUrl ? (
                        <a
                          href={activeCase.boardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-start p-4 rounded-xl border border-zinc-250/60 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-left transition-all duration-300 relative overflow-hidden shadow-sm w-full"
                        >
                          <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
                            <LayoutGrid className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-semibold text-zinc-850 dark:text-zinc-100 block mb-1">
                            Decisão / Boards
                          </span>
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">
                            Acessar
                          </span>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex flex-col items-start p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/10 text-left opacity-40 cursor-not-allowed w-full"
                        >
                          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 mb-3">
                            <LayoutGrid className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 block mb-1">
                            Decisão / Boards
                          </span>
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                            Em breve
                          </span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Fact Sheet */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                    <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                      <User className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Cargo / Escopo</span>
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{activeCase.role}</span>
                      </div>
                    </Card>

                    <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                      <Calendar className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Duração</span>
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{activeCase.duration}</span>
                      </div>
                    </Card>

                    <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                      <Activity className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Resultados de Projeto</span>
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{activeCase.metric}</span>
                      </div>
                    </Card>
                  </div>

                </div>
              )}
            </div>

          </div>

        </Container>
      </main>

      {/* FULLSCREEN OVERLAY MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="gallery-title" aria-describedby="gallery-position" className="relative flex h-[90vh] w-[90vw] max-w-none flex-col overflow-hidden rounded-3xl border border-zinc-200/20 bg-zinc-950 p-4 shadow-2xl sm:p-6 lg:p-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                  {selectedProjectId === "vitruchat" ? "VitruChat LLM" : selectedProjectId === "sofia" ? "SofIA" : "Hub de Correções"} — Anexo de Projeto
                </span>
                <Heading id="gallery-title" level={3} className="text-lg sm:text-xl font-semibold text-white m-0">
                  {activeModal === "imagens" && "Galeria de Capturas de Tela"}
                </Heading>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="min-h-0 flex-grow p-2">
              {activeModal === "imagens" && selectedProjectId === "vitruchat" && (
                <div className="flex h-full flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2" aria-label="Grupos de evidências">
                    {vitruchatEvidenceGroups.map((group) => {
                      const groupStartIndex = vitruchatImages.findIndex((image) => image.groupId === group.id);

                      return (
                        <button
                          key={group.id}
                          type="button"
                          aria-pressed={activeGroup.id === group.id}
                          onClick={() => setActiveImageIndex(groupStartIndex)}
                          className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white aria-pressed:border-cyan-400 aria-pressed:bg-cyan-400/10 aria-pressed:text-cyan-200"
                        >
                          {group.label}
                        </button>
                      );
                    })}
                  </div>
                  <p id="gallery-position" className="text-xs text-zinc-400" aria-live="polite">
                    Grupo atual: {activeGroup.label} · {activeGroupImageIndex} de {activeGroup.images.length} · Total: {activeImageIndex + 1} de {vitruchatImages.length}
                  </p>
                  <figure className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-2 sm:p-4">
                    <div className="relative min-h-0 w-full flex-1">
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        width={1440}
                        height={900}
                        className="h-full w-full object-contain"
                        sizes="90vw"
                        priority
                      />
                    </div>
                    <figcaption className="pt-3 text-center text-sm font-medium text-zinc-200" aria-live="polite">
                      {activeImage.caption}
                    </figcaption>
                  </figure>

                  <div className="flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((index) => Math.max(0, index - 1))}
                      disabled={activeImageIndex === 0}
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="size-4" aria-hidden="true" />
                      Anterior
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((index) => Math.min(vitruchatImages.length - 1, index + 1))}
                      disabled={activeImageIndex === vitruchatImages.length - 1}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Próxima
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
