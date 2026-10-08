"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { SITE_INFO } from "@/lib/site-data";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reserve", label: "Reserve" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-cream)]/95 backdrop-blur-md border-b border-[var(--brand-line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          aria-label={`${SITE_INFO.name} — home`}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-olive)] text-sm font-bold text-[var(--brand-cream)]">
            O
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl font-semibold text-[var(--brand-olive)]">
              {SITE_INFO.name}
            </span>
            <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--brand-terracotta)]">
              {SITE_INFO.tagline}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-[var(--brand-charcoal)] transition-colors hover:text-[var(--brand-olive)]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--brand-terracotta)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-2 rounded-full bg-[var(--brand-terracotta)] px-6 text-white hover:bg-[var(--brand-terracotta-dark)] hover:text-white"
          >
            <a href="#reserve">Reserve</a>
          </Button>
        </nav>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[var(--brand-olive)]"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] border-[var(--brand-line)] bg-[var(--brand-cream)] p-0"
          >
            <div className="flex items-center justify-between border-b border-[var(--brand-line)] px-6 py-5">
              <span className="font-display text-xl font-semibold text-[var(--brand-olive)]">
                {SITE_INFO.name}
              </span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="border-b border-[var(--brand-line)] py-4 text-base font-medium text-[var(--brand-charcoal)] transition-colors hover:text-[var(--brand-terracotta)]"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <Button
                asChild
                className="mt-6 rounded-full bg-[var(--brand-terracotta)] px-6 text-white hover:bg-[var(--brand-terracotta-dark)]"
              >
                <a href="#reserve">Reserve a Table</a>
              </Button>
            </nav>
            <div className="mt-auto px-6 py-6 text-sm text-[var(--brand-muted)]">
              <p className="font-semibold text-[var(--brand-olive)]">Visit</p>
              <p className="mt-1">{SITE_INFO.address.line1}</p>
              <p>{SITE_INFO.address.line2}</p>
              <p className="mt-2">
                <a href={SITE_INFO.phoneHref} className="hover:text-[var(--brand-terracotta)]">
                  {SITE_INFO.phone}
                </a>
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
