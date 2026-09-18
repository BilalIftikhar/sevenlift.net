import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { abuDhabiAreas, getAbuDhabiArea } from "@/lib/abu-dhabi-areas"
import { getLocationBySlug } from "@/lib/locations"
import { equipmentLinksForLocation } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

type PageProps = { params: Promise<{ area: string }> }

export function generateStaticParams() {
  return abuDhabiAreas.map((area) => ({ area: area.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area: slug } = await params
  const area = getAbuDhabiArea(slug)
  if (!area) return {}

  return pageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: area.href,
    image: area.heroImage,
    keywords: area.keywords,
  })
}

export default async function AbuDhabiAreaPage({ params }: PageProps) {
  const { area: slug } = await params
  const area = getAbuDhabiArea(slug)
  const abuDhabi = getLocationBySlug("abu-dhabi-musaffah")
  if (!area || !abuDhabi) notFound()

  const url = `${siteConfig.url}${area.href}`

  const nearbyLinks = [
    ...area.nearby
      .map((nearbySlug) => getAbuDhabiArea(nearbySlug))
      .filter((nearby) => Boolean(nearby))
      .map((nearby) => ({ name: `Equipment Rental ${nearby!.name}`, href: nearby!.href })),
    { name: "Equipment Rental Abu Dhabi & Musaffah", href: abuDhabi.href },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: "Abu Dhabi", url: `${siteConfig.url}${abuDhabi.href}` },
            { name: area.name, url },
          ]),
          serviceSchema({
            name: area.title,
            serviceType: "Heavy equipment rental",
            description: area.metaDescription,
            areaServed: area.areaServed,
            url,
          }),
          faqSchema(area.faqs),
        ]}
      />
      <LocationLandingTemplate
        eyebrow={area.eyebrow}
        title={area.title}
        cityName={area.name}
        intro={area.intro}
        heroImage={area.heroImage}
        heroImageAlt={area.heroImageAlt}
        areas={area.zones}
        localContext={area.context}
        serviceLinks={equipmentLinksForLocation(abuDhabi)}
        whyHeading={area.whyHeading}
        whyPoints={area.whyPoints}
        faqs={area.faqs}
        nearbyLinks={nearbyLinks}
        nearbyHeading="Nearby Abu Dhabi Areas"
        ctaHeading={area.ctaHeading}
        ctaSubheading={area.ctaSubheading}
        whatsappMessage={area.whatsappMessage}
      />
    </>
  )
}
