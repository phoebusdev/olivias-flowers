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
    <div className="bg-white border border-[#e8d5d5] rounded-xl p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#6b4444] mb-1 text-sm font-medium">
              Emri i Plotë *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#e8d5d5] rounded-lg text-[#6b4444] placeholder:text-[#a67373] focus:outline-none focus:border-[#9d6b6b] focus:ring-1 focus:ring-[#9d6b6b] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[#6b4444] mb-1 text-sm font-medium">
              Telefon *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#e8d5d5] rounded-lg text-[#6b4444] placeholder:text-[#a67373] focus:outline-none focus:border-[#9d6b6b] focus:ring-1 focus:ring-[#9d6b6b] transition-colors"
              placeholder="+355 6X XXX XXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#6b4444] mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-[#e8d5d5] rounded-lg text-[#6b4444] placeholder:text-[#a67373] focus:outline-none focus:border-[#9d6b6b] focus:ring-1 focus:ring-[#9d6b6b] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[#6b4444] mb-1 text-sm font-medium">
            Subjekti
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-[#e8d5d5] rounded-lg text-[#6b4444] focus:outline-none focus:border-[#9d6b6b] focus:ring-1 focus:ring-[#9d6b6b] transition-colors"
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
          <label className="block text-[#6b4444] mb-1 text-sm font-medium">
            Mesazhi *
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-3 py-2 bg-white border border-[#e8d5d5] rounded-lg text-[#6b4444] placeholder:text-[#a67373] focus:outline-none focus:border-[#9d6b6b] focus:ring-1 focus:ring-[#9d6b6b] transition-colors resize-none"
            placeholder="Shkruani mesazhin tuaj këtu..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Duke dërguar..." : "Dërgo Mesazhin"}
        </button>
      </form>
    </div>
  )
}