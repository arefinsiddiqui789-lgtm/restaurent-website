"use client";

import { useMemo, useState } from "react";
import { Reveal, Eyebrow } from "./Reveal";
import { MENU } from "@/lib/site-data";

export function MenuSection() {
  const filters = useMemo(
    () => ["All", ...MENU.map((g) => g.category)],
    []
  );
  const [active, setActive] = useState<string>("All");

  const visibleGroups = useMemo(
    () =>
      active === "All"
        ? MENU
        : MENU.filter((g) => g.category === active),
    [active]
  );

  return (
    <section id="menu" className="bg-[var(--brand-cream)] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <Eyebrow className="justify-center">The Menu</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--brand-olive)] sm:text-4xl lg:text-5xl">
              Tonight on the Table
            </h2>
            <p className="mt-4 text-[var(--brand-muted)]">
              The menu shifts with the seasons. Below is a representative
              selection of what&apos;s currently on. Ask your server for
              tonight&apos;s specials.
            </p>
          </div>
        </Reveal>

        {/* Filter pills */}
        <Reveal>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "border-[var(--brand-olive)] bg-[var(--brand-olive)] text-[var(--brand-cream)]"
                    : "border-[var(--brand-line)] bg-transparent text-[var(--brand-charcoal)] hover:border-[var(--brand-olive)] hover:text-[var(--brand-olive)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Menu groups */}
        {visibleGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.05}>
            <section className="mb-16 last:mb-0">
              <div className="mb-8 text-center">
                <h3 className="font-display text-3xl font-semibold text-[var(--brand-olive)]">
                  <span className="mr-3 inline-block h-px w-7 align-middle bg-[var(--brand-gold)]" />
                  {group.category}
                  <span className="ml-3 inline-block h-px w-7 align-middle bg-[var(--brand-gold)]" />
                </h3>
                {group.note && (
                  <p className="mt-2 text-sm text-[var(--brand-muted)]">
                    {group.note}
                  </p>
                )}
              </div>

              <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-[var(--brand-line)] pb-4"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xl font-semibold text-[var(--brand-olive)]">
                        {item.name}
                      </span>
                      {(item.tags || []).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[var(--brand-olive-soft)]/15 px-2 py-0.5 align-middle text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[var(--brand-olive-soft)]"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="menu-leader" aria-hidden="true" />
                      <span className="font-semibold text-[var(--brand-terracotta)]">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}

        {/* Dietary legend */}
        <Reveal>
          <div className="mt-12 border-t border-[var(--brand-line)] pt-8 text-center">
            <Eyebrow className="justify-center">Dietary Notes</Eyebrow>
            <p className="mt-3 text-sm text-[var(--brand-muted)]">
              <strong className="text-[var(--brand-olive)]">V</strong> = Vegetarian
              &nbsp;·&nbsp;
              <strong className="text-[var(--brand-olive)]">GF</strong> = Gluten-Free
              &nbsp;·&nbsp;
              <strong className="text-[var(--brand-olive)]">Spicy</strong> = Spicy
            </p>
            <p className="mt-3 text-sm text-[var(--brand-muted)]">
              Please let us know about any allergies — our kitchen uses nuts,
              dairy, and shellfish across the menu. We&apos;ll do our best to
              accommodate.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
