import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

const path = "/services/telehandler-rental"

export const metadata: Metadata = pageMetadata({
  title: "Telehandler Rental UAE | Abu Dhabi & Dubai",
  description:
    "Telehandler rental across the UAE — 3 to 10 ton capacity, 5m to 17m reach, for confined construction sites and warehouses in Abu Dhabi, Dubai, and every emirate. Flexible daily, weekly, and monthly terms.",
  path,
  image: "/images/fleet/telehandler-jcb.jpg",
  keywords: [
    "telehandler rental UAE",
    "telehandler rental Abu Dhabi",
    "telehandler rental Dubai",
    "reach forklift rental UAE",
    "telescopic handler rental",
  ],
})

const faqs = [
  {
    question: "What is a telehandler used for?",
    answer:
      "A telehandler (telescopic handler) combines the lifting capacity of a forklift with the extended reach of a crane, making it ideal for confined construction sites, roofing material placement, and warehouse racking where standard forklifts can't reach.",
  },
  {
    question: "What telehandler sizes are available for rent?",
    answer:
      "We offer telehandlers with 5m to 17m reach and 3 to 10 ton lift capacity, with optional attachments including forks, buckets, and rotating jibs.",
  },
  {
    question: "Can telehandlers be used in tight or confined sites?",
    answer:
      "Yes — compact chassis and precise hydraulic controls make telehandlers well-suited to confined urban construction sites, warehouse aisles, and industrial yards across Abu Dhabi and Dubai.",
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
            description: "3 to 10 ton telehandler rental with 5m to 17m reach across the UAE.",
            areaServed: ["Abu Dhabi", "Dubai", "United Arab Emirates"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Telehandler Rental · UAE-Wide"
        title="Telehandler Rental Across the UAE"
        intro="Compact, high-reach telehandlers from 5m to 17m for confined construction sites, roofing, and warehouse material handling in Abu Dhabi, Dubai, and beyond."
        heroImage="/images/fleet/telehandler-jcb.jpg"
        heroImageAlt="Telehandler on a UAE construction site"
        specs={[
          { label: "Capacity Range", value: "3–10 Ton" },
          { label: "Reach Height", value: "5–17m" },
          { label: "Coverage", value: "All UAE" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Telehandler Models",
            items: [
              "5m reach for compact construction sites",
              "8–12m reach for mid-size builds & warehouses",
              "17m reach for maximum height access",
              "Jib, bucket & fork attachment options",
            ],
          },
          {
            title: "Ideal Applications",
            items: [
              "Roofing & facade material placement",
              "Warehouse racking & container yards",
              "Landscaping and civil works",
              "Confined urban construction sites",
            ],
          },
          {
            title: "What's Included",
            items: [
              "Certified operator (optional)",
              "Full insurance coverage",
              "Scheduled maintenance & breakdown cover",
              "Daily, weekly, monthly rental terms",
            ],
          },
        ]}
        areasHeading="Telehandler Coverage Across the UAE"
        areas={[
          { name: "Abu Dhabi & Musaffah", href: "/locations/abu-dhabi-musaffah" },
          { name: "Dubai & JAFZA", href: "/locations/dubai" },
          { name: "All Coverage Areas", href: "/locations" },
          { name: "Full Telehandler Fleet Specs", href: "/equipment/telehandler" },
        ]}
        faqs={faqs}
        ctaHeading="Need a Telehandler On Site?"
        ctaSubheading="Tell us your reach and load requirement — we'll match the right model and dispatch fast."
        whatsappMessage="Hi Seven Lift, I need telehandler rental in the UAE."
      />
    </>
  )
}
