"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Image from "next/image";
import { analytics } from "@/lib/analytics";

interface TransformationCardProps {
  company: string;
  logoPath?: string;
  logoAlt?: string;
  challenge: string;
  contribution: string;
  impact: string;
  logoBg?: string;
  slug?: string;
}

const TransformationCard = ({ 
  company, 
  logoPath, 
  logoAlt, 
  challenge, 
  contribution, 
  impact, 
  logoBg = "bg-zinc-50 dark:bg-zinc-900",
  slug
}: TransformationCardProps) => {
  const handleTransformationClick = () => {
    analytics.trackCTA(`Transformation: ${company}`, `/transformations/${slug}`);
  };

  const handleComingSoonClick = () => {
    analytics.trackEvent("Transformations: Clicked (Coming Soon)", { company });
  };

  return (
    <Card className="flex flex-col justify-between h-full bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 shadow-sm relative overflow-hidden group">
      <div>
        {/* Card Header with Logo/Placeholder */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            {logoPath ? (
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800/80 p-2 ${logoBg}`}>
                <Image 
                  src={logoPath} 
                  alt={logoAlt || company} 
                  width={40} 
                  height={40} 
                  className="object-contain max-h-full max-w-full dark:brightness-110"
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-serif font-bold text-lg border border-zinc-800 dark:border-zinc-200">
                {company[0]}
              </div>
            )}
            <Heading level={3} className="text-xl font-medium m-0">
              {company}
            </Heading>
          </div>
          
          <span className="text-[10px] tracking-wider uppercase font-mono px-2 py-1 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 border border-zinc-200/30 dark:border-zinc-800/50">
            Transformação
          </span>
        </div>

        {/* Content Blocks */}
        <div className="space-y-5">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
              Desafio
            </span>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {challenge}
            </p>
          </div>
          
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
              Minha Contribuição
            </span>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {contribution}
            </p>
          </div>
          
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-600 block mb-1">
              Impacto Gerado
            </span>
            <p className="text-sm font-medium leading-relaxed text-zinc-950 dark:text-zinc-50">
              {impact}
            </p>
          </div>
        </div>
      </div>

      {/* Button Action */}
      <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900/50">
        {slug ? (
          <Link href={`/transformations/${slug}`} onClick={handleTransformationClick} className="w-full block">
            <Button 
              variant="secondary" 
              className="w-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Visualizar Transformação
            </Button>
          </Link>
        ) : (
          <Button 
            variant="secondary" 
            disabled 
            onClick={handleComingSoonClick} 
            className="w-full text-zinc-400 border-zinc-200 dark:text-zinc-600 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20"
          >
            Em breve
          </Button>
        )}
      </div>
    </Card>
  );
};

export const Transformations = () => {
  const isDev = process.env.NODE_ENV === "development";

  const cases: TransformationCardProps[] = [
    {
      company: "VM Comunicação",
      slug: "vm-comunicacao",
      challenge: "Desenhar e desenvolver a plataforma de educação odontológica unificada integrando canais editoriais e ferramentas digitais para profissionais.",
      contribution: "Gestão do time de desenvolvimento e liderança do Product Discovery, conduzindo a maior pesquisa de usuários del grupo para estruturar a estratégia de UX e arquitetura da informação.",
      impact: "Consolidação da maior plataforma integrada de educação continuada da área e aumento da conversão de novos usuários a partir de decisões guiadas por dados."
    },
    {
      company: "Listo",
      logoPath: "/imagem/listo/logo_listo_22a683e3e4.svg",
      logoAlt: "Listo Logo",
      slug: isDev ? "listo-sistemas" : undefined,
      challenge: "Implantar a área de UX e a esteira de Product Discovery em um cenário complexo de serviços financeiros de crédito (CDC) e meios de pagamento.",
      contribution: "Responsável pela implantação da área de UX, estruturando processos e governança, além de liderar o alinhamento entre Produto, Engenharia e Negócio.",
      impact: "Redução aproximada de 80% nos custos de desenvolvimento e mitigação de retrabalho por meio de validação antecipada com protótipos, conquistando o Prêmio 'Cada Real Importa' 2020.",
      logoBg: "bg-white"
    },
    {
      company: "Carenet",
      logoPath: "/imagem/carenet/Logotipo_Carenet.avif",
      logoAlt: "Carenet Logo",
      slug: "carenet-longevity",
      challenge: "Apoiar a maturidade de design e conceber a experiência de produtos estratégicos e portais de monitoramento hospitalar presencial e remoto.",
      contribution: "Estruturação da equipe de UX, evolução do Design System e concepção e especificação de interfaces críticas para sistemas médicos (Orchestra, Diva e Harmonia).",
      impact: "Redução de ambiguidades e alinhamento de requisitos entre Produto, Negócio e Engenharia, otimizando o fluxo assistencial em ambientes de alta complexidade médica.",
      logoBg: "bg-white"
    },
    {
      company: "Uniasselvi",
      logoPath: "/imagem/vitru/logo-uniasselvi-black.png",
      logoAlt: "Uniasselvi Logo",
      slug: isDev ? "uniasselvi-plataformas-educacionais" : undefined,
      logoBg: "bg-white",
      challenge: "Conduzir a implantação e a consolidação da disciplina de UX e Product Discovery em portais acadêmicos e administrativos utilizados por milhares de estudantes.",
      contribution: "Evolução do Design System no Figma e concepção de fluxos de alta complexidade acadêmica como a Biblioteca Virtual (PPC) e a Renegociação Financeira.",
      impact: "Redução do retrabalho técnico entre Produto, Negócio e Engenharia através de especificações funcionais e protótipos de alta fidelidade integrados."
    },
    {
      company: "Vitru",
      logoPath: "/imagem/vitru/logo-vitru-negative.png",
      logoAlt: "Vitru Logo",
      logoBg: "bg-zinc-950 dark:bg-black",
      slug: isDev ? "vitru-oportunidades-tecnologicas" : undefined,
      challenge: "Conceber a estratégia e a experiência de produtos baseados em IA Generativa sob extrema incerteza no Lab de Inovação da holding.",
      contribution: "Design de agentes conversacionais (SofIA, VitruChat e Hub de Correções), desenhando fluxos de interação, critérios de sucesso e métricas de UX aplicadas a LLMs.",
      impact: "Consolidação da estratégia de IA da holding, levando o grupo ao 1º lugar no segmento Educação do Prêmio Valor Inovação Brasil 2025."
    }
  ];

  return (
    <section id="transformations" className="py-24 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-950/5">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600 block mb-3">
            Histórias de Sucesso
          </span>
          <Heading level={2}>
            Transformações reais entregues no mercado.
          </Heading>
          <Paragraph variant="lead" className="mt-4 max-w-2xl">
            Estudos de caso reais demonstrando como o alinhamento metodológico entre estratégia, design e tecnologia gerou resultados práticos de negócios.
          </Paragraph>
        </div>

        {/* 5 Transformation Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => (
            <TransformationCard 
              key={c.company}
              company={c.company}
              logoPath={c.logoPath}
              logoAlt={c.logoAlt}
              challenge={c.challenge}
              contribution={c.contribution}
              impact={c.impact}
              logoBg={c.logoBg}
              slug={c.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Transformations;
