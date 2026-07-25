import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Mobile Crane Rental Fleet | 25 to 500 Ton Models",
  description:
    "Full mobile crane fleet specifications: 25, 50, 100, and 500 ton all-terrain cranes for rent across the UAE with certified operators and engineering support.",
  path: "/equipment/mobile-crane",
})

const cranes = [
  {
    capacity: "25 Ton",
    specs: ["Compact design", "25m boom reach", "Perfect for medium projects", "Precise load handling"],
  },
  {
    capacity: "50 Ton",
    specs: ["Extended boom reach 35m", "Heavy-duty lifting", "All-terrain capability", "Certified operators"],
  },
  {
    capacity: "100 Ton",
    specs: ["Large-scale projects", "50m boom reach", "Advanced safety systems", "Professional crew included"],
  },
  {
    capacity: "500 Ton",
    specs: ["Mega lifting operations", "60m+ boom reach", "Complex project handling", "Expert engineering support"],
  },
]

const features = [
  { title: "Expert Operators", description: "Certified crane operators with 15+ years of experience" },
  { title: "Safety First", description: "Advanced safety systems and full load monitoring" },
  { title: "Precision Lifting", description: "GPS and advanced positioning for precise placement" },
  { title: "Rapid Deployment", description: "Quick setup and mobilization to your project site" },
  { title: "All-Terrain Access", description: "Cranes accessible to remote and challenging locations" },
  { title: "Engineering Support", description: "Free lifting plan analysis and engineering consultation" },
]

export default function MobileCranePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Equipment", url: `${siteConfig.url}/equipment` },
            { name: "Mobile Crane Rental", url: `${siteConfig.url}/equipment/mobile-crane` },
          ]),
          serviceSchema({
            name: "Mobile Crane Rental",
            serviceType: "Mobile crane rental",
            description: "25 to 500 ton all-terrain mobile crane rental with certified operators across the UAE.",
            url: `${siteConfig.url}/equipment/mobile-crane`,
          }),
        ]}
      />
      <EquipmentDetailTemplate
        eyebrow="Our Fleet"
        title="Mobile Crane Rental Solutions"
        intro="Heavy-duty mobile cranes for large-scale construction and industrial lifting operations with precision control and certified expert operators."
        modelsHeading="Available Mobile Crane Models"
        models={cranes}
        featuresEyebrow="Capabilities"
        featuresHeading="Why Mobile Cranes from Seven Lift"
        features={features}
        ctaHeading="Need a Mobile Crane?"
        ctaSubheading="Get a free quote and professional consultation for your next lifting project."
        whatsappMessage="I am interested in mobile crane rental services."
      />
    </>
  )
}
