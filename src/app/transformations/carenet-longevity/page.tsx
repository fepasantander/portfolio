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
  Sparkles
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
}

export default function CarenetSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("orchestra");
  const [divaIndex, setDivaIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

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
      title: "Orchestra: Central Hospitalar IoMT",
      challenge: "Como consolidar dados clínicos e telemetria de múltiplos equipamentos de UTIs em um dashboard responsivo e ágil que facilite a visualização para médicos fora do ambiente hospitalar.",
      contribution: [
        "Monitoramento Remoto Responsivo: Adaptação e design responsivo de dashboards de alta complexidade clínica para celulares de médicos, facilitando o acompanhamento remoto rápido de UTIs.",
        "UX no Combate à Pandemia de COVID-19: Consultoria focada e estratégica no início de 2020, auxiliando equipes médicas intensivas a tomarem decisões clínicas céleres à distância e ajudando a salvar vidas.",
        "Prototipagem Ágil com Adobe XD: Entrega ágil de fluxos de interfaces clínicas sem a necessidade de um Design System complexo para esta demanda urgente e crítica."
      ],
      results: "Tomadas de decisão clínica mais rápidas em momentos graves de ocupação de leitos de UTI, promovendo acompanhamento médico seguro mesmo fora do hospital durante a pandemia.",
      role: "Consultor de UX & Product Design",
      duration: "Abril de 2021 – Julho de 2021 (Colaboração Pontual)",
      metric: "UX de missão crítica no combate à COVID-19"
    },
    diva: {
      title: "Diva: Aplicativo de Registro Beira-Leito",
      challenge: "Como estruturar um aplicativo móvel utilitário com usabilidade simplificada e alto contraste para auxiliar equipes de enfermagem na coleta rápida e sem erros de sinais vitais à beira do leito.",
      contribution: [
        "Design de Interfaces Críticas: Concepção de fluxos e layouts para registro de sinais vitais, balanço hídrico, escalas de risco assistencial (como MEWS) e antibioticoterapia.",
        "Identidade Visual & Marca: Concepção conceitual completa da marca Diva, paleta de cores de alta visibilidade e navegação gestual rápida otimizada para o uso dinâmico em plantões.",
        "Documentação de Handoff: Criação de especificações funcionais ricas e protótipos de alta fidelidade reduzindo sensivelmente o tempo de desenvolvimento front-end."
      ],
      results: "Redução de erros no lançamento manual de dados clínicos e maior agilidade na consolidação do histórico assistencial beira-leito nas rotinas hospitalares.",
      role: "Consultor de UX & Product Design",
      duration: "Abril de 2021 – Julho de 2021",
      metric: "Redução de erros de lançamento manual"
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
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
                Hub de Transformação • Carenet Longevity
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Carenet — Interoperabilidade IoMT
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl">
                Consultoria estratégica de UX e Product Design atuando na concepção conceitual, arquitetura e consolidação de sistemas de saúde crítica de alta complexidade.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-white dark:bg-white">
                <Image
                  src="/imagem/carenet/Logotipo_Carenet.avif"
                  alt="Carenet Longevity Logo"
                  width={150}
                  height={50}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>

          {/* NDA Disclaimer */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/40 dark:border-amber-900/30 flex gap-4 items-start">
            <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-400 mb-1">
                Aviso de Confidencialidade (NDA)
              </h4>
              <p className="text-xs leading-relaxed text-amber-800/80 dark:text-amber-600">
                Parte significativa dos projetos encontra-se protegida por Acordos de Confidencialidade (NDA). Dados comerciais internos, fluxos específicos de pacientes e especificações técnicas de código proprietário foram omitidos ou simplificados. As informações e mockups exibidos representam telas e funcionalidades que já pertencem ao domínio público ou foram autorizadas para divulgação.
              </p>
            </div>
          </div>

          {/* Split Layout: Left Menu / Right Active Case */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-4">
                Projetos da IoMT (2)
              </span>

              {projects.map((proj) => {
                const isActive = selectedProjectId === proj.id;

                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group ${
                      isActive
                        ? "bg-zinc-950 border-zinc-950 dark:bg-zinc-900 dark:border-zinc-800 text-white shadow-md shadow-cyan-500/5"
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
                        <span className="font-semibold text-sm leading-none block">
                          {proj.title}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-mono tracking-wide uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 shrink-0 font-semibold">
                            Ativo
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] leading-relaxed ${
                        isActive ? "text-zinc-400" : "text-zinc-500"
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
                  <Heading level={2} className="text-3xl font-semibold tracking-tight">
                    {activeCase.title}
                  </Heading>
                  <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {activeCase.challenge}
                  </Paragraph>
                </div>

                {/* Imagery / Mocks / Smartphone Render according to selected project */}
                {selectedProjectId === "orchestra" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 overflow-hidden bg-zinc-50 dark:bg-zinc-950 p-4">
                      <Image
                        src="/imagem/carenet/Orchestra 4 Telas - Fundo Transparente - 2025 - Mockups.avif"
                        alt="Orchestra 4 Telas Mockup"
                        width={600}
                        height={400}
                        className="w-full object-contain rounded-lg"
                      />
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-600 block text-center mt-3 font-mono">
                        Estrutura do Dashboard Multi-Equipamento Orchestra
                      </span>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 overflow-hidden bg-zinc-50 dark:bg-zinc-950 p-4">
                      <Image
                        src="/imagem/carenet/print-orchestra.avif"
                        alt="Orchestra Real-time Telemetry Screen"
                        width={600}
                        height={400}
                        className="w-full object-contain rounded-lg"
                      />
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-600 block text-center mt-3 font-mono">
                        Painel Clínico de Telemetria de Leito
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Diva Smartphone Emulator integration matching visual identity */
                  <div className="flex flex-col items-center select-none pt-4">
                    <div className="relative w-[220px] sm:w-[260px] aspect-[9/19]">
                      
                      {/* Device Navigation Arrows */}
                      <button 
                        onClick={prevDiva}
                        className="absolute -left-14 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 text-zinc-850 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors z-30 shadow-md"
                        aria-label="Slide anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextDiva}
                        className="absolute -right-14 top-1/2 -translate-y-1/2 p-2 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 text-zinc-850 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors z-30 shadow-md"
                        aria-label="Próximo slide"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      {/* Premium Device Frame */}
                      <div className="w-full h-full rounded-[40px] border-[12px] border-zinc-900 dark:border-zinc-950 bg-black overflow-hidden shadow-2xl relative">
                        {/* Notch/Speaker */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-zinc-900 rounded-b-2xl z-20 flex justify-center items-center">
                          <div className="h-1 w-12 bg-zinc-700 rounded-full" />
                        </div>

                        {/* Sliding screenshots container */}
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
                                {slide.mode === "vertical" ? (
                                  <div className="w-full h-full relative">
                                    <Image
                                      src={slide.src}
                                      alt={slide.label}
                                      fill
                                      sizes="(max-width: 640px) 280px, 320px"
                                      className="object-cover pointer-events-none"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-full h-full relative p-2 flex items-center justify-center bg-transparent">
                                    <Image
                                      src={slide.src}
                                      alt={slide.label}
                                      fill
                                      sizes="(max-width: 640px) 280px, 320px"
                                      className="object-contain pointer-events-none"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-md">
                      {divaSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setDivaIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            divaIndex === idx
                              ? "w-8 bg-zinc-950 dark:bg-zinc-50"
                              : "w-2 bg-zinc-300 dark:bg-zinc-800"
                          }`}
                          aria-label={`Ver tela ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-650 block text-center mt-3 font-mono">
                      {divaSlides[divaIndex].label}
                    </span>
                  </div>
                )}

                {/* Core Challenges & UX contributions */}
                <div className="space-y-6">
                  <Heading level={3} className="text-lg font-semibold">
                    Minha Atuação e Impacto no Design:
                  </Heading>
                  <ul className="space-y-4">
                    {activeCase.contribution.map((item, index) => (
                      <li key={index} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results and recognitions */}
                <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-950/20 space-y-4">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200" />
                    Resultados de Impacto
                  </h4>
                  <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                    {activeCase.results}
                  </Paragraph>
                </div>

                {/* Fact Sheet */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                  <Card hoverEffect={false} className="p-5 bg-zinc-50/25 dark:bg-zinc-950/10 flex gap-3 items-start">
                    <User className="h-5 w-5 text-zinc-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 block mb-1">Cargo / Escopo</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-250">{activeCase.role}</span>
                    </div>
                  </Card>

                  <Card hoverEffect={false} className="p-5 bg-zinc-50/25 dark:bg-zinc-950/10 flex gap-3 items-start">
                    <Calendar className="h-5 w-5 text-zinc-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 block mb-1">Duração</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-250">{activeCase.duration}</span>
                    </div>
                  </Card>

                  <Card hoverEffect={false} className="p-5 bg-zinc-50/25 dark:bg-zinc-950/10 flex gap-3 items-start">
                    <Activity className="h-5 w-5 text-zinc-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400 block mb-1">Resultados de Projeto</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-250">{activeCase.metric}</span>
                    </div>
                  </Card>
                </div>

              </div>
            </div>

          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
