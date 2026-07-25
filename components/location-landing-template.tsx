import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { services } from "@/lib/services"
import { siteConfig, waLink } from "@/lib/site-config"
import type { Faq } from "@/lib/faqs"

type LocationLandingTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  areas: string[]
  whyHeading: string
  whyPoints: { title: string; description: string }[]
  faqs?: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
}

export function LocationLandingTemplate({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  areas,
  whyHeading,
  whyPoints,
  faqs,
  ctaHeading,
  ctaSubheading,
  whatsappMessage,
}: LocationLandingTemplateProps) {
  const whatsappHref = waLink(whatsappMessage)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="animate-slide-up max-w-2xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              <MapPin size={13} />
              {eyebrow}
            </span>
            <h1 className="text-white">{title}</h1>
            <p className="text-lg font-medium leading-relaxed text-white/85">{intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon size={18} />
                Request a Quote
              </a>
              <a
                href={siteConfig.telHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">Areas We Cover</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-14 space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Equipment Available</p>
            <h2 className="text-foreground">Rent by Equipment Type</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 80} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="space-y-2">
                    <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {service.capacityRange}
                    </span>
                    <h3 className="text-foreground">{service.shortTitle}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    View Details
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-14 text-foreground">{whyHeading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} delay={idx * 100} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="font-medium leading-relaxed text-muted-foreground">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4">
            <Reveal>
              <h2 className="mb-10 text-foreground">Frequently Asked Questions</h2>
            </Reveal>
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">{ctaHeading}</h2>
          <p className="text-xl font-medium text-muted-foreground">{ctaSubheading}</p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              <WhatsAppIcon size={18} />
              Request a Quote on WhatsApp
            </a>
            <a
              href={siteConfig.telHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone size={18} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
