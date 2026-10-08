/* ==========================================================================
   Olivetta — Site Data
   --------------------------------------------------------------------------
   THIS IS THE FILE CLIENTS WILL EDIT MOST OFTEN.
   All menu items, opening hours, contact info and signature dishes live
   here as plain JavaScript objects. Edit a value, save, refresh — done.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. Restaurant Info — name, tagline, contact details, socials
   -------------------------------------------------------------------------- */

const SITE_INFO = {
  name: "Olivetta",
  tagline: "Mediterranean Kitchen",
  phone: "(415) 555-0142",
  email: "hello@olivetta.example",
  address: {
    line1: "248 Cedar Lane",
    line2: "San Francisco, CA 94102"
  },
  socials: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
    twitter:   "https://twitter.com"
  }
};


/* --------------------------------------------------------------------------
   2. Opening Hours — used in footer + reservation page
   -------------------------------------------------------------------------- */

const OPENING_HOURS = [
  { day: "Monday",    time: "Closed",          closed: true  },
  { day: "Tuesday",   time: "5:00 PM – 10:00 PM" },
  { day: "Wednesday", time: "5:00 PM – 10:00 PM" },
  { day: "Thursday",  time: "5:00 PM – 10:00 PM" },
  { day: "Friday",    time: "5:00 PM – 11:00 PM" },
  { day: "Saturday",  time: "12:00 PM – 11:00 PM" },
  { day: "Sunday",    time: "12:00 PM – 9:00 PM"  }
];


/* --------------------------------------------------------------------------
   3. Signature Dishes — shown on the homepage (3 cards)
   --------------------------------------------------------------------------
   Each dish has an image, name, price, description, and optional tag.
   Replace the image URLs with your own photos (see README for instructions).
   -------------------------------------------------------------------------- */

const SIGNATURE_DISHES = [
  {
    name: "Saffron Seafood Risotto",
    price: "$28",
    desc: "Carnaroli rice, day-boat prawns, clams, and calamari simmered in saffron shellfish stock.",
    image: "assets/dish-risotto.jpg",
    tag: "Signature"
  },
  {
    name: "Wood-Fired Lamb Shoulder",
    price: "$34",
    desc: "Six-hour braised lamb, smoked eggplant purée, pomegranate, and charred scallion.",
    image: "assets/dish-lamb.jpg",
    tag: "Chef's Pick"
  },
  {
    name: "Burrata & Heirloom Tomato",
    price: "$16",
    desc: "Creamy burrata, sun-ripened heirloom tomatoes, basil oil, and toasted sourdough.",
    image: "assets/dish-burrata.jpg",
    tag: "Seasonal"
  }
];


/* --------------------------------------------------------------------------
   4. Menu — used on the full menu page
   --------------------------------------------------------------------------
   Group dishes by category. Each item supports an optional `tag` that
   shows a small pill next to the name (e.g. "V", "GF", "Spicy").
   -------------------------------------------------------------------------- */

const MENU = [
  {
    category: "Antipasti",
    note: "To share at the start of the meal",
    items: [
      {
        name: "Marinated Olives & Almonds",
        price: "$9",
        desc: "Castelvetrano olives, Marcona almonds, lemon, herbs.",
        tags: ["V"]
      },
      {
        name: "Burrata & Heirloom Tomato",
        price: "$16",
        desc: "Creamy burrata, sun-ripened tomatoes, basil oil, sourdough.",
        tags: ["V"]
      },
      {
        name: "Grilled Octopus",
        price: "$19",
        desc: "Spanish octopus, fingerling potato, smoked paprika aioli.",
        tags: []
      },
      {
        name: "Tuna Crudo",
        price: "$21",
        desc: "Yellowfin tuna, blood orange, fennel, Castelvetrano olive.",
        tags: ["GF"]
      }
    ]
  },
  {
    category: "Primi",
    note: "Handmade pastas & risotto",
    items: [
      {
        name: "Saffron Seafood Risotto",
        price: "$28",
        desc: "Carnaroli rice, prawns, clams, calamari, saffron shellfish stock.",
        tags: []
      },
      {
        name: "Wild Mushroom Tagliatelle",
        price: "$24",
        desc: "Hand-cut tagliatelle, porcini, truffle, Parmigiano.",
        tags: ["V"]
      },
      {
        name: "Lobster Spaghetti",
        price: "$32",
        desc: "Half lobster, san marzano, chili, basil, fresh spaghetti.",
        tags: ["Spicy"]
      },
      {
        name: "Cacio e Pepe",
        price: "$19",
        desc: "Tonnarelli, Pecorino Romano, cracked black pepper.",
        tags: ["V"]
      }
    ]
  },
  {
    category: "Secondi",
    note: "From the wood-fired hearth",
    items: [
      {
        name: "Wood-Fired Lamb Shoulder",
        price: "$34",
        desc: "Six-hour braised lamb, smoked eggplant, pomegranate, scallion.",
        tags: []
      },
      {
        name: "Branzino al Forno",
        price: "$31",
        desc: "Whole roasted branzino, lemon, capers, herb salsa verde.",
        tags: ["GF"]
      },
      {
        name: "Dry-Aged Ribeye",
        price: "$48",
        desc: "14oz ribeye, rosemary potatoes, charred shallot butter.",
        tags: ["GF"]
      },
      {
        name: "Eggplant Parmigiana",
        price: "$22",
        desc: "Layered eggplant, tomato, mozzarella, basil, breadcrumb.",
        tags: ["V"]
      }
    ]
  },
  {
    category: "Dolci",
    note: "Sweet finishes",
    items: [
      {
        name: "Olive Oil Cake",
        price: "$11",
        desc: "Citrus olive oil cake, mascarpone, candied lemon.",
        tags: ["V"]
      },
      {
        name: "Tiramisù",
        price: "$12",
        desc: "Espresso-soaked savoiardi, mascarpone, cocoa.",
        tags: ["V"]
      },
      {
        name: "Affogato",
        price: "$10",
        desc: "Vanilla gelato drowned in a shot of espresso.",
        tags: ["V", "GF"]
      },
      {
        name: "Seasonal Sorbet",
        price: "$9",
        desc: "Three scoops, rotating flavors, candied nut brittle.",
        tags: ["V", "GF"]
      }
    ]
  }
];


/* --------------------------------------------------------------------------
   5. Gallery — homepage image grid
   --------------------------------------------------------------------------
   `size` accepts: "regular" (default), "tall" (spans 2 rows),
   or "wide" (spans 2 columns). Mix sizes for an editorial layout.
   -------------------------------------------------------------------------- */

const GALLERY_IMAGES = [
  { src: "assets/gallery-1.jpg", alt: "Warm dining room with hanging lights", size: "wide" },
  { src: "assets/gallery-2.jpg", alt: "Plated seafood dish", size: "tall" },
  { src: "assets/gallery-3.jpg", alt: "Pouring red wine", size: "regular" },
  { src: "assets/gallery-4.jpg", alt: "Fresh pasta being rolled", size: "regular" },
  { src: "assets/gallery-5.jpg", alt: "Bread and olive oil", size: "wide" }
];


/* --------------------------------------------------------------------------
   6. Testimonial — single rotating-style quote on homepage
   -------------------------------------------------------------------------- */

const TESTIMONIAL = {
  quote: "Olivetta doesn't feel like a restaurant — it feels like a long Sunday lunch at someone's coastal home. The lamb shoulder alone is worth the trip across the bridge.",
  cite: "Marin Food Quarterly — Editor's Pick"
};


/* --------------------------------------------------------------------------
   7. Expose globally for main.js to consume
   -------------------------------------------------------------------------- */

window.SITE_INFO       = SITE_INFO;
window.OPENING_HOURS   = OPENING_HOURS;
window.SIGNATURE_DISHES= SIGNATURE_DISHES;
window.MENU            = MENU;
window.GALLERY_IMAGES  = GALLERY_IMAGES;
window.TESTIMONIAL     = TESTIMONIAL;
