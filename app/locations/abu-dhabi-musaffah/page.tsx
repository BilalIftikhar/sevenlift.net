import type { Metadata } from "next"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { getLocationBySlug } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"

const location = getLocationBySlug("abu-dhabi-musaffah")!
const path = location.href

export const metadata: Metadata = pageMetadata({
  title: "Heavy Equipment Rental Abu Dhabi & Musaffah | Forklift, Crane, Telehandler",
  description:
    "Forklift, mobile crane, telehandler, and man lift rental in Abu Dhabi — serving Musaffah Industrial City, ICAD, and Khalifa Industrial Zone (KIZAD). Certified operators, 24/7 emergency deployment.",
  path,
  image: location.heroImage,
  keywords: [
    "heavy equipment rental Abu Dhabi",
    "forklift rental Musaffah",
    "mobile crane rental Musaffah",
    "equipment rental ICAD",
    "equipment rental Khalifa Industrial Zone",
  ],
})

const whyPoints = [
  {
    title: "Local Musaffah Depot",
    description: "Fleet positioned near Musaffah Industrial City for fast dispatch to M1–M44 and ICAD sectors.",
  },
  {
    title: "ICAD & KIZAD Experience",
    description: "Familiar with factory access procedures across ICAD 1, 2, 3 and Khalifa Industrial Zone Abu Dhabi.",
  },
  {
    title: "Port & Free Zone Access",
    description: "Established process for KIZAD port access, container yards, and free-zone equipment permits.",
  },
  {
    title: "Certified Operators",
    description: "Licensed forklift, crane, and access-platform operators available for every rental.",
  },
  {
    title: "24/7 Emergency Deployment",
    description: "Rapid same-day mobilization for breakdown replacement and urgent lifting needs.",
  },
  {
    title: "Flexible Contracts",
    description: "Daily, weekly, and monthly agreements tailored to warehouse, factory, and construction projects.",
  },
]

export default function AbuDhabiMusaffahPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: "Abu Dhabi / Musaffah", url: `${siteConfig.url}${path}` },
          ]),
          localBusinessSchema({
            areaServed: ["Abu Dhabi", "Musaffah", "ICAD", "Khalifa Industrial Zone", "Al Ain"],
            geo: location.geo,
            url: `${siteConfig.url}${path}`,
          }),
        ]}
      />
      <LocationLandingTemplate
        eyebrow="Abu Dhabi · Musaffah · ICAD"
        title="Heavy Equipment Rental in Abu Dhabi & Musaffah"
        intro="Forklift, mobile crane, telehandler, and man lift rental purpose-built for Musaffah Industrial City, ICAD, and Khalifa Industrial Zone (KIZAD). Certified operators and 24/7 emergency deployment across Abu Dhabi's heaviest industrial corridors."
        heroImage={location.heroImage}
        heroImageAlt="Heavy equipment and shipping containers in an Abu Dhabi industrial yard"
        areas={location.areas}
        whyHeading="Why Contractors in Musaffah Choose Seven Lift"
        whyPoints={whyPoints}
        ctaHeading="Need Equipment in Musaffah or ICAD Today?"
        ctaSubheading="Share your site location and equipment need — our Abu Dhabi team will confirm availability within the hour."
        whatsappMessage="Hi Seven Lift, I need heavy equipment rental in Abu Dhabi / Musaffah."
      />
    </>
  )
}
