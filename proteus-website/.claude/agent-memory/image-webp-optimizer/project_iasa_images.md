---
name: Grupo IASA + Proteus image structure
description: Image asset locations, reference files, and component paths for both web_iasa Next.js sites
type: project
---

Two Next.js 15 sites share assets under `/web_iasa/`:

**grupoiasa-website** (`/web_iasa/grupoiasa-website/`)
- Team photos: `public/team/*.jpg` — 16 portraits (800px, ratio ~4:3 landscape or 3:4 portrait) + 1 group `equipo-iasa.jpg` (1600px)
- Division logos (PNG with transparency): `public/divisions/proambiente.png`, `proceanic.png`, `proiecta.png` (600×255px)
- Main logo (PNG with transparency): `public/logo-iasa.png` (281×273px, ~17KB)
- Code references:
  - `src/data/equipo.ts` — array entries use `/team/{name}.jpg` paths (foto field)
  - `src/data/divisiones.ts` — division objects use `/divisions/{slug}.png` (logo field)
  - `src/components/Header.tsx` — Image src="/logo-iasa.png"
  - `src/components/Footer.tsx` — Image src="/logo-iasa.png"

**proteus-website** (`/web_iasa/proteus-website/`)
- `public/joachim.jpg` (597×800px) — used in Network.tsx section
- `public/logo-iasa.png` — own copy of the IASA logo
- Code references:
  - `src/components/sections/Network.tsx` — Image src="/logo-iasa.png" (Grupo IASA partner card)
  - joachim.jpg reference location TBD (not found in src search, may be i18n JSON or dynamic)

**Masters (do not touch):** `/web_iasa/assets/` — client originals.

**Why:** Both sites are static-exported on Vercel. next/image handles WebP serving natively; manual conversion was done to ship WebP source files directly, targeting Lighthouse mobile ≥ 90.

**How to apply:** When updating image references, change extensions from .jpg/.png to .webp in the four data/component files listed above. next/image accepts any format; no <picture> fallback needed since Vercel serves to modern browsers.
