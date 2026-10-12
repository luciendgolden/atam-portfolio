# Tampier Portfolio - Astro & Tailwind CSS

Welcome to my personal portfolio website built with Astro.js and Tailwind CSS. This site showcases my projects, skills, and experiences in web development.

## Development

Use Node.js 22.12+ (CI uses Node 24) and pnpm 12.3.4. `pnpm-lock.yaml` is the lockfile used for development and deployment.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

When switching from an older npm/Bun installation, remove `node_modules` before installing to avoid resolving stale dependencies.

```sh
pnpm run check
pnpm run build
python3 scripts/check-pages-paths.py
node scripts/check-pagination.mjs
```

TypeScript is kept on v6 because `astro check` does not yet support v7. Tailwind CSS v3 runs through PostCSS; the legacy Astro Tailwind integration is no longer used.

## Features

- **Responsive Design:** Ensures a great experience across all device sizes.
- **Dark Mode:** A user-friendly dark mode for comfortable viewing in low-light conditions.
- **Dynamic Content:** Projects and skills are dynamically loaded from a local data store.
- **SEO Optimized:** Tailored for better visibility on search engines.

## Technologies Used

- **[Astro.js](https://astro.build/):** An all-in-one web framework for building fast, content-focused websites.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
- **[TypeScript](https://www.typescriptlang.org/):** (Optional) Adds static type definitions for better code reliability and developer experience.
