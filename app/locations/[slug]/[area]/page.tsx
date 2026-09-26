import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { cityDistricts, getCityDistrict } from "@/lib/city-districts"
import { getLocationBySlug } from "@/lib/locations"
import { equipmentLinksForLocation } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

type PageProps = { params: Promise<{ slug: string; area: string }> }

/**
 * District pages inside Dubai and Sharjah (/locations/dubai/al-quoz). Abu Dhabi
 * districts have their own static /locations/abu-dhabi/[area] route, which
 * takes precedence over this one.
 */
export function generateStaticParams() {
  return cityDistricts.map((district) => ({ slug: district.citySlug, area: district.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, area } = await params
  const district = getCityDistrict(slug, area)
  if (!district) return {}

  return pageMetadata({
    title: district.metaTitle,
    description: district.metaDescription,
    path: district.href,
    image: district.heroImage,
    keywords: district.keywords,
  })
}

export default async function CityDistrictPage({ params }: PageProps) {
  const { slug, area } = await params
  const district = getCityDistrict(slug, area)
  const city = getLocationBySlug(slug)
  if (!district || !city) notFound()

  const url = `${siteConfig.url}${district.href}`

  const nearbyLinks = [
    ...district.nearby
      .map((nearbySlug) => cityDistricts.find((candidate) => candidate.slug === nearbySlug))
      .filter((nearby) => Boolean(nearby))
      .map((nearby) => ({ name: `Equipment Rental ${nearby!.name}`, href: nearby!.href })),
    { name: `Equipment Rental ${city.cityName}`, href: city.href },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: city.shortTitle, url: `${siteConfig.url}${city.href}` },
            { name: district.name, url },
          ]),
          serviceSchema({
            name: district.title,
            serviceType: "Heavy equipment rental",
            description: district.metaDescription,
            areaServed: district.areaServed,
            url,
          }),
          faqSchema(district.faqs),
        ]}
      />
      <LocationLandingTemplate
        eyebrow={district.eyebrow}
        title={district.title}
        cityName={district.name}
        intro={district.intro}
        heroImage={district.heroImage}
        heroImageAlt={district.heroImageAlt}
        areas={district.zones}
        localContext={district.context}
        serviceLinks={equipmentLinksForLocation(city)}
        whyHeading={district.whyHeading}
        whyPoints={district.whyPoints}
        faqs={district.faqs}
        nearbyLinks={nearbyLinks}
        nearbyHeading="Nearby Areas"
        ctaHeading={district.ctaHeading}
        ctaSubheading={district.ctaSubheading}
        whatsappMessage={district.whatsappMessage}
      />
    </>
  )
}
