# Scaffold decisions

Scope: an independent Next.js portfolio repository with a neutral placeholder, ready for a later theme brief.

- Routes and metadata live in src/app.
- Site name and description live in src/config/site.ts.
- Shared UI and layout components have separate folders.
- Future portfolio sections live in features with their own components, hooks, and tests.
- Content, utilities, and shared types have dedicated folders tracked with .gitkeep until needed.
- Strict TypeScript, linting, formatting, and production builds form the initial quality gate.
- System fonts avoid external font downloads during builds.
- Repository-local Git identity and credentials keep organizational projects separate.

Implementation: generate the official scaffold, replace demo content, add conventions and CI, verify quality checks, initialize Git with the personal identity, then create and push the public repository after confirming the authenticated account.
