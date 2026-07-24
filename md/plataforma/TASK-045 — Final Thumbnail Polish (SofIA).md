# TASK-045 — Final Thumbnail Polish (SofIA)

Status: Ready

Priority: High (P1)

Type:

- UI
- Visual
- Assets

---

# Objetivo

Ajustar o enquadramento do thumbnail da SofIA no Journal para privilegiar o topo da arte em vez da região central.

---

# Contexto

O asset utilizado está correto.

O problema atual é apenas o enquadramento.

Hoje o componente centraliza a imagem.

Isso faz com que a parte superior da arte fique escondida.

---

# Requisitos

Não substituir o asset.

Não editar a imagem.

Alterar apenas a forma de renderização.

O thumbnail deverá:

- mostrar prioritariamente a região superior da imagem;
- preservar proporção;
- evitar cortes laterais desnecessários;
- manter consistência visual com os demais cards.

Caso o componente utilize object-position, ajustar para um alinhamento superior.

Caso utilize outra estratégia equivalente, manter a solução mais simples possível.

Não alterar os demais thumbnails.

---

# Validação

Verificar:

/journal

Confirmar:

- SofIA enquadrada corretamente;
- demais thumbnails inalterados;
- grid preservado;
- responsividade preservada.

---

# Critérios de aceite

✓ Apenas o thumbnail da SofIA alterado.

✓ Asset mantido.

✓ Melhor enquadramento.

✓ Sem regressão visual.

---

# Entregável

IMPLEMENTATION-TASK-045.md