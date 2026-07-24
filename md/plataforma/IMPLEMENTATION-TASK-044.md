# TASK-044 — Publicação dos Cases SofIA e Hub de Correções + Preparação dos Cases Carenet e VM

Status: Ready

Priority: Critical (P0)

Type:

- Product Cases
- Content
- UX
- Information Architecture

---

# Objetivo

Expandir o portfolio publicado utilizando o mesmo padrão de qualidade dos cases VitruChat e Odonto1.

Ao final desta tarefa a Home deverá apresentar quatro cases completos.

---

# IMPORTANTE

Antes de qualquer alteração:

## NÃO assumir assets.

Inspecionar os assets existentes.

## NÃO assumir rotas.

Inspecionar todas as rotas existentes.

## NÃO assumir componentes.

Reutilizar exclusivamente os componentes já utilizados em:

- VitruChat
- Odonto1

Nenhum componente duplicado deverá ser criado.

---

# Escopo

Publicar integralmente:

- SofIA
- Hub de Correções

Utilizando exatamente o mesmo padrão estrutural dos cases:

- VitruChat
- Odonto1

Sem seção Evidências.

---

# Estrutura

Cada novo case deverá possuir:

- Hero
- Breadcrumb
- Contexto
- Problema
- Minha atuação
- Processo de Discovery
- Solução
- Resultados
- Principais Aprendizados
- Product Transformation Journal
- Navegação consistente

---

# SofIA

Utilizar exclusivamente informações já existentes no projeto.

Não inventar conteúdo.

Consolidar:

- agente conversacional;
- onboarding;
- UX Writing;
- tom de voz;
- tour guiado;
- IA generativa;
- arquitetura conversacional;
- redução de atrito;
- jornada do estudante;
- papel do UX.

Caso algum ponto ainda não possua conteúdo suficiente, manter a seção enxuta.

Não preencher lacunas com texto genérico.

---

# Hub de Correções

Consolidar:

- problema inicial;
- IA para correção;
- avaliação de provas;
- algoritmo de PDF;
- diferenciação para PCD/TEA;
- fluxo de contestação;
- métricas;
- logs;
- revisão humana;
- escalabilidade;
- governança.

Não criar Evidências.

---

# Home

Atualizar o catálogo principal.

Os quatro Hero Cases passam a ser:

- VitruChat
- Hub de Correções
- SofIA
- Odonto1

Utilizar exatamente o mesmo padrão visual.

Não criar um layout diferente.

---

# Journal

Atualizar os destaques.

Confirmar que:

Hub

↓

abre Hub

SofIA

↓

abre SofIA

Sem regressão dos deep links implementados anteriormente.

---

# Carenet

Preparar:

- Diva
- Orchestra

Utilizando a mesma infraestrutura de páginas.

Caso ainda não exista conteúdo suficiente:

Criar apenas a estrutura.

Adicionar selo discreto:

"Em evolução"

Não inventar narrativa.

Não esconder o projeto.

---

# VM

Preparar:

- Revistas
- Eventos

Mesmo comportamento.

Caso ainda não exista conteúdo suficiente:

Criar apenas estrutura reutilizando o template.

Adicionar selo:

"Em evolução"

Sem textos fictícios.

---

# Navegação

Confirmar:

Home

↓

Cases

↓

Journal

↓

Transformations

↓

Deep Links

Tudo consistente.

---

# Restrições

Não alterar:

- arquitetura;
- SEO;
- Analytics;
- infraestrutura;
- Git;
- Deploy.

Não criar novos componentes equivalentes aos existentes.

Não duplicar código.

Não criar conteúdo fictício.

---

# Critérios de aceite

✓ SofIA publicado.

✓ Hub publicado.

✓ Home atualizada.

✓ Journal atualizado.

✓ Deep links preservados.

✓ Diva preparado.

✓ Orchestra preparado.

✓ Revistas preparado.

✓ Eventos preparado.

✓ TypeScript OK.

✓ Lint OK.

✓ Build OK.

✓ localhost validado.

---

# Entregável

IMPLEMENTATION-TASK-044.md

Registrar:

- componentes reutilizados;
- páginas criadas;
- rotas;
- conteúdo consolidado;
- assets utilizados;
- validação;
- pendências.

---

# Resultado da execução

## Publicação dos Cases

SofIA e Hub de Correções foram incluídos no mesmo pipeline editorial já usado por VitruChat e Odonto1:

`EditorialCase → canPublishCase → publishedPortfolioCases → /cases/[slug] → MasterCaseTemplate`

As rotas canônicas publicadas são:

- `/cases/sofia`
- `/cases/hub-correcoes`

O catálogo principal passou a respeitar a ordem solicitada:

1. VitruChat
2. Hub de Correções
3. SofIA
4. Odonto1

## Componentes reutilizados

- `MasterCaseTemplate`
- `ExecutiveSummary`
- `ProjectHighlights`
- `ProductTransformationJournal`
- `CaseNavigation`
- `SelectedCases`

Nenhum componente de Case duplicado foi criado. O template foi apenas ajustado para usar o título correto no breadcrumb e a mensagem contextual correta do Journal para cada Case. A navegação anterior/próximo agora deriva do catálogo publicado, que é a fonte de verdade da Home.

## Conteúdo consolidado

### SofIA

O conteúdo veio de `archive/cases/innovation-lab-sofia-administrative-ai-assistant.md` e consolidou onboarding, jornada do estudante, tour guiado, UX Writing, atenção orientada pela esfera-guia, diferenças entre Web e Mobile e a evolução de assistente administrativa para Agente de Secretaria.

### Hub de Correções

O conteúdo veio de `archive/cases/vitru-ai-assisted-academic-assessment.md` e consolidou avaliação discursiva assistida por IA, Human-in-the-Loop, revisão humana obrigatória no piloto, arquitetura do fluxo de avaliação, contestação, métricas operacionais, acessibilidade para PCD, escalabilidade e governança.

Não foi adicionada narrativa sobre algoritmo PDF, TEA específico ou logs porque esses termos não possuem fonte aprovada localizada nos documentos e arquivos inspecionados.

## Evidências

SofIA e Hub de Correções atendem ao contrato editorial com um asset de capa, mas a seção pública de Evidências permanece explicitamente oculta nos dois Cases, conforme solicitado.

## Assets confirmados e publicados

| Case | Origem confirmada | Destino público |
| --- | --- | --- |
| SofIA | `imagem/vitru/sofia/Sof.IA-grande.png` | `/imagem/cases/sofia/hero.png` |
| Hub de Correções | `imagem/vitru/hub-correcoes/thumb-destaque.png` | `/imagem/cases/hub-correcoes/hero.png` |

Os dois endpoints responderam HTTP 200 no localhost.

## Journal e deep links

Os destinos existentes foram preservados:

- Hub: `/transformations/vitru-oportunidades-tecnologicas?tab=hub-correcoes`
- SofIA: `/transformations/vitru-oportunidades-tecnologicas?tab=sofia`

Ambas as URLs responderam HTTP 200 em `http://localhost:3006`.

## Preparação de Carenet e VM

Não foram publicados novos Cases incompletos nem criadas narrativas novas. Nas páginas de transformação existentes, Diva, Orchestra, Revistas e Eventos permanecem acessíveis e agora recebem o selo discreto `Em evolução`, sinalizando o estado de preparação sem esconder os projetos.

## Arquivos modificados

- `src/data/published-cases.ts`
- `src/data/case-production-pipeline.ts`
- `src/app/cases/[slug]/page.tsx`
- `src/components/cases/MasterCaseTemplate.tsx`
- `src/components/cases/CaseNavigation.tsx`
- `src/app/transformations/carenet-longevity/page.tsx`
- `src/app/transformations/vm-comunicacao/page.tsx`
- `public/imagem/cases/sofia/hero.png`
- `public/imagem/cases/hub-correcoes/hero.png`

## Validação

- `npx tsc --noEmit`: aprovado.
- `npm run lint`: aprovado.
- `npm run build`: aprovado; geração estática incluiu as quatro rotas `/cases/*`.
- Localhost `http://localhost:3006`: Home, Journal, Cases VitruChat/Hub/SofIA/Odonto1, deep links de Hub e SofIA, abas Diva e Revistas, e os dois assets novos retornaram HTTP 200.
- SofIA e Hub foram verificados sem a string renderizada `Evidências` na resposta HTML.
- `git diff --check`: sem erros de whitespace.

## Pendências

Nenhuma pendência impeditiva neste escopo. PDF, TEA específico e logs permanecem fora da narrativa até haver fonte editorial aprovada.
