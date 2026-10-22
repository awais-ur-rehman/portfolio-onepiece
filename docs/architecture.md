# Portfolio architecture

Scope: an independently authored Next.js portfolio following the visual direction in `rebuild.md`.

- Routes and metadata live in src/app.
- Site name and description live in src/config/site.ts.
- Shared UI and layout components have separate folders.
- Future portfolio sections live in features with their own components, hooks, and tests.
- Content, utilities, and shared types have dedicated folders tracked with .gitkeep until needed.
- Strict TypeScript, linting, formatting, and production builds form the initial quality gate.
- Big Shoulders and Italiana are local OFL fonts; builds need no font network access.
- Repository-local Git identity and credentials keep organizational projects separate.

`src/content/portfolio.ts` owns the professional data. Home chapters and original SVG character live in `src/features/dreams/`. A single GSAP ticker drives Lenis and scene updates without per-frame React state. Desktop scrolling maps native document spacers to fixed scenes. Resize measurement recalculates gallery travel; teardown removes listeners and restores native layout. Inactive desktop scenes are inert. Phones and reduced-motion preferences use native vertical flow. Static case-study routes and the printable résumé are Server Components.

Project cover art is original SVG, generated reproducibly by `scripts/create-project-art.mjs`. No reference-site bundles, third-party project screenshots, external embeds, remote asset requests, or Three/Vanta runtime are used. Optional ambient audio is synthesized after an explicit click. No master’s qualification is rendered.
