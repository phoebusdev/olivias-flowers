import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} - Olivia's Flowers`,
    description: "Shikoni detajet e produktit dhe porosisni online",
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <ProductDetail slug={slug} />
      </main>
      <Footer />
    </>
  );
}