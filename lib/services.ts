export type ServiceSummary = {
  slug: string
  title: string
  shortTitle: string
  href: string
  capacityRange: string
  description: string
  heroImage: string
}

/**
 * Canonical list of the four localized, high-intent service landing pages.
 * Referenced by the homepage, /services index, footer, and sitemap so every
 * surface links consistently to the same set of URLs.
 */
export const services: ServiceSummary[] = [
  {
    slug: "forklift-rental-abu-dhabi",
    title: "Forklift Rental in Abu Dhabi",
    shortTitle: "Forklift Rental",
    href: "/services/forklift-rental-abu-dhabi",
    capacityRange: "3 Ton – 25 Ton",
    description:
      "Diesel and electric forklifts from 3 to 25 tons for Musaffah, ICAD, and Khalifa Industrial Zone warehouses, ports, and factories.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
  },
  {
    slug: "mobile-crane-rental-uae",
    title: "Mobile Crane Rental UAE-Wide",
    shortTitle: "Mobile Crane Rental",
    href: "/services/mobile-crane-rental-uae",
    capacityRange: "25 Ton – 500 Ton",
    description:
      "All-terrain mobile cranes with certified riggers and operators for complex lifts across Abu Dhabi, Dubai, and every emirate.",
    heroImage: "/images/mobile-crane.jpeg",
  },
  {
    slug: "telehandler-rental",
    title: "Telehandler Rental",
    shortTitle: "Telehandler Rental",
    href: "/services/telehandler-rental",
    capacityRange: "3 Ton – 10 Ton · 5m – 17m Reach",
    description:
      "Compact, high-reach telehandlers for confined construction sites, warehouses, and material handling in tight spaces.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
  },
  {
    slug: "man-lift-access",
    title: "Man Lift & Aerial Access Rental",
    shortTitle: "Man Lift / Aerial Access",
    href: "/services/man-lift-access",
    capacityRange: "10m – 50m Working Height",
    description:
      "Scissor lifts and boom lifts for safe elevated maintenance, installation, and construction work at height.",
    heroImage: "/images/fleet/scissor-lift.jpg",
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
