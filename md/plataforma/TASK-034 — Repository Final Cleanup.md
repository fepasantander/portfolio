# TASK-034 — Repository Final Cleanup

Status: Ready

Priority: Critical (P0)

Type:
Repository
Cleanup
Release

---

# Objetivo

Executar a limpeza final do repositório antes da criação da Release 1.0.

Esta TASK deve aplicar exclusivamente as decisões já aprovadas no REPOSITORY-CLEANUP-PLAN.md.

Nenhuma decisão nova deverá ser tomada durante a execução.

---

## Contexto

As auditorias e o plano de limpeza já foram concluídos.

A documentação também foi reorganizada.

Agora o objetivo é deixar o repositório consistente para staging e commit.

---

## Escopo

Executar apenas as ações previamente aprovadas:

### Documentação

Mover todos os documentos atualmente em:

md/plataforma/active/

para:

md/plataforma/

Após a movimentação:

- remover a pasta active caso fique vazia.

---

### Arquivos temporários

Remover somente:

src/components/sections/Companies (1).tsx

Confirmar que a versão canônica permanece:

src/components/sections/Companies.tsx

---

### Assets

Não mover.

Não apagar.

Não copiar.

Manter exatamente como estão.

---

### pnpm-workspace.yaml

Verificar se o projeto utiliza pnpm.

Caso não exista uso efetivo:

marcar o arquivo para exclusão na próxima etapa.

Não remover nesta TASK.

---

### Git

Não executar:

- git add
- git rm
- git clean
- git restore
- git reset
- git commit
- git push

---

## Restrições

Não modificar:

- código fonte;
- componentes;
- rotas;
- assets;
- Design System;
- conteúdo editorial.

Executar apenas a limpeza estrutural aprovada.

---

## Critérios de aceite

✓ active removida (caso vazia)

✓ documentos ativos disponíveis diretamente em md/plataforma/

✓ Companies (1).tsx removido

✓ Companies.tsx preservado

✓ situação do pnpm documentada

✓ nenhuma alteração de código

---

## Entregável

IMPLEMENTATION-TASK-034.md

Informar:

- documentos movidos;
- diretórios removidos;
- arquivos removidos;
- situação do pnpm-workspace.yaml;
- confirmação de que nenhuma alteração de código foi realizada.

Após concluir, interromper imediatamente.