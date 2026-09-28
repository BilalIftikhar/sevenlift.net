import type { Faq } from "@/lib/faqs"
import { locations, type EquipmentKey, type LocationSummary } from "@/lib/locations"
import { citySiteFacts, serviceAreaCopyFor, type ServiceAreaCopy } from "@/lib/service-area-copy"
import type { BulletGroup, SpecRow, AreaLink, LocalContext } from "@/components/service-landing-template"

/**
 * Generates the service × city landing pages that give the site UAE-wide
 * organic coverage (e.g. /services/forklift-rental-sharjah).
 *
 * Every generated page carries hand-written copy from lib/service-area-copy.ts
 * (intro, meta description, typical jobs, local FAQs) plus the city's own
 * equipment notes and site facts, so the pages are genuinely distinct rather
 * than a templated city swap, which Google treats as a doorway.
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
  /** Lead time in a few words, for meta descriptions. */
  leadTimeShort: string
  extraSpec: SpecRow
  /**
   * Selling point for the <title> on primary-city pages, where the searches are
   * competitive and the result needs a reason to be clicked over the others.
   */
  titleHook: string
  /** Other names people search for this machine ("manlift", "man basket"). */
  searchAliases: string[]
  /** Optional closing sentence for the intro, naming the machine the way buyers do. */
  introAside?: string
  /** UAE-wide pages for specific machines in this family (lib/specialty-services.ts). */
  familyLinks?: AreaLink[]
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
      "Side loaders for long materials such as pipe, timber, and steel sections",
      "Non-marking tyres and indoor-rated electric units on request",
    ],
    useCase: "pallet handling, container loading, and moving heavy material around yards and warehouses",
    leadTime: "Same-day and next-day delivery",
    leadTimeShort: "Same-day delivery",
    extraSpec: { label: "Mast Options", value: "3–6 m" },
    titleHook: "Same-Day, 3–25 Ton",
    familyLinks: [{ name: "Electric Forklift Rental", href: "/services/electric-forklift-rental" }],
    searchAliases: ["forklift hire", "diesel forklift rental", "electric forklift rental"],
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
    leadTimeShort: "Fast mobilization",
    extraSpec: { label: "Riggers", value: "Certified" },
    titleHook: "25–500 Ton + Operator",
    searchAliases: ["crane rental", "crane hire"],
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
    leadTimeShort: "Same-day delivery",
    extraSpec: { label: "Max Reach", value: "5–17 m" },
    titleHook: "Same-Day, 3–10 Ton",
    searchAliases: ["telescopic handler rental", "telehandler hire"],
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
    leadTimeShort: "Same-day delivery",
    extraSpec: { label: "Platform", value: "2–3 Person" },
    titleHook: "Manlift, Scissor & Boom",
    searchAliases: ["manlift rental", "man basket rental", "scissor lift rental", "boom lift rental"],
    familyLinks: [
      { name: "Scissor Lift Rental", href: "/services/scissor-lift-rental" },
      { name: "Boom Lift Rental", href: "/services/boom-lift-rental" },
    ],
    introAside:
      "Whether your site calls it a man lift, a manlift, a man basket, or an aerial work platform, tell us the working height and we will send the right one.",
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
  siteFacts: SpecRow[]
  areasHeading: string
  areas: AreaLink[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
  areaServed: string[]
}

function buildFaqs(equipment: EquipmentType, location: LocationSummary, copy: ServiceAreaCopy): Faq[] {
  const city = location.cityName

  const equipmentSpecific: Record<EquipmentKey, Faq> = {
    forklift: {
      question: `What should I tell you to get the right forklift in ${city}?`,
      answer: `Your heaviest regular load, the top lift height, and whether the floor is finished concrete or open yard. From that we size the capacity and mast, and choose diesel or electric. Our most common ${city} unit is a ${copy.typicalUnit.toLowerCase()}.`,
    },
    "mobile-crane": {
      question: `What do you need to quote a crane lift in ${city}?`,
      answer: `The load weight, its dimensions, the lift radius, and photos of the setup area. For ${city} lifts we also ask about access routes and any permit your site needs, then confirm the crane class and crew. A ${copy.typicalUnit.toLowerCase()} covers many jobs here.`,
    },
    telehandler: {
      question: `Which telehandler do you send most often in ${city}?`,
      answer: `A ${copy.typicalUnit.toLowerCase()}. We go larger when the load has to reach a higher floor or further over an obstacle, and we fit forks, bucket, or jib to suit the job.`,
    },
    "man-lift": {
      question: `Which man lift do you send most often in ${city}?`,
      answer: `A ${copy.typicalUnit.toLowerCase()}. Tell us the working height, whether the floor is finished or rough, and any obstacles below the work, and we will specify the smallest platform that does the job safely.`,
    },
  }

  const closing: Faq = {
    question: `How quickly can you get a ${equipment.noun} to my site in ${city}?`,
    answer: `${citySiteFacts[location.slug].standardLeadTime} for standard ${equipment.nounPlural}. ${
      location.primary
        ? "For urgent requests we can often be on site within a few hours."
        : `We serve ${city} on a scheduled route, so larger capacities need a few days' notice.`
    }`,
  }

  return [...copy.faqs, equipmentSpecific[equipment.key], closing]
}

function buildBulletGroups(equipment: EquipmentType, location: LocationSummary, copy: ServiceAreaCopy): BulletGroup[] {
  const city = location.cityName

  return [
    {
      title: `Typical ${equipment.label} Jobs in ${city}`,
      items: copy.jobs,
    },
    {
      title: `${equipment.label} Fleet We Send to ${city}`,
      items: equipment.fleetItems,
    },
    {
      title: "Included With Every Hire",
      items: [
        "Certified, licensed operator, or self-drive for your own certified staff",
        "Full insurance cover on every unit",
        "Preventive maintenance and breakdown replacement",
        "Load charts and inspection certificates on request",
      ],
    },
  ]
}

/** "At a glance" facts for one machine in one city, also used by the hand-written Abu Dhabi forklift page. */
export function siteFactsFor(equipment: EquipmentType, location: LocationSummary): SpecRow[] {
  const copy = serviceAreaCopyFor(equipment.key, location.slug)
  const facts = citySiteFacts[location.slug]
  if (!copy || !facts) return []
  return [
    { label: "Most requested unit", value: copy.typicalUnit },
    { label: "From our Musaffah yard", value: facts.driveFromYard },
    { label: "Standard lead time", value: facts.standardLeadTime },
    { label: "Authorities & permits", value: facts.authority },
    { label: "Typical ground", value: facts.ground },
    { label: `${equipment.label} range`, value: equipment.capacityRange },
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
    ...(equipment.familyLinks ?? []),
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
  const copy = serviceAreaCopyFor(equipment.key, location.slug)
  if (!copy) throw new Error(`Missing service-area copy for ${equipment.key}:${location.slug}`)

  return {
    slug,
    href: `/services/${slug}`,
    equipment,
    location,
    cardTitle: `${equipment.label} Rental ${city}`,
    cardDescription: `${equipment.capacityRange} ${equipment.nounPlural} with certified operators for ${topZones}.`,

    eyebrow: `${equipment.label} Rental · ${city}`,
    h1: `${equipment.label} Rental in ${city}`,
    intro: [copy.intro, equipment.introAside].filter(Boolean).join(" "),
    // Kept inside Google's display limits: ~52 chars for title (before the
    // " | Seven Lift" template suffix) and ~160 for the description.
    // Secondary-city pages already rank top 10 with a strong CTR on the plain
    // capacity title, so only the competitive primary cities get the hook.
    metaTitle: location.primary
      ? `${equipment.label} Rental ${city} | ${equipment.titleHook}`
      : `${equipment.label} Rental ${city} | ${equipment.capacityRange}`,
    metaDescription: copy.metaDescription,
    keywords: [
      `${equipment.noun} rental ${city}`,
      ...equipment.searchAliases.map((alias) => `${alias} ${city}`),
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
    bulletGroups: buildBulletGroups(equipment, location, copy),
    localContext: localContextFor(equipment, location),
    siteFacts: siteFactsFor(equipment, location),
    areasHeading: `${equipment.label} Delivery Across ${city}`,
    areas: buildAreaLinks(equipment, location),
    faqs: buildFaqs(equipment, location, copy),
    ctaHeading: `Need a ${equipment.label} in ${city}?`,
    ctaSubheading: `Send your load requirement and site location. We will confirm the right unit and a delivery slot for ${city}.`,
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
