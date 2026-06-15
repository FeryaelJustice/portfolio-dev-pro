import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import yaml from "@rollup/plugin-yaml";

// Tailwind v4 is wired through PostCSS (postcss.config.mjs) instead of the
// Vite plugin, because Astro 6 ships rolldown-vite which is currently
// incompatible with @tailwindcss/vite (withastro/astro#16542).
// https://astro.build/config
export default defineConfig({
    site: "https://feryaeljustice.dev",
    integrations: [yaml(), react()],

    i18n: {
        defaultLocale: "en",
        locales: ["es", "en"],
    },
});
