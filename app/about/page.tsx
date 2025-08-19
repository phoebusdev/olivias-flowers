import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rreth Nesh - Olivia's Flowers",
  description: "Mësoni më shumë rreth historisë dhe misionit tonë",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-[#0a0a0a]">
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-[#f5f5dc] mb-6">
                  Rreth Nesh
                </h1>
                <p className="text-xl text-[#d4af37] font-serif">
                  Çdo Kompozim Tregon një Histori
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-serif text-[#f5f5dc] mb-6">
                    Historia Jonë
                  </h2>
                  <div className="space-y-4 text-[#f5f5dc]/80 leading-relaxed">
                    <p>
                      Olivia's Flowers u themelua me një pasion të thellë për bukurinë 
                      e natyrës dhe artit të kompozimeve florale. Çdo krijim është një 
                      vepër arti unike, e krijuar me kujdes për të kapur momentet tuaja të veçanta.
                    </p>
                    <p>
                      Me vite përvojë në industrinë e luleve, ne kemi ndërtuar një 
                      reputacion për cilësi të lartë, kreativitet dhe shërbim të 
                      jashtëzakonshëm ndaj klientëve tanë.
                    </p>
                    <p>
                      Specialiteti ynë është krijimi i kompozimeve që reflektojnë 
                      personalitetin dhe emocionet tuaja, duke i kthyer momentet e 
                      rëndësishme në kujtime të paharrueshme.
                    </p>
                  </div>
                </div>
                <div className="aspect-square bg-[#1a1a1a] rounded-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-[#0a0a0a]">✿</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#f5f5dc] mb-2">
                    Cilësi e Lartë
                  </h3>
                  <p className="text-[#f5f5dc]/60 text-sm">
                    Përdorim vetëm lulet më të freskëta dhe cilësore për të gjitha kompozimet tona
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-[#0a0a0a]">❀</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#f5f5dc] mb-2">
                    Dizajn Unik
                  </h3>
                  <p className="text-[#f5f5dc]/60 text-sm">
                    Çdo kompozim është i personalizuar dhe i krijuar sipas dëshirave tuaja
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-[#0a0a0a]">✾</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#f5f5dc] mb-2">
                    Shërbim i Shpejtë
                  </h3>
                  <p className="text-[#f5f5dc]/60 text-sm">
                    Dorëzim i shpejtë dhe profesional në të gjithë qytetin e Tiranës
                  </p>
                </div>
              </div>

              <div className="text-center bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-8">
                <h3 className="text-2xl font-serif text-[#f5f5dc] mb-4">
                  Misioni Ynë
                </h3>
                <p className="text-[#f5f5dc]/80 text-lg leading-relaxed max-w-3xl mx-auto">
                  Të sjellim bukurinë dhe gëzimin në jetën e çdo klienti përmes 
                  artit tonë floral. Besojmë se lulet kanë fuqinë të shprehin emocionet 
                  më të thella dhe të krijojnë lidhje të veçanta mes njerëzve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}