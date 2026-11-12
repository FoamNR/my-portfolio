---
name: uxui-deslop
description: >
  Audit and fix "AI slop" in web UI/UX — the generic, template-looking design and
  copy that AI tools produce (glow blobs, gradient text, identical eyebrow headings,
  placeholder gradient cards, motion on everything, buzzword copy like "passionate
  about scalable solutions"). Use this skill whenever the user asks to review, critique,
  polish, de-genericize, or redesign a page's UX/UI, says the site "looks AI-made",
  "looks like a template", "ดู AI", "ai slop", "ดูไม่มีเอกลักษณ์", "ปรับ uxui", or wants
  a portfolio/landing page to feel more personal and credible — even if they don't use
  the word "slop". Works for React/Next.js/Tailwind projects; covers both audit-only
  reports and applying fixes.
---

# UX/UI de-slop

"AI slop" is UI that looks assembled from defaults rather than designed for a person and a
purpose. The problem isn't any single gradient — it's that every choice is the *statistically
average* one, so the page says nothing about its owner. A visitor (recruiter, client) notices
this in seconds and discounts everything else on the page.

The goal of this skill is not "make it minimal" or "remove all effects". It is: **every visual
and textual choice should be there for a reason specific to this site**. Keep effects that earn
their place; cut the ones that are filler.

## Modes

- **Audit** (default): report findings, change nothing. Use when the user asks to "look",
  "review", "check", "ดู", "วิเคราะห์".
- **Fix**: apply changes. Only when the user asks to fix/improve/redesign, or approves a list
  from an audit. Ask before changes that alter identity (brand colour, logo, layout
  concept, removing a whole section) — those are the owner's decisions.

## Workflow

### 1. Load project rules first
Read the project's own conventions before judging anything (e.g. `AGENTS.md`, `CLAUDE.md`,
`.agents/rules/*`, `.github/instructions/*`). Fixes must follow them — for example, if content
must live in a data file, rewrite copy *there*, not in the component. For Next.js projects with
an AGENTS.md warning about version changes, check `node_modules/next/dist/docs/` before using
any framework API you aren't sure about.

### 2. Scan the code
Run the bundled scanner from the project root for a quick, objective first pass:

```bash
node .claude/skills/uxui-deslop/scripts/scan-slop.mjs
```

(Pass directories as arguments to narrow it, e.g. `node … components app data`.) It flags
known class/copy patterns with file:line. Treat its output as **leads, not verdicts** — a hit
is slop only if it's unmotivated or repeated without purpose. Then read every section
component yourself; the scanner can't see structural slop (repeated layouts, duplicated
content, cards with no real artifact).

Read `references/slop-catalog.md` for the full pattern list, why each one reads as generic,
and what to do instead.

### 3. Look at it rendered
Code review misses what users actually see. Start the dev server and view the page at three
widths — ~375px (phone), ~800px (tablet/small laptop), ~1440px (desktop). Reveal-on-scroll
wrappers often hide content in screenshots; force them visible or scroll slowly. Check:
- What's above the fold at each width? Is the owner's face/name/value proposition visible?
- Do all controls work at every width (e.g. a hamburger that's visible but does nothing)?
- What does it look like with `prefers-reduced-motion: reduce`?

### 4. Report
Use the user's language (Thai if they wrote Thai). Group findings and rank by impact on the
page's actual job (for a portfolio: proving the person can do the work).

```
## 🔴 Visual slop        — pattern, where (file:line), why it reads generic
## 🔴 Copy slop          — quote the phrase, where, what's missing (specifics)
## 🟠 Structure / content — duplication, missing proof, information order
## 🐞 UX bugs            — broken/misleading interactions, responsive issues
## Priority order        — 3–5 steps, highest impact first
```

Every finding needs a location and a concrete reason. "Looks generic" alone isn't a finding.
Separate *slop* (taste/genericness) from *bugs* (objectively broken) — the user should be able
to fix bugs without debating taste.

### 5. Fix (fix mode only)
Work in this order, because earlier steps change what later steps need:

1. **Bugs** — objectively broken things first; uncontroversial and quick.
2. **Content** — this is where most of the value is. Replace buzzwords with specifics (numbers,
   names, outcomes, constraints). Remove duplicated content so each fact appears once, in the
   section where it matters most. Never invent facts: if a specific is needed (a metric, a
   link, a screenshot), ask the user or leave a clearly marked `TODO` rather than fabricating.
3. **Structure** — give sections distinct shapes based on their content (a timeline should look
   like a timeline, a project like a case study) instead of the same header + card grid.
4. **Visual system** — consolidate to one accent colour with meaning, reduce glows/shadows,
   make motion purposeful and respect `prefers-reduced-motion`.

Make changes in small, reviewable steps. After each group, re-check in the browser at the
three widths and confirm nothing regressed (layout, links, mobile menu, contrast).

## What "good" looks like
- A stranger can tell what's distinctive about this person/product within 5 seconds.
- Each claim is backed by something checkable (a link, a screenshot, a number, a name).
- Effects are few and each has a job (guide the eye, give feedback, show state).
- Sections differ in form because their content differs.
- Nothing is said twice.
