# Mostafij Emon — Website (Next.js / App Router)

The site, migrated from React (Vite) to **Next.js 14 (App Router)** for proper SEO and speed.
**Same Blueprint design.** Each page is its own file in `app/<route>/page.jsx`, and every page is
**server-rendered with its own `<title>` + meta** (verified prerendered as static HTML).

> ✅ Verified: `npm run build` succeeds and all 15 pages prerender as **static** content
> (`○ Static`), with per-page SEO meta baked into the HTML.

## Why this is better
- **SEO:** real `<title>`, meta description, and keywords in the server HTML for every page
  (not injected by JS) → reliable indexing and social-share previews.
- **Speed:** pages are pre-built (SSG), so they load almost instantly and score high on Core Web Vitals.
- **Sitemap & robots** generated automatically at `/sitemap.xml` and `/robots.txt`.

## Structure
```
app/
├── layout.jsx              ← <html>, fonts, Header, Footer, ScrollManager, global metadata
├── globals.css             ← the whole design (edit styling here, one place)
├── sitemap.js              ← auto /sitemap.xml
├── robots.js               ← auto /robots.txt
├── components/
│   ├── Header.jsx          ← 'use client' (menu, dropdown, active link)
│   ├── Footer.jsx          ← server component
│   └── ScrollManager.jsx   ← 'use client' (scroll-reveal + scroll-to-top)
├── page.jsx                ← Home  (/)
├── my-story/page.jsx
├── services/page.jsx
├── website-design/page.jsx
├── plugin-development/page.jsx
├── seo/page.jsx
├── gmb-setup/page.jsx
├── social-marketing/page.jsx
├── website-maintenance/page.jsx
├── digital-marketing/page.jsx
├── graphic-logo-design/page.jsx
├── ecommerce-solutions/page.jsx
├── portfolio/page.jsx
├── blogs/page.jsx
└── contact/page.jsx
```
Each page exports `metadata` (its SEO) at the top, then returns the `<main>` markup.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm start        # serve the production build
```

## Deploy to Vercel
1. Push this folder to a Git repo.
2. vercel.com → New Project → import the repo.
3. Vercel auto-detects **Next.js** — no config needed. Click Deploy.
   (Build: `next build`, framework: Next.js. Sitemap/robots/SSG all handled.)

CLI: `npm i -g vercel` then `vercel` / `vercel --prod`.

## How to edit / manage
- **Page content** → that one file in `app/<route>/page.jsx`.
- **A page's SEO** → the `export const metadata = {…}` at the top of that page file.
- **Colors / design** → `app/globals.css` (one place; e.g. swap to your `#48c89c` + `#0b152e`).
- **Menu / footer** → `app/components/Header.jsx` / `Footer.jsx`.
- **Default/site-wide meta** → `metadata` in `app/layout.jsx`.

## Before going live
1. **Contact form** points to a placeholder Formspree action
   (`app/contact/page.jsx`: `action="https://formspree.io/f/your-form-id"`). Create a free
   Formspree (or Web3Forms) form and paste your real endpoint — then it works with **no JS**.
2. **Testimonials** are realistic samples — replace with real client quotes (with permission).
3. Update email/phone if needed.
4. Want a favicon? Drop `app/icon.png` (Next picks it up automatically).

## Notes
- Internal links use `next/link`; external/portfolio links open in a new tab.
- Images use plain `<img>` from your live `mostafijemon.com` URLs. To use Next's optimizer,
  switch to `next/image` (the WP/CDN host is already allow-listed in `next.config.mjs`).
- This structure is also ideal if you later go **headless WordPress** (see the headless guide):
  swap the hardcoded arrays in `blogs`, `portfolio`, and testimonials for WordPress GraphQL
  queries inside these same server components, and read SEO from Yoast in `generateMetadata`.
