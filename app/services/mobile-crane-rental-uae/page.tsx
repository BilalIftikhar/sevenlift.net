import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { cityLinksForEquipment } from "@/lib/service-areas"

const path = "/services/mobile-crane-rental-uae"

/**
 * UAE-wide crane hub. It targets national searches only ("crane rental UAE");
 * city and district terms belong to the per-emirate crane pages it links to,
 * so this page must not name individual cities or zones, or it cannibalizes them.
 */
export const metadata: Metadata = pageMetadata({
  title: "Crane Rental UAE | Mobile Cranes 25 to 500 Ton",
  description:
    "Mobile crane rental across the UAE: 25 to 500 ton all-terrain cranes with certified operators, riggers and lift plans in every emirate. Free lift plan review.",
  path,
  image: "/images/mobile-crane.jpeg",
  keywords: [
    "crane rental UAE",
    "mobile crane rental UAE",
    "crane rental companies in UAE",
    "mobile cranes for hire UAE",
    "crane hire UAE",
    "500 ton crane rental UAE",
  ],
})

const faqs = [
  {
    question: "What mobile crane capacities do you offer?",
    answer:
      "Our fleet spans 25 ton compact cranes up to 500 ton heavy-lift cranes with boom reach beyond 60 meters, covering everything from routine equipment placement to complex structural lifts.",
  },
  {
    question: "Do you provide lifting plans and rigging engineering?",
    answer:
      "Yes. For complex or heavy lifts we provide a free lifting-plan review, load charts, and rigging engineering support alongside our certified crane operators and riggers.",
  },
  {
    question: "Do you supply cranes to every emirate?",
    answer:
      "Yes. We lift in all seven emirates. Cranes up to about 100 tons usually mobilize within a day, while larger cranes travel with counterweight trailers and need a few days' notice. Each emirate's own crane page covers local lead times and permits.",
  },
  {
    question: "What is included in a UAE crane hire?",
    answer:
      "The crane, a certified operator, fuel and insurance as standard, with certified riggers, a documented lift plan and third-party inspection certificates for every job. Hire can be by the lift, the day, the week or the month.",
  },
  {
    question: "What safety regulations apply to mobile crane operations in the UAE?",
    answer:
      "All lifts follow municipality and civil defence lifting requirements, including certified operator licensing, daily equipment inspection logs, exclusion-zone barricading, and third-party load testing certificates.",
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
              "25 to 500 ton all-terrain mobile crane rental with certified operators and riggers in every emirate of the UAE.",
            areaServed: ["United Arab Emirates"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Mobile Crane Rental · UAE-Wide"
        title="Mobile Crane Rental Across the UAE"
        intro="Seven Lift runs all-terrain mobile cranes from 25 to 500 tons into every emirate in the UAE, with certified operators and riggers on every job. Whether your site sits in a free zone, an industrial area, or a busy city centre, we handle the crane, the crew, and the paperwork so your lift happens on schedule."
        heroImage="/images/mobile-crane.jpeg"
        heroImageAlt="Mobile crane lifting heavy equipment on a UAE construction site"
        specs={[
          { label: "Capacity Range", value: "25–500 Ton" },
          { label: "Max Boom Reach", value: "60m+" },
          { label: "Coverage", value: "All 7 Emirates" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Crane Classes Available",
            items: [
              "25 to 50 ton cranes for medium construction lifts",
              "100 ton cranes for large-scale structural work",
              "Up to 500 ton cranes for heavy plant and modular lifts",
              "All-terrain chassis for off-road and industrial sites",
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
            title: "The Same in Every Emirate",
            items: [
              "One point of contact from quote to demobilization",
              "Route and road-movement planning for large cranes",
              "Crew documents ready for free zone and site gate passes",
              "Emergency crane hire available around the clock",
            ],
          },
        ]}
        localContext={{
          heading: "What Stays the Same Wherever You Lift in the UAE",
          paragraphs: [
            "Each emirate we serve has its own crane page on this site, with details specific to that area: local permits, access routes, ground conditions, and lead times. This page covers what stays the same no matter where in the UAE you are lifting.",
            "Every job starts with the lift data: load weight and dimensions, lift radius, and the setup area. From that our planner selects the crane class, checks outrigger loads against the ground, and writes the lift plan and risk assessment your HSE team signs off. The crane arrives with its load chart and current third-party inspection certificate, and the crew arrive with their operator and rigger cards.",
            "Weather matters on every UAE lift. Summer shamal winds can push past a load chart's wind limit, and the midday work break from mid-June to mid-September moves outdoor lifts to the early morning or late afternoon. We build both into the schedule rather than finding out on the day.",
          ],
        }}
        areasHeading="Mobile Crane Rental by Emirate"
        areas={[
          ...cityLinksForEquipment("mobile-crane"),
          { name: "All Coverage Areas", href: "/locations" },
          { name: "Full Crane Fleet Specs", href: "/equipment/mobile-crane" },
        ]}
        faqs={faqs}
        ctaHeading="Planning a Lift? Talk to Our Crane Team."
        ctaSubheading="Share your load weight, height, and site access. We will recommend the right crane and crew."
        whatsappMessage="Hi Seven Lift, I need mobile crane rental in the UAE."
        equipment="mobile-crane"
        formEquipment="Mobile Crane"
      />
    </>
  )
}
