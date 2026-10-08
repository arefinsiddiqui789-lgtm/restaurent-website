import { Instagram, Facebook, Twitter } from "lucide-react";
import { SITE_INFO } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-charcoal)] text-[var(--brand-cream)]/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + about */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-semibold text-[var(--brand-cream)]">
              {SITE_INFO.name}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              A Mediterranean kitchen on Cedar Lane in San Francisco.
              Wood-fired plates, handmade pasta, and a short, careful wine
              list.
            </p>
            <div className="mt-4 flex gap-2">
              <SocialLink href={SITE_INFO.socials.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SITE_INFO.socials.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SITE_INFO.socials.twitter} label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-cream)]">
              Visit
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{SITE_INFO.address.line1}</li>
              <li>{SITE_INFO.address.line2}</li>
              <li>
                <a
                  href={SITE_INFO.phoneHref}
                  className="transition-colors hover:text-[var(--brand-cream)]"
                >
                  {SITE_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="transition-colors hover:text-[var(--brand-cream)]"
                >
                  {SITE_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-cream)]">
              Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Mon — Closed</li>
              <li>Tue – Thu · 5pm – 10pm</li>
              <li>Fri – Sat · 5pm – 11pm</li>
              <li>Sun · 12pm – 9pm</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-cream)]">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#story" className="transition-colors hover:text-[var(--brand-cream)]">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="transition-colors hover:text-[var(--brand-cream)]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-[var(--brand-cream)]">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reserve" className="transition-colors hover:text-[var(--brand-cream)]">
                  Reservations
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-[var(--brand-cream)]/50 sm:flex-row sm:text-sm">
          <span>&copy; {year} {SITE_INFO.name}. All rights reserved.</span>
          <span>Handcrafted in San Francisco</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-[var(--brand-cream)]/70 transition-all hover:bg-[var(--brand-terracotta)] hover:text-white"
    >
      {children}
    </a>
  );
}
