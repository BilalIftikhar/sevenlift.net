import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { locations } from "@/lib/locations"
import { serviceAreas, siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Service Areas | Heavy Equipment Rental Coverage in the UAE",
  description:
    "Seven Lift General Transport delivers forklift, mobile crane, telehandler, and man lift rentals across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Al Ain.",
  path: "/locations",
})

export default function LocationsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Locations", url: `${siteConfig.url}/locations` },
        ])}
      />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">UAE Service Network</p>
            <h1 className="text-foreground">Where We Operate</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Dedicated equipment depots and rapid-response teams serving Abu Dhabi and Dubai's industrial zones,
              with fleet coverage across every emirate.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={location.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 w-full bg-muted">
                  <Image
                    src={location.heroImage}
                    alt={location.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-8">
                  <div className="space-y-3">
                    <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {location.emirate}
                    </span>
                    <h2 className="text-2xl font-extrabold text-foreground">{location.title}</h2>
                    <p className="font-medium leading-relaxed text-muted-foreground">{location.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                    View Local Coverage
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-extrabold text-foreground">Also Serving</h2>
            <p className="mb-4 font-medium text-muted-foreground">
              Beyond Abu Dhabi and Dubai, our fleet mobilizes across the Northern Emirates and Al Ain for project
              and emergency deployments.
            </p>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area.name}
                  className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {area.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
