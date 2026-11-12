# Project Architecture & Codebase Map

## Overview
- **Project Name:** `my-app` (Nonthawat Ramkongmuang Portfolio)
- **Framework:** Next.js 16.4.3 (App Router with Turbopack)
- **Language:** TypeScript 5, React 19.3.0
- **Styling:** TailwindCSS v4 with `@tailwindcss/turbopack`
- **Package Manager:** npm

## Directory Structure & Clean Architecture (Best Practices)
- `app/` - Next.js App Router root
  - `app/layout.tsx` - Root layout with metadata and dark theme styling
  - `app/page.tsx` - Clean, declarative composition page importing modular sections
  - `app/globals.css` - Global Tailwind CSS rules & custom scrollbar
- `components/` - Modular UI Components
  - `components/icons/` - Reusable lightweight SVG icon components (`index.tsx`)
  - `components/layout/` - Layout components (`Navbar.tsx`, `Footer.tsx`)
  - `components/sections/` - Self-contained sections:
    - `Hero.tsx` - Main banner with cutout portrait & Developer X layout
    - `About.tsx` - Bio, stats & highlights
    - `Experience.tsx` - Work experience, education & hackathons
    - `Projects.tsx` - Filterable project cards showcase
    - `Skills.tsx` - Technical stack & categories
    - `Contact.tsx` - Direct call-to-actions & contact info
- `data/` - Single source of truth for portfolio content
  - `data/portfolio.ts` - All profile details, projects, timeline, skills, and contact info
- `types/` - TypeScript interface definitions
  - `types/portfolio.ts` - Strict contracts for Profile, Project, Experience, and Skills
- `.github/instructions/` - Persistent memory & instruction rules
  - `frontend-memory.instructions.md` - Core best practices, Next.js 16 gotchas & animation patterns
- `public/` - Static assets (`profile.png`, logos)

## Development & Deployment Workflow
- **Dev Server:** `npm run dev` (Runs Next.js dev server with Turbopack on port 3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Docker Deployment:**
  - Build & run: `docker compose up -d --build`
  - Stop: `docker compose down`

## Architecture Rule for Agents
- Do not re-scan or re-read the full codebase structure on session start; refer to this blueprint first.
- Only inspect specific target files when modifying code.
- To update content/text/data, modify `data/portfolio.ts` without touching TSX rendering logic.
