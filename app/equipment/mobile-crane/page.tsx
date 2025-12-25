"use client"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react"

export default function MobileCranePage() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/971566390908?text=I%20am%20interested%20in%20mobile%20crane%20rental%20services",
      "_blank",
    )
  }

  const handleCall = () => {
    window.location.href = "tel:+971566390908"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@sevenlift.net"
  }

  const cranes = [
    {
      capacity: "25 Ton",
      specs: ["Compact design", "25m boom reach", "Perfect for medium projects", "Precise load handling"],
      price: "From AED 3,000/day",
    },
    {
      capacity: "50 Ton",
      specs: ["Extended boom reach 35m", "Heavy-duty lifting", "All-terrain capability", "Certified operators"],
      price: "From AED 4,500/day",
    },
    {
      capacity: "100 Ton",
      specs: ["Large-scale projects", "50m boom reach", "Advanced safety systems", "Professional crew included"],
      price: "From AED 6,500/day",
    },
    {
      capacity: "500 Ton",
      specs: ["Mega lifting operations", "60m+ boom reach", "Complex project handling", "Expert engineering support"],
      price: "From AED 15,000/day",
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
          <h1 className="text-2xl font-black text-foreground">Mobile Crane Rentals</h1>
          <div />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Mobile Crane Rental Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Heavy-duty mobile cranes for large-scale construction and industrial lifting operations with precision
              control and certified expert operators.
            </p>
          </div>
        </div>
      </section>

      {/* Crane Models */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-16">
            <p className="text-accent font-black text-sm uppercase tracking-widest">OUR FLEET</p>
            <h2 className="text-4xl font-black text-foreground">Available Mobile Crane Models</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cranes.map((crane, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/50 rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-black text-foreground mb-2">{crane.capacity}</h3>
                    <p className="text-accent font-black text-sm uppercase tracking-widest">{crane.price}</p>
                  </div>

                  <ul className="space-y-3">
                    {crane.specs.map((spec, i) => (
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
            <p className="text-accent font-black text-sm uppercase tracking-widest">CAPABILITIES</p>
            <h2 className="text-4xl font-black text-foreground">Why Mobile Cranes from Seven Lift</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Operators", description: "Certified crane operators with 15+ years experience" },
              { title: "Safety First", description: "Advanced safety systems and full load monitoring" },
              { title: "Precision Lifting", description: "GPS and advanced positioning for precise placement" },
              { title: "Rapid Deployment", description: "Quick setup and mobilization to your project site" },
              { title: "All-Terrain Access", description: "Cranes accessible to remote and challenging locations" },
              { title: "Engineering Support", description: "Free lifting plan analysis and engineering consultation" },
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
          <h2 className="text-4xl font-black text-foreground">Need a Mobile Crane?</h2>
          <p className="text-xl text-muted-foreground font-medium">
            Get a free quote and professional consultation for your next lifting project.
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
