import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { cityLinksForEquipment } from "@/lib/service-areas"

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
  },
  {
    capacity: "8 Meter",
    specs: ["5-ton load capacity", "Extended reach capability", "Rotating turret", "Compact footprint"],
  },
  {
    capacity: "12 Meter",
    specs: ["7-ton load capacity", "Wide reach coverage", "Multiple attachment options", "Precision positioning"],
  },
  {
    capacity: "17 Meter",
    specs: ["10-ton load capacity", "Maximum height reach", "Advanced stability systems", "Professional operators"],
  },
]

const features = [
  { title: "Versatile Attachments", description: "Compatible with buckets, forks, booms, and more" },
  { title: "Confined Space Expert", description: "Perfect for tight spaces where cranes cannot fit" },
  { title: "Precise Positioning", description: "Advanced control systems for exact material placement" },
  { title: "Material Handling", description: "Ideal for construction, landscaping, and farming" },
  { title: "Time Efficient", description: "Quick deployment and minimal setup required" },
  { title: "Fewer Machines", description: "One telehandler can replace a forklift and a small crane on many sites" },
]

const faqs = [
  {
    question: "Telehandler or crane: which do I need?",
    answer:
      "A telehandler suits repeated lifts of pallets, blocks and material up to about 17 m, and it can drive the load across the site. A crane suits heavier single lifts, longer reach, or loads that must go over a building.",
  },
  {
    question: "How much can a telehandler lift at full reach?",
    answer:
      "Much less than its headline capacity. Every telehandler loses capacity as the boom extends, so we size the machine from the load weight at the reach your job needs, using its load chart.",
  },
  {
    question: "Which attachments are available?",
    answer:
      "Forks, buckets, jibs for lifting slung loads, and certified man baskets for short access tasks. Tell us the job and we send the right attachment with the machine.",
  },
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
          faqSchema(faqs),
        ]}
      />
      <EquipmentDetailTemplate
        path="/equipment/telehandler"
        eyebrow="Our Fleet"
        title="Telehandler Rental Fleet: 3 to 10 Ton, Up to 17 m Reach"
        intro="Telehandlers from 3 to 10 ton with 7 to 17 m reach, supplied with forks, bucket, jib or a man basket. Hire with or without a certified operator."
        modelsHeading="Available Telehandler Models"
        models={telehandlers}
        featuresEyebrow="Applications"
        featuresHeading="Telehandler Applications & Benefits"
        features={features}
        cityLinks={{ heading: "Rent a Telehandler by City", links: cityLinksForEquipment("telehandler") }}
        faqs={faqs}
        ctaHeading="Need a Telehandler?"
        ctaSubheading="Contact us for flexible rental options and professional operator support."
        whatsappMessage="I am interested in telehandler rental services."
        equipment="telehandler"
      />
    </>
  )
}
