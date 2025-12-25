"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import EquipmentShowcase from "@/components/equipment-showcase"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import CoverageSection from "@/components/coverage-section"
import Features from "@/components/features"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
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
