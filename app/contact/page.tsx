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
      <main className="pt-20 min-h-screen">
        <section className="section">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="section-header">
                <h1 className="section-title">
                  Na Kontaktoni
                </h1>
                <p className="section-subtitle">
                  Jemi këtu për të ju ndihmuar me çdo pyetje ose kërkesë të veçantë
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-serif text-[#6b4444] mb-8">
                    Informacione Kontakti
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#9d6b6b] rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#6b4444] font-medium mb-1">Telefon</h3>
                        <p className="text-[#8b5a5a]">+355 69 123 4567</p>
                        <p className="text-[#a67373] text-sm">E hënë - E diel, 9:00 - 20:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#9d6b6b] rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#6b4444] font-medium mb-1">Email</h3>
                        <p className="text-[#8b5a5a]">info@oliviasflowers.al</p>
                        <p className="text-[#a67373] text-sm">Përgjigje brenda 24 orësh</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#9d6b6b] rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#6b4444] font-medium mb-1">Adresa</h3>
                        <p className="text-[#8b5a5a]">Rruga e Elbasanit</p>
                        <p className="text-[#8b5a5a]">Tiranë, Shqipëri</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#9d6b6b] rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#6b4444] font-medium mb-1">Orari i Punës</h3>
                        <div className="text-[#8b5a5a] space-y-1">
                          <p>E Hënë - E Shtunë: 09:00 - 20:00</p>
                          <p>E Diel: 10:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#e8d5d5]">
                    <h3 className="text-[#6b4444] font-medium mb-4">Na Ndiqni</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#faf8f8] border border-[#e8d5d5] rounded-full flex items-center justify-center text-[#8b5a5a] hover:text-[#9d6b6b] hover:bg-white transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#faf8f8] border border-[#e8d5d5] rounded-full flex items-center justify-center text-[#8b5a5a] hover:text-[#9d6b6b] hover:bg-white transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif text-[#6b4444] mb-8">
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