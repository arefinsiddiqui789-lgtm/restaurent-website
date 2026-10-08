import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { SignatureDishes } from "@/components/site/SignatureDishes";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";
import { Reservation } from "@/components/site/Reservation";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-cream)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Story />
        <SignatureDishes />
        <MenuSection />
        <Gallery />
        <Testimonial />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
