import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { waLink } from "@/lib/site-config"

interface Equipment {
  title: string
  image: string
  description: string
  features: string[]
  detailLink: string
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
    detailLink: "/services/mobile-crane-rental-uae",
  },
  {
    title: "Telehandler",
    image: "/images/fleet/telehandler-jcb.jpg",
    description:
      "Versatile telehandlers designed for confined spaces with intelligent material positioning and maximum operational efficiency.",
    features: [
      "5-17 meter reach height",
      "3-10 ton load capacity",
      "Compact design for tight spaces",
      "Rotating jib attachment compatible",
    ],
    detailLink: "/services/telehandler-rental",
  },
  {
    title: "Man Lift / Aerial Platform",
    image: "/images/fleet/scissor-lift.jpg",
    description:
      "Safe elevated work platforms with advanced safety systems for maintenance, construction, and installation tasks at height.",
    features: [
      "10-50m working height",
      "Multiple platform configurations",
      "Advanced safety features",
      "Certified trained operators included",
    ],
    detailLink: "/services/man-lift-access",
  },
]

export default function EquipmentShowcase() {
  const whatsappHref = waLink("I am interested in equipment rental.")

  return (
    <section className="w-full bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Premium Fleet</p>
          <h2 className="text-foreground">World-Class Equipment for Every Project</h2>
          <p className="text-lg font-medium text-muted-foreground">
            State-of-the-art heavy lifting and access equipment maintained to enterprise standards
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {equipment.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-64 w-full bg-muted">
                <Image
                  src={item.image}
                  alt={`${item.title} rental in the UAE`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-5 p-7">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm font-medium text-foreground">
                        <span className="mt-0.5 shrink-0 text-accent">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={item.detailLink}
                    className="flex-1 rounded-lg bg-secondary px-4 py-3 text-center text-sm font-bold text-foreground transition-colors hover:bg-secondary/80"
                  >
                    Learn More
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Get Quote
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
