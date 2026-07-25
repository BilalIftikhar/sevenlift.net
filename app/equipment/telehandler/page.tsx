import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Telehandler Rental Fleet | 5m to 17m Reach Models",
  description:
    "Full telehandler fleet specifications: 5m to 17m reach telehandlers with 3 to 10 ton capacity, for confined-space material handling across the UAE.",
  path: "/equipment/telehandler",
})

const telehandlers = [
  {
    capacity: "5 Meter",
    specs: ["3-ton load capacity", "Confined space access", "Indoor/outdoor use", "Easy maneuverability"],
    price: "From AED 1,800/day",
  },
  {
    capacity: "8 Meter",
    specs: ["5-ton load capacity", "Extended reach capability", "Rotating turret", "Compact footprint"],
    price: "From AED 2,500/day",
  },
  {
    capacity: "12 Meter",
    specs: ["7-ton load capacity", "Wide reach coverage", "Multiple attachment options", "Precision positioning"],
    price: "From AED 3,200/day",
  },
  {
    capacity: "17 Meter",
    specs: ["10-ton load capacity", "Maximum height reach", "Advanced stability systems", "Professional operators"],
    price: "From AED 4,200/day",
  },
]

const features = [
  { title: "Versatile Attachments", description: "Compatible with buckets, forks, booms, and more" },
  { title: "Confined Space Expert", description: "Perfect for tight spaces where cranes cannot fit" },
  { title: "Precise Positioning", description: "Advanced control systems for exact material placement" },
  { title: "Material Handling", description: "Ideal for construction, landscaping, and farming" },
  { title: "Time Efficient", description: "Quick deployment and minimal setup required" },
  { title: "Cost Effective", description: "Lower operational costs than traditional equipment" },
]

export default function TelehandlerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Equipment", url: `${siteConfig.url}/equipment` },
            { name: "Telehandler Rental", url: `${siteConfig.url}/equipment/telehandler` },
          ]),
          serviceSchema({
            name: "Telehandler Rental",
            serviceType: "Telehandler rental",
            description: "5m to 17m reach telehandler rental with certified operators across the UAE.",
            url: `${siteConfig.url}/equipment/telehandler`,
          }),
        ]}
      />
      <EquipmentDetailTemplate
        eyebrow="Our Fleet"
        title="Telehandler & Reach Forklift Rentals"
        intro="Versatile telehandlers engineered for confined spaces with intelligent material positioning and maximum operational efficiency."
        modelsHeading="Available Telehandler Models"
        models={telehandlers}
        featuresEyebrow="Applications"
        featuresHeading="Telehandler Applications & Benefits"
        features={features}
        ctaHeading="Need a Telehandler?"
        ctaSubheading="Contact us for flexible rental options and professional operator support."
        whatsappMessage="I am interested in telehandler rental services."
      />
    </>
  )
}
