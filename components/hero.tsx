"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">Olivia's Flowers</h1>
        <p className="hero-subtitle text-accent">Çdo Kompozim Tregon një Histori</p>
        <p className="hero-description">
          Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta. 
          Ne sjellim bukurinë e natyrës në jetën tuaj përmes kompozimeve të sofistikuara dhe dizajnit kreativ.
        </p>
        <div className="hero-actions mb-16">
          <Link href="/products" className="btn btn-primary btn-lg">
            Shiko Produktet
          </Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">
            Kontaktoni
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-6 w-6 text-current opacity-30" />
      </div>
    </section>
  )
}