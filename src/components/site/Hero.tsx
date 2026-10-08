"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Warm candlelit dining room at Olivetta"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(28,36,20,0.82) 0%, rgba(28,36,20,0.45) 50%, rgba(28,36,20,0.25) 100%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-2xl text-[var(--brand-cream)]"
        >
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[var(--brand-cream)]/85">
            <span className="inline-block h-px w-7 bg-[var(--brand-cream)]" />
            San Francisco · Since 2014
          </span>

          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            A Mediterranean Table,
            <br />
            <em className="italic text-[var(--brand-gold)]">Set With Care</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brand-cream)]/85 sm:text-xl">
            Wood-fired plates, handmade pasta, and seasonal produce from Bay
            Area farms — served in a room that feels like a long Sunday lunch.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[var(--brand-terracotta)] px-8 text-white hover:bg-[var(--brand-terracotta-dark)] hover:text-white"
            >
              <a href="#reserve">Reserve a Table</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[var(--brand-cream)]/50 bg-transparent px-8 text-[var(--brand-cream)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-olive)]"
            >
              <a href="#menu">View the Menu</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Meta strip at bottom of hero */}
      <div className="absolute inset-x-0 bottom-6 flex flex-wrap justify-center gap-6 px-4 text-xs uppercase tracking-[0.08em] text-[var(--brand-cream)]/70 sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
          Tue – Sun
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
          Dinner &amp; Weekend Lunch
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
          Cedar Lane, SF
        </span>
      </div>
    </section>
  );
}
