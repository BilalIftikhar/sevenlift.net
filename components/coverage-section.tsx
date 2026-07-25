import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const regions = [
  {
    emoji: "⭐",
    area: "Abu Dhabi Services",
    locations: "Musaffah Industrial City, ICAD, Khalifa Industrial Zone (KIZAD), Mussafah Shabiya",
    href: "/locations/abu-dhabi-musaffah",
  },
  {
    emoji: "🏢",
    area: "Dubai Operations",
    locations: "Jebel Ali Free Zone (JAFZA), Dubai Industrial City, Al Quoz, Dubai Investment Park",
    href: "/locations/dubai",
  },
  {
    emoji: "🚀",
    area: "Northern Emirates",
    locations: "Sharjah Industrial Areas, Ajman Industrial Zone, Ras Al Khaimah, Fujairah",
    href: "/locations",
  },
  {
    emoji: "🏭",
    area: "Eastern Region",
    locations: "Al Ain industrial facilities and manufacturing zones",
    href: "/locations",
  },
]

export default function CoverageSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Complete UAE Coverage</p>
          <h2 className="mt-2 text-foreground">Industrial Equipment Network Across Every Emirate</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-muted-foreground">
            Our forklift, crane, and access equipment rental services extend across every emirate, with dedicated
            depots serving Abu Dhabi and Dubai.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {regions.map((region) => (
              <Link
                key={region.area}
                href={region.href}
                className="flex gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/40 hover:bg-secondary/60"
              >
                <span className="text-3xl">{region.emoji}</span>
                <div>
                  <h3 className="font-bold text-foreground">{region.area}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{region.locations}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/fleet/forklift-warehouse.jpg"
              alt="Forklift operating in a UAE warehouse"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="rounded-xl bg-accent p-8 text-center text-accent-foreground md:p-10">
          <h3 className="text-2xl font-extrabold md:text-3xl">Need Urgent Equipment Deployment?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm font-medium opacity-90 md:text-base">
            Our emergency response team can mobilize forklifts, cranes, and access equipment same-day, anywhere in
            the UAE.
          </p>
          <a
            href={siteConfig.telHref}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-accent transition-transform hover:scale-105"
          >
            <Phone size={18} />
            Call Now for Immediate Deployment
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
