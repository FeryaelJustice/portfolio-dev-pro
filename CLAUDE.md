# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # astro check (TypeScript validation) + static build to dist/
npm run preview  # serve the production build locally
```

There are no tests. `astro check` (run as part of `build`) is the type-checker.

## Architecture

**Astro islands**: components are `.astro` (static HTML, zero JS shipped) unless they need interactivity or animation — those live in `src/components/react/` as `.tsx` islands. The three React islands are `Hero` (`client:load`), `Projects` and `Reveal` (both `client:visible`).

**i18n**: two locales — English at `/` (`src/pages/index.astro`) and Spanish at `/es/` (`src/pages/es/index.astro`). All UI strings live in `src/i18n/ui.ts` as a typed `as const` object. The translation helper is always `const t = (k: keyof (typeof ui)["en"]) => ui[lang][k]` — TypeScript enforces valid keys. `src/i18n/utils.ts` provides `getLangFromUrl`, `useTranslations`, and `localizePath`.

**Data layer**: `src/data/` is the single source of truth. All bilingual content fields use `Localized = Record<Lang, string>` validated with `satisfies`. Never hardcode content in components — import from data files.

**Design system**: Material 3 Expressive dark tonal scheme. Design tokens (colors, surfaces, radii, fonts, easings) are declared in `src/styles/global.css` under `@theme` — Tailwind v4 auto-generates utility classes from them (`bg-primary`, `text-on-surface`, `rounded-m3-xl`, `font-display`, etc.). The `state-layer`, `grid-backdrop`, and `shape-cookie` utilities are defined in the same file.

**Motion**: all spring/easing presets are in `src/lib/motion.ts`. Always use `useReducedMotion()` from `motion/react` and skip complex animations when it returns `true`. The `Reveal` component is the standard scroll-reveal wrapper for static Astro content.

**Tailwind via PostCSS** (not the Vite plugin): Astro 6 uses rolldown-vite which is incompatible with `@tailwindcss/vite`. Config is in `postcss.config.mjs`.

**Path aliases**: `@components/*`, `@layouts/*`, `@pages/*`, `@i18n/*`, `@data/*`, `@lib/*` — defined in `tsconfig.json`.

## Adding content

- **New project**: add an entry to `src/data/projects.ts` following the `Project` interface. Both `description` and each `metrics[].label` must be bilingual.
- **New skill**: add to `src/data/skills.ts`; the `icon` field maps to a key in the `ICONS` lookup in `Skills.astro`.
- **New i18n string**: add the key to both `en` and `es` objects in `src/i18n/ui.ts` simultaneously.
- **New icon (Astro)**: create `src/components/icons/YourIcon.astro` with an inline SVG; register it in the `ICONS` map in `Skills.astro`.
- **New icon (React)**: add a named export to `src/components/react/icons.tsx` using the `base(props)` helper.
