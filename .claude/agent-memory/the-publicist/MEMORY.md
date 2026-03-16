# The Publicist - Agent Memory

## Project: La King Nursery Website
- **Business:** La King Nursery, family-owned since 1998, Kingsville, TX (Zone 9b, Coastal Bend)
- **Site URL:** https://lakingnursery.com
- **Tech stack:** Astro 6, Tailwind CSS 4, MDX, Sharp, astro-seo
- **Tagline:** "Where South Texas Grows"

## Content Architecture
- Blog content collection: `src/content/blog/` (markdown files with YAML frontmatter)
- Schema: `src/content/config.ts` — uses Zod with `z.coerce.date()`
- Categories (enum): Planting Guides, Landscaping, Lawn Care, Irrigation, Tree Care, Container Gardening, Native Plants, Seasonal Tips
- Blog index: `src/pages/blog/index.astro` (currently uses hardcoded post data, not yet wired to content collection)
- Blog post template: `src/pages/blog/[slug].astro` (uses `getCollection('blog')`, filters drafts)
- Slug derived from `post.id` (filename without extension)

## Service Pages (for internal linking)
- /services/plant-nursery/
- /services/landscape-design/
- /services/lawn-care/
- /services/irrigation/
- /services/hardscaping/
- /services/tree-services/
- /contact/

## Brand Voice
- Warm, knowledgeable, approachable — like a trusted neighbor who is an expert gardener
- Use "we" for La King Nursery
- Specific to South Texas Zone 9b — NOT generic gardening content
- No unverifiable claims; no emojis in content files

## Business Details
- Address: 1304 E Kennedy, Kingsville, TX 78363
- Phone: (361) 228-5193
- Hours: Mon-Sat 8AM-6PM, Sunday Closed
- Facebook: https://www.facebook.com/p/La-King-Nursery-100057242960913/
- Service areas: Kingsville, Alice, Bishop, Riviera, Robstown, Falfurrias, Premont, San Diego

## Service Area Pages
- Data file: `src/data/serviceAreas.ts` — 8 cities with unique content, `ServiceAreaCity` interface
- Hub page: `src/pages/service-area/index.astro`
- City page template: `src/pages/service-area/[slug].astro` — generates `/service-area/[slug]-tx/` routes
- Cities: Kingsville (0 min), Alice (25 min), Bishop (15 min), Riviera (25 min), Robstown (35 min), Falfurrias (45 min), Premont (30 min), San Diego (45 min)
- Each city has unique intro, localDetails (soil/climate), whyUs content — no duplicated template text
- Content uses HTML tags for `set:html` rendering, includes internal links to `/contact/`

## Docs / Guides Written
- `docs/GOOGLE-BUSINESS-PROFILE.md` — Full GBP setup and optimization guide (claiming, profile, services, products, photos, Q&A, posts, reviews)

## Articles Written
1. `what-to-plant-march-south-texas.md` — March planting guide, featured, 2026-03-01
2. `5-native-plants-coastal-bend.md` — 5 native plants, 2026-02-20
3. `beginners-guide-drip-irrigation.md` — Drip irrigation guide, 2026-02-08
4. `prepare-lawn-south-texas-summer.md` — Lawn Care, summer lawn prep, 2026-01-25
5. `low-water-landscape-design.md` — Landscaping, xeriscaping guide, 2026-01-12
6. `when-to-trim-trees-seasonal-guide.md` — Tree Care, seasonal pruning, 2025-12-28
7. `container-gardening-south-texas-patios.md` — Container Gardening, patio plants, 2025-12-15
