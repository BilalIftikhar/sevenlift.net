import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { locations, getLocationBySlug } from "@/lib/locations"
import { equipmentLinksForLocation } from "@/lib/service-areas"
import { abuDhabiAreas } from "@/lib/abu-dhabi-areas"
import { siteConfig } from "@/lib/site-config"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  return pageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: location.href,
    image: location.heroImage,
    keywords: location.keywords,
  })
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const cityLinks = location.nearby
    .map((nearbySlug) => getLocationBySlug(nearbySlug))
    .filter((nearby) => Boolean(nearby))
    .map((nearby) => ({
      name: `Equipment Rental ${nearby!.cityName}`,
      href: nearby!.href,
    }))

  // The Abu Dhabi hub is the parent of the district pages, so it links to all of them.
  const isAbuDhabi = location.slug === "abu-dhabi-musaffah"
  const nearbyLinks = isAbuDhabi
    ? [...abuDhabiAreas.map((area) => ({ name: `Equipment Rental ${area.name}`, href: area.href })), ...cityLinks]
    : cityLinks

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: location.shortTitle, url: `${siteConfig.url}${location.href}` },
          ]),
          // A Service with areaServed, not a LocalBusiness: the only physical
          // premises is the Musaffah yard, and Google's guidelines reject
          // LocalBusiness markup for cities without a physical location.
          serviceSchema({
            name: location.title,
            serviceType: "Heavy equipment rental",
            description: location.metaDescription,
            areaServed: location.areaServed,
            url: `${siteConfig.url}${location.href}`,
          }),
          faqSchema(location.faqs),
        ]}
      />
      <LocationLandingTemplate
        eyebrow={location.eyebrow}
        title={location.title}
        cityName={location.cityName}
        intro={location.intro}
        heroImage={location.heroImage}
        heroImageAlt={location.heroImageAlt}
        areas={location.areas}
        serviceLinks={equipmentLinksForLocation(location)}
        whyHeading={location.whyHeading}
        whyPoints={location.whyPoints}
        faqs={location.faqs}
        nearbyLinks={nearbyLinks}
        nearbyHeading={isAbuDhabi ? "Abu Dhabi Areas We Serve" : undefined}
        ctaHeading={location.ctaHeading}
        ctaSubheading={location.ctaSubheading}
        whatsappMessage={location.whatsappMessage}
      />
    </>
  )
}
