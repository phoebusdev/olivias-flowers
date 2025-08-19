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
        <div className="hero-actions">
          <Link href="/products" className="btn btn-primary btn-lg">
            Shiko Produktet
          </Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">
            Kontaktoni
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-center transform translate-x-center animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-50" />
      </div>
    </section>
  )
}