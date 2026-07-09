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
  MessageSquare,
  Sparkles,
  Award,
  Calendar,
  User,
  Activity,
  FileCheck2,
  Brain
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
  hasDiagram?: boolean;
}

export default function VitruSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("vitruchat");

  const projects: ProjectItem[] = [
    {
      id: "vitruchat",
      title: "VitruChat LLM",
      description: "Plataforma de IA Generativa corporativa e ecossistema de multiagentes inteligentes.",
      icon: <MessageSquare className="h-5 w-5" />
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
      title: "VitruChat LLM: Ecossistema Corporativo de Multiagentes",
      challenge: "Como estruturar fluxos de conversação e usabilidade em sistemas multiagentes onde o tempo de resposta da IA é variável e os inputs do usuário exigem grande precisão.",
      contribution: [
        "Design de Interfaces de IA Generativa: Estruturação de princípios de usabilidade voltados a LLMs, com foco no design de estados de latência (streaming de texto), tratamento de alucinações e feedbacks rápidos de prompts.",
        "Design System Adaptável para LLMs: Criação de componentes específicos para lidar com saídas dinâmicas em Markdown, renderizadores de código ricos, gráficos conversacionais e estados de erro de IA.",
        "Padrões de Comunicação Multiagentes: Desenho de fluxos UX onde múltiplos agentes atuam em cascata, permitindo ao usuário entender qual agente está respondendo (Chain of Thought)."
      ],
      results: "As iniciativas da squad de IA e inovação foram fundamentais para consolidar a presença de produto da holding, auxiliando o Grupo Vitru a conquistar o 1º lugar no segmento Educação do 11º Prêmio Valor Inovação Brasil 2025.",
      role: "Senior UX Designer (IA)",
      duration: "Junho de 2025 – Atual",
      metric: "1º Lugar Prêmio Valor Inovação",
      hasDiagram: true
    },
    sofia: {
      title: "SofIA: Inteligência Artificial de Suporte ao Aluno",
      challenge: "Como humanizar e estruturar o atendimento estudantil automatizado em fluxos acadêmicos complexos (renegociações, dúvidas e chamados), reduzindo o transbordo e mantendo um tom de voz acolhedor e preciso.",
      contribution: [
        "Design de Jornadas Conversacionais: Mapeamento completo e modelagem de fluxos conversacionais inteligentes em linguagem natural, cobrindo dúvidas pedagógicas, financeiras e secretaria.",
        "Métricas e Critérios de Sucesso: Definição de taxas de retenção conversacional, resolução de chamados no primeiro contato e satisfação (NPS) do agente conversacional.",
        "Tours Guiados e Onboarding: Criação de fluxos visuais auxiliares e tours guiados passo a passo para ensinar o estudante a interagir eficientemente com a IA."
      ],
      results: "Integração em larga escala na plataforma Uniasselvi, resultando em retenção de chamados de atendimento de rotina e melhora na percepção de agilidade do aluno.",
      role: "Senior UX Designer (IA)",
      duration: "Junho de 2025 – Atual",
      metric: "Retenção de chamados de rotina"
    },
    "hub-correcoes": {
      title: "Hub de Correções: IA para Avaliação Acadêmica",
      challenge: "Como construir uma interface confiável e acessível que permita correções automatizadas de provas discursivas por IA, garantindo precisão pedagógica e um fluxo de auditoria transparente para professores.",
      contribution: [
        "UX do Painel de Revisão Docente: Design do painel de controle que permite aos professores revisarem, validarem ou ajustarem a correção sugerida pela inteligência artificial de forma rápida.",
        "Acessibilidade e Inclusão: Desenvolvimento de padrões de leitura acessíveis e interfaces limpas para leitura de feedbacks detalhados, atendendo às regras da WCAG e garantindo escalabilidade.",
        "Trilha de Auditoria Transparente: Estruturação visual dos critérios de correção aplicados pela IA, tornando claro para o professor o raciocínio por trás de cada nota recomendada."
      ],
      results: "Redução drástica no tempo de resposta e correção de avaliações discursivas, aumentando a consistência na atribuição de notas e dando suporte ao corpo docente.",
      role: "Senior UX Designer (IA)",
      duration: "Junho de 2025 – Atual",
      metric: "Redução no tempo de correção"
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
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
                Hub de Transformação • Vitru Educação
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Vitru — Oportunidades Tecnológicas
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl">
                Squad estratégica de inovação responsável pelo UX end-to-end de produtos baseados em Inteligência Artificial Generativa no Lab de Inovação da holding.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-zinc-950 dark:bg-zinc-950">
                <Image
                  src="/imagem/vitru/logo-vitru-negative.png"
                  alt="Vitru Logo"
                  width={140}
                  height={40}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Split Layout: Left Menu / Right Active Case */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-4">
                Projetos da Squad (3)
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

                {/* High-impact conceptual diagram (Rendered only on VitruChat LLM) */}
                {activeCase.hasDiagram && (
                  <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        Fluxo e Arquitetura de Experiência Conversacional (UX-AI)
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1">
                        Estruturação visual de como o design de interação atua como ponte entre a intenção do usuário e o retorno dos agentes de IA.
                      </p>
                    </div>

                    {/* Interactive diagram mock */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 text-center items-center">
                      <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black/60 shadow-sm flex flex-col items-center">
                        <User className="h-6 w-6 text-cyan-500 mb-2" />
                        <span className="text-[10px] font-semibold tracking-wide uppercase font-mono block">Interface (UI)</span>
                        <p className="text-[9px] text-zinc-500 mt-1">Chat bubble, inputs estruturados, prompt templates</p>
                      </div>

                      <div className="flex flex-col items-center relative py-4">
                        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 z-0" />
                        <div className="z-10 bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-500/35 text-[9px] font-mono font-semibold">
                          Router
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black/60 shadow-sm flex flex-col items-center">
                        <Cpu className="h-6 w-6 text-pink-500 mb-2" />
                        <span className="text-[10px] font-semibold tracking-wide uppercase font-mono block">Multiagentes (LLM)</span>
                        <p className="text-[9px] text-zinc-500 mt-1">Agente Pedagógico, Agente Editorial, Validador</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Core Challenges & UX contributions */}
                <div className="space-y-6">
                  <Heading level={3} className="text-lg font-semibold">
                    Minha Atuação e Impacto no Design de IA:
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
