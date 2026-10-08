/* ==========================================================================
   Olivetta — Main Script
   --------------------------------------------------------------------------
   This file is intentionally small and readable. It does four things:
     1. Fills in dynamic content (signature dishes, menu, gallery, hours)
     2. Handles the mobile navigation drawer
     3. Adds a subtle "scrolled" state to the fixed nav bar
     4. Validates the reservation form on the reservation page

   No frameworks, no dependencies. Vanilla JS only.
   ========================================================================== */


/* --------------------------------------------------------------------------
   Helper: render HTML for a single signature dish card
   -------------------------------------------------------------------------- */

function renderDish(dish) {
  return `
    <article class="dish reveal">
      <div class="dish__image">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
      </div>
      <div class="dish__body">
        <div class="dish__head">
          <h3 class="dish__name">${dish.name}</h3>
          <span class="dish__price">${dish.price}</span>
        </div>
        <p class="dish__desc">${dish.desc}</p>
        ${dish.tag ? `<span class="dish__tag">${dish.tag}</span>` : ""}
      </div>
    </article>`;
}


/* --------------------------------------------------------------------------
   Helper: render HTML for a single menu item row
   -------------------------------------------------------------------------- */

function renderMenuItem(item) {
  const tagPills = (item.tags || [])
    .map(tag => `<span class="menu-item__tag">${tag}</span>`)
    .join("");

  return `
    <div class="menu-item">
      <div style="flex:1">
        <div class="menu-item__head">
          <span class="menu-item__name">${item.name}${tagPills}</span>
          <span class="menu-item__dots"></span>
          <span class="menu-item__price">${item.price}</span>
        </div>
        <p class="menu-item__desc">${item.desc}</p>
      </div>
    </div>`;
}


/* --------------------------------------------------------------------------
   Render: signature dishes on homepage
   -------------------------------------------------------------------------- */

function initSignatureDishes() {
  const wrap = document.querySelector("[data-signature-dishes]");
  if (!wrap) return;
  wrap.innerHTML = SIGNATURE_DISHES.map(renderDish).join("");
}


/* --------------------------------------------------------------------------
   Render: full menu (grouped by category) on menu page
   -------------------------------------------------------------------------- */

function initFullMenu() {
  const wrap = document.querySelector("[data-full-menu]");
  if (!wrap) return;

  const html = MENU.map((group, idx) => `
    <section class="menu-group reveal" data-category="${group.category}">
      <div class="menu-group__head">
        <h2 class="menu-group__title">${group.category}</h2>
        ${group.note ? `<p class="menu-group__note">${group.note}</p>` : ""}
      </div>
      <div class="menu-list">
        ${group.items.map(renderMenuItem).join("")}
      </div>
    </section>
  `).join("");

  wrap.innerHTML = html;

  // Build the filter pills
  const filtersWrap = document.querySelector("[data-menu-filters]");
  if (filtersWrap) {
    const filters = ["All", ...MENU.map(g => g.category)];
    filtersWrap.innerHTML = filters.map((f, i) => `
      <button class="menu-filter ${i === 0 ? "menu-filter--active" : ""}"
              data-filter="${f}">${f}</button>
    `).join("");

    filtersWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".menu-filter");
      if (!btn) return;

      filtersWrap.querySelectorAll(".menu-filter").forEach(b =>
        b.classList.remove("menu-filter--active"));
      btn.classList.add("menu-filter--active");

      const filter = btn.dataset.filter;
      document.querySelectorAll(".menu-group").forEach(group => {
        const show = filter === "All" || group.dataset.category === filter;
        group.style.display = show ? "" : "none";
      });
    });
  }
}


/* --------------------------------------------------------------------------
   Render: gallery on homepage
   -------------------------------------------------------------------------- */

function initGallery() {
  const wrap = document.querySelector("[data-gallery]");
  if (!wrap) return;

  wrap.innerHTML = GALLERY_IMAGES.map(img => {
    const sizeClass =
      img.size === "tall" ? " gallery__item--tall" :
      img.size === "wide" ? " gallery__item--wide"  : "";
    return `
      <figure class="gallery__item${sizeClass}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
      </figure>`;
  }).join("");
}


/* --------------------------------------------------------------------------
   Render: opening hours (footer + reservation page)
   -------------------------------------------------------------------------- */

function initHours() {
  document.querySelectorAll("[data-hours]").forEach(wrap => {
    wrap.innerHTML = OPENING_HOURS.map(h => `
      <div class="reserve__hours-row">
        <span class="reserve__hours-day">${h.day}</span>
        <span class="reserve__hours-time"${h.closed ? ' style="color:var(--color-terracotta)"' : ''}>
          ${h.time}
        </span>
      </div>
    `).join("");
  });
}


/* --------------------------------------------------------------------------
   Render: testimonial on homepage
   -------------------------------------------------------------------------- */

function initTestimonial() {
  const wrap = document.querySelector("[data-testimonial]");
  if (!wrap) return;
  wrap.innerHTML = `
    <blockquote class="testimonial">
      <p class="testimonial__quote">${TESTIMONIAL.quote}</p>
      <footer class="testimonial__cite">${TESTIMONIAL.cite}</footer>
    </blockquote>`;
}


/* --------------------------------------------------------------------------
   Navigation: mobile drawer toggle + scrolled state
   -------------------------------------------------------------------------- */

function initNavigation() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("nav__links--open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close drawer when a link is clicked (mobile UX)
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        links.classList.remove("nav__links--open");
        toggle.setAttribute("aria-expanded", "false");
      }));
  }

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("nav--scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}


/* --------------------------------------------------------------------------
   Reveal-on-scroll: subtle fade-up for elements with .reveal
   -------------------------------------------------------------------------- */

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // If IntersectionObserver isn't available, just show everything
  if (!("IntersectionObserver" in window)) {
    items.forEach(i => i.classList.add("reveal--in"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(i => observer.observe(i));
}


/* --------------------------------------------------------------------------
   Reservation form: front-end validation only (no fake backend)
   --------------------------------------------------------------------------
   The form shows a success message on submit when valid. To actually receive
   bookings, wire the `submit` handler to your own backend or email service
   (see README for guidance). Do NOT add fake "submit succeeds" behavior.
   -------------------------------------------------------------------------- */

function initReservationForm() {
  const form = document.querySelector("[data-reservation-form]");
  if (!form) return;

  const success = form.querySelector("[data-form-success]");

  // Set min date to today
  const dateInput = form.querySelector("[name='date']");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Reset error states
    form.querySelectorAll(".form__group").forEach(g =>
      g.classList.remove("form__group--error"));

    const required = form.querySelectorAll("[data-required='true']");
    required.forEach(field => {
      const group = field.closest(".form__group");
      if (!field.value.trim()) {
        group.classList.add("form__group--error");
        valid = false;
      }
    });

    // Validate email format if present
    const email = form.querySelector("[name='email']");
    if (email && email.value.trim()) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.value.trim())) {
        email.closest(".form__group").classList.add("form__group--error");
        valid = false;
      }
    }

    // Validate party size range
    const size = form.querySelector("[name='size']");
    if (size && size.value) {
      const n = Number(size.value);
      if (n < 1 || n > 12) {
        size.closest(".form__group").classList.add("form__group--error");
        valid = false;
      }
    }

    if (!valid) return;

    // ---- Front-end success state ----
    // Replace this block with a fetch() to your backend or email service
    // (Formspree, Resend, custom API, etc.). See README for examples.
    success.classList.add("form__success--visible");
    form.reset();
    success.scrollIntoView({ behavior: "smooth", block: "center" });

    // Hide success after 6 seconds
    setTimeout(() => success.classList.remove("form__success--visible"), 6000);
  });
}


/* --------------------------------------------------------------------------
   Year stamp in footer
   -------------------------------------------------------------------------- */

function initYear() {
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}


/* --------------------------------------------------------------------------
   Init everything once DOM is ready
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initSignatureDishes();
  initFullMenu();
  initGallery();
  initHours();
  initTestimonial();
  initNavigation();
  initReveal();
  initReservationForm();
  initYear();
});
