export type LocationSummary = {
  slug: string
  title: string
  shortTitle: string
  href: string
  emirate: string
  description: string
  heroImage: string
  areas: string[]
  geo: { latitude: number; longitude: number }
}

/**
 * Canonical list of geo-targeted landing pages. Referenced by the homepage,
 * /locations index, footer, and sitemap.
 */
export const locations: LocationSummary[] = [
  {
    slug: "abu-dhabi-musaffah",
    title: "Heavy Equipment Rental in Abu Dhabi & Musaffah",
    shortTitle: "Abu Dhabi / Musaffah",
    href: "/locations/abu-dhabi-musaffah",
    emirate: "Abu Dhabi",
    description:
      "Forklift, mobile crane, telehandler, and man lift rental for Musaffah Industrial City, ICAD, and Khalifa Industrial Zone.",
    heroImage: "/images/site/port-container-yard.jpg",
    areas: [
      "Musaffah Industrial City (M1–M44)",
      "ICAD 1, 2 & 3 (Industrial City of Abu Dhabi)",
      "Khalifa Industrial Zone Abu Dhabi (KIZAD)",
      "Mussafah Shabiya",
      "Al Ain Industrial Area",
    ],
    geo: { latitude: 24.3702, longitude: 54.5045 },
  },
  {
    slug: "dubai",
    title: "Heavy Equipment Rental in Dubai",
    shortTitle: "Dubai",
    href: "/locations/dubai",
    emirate: "Dubai",
    description:
      "Forklift, mobile crane, telehandler, and man lift rental for Jebel Ali Free Zone (JAFZA), Al Quoz, and Dubai Industrial City.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    areas: [
      "Jebel Ali Free Zone (JAFZA)",
      "Dubai Industrial City",
      "Al Quoz Industrial Area",
      "Dubai Investment Park (DIP)",
      "Business Bay & Downtown Dubai",
    ],
    geo: { latitude: 25.0225, longitude: 55.1281 },
  },
]

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug)
}
