# Mpho WebGL Exhibition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Cloudflare Workers-ready, WebGL-led exhibition portfolio from the supplied project material.

**Architecture:** A typed content registry drives semantic route pages and a reusable React Three Fiber scene. GSAP links native scrolling to camera and panel movement, while static image narratives provide complete no-WebGL and reduced-motion alternatives.

**Tech Stack:** Next.js-compatible vinext, TypeScript, React, Three.js, React Three Fiber, GSAP, Lenis, Vitest, Cloudflare Wrangler.

**Spec:** User-approved “Mpho Portfolio — WebGL Exhibition” plan in this conversation.

## Global Constraints

- Use only supplied portfolio PDFs and logos as visual and factual sources.
- Target Cloudflare Workers; do not deploy or publish.
- Include no contact form, CMS, database, fabricated contact details, or CV link.
- Provide keyboard, reduced-motion, no-WebGL, and mobile fallbacks.

## Review Focus

- A project slug must resolve to exactly one typed content record.
- A project route must render meaningful content even when the WebGL scene cannot load.
- The Cocoa route must retain the site-to-space narrative without 3D support.
- All download URLs must resolve to real files shipped in `public/downloads`.
- Motion preferences must disable continuous scene animation.

---

### Task 1: Foundation and content registry

**Files:** Create project configuration, `src/lib/projects.ts`, and registry tests.

- [ ] Write failing tests for canonical slugs, unique records, real downloads, and Cocoa narrative milestones.
- [ ] Implement the typed project registry and pass focused tests.
- [ ] Configure the Next.js/vinext/Cloudflare Worker build and production quality commands.

### Task 2: Source-derived asset pipeline

**Files:** Create optimized portfolio preview images and copy source PDFs into `public/downloads`.

- [ ] Extract cover and case-study artwork from only the supplied PDFs.
- [ ] Verify each registry asset path exists and is associated with its documented source.

### Task 3: Exhibition UI and routes

**Files:** Create application layout, navigation, Home, Architecture, Graphic Design, About, Contact, and dynamic project routes.

- [ ] Write failing route/content tests for navigation and project lookup behavior.
- [ ] Implement semantic pages, fallback image narratives, downloads, focus states, and responsive editorial styling.
- [ ] Run unit tests and verify a production build.

### Task 4: Shared 3D scene system

**Files:** Create scene controller, panel gallery, and scroll/motion hooks.

- [ ] Implement a reusable canvas that maps typed project milestones to artwork panels and camera motion.
- [ ] Implement the Cocoa plan-to-perspective choreography and static fallback equivalence.
- [ ] Verify motion preference, asset errors, and no-WebGL path from the rendered routes.

### Task 5: Worker configuration and final verification

**Files:** Create Wrangler and vinext configuration and deployment instructions.

- [ ] Build the Worker artifact, run lint/type/unit checks, and inspect production output.
- [ ] Confirm all public routes, downloads, and fallback views manually in a local browser.
