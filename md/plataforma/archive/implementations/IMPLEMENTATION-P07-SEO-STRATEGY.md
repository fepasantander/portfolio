# Sprint P07 — SEO Strategy

## Implementado

- Metadata API com title, description e canonical por superfície pública.
- Open Graph e Twitter Card herdados do layout, com identidade de domínio de produção.
- JSON-LD global `Person` e `WebSite`.
- `sitemap.xml` para Home, Cases, Sobre e Journal.
- `robots.txt` permitindo indexação pública e bloqueando `/admin`.
- Breadcrumbs semânticos já usados em Cases, Sobre e Journal.

## Palavras-chave utilizadas

Product Designer, UX Designer, Product Discovery, UX Research, Design System, Generative AI, Artificial Intelligence, Front-end, HealthTech, EdTech e Fintech permanecem restritas à estratégia aprovada e ao conteúdo real, sem keyword stuffing.

## Score estimado

Estimativa técnica: 85–95. Metadados, canonical, sitemap, robots e JSON-LD estão presentes. O score final depende da execução do Lighthouse e do conteúdo/alt text de cada Case publicado.

## Melhorias futuras

Adicionar JSON-LD `CreativeWork`/`Project` por Case somente depois da publicação completa, imagens OG específicas por página, manifest e auditoria Lighthouse em navegador.

## Validação

Sitemap, robots, canonical e JSON-LD foram revisados estaticamente. Lint, build e Lighthouse continuam pendentes porque o npm global do ambiente não encontra `npm-cli.js`.
