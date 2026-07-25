import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Man Lift & Aerial Platform Rental Fleet | 10m to 50m",
  description:
    "Full man lift fleet specifications: scissor lifts and boom lifts from 10m to 50m working height for safe elevated maintenance and construction work across the UAE.",
  path: "/equipment/man-lift",
})

const manLifts = [
  {
    capacity: "10m Scissor Lift",
    specs: ["Ideal for indoor maintenance", "Narrow aisle access", "Non-marking tires available", "Simple platform controls"],
    price: "From AED 900/day",
  },
  {
    capacity: "18m Scissor Lift",
    specs: ["Extended platform height", "Electrical & installation work", "Rough terrain option available", "Guardrail safety system"],
    price: "From AED 1,400/day",
  },
  {
    capacity: "26m Boom Lift",
    specs: ["Articulating boom reach", "Up-and-over obstacle access", "360° platform rotation", "Outdoor construction rated"],
    price: "From AED 2,200/day",
  },
  {
    capacity: "50m Boom Lift",
    specs: ["Maximum height access", "Heavy-duty steel structures", "Telescopic + articulating boom", "Certified operators included"],
    price: "From AED 3,800/day",
  },
]

const features = [
  { title: "Fall Protection", description: "Guardrails, harness anchor points, and interlocks on every unit" },
  { title: "Trained Operators", description: "IPAF-style trained and certified aerial platform operators available" },
  { title: "Indoor & Outdoor", description: "Electric units for indoor work, diesel/rough-terrain for outdoor sites" },
  { title: "Fast Mobilization", description: "Same-day delivery across Abu Dhabi, Dubai, and the wider UAE" },
  { title: "Maintenance Access", description: "Purpose-built for facade, MEP, and warehouse racking maintenance" },
  { title: "Flexible Terms", description: "Daily, weekly, and monthly rental with transparent pricing" },
]

export default function ManLiftPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Equipment", url: `${siteConfig.url}/equipment` },
            { name: "Man Lift / Aerial Platform", url: `${siteConfig.url}/equipment/man-lift` },
          ]),
          serviceSchema({
            name: "Man Lift & Aerial Platform Rental",
            serviceType: "Man lift and aerial work platform rental",
            description: "Scissor lift and boom lift rental from 10m to 50m working height across the UAE.",
            url: `${siteConfig.url}/equipment/man-lift`,
          }),
        ]}
      />
      <EquipmentDetailTemplate
        eyebrow="Our Fleet"
        title="Man Lift & Aerial Platform Rentals"
        intro="Safe elevated work platforms with advanced safety systems for maintenance, construction, and installation tasks at height, backed by certified trained operators."
        modelsHeading="Available Man Lift Models"
        models={manLifts}
        featuresEyebrow="Safety & Access"
        featuresHeading="Why Rent Man Lifts from Seven Lift"
        features={features}
        ctaHeading="Need a Man Lift or Aerial Platform?"
        ctaSubheading="Talk to our team for the right platform height and configuration for your job site."
        whatsappMessage="I am interested in man lift / aerial platform rental services."
      />
    </>
  )
}
