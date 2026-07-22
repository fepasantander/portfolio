# TASK-026 — Published Pipeline Finalization

Status: Ready

Priority: Critical (P0)

Type:
Architecture
Pipeline
Refactoring

---

# Objetivo

Eliminar definitivamente qualquer dependência entre o pipeline Published e o pipeline Draft.

Ao final desta TASK, o ambiente de produção não deverá importar, reexportar ou depender de qualquer artefato localizado em `draft-cases`.

---

## Contexto

A Production Readiness Review identificou um bloqueador real para o Deploy:

O Odonto1 ainda é publicado através de um reexport da camada Draft.

Isso viola a arquitetura editorial definida para a plataforma.

---

## Objetivo Arquitetural

Garantir a separação definitiva:

Draft

↓

Revisão

↓

Aprovação

↓

Published

↓

Produção

A camada Published deve possuir apenas conteúdo aprovado.

Nenhum arquivo da produção pode depender de `draft-cases`.

---

## Escopo

Revisar apenas:

- draft-cases
- published-cases
- pipeline editorial
- imports
- exports

Modificar somente o necessário para eliminar a dependência.

---

## Restrições

Não alterar:

- Home
- VitruChat
- Odonto1 (conteúdo)
- MasterCaseTemplate
- Design System
- Componentes
- Layout

Não criar funcionalidades.

Não modificar conteúdo editorial.

---

## Critérios de aceite

✓ Published não depende de Draft.

✓ Nenhum import de produção referencia `draft-cases`.

✓ Pipeline editorial permanece funcional.

✓ Nenhuma regressão.

---

## Entregável

IMPLEMENTATION-TASK-026.md

O relatório deve informar:

- dependências removidas;
- arquivos alterados;
- arquitetura final do pipeline;
- confirmação de que Published está completamente independente do Draft.

Após concluir, interromper imediatamente.