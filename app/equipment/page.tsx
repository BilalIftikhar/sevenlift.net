import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig, waLink } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Fleet | Forklifts, Cranes, Telehandlers & Man Lifts",
  description:
    "Browse Seven Lift's full UAE rental fleet: 3-25 ton forklifts, 25-500 ton mobile cranes, telehandlers, and man lifts / aerial platforms. Certified operators and flexible terms included.",
  path: "/equipment",
})

interface Equipment {
  title: string
  image: string
  description: string
  specs: string[]
  link: string
}

const equipment: Equipment[] = [
  {
    title: "Forklift Rental",
    image: "/images/fleet/forklift-warehouse.jpg",
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
    image: "/images/fleet/telehandler-jcb.jpg",
    description:
      "Versatile telehandlers designed for confined spaces with intelligent material positioning and maximum operational efficiency for diverse applications.",
    specs: ["5-17m Reach", "3-10 Ton Capacity", "Compact Design", "Jib Compatible"],
    link: "/equipment/telehandler",
  },
  {
    title: "Man Lift / Aerial Platform",
    image: "/images/fleet/scissor-lift.jpg",
    description:
      "Scissor lifts and boom lifts for safe, elevated maintenance, installation, and construction work with advanced fall-protection systems.",
    specs: ["10-50m Working Height", "Scissor & Boom Types", "Indoor/Outdoor Use", "Trained Operators Included"],
    link: "/equipment/man-lift",
  },
]

export default function EquipmentPage() {
  const whatsappHref = waLink("I am interested in equipment rental.")

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Equipment", url: `${siteConfig.url}/equipment` },
        ])}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Premium Fleet</p>
            <h1 className="text-foreground">Equipment Rental Solutions</h1>
            <p className="text-lg font-medium text-muted-foreground">
              State-of-the-art heavy lifting and access equipment maintained to enterprise standards, with certified
              operators available across Abu Dhabi, Dubai, and the wider UAE.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {equipment.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-64 w-full bg-muted">
                    <Image
                      src={item.image}
                      alt={`${item.title} in the UAE`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-5 p-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-extrabold text-foreground">{item.title}</h2>
                      <p className="font-medium leading-relaxed text-muted-foreground">{item.description}</p>

                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-accent">Key Specifications</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {item.specs.map((spec) => (
                            <li key={spec} className="text-sm font-medium text-foreground">
                              <span className="font-bold text-accent">•</span> {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={item.link}
                        className="flex-1 rounded-lg bg-secondary px-4 py-3 text-center text-sm font-bold text-foreground transition-colors hover:bg-secondary/80"
                      >
                        View Details
                      </Link>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#1fb855]"
                      >
                        <WhatsAppIcon size={16} />
                        Quote
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
