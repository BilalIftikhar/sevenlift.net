# Seven Lift General Transport — sevenlift.net

Production website for **Seven Lift General Transport L.L.C.**, a heavy equipment rental company serving the UAE — forklifts, mobile cranes, telehandlers, and man lifts — with a primary focus on Abu Dhabi (Musaffah, ICAD, Khalifa Industrial Zone) and Dubai (JAFZA, Al Quoz, Dubai Industrial City).

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) primitives via a small shadcn-style component layer
- [Vercel Analytics](https://vercel.com/analytics)

## Project Structure

```
app/
  layout.tsx              Root layout, global metadata, JSON-LD, fonts
  page.tsx                 Homepage
  sitemap.ts               Auto-generated sitemap (static + blog routes)
  robots.ts                Robots directives
  equipment/                Fleet spec pages (forklift, mobile-crane, telehandler, man-lift)
  services/                 Localized, high-intent service landing pages
  locations/                Geo-targeted landing pages (Abu Dhabi/Musaffah, Dubai)
  blog/                     SEO content hub (index + [slug] posts)
  contact/                  Contact page
components/
  header.tsx, footer.tsx    Site chrome
  seo/                      Reusable JSON-LD schema components
  ...                       Homepage sections
lib/
  site-config.ts            Company NAP, service area, contact constants
  locations.ts, services.ts Structured data for location/service pages
  blog/posts.ts             Blog post content
```

## Local Development

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000`.

## Build

```bash
pnpm build
pnpm start
```

## SEO Notes

- Every route exports its own `metadata` (title, description, canonical, OpenGraph/Twitter).
- `LocalBusiness`, `Organization`, `Service`, `BreadcrumbList`, and `BlogPosting` JSON-LD are injected per page via `components/seo/json-ld.tsx`.
- `app/sitemap.ts` automatically includes every static route plus all blog posts from `lib/blog/posts.ts`.
- Update `lib/site-config.ts` first when phone numbers, address, or service areas change — it is the single source of truth referenced across metadata, schema, header, and footer.
