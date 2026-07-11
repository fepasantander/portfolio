"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const FitAndSelection = () => {
  const audiences = [
    "Empresas em fase acelerada de crescimento",
    "Produtos digitais de alta complexidade técnica",
    "Times de desenvolvimento enxutos e focados",
    "Empresas estruturando ou escalando Design Systems",
    "Negócios adotando Inteligência Artificial Generativa e LLMs",
    "Organizações implantando ou amadurecendo a cultura de UX",
    "Iniciativas criando novos produtos digitais do zero"
  ];

  return (
    <section id="fit-selection" className="py-24 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-950/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Target Audience */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
                Critérios de Ajuste
              </span>
              <Heading level={2} className="text-3xl font-semibold tracking-tight">
                Para quem meu trabalho faz diferença.
              </Heading>
              <Paragraph variant="base" className="mt-4 text-zinc-650 dark:text-zinc-400 leading-relaxed">
                Minha atuação é otimizada para ecossistemas de desenvolvimento que exigem precisão tática e alinhamento rápido entre negócio, tecnologia e design.
              </Paragraph>
            </div>

            <ul className="space-y-3.5">
              {audiences.map((aud, index) => (
                <li key={index} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 items-center">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0" />
                  <span className="font-medium">{aud}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: High-credibility anti-fit disclaimer */}
          <div className="lg:col-span-6 flex items-center">
            <Card className="w-full bg-zinc-950 dark:bg-zinc-950 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden shadow-xl text-white group">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  <AlertCircle className="h-6 w-6 text-amber-500" />
                </div>
                <Heading level={3} className="text-xl font-semibold text-white m-0">
                  Quando talvez eu não seja a melhor escolha.
                </Heading>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-zinc-350 dark:text-zinc-400">
                <p>
                  Se a necessidade imediata da sua organização é apenas <strong>desenhar telas rapidamente</strong> ou preencher demandas pontuais de layout, talvez eu não seja o profissional ideal para a sua squad.
                </p>
                <p>
                  Minha atuação agrega real valor quando posso <strong>trabalhar antes da interface</strong>, conectando Produto, Negócio e Engenharia para desenhar a arquitetura de soluções robustas, Design Systems integrados e aplicações sustentáveis de IA.
                </p>
              </div>

              {/* Subtle underglow to tie with the design language (amber tint for warnings/disclaimers) */}
              <div className="absolute -bottom-[1px] left-12 right-12 h-[1px] bg-amber-500/25 rounded-full blur-[4px]" />
            </Card>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FitAndSelection;
