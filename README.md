# HelpHub Nigeria

A directory platform connecting people to verified therapists, coaches, and
support organisations across Nigeria — for abuse, depression, addiction,
relationships, workplace stress, and more.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — colors resolve to CSS variables, so themes swap with zero
  per-component logic
- **Framer Motion** — scroll reveals, hero text animation, hover states
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first run so Next.js
can fetch the Google Fonts (Sora, Inter, IBM Plex Mono).

## Switching design schemes

There's a theme switcher in the top nav (the palette icon) with three schemes
live at once:

- **Morning light** — warm off-white, coral accent, deep pine anchor
- **Clear water** — cool near-white, teal accent, coral pop for CTAs
- **Golden hour** — cream, amber accent, deep plum anchor

Pick changes are instant, persist to `localStorage`, and apply with no flash
on reload. Under the hood, `app/globals.css` defines three `[data-theme="…"]`
blocks of CSS variables (`--bg`, `--surface`, `--accent`, etc.), and
`tailwind.config.ts` maps Tailwind color utilities (`bg-accent`, `text-ink`,
`border-line`...) straight to those variables. **Every component is written
once** against the semantic tokens — nothing branches on which theme is
active, so tweaking a palette is a one-file edit in `globals.css`.

To change what "Morning light" (or any scheme) looks like, edit its block in
`app/globals.css`. To remove a scheme or add a fourth, also update
`lib/themes.ts` (id, label, blurb, switcher swatch color).

## Structure

```
app/
  page.tsx                  Landing page (hero, story, categories, CTA)
  directory/page.tsx         Directory listing (search + filters)
  directory/[slug]/page.tsx  Individual provider/org profile
  layout.tsx                  Fonts, ThemeProvider, nav, footer shell
  globals.css                 The 3 theme variable sets live here
components/
  ThemeProvider.tsx            React context + localStorage persistence
  ThemeSwitcher.tsx             The palette-icon dropdown in the nav
  FloatingCards.tsx             Hero visual — photo + layered "proof" cards
  HeroHeadline.tsx              Word-by-word animated hero text
  Reveal.tsx                    Scroll-triggered fade/rise wrapper
  ProviderCard.tsx               Directory grid card
  ContactActions.tsx             Call / WhatsApp / Book buttons
  FilterBar.tsx                   Search + specialty + verified/free toggles
data/providers.ts               Mock listings — replace with real data or a CMS/API
lib/types.ts                     Provider, Specialty, Contact types
lib/themes.ts                    Theme metadata (id, label, swatch color)
```

## Design direction

Modeled on the clean, light, photography-forward pattern shared by the
reference sites you liked (Passpoint, Paybuddy, Migraine Outreach,
Telesoftas): near-white canvas, one confident accent, real photography with
layered "proof" UI floating on top instead of a moody hero illustration, and
plain declarative headlines over cleverness. Display type is Sora (confident
geometric sans), body is Inter, and data (prices, locations) uses IBM Plex
Mono.

## Wiring in real data

Everything lives in `data/providers.ts` as a typed array. To go live, swap
that file for a fetch from your backend/CMS inside `app/directory/page.tsx`
and `app/directory/[slug]/page.tsx`. `lib/types.ts` models licensed/certified
status independently, free-first-session, pricing, and all three contact
types (call, WhatsApp, booking link).

## Crisis content note

The footer includes a fixed "if you're in immediate danger" note. Please
review and localise the emergency numbers/crisis lines before launch — this
demo doesn't hardcode any specific hotline number.
