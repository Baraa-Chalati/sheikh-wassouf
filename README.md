# Sheikh Wassouf Insulation Materials — Website

A production-ready marketing site for شيخ وسوف للمواد العازلة, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Bilingual Arabic (default, RTL) / English (LTR), with an instant client-side language switch, light/dark mode, and no page reloads.

## Latest round of changes

- **Logo** now has a transparent background instead of a white box, so it sits cleanly on both light and dark surfaces.
- **Hero** no longer repeats the company name twice. The logo now sits directly next to the name, and the small label above it shows "Est. 1995 · Aleppo, Syria" instead.
- **Hero background** is a custom vector illustration of the house in cross-section instead of a photo, so it's crisp at any size. As you scroll past the hero, the insulation layer inside the wall visibly builds up, tying back to the site's whole message.
- **Arabic hero heading** uses a lighter weight and looser line height at large sizes so it reads cleanly instead of feeling packed together.
- **Product specifications** were rewritten using real published data for the MAPEI products (technical data sheets) and typical industry figures for the rock wool and bitumen membrane categories — see the note near the bottom of this file for which is which.
- **Shopping cart** added: each product has a quantity selector and an Add to Cart button, a cart drawer shows selected items, and since there's no payment processor connected, "checkout" opens WhatsApp with the order pre-filled as a message instead of a dead-end button.
- User accounts / Google & Facebook sign-in are **not** included yet — that needs real backend infrastructure and your own developer app credentials with Google and Meta, which is a bigger, separate conversation.

## Getting started

Requires Node.js 18.18+ (20 LTS recommended) and npm.

```bash
npm install
npm run dev       # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

The easiest deploy path is [Vercel](https://vercel.com) — connect the repo (or run `vercel`) and it builds with zero extra config. Any Node hosting works too via `npm run build && npm start`.

**Note:** `next/font/google` fetches Cairo and Plus Jakarta Sans from Google Fonts at build time, so the machine running `npm run build` needs normal internet access. That's standard for any real dev machine or CI runner — it just isn't available in the sandboxed environment this was built in, so the build here was verified once with a temporary system-font stand-in (see git history if you use one) purely to confirm the TypeScript and component code compile cleanly, then restored to the real Google Fonts setup that's in the files now.

## Project structure

```
src/
  app/
    layout.tsx       root layout, metadata, JSON-LD, fonts, theme init script
    page.tsx          assembles all sections
    globals.css        theme tokens (light/dark), base styles
    sitemap.ts / robots.ts
  components/
    layout/            Navbar, Footer, LanguageSwitcher
    sections/           Hero, TrustBar, Services, About, BeforeAfter,
                        Products, Experience, Gallery, Contact
    ui/                 SectionHeading, MagneticButton, ThemeToggle,
                        FloatingActions, WhatsAppIcon, SkipLink
  context/
    LanguageContext.tsx  ar/en state, sets <html lang/dir>, persists choice
    ThemeContext.tsx     light/dark state, persists choice
  lib/
    translations.ts     every string on the site, in English and Arabic
    site-data.ts        contact info, product list, gallery list (non-text)
public/images/          all processed images (see asset mapping below)
```

## Editing content

- **Text (either language):** `src/lib/translations.ts`. Everything is typed against one `Translations` interface, so English and Arabic always stay in sync — TypeScript will error if a key is missing from either.
- **Contact info, product list, gallery list:** `src/lib/site-data.ts`.
- **Colors, fonts:** `tailwind.config.ts` (brand navy/gold) and `src/app/globals.css` (light/dark surface, card, text, border tokens under `:root` and `.dark`).
- **Images:** drop a replacement into `public/images/` with the same filename, or update the path in `site-data.ts`.

## Asset mapping

All imagery comes from the marketing materials you supplied. The company logo and product/gallery photography are used as provided; a few images were cropped to isolate a clean visual for the hero and the before/after comparison.

| File in `public/images/` | Used in | Source | Notes |
|---|---|---|---|
| `logo.png` | Navbar, footer, hero lockup, favicon | Logo file | Cropped to the circular emblem, background made transparent |
| `hero-insulation.jpg` | Social share preview only (`og-image.jpg`) | Portrait campaign banner | The hero itself now uses a custom SVG illustration, not this photo |
| `og-image.jpg` | Social share preview | Same as hero | Copy of the hero crop |
| `before-insulation.jpg` | Before/after slider | "Choose experience" comparison poster | Left photo (water damage) |
| `after-insulation.jpg` | Before/after slider | Same poster | Right photo (rock wool installation) |
| `product-ultracolor-plus.jpg` | Products — MAPEI Ultracolor Plus | Ultracolor Plus flyer | Product photo cropped from flyer |
| `product-kerapoxy.jpg` | Products — MAPEI Kerapoxy | Kerapoxy flyer | Product photo cropped from flyer |
| `product-bitumen-membrane.jpg` | Products — bitumen membranes | Membrane flyer | Product photo cropped from flyer |
| `product-rockwool.jpg` | Products — rock wool | Rock wool flyer | Product photo cropped from flyer |
| `gallery-1.jpg` – `gallery-9.jpg` | Gallery / lightbox | All nine remaining supplied graphics | Used whole (full posters and flyers), lightly resized for the web |

## A few things worth knowing

- **Default language is Arabic (RTL).** English is one tap away in the nav, and the toggle flips content, direction, and layout instantly with no reload. Preference is remembered in the browser.
- **Dark mode** follows the visitor's system setting on first visit, then remembers their choice. Toggle is in the navbar (desktop and mobile menu).
- **Placeholder domain:** metadata/Open Graph URLs use `https://www.sheikhwassoof.com` as a placeholder. Set the real domain via the `NEXT_PUBLIC_SITE_URL` environment variable once you have one, or edit `SITE_URL` in `site-data.ts` directly.
- **SEO tradeoff:** the brief asked for an instant, no-reload language switch, which this delivers — but it means both languages live on one URL rather than separate `/en` and `/ar` routes. Search engines will primarily index the Arabic version. If dual-language SEO becomes a priority later, migrating to route-based i18n is a reasonable next step; everything else here (metadata, sitemap, robots.txt, JSON-LD, semantic HTML, alt text) is already in place.
- **`npm audit`** flags a path-traversal issue in a PostCSS copy bundled *inside* Next.js's own internal build tooling. It's a build-time-only concern (not something exposed on the live site) and the fix requires jumping to Next.js 16, a major version this project hasn't been tested against. Left on the current Next 14 LTS line, which is still receiving security patches, for stability — happy to upgrade and re-verify if you'd like.
- **Arabic copy** was written for this project based on the materials and history you provided; worth a quick native-speaker pass before it goes live, as with any first draft.
- Stats beyond "30 years" (e.g. the founding year callout) come directly from what you shared — double check the specifics against your records before publishing.
- **Product specifications:** the MAPEI Ultracolor Plus and MAPEI Kerapoxy specs are pulled from MAPEI's own published technical data sheets, so those should be accurate for those exact products. The rock wool and bitumen membrane specs are typical figures for that category of material in general, since those weren't tied to one specific brand in what you provided — swap in your actual supplier's numbers if you have them, for full accuracy.
- **Cart:** it's a real, working cart (quantity, add/remove, persists between visits) but there's no payment processing, since none was requested. "Send Inquiry" opens WhatsApp with the order listed as a message, so browsing turns into a real lead instead of a dead end.
