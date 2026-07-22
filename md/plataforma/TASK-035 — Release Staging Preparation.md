# TASK-035 — Release Staging Preparation

Status: Ready

Priority: Critical (P0)

Type:
Git
Release
Repository

---

# Objetivo

Preparar a Release 1.0 para versionamento, definindo exatamente quais arquivos deverão entrar no commit.

Esta TASK NÃO cria commit.

Esta TASK NÃO executa push.

Esta TASK NÃO altera código.

---

## Contexto

A documentação foi organizada.

A limpeza do repositório foi concluída.

O projeto está com:

✓ Build aprovado

✓ TypeScript aprovado

✓ Lint aprovado

✓ Production Readiness: GO

Agora precisamos preparar um staging seguro.

---

## Escopo

Revisar completamente:

git status

Identificar:

- arquivos modificados;

- arquivos novos;

- arquivos removidos;

- arquivos ignorados.

Comparar com o REPOSITORY-CLEANUP-PLAN.

Gerar uma lista definitiva dos arquivos que deverão fazer parte da Release.

---

## Classificação

Para cada arquivo encontrado informar:

INCLUDE

ou

EXCLUDE

Justificando cada decisão.

---

## Restrições

Não executar:

- git add
- git commit
- git push
- git reset
- git restore
- git clean

Não modificar código.

Não mover arquivos.

Não remover arquivos.

---

## Critérios de aceite

✓ Lista definitiva produzida.

✓ Todos os arquivos classificados.

✓ Nenhuma operação Git realizada.

---

## Entregável

RELEASE-STAGING-PLAN.md

O relatório deve conter:

- git status resumido;
- lista INCLUDE;
- lista EXCLUDE;
- justificativa de cada grupo;
- confirmação de que a Release está pronta para staging.

Após concluir, interromper imediatamente.