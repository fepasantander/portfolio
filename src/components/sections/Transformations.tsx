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
      challenge: "Unificar múltiplos canais científicos e educacionais fragmentados que dependiam de decisões conceituais empíricas da diretoria.",
      contribution: "Condução de pesquisa quali-quanti com centenas de usuários da base (SurveyMonkey) e conselho editorial, definindo trilhas de conhecimento e canais multimídia integrados.",
      impact: "Consolidação do principal portal odontológico unificado do país, substituindo visões internas anedóticas por navegação baseada em necessidades reais validadas."
    },
    {
      company: "Listo",
      logoPath: "/imagem/listo/logo_listo_22a683e3e4.svg",
      logoAlt: "Listo Logo",
      slug: isDev ? "listo-sistemas" : undefined,
      challenge: "Desperdício recorrente de esforço em engenharia e retrabalho de desenvolvimento em fluxos de crédito CDC e meios de pagamento.",
      contribution: "Implantação da governança de UX e estruturação da esteira de Product Discovery focado em validação antecipada com protótipos funcionais integrados.",
      impact: "Redução de 80% nos custos de desenvolvimento através de validação de jornadas com usuários antes da escrita de código (Prêmio 'Cada Real Importa').",
      logoBg: "bg-white"
    },
    {
      company: "Carenet",
      logoPath: "/imagem/carenet/Logotipo_Carenet.avif",
      logoAlt: "Carenet Logo",
      slug: "carenet-longevity",
      challenge: "Desalinhamento estratégico e risco assistencial crítico no monitoramento beira-leito em painéis e aplicativos hospitalares complexos.",
      contribution: "Estruturação do time de design, centralização de Design System robusto e modelagem funcional rígida de layouts para telemetria de UTI móvel e registro de sinais vitais.",
      impact: "Mitigação de ambiguidades de requisitos entre Produto e Engenharia, eliminando fricções de entrega e otimizando a segurança do fluxo clínico em campo."
    },
    {
      company: "Uniasselvi",
      logoPath: "/imagem/vitru/logo-uniasselvi-black.png",
      logoAlt: "Uniasselvi Logo",
      slug: isDev ? "uniasselvi-plataformas-educacionais" : undefined,
      logoBg: "bg-white",
      challenge: "Lentidão sistêmica no desenvolvimento e alta fricção de uso em fluxos acadêmicos críticos de escala nacional para milhares de estudantes.",
      contribution: "Integração contínua entre design e engenharia com evolução de Design System corporativo e especificação detalhada de jornadas (renegociação financeira e acervo virtual).",
      impact: "Redução drástica no retrabalho de front-end e aprovação de novos cursos com nota máxima em conformidade regulatória nas visitas avaliativas do MEC."
    },
    {
      company: "Vitru",
      logoPath: "/imagem/vitru/logo-vitru-negative.png",
      logoAlt: "Vitru Logo",
      logoBg: "bg-zinc-950 dark:bg-black",
      slug: isDev ? "vitru-oportunidades-tecnologicas" : undefined,
      challenge: "Extrema incerteza técnica e de jornada do usuário no desenho de produtos e interfaces orientadas a IA Generativa e LLMs.",
      contribution: "Design estratégico de agentes conversacionais, fluxograma cognitivo (Chain of Thought) e tratamento operacional de latência e feedbacks de status de IA.",
      impact: "Consolidação da infraestrutura estratégica de IA corporativa do grupo, conquistando o 1º lugar no segmento Educação do Prêmio Valor Inovação Brasil 2025."
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
