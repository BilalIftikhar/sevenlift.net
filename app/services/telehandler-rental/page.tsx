import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { cityLinksForEquipment } from "@/lib/service-areas"

const path = "/services/telehandler-rental"

/**
 * UAE-wide telehandler hub. National terms only; each emirate has its own
 * telehandler page, which this one links to rather than competes with.
 */
export const metadata: Metadata = pageMetadata({
  title: "Telehandler Rental UAE | 3 to 10 Ton, 5 to 17 m Reach",
  description:
    "Telehandler rental across the UAE: 3 to 10 ton with 5 to 17 m reach, fork, bucket and jib attachments. All seven emirates. Daily, weekly and monthly hire.",
  path,
  image: "/images/fleet/telehandler-jcb.jpg",
  keywords: [
    "telehandler rental UAE",
    "telehandler hire UAE",
    "telescopic handler rental UAE",
    "reach forklift rental UAE",
    "telehandler with operator UAE",
  ],
})

const faqs = [
  {
    question: "What is a telehandler used for?",
    answer:
      "A telehandler (telescopic handler) combines the lifting capacity of a forklift with the extended reach of a crane, making it ideal for confined construction sites, roofing material placement, and warehouse racking where standard forklifts cannot reach.",
  },
  {
    question: "What telehandler sizes are available for rent?",
    answer:
      "We offer telehandlers with 5 m to 17 m reach and 3 to 10 ton lift capacity, with optional attachments including forks, buckets, rotating jibs and certified man baskets.",
  },
  {
    question: "When is a telehandler better than a crane or a forklift?",
    answer:
      "When loads are under about 4 tons and have to go up or forward, such as pallets onto a roof slab, a telehandler is usually cheaper than a crane and can stay on site all week. On rough ground it also replaces a forklift that would get stuck.",
  },
  {
    question: "Do you provide an operator with the telehandler rental?",
    answer:
      "Certified telehandler operators are available on request, or we can support your site's own trained operators for self-operated rentals.",
  },
]

export default function TelehandlerRentalPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Telehandler Rental", url: `${siteConfig.url}${path}` },
          ]),
          serviceSchema({
            name: "Telehandler Rental",
            serviceType: "Telehandler rental",
            description: "3 to 10 ton telehandler rental with 5 m to 17 m reach in every emirate of the UAE.",
            areaServed: ["United Arab Emirates"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Telehandler Rental · UAE-Wide"
        title="Telehandler Rental Across the UAE"
        intro="Compact and high-reach telehandlers from 5 m to 17 m for construction sites, roofing, and material handling on rough ground, delivered to every emirate. Each emirate has its own telehandler page with local delivery details; this page covers the fleet and how we size it."
        heroImage="/images/fleet/telehandler-jcb.jpg"
        heroImageAlt="Telehandler on a UAE construction site"
        specs={[
          { label: "Capacity Range", value: "3–10 Ton" },
          { label: "Reach Height", value: "5–17m" },
          { label: "Coverage", value: "All 7 Emirates" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Telehandler Models",
            items: [
              "5 to 7 m reach compact units for tight plots",
              "8 to 13 m reach for mid-size builds and yards",
              "17 m reach for upper floors and roofs",
              "Jib, bucket, fork and man-basket attachments",
            ],
          },
          {
            title: "Ideal Applications",
            items: [
              "Roofing and facade material placement",
              "Unloading lorries on unmade ground",
              "Landscaping and civil works",
              "Plant and quarry maintenance lifts",
            ],
          },
          {
            title: "What's Included",
            items: [
              "Certified operator (optional)",
              "Full insurance coverage",
              "Scheduled maintenance and breakdown cover",
              "Daily, weekly, monthly rental terms",
            ],
          },
        ]}
        localContext={{
          heading: "How We Size a Telehandler",
          paragraphs: [
            "The right telehandler depends on three numbers: the heaviest load, how high it has to go, and how far forward from the machine it has to land. Capacity falls as the boom extends, so a 4 ton machine may only place 1.5 tons at full reach. We read your load against the machine's load chart before we quote, not after it arrives.",
            "Ground comes next. Prepared hardstanding suits any unit, while sand and unmade ground need four-wheel drive and rough-terrain tyres. Tight plots favour four-wheel steer. Tell us the site, and we will send the smallest machine that does the job safely.",
          ],
        }}
        areasHeading="Telehandler Rental by Emirate"
        areas={[
          ...cityLinksForEquipment("telehandler"),
          { name: "All Coverage Areas", href: "/locations" },
          { name: "Full Telehandler Fleet Specs", href: "/equipment/telehandler" },
        ]}
        faqs={faqs}
        ctaHeading="Need a Telehandler On Site?"
        ctaSubheading="Tell us your reach and load requirement. We will match the right model and dispatch fast."
        whatsappMessage="Hi Seven Lift, I need telehandler rental in the UAE."
        equipment="telehandler"
        formEquipment="Telehandler"
      />
    </>
  )
}
