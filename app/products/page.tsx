import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductGallery } from "@/components/product-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produktet",
  description: "Zbuloni koleksionin tonë të plotë të luleve dhe aranzhmaneve elegante. Buqeta, kompozime dasme, dhe dekorime për çdo rast të veçantë.",
  keywords: ["produktet", "buqeta", "lule", "kompozime", "dasma", "dekorime", "Tiranë"],
  openGraph: {
    title: "Produktet | Olivia's Flowers",
    description: "Zbuloni koleksionin tonë të plotë të luleve dhe aranzhmaneve elegante",
    url: "https://oliviasflowers.vercel.app/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <ProductGallery />
      </main>
      <Footer />
    </>
  );
}