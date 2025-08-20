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
      <section className="section">
        <div className="container">
          <Link
            href="/products"
            className="inline-flex items-center text-[#8b5a5a] hover:text-[#6b4444] mb-8 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kthehu te Produktet
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="product-image aspect-square">
                <div className="text-8xl">🌸</div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors bg-gradient-to-br from-[#faf8f8] to-[#f5f0f0] flex items-center justify-center ${
                      currentImageIndex === index
                        ? "border-[#9d6b6b]"
                        : "border-[#e8d5d5]"
                    }`}
                  >
                    <div className="text-[#9d6b6b] text-2xl">🌸</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-serif text-[#6b4444] mb-2">
                  {product.title}
                </h1>
                <p className="text-[#9d6b6b] text-sm">{product.category}</p>
              </div>

              <p className="text-[#8b5a5a] text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="text-3xl font-serif text-[#9d6b6b]">
                {formatPrice(product.price)}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#6b4444] mb-2 font-medium">Madhësia</label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedSize === size
                            ? "bg-[#9d6b6b] text-white border-[#9d6b6b]"
                            : "border-[#e8d5d5] text-[#8b5a5a] hover:border-[#9d6b6b] hover:bg-[#faf8f8]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#6b4444] mb-2 font-medium">Ngjyra</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedColor === color
                            ? "bg-[#9d6b6b] text-white border-[#9d6b6b]"
                            : "border-[#e8d5d5] text-[#8b5a5a] hover:border-[#9d6b6b] hover:bg-[#faf8f8]"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="btn btn-primary btn-lg flex-1"
                >
                  Porosit Tani
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="btn btn-secondary btn-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>

              <div className="border-t border-[#e8d5d5] pt-6 space-y-4">
                <div>
                  <h3 className="text-[#6b4444] font-serif text-lg mb-2">
                    Kujdesi për Lulet
                  </h3>
                  <p className="text-[#8b5a5a] text-sm">
                    {product.careInstructions}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#6b4444] font-serif text-lg mb-2">
                    Raste të Përshtatshme
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.occasions.map((occasion) => (
                      <span
                        key={occasion}
                        className="px-3 py-1 bg-[#faf8f8] text-[#8b5a5a] border border-[#e8d5d5] rounded-full text-sm"
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