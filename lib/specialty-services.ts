import type { Faq } from "@/lib/faqs"
import type { AreaLink, BulletGroup, LocalContext, SpecRow } from "@/components/service-landing-template"
import { cityLinksForEquipment } from "@/lib/service-areas"

/**
 * UAE-wide pages for one machine within a fleet family (scissor lifts within
 * man lifts, electric units within forklifts). People search for these by
 * name, and the family pages can't rank for all of them at once.
 *
 * Served by the /services/[slug] route alongside the service × city pages.
 * Specs must stay within the ranges stated on the family's fleet pages.
 */
export type SpecialtyService = {
  slug: string
  href: string
  /** Card and link label: "Scissor Lift Rental". */
  label: string
  eyebrow: string
  h1: string
  intro: string
  heroImage: string
  heroImageAlt: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  serviceType: string
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  localContext: LocalContext
  areasHeading: string
  areas: AreaLink[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
}

const guide = { name: "Guide: Scissor Lift vs Boom Lift", href: "/blog/scissor-lift-vs-boom-lift-abu-dhabi" }

export const specialtyServices: SpecialtyService[] = [
  {
    slug: "scissor-lift-rental",
    href: "/services/scissor-lift-rental",
    label: "Scissor Lift Rental",
    eyebrow: "Scissor Lift Rental · UAE-Wide",
    h1: "Scissor Lift Rental in Abu Dhabi, Dubai & the UAE",
    intro:
      "Electric scissor lifts from 10 to 14 m for indoor work on finished floors, and rough-terrain diesel scissor lifts from 12 to 18 m for outdoor sites. Delivered same-day across Abu Dhabi and Dubai, with a certified operator if you need one.",
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAlt: "Scissor lift raised to ceiling height inside a building",
    metaTitle: "Scissor Lift Rental UAE | Electric & Diesel, 10–18 m",
    metaDescription:
      "Scissor lift rental in Abu Dhabi, Dubai & the UAE: electric 10–14 m for indoor work, rough-terrain diesel 12–18 m for sites. Same-day, with operator.",
    keywords: [
      "scissor lift rental UAE",
      "scissor lift rental Abu Dhabi",
      "scissor lift rental Dubai",
      "scissor lift rental Sharjah",
      "electric scissor lift hire",
    ],
    serviceType: "Scissor lift rental",
    specs: [
      { label: "Working Height", value: "10–18 m" },
      { label: "Power", value: "Electric & Diesel" },
      { label: "Platform", value: "2–3 Person" },
      { label: "Support", value: "24/7" },
    ],
    bulletGroups: [
      {
        title: "Scissor Lift Fleet",
        items: [
          "Electric scissor lifts, 10–14 m working height, for indoor work",
          "Narrow-chassis electric units that fit through standard doorways",
          "Rough-terrain diesel scissor lifts, 12–18 m, for outdoor sites",
          "Non-marking tyres for finished floors, malls, and showrooms",
        ],
      },
      {
        title: "Common Jobs",
        items: [
          "Ceiling, lighting, and MEP installation",
          "Office, retail, and hotel fit-out",
          "Warehouse racking installation and maintenance",
          "Event staging, exhibition stands, and signage",
        ],
      },
      {
        title: "What's Included",
        items: [
          "Certified operator (optional — self-drive available)",
          "Full insurance cover on every unit",
          "Maintenance and breakdown replacement",
          "Daily, weekly, or monthly terms",
        ],
      },
    ],
    localContext: {
      heading: "Choosing a Scissor Lift: What to Check First",
      paragraphs: [
        "Start from the working height: the highest point you need to reach. A scissor lift's platform sits about 2 m below its working height, so a 10 m scissor lift puts a person's hands at 10 m with the platform at around 8 m.",
        "Then check the route in. Measure the narrowest door, any service lift the machine has to ride in, and ramps along the way. For upper floors and mezzanines, confirm the floor can take the machine's weight; the building's facility team usually has this figure.",
        "A scissor lift only goes straight up. If racking, machinery, or a canopy is between the floor and the work, you need a boom lift instead. For outdoor work on compacted ground, use a rough-terrain diesel unit; electric units are for flat, hard floors.",
      ],
    },
    areasHeading: "Scissor Lift Rental by City",
    areas: [
      ...cityLinksForEquipment("man-lift"),
      { name: "Boom Lift Rental", href: "/services/boom-lift-rental" },
      { name: "All Man Lifts & Aerial Platforms", href: "/services/man-lift-access" },
      guide,
    ],
    faqs: [
      {
        question: "What heights of scissor lift can I rent?",
        answer:
          "Electric scissor lifts from 10 to 14 m working height for indoor work, and rough-terrain diesel scissor lifts from 12 to 18 m for outdoor sites.",
      },
      {
        question: "Can a scissor lift be used indoors on a finished floor?",
        answer:
          "Yes. Electric scissor lifts are quiet, produce no exhaust, and come with non-marking tyres, so they are used in malls, offices, hotels, and showrooms during working hours.",
      },
      {
        question: "Will a scissor lift fit through a normal door?",
        answer:
          "Narrow-chassis electric scissor lifts are built to fit through standard doorways and many service lifts. Send us the door width and service lift size and we will confirm the unit that fits.",
      },
      {
        question: "Do I need a certified operator for a scissor lift?",
        answer:
          "Most sites in the UAE require the operator to be trained and certified. We can supply a certified operator with the machine, or rent it self-drive if your own team is certified.",
      },
      {
        question: "Is a scissor lift the same as a manlift?",
        answer:
          "A scissor lift is one type of manlift. \"Manlift\" or \"man lift\" covers every powered platform that lifts people, including scissor lifts and boom lifts.",
      },
    ],
    ctaHeading: "Need a Scissor Lift?",
    ctaSubheading: "Send the working height, the site, and the door width — we'll confirm the right scissor lift and a delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need a scissor lift rental.",
  },
  {
    slug: "boom-lift-rental",
    href: "/services/boom-lift-rental",
    label: "Boom Lift Rental",
    eyebrow: "Boom Lift Rental · UAE-Wide",
    h1: "Boom Lift Rental in Abu Dhabi, Dubai & the UAE",
    intro:
      "Articulating boom lifts from 16 to 28 m to reach up and over obstacles, and telescopic boom lifts from 30 to 50 m for facades and high-level access. Delivered across Abu Dhabi, Dubai, and every emirate, with a certified operator.",
    // TODO: replace with a photo of one of our own boom lifts.
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAlt: "Scissor lift aerial work platform raised indoors",
    metaTitle: "Boom Lift Rental UAE | Articulating & Telescopic",
    metaDescription:
      "Boom lift rental in Abu Dhabi, Dubai & the UAE: articulating 16–28 m and telescopic 30–50 m manlifts for facades, plant, and high access. With operator.",
    keywords: [
      "boom lift rental UAE",
      "boom lift rental Abu Dhabi",
      "boom lift rental Dubai",
      "articulating boom lift hire",
      "telescopic boom lift rental",
    ],
    serviceType: "Boom lift rental",
    specs: [
      { label: "Working Height", value: "16–50 m" },
      { label: "Types", value: "Articulating & Telescopic" },
      { label: "Operators", value: "Certified" },
      { label: "Support", value: "24/7" },
    ],
    bulletGroups: [
      {
        title: "Boom Lift Fleet",
        items: [
          "Articulating boom lifts, 16–28 m, for reaching over obstacles",
          "Telescopic boom lifts, 30–50 m, for maximum height and outreach",
          "Rough-terrain units for construction sites and unpaved ground",
          "360° platform rotation for positioning at the work face",
        ],
      },
      {
        title: "Common Jobs",
        items: [
          "Facade cleaning, glazing, and cladding repairs",
          "Pipe-rack and plant maintenance",
          "Steel structure and roofline construction access",
          "High-level signage, lighting, and tree work",
        ],
      },
      {
        title: "What's Included",
        items: [
          "Certified, trained operator",
          "Harness anchor points in every basket",
          "Full insurance, maintenance, and breakdown replacement",
          "Daily, weekly, or monthly terms",
        ],
      },
    ],
    localContext: {
      heading: "Articulating or Telescopic: Which Boom Lift?",
      paragraphs: [
        "An articulating boom has a jointed arm, so the basket can go up, over something, and down again: pipe racks in a plant, a canopy in front of a facade, or machinery on a factory floor. Choose it whenever there is an obstacle between the ground and the work.",
        "A telescopic boom extends in a straight line and gives the greatest height and outreach, up to around 50 m. Use it for tall facades, warehouse exteriors, and high signage where the path to the work is clear. It needs room to set up and swing.",
        "Both need firm, level ground for the chassis. On sand or unmade ground, tell us before delivery so we send a rough-terrain unit. Work in a boom basket always uses a harness attached to the basket anchor point.",
      ],
    },
    areasHeading: "Boom Lift Rental by City",
    areas: [
      ...cityLinksForEquipment("man-lift"),
      { name: "Scissor Lift Rental", href: "/services/scissor-lift-rental" },
      { name: "All Man Lifts & Aerial Platforms", href: "/services/man-lift-access" },
      guide,
    ],
    faqs: [
      {
        question: "What boom lift heights are available?",
        answer:
          "Articulating boom lifts from 16 to 28 m working height and telescopic boom lifts from 30 to 50 m.",
      },
      {
        question: "What is the difference between an articulating and a telescopic boom lift?",
        answer:
          "An articulating boom bends, so it can reach up and over an obstacle. A telescopic boom extends straight and reaches higher and further, but needs a clear path to the work.",
      },
      {
        question: "Is a boom lift the same as a manlift?",
        answer:
          "A boom lift is one type of manlift. \"Manlift\" covers every powered platform that lifts people; the other common type is the scissor lift, which only goes straight up.",
      },
      {
        question: "Can a boom lift work on sand or an unpaved site?",
        answer:
          "Yes, with a rough-terrain boom lift. Tell us the ground conditions when you book so we send the right unit.",
      },
    ],
    ctaHeading: "Need a Boom Lift?",
    ctaSubheading: "Send the working height, what's in the way, and the ground — we'll recommend the right boom.",
    whatsappMessage: "Hi Seven Lift, I need a boom lift rental.",
  },
  {
    slug: "electric-forklift-rental",
    href: "/services/electric-forklift-rental",
    label: "Electric Forklift Rental",
    eyebrow: "Electric Forklift Rental · UAE-Wide",
    h1: "Electric Forklift Rental in Abu Dhabi, Dubai & the UAE",
    intro:
      "Electric forklifts in the 3–5 ton range for indoor warehouses, food and pharmaceutical facilities, and finished floors: no exhaust fumes, low noise, and non-marking tyres. Delivered same-day across Abu Dhabi and Dubai, with a certified operator if you need one.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift inside a clean indoor warehouse",
    metaTitle: "Electric Forklift Rental UAE | Indoor, Non-Marking",
    metaDescription:
      "Electric forklift rental in Abu Dhabi, Dubai & the UAE: 3–5 ton, zero fumes, non-marking tyres for indoor warehouses. Daily to monthly, with operator.",
    keywords: [
      "electric forklift rental UAE",
      "electric forklift rental Dubai",
      "electric forklift rental Abu Dhabi",
      "electric forklift hire",
      "indoor forklift rental",
    ],
    serviceType: "Electric forklift rental",
    specs: [
      { label: "Capacity", value: "3–5 Ton" },
      { label: "Emissions", value: "Zero On-Site" },
      { label: "Tyres", value: "Non-Marking" },
      { label: "Support", value: "24/7" },
    ],
    bulletGroups: [
      {
        title: "Electric Forklift Fleet",
        items: [
          "3–5 ton electric counterbalance forklifts",
          "Non-marking tyres for finished and epoxy floors",
          "Quiet operation for occupied buildings and night shifts",
          "Diesel forklifts up to 25 ton when the job is outdoors or heavier",
        ],
      },
      {
        title: "Where Electric Forklifts Fit",
        items: [
          "Indoor warehouses and distribution centres",
          "Food, beverage, and pharmaceutical facilities",
          "Malls, showrooms, and exhibition halls",
          "Any enclosed space where diesel exhaust is not allowed",
        ],
      },
      {
        title: "What's Included",
        items: [
          "Certified operator (optional — self-drive available)",
          "Full insurance cover on every unit",
          "Maintenance and breakdown replacement",
          "Daily, weekly, or monthly terms",
        ],
      },
    ],
    localContext: {
      heading: "Electric or Diesel Forklift: How to Decide",
      paragraphs: [
        "Choose electric when the forklift works indoors. It produces no exhaust, is much quieter, and runs on non-marking tyres, which is why food, pharmaceutical, and retail facilities usually require it. For a full shift of indoor work, it is the default choice.",
        "Choose diesel when the work is outdoors, on rough or unpaved ground, or heavier than 5 tons. Container yards, building-materials yards, and construction sites are diesel territory, and our diesel fleet goes up to 25 tons.",
        "An electric forklift needs charging between shifts. Tell us what power supply is available on site and how many hours a day the forklift will run, and we will confirm the charging arrangement before delivery. For round-the-clock operations, ask about swapping units between shifts.",
      ],
    },
    areasHeading: "Forklift Rental by City",
    areas: [
      ...cityLinksForEquipment("forklift"),
      { name: "Forklift Fleet & Specifications", href: "/equipment/forklift" },
    ],
    faqs: [
      {
        question: "What capacity electric forklifts do you rent?",
        answer:
          "Electric forklifts in the 3–5 ton range. For heavier loads we supply diesel forklifts up to 25 tons.",
      },
      {
        question: "Do electric forklifts have non-marking tyres?",
        answer:
          "Yes. Our electric forklifts run on non-marking tyres for finished, epoxy, and polished floors.",
      },
      {
        question: "How is an electric forklift charged on my site?",
        answer:
          "Tell us the power supply available and your working hours when you book. We confirm the charger and charging routine before delivery so the forklift is ready for each shift.",
      },
      {
        question: "Can I rent an electric forklift for just one day?",
        answer:
          "Yes. Daily, weekly, and monthly hire are all available, with a certified operator if you need one.",
      },
    ],
    ctaHeading: "Need an Electric Forklift?",
    ctaSubheading: "Send the load, the floor type, and your working hours — we'll confirm the right electric forklift.",
    whatsappMessage: "Hi Seven Lift, I need an electric forklift rental.",
  },
]

export function getSpecialtyService(slug: string) {
  return specialtyServices.find((service) => service.slug === slug)
}
