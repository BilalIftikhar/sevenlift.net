import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

const path = "/services/forklift-rental-abu-dhabi"

export const metadata: Metadata = pageMetadata({
  title: "Forklift Rental Abu Dhabi | Musaffah, ICAD & KIZAD",
  description:
    "Forklift rental in Abu Dhabi from 3 to 25 ton — diesel & electric forklifts with certified operators for Musaffah Industrial City, ICAD, and Khalifa Industrial Zone (KIZAD). Same-day deployment, flexible daily/weekly/monthly terms.",
  path,
  image: "/images/fleet/forklift-warehouse.jpg",
  keywords: [
    "forklift rental Abu Dhabi",
    "forklift rental Musaffah",
    "forklift rental ICAD",
    "forklift rental Khalifa Industrial Zone",
    "3 ton forklift rental Abu Dhabi",
    "25 ton forklift rental UAE",
  ],
})

const faqs = [
  {
    question: "What forklift capacities are available for rent in Musaffah and ICAD?",
    answer:
      "We stock diesel and electric forklifts from 3 ton up to 25 ton, covering standard warehouse pallet handling through heavy container and industrial loads common in Musaffah and ICAD facilities.",
  },
  {
    question: "Do you provide certified forklift operators in Abu Dhabi?",
    answer:
      "Yes. Every forklift rental includes the option of a certified, licensed operator, or we can support your own in-house certified staff if you prefer self-operation.",
  },
  {
    question: "How fast can a forklift be delivered to Musaffah or Khalifa Industrial Zone?",
    answer:
      "Same-day deployment is available for most requests within Abu Dhabi, including Musaffah Industrial City, ICAD 1/2/3, and Khalifa Industrial Zone Abu Dhabi (KIZAD), subject to fleet availability.",
  },
  {
    question: "What rental terms do you offer for forklifts?",
    answer:
      "We offer daily, weekly, and monthly forklift rental agreements with transparent, all-inclusive pricing and no hidden charges — ideal for both short-term projects and ongoing warehouse operations.",
  },
]

export default function ForkliftRentalAbuDhabiPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Forklift Rental Abu Dhabi", url: `${siteConfig.url}${path}` },
          ]),
          serviceSchema({
            name: "Forklift Rental in Abu Dhabi",
            serviceType: "Forklift rental",
            description:
              "3 to 25 ton diesel and electric forklift rental with certified operators for Musaffah, ICAD, and Khalifa Industrial Zone, Abu Dhabi.",
            areaServed: ["Abu Dhabi", "Musaffah", "ICAD", "Khalifa Industrial Zone"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Forklift Rental · Abu Dhabi"
        title="Forklift Rental in Abu Dhabi — Musaffah, ICAD & KIZAD"
        intro="3 to 25 ton diesel and electric forklifts, delivered fast to Musaffah Industrial City, ICAD, and Khalifa Industrial Zone Abu Dhabi (KIZAD). Certified operators, flexible terms, and same-day deployment for warehouses, factories, and ports."
        heroImage="/images/fleet/forklift-warehouse.jpg"
        heroImageAlt="Forklift operating inside an Abu Dhabi warehouse"
        specs={[
          { label: "Capacity Range", value: "3–25 Ton" },
          { label: "Response Time", value: "Same-Day" },
          { label: "Operators", value: "Certified" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Forklift Types Available",
            items: [
              "3–5 ton diesel & electric forklifts for standard warehousing",
              "10 ton heavy-duty forklifts for container & pallet handling",
              "25 ton industrial forklifts for heavy machinery loads",
              "Side loaders and boom loaders for long/oversized materials",
            ],
          },
          {
            title: "Built for Musaffah & ICAD",
            items: [
              "Fleet based near Musaffah Industrial City for fast dispatch",
              "Experience with ICAD 1, 2 & 3 factory and logistics sites",
              "Familiar with KIZAD port and free-zone access procedures",
              "Non-marking tires and indoor-rated electric units on request",
            ],
          },
          {
            title: "What's Included",
            items: [
              "Certified, licensed forklift operator (optional)",
              "Full insurance coverage on every rental unit",
              "Preventive maintenance and breakdown replacement",
              "Daily, weekly, or monthly contract flexibility",
            ],
          },
        ]}
        areasHeading="Serving All of Abu Dhabi's Industrial Zones"
        areas={[
          { name: "Musaffah Industrial City", href: "/locations/abu-dhabi-musaffah" },
          { name: "ICAD 1, 2 & 3", href: "/locations/abu-dhabi-musaffah" },
          { name: "Khalifa Industrial Zone (KIZAD)", href: "/locations/abu-dhabi-musaffah" },
          { name: "Al Ain Industrial Area", href: "/locations" },
          { name: "Full Forklift Fleet Specs", href: "/equipment/forklift" },
        ]}
        faqs={faqs}
        ctaHeading="Need a Forklift in Musaffah or ICAD Today?"
        ctaSubheading="Tell us your capacity and site location — we'll confirm availability and dispatch within the hour."
        whatsappMessage="Hi Seven Lift, I need forklift rental in Abu Dhabi (Musaffah/ICAD)."
      />
    </>
  )
}
