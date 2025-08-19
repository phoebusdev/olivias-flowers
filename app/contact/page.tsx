import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt - Olivia's Flowers",
  description: "Na kontaktoni për çdo pyetje ose porosi",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-[#0a0a0a]">
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-[#f5f5dc] mb-6">
                  Na Kontaktoni
                </h1>
                <p className="text-lg text-[#f5f5dc]/70 max-w-2xl mx-auto">
                  Jemi këtu për të ju ndihmuar me çdo pyetje ose kërkesë të veçantë
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-serif text-[#f5f5dc] mb-8">
                    Informacione Kontakti
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#0a0a0a]" />
                      </div>
                      <div>
                        <h3 className="text-[#f5f5dc] font-medium mb-1">Telefon</h3>
                        <p className="text-[#f5f5dc]/70">+355 69 123 4567</p>
                        <p className="text-[#f5f5dc]/50 text-sm">E hënë - E diel, 9:00 - 20:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[#0a0a0a]" />
                      </div>
                      <div>
                        <h3 className="text-[#f5f5dc] font-medium mb-1">Email</h3>
                        <p className="text-[#f5f5dc]/70">info@oliviasflowers.al</p>
                        <p className="text-[#f5f5dc]/50 text-sm">Përgjigje brenda 24 orësh</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#0a0a0a]" />
                      </div>
                      <div>
                        <h3 className="text-[#f5f5dc] font-medium mb-1">Adresa</h3>
                        <p className="text-[#f5f5dc]/70">Rruga e Elbasanit</p>
                        <p className="text-[#f5f5dc]/70">Tiranë, Shqipëri</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#0a0a0a]" />
                      </div>
                      <div>
                        <h3 className="text-[#f5f5dc] font-medium mb-1">Orari i Punës</h3>
                        <div className="text-[#f5f5dc]/70 space-y-1">
                          <p>E Hënë - E Shtunë: 09:00 - 20:00</p>
                          <p>E Diel: 10:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
                    <h3 className="text-[#f5f5dc] font-medium mb-4">Na Ndiqni</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-[#f5f5dc]/60 hover:text-[#d4af37] hover:bg-[#2a2a2a] transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-[#f5f5dc]/60 hover:text-[#d4af37] hover:bg-[#2a2a2a] transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif text-[#f5f5dc] mb-8">
                    Na Shkruani një Mesazh
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}