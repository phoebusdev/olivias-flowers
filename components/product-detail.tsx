"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice, generateWhatsAppLink } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Share2 } from "lucide-react"
import { OrderModal } from "@/components/order-modal"

const productData = {
  "buqete-elegante": {
    id: "1",
    title: "Buqetë Elegante",
    description: "Një kompozim i sofistikuar me trëndafila të bardhë dhe rozë që përfaqëson elegancën dhe pastërtinë. Kjo buqetë është perfekte për dasma, përvjetorë ose si dhuratë e veçantë për dikë të dashur.",
    price: 5000,
    images: ["/products/bouquet-1.jpg", "/products/bouquet-2.jpg", "/products/bouquet-3.jpg"],
    category: "Romantike",
    sizes: ["E Vogël", "E Mesme", "E Madhe"],
    colors: ["Bardhë", "Rozë", "Mikse"],
    careInstructions: "Ndërroni ujin çdo 2-3 ditë. Pritni kërcejt në kënd 45 gradë. Mbajini larg dritës së drejtpërdrejtë të diellit dhe burimeve të nxehtësisë.",
    occasions: ["Dasma", "Përvjetorë", "Ditëlindje", "Propozim"],
  },
}

export function ProductDetail({ slug }: { slug: string }) {
  const product = productData[slug as keyof typeof productData] || productData["buqete-elegante"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[1])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleWhatsAppOrder = () => {
    const message = `Përshëndetje! Jam i/e interesuar për produktin: ${product.title}
Madhësia: ${selectedSize}
Ngjyra: ${selectedColor}
Çmimi: ${formatPrice(product.price)}
Link: ${window.location.href}`
    
    const whatsappLink = generateWhatsAppLink("355691234567", message)
    window.open(whatsappLink, "_blank")
  }

  return (
    <>
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container">
          <Link
            href="/products"
            className="inline-flex items-center text-[#f5f5dc]/60 hover:text-[#d4af37] mb-8 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kthehu te Produktet
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-[#f5f5dc]/40 text-8xl">🌸</div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center ${
                      currentImageIndex === index
                        ? "border-[#d4af37]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="text-[#f5f5dc]/30 text-2xl">🌸</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-serif text-[#f5f5dc] mb-2">
                  {product.title}
                </h1>
                <p className="text-[#d4af37] text-sm">{product.category}</p>
              </div>

              <p className="text-[#f5f5dc]/80 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="text-3xl font-serif text-[#d4af37]">
                {formatPrice(product.price)}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#f5f5dc] mb-2">Madhësia</label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          selectedSize === size
                            ? "bg-[#d4af37] text-[#0a0a0a] border-[#d4af37]"
                            : "border-[#1a1a1a] text-[#f5f5dc] hover:border-[#d4af37]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#f5f5dc] mb-2">Ngjyra</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          selectedColor === color
                            ? "bg-[#d4af37] text-[#0a0a0a] border-[#d4af37]"
                            : "border-[#1a1a1a] text-[#f5f5dc] hover:border-[#d4af37]"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => setIsOrderModalOpen(true)}
                  className="flex-1"
                >
                  Porosit Tani
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6 space-y-4">
                <div>
                  <h3 className="text-[#f5f5dc] font-serif text-lg mb-2">
                    Kujdesi për Lulet
                  </h3>
                  <p className="text-[#f5f5dc]/60 text-sm">
                    {product.careInstructions}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#f5f5dc] font-serif text-lg mb-2">
                    Raste të Përshtatshme
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.occasions.map((occasion) => (
                      <span
                        key={occasion}
                        className="px-3 py-1 bg-[#1a1a1a] text-[#f5f5dc]/70 rounded-full text-sm"
                      >
                        {occasion}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={{
          title: product.title,
          price: product.price,
          selectedSize,
          selectedColor,
        }}
      />
    </>
  )
}