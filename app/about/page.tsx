import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
import { abuDhabiAreas } from "@/lib/abu-dhabi-areas"

const path = "/about"

export const metadata: Metadata = pageMetadata({
  title: "About Seven Lift | Equipment Rental Since 2010",
  description:
    "Seven Lift General Transport L.L.C. rents forklifts, mobile cranes, telehandlers and man lifts across the UAE from its yard in Musaffah, Abu Dhabi.",
  path,
})

/**
 * Company facts in a plain label/value list. Answer engines lift short,
 * specific statements like these far more readily than marketing copy, so
 * every value here must stay factual and match siteConfig.
 */
const facts: { label: string; value: string }[] = [
  { label: "Legal name", value: siteConfig.legalName },
  { label: "Founded", value: `${siteConfig.foundingYear}` },
  {
    label: "Yard & head office",
    value: `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, United Arab Emirates`,
  },
  { label: "Equipment", value: "Forklifts, mobile cranes, telehandlers, man lifts (scissor and boom lifts)" },
  {
    label: "Capacity range",
    value: "Forklifts 3–25 ton · Mobile cranes 25–500 ton · Telehandlers 3–10 ton, 5–17 m reach · Man lifts 10–50 m",
  },
  { label: "Coverage", value: "All seven emirates, with same-day dispatch across Abu Dhabi" },
  { label: "Operators", value: "Certified, licensed operators and riggers available with every machine" },
  { label: "Hire terms", value: "Daily, weekly, and monthly" },
  { label: "Hours", value: "24/7, including emergency breakdown replacement" },
  { label: "Phone & WhatsApp", value: siteConfig.phoneDisplay },
  { label: "Email", value: siteConfig.email },
]

export default function AboutPage() {
  const url = `${siteConfig.url}${path}`

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About", url },
          ]),
          aboutPageSchema(url),
        ]}
      />
      <Header />

      <section className="bg-gradient-to-b from-background to-secondary pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl space-y-6 px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">About Us</p>
          <h1 className="text-foreground">About Seven Lift General Transport</h1>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            Seven Lift General Transport L.L.C. is a heavy equipment rental company based in Musaffah Industrial Area,
            Abu Dhabi. Since {siteConfig.foundingYear} we have rented forklifts, mobile cranes, telehandlers, and man
            lifts to contractors, factories, warehouses, and facility managers, with certified operators available for
            every machine.
          </p>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            Our fleet is kept in Musaffah, which puts ICAD, Mohammed Bin Zayed City, Mafraq, and most of Abu Dhabi
            within easy reach for same-day delivery. From there we run scheduled routes to Dubai, the Northern
            Emirates, Al Ain, and the east coast.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">Company Facts</h2>
          </Reveal>
          <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{fact.label}</dt>
                <dd className="font-semibold text-foreground sm:col-span-2">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4">
          <h2 className="text-foreground">How We Work</h2>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            We size the machine to the job rather than sending whatever is free. Before quoting, we ask for the
            heaviest load, the working height or reach, the ground conditions, and the site&apos;s access and
            permit requirements. Where it matters, we survey the site first.
          </p>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            Every rental includes insurance, preventive maintenance, and breakdown replacement. We supply load
            charts, third-party inspection certificates, and operator certifications with the machine, and crane
            jobs come with a documented lift plan and certified riggers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl text-foreground">Services</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent">
                    {service.title} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl text-foreground">Abu Dhabi Districts</h2>
            <ul className="space-y-2">
              {abuDhabiAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent">
                    {area.name} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl text-foreground">Emirates</h2>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link href={location.href} className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent">
                    {location.shortTitle} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
