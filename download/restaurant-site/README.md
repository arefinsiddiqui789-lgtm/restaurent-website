# Olivetta — Restaurant Website (Next.js)

A polished, handcrafted restaurant website built with **Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion**. Same design as the static version, now running as a proper React app with component-based architecture.

## Live Preview

The site runs live on the sandbox dev server. Use the **Preview Panel** on the right side of the interface, or click **"Open in New Tab"** to view it in a separate browser tab.

If you're on an IM platform, use the preview link provided in the chat.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with brand CSS variables in `globals.css`
- **UI**: shadcn/ui (New York style) + Lucide icons
- **Animation**: Framer Motion (subtle scroll-reveal, hover transitions)
- **Fonts**: Cormorant Garamond (display) + Inter (body) via `next/font`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← fonts, metadata, root layout
│   ├── page.tsx            ← assembles all sections
│   └── globals.css         ← brand color palette (edit here to rebrand)
├── lib/
│   └── site-data.ts        ← ALL editable content lives here (typed)
└── components/
    └── site/
        ├── Navbar.tsx          ← sticky nav + mobile Sheet drawer
        ├── Hero.tsx            ← full-screen hero
        ├── Story.tsx           ← chef story section
        ├── SignatureDishes.tsx ← 3 homepage dish cards
        ├── MenuSection.tsx     ← full menu + category filter pills
        ├── Gallery.tsx         ← editorial image grid
        ├── Testimonial.tsx     ← pull quote
        ├── Reservation.tsx     ← validated booking form
        ├── Footer.tsx          ← contact, hours, socials
        └── Reveal.tsx          ← shared scroll-reveal + Eyebrow helpers
```

## How to Customize

### 1. Content (menu, hours, contact, etc.)

Open `src/lib/site-data.ts`. Everything is typed and grouped:

- `SITE_INFO` — name, tagline, phone, email, address, socials
- `OPENING_HOURS` — array of `{ day, time, closed? }`
- `SIGNATURE_DISHES` — 3 homepage cards
- `MENU` — full menu grouped by category, with optional `tags` (`"V"`, `"GF"`, `"Spicy"`)
- `GALLERY_IMAGES` — image grid with `size: "regular" | "tall" | "wide"`
- `TESTIMONIAL` — homepage quote

Edit a value, save — the dev server hot-reloads.

### 2. Brand colors & fonts

Open `src/app/globals.css`. The brand palette lives at the bottom in `:root`:

```css
--brand-olive: #3a4a2a;
--brand-terracotta: #c06a3d;
--brand-cream: #f6f1e7;
/* ...etc */
```

Change one variable and the whole site recolors.

To change fonts, edit the `next/font` imports in `src/app/layout.tsx`.

### 3. Images

Replace Unsplash URLs in `src/lib/site-data.ts` with your own. For local images, drop them in `public/` and reference as `/your-photo.jpg`.

### 4. Reservation form

The form currently shows a front-end success message. To actually receive bookings, replace the success-state block in `src/components/site/Reservation.tsx` (look for the `FRONT-END SUCCESS STATE` comment) with a `fetch()` call to your backend, Formspree, or Netlify Forms.

## Verified Working

Browser-tested with Agent Browser:
- ✅ Homepage renders with 0 console errors, 0 page errors
- ✅ All 5 sections present (home, story, menu, gallery, reserve)
- ✅ 3 signature dishes, 4 menu categories, 16 menu items, 5 gallery images
- ✅ Menu category filter pills work (All / Antipasti / Primi / Secondi / Dolci)
- ✅ Smooth-scroll anchor navigation
- ✅ Mobile nav Sheet drawer opens and closes
- ✅ Form validation: empty submit shows 7 errors, valid submit shows success
- ✅ Sticky footer at bottom of page
- ✅ Responsive at 390px, 768px, 1024px, 1440px
- ✅ ESLint passes with 0 errors and 0 warnings
