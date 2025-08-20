import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8d5d5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <h2 className="text-2xl font-serif font-medium text-[#6b4444]">
                  Olivia's Flowers
                </h2>
              </Link>
              <p className="text-[#8b5a5a] leading-relaxed mb-8 max-w-sm">
                Çdo krijim është një vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#6b4444]">Na ndiqni:</span>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#faf8f8] border border-[#e8d5d5] flex items-center justify-center text-[#8b5a5a] hover:text-[#6b4444] hover:bg-white hover:border-[#9d6b6b] transition-all duration-200"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#faf8f8] border border-[#e8d5d5] flex items-center justify-center text-[#8b5a5a] hover:text-[#6b4444] hover:bg-white hover:border-[#9d6b6b] transition-all duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-sm font-semibold text-[#6b4444] tracking-wider uppercase mb-6">
                Navigimi
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#8b5a5a] hover:text-[#6b4444] transition-colors duration-200 block py-1">
                    Ballina
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-[#8b5a5a] hover:text-[#6b4444] transition-colors duration-200 block py-1">
                    Produktet
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#8b5a5a] hover:text-[#6b4444] transition-colors duration-200 block py-1">
                    Rreth Nesh
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#8b5a5a] hover:text-[#6b4444] transition-colors duration-200 block py-1">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-[#6b4444] tracking-wider uppercase mb-6">
                Kontakt
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9d6b6b]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-[#9d6b6b]" />
                  </div>
                  <span className="text-[#8b5a5a]">+355 69 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9d6b6b]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-[#9d6b6b]" />
                  </div>
                  <span className="text-[#8b5a5a]">info@oliviasflowers.al</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9d6b6b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-[#9d6b6b]" />
                  </div>
                  <div className="text-[#8b5a5a]">
                    <p>Rruga e Elbasanit</p>
                    <p>Tiranë, Shqipëri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-[#6b4444] tracking-wider uppercase mb-6">
                Orari i Punës
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9d6b6b]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-[#9d6b6b]" />
                  </div>
                  <div className="text-[#8b5a5a] text-sm leading-relaxed">
                    <p className="font-medium">E Hënë - E Shtunë</p>
                    <p className="text-[#a67373]">09:00 - 20:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9d6b6b]/10 flex items-center justify-center flex-shrink-0 opacity-60">
                    <Clock className="h-4 w-4 text-[#9d6b6b]" />
                  </div>
                  <div className="text-[#8b5a5a] text-sm leading-relaxed">
                    <p className="font-medium">E Diel</p>
                    <p className="text-[#a67373]">10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e8d5d5] py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[#a67373]">
              © 2024 Olivia's Flowers. Të gjitha të drejtat e rezervuara.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-[#a67373] hover:text-[#6b4444] transition-colors">
                Kushtet e Shërbimit
              </a>
              <a href="#" className="text-[#a67373] hover:text-[#6b4444] transition-colors">
                Privatësia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}