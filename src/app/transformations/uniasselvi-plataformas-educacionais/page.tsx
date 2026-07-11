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
  Coins,
  GraduationCap,
  BookOpen,
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

export default function UniasselviSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("serp");
  const [activeModal, setActiveModal] = useState<"imagens" | "videos" | "prototipos" | "boards" | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "serp",
      title: "SERP",
      description: "Sistema integrado de gestão acadêmica e operacional de larga escala.",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      id: "renegociacao",
      title: "Renegociação",
      description: "Portal financeiro de autoatendimento para reestruturação de débitos acadêmicos.",
      icon: <Coins className="h-5 w-5" />
    },
    {
      id: "curricularizacao",
      title: "Curricularização Extensão",
      description: "Módulo integrado de gerenciamento de atividades extensionistas obrigatórias.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      id: "biblioteca",
      title: "Biblioteca Virtual PPC",
      description: "Integração do catálogo bibliográfico acadêmico em conformidade com portarias do MEC.",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: "autonomia",
      title: "Autonomia Docência",
      description: "Plataforma integrada de produtividade e facilitação do diário de classe do professor.",
      icon: <User className="h-5 w-5" />
    },
    {
      id: "agendamento",
      title: "Agendamento de Provas",
      description: "Central digital para agendamento presencial e remoto de avaliações institucionais.",
      icon: <Calendar className="h-5 w-5" />
    }
  ];

  const caseStudies: Record<string, CaseStudyData> = {
    serp: {
      title: "Centralizando a gestão de milhões de matrículas sob um sistema operacional unificado",
      challenge: "Gargalo operacional e alto custo de suporte acadêmico devido à fragmentação de múltiplos sistemas de secretaria de escala nacional no processamento de matrículas e fechamentos de turmas.",
      contribution: [
        "Cenário Encontrado: Sistemas lentos e dispersos causavam filas de atendimento físico, erros de enturmação de alunos e sobrecarga no back-office administrativo.",
        "Decisões Tomadas: Condução de mapeamento presencial de dores das secretarias e especificação detalhada de uma interface centralizada de matrículas de alto desempenho.",
        "Impacto Gerado: Unificação e simplificação no processamento de requisições críticas, otimizando o fluxo operacional e acelerando o handoff para o desenvolvimento front-end."
      ],
      results: "Simplificação drástica na rotina operacional administrativa, estabilizando e otimizando o fluxo de matrículas de milhões de alunos.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Otimização operacional do fluxo administrativo"
    },
    renegociacao: {
      title: "Reduzindo a inadimplência estudantil via portal financeiro autoatendível",
      challenge: "Altos índices de inadimplência estudantil ativa e sobrecarga nas equipes de atendimento humano dedicadas à simulação e cobrança manual de mensalidades em atraso.",
      contribution: [
        "Cenário Encontrado: Fricção cognitiva no entendimento de taxas acumuladas afastava alunos do acerto financeiro, centralizando negociações em canais caros como telefone.",
        "Decisões Tomadas: Modelagem e prototipagem rápida de uma esteira interativa de autoatendimento financeiro com propostas dinâmicas de descontos progressivos e opções instantâneas de boleto/PIX/cartão.",
        "Impacto Gerado: Validação de regras transacionais em parceria com engenharia de sistemas de cobrança antes da escrita de código, reduzindo erros de desenvolvimento."
      ],
      results: "Aumento considerável na recuperação de receita através de canal digital de autoatendimento, reduzindo o custo operacional por transação de acordo.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Recuperação de receita digital via autoatendimento"
    },
    curricularizacao: {
      title: "Adequando portfólios comunitários acadêmicos à conformidade regulatória do MEC",
      challenge: "Risco regulatório crítico de descredenciamento institucional de cursos caso não houvesse comprovação auditável e simplificada de milhares de horas de extensão comunitária de alunos.",
      contribution: [
        "Cenário Encontrado: Falta de padronização no envio de portfólios comunitários gerava pilhas de relatórios físicos desconexos e retrabalho para tutores validarem horas.",
        "Decisões Tomadas: Concepção de uma interface de upload e validação em lote integrada, alinhando regras do MEC com a jornada de tutoria no portal de ensino.",
        "Impacto Gerado: Componentização escalável no Design System corporativo da holding, garantindo consistência visual e velocidade de implantação em diversos portais acadêmicos."
      ],
      results: "Adequação regulatória de 100% dos cursos da Uniasselvi, eliminando multas regulatórias e garantindo conformidade total de extensão.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "100% de adequação regulatória legal"
    },
    biblioteca: {
      title: "Aprovando novos cursos com nota máxima em acervo digital do MEC",
      challenge: "Barreira regulatória e potencial perda de nota de aprovação de novos cursos EAD e presenciais devido à ausência de leitores online acessíveis de acervo pedagógico.",
      contribution: [
        "Cenário Encontrado: APIs e interfaces de editoras parceiras eram inconsistentes, não acessíveis (incompatíveis com leitores de tela) e dificultavam buscas acadêmicas estruturadas.",
        "Decisões Tomadas: Padronização das requisições visuais de leitura sob diretrizes WCAG e redesenho taxonômico de buscas por títulos básicos e complementares.",
        "Impacto Gerado: Garantia de acessibilidade total na leitura de acervo pedagógico virtual, alinhando engenharia e curadoria pedagógica sob padrões estritos de auditoria."
      ],
      results: "Conquista de nota máxima em itens de biblioteca virtual nas visitas avaliativas oficiais do MEC para autorização de novos cursos.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Aprovação nota máxima MEC"
    },
    autonomia: {
      title: "Eliminando a sobrecarga administrativa de diários de classe de professores",
      challenge: "Sobrecarga de atividades administrativas de docentes que desviavam o foco da qualidade acadêmica devido a sistemas de diários de classe lentos e burocráticos.",
      contribution: [
        "Cenário Encontrado: Professores gastavam horas em cliques repetitivos para preencher notas e frequências, com constante perda de dados devido a oscilações de conexão.",
        "Decisões Tomadas: Co-criação de uma planilha de digitação rápida em lote compatível com atalhos de teclado e inclusão de lógica de persistência offline.",
        "Impacto Gerado: Alinhamento de limites de requisições de rede com engenharia de banco de dados, resultando em uma experiência de alta performance sem perdas de registros."
      ],
      results: "Redução expressiva no tempo docente de preenchimento e conclusão antecipada de diários de classe no fechamento de semestres acadêmicos.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Redução no ciclo de fechamento de notas"
    },
    agendamento: {
      title: "Orquestrando reservas de provas remotas e presenciais sem picos de instabilidade",
      challenge: "Instabilidades sistêmicas e perda de infraestrutura durante períodos de avaliações nacionais devido a picos maciços de acessos de alunos tentando reservar datas de provas.",
      contribution: [
        "Cenário Encontrado: Picos severos de acessos derrubavam servidores e geravam enxurradas de chamados de reclamação no suporte acadêmico de polos físicos.",
        "Decisões Tomadas: Modelagem de fluxo de agendamento em 3 etapas e design de controle de capacidade e contenção de tráfego de laboratórios físicos.",
        "Impacto Gerado: Especificação de filas virtuais de agendamento que amorteciam picos de tráfego nos servidores de banco de dados de provas."
      ],
      results: "Distribuição e agendamento fluidos de milhões de avaliações, estabilizando a infraestrutura técnica sem custos adicionais de servidores.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Estabilização de agendamentos em polo"
    }
  };

  const activeCase = caseStudies[selectedProjectId] || caseStudies.serp;

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
                Hub de Transformação • Uniasselvi
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Uniasselvi — Plataformas Educacionais
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
                Evolução e consolidação da disciplina de UX e Product Discovery em plataformas acadêmicas e administrativas utilizadas por milhares de estudantes do Grupo Vitru.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-white">
                <Image
                  src="/imagem/vitru/logo-uniasselvi-black.png"
                  alt="Uniasselvi Logo"
                  width={150}
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
                Projetos Integrados (6)
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
                  Uniasselvi — Anexo de Projeto
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
