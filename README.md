# CLAREx Tech & Trade Limited — Next.js Website

Modern **Next.js 16 + TypeScript (App Router)** rebuild of the CLAREx Tech & Trade corporate marketing site. Visual design, copy, assets, and animation behavior match the original static HTML theme; the source is now React/TSX with a shared layout.

Original static files are preserved under [`legacy/`](./legacy/) for reference.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript / TSX |
| UI markup | React components (converted from HTML) |
| Styling | Original theme CSS (`public/assets/css/style2.css` + Bootstrap / icons) |
| Animations | Same vendor libs as before (jQuery plugins, Swiper, GSAP, WOW, Marquee) loaded client-side |
| Contact API | `POST /api/contact` (placeholder handler) |

---

## Project structure

```
clarex-techntrade/
├── src/
│   ├── app/                      # App Router pages & API
│   │   ├── layout.tsx            # Root layout, CSS links, metadata
│   │   ├── page.tsx              # Home /
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── noc|csec|odoo/...
│   │   ├── service-details/
│   │   ├── service2 … service8/
│   │   └── api/contact/route.ts
│   └── components/
│       ├── Header.tsx            # Sidebar + main nav (shared)
│       ├── Footer.tsx            # Shared footer
│       ├── SiteShell.tsx         # Magic cursor + chrome wrapper
│       ├── SiteScripts.tsx       # Loads theme JS on each route
│       └── pages/*Content.tsx    # Page body content (TSX)
├── public/assets/                # Images, CSS, JS, fonts (static)
├── legacy/                       # Original HTML site (archived)
├── scripts/                      # html-to-jsx conversion helpers
├── package.json
└── README.md
```

---

## Routes

| URL | Content |
|-----|---------|
| `/` | Home |
| `/about` | About Us |
| `/contact` | Contact + map |
| `/noc` | NOC Service |
| `/service2` … `/service8` | Infrastructure → ERP |
| `/service-details` | Services hub |
| `/csec` | Cybersecurity Excellence Center |
| `/odoo` | Odoo Solutions |
| `/api/contact` | Contact form endpoint |

---

## How animations still work

`SiteScripts` (client component) loads the original libraries from `/public/assets/js` in order on each pathname:

1. jQuery → Bootstrap → Swiper → Waypoints/CounterUp → Isotope → Fancybox  
2. GSAP / TweenMax / simpleParallax  
3. Marquee → WOW → preloader (Particleground, null-safe)  
4. `custom.js` (sliders, sticky header, magnetic cursor, WOW, menus)  
5. Inline marquee init for `.marquee_text` / `.marquee_text2`

Layout body keeps `home-dark2 tt-magic-cursor` and includes `#magic-cursor` / `#ball` for the GSAP cursor.

Theme CSS is linked in `src/app/layout.tsx` (not rewritten in Tailwind) so the look stays identical.

---

## Company

- **CLAREx Tech & Trade Limited** — Dhaka (Baridhara DOHS)  
- Phone: +880-1922-599444  
- Email: info@clarex.co  

---

## Contact form

Form posts to `/api/contact`. The route currently logs the payload and returns JSON success — wire SMTP or a provider when ready.

---

## Regenerating page TSX from legacy HTML

If you edit HTML in `legacy/` and want to refresh React content:

```bash
node scripts/html-to-jsx.mjs
node scripts/fix-alt.mjs
```

Then copy `_generatedHeader.tsx` → `Header.tsx` (rename export to `Header`) if the chrome changed.

---

## Notes

- Shared header/footer are no longer duplicated in every page file.  
- Asset paths use `/assets/...` (Next `public/`).  
- `legacy/` is not served; use it only as the historical source.  
- Production build verified: `npm run build` succeeds for all listed routes.
