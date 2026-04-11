# Automate My Coffee — Coming Soon Website

AI automation agency landing page. Currently a single coming-soon page — no app functionality, no backend, no forms. Launching 2026.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Framer Motion** for all React animations
- **Cloudflare Workers** deployment via OpenNext adapter + Wrangler

## Brand Rules (non-negotiable)

All design decisions follow `brand-readme.md` — read it before making any visual change.

- **Colors:** Terracotta `#BE582A`, Cream `#FAF7F2`, Near-black `#1C1917`, White `#FFFFFF`. No other colors. No gradients. No drop shadows.
- **Fonts:** NationalPark Bold (headlines, display) and Outfit (body, UI). Never add a third font.
- **Tone:** Energetic, playful, direct, human. Never corporate, never buzzword-y. See word swaps table in brand-readme.md.
- **Visuals:** Bold color blocking, grain textures, generous whitespace. No cheap illustrations, no clipart, no stock photos.

## Code Conventions

- CSS custom properties for colors (defined in `app/globals.css`), referenced as `var(--terracotta)` etc.
- Framer Motion for all React animations. CSS keyframes only for `cursor-blink` and marquee tickers.
- Shared easing curve: `[0.25, 0.46, 0.45, 0.94]`
- All interactive components are `"use client"`. Keep the page component (`app/page.tsx`) as a simple server-side compositor.
- Respect `prefers-reduced-motion` — CSS animations have a media query override, Framer Motion handles it natively.

## Deployment

```
npm run build          # Next.js production build
npx opennextjs-cloudflare   # Generate Cloudflare Worker
npx wrangler deploy    # Deploy to Cloudflare Workers
```

Domain: automatemycoffee.com

@AGENTS.md
