"use client"

import Link from "next/link"
import { ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react"

export default function TelehandlerPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971566390908?text=I%20am%20interested%20in%20telehandler%20rental%20services", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+971566390908"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@sevenlift.net"
  }

  const telehandlers = [
    {
      capacity: "5 Meter",
      specs: ["3-ton load capacity", "Confined space access", "Indoor/outdoor use", "Easy maneuverability"],
      price: "From AED 1,800/day",
    },
    {
      capacity: "8 Meter",
      specs: ["5-ton load capacity", "Extended reach capability", "Rotating turret", "Compact footprint"],
      price: "From AED 2,500/day",
    },
    {
      capacity: "12 Meter",
      specs: ["7-ton load capacity", "Wide reach coverage", "Multiple attachment options", "Precision positioning"],
      price: "From AED 3,200/day",
    },
    {
      capacity: "17 Meter",
      specs: ["10-ton load capacity", "Maximum height reach", "Advanced stability systems", "Professional operators"],
      price: "From AED 4,200/day",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-bold"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-2xl font-black text-foreground">Telehandler Rentals</h1>
          <div />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Telehandler & Reach Forklift Rentals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Versatile telehandlers engineered for confined spaces with intelligent material positioning and maximum
              operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Telehandler Models */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-16">
            <p className="text-accent font-black text-sm uppercase tracking-widest">OUR FLEET</p>
            <h2 className="text-4xl font-black text-foreground">Available Telehandler Models</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {telehandlers.map((tele, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/50 rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-black text-foreground mb-2">{tele.capacity}</h3>
                    <p className="text-accent font-black text-sm uppercase tracking-widest">{tele.price}</p>
                  </div>

                  <ul className="space-y-3">
                    {tele.specs.map((spec, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground font-medium">
                        <span className="text-accent font-black flex-shrink-0 mt-0.5">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full px-4 py-3 bg-accent text-white font-black rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg duration-300"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-16">
            <p className="text-accent font-black text-sm uppercase tracking-widest">APPLICATIONS</p>
            <h2 className="text-4xl font-black text-foreground">Telehandler Applications & Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Versatile Attachments", description: "Compatible with buckets, forks, booms, and more" },
              { title: "Confined Space Expert", description: "Perfect for tight spaces where cranes cannot fit" },
              { title: "Precise Positioning", description: "Advanced control systems for exact material placement" },
              { title: "Material Handling", description: "Ideal for construction, landscaping, and farming" },
              { title: "Time Efficient", description: "Quick deployment and minimal setup required" },
              { title: "Cost Effective", description: "Lower operational costs than traditional equipment" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border/50 space-y-3">
                <h3 className="font-black text-lg text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-black text-foreground">Need a Telehandler?</h2>
          <p className="text-xl text-muted-foreground font-medium">
            Contact us for flexible rental options and professional operator support.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-black rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              <Phone size={20} />
              Call Us
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-secondary text-foreground font-black rounded-lg hover:bg-secondary/90 transition-all duration-300"
            >
              <Mail size={20} />
              Email Us
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-accent text-white font-black rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
