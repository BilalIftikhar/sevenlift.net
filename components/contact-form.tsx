"use client"

import type React from "react"
import { useId, useState } from "react"
import { CheckCircle2, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackLead } from "@/components/lead-tracking"
import { siteConfig, waLink } from "@/lib/site-config"

type FormFields = {
  name: string
  phone: string
  email: string
  company: string
  equipment: string
  location: string
  message: string
  website: string
}

const equipmentOptions = [
  "Forklift",
  "Mobile Crane",
  "Telehandler",
  "Man Lift / Scissor Lift / Boom Lift",
  "Other / Not sure",
]

type ContactFormProps = {
  /** Compact card for page heroes; the full version sits on /contact and the homepage. */
  variant?: "hero" | "full"
  heading?: string
  defaultEquipment?: string
  defaultLocation?: string
  /** Analytics label for where on the page the form sits. */
  placement?: string
}

type Status = "idle" | "sending" | "sent" | "error"

/**
 * Quote request form that emails the sales inbox through /api/quote, so a
 * visitor who does not use WhatsApp can still reach us. Used in every page hero.
 */
export function ContactForm({
  variant = "full",
  heading = "Get a Free Quote",
  defaultEquipment = "",
  defaultLocation = "",
  placement = "contact-form",
}: ContactFormProps) {
  const id = useId()
  const [status, setStatus] = useState<Status>("idle")
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    company: "",
    equipment: defaultEquipment,
    location: defaultLocation,
    message: "",
    website: "",
  })
  const hero = variant === "hero"

  const update = (field: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [field]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, page: window.location.pathname }),
      })
      if (!response.ok) throw new Error(`Quote request failed: ${response.status}`)
      trackLead("form", placement)
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  /** Same details as a WhatsApp message, so a failed send does not lose the lead. */
  const whatsappFallback = () =>
    waLink(
      [
        "Hi Seven Lift, I'd like a quote.",
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        formData.email && `Email: ${formData.email}`,
        formData.equipment && `Equipment: ${formData.equipment}`,
        formData.location && `Site: ${formData.location}`,
        formData.message && `Details: ${formData.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    )

  const inputClass = hero
    ? "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors focus:border-accent focus:outline-none"
    : "w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium transition-colors focus:border-accent focus:outline-none"
  const labelClass = hero
    ? "mb-1 block text-xs font-bold uppercase tracking-wide text-foreground"
    : "mb-2 block text-sm font-bold uppercase tracking-wide text-foreground"

  if (status === "sent") {
    return (
      <div className={hero ? "rounded-2xl bg-card p-6 text-foreground shadow-2xl" : ""} role="status">
        <CheckCircle2 size={36} className="mb-3 text-accent" />
        <p className="text-lg font-extrabold">Thanks, {formData.name.split(" ")[0]}. Your request is in.</p>
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Our team will reply by phone or email, usually within the hour. For an urgent job, call{" "}
          <a href={siteConfig.telHref} className="font-bold text-primary">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={hero ? "space-y-3 rounded-2xl bg-card p-6 text-foreground shadow-2xl ring-1 ring-black/5" : "space-y-5"}
    >
      {hero && (
        <div className="pb-1">
          <p className="text-lg font-extrabold text-foreground">{heading}</p>
          <p className="text-xs font-medium text-muted-foreground">Reply by phone or email, usually within the hour.</p>
        </div>
      )}

      {/* Honeypot, hidden from people and screen readers. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={formData.website}
        onChange={update("website")}
        className="hidden"
      />

      <div className={hero ? "grid gap-3 sm:grid-cols-2" : "grid gap-5 md:grid-cols-2"}>
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Full Name
          </label>
          <input id={`${id}-name`} type="text" required minLength={2} value={formData.name} onChange={update("name")} className={inputClass} placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Phone
          </label>
          <input id={`${id}-phone`} type="tel" required value={formData.phone} onChange={update("phone")} className={inputClass} placeholder="+971 5X XXX XXXX" autoComplete="tel" />
        </div>
      </div>

      <div className={hero ? "grid gap-3 sm:grid-cols-2" : "grid gap-5 md:grid-cols-2"}>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input id={`${id}-email`} type="email" value={formData.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor={`${id}-equipment`} className={labelClass}>
            Equipment
          </label>
          <select id={`${id}-equipment`} value={formData.equipment} onChange={update("equipment")} className={inputClass}>
            <option value="">Select equipment</option>
            {equipmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            {defaultEquipment && !equipmentOptions.includes(defaultEquipment) && (
              <option value={defaultEquipment}>{defaultEquipment}</option>
            )}
          </select>
        </div>
      </div>

      {!hero && (
        <div>
          <label htmlFor={`${id}-company`} className={labelClass}>
            Company
          </label>
          <input id={`${id}-company`} type="text" value={formData.company} onChange={update("company")} className={inputClass} placeholder="Your company" autoComplete="organization" />
        </div>
      )}

      <div>
        <label htmlFor={`${id}-location`} className={labelClass}>
          Site Location
        </label>
        <input id={`${id}-location`} type="text" value={formData.location} onChange={update("location")} className={inputClass} placeholder="e.g. ICAD II, Abu Dhabi" />
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          Job Details
        </label>
        <textarea
          id={`${id}-message`}
          value={formData.message}
          onChange={update("message")}
          className={`${inputClass} resize-none ${hero ? "h-20" : "h-32"}`}
          placeholder="Load weight, working height, rental period..."
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive" role="alert">
          We could not send the form just now. Please email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-bold underline">
            {siteConfig.email}
          </a>{" "}
          or call{" "}
          <a href={siteConfig.telHref} className="font-bold underline">
            {siteConfig.phoneDisplay}
          </a>
          , or{" "}
          <a href={whatsappFallback()} target="_blank" rel="noopener noreferrer" className="font-bold underline">
            send these details on WhatsApp
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent py-3 font-bold text-accent-foreground transition-all hover:scale-[1.01] hover:bg-accent/90 hover:shadow-lg disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Request a Quote"}
      </Button>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground">
        <a href={siteConfig.telHref} className="inline-flex items-center gap-1 hover:text-accent">
          <Phone size={12} /> {siteConfig.phoneDisplay}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1 hover:text-accent">
          <Mail size={12} /> {siteConfig.email}
        </a>
      </div>
    </form>
  )
}
