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
  BookOpen,
  Sparkles,
  Award,
  Calendar,
  User,
  Activity,
  CalendarDays,
  FileText,
  Lock,
  X,
  Video,
  ExternalLink,
  LayoutGrid,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "active" | "coming-soon";
}

interface CaseStudyData {
  title: string;
  challenge: string;
  contribution: string[];
  results: string;
  role: string;
  duration: string;
  metric: string;
  imagePath?: string;
  imageAlt?: string;
  prototypeUrl?: string;
  videoUrl?: string;
  boardUrl?: string;
}

export default function VmComunicacaoSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("odonto1");
  const [activeModal, setActiveModal] = useState<"imagens" | "videos" | "prototipos" | "boards" | null>(null);
  const [revistasIndex, setRevistasIndex] = useState(0);
  const [eventosIndex, setEventosIndex] = useState(0);
  const isDev = process.env.NODE_ENV === "development";

  const projects: ProjectItem[] = [
    {
      id: "odonto1",
      title: "Odonto 1",
      description: "Plataforma multimídia integrada de educação continuada e conteúdo odontológico.",
      icon: <BookOpen className="h-5 w-5" />,
      status: "active"
    },
    {
      id: "revistas",
      title: "Revistas",
      description: "Portais editoriais e periódicos científicos de odontologia (INPN, ImplantNews, PerioNews, PróteseNews, ImplantNewsPerio, OrtociênciaSPO, PCP).",
      icon: <FileText className="h-5 w-5" />,
      status: isDev ? "active" : "coming-soon"
    },
    {
      id: "eventos",
      title: "Eventos",
      description: "Plataformas digitais para feiras, congressos científicos e relacionamento.",
      icon: <CalendarDays className="h-5 w-5" />,
      status: isDev ? "active" : "coming-soon"
    }
  ];

  const revistasSlides = [
    { src: "/imagem/vm/revistas/aprovadas/1-capa-revistaimplantnews.png", label: "Capa - Revista ImplantNews" },
    { src: "/imagem/vm/revistas/aprovadas/2-site-revistaimplantnews.png", label: "Portal Web - ImplantNews" },
    { src: "/imagem/vm/revistas/aprovadas/3-capa-revistaimplantnewsperio.png", label: "Capa - Revista ImplantNewsPerio" },
    { src: "/imagem/vm/revistas/aprovadas/4-site-revistaimplantnewsperio.png", label: "Portal Web - ImplantNewsPerio" },
    { src: "/imagem/vm/revistas/aprovadas/5-capa-ortodontiaSPO.png", label: "Capa - Revista Ortodontia SPO" },
    { src: "/imagem/vm/revistas/aprovadas/6-site-ortodontiaSPO.png", label: "Portal Web - Ortodontia SPO" },
    { src: "/imagem/vm/revistas/aprovadas/7-capa-revistaprotesenews.png", label: "Capa - Revista Prótese News" },
    { src: "/imagem/vm/revistas/aprovadas/8-site-revistaprotesenews.png", label: "Portal Web - Prótese News" }
  ];

  const eventosSlides = [
    { src: "/imagem/vm/eventos/aprovadas/site-in26.png", label: "Portal Web - Congresso IN 2026" },
    { src: "/imagem/vm/eventos/aprovadas/site-orto26.png", label: "Portal Web - Congresso ORTO 2026" }
  ];

  const caseStudies: Record<string, CaseStudyData> = {
    odonto1: {
      title: "Substituindo decisões conceituais empíricas por dados e podcasts na transição digital",
      challenge: "Baixa maturidade digital e fragmentação na tomada de decisões de produto. As estratégias editoriais e comerciais baseavam-se em convicções empíricas internas da diretoria, gerando canais desintegrados e desperdício de esforço na captação de leads.",
      contribution: [
        "Cenário Encontrado: Ecossistema digital fragmentado e sem processos estruturados de validação, resultando em decisões baseadas em empirismo e intuições isoladas.",
        "Decisões Tomadas: Diagnóstico estruturado da base de clientes via pesquisa quanti-quali (SurveyMonkey) e mapeamento do tempo médio de deslocamento do público para guiar a criação de podcasts diários e trilhas de conhecimento.",
        "Impacto Gerado: Integração de réguas de relacionamento inbound ligando conteúdo gratuito a transmissões ao vivo pagas e vendas de ingressos, evoluindo a maturidade digital das equipes editoriais e comerciais."
      ],
      results: "Substituição do empirismo na tomada de decisões por processos consistentes de validação comportamental por dados, organizando a editora através do ecossistema digital.",
      role: "Coordenador Web",
      duration: "Agosto de 2014 – Abril de 2019",
      metric: "Validação de hipóteses por dados reais"
    },
    revistas: {
      title: "Digitalizando periódicos científicos impressos preservando a autoridade editorial",
      challenge: "Como modernizar a distribuição física de periódicos científicos de alta autoridade da editora (INPN, ImplantNews, PerioNews, PróteseNews, ImplantNewsPerio, OrtociênciaSPO e PCP) para plataformas digitais de alto desempenho, conectando o rigor científico dos artigos impressos a uma experiência de publicação ágil na web.",
      contribution: [
        "Cenário Encontrado: Processos de publicação web manuais e ineficientes geravam alto custo de redigitação, lentidão na publicação online e retrabalho contínuo de front-end devido à falta de consistência visual.",
        "Decisões Tomadas: Criação de um parser de diagramação (InDesign para HTML/CSS) em parceria com a equipe de TI e centralização de layouts responsivos sob um modelo unificado para todas as revistas.",
        "Impacto Gerado: Integração entre a produção impressa tradicional e o desenvolvimento de software, reduzindo a zero o retrabalho operacional e modernizando o acervo histórico científico."
      ],
      results: "Redução a zero no retrabalho e no tempo de digitação manual de artigos físicos, permitindo a transição digital fluida de todo o acervo histórico da editora.",
      role: "Coordenador Web",
      duration: "Agosto de 2014 – Abril de 2019",
      metric: "Automação no fluxo de publicação impresso-web",
      imagePath: "/imagem/vm/IMPLANT NEWS.png",
      imageAlt: "Logo ImplantNews"
    },
    eventos: {
      title: "Otimizando a captação de congressos nacionais e submissões científicas digitais",
      challenge: "A ineficiência operacional na comercialização física de inscrições e na submissão de painéis acadêmicos em grandes eventos nacionais recorrentes (IN, Orto, Abross, Ateliê Oral, Goiânia Dental Meeting, Celebration, Consenso e IPS) que mantêm as mesmas URLs ao longo das edições de 2014 a 2019.",
      contribution: [
        "Cenário Encontrado: Falta de padronização tecnológica e comercial em eventos recorrentes, exigindo retrabalho de desenvolvimento anual de novos portais sob o mesmo domínio.",
        "Decisões Tomadas: Modelagem de uma plataforma própria de ticketing, credenciamento e envio de pôsteres científicos integrada ao comercial, e reaproveitamento de domínios históricos para preservar relevância SEO.",
        "Impacto Gerado: Condução de pesquisas de campo com congressistas para otimização de fluxo e produção de campanhas promocionais em vídeo com segmentação via Google Ads no YouTube."
      ],
      results: "Otimização no fluxo de vendas online, credenciamento ágil de milhares de congressistas e submissões científicas integradas.",
      role: "Coordenador Web",
      duration: "Agosto de 2014 – Abril de 2019",
      metric: "Otimização de domínios e conversão de eventos",
      imagePath: "/imagem/vm/in24.png",
      imageAlt: "Logo Congresso IN"
    }
  };

  const activeCase = caseStudies[selectedProjectId] || caseStudies.odonto1;
  
  const hasImages = selectedProjectId === "revistas" || selectedProjectId === "eventos";
  const imageCountText = selectedProjectId === "revistas" 
    ? `${revistasSlides.length} telas` 
    : selectedProjectId === "eventos"
    ? `${eventosSlides.length} telas`
    : "1 tela";

  const nextRevista = () => {
    setRevistasIndex((prev) => (prev + 1) % revistasSlides.length);
  };

  const prevRevista = () => {
    setRevistasIndex((prev) => (prev - 1 + revistasSlides.length) % revistasSlides.length);
  };

  const nextEvento = () => {
    setEventosIndex((prev) => (prev + 1) % eventosSlides.length);
  };

  const prevEvento = () => {
    setEventosIndex((prev) => (prev - 1 + eventosSlides.length) % eventosSlides.length);
  };

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
                Hub de Transformação • VM Comunicação
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                VM Comunicação — Educação Científica
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
                Coordenei a equipe de desenvolvimento, UX e projetos digitais na modernização e unificação de ecossistemas educacionais e editoriais na área da Odontologia.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-zinc-950 dark:bg-zinc-950">
                <span className="text-2xl font-mono tracking-widest font-bold text-white uppercase">VM</span>
              </div>
            </div>
          </div>

          {/* Split Layout: Left Menu / Right Active Case */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-555 block mb-4">
                Projetos da Editora (3)
              </span>

              {projects.map((proj) => {
                const isActive = selectedProjectId === proj.id;
                const isComingSoon = proj.status === "coming-soon";

                return (
                  <button
                    key={proj.id}
                    disabled={isComingSoon}
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      setRevistasIndex(0);
                      setEventosIndex(0);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group ${
                      isActive
                        ? "bg-zinc-950 border-zinc-950 dark:bg-zinc-905 dark:border-zinc-800 text-white shadow-md shadow-cyan-500/5"
                        : isComingSoon
                        ? "bg-zinc-50/50 dark:bg-zinc-950/20 border-zinc-100 dark:border-zinc-900 opacity-60 cursor-not-allowed"
                        : "bg-white dark:bg-zinc-950 border-zinc-200/60 dark:border-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                    }`}
                  >
                    {/* Active highlight bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />
                    )}

                    <div className={`p-2 rounded-lg shrink-0 ${
                      isActive 
                        ? "bg-zinc-800 text-cyan-400" 
                        : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500"
                    }`}>
                      {proj.icon}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm leading-none block text-zinc-900 dark:text-zinc-100">
                          {proj.title}
                        </span>
                        {isComingSoon && (
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-mono tracking-wide uppercase px-1.5 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-500 shrink-0">
                            <Lock className="h-2 w-2" />
                            Em breve
                          </span>
                        )}
                        {isActive && (
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-mono tracking-wide uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 shrink-0 font-semibold">
                            Ativo
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] leading-relaxed ${
                        isActive ? "text-zinc-300" : "text-zinc-500"
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
              <div className="space-y-12">
                
                {/* Case Title & Overview */}
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">
                    <Sparkles className="h-4 w-4" />
                    Estudo de Caso Ativo
                  </span>
                  <Heading level={2} className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {activeCase.title}
                  </Heading>
                  <Paragraph variant="base" className="text-zinc-655 dark:text-zinc-300 leading-relaxed">
                    {activeCase.challenge}
                  </Paragraph>
                </div>

                {/* Core Challenges & UX contributions */}
                <div className="space-y-6">
                  <Heading level={3} className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Minha Atuação e Impacto no Design:
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
                    {hasImages ? (
                      <button
                        onClick={() => setActiveModal("imagens")}
                        className="group flex flex-col items-start p-4 rounded-xl border border-zinc-250/60 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-left transition-all duration-300 relative overflow-hidden shadow-sm w-full"
                      >
                        <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
                          <ImageIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-850 dark:text-zinc-100 block mb-1">
                          Imagens / Mocks
                        </span>
                        <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">
                          Visualizar ({imageCountText})
                        </span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex flex-col items-start p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/10 dark:bg-zinc-950/10 text-left opacity-40 cursor-not-allowed w-full"
                      >
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-650 mb-3">
                          <ImageIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 block mb-1">
                          Imagens / Mocks
                        </span>
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                          Em breve
                        </span>
                      </button>
                    )}

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
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-650 mb-3">
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
                        <div className="p-2 rounded-lg bg-white dark:bg-zinc-850 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
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
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-650 mb-3">
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
                        <div className="p-2 rounded-lg bg-white dark:bg-zinc-850 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
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
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-650 mb-3">
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
                    <User className="h-5 w-5 text-zinc-400 dark:text-zinc-550 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Cargo / Escopo</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{activeCase.role}</span>
                    </div>
                  </Card>

                  <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                    <Calendar className="h-5 w-5 text-zinc-400 dark:text-zinc-550 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Duração</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{activeCase.duration}</span>
                    </div>
                  </Card>

                  <Card hoverEffect={false} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 flex gap-3 items-start">
                    <Activity className="h-5 w-5 text-zinc-400 dark:text-zinc-550 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 block mb-1">Resultados de Projeto</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{activeCase.metric}</span>
                    </div>
                  </Card>
                </div>

              </div>
            </div>

          </div>

        </Container>
      </main>

      {/* FULLSCREEN OVERLAY MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-200/20 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-555">
                  {selectedProjectId === "odonto1" ? "Odonto 1" : selectedProjectId === "revistas" ? "Revistas Científicas" : "Eventos Científicos"} — Anexo de Projeto
                </span>
                <Heading level={3} className="text-lg sm:text-xl font-semibold text-white m-0">
                  {activeModal === "imagens" && "Galeria de Capturas de Tela"}
                </Heading>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full border border-zinc-850 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto flex items-center justify-center p-2 min-h-0">
              
              {/* IMAGENS MODAL */}
              {activeModal === "imagens" && (
                selectedProjectId === "revistas" ? (
                  /* Revistas covers and websites slideshow */
                  <div className="flex flex-col items-center select-none w-full max-w-2xl">
                    <div className="relative w-full aspect-video border border-zinc-800 rounded-2xl bg-zinc-950 p-2 flex items-center justify-center overflow-hidden">
                      <button 
                        onClick={prevRevista}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 transition-colors z-30 shadow-md"
                        aria-label="Slide anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextRevista}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 transition-colors z-30 shadow-md"
                        aria-label="Próximo slide"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <div className="relative w-full h-full">
                        <Image
                          src={revistasSlides[revistasIndex].src}
                          alt={revistasSlides[revistasIndex].label}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {revistasSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setRevistasIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            revistasIndex === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-400 text-center mt-3 font-mono">
                      {revistasSlides[revistasIndex].label}
                    </span>
                  </div>
                ) : selectedProjectId === "eventos" ? (
                  /* Eventos slideshow */
                  <div className="flex flex-col items-center select-none w-full max-w-2xl">
                    <div className="relative w-full aspect-video border border-zinc-800 rounded-2xl bg-zinc-950 p-2 flex items-center justify-center overflow-hidden">
                      <button 
                        onClick={prevEvento}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 transition-colors z-30 shadow-md"
                        aria-label="Slide anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextEvento}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 transition-colors z-30 shadow-md"
                        aria-label="Próximo slide"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <div className="relative w-full h-full">
                        <Image
                          src={eventosSlides[eventosIndex].src}
                          alt={eventosSlides[eventosIndex].label}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {eventosSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setEventosIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            eventosIndex === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-400 text-center mt-3 font-mono">
                      {eventosSlides[eventosIndex].label}
                    </span>
                  </div>
                ) : (
                  /* Standard single image for other cases */
                  activeCase.imagePath && (
                    <div className="w-full max-w-2xl bg-zinc-900/30 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={activeCase.imagePath}
                          alt={activeCase.imageAlt || activeCase.title}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                      <span className="text-[10px] text-zinc-550 block text-center mt-3 font-mono">
                        {activeCase.imageAlt || activeCase.title}
                      </span>
                    </div>
                  )
                )
              )}
              
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
