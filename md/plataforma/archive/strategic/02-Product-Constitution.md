# Product Constitution
## Felipe Santander Platform

Version: 1.0
Status: Active
Owner: Felipe Santander
Last Update: 2026-07

---

# Purpose

This document defines how every feature of the platform must be designed, implemented, tested and evolved.

The Brand Constitution defines WHO we are.
The Product Constitution defines HOW we build.

---

# Product Principles

1. Clarity over visual spectacle.
2. Content before decoration.
3. Performance before animation.
4. Accessibility by default.
5. Reusable components over one-off solutions.
6. Measurable decisions over opinions.
7. Long-term maintainability over shortcuts.

---

# Technology Stack

Mandatory:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel
- Supabase

Architecture must be modular and ready for growth.

---

# Project Structure

/app
/components
/lib
/hooks
/services
/styles
/public
/content

Reserve future routes:

/about
/transformations
/playbook
/admin

---

# Design System

Seed Design System only.

Core components:

- Button
- Card
- Section
- Container
- Heading
- Paragraph
- Quote
- Divider

Typography:
Geist (fallback Inter)

Grid:
12 columns
1280px max width

---

# UX Principles

Every page must answer:

- What problem is being discussed?
- Why does it matter?
- Why am I qualified to help?
- What evidence supports that?
- What should the visitor do next?

---

# Accessibility

Minimum WCAG AA.

Semantic HTML.

Keyboard navigation.

Visible focus.

Good color contrast.

---

# Performance

Targets:

Performance >=95
SEO >=95
Accessibility =100
Best Practices =100

Optimize images.
Lazy load where appropriate.
Avoid unnecessary JavaScript.

---

# SEO

Every page must support:

- title
- meta description
- Open Graph
- canonical
- robots
- sitemap
- schema.org

---

# Analytics

Architecture only.

Create an analytics layer exposing:

trackPage()
trackEvent()
trackCTA()
trackDownload()

No provider lock-in.

Future integrations may include GA4, Clarity or PostHog through adapters.

---

# Supabase

Prepare folders only.

/lib/supabase

Future modules:

- auth
- database
- storage
- analytics

Do not couple business logic to Supabase.

---

# Coding Standards

Small components.

Strong typing.

Readable names.

No duplicated code.

Document important decisions.

---

# Release Strategy

MVP:
Home only.

Next:
Executive Summary

Then:
Transformations

Then:
Playbook

Then:
Admin

---

# Definition of Done

A feature is complete only if:

- Responsive
- Accessible
- Performant
- SEO-ready
- Reusable
- Documented

---

# Final Principle

Build a product that demonstrates how Felipe Santander thinks about digital products—not merely a website that talks about him.

End of document.
