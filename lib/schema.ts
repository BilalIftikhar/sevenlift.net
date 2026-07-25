import { siteConfig } from "@/lib/site-config"

type WithContext<T> = T & { "@context": "https://schema.org" }

const baseAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.streetAddress,
  addressLocality: siteConfig.address.addressLocality,
  addressRegion: siteConfig.address.addressRegion,
  addressCountry: siteConfig.address.addressCountry,
}

const baseGeo = {
  "@type": "GeoCoordinates",
  latitude: siteConfig.geo.latitude,
  longitude: siteConfig.geo.longitude,
}

/**
 * Core LocalBusiness entity for the whole company, reused (with area-specific
 * overrides) across the homepage and every /locations page.
 */
export function localBusinessSchema(opts?: {
  areaServed?: string[]
  geo?: { latitude: number; longitude: number }
  url?: string
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: opts?.url ?? siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    image: `${siteConfig.url}/images/brand/logo-icon-512.png`,
    logo: `${siteConfig.url}/images/brand/logo-icon-512.png`,
    address: baseAddress,
    geo: opts?.geo ? { "@type": "GeoCoordinates", ...opts.geo } : baseGeo,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed:
      opts?.areaServed?.map((name) => ({ "@type": "City", name })) ??
      ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain"].map(
        (name) => ({ "@type": "City", name }),
      ),
    sameAs: Object.values(siteConfig.social),
  }
}

export function organizationSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo-icon-512.png`,
    foundingDate: `${siteConfig.foundingYear}`,
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneE164,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
    },
  }
}

export function websiteSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  areaServed?: string[]
  serviceType: string
  url: string
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: (opts.areaServed ?? ["Abu Dhabi", "Dubai", "United Arab Emirates"]).map((name) => ({
      "@type": "City",
      name,
    })),
    url: opts.url,
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function blogPostingSchema(opts: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image: string
  authorName: string
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: `${siteConfig.url}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: `${siteConfig.url}/blog/${opts.slug}`,
    url: `${siteConfig.url}/blog/${opts.slug}`,
    author: {
      "@type": "Organization",
      name: opts.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/brand/logo-icon-512.png`,
      },
    },
  }
}
