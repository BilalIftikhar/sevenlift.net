import type { Faq } from "@/lib/faqs"
import { locations, type EquipmentKey, type LocationSummary } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"
import type { BulletGroup, SpecRow, AreaLink, LocalContext } from "@/components/service-landing-template"

/**
 * Generates the service × city landing pages that give the site UAE-wide
 * organic coverage (e.g. /services/forklift-rental-sharjah).
 *
 * Every generated page interpolates real, location-specific detail — industrial
 * zones, dominant industries, mobilization reality — so the pages are genuinely
 * distinct rather than a templated city swap, which Google treats as a doorway.
 */

export type EquipmentType = {
  key: EquipmentKey
  /** URL prefix, combined with the city slug: `${slugBase}-${citySlug}`. */
  slugBase: string
  /** Singular noun, mid-sentence: "forklift". */
  noun: string
  /** Plural noun, mid-sentence: "forklifts". */
  nounPlural: string
  /** Title-case label: "Forklift". */
  label: string
  capacityRange: string
  capacityLabel: string
  heroImage: string
  heroImageAltFor: (city: string) => string
  /** Link to the equipment spec page. */
  equipmentHref: string
  fleetItems: string[]
  /** The job this machine actually does, used in intro copy. */
  useCase: string
  /** Typical lead time phrasing. */
  leadTime: string
  extraSpec: SpecRow
}

export const equipmentTypes: EquipmentType[] = [
  {
    key: "forklift",
    slugBase: "forklift-rental",
    noun: "forklift",
    nounPlural: "forklifts",
    label: "Forklift",
    capacityRange: "3–25 Ton",
    capacityLabel: "Capacity Range",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAltFor: (city) => `Diesel forklift handling pallets at a warehouse in ${city}`,
    equipmentHref: "/equipment/forklift",
    fleetItems: [
      "3–5 ton diesel & electric forklifts for standard pallet handling",
      "7–10 ton forklifts for container stuffing and heavy pallet loads",
      "15–25 ton industrial forklifts for machinery and steel coils",
      "Side loaders for long materials — pipe, timber, and steel sections",
      "Non-marking tyres and indoor-rated electric units on request",
    ],
    useCase: "pallet handling, container loading, and moving heavy material around yards and warehouses",
    leadTime: "Same-day and next-day delivery",
    extraSpec: { label: "Mast Options", value: "3–6 m" },
  },
  {
    key: "mobile-crane",
    slugBase: "mobile-crane-rental",
    noun: "mobile crane",
    nounPlural: "mobile cranes",
    label: "Mobile Crane",
    capacityRange: "25–500 Ton",
    capacityLabel: "Lifting Capacity",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAltFor: (city) => `All-terrain mobile crane set up on a project site in ${city}`,
    equipmentHref: "/equipment/mobile-crane",
    fleetItems: [
      "25–50 ton all-terrain cranes for general site lifting",
      "80–160 ton cranes for structural steel and precast erection",
      "200–500 ton cranes for heavy plant and modular installation",
      "Certified riggers, banksmen, and documented lift plans",
      "Load charts and third-party inspection certificates supplied",
    ],
    useCase: "structural erection, plant installation, and heavy machinery relocation",
    leadTime: "Advance scheduling (3–5 days for larger capacities)",
    extraSpec: { label: "Riggers", value: "Certified" },
  },
  {
    key: "telehandler",
    slugBase: "telehandler-rental",
    noun: "telehandler",
    nounPlural: "telehandlers",
    label: "Telehandler",
    capacityRange: "3–10 Ton",
    capacityLabel: "Lift Capacity",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAltFor: (city) => `Telehandler placing material at height on a ${city} construction site`,
    equipmentHref: "/equipment/telehandler",
    fleetItems: [
      "3–4 ton compact telehandlers with 7 m reach for tight sites",
      "4–6 ton units with 13–17 m boom for multi-storey placement",
      "Up to 10 ton heavy telehandlers for structural material handling",
      "Fork, bucket, jib, and man-basket attachments available",
      "Rough-terrain tyres and four-wheel steer for unmade ground",
    ],
    useCase: "lifting and placing material at height on sites where a crane is too much and a forklift cannot reach",
    leadTime: "Same-day and next-day delivery",
    extraSpec: { label: "Max Reach", value: "5–17 m" },
  },
  {
    key: "man-lift",
    slugBase: "man-lift-rental",
    noun: "man lift",
    nounPlural: "man lifts",
    label: "Man Lift",
    capacityRange: "10–50 m",
    capacityLabel: "Working Height",
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAltFor: (city) => `Scissor lift used for elevated maintenance work in ${city}`,
    equipmentHref: "/equipment/man-lift",
    fleetItems: [
      "Electric scissor lifts (10–14 m) for indoor and finished-floor work",
      "Rough-terrain diesel scissor lifts (12–18 m) for outdoor sites",
      "Articulating boom lifts (16–28 m) for reaching over obstacles",
      "Telescopic boom lifts (30–50 m) for facade and high-level access",
      "Non-marking tyres and low-noise electric units for occupied buildings",
    ],
    useCase: "safe elevated access during maintenance, installation, cleaning, and inspection work",
    leadTime: "Same-day and next-day delivery",
    extraSpec: { label: "Platform", value: "2–3 Person" },
  },
]

/**
 * URL token for a city. Differs from the location slug where the location page
 * carries a compound name (abu-dhabi-musaffah → abu-dhabi).
 */
const CITY_SLUG_OVERRIDES: Record<string, string> = {
  "abu-dhabi-musaffah": "abu-dhabi",
}

export function citySlugFor(location: LocationSummary) {
  return CITY_SLUG_OVERRIDES[location.slug] ?? location.slug
}

/**
 * Slugs already served by hand-written pages under app/services/. Static route
 * segments win over the dynamic [slug] route in Next.js, so these are excluded
 * from generation to keep one canonical page per URL.
 */
export const HAND_WRITTEN_SERVICE_SLUGS = [
  "forklift-rental-abu-dhabi",
  "mobile-crane-rental-uae",
  "telehandler-rental",
  "man-lift-access",
]

export type ServiceAreaPage = {
  slug: string
  href: string
  equipment: EquipmentType
  location: LocationSummary
  /** Card title used on the /services index. */
  cardTitle: string
  cardDescription: string

  eyebrow: string
  h1: string
  intro: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  localContext: LocalContext
  areasHeading: string
  areas: AreaLink[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
  areaServed: string[]
}

function buildFaqs(equipment: EquipmentType, location: LocationSummary): Faq[] {
  const city = location.cityName
  const topAreas = location.areas.slice(0, 3).join(", ")
  const primaryIndustry = location.industries[0]

  const shared: Faq[] = [
    {
      question: `Do you deliver ${equipment.nounPlural} to ${topAreas}?`,
      answer: `Yes. ${location.areas.slice(0, 4).join(", ")} are all within our ${city} coverage. ${equipment.leadTime} is standard for ${equipment.nounPlural} here, and we confirm the exact slot when you send your site location.`,
    },
    {
      question: `What ${equipment.noun} capacities are available in ${city}?`,
      answer: `Our ${city} fleet covers ${equipment.capacityRange} (${equipment.capacityLabel.toLowerCase()}). We size the unit to the job rather than sending whatever is free — tell us the load weight, the working height or reach, and the ground conditions, and we will specify it.`,
    },
    {
      question: `Is a certified operator included with ${equipment.noun} rental in ${city}?`,
      answer: `Yes, every ${equipment.noun} rental can be supplied with a licensed, certified operator. If you have certified staff in house, self-drive hire is available at a lower rate, and we will supply the machine documentation your safety officer needs.`,
    },
    {
      question: `What rental terms do you offer for ${equipment.nounPlural} in ${city}?`,
      answer: `Daily, weekly, and monthly hire, extendable on site without a new contract. Given ${city}'s ${primaryIndustry}, ${location.primary ? "both short-term and monthly contracts are common here" : "monthly rates usually work out better than repeated day hire"}. Servicing and breakdown replacement are included for the full term.`,
    },
  ]

  const equipmentSpecific: Record<EquipmentKey, Faq> = {
    forklift: {
      question: `Can you supply electric ${equipment.nounPlural} for indoor work in ${city}?`,
      answer: `Yes. We supply electric ${equipment.nounPlural} with non-marking tyres for work on finished floors, cold stores, and food-grade facilities — the usual requirement for indoor warehouse operations across ${city}.`,
    },
    "mobile-crane": {
      question: `Do you provide lift plans and permits for crane work in ${city}?`,
      answer: `We supply load charts, third-party inspection certificates, operator and rigger certifications, and a documented lift plan for every job. These are the documents your contractor or the ${city} authority will ask for; our team can advise on the approval route for your specific site.`,
    },
    telehandler: {
      question: `Which telehandler size suits a typical ${city} site?`,
      answer: `${location.demandNote} For most work here a 3–4 ton compact unit with 7 m reach handles it; where you need to place material at height on multi-storey work, the 13–17 m boom units are the right call.`,
    },
    "man-lift": {
      question: `Can you supply man lifts for occupied buildings in ${city}?`,
      answer: `Yes. For work in occupied offices, malls, and hotels across ${city} we supply low-noise electric scissor and boom lifts with non-marking tyres, which are accepted for use on finished floors during business hours.`,
    },
  }

  const closing: Faq = {
    question: `How quickly can you get a ${equipment.noun} to my site in ${city}?`,
    answer: location.primary
      ? `${city} is one of our core coverage areas, so same-day mobilization is realistic for standard ${equipment.nounPlural} and we can often be on site within a few hours for urgent requests.`
      : `We run a scheduled route into ${city}, so next-day delivery is standard for ${equipment.nounPlural} and same-day is possible when a unit is already in the area. For larger capacities we ask for a few days' notice to route the right machine.`,
  }

  return [...shared.slice(0, 2), equipmentSpecific[equipment.key], ...shared.slice(2), closing]
}

function buildBulletGroups(equipment: EquipmentType, location: LocationSummary): BulletGroup[] {
  const city = location.cityName

  return [
    {
      title: `${equipment.label} Fleet Available in ${city}`,
      items: equipment.fleetItems,
    },
    {
      title: `Specified for ${city} Sites`,
      items: [
        `Delivered into ${location.areas.slice(0, 3).join(", ")}`,
        `Specified for ${location.industries[0]}`,
        `Also supporting ${location.industries[1]} and ${location.industries[2]}`,
        `${equipment.leadTime} on standard units`,
        location.primary
          ? `Fleet held nearby for same-day ${city} dispatch`
          : `Scheduled ${city} route keeps mobilization cost down`,
      ],
    },
    {
      title: "What's Included",
      items: [
        "Certified, licensed operator (optional — self-drive available)",
        "Full insurance cover on every unit",
        "Preventive maintenance and breakdown replacement",
        "Load charts and inspection certificates on request",
        `Daily, weekly, or monthly terms across ${city}`,
      ],
    },
  ]
}

export function localContextFor(equipment: EquipmentType, location: LocationSummary): LocalContext {
  return {
    heading: `Renting a ${equipment.label} in ${location.cityName}: What to Plan For`,
    paragraphs: location.equipmentNotes[equipment.key],
  }
}

function buildAreaLinks(equipment: EquipmentType, location: LocationSummary): AreaLink[] {
  // The other three machines in the same city — cross-links within the matrix
  // so every page is reachable from its siblings, not only from /services.
  const siblingLinks: AreaLink[] = equipmentTypes
    .filter((other) => other.key !== equipment.key)
    .map((other) => ({
      name: `${other.label} Rental ${location.cityName}`,
      href: serviceAreaHref(other, location),
    }))

  const nearbyLinks: AreaLink[] = location.nearby
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is LocationSummary => Boolean(l))
    .map((l) => ({
      name: `${equipment.label} Rental ${l.cityName}`,
      href: serviceAreaHref(equipment, l),
    }))

  return [
    { name: `All Equipment in ${location.cityName}`, href: location.href },
    { name: `${equipment.label} Specifications`, href: equipment.equipmentHref },
    ...siblingLinks,
    ...nearbyLinks,
    { name: "Full UAE Coverage", href: "/locations" },
  ]
}

function serviceAreaHref(equipment: EquipmentType, location: LocationSummary) {
  const slug = `${equipment.slugBase}-${citySlugFor(location)}`
  // Hand-written pages live at their own paths but under the same /services prefix.
  return `/services/${slug}`
}

function buildPage(equipment: EquipmentType, location: LocationSummary): ServiceAreaPage {
  const city = location.cityName
  const slug = `${equipment.slugBase}-${citySlugFor(location)}`
  const topZones = location.areas.slice(0, 3).join(", ")

  return {
    slug,
    href: `/services/${slug}`,
    equipment,
    location,
    cardTitle: `${equipment.label} Rental ${city}`,
    cardDescription: `${equipment.capacityRange} ${equipment.nounPlural} with certified operators for ${topZones}.`,

    eyebrow: `${equipment.label} Rental · ${city}`,
    h1: `${equipment.label} Rental in ${city}`,
    intro: `${equipment.capacityRange} ${equipment.nounPlural} in ${city} for ${equipment.useCase}. We deliver to ${topZones} — with certified operators, full insurance, and flexible daily to monthly terms. ${location.demandNote}`,
    // Kept inside Google's display limits: ~60 chars for title (before the
    // " | Seven Lift" template suffix) and ~155 for the description.
    metaTitle: `${equipment.label} Rental ${city} | ${equipment.capacityRange}`,
    metaDescription: `${equipment.label} rental in ${city} — ${equipment.capacityRange}, certified operators. Serving ${location.metaZoneShort}. Daily to monthly hire. Call ${siteConfig.phoneDisplay}.`,
    keywords: [
      `${equipment.noun} rental ${city}`,
      `${equipment.noun} hire ${city}`,
      `${equipment.noun} rental ${location.emirate}`,
      `${equipment.nounPlural} for rent ${city}`,
      ...location.areas.slice(0, 2).map((area) => `${equipment.noun} rental ${area}`),
    ],
    specs: [
      { label: equipment.capacityLabel, value: equipment.capacityRange },
      equipment.extraSpec,
      { label: "Operators", value: "Certified" },
      { label: "Support", value: "24/7" },
    ],
    bulletGroups: buildBulletGroups(equipment, location),
    localContext: localContextFor(equipment, location),
    areasHeading: `${equipment.label} Delivery Across ${city}`,
    areas: buildAreaLinks(equipment, location),
    faqs: buildFaqs(equipment, location),
    ctaHeading: `Need a ${equipment.label} in ${city}?`,
    ctaSubheading: `Send your load requirement and site location — we'll confirm the right unit and a delivery slot.`,
    whatsappMessage: `Hi Seven Lift, I need ${equipment.noun} rental in ${city}.`,
    areaServed: location.areaServed,
  }
}

/** Every generated service × city page, excluding hand-written URLs. */
export const serviceAreaPages: ServiceAreaPage[] = equipmentTypes
  .flatMap((equipment) => locations.map((location) => buildPage(equipment, location)))
  .filter((page) => !HAND_WRITTEN_SERVICE_SLUGS.includes(page.slug))

export function getServiceAreaPage(slug: string) {
  return serviceAreaPages.find((page) => page.slug === slug)
}

/**
 * Every equipment × city link, grouped by equipment type, for the /services
 * index. Includes cities served by a hand-written page (Abu Dhabi forklift), so
 * no city is missing from the grid.
 */
export function equipmentCityLinksByEquipment() {
  return equipmentTypes.map((equipment) => ({
    equipment,
    links: locations.map((location) => ({
      cityName: location.cityName,
      slug: `${equipment.slugBase}-${citySlugFor(location)}`,
      href: serviceAreaHref(equipment, location),
    })),
  }))
}

/** Generated pages for one city, used on the location landing pages. */
export function serviceAreaPagesForLocation(locationSlug: string) {
  return serviceAreaPages.filter((page) => page.location.slug === locationSlug)
}

/**
 * All four equipment links for a city, including any served by a hand-written
 * page. `forklift-rental-abu-dhabi` resolves to the same URL either way, so the
 * location pages can link the complete set without special-casing.
 */
export function equipmentLinksForLocation(location: LocationSummary) {
  return equipmentTypes.map((equipment) => ({
    key: equipment.key,
    label: `${equipment.label} Rental`,
    capacityRange: equipment.capacityRange,
    href: serviceAreaHref(equipment, location),
  }))
}

/**
 * Every city page for one equipment type, for the /equipment spec pages and the
 * hand-written service hubs. Resolves hand-written URLs the same way as the
 * /services grid.
 */
export function cityLinksForEquipment(key: EquipmentKey): AreaLink[] {
  const equipment = equipmentTypes.find((type) => type.key === key)
  if (!equipment) return []
  return locations.map((location) => ({
    name: `${equipment.label} Rental ${location.cityName}`,
    href: serviceAreaHref(equipment, location),
  }))
}
