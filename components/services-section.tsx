import Link from "next/link"
import { ArrowRight, Boxes, Gauge, ShieldCheck, Timer } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/services"

const trustPoints = [
  {
    icon: Gauge,
    title: "Full Capacity Range",
    description: "3 to 25 ton forklifts, 25 to 500 ton mobile cranes, and 10 to 50m access equipment.",
  },
  {
    icon: Timer,
    title: "Flexible Terms",
    description: "Daily, weekly, and monthly contracts with no long-term lock-in required.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Operators",
    description: "Trained, licensed operators and full insurance on every unit we deploy.",
  },
  {
    icon: Boxes,
    title: "24/7 Emergency Support",
    description: "Rapid deployment to Musaffah, ICAD, JAFZA, and every UAE industrial zone, any hour.",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Comprehensive Solutions</p>
          <h2 className="text-foreground">Rental Services by Capacity &amp; Application</h2>
          <p className="text-lg font-medium text-muted-foreground">
            Every category of heavy lifting and access equipment, matched to your project&apos;s exact capacity
            requirements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <Reveal key={service.slug} delay={idx * 90} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                    {service.capacityRange}
                  </span>
                  <h3 className="text-foreground">{service.shortTitle}</h3>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                  View Details
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <Reveal key={point.title} delay={idx * 80} className="bg-card">
                <div className="flex flex-col gap-3 p-6">
                  <Icon size={26} className="text-accent" />
                  <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">{point.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
