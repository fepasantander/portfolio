# Release Notes — Innovation Lab v1.0

**Release date:** 2026-07-17  
**Status:** Production release baseline

## Resumo executivo

Innovation Lab v1.0 consolidates the public program hub and its three Case destinations into one navigable portfolio experience. The release preserves the approved Case narratives and uses visual evidence as supporting material rather than as the primary story.

## Principais entregas

- Innovation Lab Hub as the program entry point.
- Public VitruChat LLM, SofIA and Hub de Correções routes.
- Consistent breadcrumbs, return-to-Hub actions and Case-to-Case navigation.
- Compact evidence discovery, selected highlights and complete galleries where assets exist.

## Casos publicados

- **VitruChat LLM:** public Case with 28 cataloged visual assets in four groups.
- **SofIA:** public Case with its approved narrative; visual-evidence state remains `Em atualização` until assets are cataloged.
- **Hub de Correções:** public Case structure with 12 real cataloged visual assets in three groups.

## Arquitetura implantada

The program uses file-system public routes under `/transformations`, existing UI primitives, `next/image` for evidence delivery and local client-side lightboxes only where interaction is required. The Hub de Correções evidence model groups assets by theme and preserves a lightweight initial render.

## Melhorias de UX e navegação

- Home → Innovation Lab Hub → Case path for published Cases.
- Clear separation between complete Cases, Case in preparation and future initiatives.
- Breadcrumbs, explicit return action and ordered previous/next Case links.
- Executive Summary remains before evidence content.

## Melhorias de acessibilidade

- Visible hover and focus states on active controls.
- Disabled future states do not simulate links.
- Gallery dialogs provide Escape, Arrow-key navigation, Tab focus trapping, focus entry and focus return to the source control.
- Responsive grids preserve hierarchy on mobile, tablet and desktop breakpoints.

## Infraestrutura criada

- Canonical public routes for SofIA and Hub de Correções.
- Evidence gallery infrastructure for the Hub de Correções with assets grouped as Arquitetura e dados, Home e indicadores and Fluxo de correção.
- Six selected highlights and a full 12-asset gallery for the Hub de Correções.

## Validações executadas

- Targeted lint for modified Innovation Lab pages.
- Full lint executed; the only blocking error is the pre-existing `no-explicit-any` in `src/lib/analytics.ts`, outside the program scope.
- Production build with temporary public Supabase placeholders required by the existing Home pre-render.
- Local production-equivalent HTTP validation: Home, Innovation Lab Hub, VitruChat, SofIA and Hub de Correções returned HTTP 200; an unknown route returned HTTP 404.
- All 40 Innovation Lab public image URLs returned HTTP 200 with image content types (28 VitruChat and 12 Hub de Correções).
- Review of `next/image` lazy loading, responsive grids and lightbox keyboard/focus behavior.

## Pendências e riscos conhecidos

- `npm run lint` remains blocked globally by the pre-existing `no-explicit-any` error in `src/lib/analytics.ts`, outside Innovation Lab scope.
- The root workspace contains unrelated uncommitted work and is intentionally excluded from this release branch.
- The VitruChat and Hub de Correções evidence patterns remain local implementations; this duplication is a low-risk future consolidation opportunity, not a release blocker.

## Conclusão

Innovation Lab v1.0 is the stable baseline for the program. New functionality for this program requires a new Sprint. The Product Transformation Journal remains in maintenance evolution, and the next development cycle is Felipe Santander Portfolio.
