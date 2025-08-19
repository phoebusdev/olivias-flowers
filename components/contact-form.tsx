"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { generateWhatsAppLink } from "@/lib/utils"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const whatsappMessage = `🌸 Mesazh i Ri nga Olivia's Flowers 🌸

Emri: ${formData.name}
Tel: ${formData.phone}
Email: ${formData.email}
Subjekti: ${formData.subject}

Mesazhi:
${formData.message}`

      const whatsappLink = generateWhatsAppLink("355691234567", whatsappMessage)
      window.open(whatsappLink, "_blank")
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Telefon *
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
            Subjekti
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37]"
          >
            <option value="">Zgjidhni një subjekt</option>
            <option value="Porosi">Porosi e Re</option>
            <option value="Pyetje">Pyetje të Përgjithshme</option>
            <option value="Dasma">Dekorime Dasme</option>
            <option value="Event">Evente të Veçanta</option>
            <option value="Shërbim">Cilësia e Shërbimit</option>
          </select>
        </div>

        <div>
          <label className="block text-[#f5f5dc] mb-1 text-sm">
            Mesazhi *
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#f5f5dc] focus:outline-none focus:border-[#d4af37] resize-none"
            placeholder="Shkruani mesazhin tuaj këtu..."
          />
        </div>

        <Button
          type="submit"
          variant="default"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Duke dërguar..." : "Dërgo Mesazhin"}
        </Button>
      </form>
    </div>
  )
}