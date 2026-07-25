import type { Metadata } from "next"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { getLocationBySlug } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"

const location = getLocationBySlug("dubai")!
const path = location.href

export const metadata: Metadata = pageMetadata({
  title: "Heavy Equipment Rental Dubai | JAFZA, Al Quoz & Dubai Industrial City",
  description:
    "Forklift, mobile crane, telehandler, and man lift rental in Dubai — serving Jebel Ali Free Zone (JAFZA), Al Quoz, and Dubai Industrial City. Certified operators, flexible terms, 24/7 emergency deployment.",
  path,
  image: location.heroImage,
  keywords: [
    "heavy equipment rental Dubai",
    "forklift rental Dubai",
    "mobile crane rental Dubai",
    "equipment rental JAFZA",
    "equipment rental Al Quoz",
    "equipment rental Dubai Industrial City",
  ],
})

const whyPoints = [
  {
    title: "JAFZA Access Experience",
    description: "Established free-zone entry procedures for equipment delivery inside Jebel Ali Free Zone.",
  },
  {
    title: "Dubai Industrial City Ready",
    description: "Regular deployments to manufacturing and logistics facilities across Dubai Industrial City.",
  },
  {
    title: "Al Quoz Coverage",
    description: "Fast dispatch to Al Quoz's dense mix of workshops, warehouses, and industrial units.",
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
    description: "Daily, weekly, and monthly agreements tailored to logistics, construction, and free-zone projects.",
  },
]

export default function DubaiLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: "Dubai", url: `${siteConfig.url}${path}` },
          ]),
          localBusinessSchema({
            areaServed: ["Dubai", "Jebel Ali Free Zone", "Al Quoz", "Dubai Industrial City"],
            geo: location.geo,
            url: `${siteConfig.url}${path}`,
          }),
        ]}
      />
      <LocationLandingTemplate
        eyebrow="Dubai · JAFZA · Al Quoz"
        title="Heavy Equipment Rental in Dubai"
        intro="Forklift, mobile crane, telehandler, and man lift rental for Jebel Ali Free Zone (JAFZA), Al Quoz Industrial Area, and Dubai Industrial City. Certified operators and 24/7 emergency deployment across Dubai's logistics and manufacturing hubs."
        heroImage={location.heroImage}
        heroImageAlt="Forklift operating in a Dubai warehouse facility"
        areas={location.areas}
        whyHeading="Why Dubai Contractors Choose Seven Lift"
        whyPoints={whyPoints}
        ctaHeading="Need Equipment in JAFZA or Al Quoz Today?"
        ctaSubheading="Share your site location and equipment need — our Dubai team will confirm availability within the hour."
        whatsappMessage="Hi Seven Lift, I need heavy equipment rental in Dubai."
      />
    </>
  )
}
