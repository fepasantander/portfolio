# TASK-023 — Odonto1 EditorialCase Migration

## Arquitetura identificada

VitruChat utiliza `EditorialCase` em `published-cases.ts`, pipeline em `case-production-pipeline.ts`, catálogo derivado e a rota dinâmica canônica `/cases/[slug]`, renderizada por `MasterCaseTemplate`.

## Migração

- Criado `src/data/draft-cases.ts` com o único `EditorialCase` do Odonto1.
- Removida a página estática paralela `src/app/cases/odonto1/page.tsx`.

## Fonte única

O conteúdo, metadados futuros, navegação e renderização do Odonto1 deverão derivar desse único objeto quando ele for incluído no pipeline. Ele não foi publicado, integrado ao catálogo ou exposto em rota pública nesta TASK.

## Diferença restante

VitruChat é publicado via catálogo; Odonto1 é rascunho editorial e está pronto para futura integração pelo mesmo padrão, sem arquitetura paralela.
