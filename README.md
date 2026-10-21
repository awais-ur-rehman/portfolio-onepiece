# portfolio-onepiece

A neutral Next.js portfolio scaffold for Awais ur Rehman. The theme and portfolio content will be defined later.

## Getting started

Use Node.js 24 LTS and npm.

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or external services are required. See `.env.example` for future configuration; keep secrets in `.env.local`.

## Stack and structure

Next.js App Router, React, strict TypeScript, Tailwind CSS, ESLint, and Prettier. Commit the lockfile and use `npm ci` for repeatable installs.

```text
public/images/       Static image assets
src/
  app/               Routes, layouts, metadata, global CSS
  components/
    ui/              Shared UI primitives
    layout/          Shared navigation, header, footer
  config/            Site-wide configuration
  content/           Portfolio content and local data
  features/          Feature-specific components and logic
  lib/               Shared utilities and integrations
  types/             Types shared across features
docs/                Architecture notes
.github/workflows/   Continuous integration
```

Keep routes thin. Colocate feature-specific components, hooks, types, and future tests inside their feature. Promote code to shared folders when multiple consumers need it. Use `@/` imports for `src/`, kebab-case filenames, and PascalCase component names.

Server Components are the default. Add `"use client"` only for browser APIs or interactive state. Use semantic HTML and accessible controls. Keep server secrets out of client modules. Add meaningful behavior tests alongside future features.

The layout follows [Next.js project conventions](https://nextjs.org/docs/app/getting-started/project-structure).

## Quality checks

```powershell
npm run lint
npm run typecheck
npm run format:check
npm run build
```

`npm run check` runs all four. `npm run format` formats the project. `npm start` serves a successful production build. GitHub Actions runs these checks on pushes and pull requests to main.

As of October 21, 2026, `npm audit --omit=dev` reports zero vulnerabilities. The full audit reports five high-severity entries through the ESLint dependency chain for a single [braces recursion advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), with no published patched version. Review upstream updates; do not use the audit's suggested forced downgrade of the Next.js lint configuration.

## Personal GitHub identity

Intended public repository: `awais-ur-rehman/portfolio-onepiece`.

Repository-local identity:

```powershell
git config --local user.name "awais-ur-rehman"
git config --local user.email "awaisjarral37@gmail.com"
```

Global organizational settings remain unchanged. Commit identity and GitHub authentication are separate. Verify `gh api user --jq .login` before creating the remote. Local credential settings delegate this repository's HTTPS access to GitHub CLI using the personal account.

The `private: true` setting in package.json prevents accidental npm publication; it does not affect GitHub visibility.

## Next steps

Supply the theme, sections, and assets before implementing the visual design. No CMS, authentication, database, analytics, or animation dependencies are included yet.
