import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import EquipmentShowcase from "@/components/equipment-showcase"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import CoverageSection from "@/components/coverage-section"
import Features from "@/components/features"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { localBusinessSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Forklift, Crane & Heavy Equipment Rental in Abu Dhabi & Dubai",
  description:
    "Seven Lift General Transport rents forklifts (3-25 ton), mobile cranes (25-500 ton), telehandlers, and man lifts across the UAE. Certified operators, flexible terms, 24/7 emergency deployment in Musaffah, ICAD, JAFZA & Dubai.",
  path: "/",
})

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd data={localBusinessSchema()} />
      <Header />
      <HeroSection />
      <EquipmentShowcase />
      <ServicesSection />
      <WhyChooseUs />
      <CoverageSection />
      <Features />
      <ContactSection />
      <Footer />
    </main>
  )
}
