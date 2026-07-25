/**
 * Single source of truth for company/NAP data, contact links, and service-area
 * lists referenced across metadata, JSON-LD schema, header, footer, and content.
 *
 * TODO (owner action required before go-live): verify `address` and `geo`
 * against the registered trade license address, and fill in real social URLs.
 */

export const siteConfig = {
  name: "Seven Lift General Transport",
  legalName: "Seven Lift General Transport L.L.C.",
  shortName: "Seven Lift",
  domain: "sevenlift.net",
  url: "https://sevenlift.net",
  tagline: "Heavy Equipment & Forklift Rental Across the UAE",
  description:
    "Seven Lift General Transport provides forklift, mobile crane, telehandler, and man lift rental across the UAE, with dedicated coverage in Abu Dhabi (Musaffah, ICAD, KIZAD) and Dubai (JAFZA, Al Quoz, Dubai Industrial City). Certified operators, flexible terms, 24/7 emergency deployment.",
  foundingYear: 2010,
  yearsInBusiness: 15,

  phoneDisplay: "+971 56 639 0908",
  phoneE164: "+971566390908",
  telHref: "tel:+971566390908",
  whatsappNumber: "971566390908",
  whatsappHref: "https://wa.me/971566390908",
  email: "info@sevenlift.net",

  address: {
    streetAddress: "Musaffah Industrial Area, M-44",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    postalCode: "",
    addressCountry: "AE",
  },
  geo: {
    latitude: 24.3702,
    longitude: 54.5045,
  },

  social: {
    instagram: "https://instagram.com/sevenlift",
    linkedin: "https://www.linkedin.com/company/sevenlift",
    facebook: "https://facebook.com/sevenlift",
  },

  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "AED AED-AED AED",
} as const

export function waLink(message: string) {
  return `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`
}

export type ServiceArea = {
  name: string
  emirate: "Abu Dhabi" | "Dubai" | "Sharjah" | "Ajman" | "Ras Al Khaimah" | "Fujairah" | "Al Ain"
}

export const serviceAreas: ServiceArea[] = [
  { name: "Musaffah Industrial City", emirate: "Abu Dhabi" },
  { name: "ICAD (Industrial City of Abu Dhabi)", emirate: "Abu Dhabi" },
  { name: "Khalifa Industrial Zone Abu Dhabi (KIZAD)", emirate: "Abu Dhabi" },
  { name: "Mussafah Shabiya", emirate: "Abu Dhabi" },
  { name: "Al Ain Industrial Area", emirate: "Al Ain" },
  { name: "Jebel Ali Free Zone (JAFZA)", emirate: "Dubai" },
  { name: "Dubai Industrial City", emirate: "Dubai" },
  { name: "Al Quoz Industrial Area", emirate: "Dubai" },
  { name: "Dubai Investment Park (DIP)", emirate: "Dubai" },
  { name: "Business Bay", emirate: "Dubai" },
  { name: "Sharjah Industrial Areas", emirate: "Sharjah" },
  { name: "Ajman Industrial Zone", emirate: "Ajman" },
  { name: "Ras Al Khaimah", emirate: "Ras Al Khaimah" },
  { name: "Fujairah", emirate: "Fujairah" },
]

export const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]
