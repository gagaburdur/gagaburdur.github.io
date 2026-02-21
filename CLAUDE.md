# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Restaurant menu website for "GAGA" (Burdur). A single-page React app displaying categorized food items with allergen icons. Deployed to GitHub Pages from `main` branch via GitHub Actions. Currently developing on the `react-migration` branch.

## Commands

- **Dev server**: `npm run dev` (Vite on port 5173)
- **Dev with ngrok**: `npm run dev:serve` (Vite + ngrok tunnel for mobile testing)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview prod build**: `npm run preview`

No test framework is configured.

## Tech Stack

- Vite 7, React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- ESM (`"type": "module"` in package.json)
- Tailwind v4 uses `@import "tailwindcss"` in CSS and `@theme` directive for customization (no `tailwind.config` file)
- `vite-plugin-svgr` configured for `*.svg?react` imports

## Architecture

The app is a static menu renderer with no backend or routing:

- `src/menu.ts` — All menu data as a typed constant (`MenuCategory[]`). Each item has name, description, price, allergen flags, and optional `disabled` field. Categories can have optional `extras` and `icon`. The `a()` helper creates allergen objects from partial overrides against `noAllergens`.
- `src/App.tsx` — Root component. Renders menu categories, an allergen legend section, and footer. Imports `DecorativeIcon` for the footer dinosaur.
- `src/components/MenuCategory.tsx` — Renders a category heading and its items.
- `src/components/MenuItem.tsx` — Renders item details. Skips rendering if `disabled` is true. Uses `AllergenIcon` for inline SVG allergen icons (hidden in print).
- `src/components/AllergenIcon.tsx` — Maps allergen keys (Turkish) to inline SVG React components. All 10 unique icons defined in this file, with `iconMap` mapping 12 Turkish keys to components (some share icons, e.g. `kuruyemis`/`yerfistigi`/`yemis` all use `Nuts`).
- `src/components/DecorativeIcon.tsx` — Decorative SVG icons (e.g. dinosaur) used in non-menu UI.

## Conventions

- All menu text is Turkish. Allergen keys: `gluten`, `susam` (sesame), `yumurta` (egg), `hardal` (mustard), `sut` (milk), `soya` (soy), `kuruyemis`/`yerfistigi`/`yemis` (nuts), `kabuklu` (shellfish), `balik` (fish), `kereviz` (celery).
- Menu item names displayed uppercase via CSS (`uppercase` class).
- Font: Montserrat variable (self-hosted woff2 in `src/assets/fonts/`), split into latin and latin-ext subsets with `unicode-range` for Turkish character support (ş, ğ, ı, İ).
- Background: cream `#fffdf1` with repeating pattern (`src/assets/pattern.webp`).
- Text color: `#575756`.
- Print styles in `src/index.css` use multi-column layout; allergen icons and footer are hidden in print via `print:hidden`.
- Vite config allows ngrok hosts (`*.ngrok-free.app`).

## Git

- Never add `Co-Authored-By` lines to commit messages.
