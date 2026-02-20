# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Restaurant menu website for "GAGA" (Burdur). A single-page React app displaying categorized food items with allergen icons. Currently on the `react-migration` branch using Vite + React.

## Commands

- **Dev server**: `npm run dev` (Vite on port 5173)
- **Dev with ngrok**: `npm run dev:serve` (Vite + ngrok tunnel, useful for mobile testing)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview prod build**: `npm run preview`

No test framework is configured.

## Tech Stack

- Vite 7, React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- ESM (`"type": "module"` in package.json)
- Tailwind v4 uses `@import "tailwindcss"` in CSS and `@theme` directive for customization (no `tailwind.config` file)

## Architecture

The app is a static menu renderer with no backend or routing:

- `src/menu.ts` — All menu data as a typed constant (`MenuCategory[]`). Each item has a name, description, price (TL), and allergen flags. The `a()` helper creates allergen objects from partial overrides.
- `src/App.tsx` — Root component, iterates over categories from `menu.ts`
- `src/components/MenuCategory.tsx` — Renders a category heading and its items
- `src/components/MenuItem.tsx` — Renders item details and an `AllergenRenderer` that shows active allergen icons
- `src/components/AllergenIcon.tsx` — Maps allergen keys (Turkish names like `gluten`, `susam`, `sut`) to inline SVG icon components. All 12 allergen icons are defined as React components in this single file.

## Conventions

- All menu text uses Turkish. Allergen keys are Turkish (`susam`=sesame, `yumurta`=egg, `hardal`=mustard, `sut`=milk, `soya`=soy, `kuruyemis`/`yerfistigi`/`yemis`=nuts, `kabuklu`=shellfish, `balik`=fish, `kereviz`=celery).
- Menu item text is displayed in uppercase via CSS (`text-transform` or Tailwind).
- Font: Montserrat variable (self-hosted woff2 in `src/assets/fonts/`).
- Background: cream `#fffdf1` with a repeating pattern image (`src/assets/pattern.webp`).
- Text color: `#575756`.
- Vite config allows ngrok hosts (`*.ngrok-free.app`).

## Git

- Never add `Co-Authored-By` lines to commit messages.
