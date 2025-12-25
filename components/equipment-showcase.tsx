"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Equipment {
  title: string
  image: string
  description: string
  features: string[]
}

export default function EquipmentShowcase() {
  const handleRequestQuote = () => {
    window.open("https://wa.me/971566390908?text=I%20am%20interested%20in%20equipment%20rental", "_blank")
  }

  const getDetailLink = (title: string) => {
    const links: { [key: string]: string } = {
      "Mobile Crane": "/equipment/mobile-crane",
      Telehandler: "/equipment/telehandler",
      "Man Lift / Aerial Platform": "/equipment/man-lift",
    }
    return links[title] || "/"
  }

  const equipment: Equipment[] = [
    {
      title: "Mobile Crane",
      image: "/images/mobile-crane.jpeg",
      description:
        "Heavy-duty mobile cranes engineered for large-scale lifting operations and complex construction projects with precision control.",
      features: [
        "25-500 ton capacity options",
        "Extendable boom reach up to 60m",
        "All-terrain capability",
        "Professional certified operators",
      ],
    },
    {
      title: "Telehandler",
      image: "/images/whatsapp-20image-202025-12-15-20at-2011.jpeg",
      description:
        "Versatile telehandlers designed for confined spaces with intelligent material positioning and maximum operational efficiency.",
      features: [
        "5-17 meter reach height",
        "3-10 ton load capacity",
        "Compact design for tight spaces",
        "Rotating jib attachment compatible",
      ],
    },
    {
      title: "Man Lift / Aerial Platform",
      image: "/images/whatsapp-20image-202025-12-06-20at-202.jpeg",
      description:
        "Safe elevated work platforms with advanced safety systems for maintenance, construction, and installation tasks at height.",
      features: [
        "10-50m working height",
        "Multiple platform configurations",
        "Advanced safety features",
        "Certified trained operators included",
      ],
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <p className="text-accent font-black text-sm uppercase tracking-widest">OUR PREMIUM FLEET</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">World-Class Equipment for Every Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            State-of-the-art heavy lifting and access equipment maintained to enterprise standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipment.map((item, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 animate-slide-up hover-lift flex flex-col"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300" />
              </div>

              <div className="p-8 space-y-6 flex flex-col justify-between flex-1">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{item.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-black text-accent uppercase tracking-widest">Key Features</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-sm text-foreground font-medium">
                          <span className="text-accent font-black flex-shrink-0 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Link
                    href={getDetailLink(item.title)}
                    className="flex-1 px-4 py-3 bg-secondary text-foreground font-black rounded-lg hover:bg-secondary/90 transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={handleRequestQuote}
                    className="flex-1 px-4 py-3 bg-primary text-primary-foreground font-black rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center gap-2"
                  >
                    Request Quote
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
