# TASK-023 — Odonto1 EditorialCase Migration

Status: Ready

Priority: P0

Type:
Architecture
Migration
Refactoring

---

## Objetivo

Migrar o Case Odonto1 para a arquitetura canônica utilizada pelos Cases publicados.

Eliminar a duplicidade arquitetural existente.

Ao final desta TASK deverá existir apenas uma fonte de verdade para o conteúdo do Odonto1.

---

## Contexto

Foi identificada uma inconsistência estrutural.

Hoje o Odonto1 possui uma implementação própria em:

/cases/odonto1/page.tsx

Enquanto os Cases publicados utilizam a arquitetura canônica baseada em:

- EditorialCase
- MasterCaseTemplate
- catálogo publicado
- rota dinâmica (ou arquitetura equivalente existente)

Essa duplicidade impede a publicação segura.

---

## Objetivo da migração

Descobrir qual é a arquitetura atualmente utilizada pelo VitruChat.

Migrar o Odonto1 para exatamente o mesmo padrão.

Não criar uma nova arquitetura.

Não reinventar componentes.

Não alterar o funcionamento do VitruChat.

---

## Escopo

Migrar apenas a arquitetura.

O conteúdo editorial já está aprovado.

Não reescrever textos.

Não alterar narrativa.

Não alterar layout.

---

## Fonte de verdade

Após a migração deverá existir apenas uma fonte de verdade para:

- conteúdo;

- metadados;

- navegação;

- renderização.

Eliminar qualquer duplicidade.

---

## Renderização

A rota:

/cases/odonto1

deverá utilizar exatamente o mesmo pipeline empregado pelo VitruChat.

Caso exista:

MasterCaseTemplate

EditorialCase

published-cases

ou outra implementação equivalente,

o Odonto1 deve aderir integralmente a ela.

---

## Não modificar

- Home

- VitruChat

- outros Cases

- conteúdo editorial

- Design System

- componentes compartilhados

Exceto quando necessário para reutilizar a infraestrutura existente.

---

## Critérios de aceite

✓ apenas uma fonte de verdade

✓ Odonto1 aderente à arquitetura canônica

✓ sem page paralela desnecessária

✓ renderização consistente

✓ nenhuma regressão no VitruChat

✓ pronto para integração pública

---

## Restrições

Esta TASK NÃO publica o Odonto1.

Esta TASK NÃO altera o catálogo.

Esta TASK NÃO modifica o conteúdo.

Esta TASK apenas consolida a arquitetura.

---

## Entregável

IMPLEMENTATION-TASK-023.md

O relatório deve conter:

- arquitetura identificada;

- diferenças encontradas;

- arquivos migrados;

- arquivos removidos (quando aplicável);

- nova fonte de verdade;

- validação de ausência de duplicidade;

- confirmação de que o Case está pronto para integração.

Após concluir, interromper imediatamente.