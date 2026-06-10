# Bella Vista Bistro

A static multi-page marketing website for a fictional restaurant brand built with Next.js App Router.

## Install and run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

## Route table

- `/` — Home
- `/menu` — Full menu
- `/about` — Restaurant story
- `/gallery` — Photo grid
- `/contact` — Address, hours, and contact form
- `/reservations` — Reservation request form

## Notes

- Shared sticky header and footer across all pages
- Responsive navigation with mobile menu state
- Menu content stored in `data/menu.ts`
- Brand and contact content stored in `data/siteContent.ts`
- Gallery placeholder content stored in `data/gallery.ts`
- Contact and reservation forms are UI-only and show inline success messages
