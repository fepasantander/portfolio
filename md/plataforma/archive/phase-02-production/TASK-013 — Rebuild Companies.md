# TASK-013 — Rebuild Companies.tsx

Status: Ready

Priority: Critical

Type:
Refactoring
UI
Architecture

## Objetivo

Reconstruir integralmente o componente:

Companies.tsx

preservando exatamente o comportamento visual atual.

O objetivo é eliminar a divergência de codificação que impede patches contextuais e corrigir definitivamente o logo da VM Comunicação.

---

## Contexto

O diagnóstico confirmou que:

- o componente ativo ainda renderiza ABROSS.png;
- o patch contextual não consegue localizar corretamente o trecho ativo;
- a codificação do arquivo impede alterações incrementais confiáveis.

A estratégia passa a ser reconstrução completa.

---

## Escopo

Criar um novo Companies.tsx.

Não reutilizar o arquivo atual.

Preservar:

- layout;
- grid;
- animações;
- responsividade;
- comportamento.

---

## Atualização

Substituir apenas o asset da VM Comunicação.

Utilizar:

logo-vm-comunicacao.jpg

Origem:

imagem/vm/

Eliminar qualquer referência a:

ABROSS.png

---

## Não alterar

- Home Layout
- Hero
- Cases
- Footer
- CTA
- outros logos

---

## Critérios

✓ novo Companies.tsx

✓ logo VM correto

✓ mesmo layout

✓ mesma responsividade

✓ nenhuma regressão

---

## Entregável

IMPLEMENTATION-TASK-013.md