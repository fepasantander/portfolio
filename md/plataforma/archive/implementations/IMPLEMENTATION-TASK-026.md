# TASK-026 — Published Pipeline Finalization

## Dependência removida

`published-cases.ts` não reexporta nem importa `draft-cases.ts`. O objeto editorial aprovado do Odonto1 foi movido para a camada Published sem alteração de conteúdo.

## Arquivos alterados

- `src/data/published-cases.ts`
- `src/data/draft-cases.ts`

## Pipeline final

Draft → revisão → aprovação → Published → catálogo derivado → produção.

## Confirmação

Nenhum arquivo Published ou o pipeline editorial importa, reexporta ou depende de `draft-cases`.
