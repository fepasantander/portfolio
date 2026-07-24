# Sprint C01 — Case Production Pipeline

## Fluxo de publicação

Coleta → organização por problema, usuários, negócio, tecnologia, discovery, design, resultados e lições → estrutura P10 → revisão → `canPublishCase` → catálogo derivado.

## Arquivos envolvidos

- `src/data/editorial-model.ts`: taxonomia e validação de obrigatoriedade.
- `src/data/case-production-pipeline.ts`: ordem oficial, checklist e geração de catálogo publicado.
- `src/data/portfolio-content.ts`: destino de consumo por Portfolio e Journal.

## Operações

Para adicionar um Case: criar `EditorialCase`, preencher checklist, validar `canPublishCase` e adicionar o registro de produção. Para remover: retirar o registro; o catálogo derivado deixa de expô-lo. Para atualizar: alterar o mesmo registro, refazer a revisão e gerar novamente o catálogo.

Nenhum conteúdo, Case ou página foi criado nesta Sprint. A infraestrutura é compatível com P10 e preparada para CMS futuro.
