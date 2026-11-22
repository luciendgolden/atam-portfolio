# Tampier Portfolio - Astro & Tailwind CSS

Welcome to my personal portfolio website built with Astro.js and Tailwind CSS. This site showcases my projects, skills, and experiences in web development.

## Development

Use Node.js 22.23.4+ (a supported even-numbered release) and pnpm 12.21.0. Following [Astro’s setup guide](https://docs.astro.build/en/install-and-setup/), use pnpm to install dependencies and run scripts. `pnpm-lock.yaml` is the lockfile used for development and deployment.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

When switching package managers, remove `node_modules` before installing to avoid resolving stale dependencies.

```sh
pnpm run check
pnpm run build
python3 scripts/check-site-paths.py
node scripts/check-pagination.mjs
```

TypeScript is kept on v6 because `astro check` does not yet support v7. Tailwind CSS v3 runs through PostCSS; the legacy Astro Tailwind integration is no longer used.

## Deployment

The site is deployed at the domain root on Vercel, using `pnpm install --frozen-lockfile` and `pnpm run build`, with `dist` as the output directory.

Canonical URLs, RSS, and sitemaps use `SITE_URL` when set, otherwise Vercel's `VERCEL_PROJECT_PRODUCTION_URL`. Local builds default to `http://localhost:4321`. Set `SITE_URL` to the full origin when using a custom domain.

```sh
vercel deploy --scope alex-1604s-projects
```

This creates a preview. Add `--prod` only when ready to publish to production.

## Features

- **Responsive Design:** Ensures a great experience across all device sizes.
- **Dark Mode:** A user-friendly dark mode for comfortable viewing in low-light conditions.
- **Dynamic Content:** Projects and skills are dynamically loaded from a local data store.
- **SEO Optimized:** Tailored for better visibility on search engines.

## Technologies Used

- **[Astro.js](https://astro.build/):** An all-in-one web framework for building fast, content-focused websites.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
- **[TypeScript](https://www.typescriptlang.org/):** (Optional) Adds static type definitions for better code reliability and developer experience.
