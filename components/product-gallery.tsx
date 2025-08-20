"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Filter, X } from "lucide-react"

interface Product {
  id: string
  title: string
  description: string
  price: number
  category: {
    id: string
    name: string
    slug: string
  }
  images: string[]
  slug: string
  active: boolean
}

interface Category {
  id: string
  name: string
  slug: string
}

const priceRanges = [
  { id: "all", label: "Të Gjitha", min: 0, max: Infinity },
  { id: "budget", label: "Nën 5,000 Lek", min: 0, max: 5000 },
  { id: "mid", label: "5,000 - 10,000 Lek", min: 5000, max: 10000 },
  { id: "premium", label: "Mbi 10,000 Lek", min: 10000, max: Infinity },
]

export function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [])

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      }
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (response.ok) {
        const data = await response.json()
        setCategories([
          { id: "all", name: "Të Gjitha", slug: "all" },
          ...data
        ])
      }
    } catch (error) {
      console.error('Error loading categories:', error)
    }
  }

  useEffect(() => {
    let filtered = products

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category.slug === selectedCategory)
    }

    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r) => r.id === selectedPriceRange)
      if (range) {
        filtered = filtered.filter(
          (p) => p.price >= range.min && p.price <= range.max
        )
      }
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedPriceRange, products])

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">
            Koleksioni Ynë
          </h1>
          <p className="section-subtitle">
            Zbuloni gjerësinë e plotë të krijimeve tona artistike
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden btn btn-secondary flex items-center gap-2"
          >
            {showFilters ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
            {showFilters ? "Mbyll Filtrat" : "Shfaq Filtrat"}
          </button>

          <aside
            className={`lg:w-64 space-y-6 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white border border-[#e8d5d5] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-serif text-[#6b4444] mb-4">Kategoritë</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === category.slug
                        ? "bg-[#9d6b6b] text-white"
                        : "text-[#8b5a5a] hover:bg-[#faf8f8] hover:text-[#6b4444]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e8d5d5] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-serif text-[#6b4444] mb-4">Çmimi</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      selectedPriceRange === range.id
                        ? "bg-[#9d6b6b] text-white"
                        : "text-[#8b5a5a] hover:bg-[#faf8f8] hover:text-[#6b4444]"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-[#8b5a5a] text-lg">
                  Duke ngarkuar produktet...
                </p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8b5a5a] text-lg">
                  Nuk u gjetën produkte për këtë filtrim.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedPriceRange("all")
                  }}
                  className="btn btn-primary mt-4"
                >
                  Pastro Filtrat
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="product-card group"
                  >
                    <div className="product-image">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-6xl">🌸</div>
                      )}
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        {product.title}
                      </h3>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <div className="product-footer">
                        <span className="product-price">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-[#a67373] text-sm group-hover:text-[#6b4444] transition-colors">
                          Shiko më shumë →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}