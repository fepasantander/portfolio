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
  Coins,
  Sparkles,
  Award,
  Calendar,
  User,
  Activity
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

export default function ListoSubhomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("cdc-listo");

  const projects: ProjectItem[] = [
    {
      id: "cdc-listo",
      title: "CDC Listo",
      description: "Plataforma de Crédito Direto ao Consumidor para compra de automóveis e motocicletas.",
      icon: <Coins className="h-5 w-5" />
    }
  ];

  const caseStudies: Record<string, CaseStudyData> = {
    "cdc-listo": {
      title: "CDC Listo: Plataforma de Crédito Automotivo",
      challenge: "Como implantar a área de UX e a esteira de Product Discovery em um cenário complexo de serviços financeiros de crédito (CDC) e meios de pagamento, garantindo validação antecipada e mitigando riscos operacionais.",
      contribution: [
        "Implantação da Cultura de UX: Estruturação da área de UX Design, definindo processos, governança e integração da equipe de design nas tomadas de decisão entre Produto, Engenharia e Negócio.",
        "Esteira de Product Discovery: Liderança de processos estruturados de Discovery, pesquisas com usuários (UX Research), mapeamento de jornadas de crédito complexas, fluxos de usuários, wireframes e protótipos de alta fidelidade.",
        "Redução de Ambiguidades Técnicas: Criação de especificações funcionais e documentações detalhadas, facilitando decisões céleres entre stakeholders e times de tecnologia e otimizando a previsibilidade das entregas."
      ],
      results: "Redução aproximada de 80% nos custos mensais de desenvolvimento por meio de validação prévia com protótipos interativos, conquistando o Prêmio nominal 'Cada Real Importa' (2020) concedido pelo impacto de eficiência na entrega de produtos.",
      role: "Senior UX Designer / Líder de UX",
      duration: "Abril de 2019 – Dezembro de 2021",
      metric: "80% de economia no desenvolvimento"
    }
  };

  const activeCase = caseStudies[selectedProjectId] || caseStudies["cdc-listo"];

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
                Hub de Transformação • Listo Sistemas
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Listo — Crédito &amp; Meios de Pagamento
              </Heading>
              <Paragraph variant="lead" className="mt-4 max-w-2xl">
                Liderei a implantação da área de UX, estruturando processos de Product Discovery e governança que resultaram em economia de custos e prêmios de eficiência institucional.
              </Paragraph>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-20 w-44 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm bg-white dark:bg-white">
                <Image
                  src="/imagem/listo/logo_listo_22a683e3e4.svg"
                  alt="Listo Logo"
                  width={130}
                  height={45}
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
                Projetos da Fintech (1)
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
