# View | View Marble Studio

Luxury marble & stone finishing website for the Eastern Province, Saudi Arabia.

## Tech Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui + Base UI
- lucide-react icons
- react-hook-form + zod

## Environment
Copy `.env.example` to `.env.local` and fill:

## Scripts
- `npm run dev` - development
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint

## Structure
- `src/app` - App Router pages
- `src/components` - UI, layout, sections
- `src/config` - site, services, areas, blog, faq
- `src/lib` - seo, schema, utils, whatsapp
- `src/hooks` - reusable hooks

## Content
Update data inside `src/config/*.ts`:
- `site.ts` - contact info, nav
- `services.ts` - services list + details
- `areas.ts` - service areas
- `blog.ts` - blog posts
- `faq.ts` - FAQs
- `images.ts` - marble images (replace with real project images later)

## Pages
- `/` Home
- `/services` + `/services/[slug]` (6)
- `/areas` + `/areas/[slug]` (5)
- `/blog` + `/blog/[slug]` (3)
- `/about`
- `/contact`

## SEO
- Metadata + OG image
- Sitemap + robots
- JSON-LD: Organization, LocalBusiness, Service, Article, FAQ, Breadcrumb
- Arabic-first (`lang="ar" dir="rtl"`)

## Production Checklist
- [ ] Replace Unsplash images with real project photos
- [ ] Update `NEXT_PUBLIC_SITE_URL` to real domain
- [ ] Add `NEXT_PUBLIC_GA_ID`
- [ ] Update phone / WhatsApp / email
- [ ] Add real logo in `/public/images/logo.jpg`
- [ ] Connect `/api/newsletter` to email provider
- [ ] Test all forms end-to-end
- [ ] Run Lighthouse