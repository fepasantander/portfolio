# TASK-043 — Correção de Assets, Deep Links e Navegação do Journal

Status: Ready

Priority: High — P1

Type:

- UI
- Assets
- Navigation
- Deep linking
- Product Transformation Journal

---

# Objetivo

Corrigir os assets visuais da seção Empresas e do catálogo do Product Transformation Journal, além de implementar links que abram diretamente a aba correta dentro de cada página de transformação.

Nenhuma alteração desta tarefa deve ser enviada para produção antes de nova revisão visual.

---

# Contexto

Ambiente local:

`http://localhost:3006`

O servidor Next.js já está em execução.

A imagem de referência fornecida evidencia que:

- o logo da Listo ainda é o asset anterior;
- o logo da VM está pequeno;
- os cards individuais das empresas usam cinza escuro, e não preto puro;
- os assets precisam de dimensionamento visual coerente, sem necessariamente usar exatamente a mesma largura física.

---

# 1. Home — seção Empresas

## 1.1 Fundo da seção e dos cards

Garantir preto puro em toda a composição:

```css
background-color: #000000;