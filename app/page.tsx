import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
