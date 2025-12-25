"use client"

import Link from "next/link"
import { ChevronDown, Zap, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(0)

  const services = [
    {
      title: "Forklift Rental",
      icon: Zap,
      link: "/equipment/forklift",
      items: [
        "Forklifts ranging from 3 Ton to 25 Ton capacity",
        "Certified operators available for all operations",
        "Daily, weekly, and monthly rental options available",
        "Well-maintained machines with safety certifications",
      ],
    },
    {
      title: "Heavy Equipment Services",
      icon: Shield,
      link: "/equipment/mobile-crane",
      items: [
        "Side Loader for heavy container lifting operations",
        "Boom Loader for high-reach industrial applications",
        "Scissor Lift for safe elevated work platforms",
        "Low Bed & Flatbed transport solutions included",
      ],
    },
    {
      title: "Loading & Transportation",
      icon: TrendingUp,
      link: "/equipment/telehandler",
      items: [
        "Heavy machinery movement across all UAE regions",
        "Secure loading and professional unloading services",
        "Fast and reliable delivery with tracking",
        "Complete manpower and equipment solutions",
      ],
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-black text-sm uppercase tracking-widest">COMPREHENSIVE SOLUTIONS</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Our Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Tailored lifting and transportation solutions for every industry and project requirement
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="border-2 border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <button
                  onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={24} className="text-accent flex-shrink-0" />
                    <span className="font-black text-foreground text-lg">{service.title}</span>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-accent transition-transform duration-300 ${expanded === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {expanded === idx && (
                  <div className="px-6 md:px-8 py-6 bg-white border-t-2 border-border animate-in fade-in slide-in-from-top-2">
                    <ul className="space-y-4 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span className="text-accent font-black mt-1 text-xl flex-shrink-0">✓</span>
                          <span className="text-foreground font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-block px-6 py-3 bg-accent text-white font-black rounded-lg hover:bg-accent/90 transition-all duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
