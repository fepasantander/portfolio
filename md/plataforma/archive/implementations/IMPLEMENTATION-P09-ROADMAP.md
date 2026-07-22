# Sprint P09 — Product Roadmap

## Resultado

Auditoria arquitetural concluída sem implementação de funcionalidades. A base suporta a evolução incremental prevista, desde que os Cases sejam migrados para a rota e catálogo canônicos antes do crescimento do Portfolio.

## Recomendações v1.1

1. Publicar o primeiro Case completo em `/cases/[slug]` e derivar card, navegação, metadata e sitemap do mesmo catálogo.
2. Migrar Journal legado por etapas, evitando duplicação entre rotas estáticas e dados centrais.
3. Provisionar Supabase Analytics e proteger o dashboard antes de exibir qualquer dado.
4. Executar lint/build/Lighthouse em terminal com npm funcional e registrar baseline de Core Web Vitals.
5. Planejar i18n e CMS como adaptadores de dados, não como reestruturação da interface.

## Validação

Auditoria de componentes, rotas, dados, SEO, Analytics e relação Portfolio–Journal concluída. `npm run lint` e `npm run build` permanecem bloqueados antes da execução pelo npm global inválido (`npm-cli.js` ausente).
