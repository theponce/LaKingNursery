# The Websmith - Memory

## Project: La King Nursery (laking)

### Stack
- Astro 6 + Tailwind CSS 4 (`@tailwindcss/vite`)
- Lucide icons: `@lucide/astro`
- Path alias: `@/*` maps to `src/*` (tsconfig.json)
- Build: `npx astro build` — static output

### Color Token Naming
- Terracotta uses `terra-*` prefix (NOT `terracotta-*`)
- Sage: `sage-50` through `sage-900` (primary = `sage-500` / #4A7C59)
- Terracotta: `terra-50` through `terra-900` (accent = `terra-500` / #C4704B)
- Gold: `gold-50` through `gold-900` (highlight = `gold-500` / #D4A843)
- Cream: `cream-50` through `cream-600` (background = `cream-50` / #FDFBF7)
- Bark: `bark-50` through `bark-900` (text/dark = `bark-800` / #3D352D)

### Font Tokens
- `font-heading` = Playfair Display (serif)
- `font-body` = Source Sans 3 (sans-serif)

### Architecture
- `BaseLayout.astro` — HTML shell, meta, SEO, reveal observer
- `PageLayout.astro` — wraps BaseLayout + SkipLink, Header, main, Footer, MobileCTA
- Data layer: `src/data/businessInfo.ts`, `src/data/navigation.ts`
- Components organized by page: `global/`, `home/`, `services/`, `about/`, `contact/`, `gallery/`, `blog/`, `ui/`

### Global Components Created
- `SkipLink.astro` — a11y skip link
- `Header.astro` — utility bar + sticky nav + hamburger trigger
- `MobileDrawer.astro` — slide-in drawer with focus trap, AbortController cleanup
- `Footer.astro` — 4-col grid + newsletter + copyright (pb-20 on mobile for MobileCTA clearance)
- `MobileCTA.astro` — fixed bottom bar (mobile only), Call Now + Free Quote
- `Breadcrumbs.astro` — props-driven with JSON-LD schema

### Pages Created
- `/contact` — lead-gen form + sidebar info cards + Google Maps iframe + LocalBusiness JSON-LD
- `/blog/` — featured post hero card + 6-post grid + newsletter CTA section
- `/privacy` — prose-styled privacy policy using Container narrow
- `/404` — centered 404 with decorative leaf, two CTA buttons
- `/about` — hero + story (2-col) + values (3-col grid) + stats (4-col) + CTA
- `/services/` — hub page: hero + service cards (md:grid-cols-2) + "How We Work" 3-step process + CTA
- `/services/[slug]` — dynamic detail pages via getStaticPaths; offerings list, benefits cards, FAQ (native details/summary), related services, CTA
- `/gallery` — hero + category filter pills (static) + CSS columns masonry (12 items) + hover overlay + CTA

### Data Layer Notes
- `businessInfo` is the canonical export from `src/data/businessInfo.ts`
- `business` is a convenience alias with derived fields (founded, yearsInBusiness, rating, reviewCount, serviceAreas, flat phone/phoneHref/googleMapsUrl)
- Home-page components (Hero, TrustBar, LeadCapture, ServiceArea) import `{ business }`; all other components import `{ businessInfo }`

### Patterns Discovered
- Another agent ("The Keeper") scaffolded layouts and data files concurrently
- Astro inline `<script>` tags are bundled as modules — use AbortController for cleanup across view transitions
- `body.drawer-open { overflow: hidden }` class added to global.css for mobile drawer
- Footer copyright bar has extra bottom padding on mobile (`pb-20 md:pb-4`) to clear MobileCTA
- Hero banner pattern for inner pages: `bg-sage-800 py-16 md:py-20` with Breadcrumbs + h1 + subtitle
- Form input pattern: `rounded-lg border border-cream-300 bg-cream-50 px-4 py-3 font-body text-bark-800 focus:ring-2 focus:ring-sage-600`
- Sidebar info card pattern: `bg-white rounded-xl border border-cream-200 shadow-sm p-6` with icon in `bg-sage-100 rounded-lg`
- Blog card pattern matches `BlogPreview.astro` home component: Card hover padding="none" with aspect-video placeholder
- Build cache: if `npx astro build` fails with module-not-found in dist/.prerender, delete `dist/` and `node_modules/.astro/` then rebuild
- Inner page hero pattern: `bg-gradient-to-br from-sage-900 via-sage-800 to-sage-700 py-20` with radial gradient overlay, h1 white, subtitle cream-200
- CTA section pattern: `bg-sage-600 py-20 md:py-28` with diagonal stripe overlay + radial glow, white heading, sage-100 body, two buttons (white call + terra-500 quote)
- Service detail pages use `serviceContent` record keyed by service.id for per-service offerings and FAQs
- Gallery uses CSS columns masonry (`columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4`) with `break-inside-avoid` on items

### Blog Content Patterns
- 7 articles in `src/content/blog/` — all enhanced with rich markdown formatting
- Blog template (`[slug].astro`) uses Tailwind prose classes: `prose-blockquote:border-sage-400 prose-blockquote:italic`
- Callout patterns used in articles: `> **Pro Tip:**`, `> **Caution:**`, and standalone pull quotes as blockquotes
- Articles use `---` horizontal rules between major sections for visual breaks
- Tables used for plant info cards, seasonal schedules, pruning calendars, soil mix ratios
- Internal CTAs use bold lead-in pattern: `**Need help?** [Our team](/services/...)...`
- Closing CTAs separated by `---` with bold lead text and link
