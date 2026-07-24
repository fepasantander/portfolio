# EV-004A.2 — Rebuild Published Cases Catalog

`src/data/published-cases.ts` foi reconstruído integralmente. O mapeamento de evidências agora declara `EvidenceType` explicitamente; não há `any` nem cast. O slug público permanece `vitruchat`, compatível com pipeline, Home e rota canônica.

Type check, build e lint permanecem pendentes de execução porque o npm global do ambiente não encontra `npm-cli.js`; esta Sprint não pode ser declarada concluída até a validação em runtime funcional.
