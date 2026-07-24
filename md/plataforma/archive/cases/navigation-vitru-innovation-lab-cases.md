# Navigation Directive — Vitru Innovation Lab Cases

**Version:** 1.0
**Status:** Approved
**Scope:** Vitru Innovation Lab hub, VitruChat LLM and SofIA

## Objective

Make every published case easy to discover, understand and access, while preserving the executive positioning of the platform.

## Problem

The current navigation creates friction:

- VitruChat is reachable, but the path is not sufficiently obvious.
- SofIA exists but is not publicly accessible from the current navigation.
- The Innovation Lab hub does not clearly distinguish available cases from future initiatives.
- Visual evidence exists, but visitors may not immediately understand where to find it.

Usability is part of the evidence.

## Navigation Model

```text
Home
↓
Vitru Educação — Innovation Lab
↓
Program overview
↓
Available cases
├── VitruChat LLM — available
└── SofIA — available
↓
Future initiatives
├── Hub de Correções — coming soon
└── Pesquisa Corporativa de IA — coming soon
```

Do not require the visitor to infer which items are clickable.

## Innovation Lab Hub

Create a clear section titled `Cases disponíveis`.

Each available case must have:

- product name;
- one-sentence problem statement;
- one-sentence contribution or transformation;
- badge `Case completo`;
- CTA `Explorar case`;
- optional note about visual evidence.

### VitruChat LLM

Problem statement:
How to increase internal AI productivity without exposing sensitive corporate information.

Destination:
`/transformations/vitru-oportunidades-tecnologicas`

### SofIA

Problem statement:
How to reduce administrative friction and introduce students to the learning platform through an intelligent onboarding experience.

Destination:
Use the canonical public SofIA route.

If the route does not exist, create it using the existing implementation and the official SofIA Master Document.

## Future Initiatives

Hub de Correções and Pesquisa Corporativa de IA must remain visible but clearly separated from available cases.

Use:

- badge `Em breve`;
- disabled interaction;
- no ambiguous hover;
- no fake CTA.

## Case-Level Navigation

Every Vitru case page must include:

### Breadcrumb

```text
Início / Vitru Educação / Innovation Lab / [Nome do Case]
```

Previous levels must be clickable.

### Previous / Next Case

At the end of each case, include:

- `Case anterior`
- `Próximo case`

Current sequence:

1. VitruChat LLM
2. SofIA
3. Hub de Correções, when published

Do not link to unpublished cases.

### Return Action

Include:

`Voltar ao Innovation Lab`

## Evidence Visibility

Immediately after the Executive Summary, show a compact evidence block with:

- number of available visual assets;
- evidence categories;
- CTA `Ver evidências visuais`;
- short note explaining that layouts are supporting proof, not the primary narrative.

Do not show a large image grid before the visitor understands the case.

## Visual Proof

Use this hierarchy:

1. Executive Summary
2. Compact evidence CTA
3. Context and problem
4. Decisions and contribution
5. Selected visual highlights
6. Full evidence gallery
7. Learnings and next case

Selected highlights should use 3–5 key screens when available.

Each visual must have a factual caption describing:

- what is shown;
- which design decision it demonstrates;
- why it mattered.

Do not invent captions. Use neutral provisional captions when official captions are unavailable.

## Usability Requirements

- Every available case must be reachable in no more than two clicks from the Home.
- Interactive cards must have clear hover, focus and cursor states.
- Disabled initiatives must not resemble active links.
- Navigation labels must be explicit.
- Keyboard navigation must work.
- Focus order must be logical.
- Mobile navigation must preserve the same hierarchy.
- No nested interactive controls.
- No route may depend on development-only gates.

## Acceptance Criteria

- SofIA is publicly accessible.
- VitruChat and SofIA are both visible in the Innovation Lab hub.
- Both are reachable in two clicks or fewer from the Home.
- Breadcrumbs, back-to-hub and case-to-case navigation are present.
- Visual evidence is easy to find but does not dominate the narrative.
- Future initiatives are visible and clearly disabled.
- Build and lint pass.
- No narrative, Design System or case facts are changed.

## Final Perception

> “The platform is easy to navigate, the work is strategically framed, and the visual evidence confirms the level of execution.”
