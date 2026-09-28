import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowRight, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { TrustSection } from "@/components/trust-section"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import type { EquipmentKey } from "@/lib/locations"
import { siteConfig, waLink } from "@/lib/site-config"

export type SpecRow = { label: string; value: string }
export type BulletGroup = { title: string; items: string[] }
export type FaqItem = { question: string; answer: string }
export type AreaLink = { name: string; href: string }
export type LocalContext = { heading: string; paragraphs: string[] }

/**
 * Section arrangement. Each equipment family gets its own, so a crane page and
 * a forklift page for the same city do not share one skeleton.
 * - cards: fleet cards first, then local planning notes
 * - planning: local planning notes beside the site facts, then a numbered process
 * - split: two-column fleet list beside the hero photo
 * - access: pull-quote planning notes, then a compact fleet list
 */
export type ServiceLayout = "cards" | "planning" | "split" | "access"

const layoutByEquipment: Record<EquipmentKey, ServiceLayout> = {
  forklift: "cards",
  "mobile-crane": "planning",
  telehandler: "split",
  "man-lift": "access",
}

type ServiceLandingTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  /** City-specific guidance for this equipment type, what makes the page more than a template. */
  localContext?: LocalContext
  /** Short label/value facts about working in this area (lead time, authority, ground). */
  siteFacts?: SpecRow[]
  siteFactsHeading?: string
  areasHeading: string
  areas: AreaLink[]
  faqs: FaqItem[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
  /** Scopes trust figures and the form's default equipment. */
  equipment?: EquipmentKey
  /** Label preselected in the hero form's equipment field. */
  formEquipment?: string
  formLocation?: string
  layout?: ServiceLayout
}

export function ServiceLandingTemplate({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  specs,
  bulletGroups,
  localContext,
  siteFacts,
  siteFactsHeading = "At a Glance",
  areasHeading,
  areas,
  faqs,
  ctaHeading,
  ctaSubheading,
  whatsappMessage,
  equipment,
  formEquipment,
  formLocation,
  layout,
}: ServiceLandingTemplateProps) {
  const whatsappHref = waLink(whatsappMessage)
  const activeLayout = layout ?? (equipment ? layoutByEquipment[equipment] : "cards")

  const specStrip = (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {specs.map((spec, idx) => (
            <Reveal key={spec.label} delay={idx * 80} className="bg-card">
              <div className="flex flex-col gap-1 p-6 text-center">
                <span className="text-2xl font-extrabold text-primary md:text-3xl">{spec.value}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{spec.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )

  const factsTable = siteFacts && siteFacts.length > 0 && (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <p className="bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground">
        {siteFactsHeading}
      </p>
      <dl className="divide-y divide-border">
        {siteFacts.map((fact) => (
          <div key={fact.label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-5 sm:gap-3">
            <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground sm:col-span-2">{fact.label}</dt>
            <dd className="text-sm font-semibold text-foreground sm:col-span-3">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )

  const contextParagraphs = localContext?.paragraphs.map((paragraph) => (
    <p key={paragraph} className="text-lg font-medium leading-relaxed text-muted-foreground">
      {paragraph}
    </p>
  ))

  const bulletCards = (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {bulletGroups.map((group, idx) => (
        <Reveal key={group.title} delay={idx * 100} className="h-full">
          <div className="h-full rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
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
        </Reveal>
      ))}
    </div>
  )

  let body: ReactNode
  if (activeLayout === "planning") {
    // Crane pages: planning and site facts lead, because lift planning drives the hire.
    body = (
      <>
        {localContext && (
          <section className="bg-secondary/40 py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-5">
              <div className="space-y-6 lg:col-span-3">
                <Reveal>
                  <h2 className="text-foreground">{localContext.heading}</h2>
                </Reveal>
                {contextParagraphs}
              </div>
              <div className="lg:col-span-2">{factsTable}</div>
            </div>
          </section>
        )}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl space-y-12 px-4">
            {bulletGroups.map((group, groupIdx) => (
              <div key={group.title}>
                <h2 className="mb-6 text-foreground">{group.title}</h2>
                <ol className="grid gap-4 md:grid-cols-2">
                  {group.items.map((item, idx) => (
                    <Reveal key={item} delay={idx * 60}>
                      <li className="flex h-full gap-4 rounded-xl border border-border bg-card p-5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                          {groupIdx === 0 ? idx + 1 : "✓"}
                        </span>
                        <span className="font-medium text-foreground">{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </>
    )
  } else if (activeLayout === "split") {
    // Telehandler pages: the photo sits beside the fleet list.
    body = (
      <>
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-start">
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg md:sticky md:top-24 md:h-[28rem]">
              <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="space-y-10">
              {bulletGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-4 text-2xl font-extrabold text-foreground">{group.title}</h2>
                  <ul className="divide-y divide-border rounded-xl border border-border bg-card">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 px-5 py-3.5 text-sm font-medium text-foreground">
                        <ArrowRight size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {localContext && (
          <section className="py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Reveal>
                  <h2 className="text-foreground">{localContext.heading}</h2>
                </Reveal>
                {contextParagraphs}
              </div>
              <div>{factsTable}</div>
            </div>
          </section>
        )}
      </>
    )
  } else if (activeLayout === "access") {
    // Man lift pages: the working-at-height guidance leads as a pull quote.
    const [lead, ...rest] = localContext?.paragraphs ?? []
    body = (
      <>
        {localContext && (
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl space-y-8 px-4">
              <Reveal>
                <h2 className="text-foreground">{localContext.heading}</h2>
              </Reveal>
              {lead && (
                <blockquote className="border-l-4 border-accent bg-secondary/50 px-6 py-5 text-xl font-semibold leading-relaxed text-foreground">
                  {lead}
                </blockquote>
              )}
              {rest.map((paragraph) => (
                <p key={paragraph} className="text-lg font-medium leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {factsTable}
            </div>
          </section>
        )}
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">
            {bulletGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h2 className="border-b-2 border-accent pb-3 text-xl font-extrabold text-foreground">{group.title}</h2>
                <ul className="space-y-2.5">
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
        </section>
      </>
    )
  } else {
    body = (
      <>
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">{bulletCards}</div>
        </section>
        {localContext && (
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-4xl space-y-6 px-4">
              <Reveal>
                <h2 className="text-foreground">{localContext.heading}</h2>
              </Reveal>
              {contextParagraphs}
              {factsTable}
            </div>
          </section>
        )}
      </>
    )
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="" fill priority className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-5 lg:items-center">
          <div className="animate-slide-up space-y-5 lg:col-span-3">
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
              <a
                href={siteConfig.telHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="animate-fade-in lg:col-span-2">
            <ContactForm variant="hero" defaultEquipment={formEquipment} defaultLocation={formLocation} placement="hero-form" />
          </div>
        </div>
      </section>

      {specStrip}
      <TrustSection equipment={equipment} />
      {body}

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">{areasHeading}</h2>
          </Reveal>
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-10 text-foreground">Frequently Asked Questions</h2>
          </Reveal>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">{ctaHeading}</h2>
          <p className="text-xl font-medium text-muted-foreground">{ctaSubheading}</p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              Email {siteConfig.email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-3.5 text-sm font-bold text-primary transition-transform hover:scale-105"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
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
