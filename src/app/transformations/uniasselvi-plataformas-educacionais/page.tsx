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
  BookOpen
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

export default function UniasselviSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("serp");

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
      title: "SERP: Gestão Acadêmica Integrada",
      challenge: "Como centralizar e otimizar processos complexos de secretaria, financeiro e gestão escolar em um sistema integrado para suportar milhões de requisições sem lentidão.",
      contribution: [
        "Product Discovery em Larga Escala: Condução de workshops e pesquisas com secretarias acadêmicas para desatar nós operacionais e mapear fluxos críticos.",
        "Arquitetura da Informação & UX: Redesenho do banco de formulários acadêmicos e criação de layouts administrativos eficientes para fechamento de turmas e matrículas.",
        "Redução de Ambiguidades de Produto: Elaboração de especificações de interação e documentações completas, reduzindo retrabalho entre Produto, Negócio e Engenharia."
      ],
      results: "Aceleração de processos administrativos críticos e simplificação da rotina operacional de secretarias acadêmicas.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Matrículas 100% digitais e ágeis"
    },
    renegociacao: {
      title: "Renegociação Financeira de Autoatendimento",
      challenge: "Como criar uma experiência financeira amigável, clara e acolhedora que permita a alunos inadimplentes simularem e renegociarem suas mensalidades de forma autônoma.",
      contribution: [
        "Design do Fluxo de Autoatendimento: Concepção de simulação de parcelamentos passo a passo com aplicação de descontos dinâmicos e opções de pagamento (boleto, cartão de crédito, PIX).",
        "Minimização de Fricção Cognitiva: Simplificação da exibição de taxas e juros de parcelas em atraso, permitindo ao estudante endividado tomar decisões seguras e transparentes.",
        "Especificação Funcional: Criação de protótipos de alta fidelidade e cenários de testes integrados ao sistema financeiro da instituição."
      ],
      results: "Redução significativa da inadimplência e aceleração de recuperações de crédito por canais digitais de autoatendimento.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Recuperação de receita digital"
    },
    curricularizacao: {
      title: "Portal de Curricularização da Extensão",
      challenge: "Como adaptar as plataformas acadêmicas para que milhares de alunos registrem e comprovem atividades comunitárias obrigatórias (MEC) com facilidade e conformidade regulatória.",
      contribution: [
        "Design da Jornada do Aluno: Fluxo simplificado de envio de portfólios comunitários, relatórios de atividades, fotos e declarações de comprovação de extensão.",
        "Painel de Avaliação de Tutores: Criação de ferramentas que facilitam a conferência e aprovação em lote das horas de extensão enviadas pelos alunos.",
        "Evolução do Design System Figma: Padronização dos fluxos regulatórios nas diretrizes visuais unificadas da instituição."
      ],
      results: "Adequação legal de 100% dos cursos da holding à portaria regulatória de extensão do MEC.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "100% de adequação regulatória"
    },
    biblioteca: {
      title: "Biblioteca Virtual & Integração PPC",
      challenge: "Como desenhar a busca e o leitor de acervo digital integrados para cumprir as exigências pedagógicas do PPC do MEC de forma acessível e fluida.",
      contribution: [
        "Jornada de Busca Bibliográfica: Integração inteligente de buscas bibliográficas básicas e complementares conforme o plano pedagógico do curso do aluno.",
        "Acessibilidade de Leitura: Ajustes do leitor online (fontes, contraste, tamanho do texto, espaçamentos) de livros digitais atendendo rigidamente às regras WCAG.",
        "Arquitetura de Conexão com Acervos: Padronização visual para APIs de editoras parceiras, criando uma experiência de leitura uniforme e sem barreiras."
      ],
      results: "Aprovação de novos cursos presenciais e EAD com nota máxima em itens de biblioteca virtual nas visitas do MEC.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Aprovação nota máxima MEC"
    },
    autonomia: {
      title: "Portal Autonomia Docência",
      challenge: "Como diminuir a carga burocrática de diários de classe, frequências e notas, permitindo aos professores focarem seu tempo na qualidade do ensino.",
      contribution: [
        "Interface de Lançamento em Lote: Tela de inserção rápida de notas estruturada para teclado e fluxo contínuo de digitação, reduzindo cliques repetitivos.",
        "Registro de Frequência Simplificado: Simplificação dos registros diários de aulas com salvamento automático e alertas de inconsistência.",
        "Validação com Professores: Testes de usabilidade diretamente com docentes de diversas áreas acadêmicas para lapidar a arquitetura de informação."
      ],
      results: "Aumento da produtividade docente e encerramento de prazos de diários de classe em tempo recorde no fechamento de semestres.",
      role: "Senior UX Designer",
      duration: "Julho de 2022 – Junho de 2025",
      metric: "Redução no tempo de diário de classe"
    },
    agendamento: {
      title: "Central de Agendamento de Provas",
      challenge: "Como gerenciar de forma escalável e sem quedas o agendamento de avaliações presenciais e online para milhões de estudantes em polos de ensino por todo o país.",
      contribution: [
        "UX da Reserva Passo a Passo: Criação de um fluxo de agendamento em 3 etapas com confirmações instantâneas de dia, hora e polo disponível.",
        "Alocação e Otimização de Polos: Design do painel administrativo para configuração de capacidade física de salas e horários de aplicação de provas.",
        "Mitigação de Quedas de Servidor: Planejamento de fluxos de contenção e salas de espera digitais em períodos de pico de avaliações."
      ],
      results: "Distribuição eficiente dos horários de avaliações, reduzindo picos de acessos e insatisfação nos polos físicos de ensino.",
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
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
                Hub de Transformação • Uniasselvi
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Uniasselvi — Plataformas Educacionais
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl">
                Evolução e consolidação da disciplina de UX e Product Discovery em plataformas acadêmicas e administrativas utilizadas por milhares de estudantes do Grupo Vitru.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-white dark:bg-white">
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
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-4">
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
                  <Paragraph variant="base" className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-550">
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
