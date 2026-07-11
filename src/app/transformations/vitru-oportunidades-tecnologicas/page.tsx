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

export default function VitruSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("vitruchat");
  const [activeModal, setActiveModal] = useState<"imagens" | "videos" | "prototipos" | "boards" | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "vitruchat",
      title: "VitruChat LLM",
      description: "Plataforma de inteligência artificial de suporte e automação interna via múltiplos agentes.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: "sofia",
      title: "SofIA",
      description: "Assistente conversacional baseado em LLM para suporte pedagógico ao aluno.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: "hub-correcoes",
      title: "Hub de Correções",
      description: "Motor de inteligência artificial para correção automatizada de provas discursivas.",
      icon: <FileCheck2 className="h-5 w-5" />
    }
  ];

  const caseStudies: Record<string, CaseStudyData> = {
    vitruchat: {
      title: "Estruturando uma plataforma corporativa baseada em IA Generativa para automação",
      challenge: "Incerteza estratégica no alinhamento de interfaces de IA Generativa. A alta latência e a imprevisibilidade técnica de LLMs causavam desconfiança no uso corporativo, quebrando telas devido a respostas dinâmicas inesperadas.",
      contribution: [
        "Cenário Encontrado: Gargalos de latência em sistemas multiagentes causavam sensação de travamento no front-end, gerando abandono e chamados de suporte técnico.",
        "Decisões Tomadas: Modelagem de fluxogramas cognitivos de streaming progressivo de dados e design de interfaces adaptáveis com feedbacks dinâmicos de status (Chain of Thought).",
        "Impacto Gerado: Alinhamento de limites de requisições de LLM com a squad de engenharia, construindo uma arquitetura robusta de UX para IA corporativa da holding."
      ],
      results: "Consolidação da infraestrutura estratégica de IA da holding, auxiliando o Grupo Vitru a alcançar o 1º lugar no segmento Educação do Prêmio Valor Inovação Brasil 2025.",
      role: "Senior UX Designer (IA)",
      duration: "Junho de 2025 – Atual",
      metric: "1º Lugar Prêmio Valor Inovação"
    },
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

  const activeCase = caseStudies[selectedProjectId] || caseStudies.vitruchat;

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
                Liderei a especificação estratégica de UX, caminhos de decisão e fluxos conversacionais inteligentes para systems baseados em Modelos de Linguagem (LLMs).
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
                    onClick={() => setSelectedProjectId(proj.id)}
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
                  {selectedProjectId === "vitruchat" ? "VitruChat LLM" : selectedProjectId === "sofia" ? "SofIA" : "Hub de Correções"} — Anexo de Projeto
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
            <div className="flex-grow overflow-y-auto flex items-center justify-center p-2 min-h-0" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
