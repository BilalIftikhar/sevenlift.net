"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type React from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    equipment: "",
    message: "",
  })

  const handleCall = () => {
    window.location.href = "tel:+971566390908"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@sevenlift.net"
  }

  const handleWhatsApp = () => {
    const message = `Hi Seven Lift, I am interested in equipment rental. Name: ${formData.name}, Company: ${formData.company}, Equipment: ${formData.equipment}`
    window.open(`https://wa.me/971566390908?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleWhatsApp()
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4 animate-slide-up">
            <p className="text-accent font-black text-sm uppercase tracking-widest">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Reach out for instant quotes, equipment inquiries, or schedule a consultation with our experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <button
                onClick={handleCall}
                className="flex gap-4 p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 w-full text-left hover:shadow-lg hover:scale-105"
              >
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-black text-foreground text-sm uppercase tracking-widest">Phone / WhatsApp</p>
                  <p className="text-accent font-black text-2xl mt-1">+971 56 639 0908</p>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="flex gap-4 p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 w-full text-left hover:shadow-lg hover:scale-105"
              >
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-black text-foreground text-sm uppercase tracking-widest">Email</p>
                  <p className="text-foreground font-semibold">info@sevenlift.net</p>
                </div>
              </button>

              <div className="flex gap-4 p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-black text-foreground text-sm uppercase tracking-widest">Availability</p>
                  <p className="text-foreground font-semibold">24/7 Available - Emergency Support</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-black text-foreground text-sm uppercase tracking-widest">Service Area</p>
                  <p className="text-foreground font-semibold">All UAE Regions - Same Day Service</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <MessageCircle size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-black text-foreground text-sm uppercase tracking-widest">Response Time</p>
                  <p className="text-foreground font-semibold">Under 5 Minutes Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 rounded-xl border-2 border-border hover:border-accent/50 transition-colors duration-300 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-black text-foreground mb-2 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white font-medium"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-black text-foreground mb-2 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white font-medium"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-foreground mb-2 uppercase tracking-widest">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white font-medium"
                      placeholder="+971 56 XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-foreground mb-2 uppercase tracking-widest">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white font-medium"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-foreground mb-2 uppercase tracking-widest">
                    Equipment Needed
                  </label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white font-medium"
                  >
                    <option value="">Select equipment type</option>
                    <option value="Forklift Rental">Forklift Rental</option>
                    <option value="Mobile Crane">Mobile Crane</option>
                    <option value="Telehandler">Telehandler</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-foreground mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white h-32 resize-none font-medium"
                    placeholder="Tell us about your equipment rental requirements..."
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-black py-3 rounded-lg transition-all hover:shadow-lg hover:scale-105 duration-300">
                  SEND VIA WHATSAPP
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
