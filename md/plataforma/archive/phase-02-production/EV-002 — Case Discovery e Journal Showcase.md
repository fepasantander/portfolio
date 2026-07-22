# EV-002 — Homepage Case Discovery and Journal Showcase

Version: 1.0
Status: Approved
Type: Product Evolution + Corrective Sprint
Priority: Critical

---

# 1. Objective

Correct the Home experience so that:

1. company logos remain clearly visible in light and dark themes;
2. Portfolio Case cards lead to actual Portfolio Cases;
3. VitruChat becomes directly discoverable from the Home;
4. legacy Transformation cards no longer represent the Portfolio Case catalog;
5. the Product Transformation Journal becomes a visually distinctive and strategically relevant section.

This sprint must correct the implementation introduced in EV-001 rather than merely restyle the current components.

---

# 2. Problems Identified

## 2.1 Company logos lack contrast

Some logos become partially or completely invisible because the current treatment applies the same monochromatic presentation to assets with different visual properties.

Possible causes include:

* dark logos displayed on dark backgrounds;
* light logos displayed on light backgrounds;
* excessive opacity reduction;
* global grayscale or brightness filters;
* images with transparent areas and insufficient internal contrast;
* use of blending modes without per-logo validation.

This weakens the intended social proof.

---

## 2.2 The Home still uses legacy Transformation cards

The section visually identified as Cases still reuses the legacy `Transformations` component.

Those cards continue sending users to Journal or legacy routes under:

```text
/transformations/*
```

This conflicts with the approved product architecture.

Portfolio Cases must use canonical routes under:

```text
/cases/*
```

The Home must no longer present Journal entries as if they were Portfolio Cases.

---

## 2.3 VitruChat is not discoverable as a Portfolio Case

The reusable `MasterCaseTemplate` exists, but it is not sufficient by itself.

A public Case requires:

* approved `EditorialCase` content;
* catalog registration;
* a canonical route;
* a card connected to that route;
* publication validation.

VitruChat must become the first published Portfolio Case at:

```text
/cases/vitruchat
```

---

## 2.4 The Journal section lacks visual and editorial relevance

The current Journal section behaves as a generic promotional block.

It does not communicate:

* why the Journal exists;
* how it differs from the Portfolio;
* what type of material it contains;
* which investigations are currently available;
* why a technical leader should explore it.

The Journal must feel like an editorial product, not a secondary CTA.

---

# 3. Experience Principle

The Home must communicate two different levels of evidence:

## Portfolio Cases

Fast executive comprehension.

```text
Problem → Role → Decisions → Solution → Results
```

## Product Transformation Journal

Technical and strategic depth.

```text
Context → Investigation → Trade-offs → Evidence → Learning
```

Core message:

> Os Cases mostram o que foi transformado.
> O Journal revela como as decisões foram construídas.

The two products are connected, but they must not duplicate each other.

---

# 4. Updated Homepage Hierarchy

```text
Hero
↓
Companies
↓
Selected Cases
↓
Testimonials
↓
How I Work
↓
About
↓
Product Transformation Journal
↓
Contact
```

The removed legacy `Transformations` block must not appear elsewhere on the Home.

---

# 5. Companies Section — Contrast Correction

## 5.1 Purpose

Provide immediate social proof without becoming a navigation or content section.

## 5.2 Companies

Reuse the existing assets for:

* Vitru;
* Uniasselvi;
* Carenet;
* Listo;
* VM Comunicações.

Do not create replacement logos.

## 5.3 Visual treatment

Each logo must be placed inside an individual neutral logo cell.

Recommended structure:

```text
[ logo cell ][ logo cell ][ logo cell ][ logo cell ][ logo cell ]
```

Each cell must provide:

* consistent minimum height;
* vertically and horizontally centered logo;
* safe internal padding;
* neutral surface distinct from the page background;
* subtle border;
* no CTA;
* no external link unless already approved;
* no carousel motion required.

## 5.4 Contrast rules

Do not apply a single destructive CSS filter to every logo.

Forbidden as a universal solution:

```css
filter: grayscale(1) opacity(.4);
mix-blend-mode: multiply;
mix-blend-mode: screen;
```

Instead:

1. inspect each existing asset;
2. identify whether it was designed for light or dark surfaces;
3. use the most legible version available;
4. support per-logo presentation metadata when necessary;
5. maintain sufficient contrast in both light and dark themes.

A logo-specific configuration may include:

```ts
type CompanyLogoPresentation = {
  themeVariant?: "light" | "dark" | "adaptive";
  surface?: "neutral" | "light" | "dark";
  maxWidth?: number;
  opacity?: number;
  invertOnDark?: boolean;
};
```

This metadata must affect presentation only.

Do not duplicate company content.

## 5.5 Interaction

Default:

* full visual legibility;
* no reduced opacity at rest;
* subtle elevation or border response on hover;
* no scale above approximately 1.02;
* no animation when `prefers-reduced-motion` is enabled.

The logos must remain readable without hover.

---

# 6. Selected Cases Section

## 6.1 Source of truth

The section must consume the approved Portfolio Case catalog derived from:

```text
EditorialCase
→ canPublishCase
→ published Portfolio catalog
```

It must not consume the legacy Journal Transformation array.

The old `Transformations` component may only remain if required by legacy Journal pages. It must not render the Home Portfolio Cases section.

## 6.2 Section identity

Recommended label:

```text
Projetos selecionados
```

Recommended heading:

```text
Produtos complexos transformados em experiências claras e escaláveis.
```

Supporting copy:

```text
Uma seleção de trabalhos em educação, saúde, finanças e inteligência artificial, apresentados a partir do problema, das decisões e do impacto gerado.
```

## 6.3 Case card requirements

Each Case card must contain:

* cover or hero image;
* category;
* product title;
* concise value proposition;
* company;
* role;
* selected capability tags;
* explicit link label.

Recommended CTA:

```text
Ver Case
```

The entire card may be clickable, provided that:

* nested interactive elements are avoided;
* keyboard focus is visible;
* the accessible name is descriptive;
* the CTA destination is unambiguous.

## 6.4 Initial published Case

VitruChat must be registered as the first public Portfolio Case.

Canonical route:

```text
/cases/vitruchat
```

Home card destination:

```text
/cases/vitruchat
```

The Case must use the approved content from:

```text
001-VitruChat.md
```

The route must pass the corresponding `EditorialCase` object to:

```text
MasterCaseTemplate
```

## 6.5 Other Cases

Only approved and publishable Cases may appear as active cards.

Unpublished Cases must not appear as dead cards, disabled controls or “coming soon” cards.

The Home may initially display only VitruChat.

A single strong published Case is preferable to a grid of unavailable projects.

## 6.6 Legacy routes

Do not delete legacy Journal content in this sprint.

However:

* Home Case cards must never link to `/transformations/*`;
* `/transformations/*` remains a Journal or legacy concern;
* `/cases/*` is the canonical Portfolio Case namespace.

Where a legacy VitruChat page exists, redirecting it to the canonical Portfolio Case is optional only if it does not destroy the distinct Journal content.

Do not redirect a technical Journal article to the executive Portfolio Case when they are genuinely different documents.

---

# 7. Product Transformation Journal — New Concept

## 7.1 Strategic role

The Journal must be presented as the place where technical and strategic depth lives.

It is not:

* a blog;
* a duplicate Case catalog;
* a generic article feed;
* a decorative CTA.

It is an editorial repository of product decisions.

## 7.2 Section concept

Working concept:

```text
The Decision Room
```

Public product name remains:

```text
Product Transformation Journal
```

“The Decision Room” may be used as an internal design concept or small editorial eyebrow, not as a replacement brand.

## 7.3 Visual direction

Create an asymmetric editorial composition with two main areas.

### Left area — Editorial statement

Content:

```text
PRODUCT TRANSFORMATION JOURNAL

Os Cases mostram o que foi transformado.
O Journal revela como as decisões foram construídas.

Investigações sobre arquitetura de produto, discovery, inteligência artificial, experiência, métricas e os trade-offs que normalmente desaparecem das apresentações finais.
```

Primary CTA:

```text
Explorar o Journal
```

Secondary contextual text:

```text
Para Heads, CPOs, CTOs e profissionais que desejam avaliar raciocínio, não apenas interfaces.
```

### Right area — Decision archive

Present a visual archive containing up to three real, published Journal entries.

Each entry must look like an editorial dossier rather than a standard Portfolio card.

Possible structure:

```text
01 / IA CORPORATIVA

VitruChat
Governança, arquitetura conversacional e evolução para múltiplos agentes.

[ Ler investigação ]
```

```text
02 / IA E OPERAÇÃO

SofIA
Como uma assistente administrativa ganhou contexto, limites e utilidade operacional.

[ Ler investigação ]
```

```text
03 / IA E AVALIAÇÃO

Hub de Correções
Métricas, revisão humana e consistência em processos avaliativos assistidos por IA.

[ Ler investigação ]
```

Use only entries that are actually published.

Do not create unavailable links.

## 7.4 Visual language

The Journal section should deliberately differ from the Portfolio Case grid.

Recommended characteristics:

* strong editorial typography;
* clear numerical indexing;
* structured metadata;
* thin rules and separators;
* controlled layered depth;
* deliberate asymmetry;
* restrained motion;
* subtle visual references to annotations, investigation files or decision records;
* one large featured entry and up to two compact supporting entries.

Avoid:

* generic three-card grids;
* floating gradient blobs;
* fake terminal interfaces;
* excessive glassmorphism;
* decorative dashboards;
* stock illustrations;
* parallax;
* auto-scrolling content;
* invented metrics.

## 7.5 Background and contrast

The section may use a high-contrast surface distinct from the rest of the Home.

It must work in both appearance modes.

Possible implementation:

```text
large editorial panel
+ internal grid
+ subtle texture produced with CSS
+ no image dependency
```

The surface must preserve:

* WCAG text contrast;
* visible focus;
* reduced-motion support;
* readable mobile stacking.

## 7.6 Archive metadata

Display only values calculated from real catalog data.

Permitted examples:

```text
{publishedJournalEntries.length} investigações publicadas
{uniqueDomains.length} domínios explorados
{totalEvidenceCount} evidências catalogadas
```

Render these only when the data is valid and non-zero.

Do not hardcode aspirational numbers such as:

* “40+ decisões”;
* “100+ evidências”;
* “12 estudos”;

unless the catalog objectively supports them.

## 7.7 Relationship with Cases

When a Journal entry is related to a published Portfolio Case:

* Journal card may include a subtle `Case relacionado` indicator;
* the Journal article may link back to the Case;
* the Case may link to the Journal through the existing optional CTA.

This relationship must remain contextual, not duplicated.

---

# 8. Responsive Behaviour

## Desktop

* Companies displayed in one balanced row when space permits;
* Selected Cases use the established responsive Case layout;
* Journal uses an asymmetric split composition;
* the featured dossier receives greater visual weight.

## Tablet

* Journal may become a balanced two-column structure;
* no horizontal clipping;
* company cells may wrap.

## Mobile

Order:

```text
Journal statement
↓
Primary CTA
↓
Featured dossier
↓
Supporting dossiers
↓
Derived catalog metadata
```

No horizontal carousel is required.

All information must remain accessible without hover.

---

# 9. Motion

Do not introduce parallax.

Allowed motion:

* subtle dossier reveal;
* approximately 150–250 ms transitions;
* small border, opacity or translation changes;
* image or surface response on hover;
* no content movement that delays reading.

Respect:

```text
prefers-reduced-motion
```

Motion must support hierarchy, not become the attraction.

---

# 10. Analytics

Track the following events through the existing analytics facade:

```text
company_logo_strip_view
portfolio_case_view
portfolio_case_open
journal_showcase_view
journal_showcase_open
journal_entry_open
case_journal_cta_open
```

Required properties may include:

```ts
{
  caseSlug?: string;
  journalSlug?: string;
  source: "home" | "case";
  position?: number;
}
```

Do not include personal data.

Do not introduce a second analytics implementation.

---

# 11. SEO and Semantics

## Selected Cases

Use semantic section headings.

Case links must point to canonical `/cases/[slug]` routes.

## Journal

The Home Journal showcase remains a section of the Home and must not create duplicate page metadata.

Published Journal entries retain their own canonical routes and metadata.

## Structured data

Do not create a separate structured-data object for every Home card unless already supported by the SEO architecture.

The canonical Case route should render the relevant `CreativeWork` or equivalent structured data.

---

# 12. Accessibility

Required:

* visible keyboard focus;
* meaningful logo alt text;
* decorative assets marked appropriately;
* no essential information conveyed only by color;
* no hover-only content;
* section landmarks;
* sequential heading hierarchy;
* accessible links;
* no nested buttons or links;
* contrast validated in light and dark themes;
* full reduced-motion support.

---

# 13. Acceptance Criteria

## Companies

* [ ] Every logo is legible in light mode.
* [ ] Every logo is legible in dark mode.
* [ ] Logos remain legible without hover.
* [ ] No universal filter destroys brand contrast.
* [ ] Existing logo assets are reused.
* [ ] No CTA or redundant company description is displayed.

## Portfolio Cases

* [ ] Home no longer uses legacy Transformation data as Portfolio Cases.
* [ ] The selected Cases section uses the published `EditorialCase` catalog.
* [ ] VitruChat is visible on the Home.
* [ ] VitruChat card links to `/cases/vitruchat`.
* [ ] `/cases/vitruchat` renders through `MasterCaseTemplate`.
* [ ] The route uses the approved VitruChat editorial content.
* [ ] Unpublished Cases are not exposed.
* [ ] No Home Case card links to `/transformations/*`.

## Journal

* [ ] The section has a distinctive editorial composition.
* [ ] It clearly explains the difference between Cases and Journal.
* [ ] It presents only real published entries.
* [ ] It avoids the generic three-card Portfolio layout.
* [ ] It uses no invented counts or metrics.
* [ ] It contains a clear CTA to `/journal`.
* [ ] It performs correctly in light, dark and reduced-motion modes.

## Quality

* [ ] No regression in Lighthouse Accessibility.
* [ ] No material regression in LCP or CLS.
* [ ] Mobile layout is complete.
* [ ] Analytics events use the existing facade.
* [ ] Changelog and implementation report are updated.

---

# 14. Deliverables

Create:

```text
IMPLEMENTATION-EV-002-CASE-DISCOVERY-JOURNAL-SHOWCASE.md
```

Update:

```text
CHANGELOG.md
```

The implementation report must include:

1. root cause of the logo contrast failure;
2. presentation rule adopted for each logo;
3. legacy Home component removed or replaced;
4. Portfolio Case catalog source;
5. VitruChat canonical route validation;
6. confirmation that no Home Case links to `/transformations/*`;
7. published Journal entries used in the showcase;
8. screenshots of the Home in light and dark modes;
9. responsive validation;
10. accessibility and performance validation.
