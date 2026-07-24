# TASK-029 — Build Blocker #1

Status: Ready

Priority: Critical (P0)

Type:
Build
TypeScript

---

# Objetivo

Resolver exclusivamente o primeiro erro de compilação identificado durante `npm run build`.

Erro atual:

Property 'catch' does not exist on type 'PromiseLike<undefined>'.

---

## Escopo

Localizar o trecho responsável pelo erro.

Analisar a tipagem retornada pela chamada do Supabase.

Aplicar a menor alteração possível para eliminar o erro de compilação, preservando o comportamento atual do código.

---

## Restrições

Não alterar arquitetura.

Não realizar refactors.

Não modificar outros arquivos sem necessidade.

Não corrigir outros erros de build.

Após eliminar este erro, executar novamente:

npm run build

Se surgir um novo erro, interromper imediatamente.

---

## Critérios de aceite

✓ Primeiro erro resolvido.

✓ Novo build executado.

✓ Próximo erro documentado (caso exista).

---

## Entregável

IMPLEMENTATION-TASK-029.md

Informar:

- arquivo alterado;
- causa do erro;
- solução aplicada;
- resultado do novo build.

Após concluir, interromper imediatamente.