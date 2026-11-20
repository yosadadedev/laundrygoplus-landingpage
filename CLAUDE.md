# CLAUDE.md

Guidance for Claude Code in this folder.

## What this is

Marketing landing page for **LaundryGo+**, the laundry cashier app in this monorepo (`../apps/mobile`), served at `https://laundrygoplus.id`. Static marketing content in Indonesian; it sends visitors to the Play Store (`com.yl.laundrygoplus`) and to WhatsApp. No backend, auth, or database here. It is **not** part of the Bun workspaces: it has its own `package-lock.json` and is run with npm.

## Commands

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
```

No test suite.

## Architecture

- Next.js App Router (`app/`), TypeScript, Tailwind CSS v4 (`@import "tailwindcss"` in `app/globals.css`, no `tailwind.config`).
- `app/layout.tsx`: fonts (Plus Jakarta Sans, JetBrains Mono, Comfortaa for the "laundrygo+" wordmark) and all SEO metadata + JSON-LD. Update metadata there, not per page. GA4 runs only in production when `NEXT_PUBLIC_GA_ID` is set.
- `app/site.ts`: site URL, WhatsApp, and the legal page links. `app/components/StoreButtons.tsx`: store links (`APP_STORE_URL = null` shows "Segera di App Store").
- `app/page.tsx` stacks the sections, one per navbar anchor (`#kenapa`, `#fitur`, `#cara-pakai`, `#faq`, `#harga`): Navbar, Hero, Kenapa, Fitur, CaraPakai, FAQ, Harga (free), Footer. FAQ texts in `app/data/faqs.ts` also feed the FAQPage JSON-LD.
- Brand colors are Tailwind theme tokens from the app (`app/globals.css`): `brand` `#D97757` (terracotta), `brand-dark` `#B9583A`, `brand-light` `#E8967A`. Use `bg-brand`, `text-brand`, … never hex values in components. Logo: `app/components/Logo.tsx`.
- `/kebijakan-privasi` and `/syarat-ketentuan` redirect to the API pages (`api.laundrygoplus.id/privacy`, `/terms`): the legal text lives once, in `packages/shared/src/legal.ts`.
- The hero shows the app's opening screen, not screenshots, until real LaundryGo+ screenshots are added to `public/`.

## App reference data

`APP_INFO.md` lists what the app really does (features, platform, price, contact). Copy on this page must stay within it: no invented features, ratings, or user counts. When the app changes (e.g. paid plans return, iPhone release, member packages shown again), update `APP_INFO.md` and the copy together.

## Note on AGENTS.md

`AGENTS.md` holds a block that `next dev` writes when it detects an AI agent (see `node_modules/next/dist/server/lib/generate-agent-files.js`); the Next.js docs it points to are in `node_modules/next/dist/docs/`.
