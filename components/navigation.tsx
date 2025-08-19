"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Ballina" },
    { href: "/products", label: "Produktet" },
    { href: "/about", label: "Rreth Nesh" },
    { href: "/contact", label: "Kontakt" },
  ]

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="nav-content container">
        <Link href="/" className="nav-logo">
          Olivia's Flowers
        </Link>

        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+355691234567" className="nav-link flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+355 69 123 4567</span>
          </a>
          <Link href="/contact" className="btn btn-primary">
            Porosit Tani
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="container py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <a href="tel:+355691234567" className="nav-link flex items-center gap-2 mb-4">
                <Phone className="h-4 w-4" />
                <span>+355 69 123 4567</span>
              </a>
              <Link href="/contact" className="btn btn-primary w-full">
                Porosit Tani
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}