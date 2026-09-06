import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Timer, Gauge, Headset } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { services } from "@/lib/services"
import { equipmentCityLinksByEquipment } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Heavy Equipment Rental Services in the UAE",
  description:
    "Forklift, crane, telehandler & man lift rental across all seven emirates. Certified operators, full insurance, daily to monthly hire, 24/7 support.",
  path: "/services",
  keywords: [
    "heavy equipment rental UAE",
    "forklift rental UAE",
    "crane rental UAE",
    "telehandler rental UAE",
    "man lift rental UAE",
    "equipment rental all emirates",
  ],
})

const guarantees = [
  { icon: Gauge, title: "Full Capacity Range", description: "3 to 500+ ton equipment matched to your exact job requirements." },
  { icon: Timer, title: "Flexible Terms", description: "Daily, weekly, and monthly rental agreements, no long-term lock-in." },
  { icon: ShieldCheck, title: "Certified Operators", description: "Trained, licensed operators and full insurance on every rental." },
  { icon: Headset, title: "24/7 Emergency Support", description: "Rapid same-day deployment anywhere across the UAE." },
]

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Comprehensive Solutions</p>
            <h1 className="text-foreground">Professional Equipment Rental Services</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Tailored lifting and material handling solutions for every industry and project requirement — with
              dedicated support for Abu Dhabi (Musaffah, ICAD) and Dubai (JAFZA, Al Quoz) operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 100} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full bg-muted">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-8">
                    <div className="space-y-3">
                      <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                        {service.capacityRange}
                      </span>
                      <h2 className="text-2xl font-extrabold text-foreground">{service.title}</h2>
                      <p className="font-medium leading-relaxed text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                      View Service Details
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <section className="mt-20">
            <Reveal className="mb-10 max-w-3xl space-y-3">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">UAE-Wide Coverage</p>
              <h2 className="text-foreground">Equipment Rental by City</h2>
              <p className="font-medium text-muted-foreground">
                Every equipment type, in every emirate. Pick your city for local coverage areas, delivery lead
                times, and the fleet we hold for that region.
              </p>
            </Reveal>

            <div className="space-y-10">
              {equipmentCityLinksByEquipment().map(({ equipment, links }) => (
                <Reveal key={equipment.key} className="rounded-xl border border-border bg-card p-7">
                  <div className="mb-5 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl font-extrabold text-foreground">{equipment.label} Rental</h3>
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {equipment.capacityRange}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {links.map((link) => (
                      <Link
                        key={link.slug}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {link.cityName}
                        <ArrowRight size={13} />
                      </Link>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={idx * 80} className="bg-card">
                  <div className="flex flex-col gap-3 p-6">
                    <Icon size={26} className="text-accent" />
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
