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
  Lock
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
}

export default function VmComunicacaoSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("odonto1");
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
      description: "Portais editoriais e periódicos científicos de odontologia (INPN, ImplantNews, etc.).",
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

  const caseStudies: Record<string, CaseStudyData> = {
    odonto1: {
      title: "Odonto 1: Plataforma Multimídia e Educação Odontológica",
      challenge: "Como estruturar um ecossistema digital integrado substituindo visões empíricas internas por decisões orientadas a dados e necessidades reais de profissionais da odontologia.",
      contribution: [
        "Pesquisa Quali-Quanti com Usuários: Liderança de uma robusta pesquisa com centenas de respondentes da base de clientes via SurveyMonkey combinada com entrevistas em profundidade com dentistas consagrados do conselho editorial, superando achados empíricos internos.",
        "O Insight de 15 Minutos (Podcasts Pioneiros): Descoberta de que os dentistas gastavam em média 15 minutos no deslocamento diário, culminando na decisão de criar podcasts de notícias do ecossistema odontológico em um período pioneiro pré-pandemia.",
        "Trilhas de Aprendizagem Especializadas: Criação de jornadas de conhecimento em formato multimídia (artigos técnicos e vídeos) direcionadas para as especialidades cobertas (Ortodontia, Implantodontia, Estética, Prótese, Periodontia, etc.).",
        "Estratégia de Inbound & Cross-sell: Implementação de réguas de relacionamento para nutrição de leads a cada visita do profissional aos portais, viabilizando o cross-selling estratégico para palestras e congressos promovidos pela editora.",
        "Transmissão Digital de Eventos (Lives): Concepção e modelagem para a venda de transmissões ao vivo dos congressos presenciais para dentistas impossibilitados de comparecer in loco, antecipando uma competência que viria a ser fonte crucial de receita na pandemia."
      ],
      results: "Criação de um canal digital integrado pioneiro e unificado, convertendo visitas em engajamento científico e estruturando a competência digital da editora.",
      role: "Coordenador Web",
      duration: "Agosto de 2014 – Abril de 2019",
      metric: "Validação de hipóteses por pesquisa"
    },
    revistas: {
      title: "Revistas Científicas: Portais Editoriais Digitais",
      challenge: "Como modernizar e digitalizar a entrega e usabilidade de múltiplos periódicos científicos impressos (como ImplantNews, PerioNews, PróteseNews, OrtociênciaSPO) mantendo a autoridade editorial.",
      contribution: [
        "Modernização Tecnológica: Planejamento e coordenação técnica do handoff de engenharia para atualizar a infraestrutura de portais de conteúdo.",
        "Consistência de Interfaces: Design de leiaute responsivo e limpo focado na leitura imersiva e indexação acadêmica de artigos técnicos.",
        "Otimização de Arquitetura de Informação: Padronização taxonômica facilitando a busca e categorização por especialidades odontológicas."
      ],
      results: "Evolução na usabilidade de múltiplos periódicos editoriais, facilitando o acesso e ampliando significativamente a leitura digital de artigos científicos.",
      role: "Coordenador Web",
      duration: "Agosto de 2014 – Abril de 2019",
      metric: "Evolução de múltiplos portais editoriais",
      imagePath: "/imagem/vm/IMPLANT NEWS.png",
      imageAlt: "Logo ImplantNews"
    },
    eventos: {
      title: "Eventos: Plataformas de Congressos & Relacionamento",
      challenge: "Como criar canais digitais atraentes e eficientes para a comercialização de ingressos, submissão de painéis científicos e relacionamento com expositores para grandes congressos de odontologia.",
      contribution: [
        "Gestão Integrada de Eventos: Desenvolvimento do fluxo de inscrição, credenciamento e envio de pôsteres científicos integrado ao ecossistema dos congressos.",
        "Pesquisa e Validação com Usuários: Mapeamento de dores de palestrantes e profissionais participantes durante eventos reais para desenhar soluções digitais assertivas.",
        "Alinhamento Multidisciplinar: Integração de marketing, comercial, conteúdo e tecnologia para desenvolvimento ágil de websites e plataformas específicas para congressos (IPS, Abross, IN)."
      ],
      results: "Facilitação no fluxo de inscrições de congressos nacionais e no recebimento e avaliação de painéis acadêmicos por comissões científicas.",
      role: "Coordenador Web",
      duration: "Agosto de 2014 – Abril de 2019",
      metric: "Otimização de fluxos de eventos nacionais",
      imagePath: "/imagem/vm/in24.png",
      imageAlt: "Logo Congresso IN"
    }
  };

  const activeCase = caseStudies[selectedProjectId] || caseStudies.odonto1;

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
                Hub de Transformação • VM Comunicação
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                VM Comunicação — Educação Científica
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl">
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
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-4">
                Projetos da Editora (3)
              </span>

              {projects.map((proj) => {
                const isActive = selectedProjectId === proj.id;
                const isComingSoon = proj.status === "coming-soon";

                return (
                  <button
                    key={proj.id}
                    disabled={isComingSoon}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group ${
                      isActive
                        ? "bg-zinc-950 border-zinc-950 dark:bg-zinc-900 dark:border-zinc-800 text-white shadow-md shadow-cyan-500/5"
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
                        <span className="font-semibold text-sm leading-none block">
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

                {/* Optional Image */}
                {activeCase.imagePath && (
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 overflow-hidden bg-zinc-50 dark:bg-zinc-950 p-4 max-w-md mx-auto">
                    <div className="relative w-full aspect-video">
                      <Image
                        src={activeCase.imagePath}
                        alt={activeCase.imageAlt || activeCase.title}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
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
