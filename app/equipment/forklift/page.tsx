import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Forklift Rental Fleet | 3 to 25 Ton Models",
  description:
    "Full forklift fleet specifications: 3, 5, 10, and 25 ton diesel and electric forklifts for rent across the UAE, with certified operators and daily, weekly, or monthly plans.",
  path: "/equipment/forklift",
})

const forklifts = [
  {
    capacity: "3 Ton",
    specs: ["Standard warehouse operations", "Indoor/outdoor capability", "Comfortable cabin", "Precision mast control"],
    price: "From AED 1,500/day",
  },
  {
    capacity: "5 Ton",
    specs: ["Heavy-duty construction material", "Extended reach mast", "Heavy-duty tires", "Powerful hydraulics"],
    price: "From AED 2,000/day",
  },
  {
    capacity: "10 Ton",
    specs: ["Maximum payload capacity", "Container handling", "Industrial-grade construction", "Professional operators available"],
    price: "From AED 3,500/day",
  },
  {
    capacity: "25 Ton",
    specs: ["Heavy industrial equipment", "Maximum reach and lift", "Full safety certification", "Expert operator included"],
    price: "From AED 5,000/day",
  },
]

const features = [
  { title: "Certified Operators", description: "All operators are fully trained and certified by industry standards" },
  { title: "Regular Maintenance", description: "Every forklift is meticulously maintained and inspected" },
  { title: "24/7 Support", description: "Round-the-clock customer support and emergency assistance" },
  { title: "Flexible Rental", description: "Daily, weekly, or monthly rental packages available" },
  { title: "Competitive Pricing", description: "Best rates in the UAE with transparent pricing" },
  { title: "Insurance Included", description: "Full insurance coverage on all rental equipment" },
]

export default function ForkliftsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Equipment", url: `${siteConfig.url}/equipment` },
            { name: "Forklift Rental", url: `${siteConfig.url}/equipment/forklift` },
          ]),
          serviceSchema({
            name: "Forklift Rental",
            serviceType: "Forklift rental",
            description: "3 to 25 ton diesel and electric forklift rental with certified operators across the UAE.",
            url: `${siteConfig.url}/equipment/forklift`,
          }),
        ]}
      />
      <EquipmentDetailTemplate
        eyebrow="Our Fleet"
        title="Premium Forklift Rental Services"
        intro="Comprehensive forklift solutions with certified operators, maintenance, and 24/7 support for all your material handling needs across the UAE."
        modelsHeading="Available Forklift Models"
        models={forklifts}
        featuresEyebrow="Why Choose Us"
        featuresHeading="Why Seven Lift for Forklift Rentals"
        features={features}
        ctaHeading="Ready to Get Started?"
        ctaSubheading="Contact us today for a free consultation and competitive quote on your forklift rental needs."
        whatsappMessage="I am interested in forklift rental services."
      />
    </>
  )
}
