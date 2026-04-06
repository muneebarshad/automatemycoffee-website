# Automate My ☕ — Brand Guidelines

> One rule before anything else: if it sounds like another tech company, rewrite it.

---

## Logo

**Concept:** "AU[☕]MATE" — the coffee cup replaces the letter O in AUTOMATE. "my" sits below in handwritten script.

**Usage:**
- Primary placement: centered in the sticky header
- Always on cream (`#FAF7F2`) or terracotta (`#BE582A`) backgrounds
- Never stretch, rotate, or recolor
- Minimum clear space: equal to the height of the cup icon on all sides
- Header size: 128–180px width (responsive)
- Hero placement: not used (avoid duplicate logos on the same viewport)

---

## Colors

| Name | Hex | Use for |
|---|---|---|
| Terracotta Orange | `#BE582A` | Hero background, buttons, accents, highlights — the hero color |
| Warm Cream | `#FAF7F2` | Body section backgrounds, text on terracotta |
| Near-Black | `#1C1917` | Body text, marquee background, footer background |
| Pure White | `#FFFFFF` | Clean space, text on dark backgrounds |

**Color Pairings:**
- Terracotta background + cream text = hero sections (primary impact)
- Cream background + near-black text = body content
- Near-black background + cream text = footer, marquee ticker
- Terracotta text on cream = accent highlights in manifesto statements
- Never orange text on white (too low contrast)

**CSS Custom Properties:**
```css
--terracotta: #BE582A;
--cream: #FAF7F2;
--near-black: #1C1917;
--white: #FFFFFF;
```

---

## Typography

| Role | Font | Use for |
|---|---|---|
| Display | **NationalPark Bold** | Headlines, hero text, manifesto statements, section titles, marquee ticker |
| Body | **Outfit Regular/Bold** | Paragraphs, UI text, descriptions, buttons, eyebrow labels |

**Size scale:**
- Hero headline: `clamp(2.5rem, 8vw, 5.5rem)` — responsive fluid scaling
- Section heading: 40–48px (desktop), 24–32px (mobile)
- Manifesto statements: 32–48px (desktop), 24px (mobile)
- Body: 16–18px
- Eyebrow/label: 12–14px, uppercase, tracking-wide
- Footer headline: 48–64px (desktop), 30px (mobile)

**Rules:**
- NationalPark for anything bold and impactful
- Outfit for everything else
- Never use more than these 2 fonts on any page
- Load NationalPark locally (variable TTF), Outfit via Google Fonts

---

## Tone of Voice

**We are:** Energetic. Playful. Direct. Human.

**We are not:** Corporate. Technical. Buzzword-y. Boring.

**Write like this:**
- Short sentences. One idea at a time.
- Active voice always.
- Talk to one person, not a crowd.
- Lead with the benefit, not the feature.

**Word swaps:**

| ❌ Never say | ✅ Say instead |
|---|---|
| AI-powered | automation that just works |
| Leverage | use |
| Streamline your workflow | stop doing the same thing twice |
| Cutting-edge | actually smart |
| Seamless integration | it just connects |
| Enterprise-grade | built for real work |
| Innovative solution | a better way |

---

## UI Copy & Microcopy

**Buttons:**
- Get Started → `Let's go →`
- Contact → `Talk to us`
- Learn More → `Show me`
- Submit → `I'm in`
- Book a call → `Let's chat ☕`
- CTA on hero → `Get in touch`

**Section labels:**
- Services → `What we do`
- Portfolio → `Stuff we've built`
- About → `Who's behind this`
- Pricing → `Pick your plan`
- Contact → `Got a boring task?`

**States:**
- Loading → `Brewing…`
- Empty state → `Nothing here yet. Go grab a coffee.`
- Form sent → `Got it. We'll be in touch faster than your morning brew.`
- Error → `Something went sideways. Try again?`

---

## Visual Design System

### Hero Section
- Full-viewport terracotta orange background
- Subtle grain/noise texture overlay (0.03 opacity, animated)
- Decorative cream circle outlines at edges (0.05–0.08 opacity)
- Cream-colored steam wisps rising from bottom (Framer Motion, looping)
- Curved SVG wave transition at bottom (cream, smooth arc)
- "Launching 2026" pill badge (cream border, cream text)
- Typewriter effect on headline second line (near-black text cycles through phrases)

### Typewriter Animation
- Phrases cycle: "you hate doing." → "that wastes your time." → "that bores you to tears." → "so you can do what matters."
- Typing speed: 65ms, deleting speed: 30ms, pause: 2.4s
- Blinking cursor in cream color (0.7s step animation)

### Manifesto Section
- Cream background, generous vertical padding (py-28 to py-52 responsive)
- 3 bold statements + 1 closing paragraph
- Statements alternate alignment: left → right → center
- Third statement highlighted in terracotta color
- Scroll-triggered fade-up animations (once, Framer Motion useInView)
- Decorative terracotta accent bar on left edge (hidden mobile)

### Marquee Ticker
- Near-black background strip
- Row 1: "AUTOMATE MY COFFEE" + "KILL THE BORING STUFF" + "JUST WORKS" — scrolling left, full opacity
- Row 2: "LAUNCHING 2026" + "AI AUTOMATION" + "ACTUALLY SMART" — scrolling right, 25% opacity
- Terracotta dot separators between phrases
- CSS translateX animation (20s/25s linear infinite)
- Slows on hover (animation-duration doubles)

### Footer
- Near-black background, cream text
- "Good things take time." headline with animated wavy SVG underline (terracotta, draws on scroll)
- Agency description paragraph (40% opacity)
- Thin divider line (8% opacity)
- Copyright + "Made with too much coffee"

### Animations & Motion
- **Framework:** Framer Motion for React
- **Page load:** Staggered entrance — header (0.1s) → eyebrow (0.3s) → headline (0.5s) → subline (0.9s) → CTA (1.2s)
- **Scroll reveals:** `useInView` with `once: true`, fade-up with cubic bezier `[0.25, 0.46, 0.45, 0.94]`
- **Header:** Transparent → cream/blur background on scroll (60px threshold)
- **Continuous:** Steam wisps (5s loops), grain texture (8s steps), marquee tickers
- **Interactive:** Button scale on hover (1.04) and tap (0.97)

---

## Do's & Don'ts

**Always:**
- Lead with the benefit, not the feature
- Use short, punchy sentences — fragments are fine
- Let the terracotta do the heavy lifting visually
- Keep generous breathing room in body sections
- Use bold color blocking (terracotta hero, cream body, dark footer)
- Add texture and depth (grain overlays, decorative circles)

**Never:**
- Use gradients or drop shadows (except subtle filter drop-shadows on logo)
- Add more than one accent color
- Write sentences longer than 20 words in UI copy
- Use more than 2 fonts on any page
- Sound like an AI company
- Place the logo twice in the same viewport
- Use cheap/literal illustrations (coffee mugs, robots, clipart)

---

## Coming Soon Page Structure

```
[Header — Logo centered, sticky, transparent → cream on scroll]

[Hero — Full viewport, terracotta background]
  [Grain texture overlay]
  [Decorative circle outlines]
  [Steam wisp animations]
  [Pill: "Launching 2026"]
  [Headline: "We automate the stuff"]
  [Typewriter: cycling phrases in near-black]
  [Subline: "Something's brewing..."]
  [CTA: "Get in touch"]
  [Curved SVG wave → cream]

[Manifesto — Cream background]
  "We believe boring tasks should be illegal."
  "Your time is worth more than copy-pasting data."
  "AI should feel like magic, not homework." (terracotta)
  "We're building the automation agency for people
   who'd rather be doing literally anything else."

[Marquee — Near-black strip, dual ticker rows]

[Footer — Near-black background]
  "Good things take time." [wavy underline]
  Agency description
  © 2026 · Made with too much coffee
```

---

*Automate My ☕ — Brand v2.0*
