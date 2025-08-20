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
      <main className="pt-20 min-h-screen">
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="section-header">
                <h1 className="section-title">
                  Rreth Nesh
                </h1>
                <p className="section-subtitle text-accent font-serif">
                  Çdo Kompozim Tregon një Histori
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-serif text-[#6b4444] mb-6">
                    Historia Jonë
                  </h2>
                  <div className="space-y-4 text-[#8b5a5a] leading-relaxed">
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
                <div className="aspect-square bg-gradient-to-br from-[#faf8f8] to-[#f5f0f0] rounded-lg border border-[#e8d5d5] flex items-center justify-center text-6xl">🌺</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9d6b6b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-white">✿</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#6b4444] mb-2">
                    Cilësi e Lartë
                  </h3>
                  <p className="text-[#8b5a5a] text-sm">
                    Përdorim vetëm lulet më të freskëta dhe cilësore për të gjitha kompozimet tona
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9d6b6b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-white">❀</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#6b4444] mb-2">
                    Dizajn Unik
                  </h3>
                  <p className="text-[#8b5a5a] text-sm">
                    Çdo kompozim është i personalizuar dhe i krijuar sipas dëshirave tuaja
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9d6b6b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-white">✾</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#6b4444] mb-2">
                    Shërbim i Shpejtë
                  </h3>
                  <p className="text-[#8b5a5a] text-sm">
                    Dorëzim i shpejtë dhe profesional në të gjithë qytetin e Tiranës
                  </p>
                </div>
              </div>

              <div className="text-center bg-white border border-[#e8d5d5] rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-serif text-[#6b4444] mb-4">
                  Misioni Ynë
                </h3>
                <p className="text-[#8b5a5a] text-lg leading-relaxed max-w-3xl mx-auto">
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