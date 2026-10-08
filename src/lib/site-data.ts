/* ==========================================================================
   Olivetta — Site Data
   --------------------------------------------------------------------------
   THIS IS THE FILE CLIENTS WILL EDIT MOST OFTEN.
   All restaurant info, menu items, hours, gallery photos and testimonials
   live here as typed objects. Edit a value, save, refresh — done.
   ========================================================================== */

export type Dish = {
  name: string;
  price: string;
  desc: string;
  image: string;
  tag?: string;
};

export type MenuItem = {
  name: string;
  price: string;
  desc: string;
  tags?: string[]; // "V" | "GF" | "Spicy"
};

export type MenuGroup = {
  category: string;
  note?: string;
  items: MenuItem[];
};

export type HourEntry = {
  day: string;
  time: string;
  closed?: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  size?: "regular" | "tall" | "wide";
};

/* --------------------------------------------------------------------------
   1. Restaurant Info — name, tagline, contact, socials
   -------------------------------------------------------------------------- */

export const SITE_INFO = {
  name: "Olivetta",
  tagline: "Mediterranean Kitchen",
  phone: "(415) 555-0142",
  phoneHref: "tel:+14155550142",
  email: "hello@olivetta.example",
  address: {
    line1: "248 Cedar Lane",
    line2: "San Francisco, CA 94102",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
} as const;

/* --------------------------------------------------------------------------
   2. Opening Hours
   -------------------------------------------------------------------------- */

export const OPENING_HOURS: HourEntry[] = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "5:00 PM – 10:00 PM" },
  { day: "Wednesday", time: "5:00 PM – 10:00 PM" },
  { day: "Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday", time: "5:00 PM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 9:00 PM" },
];

/* --------------------------------------------------------------------------
   3. Signature Dishes — homepage cards
   -------------------------------------------------------------------------- */

export const SIGNATURE_DISHES: Dish[] = [
  {
    name: "Saffron Seafood Risotto",
    price: "$28",
    desc: "Carnaroli rice, day-boat prawns, clams, and calamari simmered in saffron shellfish stock.",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
    tag: "Signature",
  },
  {
    name: "Wood-Fired Lamb Shoulder",
    price: "$34",
    desc: "Six-hour braised lamb, smoked eggplant purée, pomegranate, and charred scallion.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80",
    tag: "Chef's Pick",
  },
  {
    name: "Burrata & Heirloom Tomato",
    price: "$16",
    desc: "Creamy burrata, sun-ripened heirloom tomatoes, basil oil, and toasted sourdough.",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80",
    tag: "Seasonal",
  },
];

/* --------------------------------------------------------------------------
   4. Full Menu — grouped by category
   -------------------------------------------------------------------------- */

export const MENU: MenuGroup[] = [
  {
    category: "Antipasti",
    note: "To share at the start of the meal",
    items: [
      {
        name: "Marinated Olives & Almonds",
        price: "$9",
        desc: "Castelvetrano olives, Marcona almonds, lemon, herbs.",
        tags: ["V"],
      },
      {
        name: "Burrata & Heirloom Tomato",
        price: "$16",
        desc: "Creamy burrata, sun-ripened tomatoes, basil oil, sourdough.",
        tags: ["V"],
      },
      {
        name: "Grilled Octopus",
        price: "$19",
        desc: "Spanish octopus, fingerling potato, smoked paprika aioli.",
        tags: [],
      },
      {
        name: "Tuna Crudo",
        price: "$21",
        desc: "Yellowfin tuna, blood orange, fennel, Castelvetrano olive.",
        tags: ["GF"],
      },
    ],
  },
  {
    category: "Primi",
    note: "Handmade pastas & risotto",
    items: [
      {
        name: "Saffron Seafood Risotto",
        price: "$28",
        desc: "Carnaroli rice, prawns, clams, calamari, saffron shellfish stock.",
        tags: [],
      },
      {
        name: "Wild Mushroom Tagliatelle",
        price: "$24",
        desc: "Hand-cut tagliatelle, porcini, truffle, Parmigiano.",
        tags: ["V"],
      },
      {
        name: "Lobster Spaghetti",
        price: "$32",
        desc: "Half lobster, san marzano, chili, basil, fresh spaghetti.",
        tags: ["Spicy"],
      },
      {
        name: "Cacio e Pepe",
        price: "$19",
        desc: "Tonnarelli, Pecorino Romano, cracked black pepper.",
        tags: ["V"],
      },
    ],
  },
  {
    category: "Secondi",
    note: "From the wood-fired hearth",
    items: [
      {
        name: "Wood-Fired Lamb Shoulder",
        price: "$34",
        desc: "Six-hour braised lamb, smoked eggplant, pomegranate, scallion.",
        tags: [],
      },
      {
        name: "Branzino al Forno",
        price: "$31",
        desc: "Whole roasted branzino, lemon, capers, herb salsa verde.",
        tags: ["GF"],
      },
      {
        name: "Dry-Aged Ribeye",
        price: "$48",
        desc: "14oz ribeye, rosemary potatoes, charred shallot butter.",
        tags: ["GF"],
      },
      {
        name: "Eggplant Parmigiana",
        price: "$22",
        desc: "Layered eggplant, tomato, mozzarella, basil, breadcrumb.",
        tags: ["V"],
      },
    ],
  },
  {
    category: "Dolci",
    note: "Sweet finishes",
    items: [
      {
        name: "Olive Oil Cake",
        price: "$11",
        desc: "Citrus olive oil cake, mascarpone, candied lemon.",
        tags: ["V"],
      },
      {
        name: "Tiramisù",
        price: "$12",
        desc: "Espresso-soaked savoiardi, mascarpone, cocoa.",
        tags: ["V"],
      },
      {
        name: "Affogato",
        price: "$10",
        desc: "Vanilla gelato drowned in a shot of espresso.",
        tags: ["V", "GF"],
      },
      {
        name: "Seasonal Sorbet",
        price: "$9",
        desc: "Three scoops, rotating flavors, candied nut brittle.",
        tags: ["V", "GF"],
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   5. Gallery — homepage image grid
   -------------------------------------------------------------------------- */

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Warm dining room with hanging lights",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1551218372-a8789b81b253?auto=format&fit=crop&w=600&q=80",
    alt: "Plated seafood dish",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
    alt: "Pouring red wine",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    alt: "Fresh pasta being rolled",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80",
    alt: "Bread and olive oil",
    size: "wide",
  },
];

/* --------------------------------------------------------------------------
   6. Testimonial
   -------------------------------------------------------------------------- */

export const TESTIMONIAL = {
  quote:
    "Olivetta doesn't feel like a restaurant — it feels like a long Sunday lunch at someone's coastal home. The lamb shoulder alone is worth the trip across the bridge.",
  cite: "Marin Food Quarterly — Editor's Pick",
} as const;

/* --------------------------------------------------------------------------
   7. Hero background image
   -------------------------------------------------------------------------- */

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80";

export const STORY_IMAGE =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80";
