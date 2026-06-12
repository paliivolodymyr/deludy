# DeLudy — coffee shop website

Single-page landing for **ДеЛюди**, a third-wave coffee shop in Ternopil, Ukraine. Next.js + Tailwind + GSAP, Leaflet map (no API keys, no billing).

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel (free)

**Option 1 — via GitHub (recommended):**

1. Push the code:
   ```bash
   git push -u origin main
   ```
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repository.
3. No configuration needed — Vercel auto-detects Next.js. **Deploy**.
4. The site goes live at `https://deludy.vercel.app` (or similar). Every later `git push` redeploys automatically.

**Option 2 — without GitHub:**

```bash
npx vercel
```

and accept the defaults.

## Where to edit shop data

Everything lives in one file: [`src/config/site.ts`](src/config/site.ts)

- phone number
- address and map coordinates
- opening hours
- Instagram
- menu with prices

The map and Schema.org markup update automatically after editing.

## Still pending (checklist)

- [x] Phone number
- [x] Address + coordinates
- [x] Opening hours
- [x] Instagram handle
- [x] Menu with prices
- [ ] Interior photos (5–8, at least 1600px wide) — replace files in `public/brand/gallery/`
- [ ] Drink photos (5–8)
- [ ] (optional) Hero video: 10–20 s, horizontal, no sound
- [ ] (optional) Custom domain

## Structure

- `src/config/site.ts` — all shop data
- `src/components/` — sections: Hero, About, Menu, Gallery, Socials, MapSection, Footer
- `public/brand/` — optimized brand assets (woff2 fonts, SVG, PNG)
- `ДеЛюди/` — original design sources (excluded from git/deploy)
