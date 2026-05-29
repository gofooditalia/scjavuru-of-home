# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # start dev server at http://localhost:4321/
bun run build    # production build to dist/
bun run preview  # preview the production build locally
```

No test runner is configured.

## Architecture

This is an **Astro v6 + Tailwind v4** single-page website for a vacation rental (B&B/casa vacanze), with bilingual IT/EN support. The runtime is **Bun**.

### i18n

- `src/i18n/types.ts` — the `Translations` interface is the authoritative contract for all UI strings
- `src/i18n/it.ts` and `src/i18n/en.ts` — concrete translation objects that must satisfy that interface
- `src/i18n/index.ts` — exports `t(lang: Lang): Translations`, the single helper used by every component
- Pages pass `lang` as a prop down through the component tree; no global state or context
- Italian is the default locale (no `/it/` prefix); English lives at `/en/`
- `src/pages/index.astro` hardcodes `lang = 'it'`, `src/pages/en/index.astro` hardcodes `lang = 'en'`

### Layout & styling

- `src/layouts/Layout.astro` owns the `<html>` shell, SEO meta tags, hreflang, GLightbox CDN script, and the floating Formspree Formbutton widget
- Tailwind v4 is integrated via the `@tailwindcss/vite` plugin (not a PostCSS plugin) — configured in `astro.config.mjs`
- Fonts: **Inter** (body, `font-sans`) and **Playfair Display** (headings, `font-display`) loaded from Google Fonts in `src/styles/global.css`
- Dark theme: `body` background is `#0a0a0a`, text `#f5f5f5` — override in `global.css`

### External integrations (require manual configuration)

All `✏️` markers in the code point to values that must be set per deployment:

| What | Where |
|---|---|
| Site domain (canonical URLs, sitemap) | `astro.config.mjs` → `site:` and `src/layouts/Layout.astro` |
| Formspree form endpoint (contact form) | `src/components/ContactForm.astro` |
| Formspree Formbutton endpoint (floating button) | `src/layouts/Layout.astro` |
| Airbnb room links | `src/components/Booking.astro` |
| Map GPS coordinates + Google Maps URL | `src/components/Map.astro` |
| Gallery image filenames | `src/components/Gallery.astro` (images live in `public/images/`) |

### Photo gallery

Images are plain `.jpg` files in `public/images/`. The gallery list in `Gallery.astro` maps filenames to GLightbox anchors; add/remove entries there when changing photos.
