"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, User, ShieldAlert, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Card } from "@/components/ui/Card";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { caseStudies } from "@/data/case-studies";

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
  </svg>
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

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

          {/* Header Metadata Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-zinc-100 dark:border-zinc-900">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
                Transformação • {study.company}
              </span>
              <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {study.title}
              </Heading>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium tracking-wide uppercase font-mono px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              {study.logoPath && (
                <div className={`h-20 w-20 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/80 p-4 shadow-sm ${study.logoBg || "bg-white"}`}>
                  <Image
                    src={study.logoPath}
                    alt={study.logoAlt || study.company}
                    width={80}
                    height={80}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12 items-start">
            
            {/* Storytelling Text */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <Heading level={2} className="text-xl sm:text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                  Desafio de Produto
                </Heading>
                <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {study.challenge}
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="text-xl sm:text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                  Minha Contribuição
                </Heading>
                <Paragraph variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {study.contribution}
                </Paragraph>
              </div>

              {/* Storytelling Sections */}
              {study.storytelling.map((sec, idx) => (
                <div key={idx} className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
                  <Heading level={3} className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                    {sec.title}
                  </Heading>
                  <div className="space-y-4">
                    {sec.paragraphs.map((p, pIdx) => (
                      <Paragraph key={pIdx} variant="base" className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {p}
                      </Paragraph>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar (Quick Facts) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              <Card hoverEffect={false} className="bg-zinc-50/40 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-900 p-6 sm:p-8 rounded-2xl">
                <Heading level={3} className="text-base font-semibold mb-6">
                  Fatos Rápidos
                </Heading>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <User className="h-5 w-5 text-zinc-400 dark:text-zinc-600 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block">Função / Cargo</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{study.role}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-zinc-400 dark:text-zinc-600 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block">Duração</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{study.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="h-5 w-5 text-zinc-400 dark:text-zinc-600 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block">Impacto Principal</span>
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{study.impact}</span>
                    </div>
                  </div>
                </div>

                {/* NDA Disclaimer */}
                <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-900 flex gap-2.5 items-start">
                  <ShieldAlert className="h-4.5 w-4.5 text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-relaxed text-zinc-400 dark:text-zinc-600 italic">
                    Para preservar acordos de confidencialidade (NDA), dados comerciais sensíveis e detalhes de sistemas proprietários foram omitidos, representados de forma relativa ou ofuscados.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Figma Prototype Section */}
          <div className="mt-20 pt-12 border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="max-w-3xl">
                <Heading level={2} className="text-2xl sm:text-3xl font-semibold">
                  Protótipo Navegável
                </Heading>
                <Paragraph variant="base" className="mt-2 text-zinc-500">
                  Explore a experiência interativa desenhada no Figma. Utilize os controles do próprio protótipo para transitar entre as telas.
                </Paragraph>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md bg-zinc-950 text-zinc-50 hover:bg-zinc-800 border border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:border-zinc-50 px-5 py-2.5 shadow-sm gap-2 shrink-0 self-start sm:self-center"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir Externamente
              </button>
            </div>

            {study.figmaUrl ? (
              <div className="w-full aspect-video border border-zinc-200 dark:border-zinc-900 rounded-2xl overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/20">
                <iframe
                  src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(study.figmaUrl)}`}
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              <Card hoverEffect={false} className="border border-zinc-200/60 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-950/25 p-8 text-center rounded-2xl flex flex-col items-center justify-center min-h-[300px]">
                <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 border border-zinc-200/40 dark:border-zinc-800">
                  <FigmaIcon className="h-6 w-6" />
                </div>
                <Heading level={3} className="text-lg font-semibold mb-2">
                  Protótipo Figma Pendente
                </Heading>
                <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto mb-6">
                  Este protótipo está sob controle de acesso ou aguardando o link de compartilhamento. Para habilitar a visualização, configure o parâmetro `figmaUrl` no arquivo `src/data/case-studies.ts`.
                </p>
              </Card>
            )}
          </div>
        </Container>
      </main>

      {/* Modal Acolhedor */}
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
              Olá! Para garantir a sua segurança e manter você em uma experiência 100% integrada e otimizada sob o domínio do Felipe, optamos por não redirecionar você para ambientes externos.
            </p>
            
            <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-500 mb-8 italic">
              Você pode interagir livremente com o protótipo navegável em tempo real diretamente na janela embutida abaixo.
            </p>

            <div className="flex flex-col w-full gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md bg-zinc-950 text-zinc-50 hover:bg-zinc-800 border border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:border-zinc-50 py-3 shadow-sm"
              >
                Entendi, continuar no site
              </button>
              
              <Link href="/#contact" onClick={() => setIsModalOpen(false)} className="w-full">
                <button
                  className="w-full inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md bg-transparent text-zinc-950 border border-zinc-200 hover:bg-zinc-50 dark:text-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 py-3"
                >
                  Falar com Felipe
                </button>
              </Link>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}
