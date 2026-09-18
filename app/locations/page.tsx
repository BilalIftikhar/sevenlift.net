import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { primaryLocations, secondaryLocations } from "@/lib/locations"
import { abuDhabiAreas } from "@/lib/abu-dhabi-areas"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Service Areas | Equipment Rental, All 7 Emirates",
  description:
    "Equipment rental across the UAE: Abu Dhabi, Dubai, Sharjah, Ajman, RAK, Fujairah, Umm Al Quwain & Al Ain. Coverage areas and lead times per city.",
  path: "/locations",
  keywords: [
    "equipment rental UAE",
    "heavy equipment rental all emirates",
    "forklift rental UAE",
    "crane rental UAE",
    "equipment rental Northern Emirates",
  ],
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
          <Reveal className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">UAE Service Network</p>
            <h1 className="text-foreground">Where We Operate</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Equipment rental across all seven emirates. Our fleet is based in Musaffah, Abu Dhabi, with scheduled
              routes into Dubai, the Northern Emirates, Al Ain, and the east coast.
            </p>
          </Reveal>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {primaryLocations.map((location, idx) => (
              <Reveal key={location.slug} delay={idx * 100} className="h-full">
                <Link
                  href={location.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
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
              </Reveal>
            ))}
          </div>

          <Reveal className="mb-10 max-w-3xl space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Home Emirate</p>
            <h2 className="text-foreground">Abu Dhabi, District by District</h2>
            <p className="font-medium text-muted-foreground">
              Our yard is in Musaffah, so we cover Abu Dhabi most closely. Each district page explains what equipment
              work there involves: access, site rules, ground conditions, and the machines that suit them.
            </p>
          </Reveal>

          <div className="mb-16 flex flex-wrap gap-3">
            {abuDhabiAreas.map((area) => (
              <Link
                key={area.slug}
                href={area.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {area.name}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>

          <Reveal className="mb-10 max-w-3xl space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Northern Emirates & Beyond</p>
            <h2 className="text-foreground">Also Serving</h2>
            <p className="font-medium text-muted-foreground">
              Scheduled routes into every remaining emirate. Each page lists the industrial zones we cover there,
              realistic delivery lead times, and the equipment that suits local site conditions.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryLocations.map((location, idx) => (
              <Reveal key={location.slug} delay={idx * 80} className="h-full">
                <Link
                  href={location.href}
                  className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {location.emirate}
                    </span>
                    <h3 className="text-xl font-extrabold text-foreground">
                      Equipment Rental {location.cityName}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                      {location.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                    View {location.cityName} Coverage
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
