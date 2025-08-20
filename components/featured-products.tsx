"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface Product {
  id: string
  title: string
  description: string
  price: number
  images: string[]
  slug: string
  featured: boolean
}

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFeaturedProducts()
  }, [])

  const loadFeaturedProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const allProducts = await response.json()
        // Show featured products first, then fallback to first 3 products
        const featured = allProducts.filter((p: Product) => p.featured)
        const products = featured.length > 0 ? featured.slice(0, 3) : allProducts.slice(0, 3)
        setFeaturedProducts(products)
      }
    } catch (error) {
      console.error('Error loading featured products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Produktet e Zgjedhura</h2>
            <p className="section-subtitle">
              Duke ngarkuar produktet...
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (featuredProducts.length === 0) {
    return null
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Produktet e Zgjedhura</h2>
          <p className="section-subtitle">
            Zbuloni koleksionin tonë më të dashur të krijimeve artistike
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white border border-[#e8d5d5] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#faf8f8] to-[#f5f0f0] relative overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl opacity-60">🌸</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#6b4444] mb-2 group-hover:text-[#9d6b6b] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#8b5a5a] text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif text-[#9d6b6b]">
                    {formatPrice(product.price)}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-[#8b5a5a] hover:text-[#6b4444] transition-colors group-hover:gap-3 duration-300"
                  >
                    <span className="text-sm font-medium">Detajet</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn btn-primary btn-lg">
            Shiko të Gjitha Produktet
          </Link>
        </div>
      </div>
    </section>
  )
}