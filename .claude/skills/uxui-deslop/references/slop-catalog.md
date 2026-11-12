# AI slop catalog

Each entry: **what it looks like** → **why it reads as generic** → **what to do instead**.
A pattern used once, on purpose, is fine. The tell is *repetition* and *lack of motive*.

## Contents
1. Visual patterns
2. Motion patterns
3. Layout & structure patterns
4. Copy patterns
5. Content patterns
6. UX bugs that often ride along

---

## 1. Visual patterns

### Ambient glow blob
`absolute … rounded-full blur-[100px+] bg-blue-600/10` behind the hero.
→ The single most common AI-landing-page signature; adds no information.
→ Remove, or replace with something that belongs to the subject (a real photo, a texture
  from their work, a meaningful diagram).

### Gradient text on names/headlines
`bg-gradient-to-r … bg-clip-text text-transparent`.
→ Default "make it pop" move; often lowers contrast and readability.
→ Solid colour. If emphasis is needed, use weight, size, or one accent word.

### Glow shadows on everything
`shadow-lg shadow-blue-600/30`, `shadow-[0_0_12px_rgba(…)]`, `drop-shadow-…` on many elements.
→ When everything glows, nothing is emphasized.
→ Keep elevation for one primary CTA at most; flat otherwise.

### Blue/indigo/cyan dark theme with rainbow category colours
Near-black bg (`#131418`-ish) + blue accent, plus each card/category a different Tailwind hue
(blue, indigo, emerald, cyan, amber, teal) with no meaning.
→ Colour that encodes nothing is decoration noise; the palette is the default AI palette.
→ One accent colour, used for one meaning (e.g. "interactive" or "highlight"). If categories
  need distinguishing, use labels/position first, colour only if it carries meaning.

### Icon in a tinted rounded square
`w-10 h-10 rounded-xl bg-X-500/10 text-X-400` + icon above a stat/title.
→ Stock "feature grid" component; icons are usually generic (trophy, cap, briefcase).
→ Drop the icon box; let the content (a number, a logo of the org, a photo) lead.

### Placeholder gradient cards
Project/feature cards whose "image" area is just `bg-gradient-to-tr from-X via-Y to-slate-900`.
→ Signals "there is nothing to show". Worst on a portfolio.
→ Real screenshot, short video/GIF, architecture diagram, or a logo. If none exists yet,
  make the card text-first and smaller rather than faking a visual. Ask the user for assets.

### Eyebrow heading formula repeated per section
Short accent bar → tiny `uppercase tracking-[0.2em] text-blue-500` label → big bold h3.
Labels like PROFESSIONAL SUMMARY / BACKGROUND & TIMELINE / SKILLS & CAPABILITIES.
→ Same template stamped onto every section; the eyebrow usually restates the heading.
→ One clear heading per section. Vary section openings according to content.

### Generic brand marks
`</>` code-bracket logo, `Name.dev`, "Built with Next.js & Tailwind CSS" footer.
→ Default dev-portfolio identity.
→ Use the person's actual mark/initials or just their name typeset well.

### Pills/badges everywhere
Rounded-full bordered pills for dates, tags, status, filters, CTAs all at once.
→ Visual monotony; everything looks equally clickable.
→ Plain text for metadata (dates, roles); reserve pill shape for interactive filters or tags.

## 2. Motion patterns

### Reveal-on-scroll on every element, staggered
Every heading, card, and grid item fades/slides/blurs in with incremental delays.
→ Slows reading, hides content from screenshots/printing, feels like a template demo.
→ Reveal at most section-level, once, short (≤300ms), no blur. Or none.

### Hover lift + scale on all cards and buttons
`hover:-translate-y-1`, `hover:scale-105` on non-clickable cards.
→ Implies interactivity that isn't there (cards that don't link anywhere).
→ Hover effects only on things that are actually clickable.

### Typewriter role rotator
"I'm X, a [typing… Full Stack Developer]" cycling roles.
→ Extremely common; also dilutes positioning (4 roles = no clear role).
→ One clear positioning statement, static.

### Scroll progress bar with gradient glow
→ Unneeded on a single short page.
→ Remove, or keep thin and solid if the page is long.

### No `prefers-reduced-motion`
Any of the above without a reduced-motion path is an accessibility issue, not just taste.
→ Wrap animations: `motion-safe:` Tailwind variant or a media query.

## 3. Layout & structure patterns

### Every section = centered header + uniform card grid
→ Sections are indistinguishable; the eye has nothing to anchor on.
→ Shape follows content: timeline for experience, case-study rows for projects, a compact
  list for skills, a single line for contact.

### Hero with three equal columns of small text
Left blurb, center photo, right "ABOUT ME / MY WORK / CONNECT" snippets with LEARN MORE links.
→ Splits attention; snippets duplicate later sections.
→ One message, one primary action, the person's face.

### "Hire Me" pill + "Open for opportunities" badge (+ repeated)
→ Template CTA; mismatched tone for a junior seeking a role; repeated in several places.
→ One CTA, worded for the real goal ("Email me", "Download CV").

## 4. Copy patterns

Flag these words/phrases, especially stacked together:
- passionate, dedicated, driven, adaptable, results-oriented
- scalable, robust, efficient, seamless, cutting-edge, innovative, modern, reliable
- leverage / leveraging, harness, empower, elevate, streamline
- "digital solutions", "software architectures", "real-world"
- "Let's build something great/amazing together"
- "Ready to build efficient, scalable solutions"
- "Feel free to contact me…!"
- "Architected" for small CRUD apps (over-claiming hurts credibility)

Why: these say nothing a reader can verify, and readers recognize them as filler.

Instead — **specific > impressive**:
- Numbers: users, requests, time saved, team size, ranking ("8th of 40 teams").
- Constraints: what was hard, what trade-off was made.
- Names: org, client type, stack *for that project*.
- Own voice: how the person would say it out loud.

Rewrite test: if the sentence could appear unchanged on another person's portfolio, rewrite it.

**Never fabricate specifics.** Ask the user, or leave `TODO: add metric` visibly.

## 5. Content patterns

### Same fact in many places
One achievement shown in hero, about, experience, projects, and a competitions box.
→ Inflates length, reads as padding, and makes the page feel thin rather than rich.
→ Each fact lives in one place; other sections may link to it.

### Soft skills and AI tools as "skills"
"Problem Solving", "Teamwork", "Continuous Learning", "ChatGPT", "Claude", "Gemini" tags.
→ Unverifiable or universal; listing chat tools as skills reads oddly to hiring managers.
→ Show soft skills through project stories. Mention AI tooling, if at all, as part of a
  workflow ("used X to …") not as a badge.

### Projects without proof
No repo link, no demo, no screenshot, no outcome.
→ The section's job is proof; without it, it's a list of claims.
→ Add links/media; if private, say so and show a sanitized screenshot or diagram.

### Mixed calendars / inconsistent formats
"2569 – Present (2026)" next to "(2568-2569)" next to "2022-2026".
→ Small inconsistencies read as unedited output.
→ Pick one format per language of the page.

## 6. UX bugs that often ride along
- Hamburger visible on desktop that toggles a mobile-only menu (does nothing).
- `lang` attribute not matching page language.
- Hero image pushed below the fold at mid widths.
- Animation utility classes from a plugin that isn't installed (e.g. `animate-in`).
- Hard-coded contact details duplicated outside the data source.
- Cards with hover affordance but no link.
- Low-contrast gray-on-near-black body text (`text-gray-400`/`text-xs` on `#16171d`) —
  check WCAG AA (4.5:1 for body text).
