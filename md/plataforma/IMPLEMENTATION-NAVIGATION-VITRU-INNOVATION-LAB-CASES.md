# Implementation — Navigation Vitru Innovation Lab Cases

**Date:** 2026-07-16  
**Status:** Implemented

## Delivered

- Public Hub route: `/transformations/vitru-innovation-lab`.
- Canonical public SofIA route: `/transformations/sofia-administrative-ai-assistant`.
- Home → Innovation Lab → VitruChat and Home → Innovation Lab → SofIA paths, each within two clicks.
- Visible separation between published Cases and future initiatives.
- Breadcrumbs, `Voltar ao Innovation Lab`, and Case-to-Case navigation.
- Compact visual-evidence CTA immediately after each Executive Summary.
- Four selected VitruChat visual highlights after the contribution section, with complete access to the existing 28-image gallery.
- Existing provisional evidence labels preserved; no strategic captions, metrics, facts or decisions were added.

## Accessibility and interaction

- Available Cases use real links with visible hover and focus states.
- Future initiatives are static, explicitly marked `Em breve`, and do not mimic interactive controls.
- Home transformation CTA no longer nests a button inside a link.
- The existing VitruChat gallery preserves keyboard navigation, focus trapping and focus return to its trigger.
- The evidence component remains in `Em atualização` for SofIA until assets are catalogued.

## Scope protection

The approved narratives, Design System, visual identity and unrelated Programs/Cases were not changed. No new technical debt was introduced.

## Validation

- `npm run lint`: executed; blocked only by the pre-existing `no-explicit-any` error in `src/lib/analytics.ts`. The changed files pass targeted lint.
- `npm run build`: passed with temporary public Supabase placeholders. Without those environment variables, the existing Home pre-render fails before this feature is evaluated.
- Public-route and navigation checks: passed for Hub, VitruChat and SofIA (HTTP 200), including Hub CTAs, return-to-Hub, Case navigation and evidence states.
