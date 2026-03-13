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
- Address: 1220 S US Highway 77 Byp, Kingsville, TX 78363
- Phone: (361) 592-9933
- Hours: Mon-Sat 8AM-6PM, Sunday Closed
- Service areas: Kingsville, Alice, Bishop, Riviera, Robstown, Falfurrias, Premont, San Diego

## Articles Written
1. `what-to-plant-march-south-texas.md` — March planting guide, featured, 2026-03-01
2. `5-native-plants-coastal-bend.md` — 5 native plants, 2026-02-20
3. `beginners-guide-drip-irrigation.md` — Drip irrigation guide, 2026-02-08
4. `prepare-lawn-south-texas-summer.md` — Lawn Care, summer lawn prep, 2026-01-25
5. `low-water-landscape-design.md` — Landscaping, xeriscaping guide, 2026-01-12
6. `when-to-trim-trees-seasonal-guide.md` — Tree Care, seasonal pruning, 2025-12-28
7. `container-gardening-south-texas-patios.md` — Container Gardening, patio plants, 2025-12-15
