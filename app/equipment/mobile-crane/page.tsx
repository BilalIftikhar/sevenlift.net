import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { cityLinksForEquipment } from "@/lib/service-areas"
import { craneCapacityLinks } from "@/lib/crane-capacity-links"

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
  { title: "Certified Crew", description: "Certified crane operators, riggers and banksmen on every lift" },
  { title: "Safety First", description: "Advanced safety systems and full load monitoring" },
  { title: "Lift Plans", description: "Documented lift plans, load charts and inspection certificates" },
  { title: "Rapid Deployment", description: "Quick setup and mobilization to your project site" },
  { title: "All-Terrain Access", description: "Cranes accessible to remote and challenging locations" },
  { title: "Engineering Support", description: "Free lifting plan analysis and engineering consultation" },
]

const faqs = [
  {
    question: "What size mobile crane do I need?",
    answer:
      "The crane class depends on the load weight and the lift radius together. A light load placed far from the crane can need a much larger machine than its weight suggests. Send the weight, dimensions and radius and we size the crane from its load chart.",
  },
  {
    question: "Does a rented mobile crane come with an operator?",
    answer:
      "Yes. Every mobile crane is supplied with a certified operator, and we add certified riggers and a banksman to suit the lift.",
  },
  {
    question: "Do you prepare the lift plan?",
    answer:
      "Yes. We prepare the method statement, lift plan and risk assessment and send them for your HSE team's approval before the crane mobilizes.",
  },
  {
    question: "How far ahead should I book a crane?",
    answer:
      "Smaller cranes can often mobilize within a day. For 100 ton and larger cranes, book 3 to 5 days ahead so the crane, crew and permits are confirmed.",
  },
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
          faqSchema(faqs),
        ]}
      />
      <EquipmentDetailTemplate
        eyebrow="Our Fleet"
        title="Mobile Crane Rental Fleet: 25 to 500 Ton"
        intro="All-terrain mobile cranes from 25 to 500 ton, supplied with a certified operator, riggers and a documented lift plan for construction, plant and machinery lifts."
        modelsHeading="Available Mobile Crane Models"
        models={cranes}
        featuresEyebrow="Capabilities"
        featuresHeading="Why Mobile Cranes from Seven Lift"
        features={features}
        cityLinks={{
          heading: "Rent a Mobile Crane by City or Size",
          links: [...cityLinksForEquipment("mobile-crane"), ...craneCapacityLinks],
        }}
        faqs={faqs}
        ctaHeading="Need a Mobile Crane?"
        ctaSubheading="Get a free quote and professional consultation for your next lifting project."
        whatsappMessage="I am interested in mobile crane rental services."
        equipment="mobile-crane"
      />
    </>
  )
}
