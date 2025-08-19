"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "1",
    title: "Buqetë Elegante Premium",
    description: "Një kompozim i sofistikuar me trëndafila të bardhë dhe rozë, dekoruar me gyp frymarrësi dhe gjelbërim delikat. Perfekt për momente të veçanta romantike.",
    price: 5000,
    image: "/products/bouquet-1.jpg",
    slug: "buqete-elegante",
    emoji: "🌹"
  },
  {
    id: "2",
    title: "Aranzhman Dasme Luksoze",
    description: "Dekorim spektakular për ditën tuaj të veçantë. Kombinon lule sezonale me detaje të holla artizanale për një pamje madhështore.",
    price: 15000,
    image: "/products/wedding-1.jpg",
    slug: "aranzhman-dasme",
    emoji: "💒"
  },
  {
    id: "3",
    title: "Buqetë Ditëlindje Festive",
    description: "Ngjyra të gjalla dhe energjike për të festuar momentet e lumtura. Përzierje perfekte e luleve multicolore që sjell gëzim.",
    price: 3500,
    image: "/products/birthday-1.jpg",
    slug: "buqete-ditelindje",
    emoji: "🎉"
  },
  {
    id: "4",
    title: "Orkide Ekzotike VIP",
    description: "Orkide të rralla dhe ekskluzive për një dhuratë të paharrueshme. Simboli i elegancës dhe sofistikimit të lartë.",
    price: 8000,
    image: "/products/orchid-1.jpg",
    slug: "orkide-luksoze",
    emoji: "🌺"
  },
]

export function FeaturedProducts() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Produktet e Zgjedhura</h2>
          <p className="section-subtitle">
            Zbuloni koleksionin tonë të krijimeve më të dashura dhe të sofistikuara. 
            Çdo kompozim është krijuar me kujdesin më të madh për të reflektuar bukurinë e natyrës.
          </p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="product-card"
            >
              <div className="product-image">
                <div className="text-6xl">{product.emoji}</div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{formatPrice(product.price)}</span>
                  <ArrowRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn btn-secondary btn-lg">
            Shiko të Gjitha Produktet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}