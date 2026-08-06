# CLAREx Tech Limited — Website Documentation

Corporate marketing website for **CLAREx Tech Limited** (also styled as CLARExTech / Clarex Tech): an IT services and process-automation company based in Dhaka, Bangladesh.

This repository is a **static multi-page HTML website** built from a commercial dark-theme template (Egens Lab lineage; footer credits “egenslab.com”), customized with CLAREx branding, service content, and contact details. There is **no Node/React/build pipeline** — pages are plain HTML/CSS/JavaScript that can be opened locally or hosted on any static web server (Apache, Nginx, Netlify, Cloudflare Pages, etc.).

---

## Table of contents

1. [Company & contact](#1-company--contact)
2. [Project overview](#2-project-overview)
3. [Tech stack](#3-tech-stack)
4. [Repository structure](#4-repository-structure)
5. [Page inventory](#5-page-inventory)
6. [Homepage architecture](#6-homepage-architecture)
7. [Navigation & shared chrome](#7-navigation--shared-chrome)
8. [Services catalog](#8-services-catalog)
9. [Animations & interactions (full reference)](#9-animations--interactions-full-reference)
10. [JavaScript modules](#10-javascript-modules)
11. [CSS & styling](#11-css--styling)
12. [Forms & PHP backend](#12-forms--php-backend)
13. [Assets](#13-assets)
14. [How to run / deploy](#14-how-to-run--deploy)
15. [Known issues & template leftovers](#15-known-issues--template-leftovers)
16. [Maintenance notes](#16-maintenance-notes)

---

## 1. Company & contact

| Field | Value |
|--------|--------|
| **Brand** | CLAREx Tech Limited |
| **Positioning** | Business transformation, cost reduction, profit maximization, automation, IT-enabled services |
| **Tagline (hero)** | “EXCEL THROUGH AUTOMATION WITH INNOVATION” |
| **Address** | House: 336, Lane: 05, DOHs Baridhara, Dhaka, Bangladesh |
| **Phone** | +880-1922-599444 |
| **Email** | info@clarex.co |
| **CEO (About)** | M. Jahangir Alam, FCMA |
| **Map** | Google Maps embed on `contact.html` searching “Clarex Limited” |

Focus themes from About: process automation, 24/7 onshore/offshore delivery, Triple Bottom Line (People, Profit, Planet), cybersecurity excellence, Odoo/ERP, and sustainable IT careers.

---

## 2. Project overview

| Aspect | Detail |
|--------|--------|
| **Type** | Static brochure / marketing site |
| **Pages** | 14 HTML files |
| **Approx. size** | ~300+ tracked asset files (images, fonts, vendor JS/CSS) |
| **Theming** | Dark UI (`home-dark2`), accent-driven buttons (`primary-btn3`, `primary-btn4`) |
| **Templating** | None — header/footer/nav are **copied into every HTML file** |
| **Backend** | Minimal — `assets/php/mail.php` exists but is empty |
| **Package manager** | None (`package.json` / `composer.json` not present) |
| **README (this file)** | Project report + developer documentation |

**Architecture pattern:** each page is a self-contained HTML document that loads the same CSS/JS stack from `assets/`. Content differs per page; chrome (sidebar, header, footer) is duplicated.

```
Browser → index.html / about.html / …
              ↓
         assets/css/* (Bootstrap + style2.css + icons)
              ↓
         assets/js/* (jQuery + Swiper + GSAP + WOW + custom.js …)
              ↓
         assets/img/* (brand, home, inner-page imagery)
```

---

## 3. Tech stack

### Markup & layout

- HTML5 (`lang="en"`)
- Bootstrap grid / utilities (`bootstrap.min.css`, `bootstrap.min.js`, Popper)
- Responsive viewport meta on all pages

### Stylesheets (`assets/css/`)

| File | Role |
|------|------|
| `bootstrap.min.css` | Layout grid, helpers |
| `style2.css` | **Main theme** — layout, dark skin, components, keyframes |
| `animate.min.css` | Animate.css classes used by WOW.js (`fadeInUp`, `fadeInLeft`, …) |
| `swiper-bundle.min.css` | Slider UI |
| `jquery.fancybox.min.css` | Lightbox (video/gallery) |
| `all.min.css` / `fontawesome.min.css` | Font Awesome icons |
| `bootstrap-icons.css` (+ CDN Bootstrap Icons 1.5.0 on some pages) | Menu / UI icons |
| `boxicons.min.css` | Social icons (`bx bxl-*`) |

### JavaScript libraries (`assets/js/`)

| Library | Version / note | Purpose |
|---------|----------------|---------|
| jQuery | 3.6.0 | DOM, plugins host |
| Bootstrap + Popper | Minified vendor | Collapse/components support |
| Swiper | Bundle | Hero & section carousels |
| Waypoints + CounterUp | Minified | Number count-up on scroll |
| Isotope + imagesLoaded | Minified | Portfolio/project filtering (template) |
| Fancybox | jQuery plugin | Video/lightbox popups |
| GSAP | Minified | Magic cursor, magnetic hover |
| TweenMax | Legacy GSAP sibling | Loaded for template compatibility |
| simpleParallax | Minified | Image parallax (available) |
| jQuery Marquee | Minified | Partner logos & CTA text scroll |
| WOW.js | Minified | Scroll-triggered entrance animations |
| `preloader.js` | Particleground | Canvas particle backgrounds (when DOM IDs exist) |
| `custom.js` | Project script | **Central behavior wiring** |
| `app.js` | particles.js config | ParticlesJS demo config (broken path on home) |
| `sidebar.js` | Alternate nav | Mobile nav fade for a different header variant (not wired on current pages) |

### Backend

- PHP: `assets/php/mail.php` (empty placeholder for contact mailer)

---

## 4. Repository structure

```
clarex-techntrade/
├── README.md                 ← This documentation
├── index.html                ← Homepage
├── about.html
├── contact.html
├── csec.html                 ← Cybersecurity Excellence Center
├── odoo.html                 ← Odoo Solutions
├── noc.html                  ← NOC Service
├── service-details.html      ← Services overview / details hub
├── service2.html … service8.html
├── info@clarex.co.url        ← Windows Internet shortcut
└── assets/
    ├── css/                  ← Theme + vendor CSS
    ├── fonts/                ← Icon / webfont files
    ├── webfonts/             ← Font Awesome SVG webfonts
    ├── img/
    │   ├── clarextechwhite.png, logo assets
    │   ├── home-3/           ← Primary homepage imagery
    │   ├── home-5/, home-6/  ← Extra theme assets
    │   ├── inner-pages/      ← Icons for process / quotes
    │   ├── logos/            ← Partner / brand SVGs
    │   └── footer/
    ├── js/
    │   ├── custom.js         ← App logic
    │   ├── preloader.js      ← Particleground
    │   ├── app.js, sidebar.js
    │   ├── lib/stats.js      ← FPS stats (demo leftover)
    │   └── *.min.js          ← Vendor libraries
    └── php/
        └── mail.php          ← Empty mail handler
```

---

## 5. Page inventory

All pages currently share the same browser title: **“CLAREx Tech Limited”**.

| File | Purpose |
|------|---------|
| `index.html` | Main landing — hero slider, partners marquee, services slider, approach, success stories, contact band, blog cards, footer |
| `about.html` | Company story, CEO quote, TBL / sustainability narrative |
| `contact.html` | Consulting form + Google Map + contact widgets |
| `service-details.html` | Services hub / detailed services presentation |
| `noc.html` | Network Operations Center (NOC) service |
| `service2.html` | Infrastructure and Network Services |
| `service3.html` | Quality Assurance |
| `service4.html` | Managed IT Services |
| `service5.html` | Software Development |
| `service6.html` | Security and Surveillance |
| `service7.html` | SOC (Security Operations Center) Services |
| `service8.html` | ERP Solutions |
| `csec.html` | Cybersecurity Excellence Center (longer specialty page) |
| `odoo.html` | Odoo Solutions |

---

## 6. Homepage architecture

`index.html` is the largest page (~188 KB of markup). Major sections (top → bottom):

1. **Off-canvas header sidebar** (`.header-sidebar`) — welcome blurb, address, phone, email, social links  
2. **Sticky header** (`.header-area2`) — logo, menu, mobile menu, sidebar toggle  
3. **Hero banner** (`.banner-area3` + `.banner3-slider`) — 3 Swiper slides with headlines, CTAs (“Free Consultancy”, “Explore More”), magnetic images  
4. **Partner logos** (`.home3-partner-area` / `#home3-partner-area`) — horizontal marquee of partner images  
5. **Solutions / services carousel** (`.home3-solution-slider`) — NOC, Infrastructure, QA, Managed IT, Software Dev, Security, SOC cards with prev/next buttons  
6. **About / approach** — dual image + content blocks with WOW fades  
7. **Success stories** (`.home3-success-stories-slider`) — project cards with pagination  
8. **Contact CTA band** (`.home3-contact-area`) — scrolling marquee headline + “Contact With Us” magnetic button  
9. **Blog / news cards** (`.home3-blog-area`) — three posts with WOW left/up/right entrance  
10. **Footer** — logo, links, newsletter-style form shell, social, copyright  

Primary CTAs route to `contact.html` or `about.html`. Many service card titles still link to `service-details.html` rather than the dedicated service pages.

---

## 7. Navigation & shared chrome

### Desktop / mobile menu

- Home → `index.html`  
- About Us → `about.html`  
- Service (dropdown) → NOC, Infrastructure, QA, Managed IT, Software Development, Security & Surveillance, SOC, ERP  
- Cybersecurity Excellence Center → `csec.html`  
- Odoo Solutions → `odoo.html`  
- Contact us → `contact.html`  
- Header CTA → **Get A Quote** → `contact.html`

### Interaction chrome (all pages)

| UI | Trigger | Behavior |
|----|---------|----------|
| Mobile hamburger (`.sidebar-button`) | Click | Toggles `.main-menu.show-menu` |
| Dropdown icon (`.dropdown-icon`) | Click | `slideToggle` submenu; closes siblings |
| Sidebar button (`.sidebar-btn2`) | Click | Adds `.slide` to `.header-sidebar` |
| Sidebar close (`.close-btn`) | Click | Removes `.slide` |
| Header | Scroll (`scrollY > 0`) | Adds `.sticky` class |

---

## 8. Services catalog

| Nav label | Page | Focus (content theme) |
|-----------|------|------------------------|
| NOC Service | `noc.html` | Network monitoring / operations center |
| Infrastructure | `service2.html` | Infrastructure & network |
| Quality Assurance | `service3.html` | QA / testing |
| Managed IT | `service4.html` | Managed IT operations |
| Software Development | `service5.html` | Custom software |
| Security and Surveillance | `service6.html` | Physical/digital security & surveillance |
| SOC Services | `service7.html` | Security operations |
| ERP Solutions | `service8.html` | Enterprise resource planning |
| Cybersecurity Excellence Center | `csec.html` | Dedicated cybersecurity program/center |
| Odoo Solutions | `odoo.html` | Odoo ERP implementation / solutions |

Inner service pages typically share: breadcrumb-style intro, long-form service copy, quote CTA, and the common footer.

---

## 9. Animations & interactions (full reference)

This site is animation-heavy. Behaviors come from **CSS keyframes**, **Animate.css + WOW**, **Swiper**, **GSAP**, **jQuery Marquee**, **CounterUp**, and **Particleground**.

### 9.1 Page load

| Effect | Source | What happens |
|--------|--------|--------------|
| Preloader fade | `custom.js` | On `window` load, `.preloader` fades out after **1600 ms** (`fadeOut("slow")`) |
| WOW init | `custom.js` | After load, `new WOW().init()` with `offset: 100`, mobile enabled |
| Particleground | `preloader.js` | If `#particles-foreground` / `#particles-background` exist, draws green particle networks with mouse parallax |

> Note: `preloader.js` is loaded on every page. It immediately calls `particleground(...)` on those element IDs. If the elements are missing, this can throw console errors. The homepage also references broken particles paths (`../particles.js`, `js/app.js`).

### 9.2 Scroll-triggered entrance (WOW.js + Animate.css)

Elements use classes like:

```html
class="wow animate fadeInUp"
data-wow-delay="200ms"
data-wow-duration="1500ms"
```

| Class pattern | Typical use on home |
|---------------|---------------------|
| `fadeInUp` | Section titles, about blocks, blog center card, contact CTA |
| `fadeInLeft` | Left blog card |
| `fadeInRight` | Right blog card |

**Timing pattern used:** delay often `200–400ms`, duration often `1500ms`. Animations fire once when the element enters the viewport (WOW default).

### 9.3 Swiper carousels (`custom.js`)

All configured in `assets/js/custom.js`. Relevant instances for this site’s home layout:

| Selector | Effect | Key options |
|----------|--------|-------------|
| `.banner3-slider` | **Hero** fade slideshow | `loop`, `effect: 'fade'`, `speed: 1500`, `autoplay.delay: 4000`, pagination `.swiper-pagination1` |
| `.home3-solution-slider` | Services cards | 1→3 slides by breakpoint, `autoplay 5000`, nav `.prevbtn1` / `.nextbtn1` |
| `.home3-success-stories-slider` | Case studies | 1→3 slides, pagination `.swiper-pagination11`, `autoplay 5000` |
| `.home3-testimonial-slider` | Testimonials (template) | Centered, nav `.nextbtn2` / `.prevbtn2` |
| `.home3-team-slider` | Team (template) | Pagination `.swiper-pagination22` |

Also defined (for other home variants in the same theme CSS/JS, may not appear on current CLAREx home markup):

- `.banner5-slider`, `.home4-trusted-client`, `.home4-insight-slider`
- `.home5-testimonial-slider`, `.home5-blog-slider`
- `.home6-solution-slider`, `.home6-testimonial-slider`, `.home6-partner-slider`

**Crossfade:** hero uses Swiper `fadeEffect.crossFade: true` for soft slide transitions.

### 9.4 Marquee (jQuery Marquee)

Initialized inline at the bottom of `index.html`:

| Selector | Direction | Duration | Behavior |
|----------|-----------|----------|----------|
| `.marquee_text` | `left` | 25000 ms | Continuous horizontal scroll; `duplicated: true`, `startVisible: true`, `gap: 50` |
| `.marquee_text2` | `top` | 25000 ms | Vertical scroll variant (theme support) |

**Used for:** partner logo strip under the hero; contact-band headline (“We take care of your IT…”).

CSS in `style2.css` styles `.js-marquee` / `.js-marquee-wrapper` generated by the plugin (partner hover scale, spacing).

### 9.5 Magic cursor & magnetic hover (GSAP)

Enabled when:

```html
<body class="home-dark2 tt-magic-cursor">
```

and viewport width **> 1024px**, and body is not `.is-mobile`.

| Interaction | Animation |
|-------------|-----------|
| Mouse move | `#ball` follows cursor with lerp (`$ratio = 0.15`) via `gsap.ticker` |
| Hover `.magnetic-item` | Element parallax toward pointer (`movement: 25`); ball grows to ~70×70, opacity 1 |
| Leave magnetic wrap | Element returns to `x:0,y:0`; ball shrinks to 36×36 |
| Hover links / `.cursor-alter` | Ball enlarges (~100×100), fill `#CCC`, border removed |
| Hover `[data-cursor]` | Ball shows custom label text (`ball-view`) |
| Hover interactive controls | Ball scales to 0 / hides, then restores |
| Click internal links | Brief ball scale-up + fade |
| Mouse leave document | Magic cursor `autoAlpha: 0` |

Hero images, approach images, project cards, blog cards, and the contact button use `magnetic-item`.

### 9.6 Sticky header

| Condition | Class / effect |
|-----------|----------------|
| `window.scrollY > 0` | `header.header-area2` gets `.sticky` |
| CSS `@keyframes smooth-header` | Smooth sticky appearance (defined in `style2.css`) |
| Secondary rule | `.position_top` gets `.sticky` after scroll > 200 px |

### 9.7 Mobile menu animations

| Action | Animation |
|--------|-----------|
| Open/close main menu | Class toggle `show-menu` on `.main-menu` |
| Submenu open | jQuery `slideToggle()` |
| Alternate `sidebar.js` (unused on current pages) | Staggered `navLinkFade` keyframe per menu item (`0.4s ease`, delay `index/10 + 0.5s`) |

Hamburger bars use CSS transforms (`rotateZ`) when `.active` (see `style2.css`).

### 9.8 Off-canvas sidebar slide

- Open: `.header-sidebar` + `.slide` (CSS transition ~0.5s theme rules)  
- Close: remove `.slide`

### 9.9 CounterUp

```js
$('.counter').counterUp({ delay: 10, time: 1000 });
```

Any `.counter` number animates from 0 → target over **1 second** when scrolled into view (via Waypoints).

### 9.10 Isotope filter (template support)

Click `ul.isotope-menu li[data-filter]`:

- Activates filter class  
- Runs Isotope on `.project-items` with `fitRows`, 750 ms layout animation  
- Relayout when images load  

Useful if a projects grid page is re-enabled.

### 9.11 Fancybox

```js
$('[data-fancybox="gallery"]').fancybox({ buttons: ["close"], loop: false, protect: true });
```

Hero video popup anchors exist but are **commented out** on the homepage; Fancybox remains loaded for gallery/video when markup is present.

### 9.12 CSS keyframe animations (`style2.css`)

| Keyframe | Typical role |
|----------|--------------|
| `smooth-header` | Sticky header motion |
| `fade-up` | Short upward entrance (~0.45s) |
| `fade-out` | Short fade/exit (~0.35s) |
| `opcsc` / `opcsc2` | Pulse / scale (often on decorative dots or icons), `1s infinite alternate` |
| `rotate` | Continuous 360° spin (`8s linear infinite`) on decorative elements |
| `navLinkFade` | Mobile nav link stagger (opacity/transform) |
| `up-down` | Vertical bobbing motion for accents |

Many components also use **CSS transitions** (`0.35s`–`0.8s`, ease-out) for hover color, underline, transform, and button states (`.primary-btn3`, cards, partner logos, etc.).

### 9.13 Particleground settings (`preloader.js`)

When particle containers exist:

| Layer | Dot color | Density | Radius | Parallax multiplier |
|-------|-----------|---------|--------|---------------------|
| Foreground | `rgba(6, 216, 137, 1)` | 50000 | 4 | 10 |
| Background | `rgba(6, 216, 137, 0.5)` | 30000 | 2 | 20 |

Particles reconnect within proximity; mouse/device orientation shifts parallax layers.

### 9.14 Animation map by user action

| User action | Visual response |
|-------------|-----------------|
| Load page | Preloader delay → content; WOW ready; optional particles |
| Scroll down | Sticky header; WOW sections fade/slide in; counters tick |
| Wait on hero | Auto fade to next banner every ~4s |
| Hover hero / card image | Magnetic pull + cursor ball expand (desktop) |
| Click services prev/next | Swiper slide animation |
| Click mobile menu | Menu slides/shows; hamburger morphs |
| Click service dropdown | Submenu slides open |
| Click sidebar icon | Off-canvas panel slides in |
| View partners / contact band | Marquee text/logos scroll continuously |
| Hover partner logo | CSS hover scale/opacity (theme) |
| Click Fancybox link | Lightbox open (if enabled) |
| Submit contact form | Native form POST (mailer not implemented) |

---

## 10. JavaScript modules

### `assets/js/custom.js` (primary)

Owns almost all interactive behavior:

- Preloader fade  
- Sidebar open/close  
- Dropdown icons  
- Sticky header  
- CounterUp  
- Active menu highlight by `location.href`  
- Isotope filters  
- Fancybox  
- All Swiper instances  
- WOW init  
- Full GSAP magic-cursor / magnetic system  
- Smooth scroll for in-page `#` anchors  
- Scroll-to-top helpers  
- Mobile `.sidebar-button` → `.show-menu`

### `assets/js/preloader.js`

Particleground library + immediate init for green particle layers.

### `assets/js/app.js`

Stock **particles.js** JSON-in-JS config targeting `#particles-js`. Not correctly linked from the homepage (wrong relative paths).

### `assets/js/sidebar.js`

Alternate mobile navigation with `navLinkFade` stagger — written for `.main-nav2` / `.mobile-menu-btn` markup that the current CLAREx pages do not use as primary nav.

### Inline scripts on `index.html`

- Marquee init for `.marquee_text` / `.marquee_text2`  
- Stats.js FPS overlay attempting to read `window.pJSDom` (particles demo leftover; likely errors without particles.js)

---

## 11. CSS & styling

- **Primary theme file:** `assets/css/style2.css` (very large; includes multiple “home3 / home4 / home5 / home6” layouts from the original multi-demo template).  
- **Active visual skin:** dark background classes `home-dark2`, orange/accent CTAs, white logo (`clarextechwhite.png`).  
- **Responsive:** Bootstrap breakpoints + Swiper `breakpoints` objects + mobile menu CSS.  
- **Icons:** Font Awesome, Boxicons, Bootstrap Icons (local + one CDN include).  
- **Commented:** `preloader.css` link is commented on inner pages.

Editing tips:

- Global colors / buttons / dark theme → `style2.css`  
- Per-page content → respective `.html`  
- Behavior timing (slider speed, WOW delay) → `custom.js` or HTML `data-wow-*` attributes  

---

## 12. Forms & PHP backend

### Contact page form (`contact.html`)

| Field | Element | Required |
|-------|---------|----------|
| Name | `#name` text | Yes |
| Company/Organization | `#company` text | Yes |
| Email | `#email` email | Yes |
| Phone | `#number` number | Yes |
| Message | `#message` textarea | No |
| Submit | `primary-btn3` button | — |

- **Method:** `POST`  
- **Action:** `mail.php` (relative to page root — **not** `assets/php/mail.php`)  
- Inputs use `id` but often **no `name` attributes**, so even a working PHP mailer would receive empty fields unless fixed  
- `assets/php/mail.php` is currently **empty**  
- Incorrect CSS include: `<link rel="stylesheet" href="assets/php/mail.php">` on contact head  

Footer pages also contain empty newsletter `<form>` shells without actions.

**Status:** Contact submission is **not functional** until mailer path, `name` attributes, and PHP logic are implemented.

---

## 13. Assets

Approximate media inventory:

| Type | Count (approx.) |
|------|-----------------|
| PNG | ~139 |
| SVG | ~76 |
| WebP | ~22 |
| JPG | ~9 |
| HTML | 14 |
| JS | 19 |
| CSS | 9 |
| Font files | Multiple (eot/woff/woff2/ttf) |
| PHP | 1 |

Image folders:

- `assets/img/home-3/` — main homepage photos, projects, blog, vectors  
- `assets/img/logos/` — partner / brand marks  
- `assets/img/inner-pages/` — process icons, blockquote decorations  
- `assets/img/home-5/`, `home-6/`, `footer/` — additional theme art  

Brand marks in use include `clarextechwhite.png` and `assets/img/logos/icon.png` (favicon).

---

## 14. How to run / deploy

### Local preview

1. Clone or open this folder.  
2. Option A — open `index.html` directly in a browser (file://). Some features (maps, absolute `/cdn-cgi/` scripts) work better over HTTP.  
3. Option B — serve the folder:

```bash
# Python
python -m http.server 8080

# VS Code / Cursor: Live Server, or any static host
```

4. Visit `http://localhost:8080/index.html`.

### Production

Upload the repository root (HTML + `assets/`) to any static host.  
If enabling the contact form, deploy PHP-capable hosting and implement `mail.php` (or replace with a form service).

No build step, transpile, or `npm install` is required.

---

## 15. Known issues & template leftovers

Documented for future cleanup — not exhaustive:

| Issue | Detail |
|-------|--------|
| Empty mailer | `assets/php/mail.php` has no code |
| Wrong form action | Posts to root `mail.php` instead of `assets/php/mail.php` |
| Missing input `name`s | Form fields may not serialize |
| Broken particles paths on home | `../particles.js`, `js/app.js`, `js/lib/stats.js` do not resolve |
| Cloudflare email script | `/cdn-cgi/scripts/.../email-decode.min.js` assumes Cloudflare hosting |
| Duplicate jQuery on contact | Loads jQuery 3.6.0 then CDN jQuery 2.1.1 |
| Generic social URLs | Facebook/Twitter/Instagram/Pinterest point to platform homepages |
| Placeholder / lorem-ish copy | Some home service blurbs still say “Services are professional w offerings…” |
| Dead links | e.g. `project-details.html` referenced but not present |
| Same `<title>` on all pages | Weak SEO |
| Homepage service cards | Often link to `service-details.html` instead of specific service URLs |
| `sidebar.js` unused | Present but not included in page script tags |
| Particleground on every page | May error when particle DOM nodes are absent |
| Footer credit | Still references Egens Lab template origin |

---

## 16. Maintenance notes

### Changing content

- **Home hero text / slides:** edit slides inside `.banner3-slider` in `index.html`  
- **Services list in nav:** update the `<ul class="sub-menu">` block on **every** HTML page (no shared partial)  
- **Phone / address / email:** repeated in sidebar, mobile menu, footer — search globally  
- **About narrative:** `about.html`  

### Changing animations

| Goal | Where to edit |
|------|----------------|
| Hero autoplay speed | `custom.js` → `.banner3-slider` `autoplay.delay` |
| Hero fade speed | same → `speed` |
| Scroll entrance delay | HTML `data-wow-delay` / `data-wow-duration` |
| Disable magic cursor | Remove `tt-magic-cursor` from `<body>` or gate in `custom.js` |
| Marquee speed | Inline script on `index.html` → `duration` (higher = slower) |
| Preloader length | `custom.js` → `.delay(1600)` |

### Recommended future improvements

1. Implement a real contact mailer (or third-party form endpoint).  
2. Introduce a shared header/footer (SSI, build step, or small static generator) to stop copy-paste drift.  
3. Unique titles/meta descriptions per page.  
4. Point social icons to real CLAREx profiles.  
5. Remove dead particle/stats scripts or fix paths.  
6. Wire homepage service cards to the correct `noc.html` / `serviceN.html` URLs.  
7. Replace remaining template placeholder copy.

---

## Quick reference — script load order (typical page)

1. jQuery 3.6.0  
2. Popper → Bootstrap  
3. Swiper  
4. Waypoints → CounterUp  
5. Isotope → Fancybox  
6. GSAP → simpleParallax → TweenMax  
7. jQuery Marquee  
8. WOW  
9. `preloader.js`  
10. `custom.js`  
11. (Homepage only) inline marquee + optional stats leftovers  

---

## License / attribution

Site content and branding: **CLAREx Tech Limited**.  
Underlying UI theme originates from an **Egens Lab**-style HTML template (see footer “All Rights Reserved” / egenslab credit). Respect the original template license for redistribution of vendor theme files.

---

*Documentation generated from a full read-only review of the repository structure, HTML pages, `custom.js`, `preloader.js`, `style2.css`, and related assets.*
