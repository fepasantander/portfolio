# Sprint C02 — Master Case Template

## Renderer

`MasterCaseTemplate` renderiza o contrato completo `EditorialCase`: Hero, resumo executivo, contexto, problema, atuação, solução, resultados, evidências, stack, aprendizados, CTA opcional do Journal e navegação entre Cases.

## Componentes

Reutiliza `next/image`, `next/link`, `CaseNavigation` e a camada `track`. O template não possui conteúdo, rotas ou exceções por produto.

## Evolução

Uma rota futura consultará o catálogo derivado pelo slug e entregará o mesmo objeto ao template. CMS, i18n e geração automática precisam somente adaptar dados para `EditorialCase`.
