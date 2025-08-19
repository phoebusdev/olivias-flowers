import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-serif text-[#d4af37]">Olivia's</span>
              <span className="text-2xl font-serif text-[#f5f5dc]">Flowers</span>
            </Link>
            <p className="text-[#f5f5dc]/60 text-sm">
              Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta.
            </p>
          </div>

          <div>
            <h3 className="text-[#f5f5dc] font-serif text-lg mb-4">Navigimi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors text-sm">
                  Ballina
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors text-sm">
                  Produktet
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors text-sm">
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#f5f5dc] font-serif text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-[#d4af37] mt-0.5" />
                <span className="text-[#f5f5dc]/60 text-sm">+355 69 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-[#d4af37] mt-0.5" />
                <span className="text-[#f5f5dc]/60 text-sm">info@oliviasflowers.al</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#d4af37] mt-0.5" />
                <span className="text-[#f5f5dc]/60 text-sm">Rruga e Elbasanit, Tiranë</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#f5f5dc] font-serif text-lg mb-4">Orari</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-[#d4af37] mt-0.5" />
                <div className="text-[#f5f5dc]/60 text-sm">
                  <p>E Hënë - E Shtunë: 09:00 - 20:00</p>
                  <p>E Diel: 10:00 - 18:00</p>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-[#f5f5dc]/40 text-sm">
            © 2024 Olivia's Flowers. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  )
}