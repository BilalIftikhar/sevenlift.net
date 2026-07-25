import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { siteConfig, waLink } from "@/lib/site-config"

export type SpecRow = { label: string; value: string }
export type BulletGroup = { title: string; items: string[] }
export type FaqItem = { question: string; answer: string }
export type AreaLink = { name: string; href: string }

type ServiceLandingTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  areasHeading: string
  areas: AreaLink[]
  faqs: FaqItem[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
}

export function ServiceLandingTemplate({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  specs,
  bulletGroups,
  areasHeading,
  areas,
  faqs,
  ctaHeading,
  ctaSubheading,
  whatsappMessage,
}: ServiceLandingTemplateProps) {
  const whatsappHref = waLink(whatsappMessage)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              {eyebrow}
            </span>
            <h1 className="text-white">{title}</h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85">{intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
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
          <div className="relative hidden h-80 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 md:block">
            <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" priority />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1 bg-card p-6 text-center">
                <span className="text-2xl font-extrabold text-primary md:text-3xl">{spec.value}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {bulletGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-border bg-card p-7">
                <h2 className="mb-4 text-xl font-extrabold text-foreground">{group.title}</h2>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium text-foreground">
                      <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-foreground">{areasHeading}</h2>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {area.name}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground">
                  {faq.question}
                  <span className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

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
              <MessageCircle size={18} />
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
