"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { waLink } from "@/lib/site-config"

type FormFields = {
  name: string
  email: string
  phone: string
  company: string
  equipment: string
  message: string
}

const initialState: FormFields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  equipment: "",
  message: "",
}

export function ContactForm({ showEquipmentSelect = false }: { showEquipmentSelect?: boolean }) {
  const [formData, setFormData] = useState<FormFields>(initialState)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      `Hi Seven Lift, I'd like to request equipment rental information.`,
      `Name: ${formData.name}`,
      formData.company ? `Company: ${formData.company}` : "",
      formData.equipment ? `Equipment: ${formData.equipment}` : "",
      formData.message ? `Message: ${formData.message}` : "",
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
    ].filter(Boolean)
    window.open(waLink(lines.join("\n")), "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-bold uppercase tracking-wide text-foreground">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase tracking-wide text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold uppercase tracking-wide text-foreground">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
            placeholder="+971 56 XXX XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-bold uppercase tracking-wide text-foreground">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
          placeholder="Your company"
        />
      </div>

      {showEquipmentSelect && (
        <div>
          <label htmlFor="equipment" className="mb-2 block text-sm font-bold uppercase tracking-wide text-foreground">
            Equipment Needed
          </label>
          <select
            id="equipment"
            value={formData.equipment}
            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
            className="w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
          >
            <option value="">Select equipment type</option>
            <option value="Forklift Rental">Forklift Rental</option>
            <option value="Mobile Crane">Mobile Crane</option>
            <option value="Telehandler">Telehandler</option>
            <option value="Man Lift / Aerial Platform">Man Lift / Aerial Platform</option>
            <option value="Other">Other</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold uppercase tracking-wide text-foreground">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="h-32 w-full resize-none rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
          placeholder="Tell us about your equipment rental requirements..."
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-lg bg-accent py-3 font-bold text-accent-foreground transition-all hover:scale-[1.01] hover:bg-accent/90 hover:shadow-lg"
      >
        Send via WhatsApp
      </Button>
    </form>
  )
}
