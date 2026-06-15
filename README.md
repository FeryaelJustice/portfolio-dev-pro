# portfolio-dev-pro

A differentiated, professional developer portfolio for **Fernando González Serrano (Feryael Justice)** with an Android-inspired **Material 3 Expressive** aesthetic physics-based spring motion, expressive shapes (shape-morphing avatar), a tonal teal color system and editorial typography.

Built as a standalone project alongside the original `porfolio-dev/`, reusing the same real content (projects, experience, bio, assets) with an elevated design system.

## Stack

- **Astro 6** (static output, islands architecture)
- **React 19** islands for Motion-driven interactivity
- **Motion** (Framer Motion) - M3 spatial/effects springs, scroll reveals, layout animations
- **Tailwind CSS v4** via **PostCSS** (`@tailwindcss/postcss`) with CSS-first `@theme` design tokens
- **i18n**: English (`/`) and Spanish (`/es/`), path-based via Astro's built-in i18n

> Note: Tailwind is wired through PostCSS rather than `@tailwindcss/vite` because Astro 6 ships rolldown-vite, which is currently incompatible with the Tailwind Vite plugin ([withastro/astro#16542](https://github.com/withastro/astro/issues/16542)).

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # astro check (types) + static build to dist/
npm run preview   # preview the production build
```

## Architecture

- **`src/data/`** - single source of truth, bilingual content: `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`.
- **`src/i18n/`** - `ui.ts` (UI strings per locale) + `utils.ts` (`getLangFromUrl`, `useTranslations`, `localizePath`).
- **`src/styles/global.css`** - Material 3 tonal design tokens via `@theme` (colors, surfaces, radii, fonts, easings) plus `state-layer`, `grid-backdrop` and `shape-cookie` utilities.
- **`src/lib/motion.ts`** - shared M3 spring presets and reveal variants (respects `prefers-reduced-motion`).
- **`src/components/`** - Astro sections (`About`, `Skills`, `Experience`, `Contact`, `Header`, `Footer`) + React islands in `react/` (`Hero`, `Projects`, `Reveal`, inline `icons`).
- **`src/pages/`** - `index.astro` (EN) and `es/index.astro` (ES) assemble the same sections per locale.

## Sections

Hero · About · Skills (tech arsenal) · Projects (filterable) · Experience (timeline) · Contact.

Accessibility: skip-link, focus-visible rings, `prefers-reduced-motion` support, semantic landmarks and aria labels.
