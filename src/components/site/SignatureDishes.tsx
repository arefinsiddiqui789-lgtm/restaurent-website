import { Reveal, Eyebrow } from "./Reveal";
import { Button } from "@/components/ui/button";
import { SIGNATURE_DISHES } from "@/lib/site-data";

export function SignatureDishes() {
  return (
    <section className="bg-[var(--brand-cream-2)] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <Eyebrow className="justify-center">From the Kitchen</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--brand-olive)] sm:text-4xl lg:text-5xl">
              Three Plates to Start With
            </h2>
            <p className="mt-4 text-[var(--brand-muted)]">
              A small taste of the menu. See the full list — antipasti, primi,
              secondi, and dolci — below.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE_DISHES.map((dish, idx) => (
            <Reveal key={dish.name} delay={idx * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(43,43,39,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-24px_rgba(43,43,39,0.35)]">
                <div className="aspect-[4/3] overflow-hidden">
                  { }
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold text-[var(--brand-olive)]">
                      {dish.name}
                    </h3>
                    <span className="whitespace-nowrap font-semibold text-[var(--brand-terracotta)]">
                      {dish.price}
                    </span>
                  </div>
                  <p className="flex-1 text-[var(--brand-muted)]">{dish.desc}</p>
                  {dish.tag && (
                    <span className="mt-2 inline-block w-fit text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                      {dish.tag}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-[var(--brand-olive)] bg-transparent px-8 text-[var(--brand-olive)] hover:bg-[var(--brand-olive)] hover:text-[var(--brand-cream)]"
          >
            <a href="#menu">See the Full Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
