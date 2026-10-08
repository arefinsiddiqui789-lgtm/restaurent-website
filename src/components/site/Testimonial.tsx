import { Reveal } from "./Reveal";
import { TESTIMONIAL } from "@/lib/site-data";

export function Testimonial() {
  return (
    <section className="bg-[var(--brand-cream)] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <blockquote className="text-center">
            <p className="relative font-display text-2xl italic leading-relaxed text-[var(--brand-olive)] sm:text-3xl lg:text-4xl lg:leading-[1.5]">
              <span
                aria-hidden="true"
                className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-7xl text-[var(--brand-gold)] opacity-40"
              >
                &ldquo;
              </span>
              {TESTIMONIAL.quote}
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--brand-muted)] sm:text-sm">
              {TESTIMONIAL.cite}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
