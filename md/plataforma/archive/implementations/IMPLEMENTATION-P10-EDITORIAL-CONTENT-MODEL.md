# Sprint P10 — Editorial Content Model

## Integração

O modelo editorial está em `src/data/editorial-model.ts`; `PortfolioCase` passou a usar categoria, tags, evidências e stack tipados por esse modelo. Portfolio, Journal e futuros adaptadores CMS/i18n podem consumir o mesmo contrato.

## Contratos e validações

- Enums fechados de categorias, tags, grupos de tecnologia e tipos de evidência.
- CTA restrito a `journal` ou `contact`.
- Contratos de evidência e tecnologia agrupada.
- `isPublishableCase` bloqueia catalogação pública sem hero, resumo, problema, atuação, solução, resultado, evidências, stack e CTA; também limita problema e aprendizados.

## Cadastro de novo Case

Criar um objeto `EditorialCase` apenas com valores dos enums, preencher todos os blocos obrigatórios e executar `isPublishableCase` antes de incluí-lo no catálogo. A página, card, Journal e integrações futuras devem referenciar o mesmo slug.

## Próximas adaptações

Um CMS deverá mapear seus campos para `EditorialCase` e validar enums no adaptador. i18n exigirá campos localizados por idioma. Geração automática de páginas deve filtrar somente Cases publicáveis.

## Validação

Contratos e catálogo foram revisados estaticamente. Lint/build seguem indisponíveis pelo npm global inválido (`npm-cli.js` ausente).
