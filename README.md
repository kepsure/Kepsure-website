# Kepsure Solutions — Website + Admin Panel

Marketing site and Product-Zone admin panel for **Kepsure Solutions Pvt. Ltd.**
(*A Total IT Solution Provider*).

- Public site — Home, Solutions (with 6 sub-pages), Services, Product Zone,
  About, Support, Contact
- Authenticated admin at `/admin` for managing the Product Zone catalogue
- Live product data via Supabase (with sample-data fallback so the site
  works even before Supabase is configured)

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Supabase** — Postgres, Auth, Storage (`@supabase/ssr`)
- **framer-motion**, **lucide-react**

## Local development

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>.

> Without Supabase env vars, the Product Zone uses 6 demo items and the
> `/admin` route shows a setup notice. Add credentials below to enable the
> admin panel.

## Configure Supabase

1. Create a project at <https://supabase.com>.
2. Copy `.env.local.example` to `.env.local` and fill in:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```

3. In the Supabase SQL editor, paste and run **`supabase/schema.sql`**.
   This creates the `products` table, RLS policies and a public
   `product-images` storage bucket.
4. Under *Authentication → Users → Add user*, create the admin email +
   password.
5. `npm run dev` and visit `/admin/login`.

## Project structure

```
src/
  app/
    page.tsx                  homepage
    solutions/
      page.tsx                solutions hub
      [slug]/page.tsx         per-solution detail
    services/page.tsx
    products/page.tsx         Product Zone catalogue
    about/page.tsx
    support/page.tsx
    contact/page.tsx
    privacy/page.tsx
    cookies/page.tsx
    admin/
      layout.tsx
      page.tsx                dashboard
      login/page.tsx
      products/
        page.tsx              inventory list
        new/page.tsx
        [id]/edit/page.tsx
  components/                 Header, Footer, Hero, SolutionsGrid, etc.
  lib/
    solutions.ts              static solutions config (6 lines)
    products.ts               server-side queries (with sample fallback)
    supabase/                 client / server / middleware helpers
middleware.ts                 gates /admin routes behind Supabase auth
supabase/schema.sql           run this once in the Supabase SQL editor
```

## Editing brand details

- Brand colours, fonts, gradients: `src/app/globals.css` (`@theme` block)
- Logo SVG: `src/components/Logo.tsx`
- Phone / email / footer details: `src/components/Footer.tsx`,
  `src/components/Header.tsx`, `src/app/contact/page.tsx`
- Solution lines: `src/lib/solutions.ts`
- Product categories: `src/lib/supabase/types.ts`

## Deploy

The site deploys cleanly to Vercel. Add the same `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` to the Vercel
project environment.
