import { BadgeCheck, CalendarClock, ClipboardCheck, ExternalLink, Quote, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import type { EquipmentKey } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"
import {
  certifications,
  equipmentJobLabel,
  jobsCompleted,
  testimonialsFor,
  totalJobsCompleted,
  yearsInBusiness,
} from "@/lib/trust"

type TrustSectionProps = {
  /** Scopes the job count and review order to one equipment family. */
  equipment?: EquipmentKey
  className?: string
}

/**
 * Years trading, jobs completed, certifications, and (once collected) customer
 * reviews. Every figure comes from lib/trust.ts so all pages agree.
 */
export function TrustSection({ equipment, className = "" }: TrustSectionProps) {
  const jobs = equipment ? jobsCompleted[equipment] : totalJobsCompleted
  const jobLabel = equipment ? equipmentJobLabel[equipment] : "rental jobs completed"
  const reviews = testimonialsFor(equipment)

  const stats = [
    { icon: CalendarClock, value: `${yearsInBusiness}+`, label: `Years in business, since ${siteConfig.foundingYear}` },
    { icon: ClipboardCheck, value: `${jobs.toLocaleString("en-US")}+`, label: jobLabel },
    { icon: ShieldCheck, value: "24/7", label: "Breakdown replacement" },
  ]

  return (
    <section className={`border-b border-border py-14 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl space-y-10 px-4">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 bg-card p-6">
              <stat.icon size={28} className="shrink-0 text-accent" />
              <div>
                <p className="text-2xl font-extrabold text-primary md:text-3xl">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="mb-5 text-xl font-extrabold text-foreground md:text-2xl">Licences & Certifications</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5">
                <BadgeCheck size={22} className="text-accent" />
                <p className="font-bold text-foreground">{cert.name}</p>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{cert.detail}</p>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-bold text-primary hover:text-accent"
                  >
                    {cert.issuer}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <p className="mt-auto pt-1 text-xs font-bold text-primary">{cert.issuer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {reviews.length > 0 && (
          <div>
            <h2 className="mb-5 text-xl font-extrabold text-foreground md:text-2xl">What Our Clients Say</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((review, idx) => (
                <Reveal key={review.quote} delay={idx * 80} className="h-full">
                  <figure className="flex h-full flex-col gap-4 rounded-xl border border-border bg-secondary/40 p-6">
                    <Quote size={22} className="text-accent" />
                    <blockquote className="font-medium leading-relaxed text-foreground">{review.quote}</blockquote>
                    <figcaption className="mt-auto text-sm">
                      <span className="block font-bold text-foreground">{review.name}</span>
                      <span className="block text-muted-foreground">
                        {[review.role, review.company].filter(Boolean).join(", ")} · {review.area}
                        {review.source ? ` · via ${review.source}` : ""}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
