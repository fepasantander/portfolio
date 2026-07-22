# EV-004 — Portfolio Case Experience Refinement

Version: 1.0

Status: Approved

Type:
UX Refinement
Art Direction
Editorial Experience

Priority:
Critical

---

# Objetivo

Transformar a experiência de navegação do Portfolio e do primeiro Case publicado (VitruChat), corrigindo problemas de hierarquia visual, escaneabilidade, identidade editorial e navegação.

Esta Sprint complementa a EV-003.

Nenhuma alteração deverá modificar a arquitetura do projeto.

---

# 1. Empresas

## Uniasselvi

Substituir o logo atualmente utilizado pelo asset:

```
logo-uniasselvi-white
```

Localização:

```
imagem/vitru/
```

Motivo:

Melhor contraste e consistência visual.

---

## VM Comunicações

Substituir pelo asset:

```
logo-vm-comunicacao
```

Localização:

```
imagem/vm/
```

---

# 2. Card do Case

## Dimensão

Os cards atuais ocupam largura excessiva.

Novo comportamento:

Desktop

3 cards por linha.

Tablet

2 cards.

Mobile

1 card.

---

## Estrutura

Imagem

Categoria

Produto

Empresa

Resumo

Tecnologias

CTA

---

## Hover

Adicionar:

- leve zoom da imagem;
- borda Cyan;
- pequena elevação;
- CTA deslocando alguns pixels.

---

# 3. Hero do Card

Utilizar uma interface real do produto.

Imagem recomendada:

```
Pastas_MenuClosed&PropOpen&PromptOpen
```

(v2-light)

Evitar utilizar logotipos como imagem principal do card.

---

# 4. Hero da Página do Case

Substituir a imagem atual pela seguinte:

```
Pastas_MenuClosed&PropOpen&PromptOpen
```

Diretório:

```
imagem/vitru/vitruchat/v2-light
```

A Hero deve utilizar:

- imagem ampla;
- overlay;
- gradiente sutil;
- categoria;
- empresa;
- título;
- resumo;
- tecnologias;
- meu papel.

---

# 5. Evidências

Transformar a galeria principal.

Adicionar:

- navegação por setas;
- teclado;
- swipe;
- indicadores de posição.

Apresentar apenas as melhores 7–8 telas.

As demais permanecem disponíveis na galeria completa.

---

# 6. Hierarquia Editorial do Case

Reprojetar completamente a página.

Problema atual

Todos os blocos possuem peso semelhante.

O conteúdo torna-se cansativo.

Nova estrutura

Hero

↓

Executive Summary

↓

Meu Papel

↓

Problema

↓

Solução

↓

Resultados

↓

Evidências

↓

Product Transformation Journal

↓

Próximo passo

Cada seção deve possuir identidade visual própria.

Utilizar:

- grandes títulos;
- subtítulos claros;
- espaçamentos generosos;
- divisores discretos;
- chips;
- destaque para números e palavras-chave.

Objetivo:

Alta escaneabilidade.

---

# 7. Navegação

Substituir:

```
Voltar aos Cases
```

por

```
← Voltar para Home
```

Destino:

```
/
```

---

# 8. Product Transformation Journal (Home)

Reconstruir completamente.

A seção atual continua parecendo um banner.

Novo conceito:

Editorial Archive.

Características:

- assimétrica;
- forte tipografia;
- destaque para investigações;
- sensação de publicação técnica.

Evitar:

cards tradicionais.

Apresentar:

- texto editorial;
- investigações publicadas;
- CTA principal.

---

# 9. Product Transformation Journal (Case)

Transformar o CTA em uma seção editorial.

Adicionar:

Título

Descrição

Benefícios

CTA

Exemplo

PRODUCT TRANSFORMATION JOURNAL

Este Case resume as principais decisões.

No Journal estão documentados:

- Discovery;
- Arquitetura;
- Trade-offs;
- Bastidores;
- Evidências completas.

CTA

Explorar investigação completa

---

# Critérios de Aceitação

✓ Logos corretos.

✓ Cards menores.

✓ Três cards por linha.

✓ Hero atualizada.

✓ Hierarquia editorial radicalmente melhor.

✓ Evidências navegáveis.

✓ Home mais escaneável.

✓ Journal da Home completamente redesenhado.

✓ CTA do Journal muito mais atrativo.

✓ Navegação intuitiva.

✓ Página agradável para leitura longa.