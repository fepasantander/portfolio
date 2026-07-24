# Implementation Sprint 04 — Product Parity

**Data:** 14 de julho de 2026
**Status:** concluída localmente
**Branch:** `codex/sprint-04-product-parity`

## Objetivo

Eliminar divergências entre documentação oficial, Strategic Log, implementação e comportamento de produção, sem iniciar funcionalidades, alterar narrativa, modificar o Design System ou refatorar a arquitetura.

## Entregas

### 1. Conteúdo aprovado em produção

- Os cards de **Listo** e **Uniasselvi** na Home passam a apontar para suas rotas de transformação em todos os ambientes.
- As abas **Revistas** e **Eventos** em `/transformations/vm-comunicacao` passam a estar ativas em todos os ambientes.
- Foram removidas apenas condições de publicação baseadas em `NODE_ENV`; o conteúdo, os assets, as rotas e a narrativa existentes foram preservados.

### 2. Build

- Removida a busca de fontes em `next/font/google`, que impedia a compilação local sem acesso a `fonts.googleapis.com`.
- A pilha CSS mantém a intenção tipográfica definida: Geist/Inter para texto e Geist Mono/Consolas para monoespaçada, com fallback de sistema.

### 3. Lint

- Corrigidos imports e variáveis sem uso.
- Corrigidas aspas não escapadas em JSX.
- Substituído `any` por `unknown` na interface de eventos de analytics.

### 4. Acessibilidade

- Substituídos links que continham botões por links estilizados com o mesmo comportamento visual.
- Substituído o botão dentro de `Link` na rota dinâmica por um único link semântico.
- Adicionados estado expandido e relação de controle ao menu móvel.
- Os seis modais de case receberam `role="dialog"`, `aria-modal`, foco inicial no fechamento e fechamento por `Escape`.

### 5. Responsividade

- Revisados os breakpoints existentes de Home, CTAs, carrossel, hubs, grids de anexos e modais. A estrutura preserva colunas únicas em mobile e progressão em `sm`, `md` e `lg`.
- A execução visual em navegador não foi possível neste ambiente porque a conexão de automação foi bloqueada por permissões locais. A verificação estática e o build confirmam que as rotas e as classes responsivas compilam sem erro.

## Validações executadas

| Verificação | Resultado |
| --- | --- |
| `eslint src` | Aprovado, sem erros nem avisos |
| `next build` | Aprovado; TypeScript e 13 rotas concluídos |
| Gates por ambiente | Nenhuma ocorrência restante em `src/` |
| Controles aninhados | Nenhuma ocorrência encontrada na varredura estática |
| Semântica de modais | Seis diálogos com `aria-modal`, foco inicial e `Escape` |
| Revisão visual em navegador | Não concluída por restrição de permissões do ambiente |

## Arquivos alterados

- `src/components/sections/Transformations.tsx`
- `src/app/transformations/vm-comunicacao/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/lib/analytics.ts`
- `src/app/page.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`
- `src/components/sections/Header.tsx`
- `src/components/sections/Problem.tsx`
- `src/app/transformations/[slug]/page.tsx`
- `src/app/transformations/listo-sistemas/page.tsx`
- `src/app/transformations/carenet-longevity/page.tsx`
- `src/app/transformations/uniasselvi-plataformas-educacionais/page.tsx`
- `src/app/transformations/vitru-oportunidades-tecnologicas/page.tsx`
- `md/plataforma/07-strategic-log-antigravity.md`

## Fora de escopo e preservado

- Nenhuma nova rota, funcionalidade, dependência ou integração foi criada.
- Nenhum texto narrativo, métrica, responsabilidade, asset ou componente visual foi reescrito.
- Não houve refatoração da arquitetura dos hubs ou consolidação das fontes de dados de cases; isso permanece para uma decisão posterior, fora da Sprint 04.
