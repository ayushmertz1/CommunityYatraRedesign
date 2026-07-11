# Community Yatra — Website

Community-rooted travel across Nepal. Homestays, farming, craft and culture — journeys where every
rupee stays in the village that welcomes you.

This is the redesigned Community Yatra website: a fast, accessible, editorial single-page
application built for static hosting (cPanel/Apache).

## Design language

**"Warm Editorial"** — print-inspired layouts with Nepali earth tones.

| Token | Value | Use |
| --- | --- | --- |
| Paper `#FAF6EE` | warm cream | page background |
| Ink `#221D15` | warm near-black | text |
| Clay `#B04A24` | sindoor terracotta | primary actions, accents |
| Marigold `#E2A13C` | garland gold | highlights, underlines |
| Pine `#16302A` | Himalayan forest | dark sections, footer |

- **Type**: Fraunces (variable, display) · Inter (body) · Noto Serif Devanagari (यात्रा brand accent)
- **Motion**: GSAP + ScrollTrigger reveals, Lenis smooth scroll, page-transition veil.
  All motion respects `prefers-reduced-motion`.
- **Texture**: SVG grain overlay, hand-drawn marigold underlines, polaroid figures.

## Stack

- [Vite](https://vitejs.dev) + [React 19](https://react.dev) + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens in `src/styles/global.css`
- [GSAP](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering) for motion
- React Router 7 (SPA routing)
- Self-hosted fonts via Fontsource (no external requests)

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
```

## Deploy (cPanel)

1. `npm run build`
2. Upload the **contents** of `dist/` to `public_html/` (or the domain's document root).
3. The included `.htaccess` handles SPA routing (all paths fall through to `index.html`),
   long-lived caching for hashed assets, and gzip.

## Structure

```
src/
  components/   Navbar, Footer, Icons (hand-set SVG), Marquee, Seo
  data/         journeys, homestays, team, testimonials, site info
  lib/          motion primitives (GSAP/Lenis), page-transition veil
  pages/        Home, Journeys, JourneyDetail, Homestays, About, Team, Contact, NotFound
  styles/       global.css — design tokens + component classes
public/
  images/       curated WebP photography from the Community Yatra archive
  .htaccess     Apache SPA routing + caching
  sitemap.xml, robots.txt, favicon.svg
```

## Accessibility

Skip link, semantic landmarks, visible focus rings, `lang="ne"` on Devanagari text, alt text on
meaningful imagery, keyboard-reachable interactions, WCAG AA contrast on both light and dark
sections, and full `prefers-reduced-motion` support.
