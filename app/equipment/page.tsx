"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Equipment {
  title: string
  image: string
  description: string
  specs: string[]
  link: string
}

export default function EquipmentPage() {
  const handleRequestQuote = () => {
    window.open("https://wa.me/971566390908?text=I%20am%20interested%20in%20equipment%20rental", "_blank")
  }

  const equipment: Equipment[] = [
    {
      title: "Forklift Rental",
      image: "/yellow-forklift-warehouse.jpg",
      description:
        "Complete forklift rental solutions with certified operators, flexible terms, and comprehensive maintenance for all warehouse and construction needs.",
      specs: ["3-25 Ton Capacity", "Certified Operators", "Daily/Weekly/Monthly Plans", "Full Insurance Included"],
      link: "/equipment/forklift",
    },
    {
      title: "Mobile Crane",
      image: "/images/mobile-crane.jpeg",
      description:
        "Heavy-duty mobile cranes engineered for large-scale lifting operations and complex construction projects with precision control and safety systems.",
      specs: ["25-500 Ton Capacity", "Up to 60m Reach", "All-Terrain Capability", "Professional Operators"],
      link: "/equipment/mobile-crane",
    },
    {
      title: "Telehandler",
      image: "/images/whatsapp-20image-202025-12-15-20at-2011.jpeg",
      description:
        "Versatile telehandlers designed for confined spaces with intelligent material positioning and maximum operational efficiency for diverse applications.",
      specs: ["5-17m Reach", "3-10 Ton Capacity", "Compact Design", "Jib Compatible"],
      link: "/equipment/telehandler",
    },
  ]

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4 animate-slide-up">
            <p className="text-accent font-black text-sm uppercase tracking-widest">OUR PREMIUM FLEET</p>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">Equipment Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              State-of-the-art heavy lifting and access equipment maintained to enterprise standards with certified
              operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, idx) => (
              <div
                key={idx}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 animate-slide-up flex flex-col"
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
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{item.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-black text-accent uppercase tracking-widest">Key Specifications</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {item.specs.map((spec, i) => (
                          <li key={i} className="text-sm font-medium text-foreground">
                            <span className="text-accent font-black">•</span> {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Link
                      href={item.link}
                      className="flex-1 px-4 py-3 bg-secondary text-foreground font-black rounded-lg hover:bg-secondary/90 transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={handleRequestQuote}
                      className="flex-1 px-4 py-3 bg-primary text-primary-foreground font-black rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center gap-2"
                    >
                      Quote
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
