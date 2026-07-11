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
  Monitor, 
  Smartphone, 
  Activity, 
  Award,
  Calendar,
  User,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
  Video,
  ExternalLink,
  LayoutGrid,
  Image as ImageIcon
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
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

export default function CarenetSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("orchestra");
  const [divaIndex, setDivaIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<"imagens" | "videos" | "prototipos" | "boards" | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "orchestra",
      title: "Orchestra",
      description: "Central hospitalar IoMT de telemetria e monitoramento de leitos em tempo real.",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      id: "diva",
      title: "Diva",
      description: "Aplicativo de registro beira-leito integrado com leitores de sinais vitais de pacientes.",
      icon: <Smartphone className="h-5 w-5" />
    }
  ];

  const divaSlides = [
    { src: "/imagem/carenet/diva/aprovadas/capa-google-play-x05.png", mode: "contain", label: "Capa do Aplicativo na Google Play Store" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145217.png", mode: "vertical", label: "Triagem - Seleção de Leito" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145313.png", mode: "vertical", label: "Registro de Temperatura e Sinais Vitais" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145408.png", mode: "vertical", label: "Cálculo Automatizado da Escala MEWS" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145504.png", mode: "vertical", label: "Resumo Clínico e Confirmação de Envio" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145603.png", mode: "vertical", label: "Histórico de Medições do Paciente" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145646.png", mode: "vertical", label: "Resumo da Escala de Risco Assistencial" }
  ];

  const caseStudies: Record<string, CaseStudyData> = {
    orchestra: {
      title: "Consolidando telemetria em tempo real para múltiplos leitos de UTI",
      challenge: "A dificuldade em integrar múltiplos equipamentos de IoMT de UTIs e consolidações clínicas críticas em painéis responsivos e seguros para acompanhamento médico remoto.",
      contribution: [
        "Monitoramento Remoto Responsivo: Adaptação de dashboards de altíssima complexidade clínica para telas móveis de médicos intensivos à distância.",
        "Apoio a Decisões na COVID-19: Consultoria estratégica e prototipagem de interfaces ágeis que reduziram o tempo de resposta clínico em momentos graves de ocupação de leitos.",
        "Handoff de Missão Crítica: Especificações e protótipos de alta fidelidade desenhados em tempo recorde sob alta pressão assistencial."
      ],
      results: "Tomada de decisão clínica remota segura e ágil durante crises de ocupação de UTIs, garantindo estabilidade e acompanhamento no tratamento intensivo.",
      role: "Consultor de UX & Product Design",
      duration: "Abril de 2021 – Julho de 2021 (Colaboração Pontual)",
      metric: "Redução no tempo de decisão clínica"
    },
    diva: {
      title: "Minimizando erros assistenciais no registro de sinais vitais beira-leito",
      challenge: "A alta taxa de erro humano e lentidão operacional na coleta manual e digitação de sinais vitais de pacientes nas rotinas de enfermagem hospitalar.",
      contribution: [
        "Design de UI de Baixo Atrito: Desenvolvimento de interfaces móveis simplificadas com alto contraste e navegação adaptada para plantões médicos intensos.",
        "Concepção da Marca e UX: Concepção visual da marca Diva e regras funcionais de validação automática para a Escala MEWS (risco de deterioração clínica).",
        "Documentação e Viabilidade: Entrega de handoff detalhado para engenharia, eliminando desalinhamento de front-end com os limites de processamento dos tablets beira-leito."
      ],
      results: "Redução expressiva em descompassos assistenciais no lançamento manual e maior velocidade no histórico clínico de pacientes à beira do leito.",
      role: "Consultor de UX & Product Design",
      duration: "Abril de 2021 – Julho de 2021",
      metric: "Mitigação de erros de preenchimento manual"
    }
  };

  const activeCase = caseStudies[selectedProjectId] || caseStudies.orchestra;

  const nextDiva = () => {
    setDivaIndex((prev) => (prev + 1) % divaSlides.length);
  };

  const prevDiva = () => {
    setDivaIndex((prev) => (prev - 1 + divaSlides.length) % divaSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const diffX = dragStartX - e.changedTouches[0].clientX;
    if (diffX > 50) {
      nextDiva();
    } else if (diffX < -50) {
      prevDiva();
    }
    setDragStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    const diffX = dragStartX - e.clientX;
    if (diffX > 50) {
      nextDiva();
    } else if (diffX < -50) {
      prevDiva();
    }
    setDragStartX(null);
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
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-650 block mb-3">
                Hub de Transformação • Carenet Longevity
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Carenet Longevity — Saúde Digital IoMT
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
                Liderei a evolução e consolidação conceitual da experiência de produtos integrados para monitoramento beira-leito e dashboards clínicos de alta complexidade (Orchestra e Diva).
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-white">
                <Image
                  src="/imagem/carenet/Logotipo_Carenet.avif"
                  alt="Carenet Logo"
                  width={140}
                  height={50}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Split Layout: Left Menu / Right Active Case */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-550 block mb-4">
                Projetos da IoMT (2)
              </span>

              {projects.map((proj) => {
                const isActive = selectedProjectId === proj.id;

                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      setDivaIndex(0);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group ${
                      isActive
                        ? "bg-zinc-950 border-zinc-950 dark:bg-zinc-905 dark:border-zinc-800 text-white shadow-md shadow-cyan-500/5"
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
                  <Paragraph variant="base" className="text-zinc-650 dark:text-zinc-300 leading-relaxed">
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
                      <li key={index} className="flex gap-3 text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">
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
                      onClick={() => setActiveModal("imagens")}
                      className="group flex flex-col items-start p-4 rounded-xl border border-zinc-250/60 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-left transition-all duration-300 relative overflow-hidden shadow-sm"
                    >
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-colors mb-3 border border-zinc-200/50 dark:border-zinc-700">
                        <ImageIcon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-850 dark:text-zinc-100 block mb-1">
                        Imagens / Mocks
                      </span>
                      <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">
                        Visualizar ({selectedProjectId === "diva" ? divaSlides.length : "2"} telas)
                      </span>
                    </button>

                    {/* Thumbnail 2: Vídeos */}
                    {activeCase.videoUrl ? (
                      <a
                        href={activeCase.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-start p-4 rounded-xl border border-zinc-250/60 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-left transition-all duration-300 relative overflow-hidden shadow-sm"
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

                {/* Confidentially / NDA Banner */}
                <div className="p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-900 bg-zinc-50/40 dark:bg-zinc-900/10 flex gap-3 items-start">
                  <ShieldAlert className="h-5 w-5 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed text-zinc-650 dark:text-zinc-300">
                    <strong>Nota de Segurança:</strong> Devido a acordos de confidencialidade de saúde assistencial (NDA), determinados fluxos clínicos, vídeos de uso real, protótipos de alta fidelidade e métricas internas detalhadas de telemetria hospitalar são omitidos ou mantidos sob sigilo.
                  </p>
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
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                  {selectedProjectId === "diva" ? "Aplicativo Diva" : "Orchestra IoMT"} — Anexo de Projeto
                </span>
                <Heading level={3} className="text-lg sm:text-xl font-semibold text-white m-0">
                  {activeModal === "imagens" && "Galeria de Capturas de Tela"}
                </Heading>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto flex items-center justify-center p-2 min-h-0">
              
              {/* IMAGENS MODAL */}
              {activeModal === "imagens" && (
                selectedProjectId === "diva" ? (
                  /* Slide Diva Emulator inside the Modal */
                  <div className="flex flex-col items-center select-none w-full">
                    <div className="relative w-[180px] sm:w-[220px] aspect-[9/19]">
                      <button 
                        onClick={prevDiva}
                        className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 transition-colors z-30 shadow-md"
                        aria-label="Slide anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextDiva}
                        className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 transition-colors z-30 shadow-md"
                        aria-label="Próximo slide"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <div className="w-full h-full rounded-[40px] border-[10px] border-zinc-900 bg-black overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-24 bg-zinc-900 rounded-b-2xl z-20 flex justify-center items-center">
                          <div className="h-1 w-10 bg-zinc-700 rounded-full" />
                        </div>
                        <div 
                          className="w-full h-full relative overflow-hidden bg-zinc-950 cursor-grab active:cursor-grabbing"
                          onTouchStart={handleTouchStart}
                          onTouchEnd={handleTouchEnd}
                          onMouseDown={handleMouseDown}
                          onMouseUp={handleMouseUp}
                        >
                          <div 
                            className="flex h-full w-full transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${divaIndex * 100}%)` }}
                          >
                            {divaSlides.map((slide, idx) => (
                              <div key={idx} className={`w-full h-full shrink-0 relative flex items-center justify-center ${idx === 0 ? "bg-[#0b1b3d]" : "bg-black"}`}>
                                <Image
                                  src={slide.src}
                                  alt={slide.label}
                                  fill
                                  sizes="280px"
                                  className="object-contain pointer-events-none"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-1.5">
                      {divaSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setDivaIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            divaIndex === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-400 text-center mt-3 font-mono">
                      {divaSlides[divaIndex].label}
                    </span>
                  </div>
                ) : (
                  /* Orchestra Images inside the Modal */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/30 p-3 flex flex-col justify-between">
                      <div className="relative w-full aspect-video">
                        <Image
                          src="/imagem/carenet/Orchestra 4 Telas - Fundo Transparente - 2025 - Mockups.avif"
                          alt="Orchestra Mockups"
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                      <span className="text-[10px] text-zinc-500 block text-center mt-3 font-mono">
                        Estrutura do Dashboard Multi-Equipamento Orchestra
                      </span>
                    </div>
                    <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/30 p-3 flex flex-col justify-between">
                      <div className="relative w-full aspect-video">
                        <Image
                          src="/imagem/carenet/print-orchestra.avif"
                          alt="Orchestra Real Screen"
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                      <span className="text-[10px] text-zinc-500 block text-center mt-3 font-mono">
                        Painel Clínico de Telemetria de Leito
                      </span>
                    </div>
                  </div>
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
