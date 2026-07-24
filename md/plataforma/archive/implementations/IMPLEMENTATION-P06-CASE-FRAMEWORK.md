# Sprint P06 — Case Framework

## Catálogo único

`src/data/portfolio-content.ts` é agora a fonte única para o contrato de Case, empresas, testimonials e referências do Journal. O modelo de `PortfolioCase` contém hero, resumo executivo, contexto, problema, atuação, solução, resultados, galeria, tecnologias, categoria, tags e o vínculo opcional ao Journal.

O catálogo de Portfolio permanece vazio até que um case tenha todos os critérios de publicação do P06. Isso impede páginas, cards e dados parciais. As três referências já publicadas no Journal estão centralizadas no mesmo módulo e são consumidas pela navegação de Portfolio/Journal.

## Reuso

- Home e cards devem consumir `portfolioCases` quando os cases forem aprovados.
- Páginas `/cases/[slug]` devem consultar o mesmo slug.
- Journal consulta `journalCaseReferences` e se relaciona pelo identificador do Case.
- `CaseNavigation` deriva anterior, próximo e retorno diretamente do catálogo, sem duplicar links.

## Validação

Navegação, responsividade e semântica do componente foram verificadas estaticamente. `npm run lint` e `npm run build` continuam bloqueados pelo npm global inválido (`npm-cli.js` ausente); não são declarados aprovados.
