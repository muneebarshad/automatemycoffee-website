# Coming Soon Page — Design Spec

## Context

Automate My Coffee is an AI automation agency that hasn't launched yet. We need a single-page "coming soon" website that establishes brand presence with a polished, minimal feel. No functionality beyond displaying the brand message — just logo, headline, subline, and footer with smooth entrance animations.

## Tech Stack

- **Next.js 14+** (App Router)
- **Framer Motion** for animations
- **Google Fonts** for Outfit; NationalPark Bold loaded locally or via web alternative
- **TypeScript**

## Brand Reference

Full brand guidelines: `brand-readme.md`

### Colors
| Name | Hex | Role |
|---|---|---|
| Terracotta Orange | `#BE582A` | Accent glow on logo |
| Warm Cream | `#FAF7F2` | Full page background |
| Near-Black | `#1C1917` | All text |
| White | `#FFFFFF` | (unused on this page) |

### Typography
| Role | Font | Size | Opacity |
|---|---|---|---|
| Headline | NationalPark Bold | 48-64px (responsive) | 100% |
| Subline | Outfit Regular | 18px | 80% |
| Footer | Outfit Regular | 14px | 50% |

### Logo
- Use: `logos/automatemycoffeelogo_transparent.svg` (transparent background)
- Display width: ~200px, centered
- Fallback: `logos/automatemycoffeelogo_transparent_hires.png`

## Layout

Single viewport, vertically and horizontally centered using flexbox. Content stacked vertically:

```
[Logo — ~200px wide]
          ↕ 32px gap
[Headline — "Something's brewing." + coffee emoji]
          ↕ 16px gap
[Subline — two lines of text, centered]
          ↕ auto (pushes footer to bottom)
[Footer — copyright, bottom of viewport]
```

- Max content width: ~600px
- Page fills full viewport height (`min-h-screen`)
- Responsive: content scales down on mobile (logo shrinks, headline goes to 32-40px)

## Content

**Headline:** `Something's brewing. ☕`

**Subline:**
```
We're killing your boring tasks, one automation at a time.
Back very soon.
```

**Footer:** `© 2026 Automate My Coffee`

## Animation Sequence (Framer Motion)

All animations use spring physics for organic, non-mechanical feel.

| Delay | Element | Effect | Duration |
|---|---|---|---|
| 0.3s | Logo | Fade in + scale 0.95 → 1.0 | 0.6s (spring) |
| 0.8s | Headline | Fade in + translateY 20px → 0 | 0.6s (spring) |
| 1.3s | Subline | Fade in + translateY 15px → 0 | 0.6s (spring, softer) |
| 1.8s | Footer | Fade in (opacity only) | 0.5s (ease) |

### Subtle Looping Animations

- **Logo glow:** Soft box-shadow pulse using Terracotta Orange at 15% opacity. Breathes in/out over 3s, infinite loop. Subtle — should not distract.
- **Coffee emoji float:** The ☕ in the headline floats up/down ~2px on a 3s loop. Draws the eye gently.

## File Structure

```
automatemycoffee-website/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx           # Coming soon page (single component)
│   └── globals.css        # Minimal global styles (bg color, reset)
├── public/
│   └── logos/             # Copy logo files here
├── package.json
├── next.config.js
├── tsconfig.json
├── brand-readme.md        # (existing)
├── logos/                  # (existing source logos)
└── docs/                  # (this spec)
```

## Fonts Strategy

- **Outfit**: Load via `next/font/google`
- **NationalPark Bold**: This is a free font (National Park typeface). Check if available on Google Fonts — if not, download the .woff2 and load via `next/font/local`
- **NothingYouCouldDo**: Not used on this page (only for "my" in logo, which is baked into the SVG)

## Responsive Behavior

| Breakpoint | Headline size | Logo width | Subline size |
|---|---|---|---|
| Desktop (>768px) | 48-64px | 200px | 18px |
| Mobile (<768px) | 32-40px | 150px | 16px |

## Verification

1. Run `npm run dev` and open localhost
2. Confirm cream background fills viewport
3. Confirm animation sequence plays on page load (logo → headline → subline → footer)
4. Confirm logo glow pulses subtly
5. Confirm coffee emoji floats gently
6. Confirm responsive behavior on mobile viewport
7. Run `npm run build` — should build with zero errors
