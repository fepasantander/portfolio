# Implementação — Case 002 SofIA

**Data:** 16 de julho de 2026  
**Escopo:** somente o Case SofIA no hub existente da Vitru

## Objetivo

Construir o segundo Case Executivo da plataforma a partir de `case-002-sofia-administrative-ai-assistant-v1.0.md`, demonstrando como o onboarding do Ambiente Virtual de Aprendizagem prepara a evolução da SofIA para uma Assistente Administrativa e, futuramente, um Agente de Secretaria.

## Implementação

- Reutilizada integralmente a estrutura visual do Case 001 em `/transformations/vitru-oportunidades-tecnologicas`; nenhuma rota, layout, dependência, identidade visual ou alteração de Design System foi criada.
- A aba SofIA foi liberada no hub existente; o Hub de Correções permanece bloqueado.
- A narrativa do Documento Mestre foi implementada por completo: Executive Summary, Contexto, Problema, Minha Atuação, estratégia de atenção, comparação Web/Mobile, evolução do produto, limitações, aprendizados e resultado.
- A evolução do produto foi explicitada como `Onboarding → Assistente Administrativa → Agente de Secretaria`.
- A esfera-guia foi apresentada como mecanismo de direcionamento da atenção antes das instruções, com implicações para retenção e futura gamificação — não como efeito visual isolado.
- Criada a seção específica de comparação entre os desafios de UX em Web e Mobile: liberdade de movimentação no Web; rolagem interna dos balões e função de leitura prevista no Mobile.

## Evidências e acessibilidade

- O componente compartilhado `EvidenceSupport` é usado pelo VitruChat e pela SofIA.
- Na SofIA, ele aparece logo após o Executive Summary com o estado `Em atualização`, pois não há imagens catalogadas. Nenhuma imagem, legenda ou funcionalidade fictícia foi criada.
- O modal do VitruChat preserva sua navegação por teclado, foco controlado e retorno ao elemento de origem. A SofIA não abre modal sem evidências catalogadas.
- A página mantém semântica de headings, listas, botões nativos, foco visível e grids responsivos `sm` e `md` para mobile, tablet e desktop.

## Escopo preservado

- Não foram alterados outros Cases, o Hub do Innovation Lab, a narrativa do VitruChat, o Design System ou a identidade visual.
- Não foram introduzidas métricas, funcionalidades ou responsabilidades além do Documento Mestre.

## Validação

- Lint específico da página: aprovado.
- Lint completo: executado, com falha preexistente em `src/lib/analytics.ts` por `no-explicit-any` e três avisos em arquivos fora do Case.
- Build de produção: aprovado com compilação, TypeScript, coleta de dados e pré-renderização das 13 rotas.
