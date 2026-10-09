import { MapPin, Navigation } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { addressLine, mapsEmbedUrl, mapsUrl } from "@/lib/site-config"

/** Map of the Musaffah yard, shown on /contact and the Abu Dhabi hub. */
export function YardMap({ className = "py-16 md:py-20" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3 lg:items-center">
        <Reveal className="space-y-5">
          <h2 className="text-foreground">Our Musaffah Yard</h2>
          <p className="flex gap-3 text-lg font-semibold text-foreground">
            <MapPin size={22} className="mt-1 shrink-0 text-accent" />
            {addressLine}
          </p>
          <p className="font-medium leading-relaxed text-muted-foreground">
            Our fleet is dispatched from this yard. ICAD is about 10 minutes away and KIZAD about 40, which is why most
            Abu Dhabi jobs get a machine the same day.
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </Reveal>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm lg:col-span-2">
          <iframe
            title="Map of the Seven Lift yard in Musaffah Industrial Area, Abu Dhabi"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full border-0 md:h-96"
          />
        </div>
      </div>
    </section>
  )
}
