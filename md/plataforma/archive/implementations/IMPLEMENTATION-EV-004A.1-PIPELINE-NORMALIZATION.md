# EV-004A.1 — Editorial Pipeline Normalization

## Diagnóstico

O slug oficial do Case é `vitruchat`. A ordem de produção mantinha o alias legado `vitru-chat-llm`, causando ordenação inconsistente no catálogo derivado.

## Correção

- `case-production-pipeline.ts`: ordem oficial normalizada para `vitruchat`.
- As rotas novas de Portfolio usam `/cases/vitruchat`; o alias legado permanece somente em Journal/transformações e não deve ser usado por Portfolio.

## Legado

`Transformations` e `/transformations/*` continuam necessários como Journal técnico legado. Não foram removidos por ainda serem destinos de conteúdo publicado.

## Bloqueador remanescente

`published-cases.ts` permanece minificado e seu mapeamento de evidências precisa de normalização explícita para `EvidenceType`. Essa alteração não foi aplicada nesta execução porque o arquivo requer reformatar integralmente com patch seguro. Consequentemente, type check, build e lint não podem ser declarados aprovados, e EV-004B continua bloqueada.
