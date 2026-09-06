import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { serviceAreaPages, getServiceAreaPage } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

type PageProps = { params: Promise<{ slug: string }> }

/**
 * Generates the service × city landing pages. The four hand-written pages under
 * app/services/ (forklift-rental-abu-dhabi, mobile-crane-rental-uae,
 * telehandler-rental, man-lift-access) are static route segments, which take
 * precedence over this dynamic route, and are excluded from `serviceAreaPages`.
 */
export function generateStaticParams() {
  return serviceAreaPages.map((page) => ({ slug: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getServiceAreaPage(slug)
  if (!page) return {}

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.href,
    image: page.equipment.heroImage,
    keywords: page.keywords,
  })
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params
  const page = getServiceAreaPage(slug)
  if (!page) notFound()

  const url = `${siteConfig.url}${page.href}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: page.cardTitle, url },
          ]),
          serviceSchema({
            name: page.h1,
            serviceType: `${page.equipment.label} rental`,
            description: page.metaDescription,
            areaServed: page.areaServed,
            url,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        heroImage={page.equipment.heroImage}
        heroImageAlt={page.equipment.heroImageAltFor(page.location.cityName)}
        specs={page.specs}
        bulletGroups={page.bulletGroups}
        areasHeading={page.areasHeading}
        areas={page.areas}
        faqs={page.faqs}
        ctaHeading={page.ctaHeading}
        ctaSubheading={page.ctaSubheading}
        whatsappMessage={page.whatsappMessage}
      />
    </>
  )
}
