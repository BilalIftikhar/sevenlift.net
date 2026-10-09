import type { AreaLink } from "@/components/service-landing-template"

/**
 * Links to the crane-by-capacity pages (lib/crane-capacity.ts). Kept in its own
 * module so lib/service-areas.ts can link to them without importing the pages,
 * which themselves import from lib/service-areas.ts.
 */
export const craneCapacityLinks: AreaLink[] = [
  { name: "25 Ton Crane Rental Abu Dhabi", href: "/services/25-ton-crane-rental-abu-dhabi" },
  { name: "50 Ton Crane Rental Abu Dhabi", href: "/services/50-ton-crane-rental-abu-dhabi" },
  { name: "100 Ton Crane Rental Abu Dhabi", href: "/services/100-ton-crane-rental-abu-dhabi" },
  { name: "200 Ton Crane Rental Abu Dhabi", href: "/services/200-ton-crane-rental-abu-dhabi" },
  { name: "500 Ton Crane Rental UAE", href: "/services/500-ton-crane-rental-uae" },
]
