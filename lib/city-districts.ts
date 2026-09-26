import type { AbuDhabiArea } from "@/lib/abu-dhabi-areas"

/**
 * District-level landing pages inside Dubai and Sharjah, served at
 * /locations/[city]/[area] and linked from the matching emirate page.
 *
 * Same shape and the same rule as the Abu Dhabi districts: every entry has to
 * describe what equipment work in that district actually involves, or it is a
 * doorway page. Only districts that already draw searches in Search Console
 * get a page.
 */
export type CityDistrict = AbuDhabiArea & {
  /** Slug of the parent emirate page in lib/locations.ts. */
  citySlug: "dubai" | "sharjah"
}

export const cityDistricts: CityDistrict[] = [
  {
    citySlug: "dubai",
    slug: "al-quoz",
    name: "Al Quoz",
    href: "/locations/dubai/al-quoz",
    title: "Forklift & Man Lift Rental in Al Quoz, Dubai",
    eyebrow: "Dubai · Al Quoz Industrial Areas 1–4",
    intro:
      "Forklift, man lift, telehandler, and crane rental for Al Quoz Industrial Areas 1–4. Compact forklifts for workshop and warehouse loading, and scissor and boom lifts for signage, racking, and fit-out work in Al Quoz's showrooms, studios, and warehouses.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift moving pallets inside a warehouse unit",
    zones: [
      "Al Quoz Industrial Area 1",
      "Al Quoz Industrial Area 2",
      "Al Quoz Industrial Area 3",
      "Al Quoz Industrial Area 4",
      "Al Quoz Creative Zone",
      "Umm Suqeim & Al Barsha edge",
    ],
    whyHeading: "Why Al Quoz Businesses Rent From Seven Lift",
    whyPoints: [
      {
        title: "Sized for Tight Units",
        description:
          "Al Quoz warehouses and workshops sit on narrow service roads with shared loading areas. We send compact 3–5 ton forklifts and narrow-chassis scissor lifts that fit, not the biggest unit on the yard.",
      },
      {
        title: "Indoor-Ready Man Lifts",
        description:
          "Electric scissor lifts with non-marking tyres for showroom, gallery, and fit-out work on finished floors, and small booms for signage and high-bay lighting.",
      },
      {
        title: "Short Hires Welcome",
        description:
          "A lot of Al Quoz work is a one-day job: unloading a container, hanging a sign, installing racking. Daily hire is standard, with no minimum monthly term.",
      },
      {
        title: "Certified Operators",
        description:
          "Every forklift and man lift can come with a licensed operator, which is the simplest option when your own team is not certified for the machine.",
      },
    ],
    context: {
      heading: "Equipment Work in Al Quoz: What to Plan For",
      paragraphs: [
        "Al Quoz mixes light industry with showrooms, joinery and fit-out workshops, printing houses, storage, and galleries. The typical job is lighter and shorter than in Jebel Ali: unloading a container at a warehouse, moving machinery inside a workshop, or working at 6–12 m on ceilings, racking, and signage.",
        "Space is the constraint. Service roads are narrow and loading areas are often shared with neighbours, so tell us the unit's door width, the ceiling height, and whether the forklift needs to work inside or only at the roller shutter. That decides between a standard counterbalance forklift, a compact unit, or an electric scissor lift that fits through a standard doorway.",
        "Dubai limits heavy vehicle movement on its main roads at peak hours, so we plan deliveries into Al Quoz for off-peak windows. Book the day before and give us the unit number and a site contact, and the machine arrives ready to work when your team starts.",
      ],
    },
    faqs: [
      {
        question: "Do you rent forklifts in Al Quoz by the day?",
        answer:
          "Yes. Daily forklift hire is common in Al Quoz for container unloading and one-off moves, and weekly or monthly hire is available for ongoing warehouse work. A certified operator can be included.",
      },
      {
        question: "Can you supply a man lift for indoor work in an Al Quoz warehouse or showroom?",
        answer:
          "Yes. We supply electric scissor lifts with non-marking tyres for indoor work on finished floors, and narrow-chassis units that fit through standard doors. For signage or work over obstacles, we supply a small articulating boom lift.",
      },
      {
        question: "What size forklift fits a typical Al Quoz workshop?",
        answer:
          "Most Al Quoz jobs need a 3–5 ton forklift. Send us the door width, ceiling height, and the heaviest load, and we will confirm the unit that fits and lifts it safely.",
      },
      {
        question: "How early should I book equipment for Al Quoz?",
        answer:
          "Booking the day before is best, as deliveries into Dubai are planned around peak-hour truck restrictions. Urgent same-day requests are possible when a unit is available.",
      },
    ],
    ctaHeading: "Need a Forklift or Man Lift in Al Quoz?",
    ctaSubheading: "Send the unit location, door width, and job — we'll confirm the right machine and a delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Al Quoz, Dubai.",
    metaTitle: "Forklift & Man Lift Rental Al Quoz, Dubai",
    metaDescription:
      "Forklift, manlift, scissor lift & telehandler rental in Al Quoz Industrial Areas 1–4, Dubai. Compact units for tight warehouses. Daily hire, with operator.",
    keywords: [
      "forklift rental Al Quoz",
      "man lift rental Al Quoz",
      "equipment rental Al Quoz",
      "scissor lift rental Al Quoz",
      "forklift hire Al Quoz Dubai",
    ],
    areaServed: ["Al Quoz", "Al Quoz Industrial Area", "Dubai"],
    nearby: ["jebel-ali"],
  },
  {
    citySlug: "dubai",
    slug: "jebel-ali",
    name: "Jebel Ali & JAFZA",
    href: "/locations/dubai/jebel-ali",
    title: "Heavy Equipment Rental in Jebel Ali & JAFZA",
    eyebrow: "Dubai · Jebel Ali · JAFZA · Dubai South",
    intro:
      "Forklift, mobile crane, telehandler, and man lift rental for Jebel Ali Free Zone (JAFZA), Jebel Ali Industrial Areas, and Dubai South. Jebel Ali is the closest part of Dubai to our Musaffah yard, so it gets our fastest Dubai delivery.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container yard at a port terminal",
    zones: [
      "Jebel Ali Free Zone (JAFZA North & South)",
      "Jebel Ali Industrial Area 1, 2 & 3",
      "Jebel Ali Port",
      "Dubai South & Dubai Logistics District",
      "Dubai Investment Park (DIP)",
      "Dubai Industrial City",
    ],
    whyHeading: "Why Jebel Ali Operations Rent From Seven Lift",
    whyPoints: [
      {
        title: "Closest Dubai Zone to Our Yard",
        description:
          "Jebel Ali sits on the Abu Dhabi side of Dubai, straight up the E11 from Musaffah. Standard forklifts and man lifts reach JAFZA faster than anywhere else in Dubai.",
      },
      {
        title: "Heavy Forklifts for Container Work",
        description:
          "7–10 ton forklifts for container stuffing and destuffing, and 15–25 ton units for machinery and steel, which is what free zone warehouses and yards move.",
      },
      {
        title: "Free Zone Paperwork Handled",
        description:
          "We supply vehicle and operator documents in advance so your company can arrange the JAFZA gate pass before the machine arrives.",
      },
      {
        title: "Cranes for Plant and Steel",
        description:
          "25–500 ton mobile cranes with certified riggers and a documented lift plan for plant installation, steel erection, and heavy machinery moves.",
      },
    ],
    context: {
      heading: "Equipment Work in Jebel Ali: What to Plan For",
      paragraphs: [
        "Jebel Ali is Dubai's heaviest logistics and industrial area. JAFZA warehouses, the port, and the industrial areas around them move containers, steel, machinery, and palletised goods all day, so forklift requests here run heavier than in the rest of Dubai: 7–10 ton units for container work are routine, and 15–25 ton forklifts handle machinery and coil.",
        "JAFZA is a controlled free zone. Every vehicle and operator needs a gate pass, arranged by the company you are working for. Send us the tenant name and the contact who requests passes when you book, and we will send the truck, machine, and operator documents they need so nothing waits at the gate.",
        "For crane work on Jebel Ali plants and warehouses, ground conditions and overhead clearance decide the method. Many yards are paved but some plots are compacted sand, which needs outrigger mats. We check this at the site survey and include it in the lift plan.",
      ],
    },
    faqs: [
      {
        question: "Can you deliver a forklift inside JAFZA?",
        answer:
          "Yes. The company you are working for arranges the JAFZA gate pass; we send the vehicle, machine, and operator documents in advance so the pass is ready when the truck arrives.",
      },
      {
        question: "Do you rent forklifts for container stuffing in Jebel Ali?",
        answer:
          "Yes. 7–10 ton forklifts are the usual choice for container stuffing and destuffing. Tell us the container size and the heaviest pallet, and add a certified operator if you need one.",
      },
      {
        question: "How fast can equipment reach Jebel Ali from your yard?",
        answer:
          "Jebel Ali is the nearest part of Dubai to our Musaffah yard. Next-day delivery is standard, and same-day is often possible for standard forklifts and man lifts.",
      },
      {
        question: "Do you supply mobile cranes in Jebel Ali and Dubai South?",
        answer:
          "Yes. 25–500 ton mobile cranes with certified operators and riggers, load charts, inspection certificates, and a documented lift plan for every job.",
      },
    ],
    ctaHeading: "Need Equipment in Jebel Ali or JAFZA?",
    ctaSubheading: "Send the plot or warehouse, the load, and the gate-pass contact — we'll plan the delivery.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Jebel Ali / JAFZA.",
    metaTitle: "Forklift & Crane Rental Jebel Ali | JAFZA",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Jebel Ali, JAFZA & Dubai South. 7–25 ton forklifts for container work, gate-pass documents supplied.",
    keywords: [
      "forklift rental Jebel Ali",
      "equipment rental JAFZA",
      "crane rental Jebel Ali",
      "forklift rental JAFZA",
      "man lift rental Jebel Ali",
    ],
    areaServed: ["Jebel Ali", "Jebel Ali Free Zone", "Dubai South", "Dubai Investment Park", "Dubai"],
    nearby: ["al-quoz"],
  },
  {
    citySlug: "sharjah",
    slug: "industrial-area",
    name: "Sharjah Industrial Area",
    href: "/locations/sharjah/industrial-area",
    title: "Forklift & Equipment Rental in Sharjah Industrial Area",
    eyebrow: "Sharjah · Industrial Areas 1–18",
    intro:
      "Forklift, man lift, telehandler, and crane rental for Sharjah Industrial Areas 1–18, Al Sajaa, and Muwaileh Commercial. Forklifts for warehouse, scrap, and building-materials yards, and man lifts for workshop and warehouse maintenance.",
    heroImage: "/images/fleet/side-loader.jpg",
    heroImageAlt: "Side loader handling long materials at an industrial yard",
    zones: [
      "Industrial Areas 1–6",
      "Industrial Areas 7–12",
      "Industrial Areas 13–18",
      "Al Sajaa Industrial Area",
      "Muwaileh Commercial",
      "Al Qasimia & Abu Shagara edge",
    ],
    whyHeading: "Why Sharjah Industrial Area Businesses Rent From Seven Lift",
    whyPoints: [
      {
        title: "Forklifts for Every Yard",
        description:
          "3–5 ton forklifts for warehouses, 7–10 ton for containers and heavy pallets, and side loaders for pipe, steel, and timber, the loads Sharjah's yards handle every day.",
      },
      {
        title: "Monthly Hire Without Lock-In",
        description:
          "Many Sharjah warehouses rent forklifts month to month. Servicing and breakdown replacement are included, and you can extend or return without a new contract.",
      },
      {
        title: "Scheduled Around Traffic",
        description:
          "Sharjah's industrial areas are busy and the roads in from Dubai are congested at peak hours, so we book delivery windows that avoid the rush.",
      },
      {
        title: "Certified Operators",
        description:
          "Every machine can be supplied with a licensed operator, or self-drive for your own certified staff.",
      },
    ],
    context: {
      heading: "Equipment Work in Sharjah Industrial Area: What to Plan For",
      paragraphs: [
        "Sharjah's Industrial Areas are one of the densest concentrations of warehouses, workshops, and trading yards in the UAE: building materials, auto parts, scrap and recycling, furniture, and general trading. The standard request is a 3–5 ton forklift for pallets and container unloading, and heavier 7–10 ton units or side loaders for steel, pipe, and timber yards.",
        "Plots are tightly packed and many streets double as loading areas. Tell us whether the forklift works inside the warehouse, in the yard, or on the street at the shutter, and the ground it runs on. Unpaved yards need a rough-terrain or diesel unit; finished warehouse floors are better with electric forklifts on non-marking tyres.",
        "The roads between Dubai and Sharjah are heavily congested at peak hours. We plan deliveries into the Industrial Areas outside the rush, so booking the day before gets you the earliest slot. For monthly hire, we deliver once and you keep the machine on site.",
      ],
    },
    faqs: [
      {
        question: "Do you rent forklifts in Sharjah Industrial Area on a monthly basis?",
        answer:
          "Yes. Monthly forklift hire with servicing and breakdown replacement included is the most common arrangement for Sharjah warehouses. Daily and weekly hire are also available.",
      },
      {
        question: "Which Sharjah Industrial Areas do you deliver to?",
        answer:
          "All of them, Industrial Areas 1 to 18, plus Al Sajaa, Muwaileh Commercial, Hamriyah Free Zone, and SAIF Zone.",
      },
      {
        question: "Can you supply a side loader for pipe or steel in Sharjah?",
        answer:
          "Yes. Side loaders carry long loads such as pipe, steel sections, and timber down narrow aisles and through tight yards where a standard forklift cannot turn with the load.",
      },
      {
        question: "Do you have electric forklifts for indoor warehouses in Sharjah?",
        answer:
          "Yes. Electric forklifts with non-marking tyres suit indoor warehouses and finished floors, with no exhaust fumes inside the building.",
      },
    ],
    ctaHeading: "Need a Forklift in Sharjah Industrial Area?",
    ctaSubheading: "Send the Industrial Area number, the load, and the dates — we'll confirm the unit and delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need forklift / equipment rental in Sharjah Industrial Area.",
    metaTitle: "Forklift Rental Sharjah Industrial Area 1–18",
    metaDescription:
      "Forklift, side loader, manlift & telehandler rental in Sharjah Industrial Areas 1–18, Al Sajaa & Muwaileh. Daily to monthly hire, certified operators.",
    keywords: [
      "forklift rental Sharjah Industrial Area",
      "forklift rental Sharjah",
      "equipment rental Sharjah Industrial Area",
      "man lift rental Sharjah",
      "heavy equipment rental Sharjah",
    ],
    areaServed: ["Sharjah Industrial Area", "Al Sajaa", "Muwaileh", "Sharjah"],
    nearby: ["al-quoz"],
  },
]

export function getCityDistrict(citySlug: string, slug: string) {
  return cityDistricts.find((district) => district.citySlug === citySlug && district.slug === slug)
}

export function districtsForCity(citySlug: string) {
  return cityDistricts.filter((district) => district.citySlug === citySlug)
}
