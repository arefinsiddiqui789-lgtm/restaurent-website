import { Reveal, Eyebrow } from "./Reveal";
import { GALLERY_IMAGES } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="bg-[var(--brand-cream-2)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow className="justify-center">Inside the Room</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--brand-olive)] sm:text-4xl lg:text-5xl">
              A Glimpse of Olivetta
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 [&>*]:min-h-[160px] sm:[&>*]:min-h-[220px]">
            {GALLERY_IMAGES.map((img) => {
              const span =
                img.size === "wide"
                  ? "sm:col-span-2"
                  : img.size === "tall"
                  ? "row-span-2"
                  : "";
              return (
                <figure
                  key={img.src}
                  className={`group overflow-hidden rounded-xl ${span}`}
                >
                  { }
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
