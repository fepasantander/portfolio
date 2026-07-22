# TASK-029 — Build Blocker #1

## Arquivo alterado

`src/lib/analytics.ts`

## Causa

O retorno de `supabase.from(...).insert(...)` é tipado como `PromiseLike`, que não expõe `.catch`. A cadeia `then(...).catch(...)` falhava no TypeScript.

## Solução

A chamada foi mantida com o mesmo comportamento de tolerância a falhas, usando `await` dentro de `try/catch`. Falhas de tracking continuam sem interferir na experiência do visitante.

## Build

`npm run build` aprovado. Compilação, TypeScript, coleta de dados e geração de 20 páginas concluídos com sucesso. As rotas `/cases/vitruchat` e `/cases/odonto1` foram geradas estaticamente.
