# TASK-015 — Remove Cases Route from Navigation

Status: Ready

Priority: High

Type:
Navigation
Information Architecture
UX

## Objetivo

Remover a navegação pública para `/cases`, eliminando a etapa intermediária entre a Home e os Cases.

Os Cases continuam existindo normalmente em suas URLs individuais.

---

## Escopo

### Breadcrumb

Substituir:

Home
>
Cases
>
Nome do Case

por:

Home
>
Nome do Case

---

### Navegação

Remover qualquer link público para:

/cases

---

### Home

Todos os cards continuam apontando diretamente para:

/cases/<slug>

---

### URLs

Devem permanecer:

/cases/vitruchat

/cases/harmonia

/cases/diva

...

---

## Não alterar

- conteúdo dos Cases
- SEO individual
- layouts
- Hero
- animações
- componentes dos Cases

---

## Critérios

✓ breadcrumb simplificado

✓ nenhuma navegação pública para /cases

✓ links da Home continuam funcionando

✓ URLs individuais preservadas

---

## Entregável

IMPLEMENTATION-TASK-015.md