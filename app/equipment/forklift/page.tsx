import type { Metadata } from "next"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { cityLinksForEquipment } from "@/lib/service-areas"

export const metadata: Metadata = pageMetadata({
  title: "Forklift Rental Fleet | 3 to 25 Ton Models",
  description:
    "Forklift fleet specs: 3, 5, 10 and 25 ton diesel and electric forklifts for rent across the UAE. Certified operators, daily to monthly plans.",
  path: "/equipment/forklift",
})

const forklifts = [
  {
    capacity: "3 Ton",
    specs: ["Standard warehouse operations", "Indoor/outdoor capability", "Comfortable cabin", "Precision mast control"],
  },
  {
    capacity: "5 Ton",
    specs: ["Heavy-duty construction material", "Extended reach mast", "Heavy-duty tires", "Powerful hydraulics"],
  },
  {
    capacity: "10 Ton",
    specs: ["Maximum payload capacity", "Container handling", "Industrial-grade construction", "Professional operators available"],
  },
  {
    capacity: "25 Ton",
    specs: ["Heavy industrial equipment", "Maximum reach and lift", "Full safety certification", "Expert operator included"],
  },
]

const features = [
  { title: "Certified Operators", description: "All operators are fully trained and certified by industry standards" },
  { title: "Regular Maintenance", description: "Every forklift is meticulously maintained and inspected" },
  { title: "24/7 Support", description: "Round-the-clock customer support and emergency assistance" },
  { title: "Flexible Rental", description: "Daily, weekly, or monthly rental packages available" },
  { title: "Clear Quotes", description: "Written quotes with no hidden charges" },
  { title: "Insurance Included", description: "Full insurance coverage on all rental equipment" },
]

const faqs = [
  {
    question: "What size forklift do I need?",
    answer:
      "Size the forklift from your heaviest load, then allow a margin for lift height, because capacity falls as the forks go higher. A 3 ton forklift suits standard pallets, 5 ton suits heavier pallets and steel bundles, 7 to 10 ton handles container work, and 15 to 25 ton moves machinery and steel coils.",
  },
  {
    question: "Diesel or electric forklift: which should I rent?",
    answer:
      "Rent diesel for outdoor yards, rough ground and loads above 5 ton. Rent electric for indoor work on finished floors, cold stores and food or pharma warehouses where exhaust fumes are not allowed.",
  },
  {
    question: "Can I rent a forklift without an operator?",
    answer:
      "Yes, if your own operator holds a valid forklift licence. We can also supply a certified operator with the machine for any hire period.",
  },
  {
    question: "How long can I rent a forklift for?",
    answer:
      "Hire runs from a single day to monthly and longer contracts. Monthly hire costs less per day and suits warehouses that need a forklift on every shift.",
  },
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
          faqSchema(faqs),
        ]}
      />
      <EquipmentDetailTemplate
        eyebrow="Our Fleet"
        title="Forklift Rental Fleet: 3 to 25 Ton Diesel and Electric"
        intro="Diesel and electric forklifts from 3 to 25 ton, with side loaders for long loads. Hire by the day, week or month, with or without a certified operator."
        modelsHeading="Available Forklift Models"
        models={forklifts}
        featuresEyebrow="Why Choose Us"
        featuresHeading="Why Seven Lift for Forklift Rentals"
        features={features}
        cityLinks={{ heading: "Rent a Forklift by City", links: cityLinksForEquipment("forklift") }}
        faqs={faqs}
        ctaHeading="Ready to Get Started?"
        ctaSubheading="Contact us today for a free consultation and competitive quote on your forklift rental needs."
        whatsappMessage="I am interested in forklift rental services."
        equipment="forklift"
      />
    </>
  )
}
