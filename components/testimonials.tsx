"use client"

import { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: "1",
    name: "Ana Marku",
    content: "Lule të mrekullueshme për dasmën tonë! Ekipi ishte profesional dhe krijues. Të gjithë mysafirët mbetën të impresionuar nga eleganca dhe bukuria e aranzhmaneve. Olivia's Flowers e bëri ditën tonë vërtetë të veçantë.",
    rating: 5,
    location: "Tiranë"
  },
  {
    id: "2",
    name: "Dritan Hoxha",
    content: "Porositëm një buqetë për ditëlindjen e nënës dhe ishte perfekte. Dorëzimi në kohë dhe cilësi e shkëlqyer. Nëna ime u emocionua shumë dhe tha se ishte buqeta më e bukur që kishte marrë ndonjëherë.",
    rating: 5,
    location: "Durrës"
  },
  {
    id: "3",
    name: "Elona Demi",
    content: "Shërbim i jashtëzakonshëm! Lulet ishin të freskëta dhe kompozimi ishte saktësisht siç e kishim imagjinuar. Çmimet janë të arsyeshme për cilësinë e lartë që ofrojnë. Do t'i rekomandoj të gjithëve.",
    rating: 5,
    location: "Vlorë"
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Çfarë Thonë Klientët</h2>
          <p className="section-subtitle">
            Historitë e suksesit nga klientët tanë të lumtur që kanë zgjedhur Olivia's Flowers 
            për momentet e tyre më të veçanta.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          <div className="testimonial-content">
            "{testimonials[currentIndex].content}"
          </div>

          <div className="testimonial-author">
            {testimonials[currentIndex].name}
          </div>
          <div className="text-sm opacity-60 mt-1">
            {testimonials[currentIndex].location}
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 text-white/50 hover:text-yellow-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-yellow-400 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 text-white/50 hover:text-yellow-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}