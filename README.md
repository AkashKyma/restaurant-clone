# Bella Vista Bistro

A classic multi-page restaurant marketing website built with **Next.js 14** (App Router).

## Route Table

| Route | Page |
|-------|------|
| `/` | Home — hero, featured dishes, hours/location teaser |
| `/menu` | Full menu — Starters, Mains, Desserts |
| `/about` | Restaurant story |
| `/gallery` | Responsive photo grid |
| `/contact` | Address, hours, contact form |
| `/reservations` | Reservation form (UI only) |

## Project Structure

```
app/
  layout.tsx          — shared Layout (Header + Footer)
  page.tsx            — Home page
  globals.css         — all styles (CSS custom properties)
  components/
    Header.tsx        — sticky nav with mobile hamburger
    Footer.tsx        — links, socials, copyright
  data/
    siteContent.ts    — restaurant copy, hours, routes
    menu.ts           — menu categories + featured dishes
    gallery.ts        — gallery image metadata
  menu/page.tsx
  about/page.tsx
  gallery/page.tsx
  contact/page.tsx
  reservations/page.tsx
```

## Get Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

## Notes

Out of scope for v1: online ordering, authentication, CMS integration, payment processing, real reservation backend.
