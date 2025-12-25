"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Forklift Rental",
      icon: Zap,
      link: "/equipment/forklift",
      description: "Comprehensive forklift rental solutions for warehouses, construction, and industrial operations.",
      items: [
        "Forklifts ranging from 3 Ton to 25 Ton capacity",
        "Certified operators available for all operations",
        "Daily, weekly, and monthly rental options available",
        "Well-maintained machines with safety certifications",
        "Real-time equipment tracking and support",
        "Flexible scheduling and emergency availability",
      ],
    },
    {
      title: "Heavy Equipment Services",
      icon: Shield,
      link: "/equipment/mobile-crane",
      description: "Professional heavy equipment services for complex lifting and construction projects.",
      items: [
        "Mobile cranes with 25-500 ton capacity",
        "Side Loader for heavy container lifting operations",
        "Boom Loader for high-reach industrial applications",
        "Scissor Lift for safe elevated work platforms",
        "Low Bed & Flatbed transport solutions included",
        "Expert rigging and safety compliance throughout",
      ],
    },
    {
      title: "Loading & Transportation",
      icon: TrendingUp,
      link: "/equipment/telehandler",
      description: "Complete loading and transportation solutions across all UAE regions.",
      items: [
        "Heavy machinery movement across all UAE regions",
        "Secure loading and professional unloading services",
        "Fast and reliable delivery with tracking",
        "Complete manpower and equipment solutions",
        "Insurance coverage for all transported goods",
        "24/7 emergency transport available",
      ],
    },
  ]

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4 animate-slide-up">
            <p className="text-accent font-black text-sm uppercase tracking-widest">COMPREHENSIVE SOLUTIONS</p>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">Professional Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Tailored lifting and transportation solutions for every industry and project requirement with 24/7 support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 animate-slide-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="p-8 space-y-6 flex flex-col h-full">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-accent/10 rounded-lg">
                        <Icon size={32} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-black text-foreground">{service.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-medium">{service.description}</p>

                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-foreground font-medium">
                          <span className="text-accent font-black flex-shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-4">
                      <Link
                        href={service.link}
                        className="inline-block w-full px-6 py-3 bg-accent text-accent-foreground font-black rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:scale-105 duration-300 text-center"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
