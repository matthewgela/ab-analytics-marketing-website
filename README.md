# AB Analytics Marketing Website

Premium corporate portfolio site for AB Analytics — enterprise AI engineering for sovereign environments.

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
- Framer Motion · Lucide React · React Three Fiber
- React Hook Form · Zod

## Getting Started

Requires **Node.js 20+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Routes

- `/` — Home (hero, pillars, stats, services/products preview, intake form)
- `/services` — 8 capability cards
- `/products` — Tabbed product gateway (Adey, Nexio, TenaOS, TenaPro)
- `/team` — Leadership, delivery pipeline, org structure
- `/contact` — Full enterprise intake form

## Brand Assets

Replace placeholder SVGs in `public/brand/` with your official logo files. See `public/brand/README.md` for details.

## Contact Form

Submissions are sent to [Formspree](https://formspree.io) via AJAX from the static site (home intake form and `/contact` page). The default endpoint is `https://formspree.io/f/xbdeganl`.

Notification delivery is configured in the Formspree dashboard (not in this repo). Set the form’s email action to `matthew.gela@abanalytics.co.uk` — add and verify that address under **Account → Linked emails**, then update the form **Workflow → Email → Settings**.

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs and sitemap (optional locally) |
| `NEXT_PUBLIC_BASE_PATH` | Set to `/ab-analytics-marketing-website` for GitHub Pages |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Formspree form URL (optional; defaults to the project form) |
