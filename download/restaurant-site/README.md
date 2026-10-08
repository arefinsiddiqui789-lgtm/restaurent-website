# Olivetta — Restaurant Website

A polished, handcrafted restaurant website built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies. Designed so a client (or a beginner developer) can edit one or two files and rebrand the entire site.

The current content is for a fictional Mediterranean kitchen called **Olivetta** in San Francisco. Every piece of content — restaurant name, menu, prices, hours, photos, colors, fonts — is editable in the sections below.

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Project Structure](#2-project-structure)
3. [How to Customize Content](#3-how-to-customize-content)
4. [How to Customize the Design](#4-how-to-customize-the-design)
5. [How to Replace Images](#5-how-to-replace-images)
6. [Wiring Up the Reservation Form](#6-wiring-up-the-reservation-form)
7. [Deploying the Website](#7-deploying-the-website)
8. [Code Overview](#8-code-overview)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Quick Start

You don't need to install anything. The site is plain static HTML/CSS/JS.

**Option A — Just open it:**
Double-click `index.html` to open it in your browser. (Some browser security settings block local file features — use Option B if you see issues.)

**Option B — Run a local server (recommended):**

```bash
# From inside the restaurant-site/ folder:

# Python 3 (already installed on Mac/Linux)
python3 -m http.server 8000

# Or Node.js
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 2. Project Structure

```
restaurant-site/
├── index.html          ← Homepage (hero, story, dishes, gallery)
├── menu.html           ← Full menu page with category filters
├── reservation.html    ← Reservation form (validated, no backend)
├── css/
│   └── style.css       ← All styles, organized in clear sections
├── js/
│   ├── data.js         ← All editable content lives here (menu, hours, etc.)
│   └── main.js         ← Page behavior (nav, form, dynamic rendering)
├── assets/             ← (Optional) Drop your own images here
└── README.md           ← This file
```

**Key principle:** Content lives in `js/data.js`, design lives in `css/style.css`, behavior lives in `js/main.js`. You will rarely need to touch `main.js` or the HTML files.

---

## 3. How to Customize Content

Open **`js/data.js`** in any text editor (VS Code, Sublime, Notepad, etc.). Everything you'll want to change is at the top, in clearly labeled sections.

### 3.1 Restaurant Name, Phone, Address

Edit the `SITE_INFO` object at the top of the file:

```js
const SITE_INFO = {
  name: "Olivetta",                       // ← change restaurant name
  tagline: "Mediterranean Kitchen",       // ← change tagline
  phone: "(415) 555-0142",
  email: "hello@olivetta.example",
  address: {
    line1: "248 Cedar Lane",
    line2: "San Francisco, CA 94102"
  },
  socials: {
    instagram: "https://instagram.com/...",
    facebook:  "https://facebook.com/...",
    twitter:   "https://twitter.com/..."
  }
};
```

> **Note:** The brand name also appears in the navigation and footer in each HTML file. To change it everywhere, do a find-and-replace for "Olivetta" across the three HTML files (`index.html`, `menu.html`, `reservation.html`).

### 3.2 Opening Hours

Edit the `OPENING_HOURS` array. Use `closed: true` for days you're closed:

```js
const OPENING_HOURS = [
  { day: "Monday",    time: "Closed",          closed: true  },
  { day: "Tuesday",   time: "5:00 PM – 10:00 PM" },
  // ...add or remove rows as needed
];
```

These hours are automatically shown on the reservation page. (Footer hours are static text in each HTML file — see section 3.5.)

### 3.3 Signature Dishes (Homepage)

Edit the `SIGNATURE_DISHES` array — three cards on the homepage:

```js
const SIGNATURE_DISHES = [
  {
    name: "Saffron Seafood Risotto",
    price: "$28",
    desc: "Carnaroli rice, day-boat prawns, clams, calamari...",
    image: "https://images.unsplash.com/photo-...",   // ← URL or local path
    tag: "Signature"                                   // ← optional badge text
  },
  // ...two more
];
```

To add a 4th dish, add another object to the array. The CSS grid will auto-flow it (and switch to a 2-column or 1-column layout on smaller screens).

### 3.4 Full Menu (Menu Page)

Edit the `MENU` array. It's grouped by category:

```js
const MENU = [
  {
    category: "Antipasti",
    note: "To share at the start of the meal",     // ← optional subtitle
    items: [
      {
        name: "Marinated Olives & Almonds",
        price: "$9",
        desc: "Castelvetrano olives, Marcona almonds, lemon, herbs.",
        tags: ["V"]                                 // ← optional: "V", "GF", "Spicy"
      },
      // ...more items
    ]
  },
  // ...more categories (Primi, Secondi, Dolci, etc.)
];
```

The category filter pills on the menu page are generated automatically from your category names — you don't need to do anything extra.

### 3.5 Footer Hours & Contact

The footer is static HTML in each of the three page files. To change footer content, find the `<footer class="footer">` block in each HTML file and edit the text directly. (It's the same on all three pages — keep them in sync, or use find-and-replace.)

### 3.6 Testimonial

Edit the `TESTIMONIAL` object:

```js
const TESTIMONIAL = {
  quote: "Olivetta doesn't feel like a restaurant...",
  cite: "Marin Food Quarterly — Editor's Pick"
};
```

### 3.7 Gallery

Edit the `GALLERY_IMAGES` array. Each image can be `"regular"`, `"tall"` (spans 2 rows), or `"wide"` (spans 2 columns):

```js
const GALLERY_IMAGES = [
  { src: "https://...", alt: "Dining room",     size: "wide" },
  { src: "https://...", alt: "Seafood plate",   size: "tall" },
  { src: "https://...", alt: "Wine pouring",    size: "regular" },
  // ...
];
```

The `alt` text is important for accessibility and SEO — always describe the image.

---

## 4. How to Customize the Design

Open **`css/style.css`**. The top of the file (Section 1) contains all the **design tokens** — colors, fonts, spacing, shadows. Change them in one place and the whole site updates.

### 4.1 Colors

```css
:root {
  --color-olive:        #3a4a2a;   /* primary deep green  */
  --color-terracotta:   #c06a3d;   /* warm accent         */
  --color-cream:        #f6f1e7;   /* page background     */
  --color-cream-2:      #efe7d6;   /* alternate section   */
  --color-charcoal:     #2b2b27;   /* body text           */
  --color-gold:         #b8935a;   /* fine accents        */
  /* ...etc */
}
```

Try a completely different palette — e.g. a wine bar:
```css
--color-olive:      #4a1c2c;   /* deep wine red    */
--color-terracotta: #d4a574;   /* warm gold accent */
--color-cream:      #f8f5f0;
```

Save the file and refresh — the entire site recolors instantly.

### 4.2 Fonts

Fonts are loaded from Google Fonts in the `<head>` of each HTML file. To change them:

1. Pick new fonts at https://fonts.google.com
2. Update the `<link>` tag in each HTML file's `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
```

3. Update the font variables in `css/style.css`:

```css
:root {
  --font-display: "Playfair Display", Georgia, serif;
  --font-body:    "Lora", Georgia, serif;
}
```

### 4.3 Spacing & Layout

```css
:root {
  --container: 1200px;     /* max page width   */
  --nav-height: 76px;      /* height of nav bar */
  --space-7: 7rem;         /* section padding   */
}
```

### 4.4 Buttons

Button styles are in Section 5 of `style.css`. Three variants:
- `.btn--primary` — solid terracotta
- `.btn--outline` — olive outline
- `.btn--ghost`   — for use on dark backgrounds

---

## 5. How to Replace Images

The site currently uses Unsplash URLs (free stock photography). For a real restaurant, you'll want your own photos.

### Option A — Use your own image files

1. Put your image files in the `assets/` folder, e.g. `assets/hero.jpg`
2. In `js/data.js`, replace the `image:` URL with the local path:
   ```js
   image: "assets/hero.jpg"
   ```
3. For images that are hardcoded in HTML (hero background, story photo), edit the `<img src="...">` directly in `index.html`.

### Option B — Use other stock photos

Replace the Unsplash URLs with any image URL. Recommended free sources:
- [Unsplash](https://unsplash.com) — food, interiors
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

### Image tips for a real restaurant

- Use natural light whenever possible
- Aim for at least 1200px wide for hero images, 900px for dish cards
- Keep file sizes under 200KB (use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app))
- Use `.jpg` for photos, `.png` only for graphics with transparency

---

## 6. Wiring Up the Reservation Form

The reservation form currently shows a success message **on the front end only** — it does not send anything anywhere. This is intentional, so you don't get fake submissions during development.

To actually receive reservation requests, you have three options:

### Option A — Formspree (easiest, no code)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and copy your form endpoint (looks like `https://formspree.io/f/abcdwxyz`)
3. In `reservation.html`, change the form tag:
   ```html
   <form class="form" action="https://formspree.io/f/abcdwxyz" method="POST">
   ```
4. In `js/main.js`, find `initReservationForm()` and either:
   - Remove the `e.preventDefault()` line so the form submits normally, OR
   - Replace the success-state block with a `fetch()` call to Formspree's API

### Option B — Netlify Forms (free if you host on Netlify)

1. Deploy the site to Netlify (see section 7)
2. Add `data-netlify="true"` to the form tag in `reservation.html`
3. Netlify will automatically capture submissions — view them in your Netlify dashboard

### Option C — Custom backend

Replace the success-state block in `js/main.js` with a `fetch()` POST to your own API:

```js
fetch("/api/reservation", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(Object.fromEntries(new FormData(form)))
}).then(res => {
  if (res.ok) {
    success.classList.add("form__success--visible");
    form.reset();
  }
});
```

---

## 7. Deploying the Website

The site is plain static files — it can be hosted anywhere.

### Option A — Netlify Drop (free, no account needed for trial)

1. Go to https://app.netlify.com/drop
2. Drag the entire `restaurant-site/` folder onto the page
3. Done — you'll get a public URL

### Option B — GitHub Pages

1. Create a new GitHub repository
2. Upload all files in `restaurant-site/` to the repo root
3. Settings → Pages → Source → `main` branch → `/` root → Save
4. Your site will be live at `https://your-username.github.io/your-repo-name/`

### Option C — Any web host

Upload all files via FTP/SFTP to your hosting provider's `public_html` (or equivalent) folder. Make sure `index.html` is at the root.

### Option D — Vercel

```bash
npm i -g vercel
cd restaurant-site
vercel
```

---

## 8. Code Overview

### `js/main.js` — what each function does

| Function | Purpose |
|---|---|
| `initSignatureDishes()` | Renders the 3 dish cards on the homepage from `SIGNATURE_DISHES` |
| `initFullMenu()` | Renders the full menu + category filter pills on the menu page |
| `initGallery()` | Renders the gallery grid from `GALLERY_IMAGES` |
| `initHours()` | Fills in opening hours anywhere `[data-hours]` appears |
| `initTestimonial()` | Renders the testimonial quote on the homepage |
| `initNavigation()` | Mobile menu drawer toggle + nav "scrolled" state |
| `initReveal()` | Subtle fade-up animation on scroll (respects reduced-motion) |
| `initReservationForm()` | Front-end validation + success state |
| `initYear()` | Auto-fills the current year in the footer |

### `css/style.css` — organization

The stylesheet is organized into 19 numbered sections. The most-edited sections:

- **Section 1** — Design tokens (`:root` variables) — rebrand the whole site here
- **Sections 6–14** — Component styles (nav, hero, dishes, menu, form, footer)
- **Sections 18–19** — Responsive breakpoints (tablet at 960px, mobile at 680px)

---

## 9. Troubleshooting

**Images aren't loading**
- Check the URL/path is correct
- If using local files, make sure they're in the `assets/` folder and the path is `assets/filename.jpg`
- Browser console (F12 → Console) will show 404 errors for broken images

**Menu or dishes don't appear**
- Check `js/data.js` for syntax errors (a missing comma, unclosed quote, etc.)
- Open browser console (F12) — you'll see a JavaScript error if `data.js` is broken

**Reservation form doesn't submit anywhere**
- That's expected — see [Section 6](#6-wiring-up-the-reservation-form) to wire it up

**Fonts look wrong**
- Make sure the Google Fonts `<link>` is in the `<head>` of each HTML file
- Check the font names in `--font-display` and `--font-body` match exactly

**Mobile nav doesn't open**
- Make sure both `js/data.js` and `js/main.js` are loaded (check the `<script>` tags at the bottom of each HTML file)
- Open browser console for errors

**Want to add a new page (e.g. Events)?**
1. Copy `menu.html` to `events.html`
2. Change the page content
3. Add a link in the nav (in all three HTML files): `<a href="events.html" class="nav__link">Events</a>`

---

## License

This template is free to use for any restaurant, café, or personal project. Attribution is appreciated but not required.

The placeholder images are from [Unsplash](https://unsplash.com) and are free to use under the Unsplash License. Replace them with your own photos before going live.
