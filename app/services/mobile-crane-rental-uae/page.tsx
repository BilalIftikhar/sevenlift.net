import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

const path = "/services/mobile-crane-rental-uae"

export const metadata: Metadata = pageMetadata({
  title: "Mobile Crane Rental UAE | Musaffah, Abu Dhabi & Dubai",
  description:
    "Mobile crane rental across the UAE from 25 to 500 ton — all-terrain cranes with certified riggers and operators for Musaffah, Abu Dhabi, Dubai (JAFZA), and every emirate. Free lifting-plan consultation.",
  path,
  image: "/images/mobile-crane.jpeg",
  keywords: [
    "mobile crane rental Musaffah",
    "mobile crane rental Abu Dhabi",
    "crane rental UAE",
    "crane rental Dubai",
    "25 ton crane rental",
    "500 ton crane rental UAE",
  ],
})

const faqs = [
  {
    question: "What mobile crane capacities do you offer?",
    answer:
      "Our fleet spans 25 ton compact cranes up to 500 ton mega-lift cranes with boom reach beyond 60 meters, covering everything from routine equipment placement to complex structural lifts.",
  },
  {
    question: "Do you provide lifting plans and rigging engineering?",
    answer:
      "Yes. For complex or heavy lifts we provide a free lifting-plan review, load charts, and rigging engineering support alongside our certified crane operators and riggers.",
  },
  {
    question: "Can you mobilize a crane to Musaffah or JAFZA on short notice?",
    answer:
      "We maintain cranes on standby for rapid mobilization across Abu Dhabi (including Musaffah and Khalifa Industrial Zone) and Dubai (including JAFZA and Dubai Industrial City), with same-day dispatch in most cases.",
  },
  {
    question: "What safety regulations apply to mobile crane operations in the UAE?",
    answer:
      "All lifts follow UAE municipality and civil defense lifting regulations, including certified operator licensing, daily equipment inspection logs, exclusion-zone barricading, and third-party load testing certificates.",
  },
]

export default function MobileCraneRentalUaePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Mobile Crane Rental UAE", url: `${siteConfig.url}${path}` },
          ]),
          serviceSchema({
            name: "Mobile Crane Rental UAE",
            serviceType: "Mobile crane rental",
            description:
              "25 to 500 ton all-terrain mobile crane rental with certified operators and riggers across the UAE, including Abu Dhabi and Dubai.",
            areaServed: ["Abu Dhabi", "Dubai", "Musaffah", "JAFZA", "United Arab Emirates"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Mobile Crane Rental · UAE-Wide"
        title="Mobile Crane Rental Across the UAE"
        intro="All-terrain mobile cranes from 25 to 500 ton with certified operators and riggers, mobilized to Musaffah, Abu Dhabi, Dubai's JAFZA and Dubai Industrial City, and every emirate in between."
        heroImage="/images/mobile-crane.jpeg"
        heroImageAlt="Mobile crane lifting heavy equipment on a UAE construction site"
        specs={[
          { label: "Capacity Range", value: "25–500 Ton" },
          { label: "Max Boom Reach", value: "60m+" },
          { label: "Coverage", value: "All UAE" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Crane Classes Available",
            items: [
              "25–50 ton cranes for medium construction lifts",
              "100 ton cranes for large-scale structural work",
              "500 ton cranes for mega lifting operations",
              "All-terrain chassis for off-road & industrial sites",
            ],
          },
          {
            title: "Engineering & Safety",
            items: [
              "Free lifting-plan review and load-chart analysis",
              "Certified riggers and licensed crane operators",
              "Daily inspection logs and load-test certification",
              "Exclusion-zone planning aligned to UAE lifting regulations",
            ],
          },
          {
            title: "UAE-Wide Mobilization",
            items: [
              "Rapid dispatch to Musaffah & Khalifa Industrial Zone",
              "Coverage of JAFZA, Al Quoz & Dubai Industrial City",
              "Support for Sharjah, Ajman, RAK & Fujairah projects",
              "Emergency crane hire available around the clock",
            ],
          },
        ]}
        areasHeading="Mobile Crane Coverage Across Every Emirate"
        areas={[
          { name: "Abu Dhabi & Musaffah", href: "/locations/abu-dhabi-musaffah" },
          { name: "Dubai & JAFZA", href: "/locations/dubai" },
          { name: "All Coverage Areas", href: "/locations" },
          { name: "Full Crane Fleet Specs", href: "/equipment/mobile-crane" },
        ]}
        faqs={faqs}
        ctaHeading="Planning a Lift? Talk to Our Crane Team."
        ctaSubheading="Share your load weight, height, and site access — we'll recommend the right crane and crew."
        whatsappMessage="Hi Seven Lift, I need mobile crane rental in the UAE."
      />
    </>
  )
}
