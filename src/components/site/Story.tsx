import { Reveal, Eyebrow } from "./Reveal";
import { STORY_IMAGE } from "@/lib/site-data";

export function Story() {
  return (
    <section id="story" className="bg-[var(--brand-cream)] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image */}
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(43,43,39,0.35)]">
            { }
            <img
              src={STORY_IMAGE}
              alt="Chef plating a dish in the Olivetta kitchen"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.1}>
          <div className="max-w-xl">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--brand-olive)] sm:text-4xl lg:text-5xl">
              A Kitchen Built Around the Wood Fire
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--brand-muted)]">
              Olivetta began as a small counter-service spot on Cedar Lane in
              2014. A single wood-fired oven, six tables, and a chalkboard menu
              that changed every morning.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--brand-charcoal)]/85">
              A decade later, the oven is still the heart of the kitchen — but
              the room has grown into something more intentional. We work with
              a tight list of farmers, fishmongers, and winemakers we know by
              name. The menu shifts with the seasons; the welcome stays the
              same.
            </p>
            <p className="mt-8 font-display text-2xl italic text-[var(--brand-olive)]">
              Elena Marchetti
              <small className="mt-1 block font-sans text-xs not-italic uppercase tracking-[0.1em] text-[var(--brand-muted)]">
                Chef &amp; Owner
              </small>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
