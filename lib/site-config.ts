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
  // MUST match the host that actually serves content and holds a valid TLS
  // certificate. The apex (sevenlift.net) currently fails the SSL handshake, so
  // canonicals, sitemap entries, and schema URLs all point at www.
  domain: "www.sevenlift.net",
  url: "https://www.sevenlift.net",
  tagline: "Heavy Equipment & Forklift Rental Across the UAE",
  description:
    "Seven Lift General Transport provides forklift, mobile crane, telehandler, and man lift rental across the UAE, with dedicated coverage in Abu Dhabi (Musaffah, ICAD, KIZAD) and Dubai (JAFZA, Al Quoz, Dubai Industrial City). Certified operators, flexible terms, 24/7 emergency deployment.",
  foundingYear: 2010,

  phoneDisplay: "+971 56 639 0908",
  phoneE164: "+971566390908",
  telHref: "tel:+971566390908",
  whatsappNumber: "971566390908",
  // The endpoint wa.me redirects to. Linking it directly saves visitors a
  // redirect hop and clears "links to redirect" warnings in site audits.
  whatsappHref: "https://api.whatsapp.com/send?phone=971566390908",
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

  // GA4 web stream for https://www.sevenlift.net (stream "sevenlift"). Public
  // by design; NEXT_PUBLIC_GA_ID overrides it, e.g. to point previews elsewhere.
  gaMeasurementId: "G-MV20JLJHYW",

  openingHours: "Mo-Su 00:00-23:59",
  // schema.org expects a symbolic range ("$$"), not a currency string. Rates are
  // quote-based, so this stays symbolic rather than naming figures.
  priceRange: "$$",
} as const

/** Whole years trading, derived from the founding year so it never goes stale. */
export const yearsInBusiness = new Date().getFullYear() - siteConfig.foundingYear

export function waLink(message: string) {
  return `${siteConfig.whatsappHref}&text=${encodeURIComponent(message)}`
}

export const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]
