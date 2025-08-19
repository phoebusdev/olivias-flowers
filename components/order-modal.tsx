"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice, generateWhatsAppLink } from "@/lib/utils"

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    title: string
    price: number
    selectedSize: string
    selectedColor: string
  }
}

export function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deliveryDate: "",
    deliveryAddress: "",
    specialInstructions: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `🌸 Porosi e Re nga Olivia's Flowers 🌸

Produkti: ${product.title}
Madhësia: ${product.selectedSize}
Ngjyra: ${product.selectedColor}
Çmimi: ${formatPrice(product.price)}

Detajet e Klientit:
Emri: ${formData.name}
Tel: ${formData.phone}
Email: ${formData.email}

Dorëzimi:
Data: ${formData.deliveryDate}
Adresa: ${formData.deliveryAddress}

Instruksione: ${formData.specialInstructions || "Asnjë"}`
    
    const whatsappLink = generateWhatsAppLink("355691234567", message)
    window.open(whatsappLink, "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-[#f5f5dc]">Kompletoni Porosinë</h2>
            <button
              onClick={onClose}
              className="text-[#f5f5dc]/60 hover:text-[#f5f5dc] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-6 p-4 bg-[#1a1a1a] rounded-md">
            <p className="text-[#f5f5dc] font-serif">{product.title}</p>
            <p className="text-[#f5f5dc]/60 text-sm">
              {product.selectedSize} • {product.selectedColor}
            </p>
            <p className="text-[#d4af37] font-semibold mt-2">
              {formatPrice(product.price)}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#f5f5dc] mb-1 text-sm">
                Emri i Plotë *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-[#f5f5dc] mb-1 text-sm">
                Numri i Telefonit *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37]"
                placeholder="+355 6X XXX XXXX"
              />
            </div>

            <div>
              <label className="block text-[#f5f5dc] mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-[#f5f5dc] mb-1 text-sm">
                Data e Dorëzimit
              </label>
              <input
                type="date"
                value={formData.deliveryDate}
                onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-[#f5f5dc] mb-1 text-sm">
                Adresa e Dorëzimit
              </label>
              <input
                type="text"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-[#f5f5dc] mb-1 text-sm">
                Instruksione të Veçanta
              </label>
              <textarea
                value={formData.specialInstructions}
                onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37] resize-none"
                placeholder="P.sh. Kartë urimi, orë specifike dorëzimi..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" variant="default" className="flex-1">
                Dërgo në WhatsApp
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Anulo
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}