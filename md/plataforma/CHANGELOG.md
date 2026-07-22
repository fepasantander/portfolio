# Changelog

## 2026-07-17 — EV-001: Homepage Content Hierarchy

- Converted Companies into a logo-only social proof strip and kept Cases immediately below it.

## 2026-07-17 — Sprint C02: Master Case Template

- Added reusable EditorialCase renderer with evidence, Journal CTA, analytics and Case navigation support.

## 2026-07-17 — Sprint C01: Case Production Pipeline

- Added editorial review checklist, official case order and derived publishable-catalog helper.

## 2026-07-17 — Sprint P10: Editorial Content Model

- Added closed editorial taxonomies, evidence/technology contracts and publication validation.
- Connected the Portfolio Case contract to the shared editorial model.

## 2026-07-17 — Sprint P09: Product Roadmap Audit

- Audited Portfolio architecture, data catalog, routes, SEO, Analytics and Portfolio–Journal relationship.
- Recorded roadmap risks and v1.1 recommendations without implementation changes.

## 2026-07-17 — Sprint P08: Analytics Strategy

- Added privacy-first anonymous event catalog and session-scoped tracking layer.
- Added Supabase analytics event schema with RLS and anonymous insert policy.

## 2026-07-17 — Sprint P07: SEO Strategy

- Added canonical metadata for Portfolio routes and independent Journal metadata.
- Added global Person and WebSite JSON-LD, sitemap and robots route handlers.
- Set production metadata base and Open Graph site identity.

## 2026-07-17 — Sprint P06: Case Framework

- Expanded the single Case contract to cover the P06 case sequence and optional Journal relationship.
- Centralized published Journal case references in the same content catalog.
- Added reusable previous/next/back Case navigation prepared for published Portfolio cases.

## 2026-07-17 — Sprint P05: Design Language

- Added global spacing tokens, responsive container standard, visible focus treatment and reduced-motion support.
- Standardized base Button and Card interaction patterns with short, restrained transitions.
- Added responsive image defaults and link/focus behavior shared by Portfolio and Journal surfaces.

## 2026-07-17 — Sprint P2: Content Architecture

- Reorganizada a Home nos oito blocos definidos em P04: Hero, Empresas, Cases, Testimonials, Como Trabalho, Sobre, Journal e Contato.
- Adicionado contrato tipado para Case, Empresa e Testimonial, separado da camada de apresentação.
- Adicionados blocos estruturais de Empresas e Product Transformation Journal.
- Nenhum conteúdo de case ou depoimento não aprovado foi publicado.

## 2026-07-17 — Sprint P1: Information Architecture

- Added canonical Portfolio routes for `/cases` and `/journal`; preserved `/sobre` as the public About route.
- Replaced the legacy Home anchor menu with fixed Portfolio navigation: Cases, Sobre, Journal, Contato and the `Vamos conversar` CTA.
- Added reusable breadcrumbs to the new Portfolio routes and to Sobre.
- Defined the contextual Portfolio → Journal relationship using the three already published Innovation Lab cases only.
- Redirected legacy Journal entry routes `/transformations` and `/playbook` to `/journal`, removing public empty-state messaging.
- Removed public “Em breve” controls from the Portfolio surface; no unpublished case was exposed.

## 2026-07-17 — Innovation Lab v1.0 Release Baseline

- Consolidated the Innovation Lab Hub, VitruChat LLM, SofIA and Hub de Correções into the v1.0 release baseline.
- Recorded the chronological delivery sequence: Hub creation, VitruChat publication, SofIA publication, navigation improvements, Hub infrastructure and real-evidence integration.
- Confirmed breadcrumbs, inter-case navigation, evidence galleries, lightboxes, keyboard support, focus management and responsive layouts as release scope.
- Known release constraint: global lint remains blocked by the pre-existing `no-explicit-any` error in `src/lib/analytics.ts`.

## 2026-07-17 — Hub de Correções: Integração de Evidências

- Cataloged and published 12 real Hub de Correções assets in three evidence groups.
- Added six selected visual highlights, complete gallery and accessible lightbox.
- Added descriptive evidence labels without new metrics, context or interpretation.

## 2026-07-16 — Hub de Correções: Preparação Estrutural

- Added the public canonical route `/transformations/hub-correcoes`.
- Added a case-preparation page with no narrative or visual-evidence content.
- Prepared evidence slots for images, boards, FigJam and documents.
- Added Hub de Correções to the Innovation Lab as `Conteúdo em preparação`, separate from future initiatives.
- Extended Case navigation to VitruChat → SofIA → Hub de Correções.

## 2026-07-16 — Navigation Vitru Innovation Lab Cases

- Added the public Innovation Lab hub at `/transformations/vitru-innovation-lab`.
- Added the canonical public SofIA route at `/transformations/sofia-administrative-ai-assistant`.
- Made VitruChat and SofIA discoverable from the Hub, including clear published and future initiative states.
- Added breadcrumbs, return-to-Hub actions and previous/next Case navigation.
- Kept visual evidence secondary to the narrative with a compact CTA, four selected highlights and the complete 28-image gallery.
- Removed the nested interactive control from the Home transformation CTA.
