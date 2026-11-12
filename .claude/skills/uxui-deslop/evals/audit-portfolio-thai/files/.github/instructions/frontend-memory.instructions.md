---
description: Best practices, architecture conventions, and patterns for the portfolio frontend
applyTo: ["app/**", "components/**", "data/**", "types/**"]
---

# Frontend & Portfolio Architecture Memory

Patterns, design rules, and performance guidelines for maintaining and extending the portfolio web application.

## Single Source of Truth for Portfolio Data
- All personal information, resume history, projects, skills, and contact links are centralized in `data/portfolio.ts` with strict TypeScript contracts from `types/portfolio.ts`.
- Components in `components/sections/` must consume data exclusively through `import from "@/data/portfolio"`. Never hardcode raw profile strings inside section markup.
- Updating text, new job experience, or contact details should only require editing `data/portfolio.ts`.

## Next.js 16 Prerendering & Cache Components Safety
- Avoid non-deterministic values (such as `new Date().getFullYear()`) directly in Client Component JSX during build/prerender. Next.js 16 with Partial Prefetching flags this as an unstable value error.
- Use explicit constants (e.g. `2026`) or compute dynamic time values inside `useEffect` or event handlers.

## Modular Section Architecture
- `app/page.tsx` serves as a clean, high-level orchestrator composing self-contained section components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`).
- Interactive elements requiring React state (`useState`, `useEffect`) belong in individual client components marked with `"use client"`, keeping top-level server rendering fast and declarative.

## Scroll Reveal & Viewport Animations
- Wrap section cards, headings, and grid items with `<ScrollReveal direction="..." delay={...}>` from `components/ui/ScrollReveal.tsx`.
- The `IntersectionObserver` in `ScrollReveal` unobserves elements once revealed to minimize main-thread overhead and prevent re-triggering flicker during scrolling.
- Real-time scroll indicator bar is maintained via `components/ui/ScrollProgress.tsx`.

## Zero-Dependency Standalone SVG Icons
- Maintain standalone SVG icon components in `components/icons/index.tsx`.
- Avoid external icon libraries to eliminate package-lock conflicts, reduce bundle size, and achieve sub-second Turbopack compilation.

