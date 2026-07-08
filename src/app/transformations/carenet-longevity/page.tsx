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
  ExternalLink, 
  ShieldAlert, 
  Monitor, 
  Smartphone, 
  Activity, 
  CheckCircle2,
  Play,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  Award
} from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function CarenetSubhomePage() {
  const [activeTab, setActiveTab] = useState<"orchestra" | "diva">("orchestra");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [divaIndex, setDivaIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const divaSlides = [
    { src: "/imagem/carenet/diva/aprovadas/capa-google-play-x05.png", mode: "contain", label: "Capa do Aplicativo na Google Play Store" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145217.png", mode: "vertical", label: "Triagem - Seleção de Leito" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145313.png", mode: "vertical", label: "Registro de Temperatura e Sinais Vitais" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145408.png", mode: "vertical", label: "Cálculo Automatizado da Escala MEWS" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145504.png", mode: "vertical", label: "Resumo Clínico e Confirmação de Envio" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145603.png", mode: "vertical", label: "Histórico de Medições do Paciente" },
    { src: "/imagem/carenet/diva/aprovadas/Captura de tela 2026-07-02 145646.png", mode: "vertical", label: "Resumo da Escala de Risco Assistencial" }
  ];

  const handleExternalLinkClick = (label: string, url: string) => {
    analytics.trackCTA(`Carenet Hub: ${label}`, url);
    setIsModalOpen(true);
  };

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
                Orquestração de Dados Clínicos e Interoperabilidade IoMT
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

          {/* NDA Banner Warning */}
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

          {/* Navigation Tabs */}
          <div className="mt-16 flex border-b border-zinc-100 dark:border-zinc-900 gap-6">
            <button
              onClick={() => setActiveTab("orchestra")}
              className={`pb-4 text-lg font-semibold flex items-center gap-2 border-b-2 transition-all duration-300 ${
                activeTab === "orchestra"
                  ? "border-zinc-950 text-zinc-950 dark:border-zinc-50 dark:text-zinc-50"
                  : "border-transparent text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300"
              }`}
            >
              <Monitor className="h-5 w-5" />
              Orchestra
            </button>
            <button
              onClick={() => setActiveTab("diva")}
              className={`pb-4 text-lg font-semibold flex items-center gap-2 border-b-2 transition-all duration-300 ${
                activeTab === "diva"
                  ? "border-zinc-950 text-zinc-950 dark:border-zinc-50 dark:text-zinc-50"
                  : "border-transparent text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300"
              }`}
            >
              <Smartphone className="h-5 w-5" />
              Diva
            </button>
          </div>

          {/* Product Deep-Dives */}
          <div className="mt-12">
            {activeTab === "orchestra" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Text Context */}
                <div className="lg:col-span-6 space-y-8">
                  <div>
                    <Heading level={2} className="text-2xl font-semibold mb-4">
                      Orchestra: Central Hospitalar IoMT
                    </Heading>
                    <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Participei de uma colaboração pontual de alto impacto na evolução do **Orchestra**, desenhando interfaces específicas no Adobe XD para viabilizar a visualização remota e ágil de dados de leito.
                    </Paragraph>
                  </div>

                  <div className="space-y-4">
                    <Heading level={3} className="text-base font-semibold">
                      Minha Atuação e Impacto Assistencial:
                    </Heading>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200 shrink-0 mt-0.5" />
                        <span><strong>Monitoramento Remoto Responsivo:</strong> Adaptação e design responsivo de dashboards clínicos para os celulares dos médicos, facilitando a visualização em tempo real do estado de pacientes graves na UTI à distância, quando os médicos não podiam estar fisicamente no hospital.</span>
                      </li>
                      <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200 shrink-0 mt-0.5" />
                        <span><strong>UX no Combate à Pandemia de COVID-19:</strong> O projeto ocorreu no início de 2020. Em um momento de extrema pressão sobre o sistema de saúde e necessidade de distanciamento, a interface serviu como uma ferramenta direta no combate à pandemia, acelerando decisões clínicas cruciais e ajudando a salvar vidas.</span>
                      </li>
                      <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200 shrink-0 mt-0.5" />
                        <span><strong>Prototipagem Ágil com Adobe XD:</strong> Entrega focada na urgência e utilidade prática das telas assistenciais, sem a necessidade de desenvolvimento de um Design System complexo para esta demanda emergencial.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/20">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-3">
                      <Activity className="h-4 w-4" />
                      Resultados de Valor
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                      Integração de dados críticos na ponta dos dedos dos médicos especialistas, reduzindo o tempo de resposta clínico emergencial em momentos graves de ocupação de leitos de UTI durante a crise de COVID-19.
                    </p>
                  </div>
                </div>

                {/* Imagery / Orchestra prints */}
                <div className="lg:col-span-6 space-y-6">
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
                      Painel Clinico de Telemetria de Leito
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Text Context */}
                <div className="lg:col-span-6 space-y-8">
                  <div>
                    <Heading level={2} className="text-2xl font-semibold mb-4">
                      Diva: Aplicativo de Beira Leito
                    </Heading>
                    <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Liderei a concepção de ponta a ponta (end-to-end) e o desenvolvimento conceitual da identidade visual, marca e experiência do **Diva**, aplicativo móvel focado em apoiar o acompanhamento assistencial a nível de leito por enfermeiros e médicos.
                    </Paragraph>
                  </div>

                  <div className="space-y-4">
                    <Heading level={3} className="text-base font-semibold">
                      Minha Atuação e Impacto Técnico:
                    </Heading>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200 shrink-0 mt-0.5" />
                        <span><strong>Design de Interfaces Críticas:</strong> Modelagem de fluxos intuitivos para o registro de sinais vitais, controle hídrico, antibioticoterapia e escalas de risco (MEWS).</span>
                      </li>
                      <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200 shrink-0 mt-0.5" />
                        <span><strong>Identidade Visual Integrada:</strong> Definição e estruturação da marca, estilo visual de cartões, navegação gestual rápida e paletas de cores de alto contraste.</span>
                      </li>
                      <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200 shrink-0 mt-0.5" />
                        <span><strong>Otimização de Handoff:</strong> Entrega de protótipos de alta fidelidade e fluxos com especificações funcionais ricas para acelerar a precisão no desenvolvimento front-end.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/20">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-3">
                      <Smartphone className="h-4 w-4" />
                      Estrutura do Time de UX
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                      Ajudei a organizar e amadurecer a governança de design na empresa, estabelecendo processos de Discovery, validação contínua e boas práticas de design aplicadas a produtos hospitalares digitais de missão crítica.
                    </p>
                  </div>
                </div>

                {/* Animated Interactive Smartphone with Nav arrows and Drag */}
                <div className="lg:col-span-6 flex flex-col items-center select-none">
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

                    {/* Premium Device Frame (Nano Banana Pro style: black, borderless screen effect, smooth shadow) */}
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
                              ) : slide.mode === "contain" ? (
                                <div className="w-full h-full relative p-2 flex items-center justify-center bg-transparent">
                                  <Image
                                    src={slide.src}
                                    alt={slide.label}
                                    fill
                                    sizes="(max-width: 640px) 280px, 320px"
                                    className="object-contain pointer-events-none"
                                  />
                                </div>
                              ) : slide.mode === "split-2-left" ? (
                                <div className="w-full h-full relative overflow-hidden">
                                  <img
                                    src={slide.src}
                                    alt={slide.label}
                                    className="absolute top-0 left-0 h-full w-[200%] max-w-none object-cover object-left pointer-events-none"
                                  />
                                </div>
                              ) : slide.mode === "split-2-right" ? (
                                <div className="w-full h-full relative overflow-hidden">
                                  <img
                                    src={slide.src}
                                    alt={slide.label}
                                    className="absolute top-0 left-0 h-full w-[200%] max-w-none object-cover object-right pointer-events-none"
                                  />
                                </div>
                              ) : slide.mode === "split-3-left" ? (
                                <div className="w-full h-full relative overflow-hidden">
                                  <img
                                    src={slide.src}
                                    alt={slide.label}
                                    className="absolute top-0 left-0 h-full w-[300%] max-w-none object-cover object-left pointer-events-none"
                                  />
                                </div>
                              ) : slide.mode === "split-3-center" ? (
                                <div className="w-full h-full relative overflow-hidden">
                                  <img
                                    src={slide.src}
                                    alt={slide.label}
                                    className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[300%] max-w-none object-cover pointer-events-none"
                                  />
                                </div>
                              ) : (
                                <div className="w-full h-full relative overflow-hidden">
                                  <img
                                    src={slide.src}
                                    alt={slide.label}
                                    className="absolute top-0 right-0 h-full w-[300%] max-w-none object-cover object-right pointer-events-none"
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dot selectors */}
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
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-600 block text-center mt-3 font-mono">
                    Slide {divaIndex + 1} de {divaSlides.length} — {divaSlides[divaIndex].label}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Youtube Channel & Public Materials Section */}
          <div className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <Heading level={2} className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
                  <Play className="h-6 w-6 text-red-500 fill-red-500" />
                  Demonstrações Públicas em Vídeo
                </Heading>
                <Paragraph variant="base" className="mt-2 text-zinc-500">
                  Veja demonstrações públicas oficiais dos sistemas assistenciais e da tecnologia IoMT integrados pela Carenet Longevity em hospitais reais.
                </Paragraph>
              </div>

              <button
                onClick={() => handleExternalLinkClick("YouTube Channel", "https://www.youtube.com/@carenetlongevity")}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md bg-zinc-950 text-zinc-50 hover:bg-zinc-800 border border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:border-zinc-50 px-5 py-2.5 shadow-sm gap-2 shrink-0 self-start sm:self-center"
              >
                <ExternalLink className="h-4 w-4" />
                Acessar Canal YouTube
              </button>
            </div>
          </div>

          {/* Sidebar / Metadata Quick Facts */}
          <div className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
            <Heading level={2} className="text-xl font-semibold mb-6">
              Informações Gerais do Case
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hoverEffect={false} className="flex gap-4 p-6 bg-zinc-50/20 dark:bg-zinc-950/20">
                <User className="h-6 w-6 text-zinc-400 dark:text-zinc-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
                    Cargo / Atuação
                  </span>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-250">
                    Consultor de UX &amp; Product Design (Freelancer)
                  </p>
                </div>
              </Card>

              <Card hoverEffect={false} className="flex gap-4 p-6 bg-zinc-50/20 dark:bg-zinc-950/20">
                <Calendar className="h-6 w-6 text-zinc-400 dark:text-zinc-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
                    Duração
                  </span>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-250">
                    Abril de 2021 – Atual
                  </p>
                </div>
              </Card>

              <Card hoverEffect={false} className="flex gap-4 p-6 bg-zinc-50/20 dark:bg-zinc-950/20">
                <Award className="h-6 w-6 text-zinc-400 dark:text-zinc-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
                    Maturidade
                  </span>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-250">
                    Design System no Diva &amp; Prototipagem ágil no Orchestra
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </main>

      {/* Modal Acolhedor (Domain Retention Interceptor) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <Card hoverEffect={false} className="w-full max-w-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 shadow-2xl p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
            <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-850 dark:text-zinc-200 mb-6 border border-zinc-200/40 dark:border-zinc-800">
              <ShieldAlert className="h-6 w-6" />
            </div>
            
            <Heading level={3} className="text-xl font-semibold mb-4 text-zinc-955 dark:text-zinc-50">
              Permanecendo no Domínio
            </Heading>
            
            <p className="text-sm leading-relaxed text-zinc-650 dark:text-zinc-400 mb-6">
              Olá! Para garantir a sua segurança e manter você em uma experiência 100% integrada e otimizada sob o domínio do Felipe, optamos por não redirecionar você para ambientes externos automaticamente.
            </p>
            
            <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-500 mb-8 italic">
              Se você deseja abrir o canal do YouTube da Carenet em uma nova aba do seu navegador, confirme no botão abaixo.
            </p>

            <div className="flex flex-col w-full gap-3">
              <a 
                href="https://www.youtube.com/@carenetlongevity"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="w-full"
              >
                <button
                  className="w-full inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md bg-zinc-950 text-zinc-50 hover:bg-zinc-800 border border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:border-zinc-50 py-3 shadow-sm"
                >
                  Abrir Externamente
                </button>
              </a>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md bg-transparent text-zinc-950 border border-zinc-200 hover:bg-zinc-50 dark:text-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 py-3"
              >
                Entendi, continuar no site
              </button>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}
