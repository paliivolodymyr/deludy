<claude-mem-context>

</claude-mem-context>

# DeLudy

Single-page landing for ДеЛюди — third-wave coffee shop, Тернопіль. Next 16 App Router, React 19, Tailwind 4, GSAP, Lenis, Leaflet. Live: deludy.com.

## Map

- `src/config/site.ts` — single source of truth: name, phone, address, coords, hours, menu, socials, url.
- `src/app/layout.tsx` — metadata, SEO, JSON-LD (CafeOrCoffeeShop), viewport.
- `src/app/page.tsx` — composes sections.
- `src/app/{robots,sitemap,manifest}.ts` — SEO routes.
- `src/app/globals.css` — `@theme` brand tokens (dark #20080c, cream, orange, green).

## Sections (`src/components/`)

Hero · About · Menu · Gallery · Socials · MapSection (Leaflet) · CallCta / StickyCallButton (tel:) · Footer · SmoothScroll (Lenis).

## Assets

`public/brand/img` brand illustrations + cursors · `public/brand/gallery` photos · `public/og.png`.
