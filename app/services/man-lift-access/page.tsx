import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

const path = "/services/man-lift-access"

export const metadata: Metadata = pageMetadata({
  title: "Man Lift & Aerial Access Rental UAE | Scissor & Boom Lifts",
  description:
    "Man lift and aerial access rental across the UAE — scissor lifts and boom lifts from 10m to 50m working height for safe elevated maintenance and construction work in Abu Dhabi and Dubai.",
  path,
  image: "/images/fleet/scissor-lift.jpg",
  keywords: [
    "man lift rental UAE",
    "aerial platform rental Abu Dhabi",
    "scissor lift rental Dubai",
    "boom lift rental UAE",
    "aerial work platform rental",
  ],
})

const faqs = [
  {
    question: "What is the difference between a scissor lift and a boom lift?",
    answer:
      "Scissor lifts move straight up and down and are ideal for flat indoor/outdoor surfaces, while boom lifts articulate and extend outward, giving reach over obstacles for tasks like facade or roofline maintenance.",
  },
  {
    question: "What working heights are available?",
    answer:
      "Our man lift fleet covers 10m scissor lifts through 50m boom lifts, suitable for everything from warehouse racking maintenance to high-rise facade and MEP installation work.",
  },
  {
    question: "Are your aerial platforms certified and safe to operate?",
    answer:
      "Yes. Every unit includes guardrails, harness anchor points, and safety interlocks, and we provide trained, certified operators or safety briefings for your own site personnel.",
  },
  {
    question: "Can you deliver man lifts to Abu Dhabi and Dubai the same day?",
    answer:
      "Same-day delivery is available for most requests across Abu Dhabi (Musaffah, ICAD, KIZAD) and Dubai (JAFZA, Al Quoz, Dubai Industrial City), subject to fleet availability.",
  },
]

export default function ManLiftAccessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Man Lift & Aerial Access", url: `${siteConfig.url}${path}` },
          ]),
          serviceSchema({
            name: "Man Lift & Aerial Access Rental",
            serviceType: "Aerial work platform rental",
            description: "Scissor lift and boom lift rental from 10m to 50m working height across the UAE.",
            areaServed: ["Abu Dhabi", "Dubai", "United Arab Emirates"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Man Lift & Aerial Access · UAE-Wide"
        title="Man Lift & Aerial Access Rental Across the UAE"
        intro="Scissor lifts and boom lifts from 10m to 50m working height for safe elevated maintenance, installation, and construction work — deployed across Abu Dhabi, Dubai, and every emirate."
        heroImage="/images/fleet/scissor-lift.jpg"
        heroImageAlt="Scissor lift being used for elevated maintenance work in a UAE warehouse"
        specs={[
          { label: "Working Height", value: "10–50m" },
          { label: "Platform Types", value: "Scissor & Boom" },
          { label: "Coverage", value: "All UAE" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Aerial Platform Types",
            items: [
              "10–18m scissor lifts for indoor & flat-surface work",
              "26m articulating boom lifts for obstacle access",
              "50m telescopic boom lifts for maximum height",
              "Electric units available for indoor/dust-free sites",
            ],
          },
          {
            title: "Common Applications",
            items: [
              "Warehouse racking & lighting maintenance",
              "Facade cleaning and building maintenance",
              "MEP, HVAC & electrical installation work",
              "Steel structure and roofline construction access",
            ],
          },
          {
            title: "Safety & Support",
            items: [
              "Guardrails, harness points & safety interlocks",
              "Certified, trained operators available",
              "Daily equipment inspection and maintenance",
              "Flexible daily, weekly, monthly rental terms",
            ],
          },
        ]}
        areasHeading="Man Lift Coverage Across the UAE"
        areas={[
          { name: "Abu Dhabi & Musaffah", href: "/locations/abu-dhabi-musaffah" },
          { name: "Dubai & JAFZA", href: "/locations/dubai" },
          { name: "All Coverage Areas", href: "/locations" },
          { name: "Full Man Lift Fleet Specs", href: "/equipment/man-lift" },
        ]}
        faqs={faqs}
        ctaHeading="Need Safe Access at Height?"
        ctaSubheading="Tell us your required working height and site type — we'll recommend the right platform."
        whatsappMessage="Hi Seven Lift, I need man lift / aerial platform rental in the UAE."
      />
    </>
  )
}
