import type { Faq } from "@/lib/faqs"

export type LocationSummary = {
  slug: string
  title: string
  shortTitle: string
  /** City name as it appears mid-sentence, e.g. "Sharjah", "Ras Al Khaimah". */
  cityName: string
  href: string
  emirate: string
  description: string
  heroImage: string
  heroImageAlt: string
  areas: string[]
  geo: { latitude: number; longitude: number }

  /** Ranked first in the /locations index and the footer. */
  primary: boolean
  /** Compact zone list for meta descriptions, kept short enough not to truncate. */
  metaZoneShort: string

  // --- Landing page copy (kept in data so every city page is genuinely distinct) ---
  eyebrow: string
  intro: string
  whyHeading: string
  whyPoints: { title: string; description: string }[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string

  // --- SEO / schema ---
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** Plain place names for schema.org areaServed. */
  areaServed: string[]
  /** Slugs of neighbouring locations, used for internal linking. */
  nearby: string[]
  /** Dominant local industries — reused in the service × city page copy. */
  industries: string[]
  /** One line on why this city needs lifting equipment; used on service × city pages. */
  demandNote: string
}

/**
 * Canonical list of geo-targeted landing pages, one per emirate plus Al Ain.
 * Referenced by the homepage, /locations index, footer, sitemap, and the
 * generated service × city pages in `lib/service-areas.ts`.
 *
 * Every entry carries its own copy, FAQs, and area list — these pages must not
 * be near-duplicates of each other, or Google treats them as doorway pages.
 */
export const locations: LocationSummary[] = [
  {
    slug: "abu-dhabi-musaffah",
    metaZoneShort: "Musaffah, ICAD & KIZAD",
    title: "Heavy Equipment Rental in Abu Dhabi & Musaffah",
    shortTitle: "Abu Dhabi / Musaffah",
    cityName: "Abu Dhabi",
    href: "/locations/abu-dhabi-musaffah",
    emirate: "Abu Dhabi",
    description:
      "Forklift, mobile crane, telehandler, and man lift rental for Musaffah Industrial City, ICAD, and Khalifa Industrial Zone.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container yard at a port terminal in Abu Dhabi",
    areas: [
      "Musaffah Industrial City (M1–M44)",
      "ICAD 1, 2 & 3 (Industrial City of Abu Dhabi)",
      "Khalifa Industrial Zone Abu Dhabi (KIZAD)",
      "Mussafah Shabiya",
      "Khalifa Port",
      "Al Dhafra & Ruwais",
      "Yas Island & Saadiyat",
    ],
    geo: { latitude: 24.3702, longitude: 54.5045 },
    primary: true,

    eyebrow: "Abu Dhabi · Musaffah · ICAD",
    intro:
      "Our home base. Forklift, mobile crane, telehandler, and man lift rental staged in Musaffah Industrial City for same-day dispatch to ICAD 1–3, Khalifa Industrial Zone (KIZAD), Khalifa Port, and projects across the Al Dhafra region.",
    whyHeading: "Why Abu Dhabi Contractors Choose Seven Lift",
    whyPoints: [
      {
        title: "Fleet Based in Musaffah",
        description:
          "Our yard sits inside Musaffah Industrial Area M-44, so equipment reaches most M-sector and ICAD sites within the hour rather than the day.",
      },
      {
        title: "ICAD & KIZAD Gate Procedures",
        description:
          "We hold the documentation and gate-pass experience needed for equipment entry into ICAD 1–3 and Khalifa Industrial Zone without delays at the checkpoint.",
      },
      {
        title: "Khalifa Port & Heavy Lift",
        description:
          "Mobile cranes from 25 to 500 ton with certified riggers and lift plans for port, terminal, and industrial lifts around Khalifa Port.",
      },
      {
        title: "Oil, Gas & Ruwais Projects",
        description:
          "Long-term equipment contracts for the Al Dhafra region and Ruwais industrial complex, with HSE documentation to match contractor requirements.",
      },
      {
        title: "Certified Operators",
        description:
          "Licensed forklift, crane, and access-platform operators available with every unit, plus third-party inspection certificates on request.",
      },
      {
        title: "24/7 Emergency Deployment",
        description:
          "Breakdown replacement and unplanned lifts handled around the clock — critical for the continuous-shift factories across Musaffah and ICAD.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment inside Musaffah and ICAD industrial zones?",
        answer:
          "Yes. Musaffah (M1–M45), ICAD 1–3, and Khalifa Industrial Zone (KIZAD) are core parts of our daily coverage area, with equipment already staged nearby for fast turnaround.",
      },
      {
        question: "Can you supply cranes for lifts inside Abu Dhabi ports and free zones?",
        answer:
          "Yes, we regularly service Khalifa Port, KIZAD, and surrounding free zone facilities with mobile cranes rated from 25 to 500 tons, including certified riggers and lift plans where required.",
      },
      {
        question: "Do you handle Abu Dhabi Municipality permit requirements for cranes?",
        answer:
          "We provide the equipment documentation, load charts, and certifications your site or contractor typically needs to secure municipality or client permits. Our team can advise on the process based on your project scope.",
      },
      {
        question: "What is your typical response time for Musaffah warehouse forklift requests?",
        answer:
          "For standard forklift capacities (3–25 ton) within Musaffah and ICAD, we can usually mobilize the same day, and often within a few hours for urgent warehouse needs.",
      },
      {
        question: "Do you cover Ruwais and the Al Dhafra region?",
        answer:
          "Yes. We run longer-term equipment contracts into Ruwais, Al Dhafra, and the western region, where mobilization is typically scheduled a day or two ahead given the travel distance from Musaffah.",
      },
    ],
    ctaHeading: "Need Equipment in Musaffah or ICAD Today?",
    ctaSubheading:
      "Send your site location and equipment need — our Abu Dhabi yard confirms availability within the hour.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Abu Dhabi (Musaffah/ICAD).",

    metaTitle: "Heavy Equipment Rental Abu Dhabi | Musaffah",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Abu Dhabi. Fleet based in Musaffah, serving ICAD, KIZAD & Khalifa Port. Same-day dispatch, 24/7.",
    keywords: [
      "heavy equipment rental Abu Dhabi",
      "forklift rental Musaffah",
      "crane rental Abu Dhabi",
      "equipment rental ICAD",
      "equipment rental KIZAD",
      "telehandler rental Abu Dhabi",
    ],
    areaServed: ["Abu Dhabi", "Musaffah", "ICAD", "Khalifa Industrial Zone", "Khalifa Port", "Ruwais"],
    nearby: ["al-ain", "dubai"],
    industries: [
      "oil, gas and petrochemical contracting",
      "heavy manufacturing across ICAD",
      "port and terminal logistics at Khalifa Port",
      "government and infrastructure construction",
    ],
    demandNote:
      "Abu Dhabi's industrial demand is concentrated in Musaffah's M-sectors, the ICAD manufacturing clusters, and the port and free-zone operations at KIZAD.",
  },
  {
    slug: "dubai",
    metaZoneShort: "JAFZA, Al Quoz & DIP",
    title: "Heavy Equipment Rental in Dubai",
    shortTitle: "Dubai",
    cityName: "Dubai",
    href: "/locations/dubai",
    emirate: "Dubai",
    description:
      "Forklift, mobile crane, telehandler, and man lift rental for Jebel Ali Free Zone (JAFZA), Al Quoz, and Dubai Industrial City.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift operating in a Dubai warehouse facility",
    areas: [
      "Jebel Ali Free Zone (JAFZA)",
      "Dubai Industrial City",
      "Al Quoz Industrial Area 1–4",
      "Dubai Investment Park (DIP)",
      "Business Bay & Downtown Dubai",
      "Ras Al Khor Industrial Area",
      "Al Qusais Industrial Area",
      "Dubai South & Expo City",
    ],
    geo: { latitude: 25.0225, longitude: 55.1281 },
    primary: true,

    eyebrow: "Dubai · JAFZA · Al Quoz",
    intro:
      "Forklift, mobile crane, telehandler, and man lift rental for Jebel Ali Free Zone (JAFZA), Al Quoz Industrial Area, and Dubai Industrial City. Certified operators and 24/7 emergency deployment across Dubai's logistics and manufacturing hubs.",
    whyHeading: "Why Dubai Contractors Choose Seven Lift",
    whyPoints: [
      {
        title: "JAFZA Access Experience",
        description: "Established free-zone entry procedures for equipment delivery inside Jebel Ali Free Zone.",
      },
      {
        title: "Dubai Industrial City Ready",
        description: "Regular deployments to manufacturing and logistics facilities across Dubai Industrial City.",
      },
      {
        title: "Al Quoz Coverage",
        description: "Fast dispatch to Al Quoz's dense mix of workshops, warehouses, and industrial units.",
      },
      {
        title: "Fit-Out & Retail Access Work",
        description:
          "Scissor lifts and low-noise electric units for mall fit-outs, hotel maintenance, and indoor work across Business Bay and Downtown.",
      },
      {
        title: "Certified Operators",
        description: "Licensed forklift, crane, and access-platform operators available for every rental.",
      },
      {
        title: "24/7 Emergency Deployment",
        description: "Rapid same-day mobilization for breakdown replacement and urgent lifting needs.",
      },
    ],
    faqs: [
      {
        question: "Do you provide equipment rental inside JAFZA and Dubai Industrial City?",
        answer:
          "Yes, JAFZA, Dubai Industrial City, Al Quoz, and Dubai Investment Park are part of our regular Dubai coverage, with forklifts, telehandlers, and cranes available for both short-term and long-term contracts.",
      },
      {
        question: "Can you support free zone logistics and warehousing operations in Dubai?",
        answer:
          "Absolutely — we regularly supply forklifts and side loaders to logistics and 3PL operators inside JAFZA and DIC, with flexible shift-based or monthly rental arrangements to match warehouse operating hours.",
      },
      {
        question: "Do you offer mobile crane rental for Dubai construction sites?",
        answer:
          "Yes, our mobile crane fleet (25–500 ton capacity) serves construction, infrastructure, and industrial projects across Dubai, with certified operators and riggers included.",
      },
      {
        question: "How far in advance should I book equipment for a Dubai project?",
        answer:
          "For standard equipment we can often mobilize within 24 hours. For larger cranes or multi-week/month projects, booking 3–5 days in advance helps guarantee availability of the exact capacity you need.",
      },
      {
        question: "Can you supply equipment for indoor fit-out work in Dubai malls and hotels?",
        answer:
          "Yes. We supply electric scissor lifts and non-marking-tire units suited to finished indoor floors, which are the standard requirement for mall, hotel, and office fit-out work in Dubai.",
      },
    ],
    ctaHeading: "Need Equipment in JAFZA or Al Quoz Today?",
    ctaSubheading:
      "Share your site location and equipment need — our Dubai team will confirm availability within the hour.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Dubai.",

    metaTitle: "Heavy Equipment Rental Dubai | JAFZA & Al Quoz",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Dubai. Serving JAFZA, Al Quoz, DIP & Dubai Industrial City. Certified operators, 24/7 deployment.",
    keywords: [
      "heavy equipment rental Dubai",
      "forklift rental Dubai",
      "mobile crane rental Dubai",
      "equipment rental JAFZA",
      "equipment rental Al Quoz",
      "equipment rental Dubai Industrial City",
    ],
    areaServed: ["Dubai", "Jebel Ali Free Zone", "Al Quoz", "Dubai Industrial City", "Dubai Investment Park"],
    nearby: ["sharjah", "abu-dhabi-musaffah"],
    industries: [
      "3PL warehousing and freight forwarding",
      "high-rise and infrastructure construction",
      "retail and hospitality fit-out",
      "light manufacturing across DIC and DIP",
    ],
    demandNote:
      "Dubai's equipment demand runs on two tracks: round-the-clock warehouse handling in JAFZA and DIP, and construction and fit-out work across the city's continuous development pipeline.",
  },
  {
    slug: "sharjah",
    metaZoneShort: "Industrial Areas, HFZA & SAIF Zone",
    title: "Heavy Equipment Rental in Sharjah",
    shortTitle: "Sharjah",
    cityName: "Sharjah",
    href: "/locations/sharjah",
    emirate: "Sharjah",
    description:
      "Forklift, crane, telehandler, and man lift rental for Sharjah Industrial Areas, Hamriyah Free Zone, SAIF Zone, and Al Sajaa.",
    heroImage: "/images/fleet/side-loader.jpg",
    heroImageAlt: "Side loader handling long materials at a Sharjah industrial yard",
    areas: [
      "Sharjah Industrial Areas 1–18",
      "Hamriyah Free Zone (HFZA)",
      "Sharjah Airport International Free Zone (SAIF Zone)",
      "Al Sajaa Industrial Area",
      "Port Khalid & Port Khor Fakkan",
      "Al Qasimia & Muwaileh",
    ],
    geo: { latitude: 25.3463, longitude: 55.4209 },
    primary: true,

    eyebrow: "Sharjah · Hamriyah · SAIF Zone",
    intro:
      "Sharjah runs the densest concentration of workshops and light manufacturing in the UAE. We supply forklifts, telehandlers, man lifts, and mobile cranes across Industrial Areas 1–18, Hamriyah Free Zone, SAIF Zone, and the heavy-industry cluster at Al Sajaa.",
    whyHeading: "Why Sharjah Businesses Choose Seven Lift",
    whyPoints: [
      {
        title: "Industrial Area Density",
        description:
          "Sharjah's Industrial Areas 1–18 are tight, busy, and hard to manoeuvre in. We match unit size to the yard rather than sending the biggest machine available.",
      },
      {
        title: "Hamriyah Free Zone Access",
        description:
          "Regular deliveries into HFZA for steel fabrication, petrochemical, and heavy-manufacturing tenants, with free-zone gate documentation handled up front.",
      },
      {
        title: "SAIF Zone Logistics",
        description:
          "Warehouse forklifts and side loaders for the air-freight and distribution operators around Sharjah Airport International Free Zone.",
      },
      {
        title: "Al Sajaa Heavy Industry",
        description:
          "Higher-capacity forklifts and mobile cranes for the quarrying, cement, and heavy-industrial operations concentrated at Al Sajaa.",
      },
      {
        title: "Cross-Emirate Mobilization",
        description:
          "Sharjah sits between our Dubai and Northern Emirates routes, so we can often redeploy a unit the same day rather than scheduling a separate trip.",
      },
      {
        title: "Flexible Short-Term Hire",
        description:
          "Daily and weekly hire suited to Sharjah's job-shop and fabrication businesses, where equipment need moves with the order book.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Sharjah Industrial Area and Hamriyah Free Zone?",
        answer:
          "Yes. Sharjah Industrial Areas 1–18, Hamriyah Free Zone (HFZA), SAIF Zone, and Al Sajaa are all within our regular Sharjah delivery route, typically with next-day or same-day mobilization.",
      },
      {
        question: "What size forklift works best in Sharjah's industrial workshops?",
        answer:
          "Most Sharjah workshops and fabrication units are best served by 3–5 ton diesel forklifts, which handle standard pallet and steel-section loads while still manoeuvring in narrow yards. For container and heavy machinery work we supply 10–25 ton units.",
      },
      {
        question: "Can you supply cranes for steel fabrication and erection work in Sharjah?",
        answer:
          "Yes. We regularly supply mobile cranes with certified riggers for structural steel erection, plant installation, and machinery relocation across Sharjah's industrial areas and Hamriyah Free Zone.",
      },
      {
        question: "Do you offer man lifts for warehouse and facility maintenance in Sharjah?",
        answer:
          "We supply scissor lifts and boom lifts from 10 m to 50 m working height for racking maintenance, lighting and HVAC work, and facade access across Sharjah warehouses and commercial buildings.",
      },
      {
        question: "Is there a minimum rental period for Sharjah deliveries?",
        answer:
          "Our standard minimum is a single day's hire. For Sharjah's short-turnaround fabrication jobs, day and weekend rates are the most common arrangement, and we can extend on site without a new contract.",
      },
    ],
    ctaHeading: "Need Equipment in Sharjah Industrial Area?",
    ctaSubheading: "Tell us your zone and load requirement — we'll confirm availability and a delivery slot today.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Sharjah.",

    metaTitle: "Heavy Equipment Rental Sharjah | HFZA & SAIF",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Sharjah. Covering Industrial Areas 1–18, Hamriyah Free Zone & SAIF Zone. Daily to monthly hire.",
    keywords: [
      "heavy equipment rental Sharjah",
      "forklift rental Sharjah",
      "crane rental Sharjah",
      "forklift rental Sharjah Industrial Area",
      "equipment rental Hamriyah Free Zone",
      "equipment rental SAIF Zone",
    ],
    areaServed: ["Sharjah", "Hamriyah Free Zone", "SAIF Zone", "Al Sajaa", "Sharjah Industrial Area"],
    nearby: ["ajman", "dubai", "umm-al-quwain"],
    industries: [
      "steel fabrication and metal workshops",
      "light manufacturing and job shops",
      "air-freight logistics around SAIF Zone",
      "quarrying and cement at Al Sajaa",
    ],
    demandNote:
      "Sharjah holds the UAE's densest cluster of workshops and fabrication units, where equipment is hired short-term and sized to fit tight industrial yards.",
  },
  {
    slug: "ajman",
    metaZoneShort: "Industrial Area, Al Jurf & Free Zone",
    title: "Heavy Equipment Rental in Ajman",
    shortTitle: "Ajman",
    cityName: "Ajman",
    href: "/locations/ajman",
    emirate: "Ajman",
    description:
      "Forklift, crane, telehandler, and man lift rental for Ajman Industrial Area 1 & 2, Ajman Free Zone, and Al Jurf.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Warehouse forklift loading pallets at an Ajman distribution facility",
    areas: [
      "Ajman Industrial Area 1 & 2",
      "Ajman Free Zone (AFZ)",
      "Al Jurf Industrial Area 1, 2 & 3",
      "New Industrial Area",
      "Ajman Port & Corniche",
      "Al Hamidiya & Al Rawda",
    ],
    geo: { latitude: 25.4052, longitude: 55.5136 },
    primary: false,

    eyebrow: "Ajman · Al Jurf · Free Zone",
    intro:
      "Equipment rental for Ajman's manufacturing and distribution base — Industrial Area 1 and 2, the Al Jurf industrial zones, and Ajman Free Zone. Forklifts, telehandlers, man lifts, and mobile cranes delivered on our Northern Emirates route.",
    whyHeading: "Why Ajman Businesses Choose Seven Lift",
    whyPoints: [
      {
        title: "Al Jurf Coverage",
        description:
          "Regular runs into Al Jurf Industrial 1–3, where much of Ajman's furniture, plastics, and building-materials manufacturing sits.",
      },
      {
        title: "Ajman Free Zone Delivery",
        description:
          "Warehouse forklifts and access platforms delivered inside Ajman Free Zone, with gate documentation prepared before dispatch.",
      },
      {
        title: "Cost-Effective Northern Route",
        description:
          "Ajman sits on our Sharjah–RAK corridor, so mobilization costs stay lower than a dedicated trip from Abu Dhabi.",
      },
      {
        title: "Right-Sized Units",
        description:
          "Ajman's units are typically mid-size workshops — we lead with 3–5 ton forklifts and compact telehandlers rather than oversized machines.",
      },
      {
        title: "Certified Operators",
        description:
          "Licensed operators supplied with every unit, or self-drive hire where you have certified staff in house.",
      },
      {
        title: "Flexible Terms",
        description:
          "Daily, weekly, and monthly hire, with monthly rates that suit Ajman's steady manufacturing output.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Ajman Industrial Area and Al Jurf?",
        answer:
          "Yes. Ajman Industrial Area 1 and 2, Al Jurf Industrial 1–3, and Ajman Free Zone are covered on our regular Northern Emirates route, usually with next-day mobilization and same-day where a unit is already nearby.",
      },
      {
        question: "Is there a delivery charge for equipment rental in Ajman?",
        answer:
          "Mobilization is quoted per job based on the equipment type and your exact location. Because Ajman sits on our Sharjah–Ras Al Khaimah corridor, transport cost is usually lower than clients expect for a Northern Emirates delivery.",
      },
      {
        question: "Can you supply forklifts for Ajman Free Zone warehouses?",
        answer:
          "Yes. We supply 3–10 ton diesel and electric forklifts for warehouse and distribution operations inside Ajman Free Zone, on shift-based, weekly, or monthly hire.",
      },
      {
        question: "Do you provide mobile cranes in Ajman?",
        answer:
          "We supply mobile cranes for machinery installation, steel erection, and plant relocation across Ajman. For larger capacities we typically schedule a day or two ahead to route the right unit from Abu Dhabi or Dubai.",
      },
      {
        question: "Can you supply man lifts for building maintenance in Ajman?",
        answer:
          "Yes — scissor lifts and boom lifts from 10 m to 50 m for facade cleaning, signage installation, lighting, and warehouse maintenance across Ajman's commercial and industrial buildings.",
      },
    ],
    ctaHeading: "Need Equipment in Ajman?",
    ctaSubheading: "Send your location and equipment type — we'll confirm a delivery slot on our next Ajman run.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Ajman.",

    metaTitle: "Heavy Equipment Rental Ajman | Al Jurf & AFZ",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Ajman. Serving Industrial Area 1 & 2, Al Jurf & Ajman Free Zone. Next-day delivery.",
    keywords: [
      "heavy equipment rental Ajman",
      "forklift rental Ajman",
      "crane rental Ajman",
      "equipment rental Ajman Free Zone",
      "forklift rental Al Jurf",
      "man lift rental Ajman",
    ],
    areaServed: ["Ajman", "Ajman Free Zone", "Al Jurf", "Ajman Industrial Area"],
    nearby: ["sharjah", "umm-al-quwain", "dubai"],
    industries: [
      "furniture and woodworking manufacturing",
      "plastics and packaging production",
      "building-materials distribution",
      "small-scale warehousing and 3PL",
    ],
    demandNote:
      "Ajman's industrial base is built on mid-size manufacturing units in Al Jurf and the Industrial Areas, where compact, right-sized equipment matters more than raw capacity.",
  },
  {
    slug: "ras-al-khaimah",
    metaZoneShort: "RAK FTZ, Al Ghail & Al Hamra",
    title: "Heavy Equipment Rental in Ras Al Khaimah",
    shortTitle: "Ras Al Khaimah",
    cityName: "Ras Al Khaimah",
    href: "/locations/ras-al-khaimah",
    emirate: "Ras Al Khaimah",
    description:
      "Forklift, crane, telehandler, and man lift rental for RAK Free Trade Zone, Al Ghail, Al Hamra, and the Khor Khwair quarry belt.",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Heavy equipment being transported to a Ras Al Khaimah industrial site",
    areas: [
      "RAK Free Trade Zone (RAK FTZ)",
      "Al Ghail Industrial Park",
      "Al Hamra Industrial Zone",
      "RAK Maritime City",
      "Khor Khwair quarry & cement belt",
      "Al Jazeera Al Hamra",
    ],
    geo: { latitude: 25.7895, longitude: 55.9432 },
    primary: false,

    eyebrow: "Ras Al Khaimah · RAK FTZ · Al Ghail",
    intro:
      "Ras Al Khaimah is the UAE's quarrying and building-materials heartland. We supply higher-capacity forklifts, mobile cranes, telehandlers, and access platforms to RAK Free Trade Zone, Al Ghail Industrial Park, Al Hamra, and the cement and aggregate operations along Khor Khwair.",
    whyHeading: "Why RAK Operators Choose Seven Lift",
    whyPoints: [
      {
        title: "Quarry & Cement Experience",
        description:
          "Equipment specified for the dust, load weights, and continuous-shift patterns of the Khor Khwair quarry and cement belt.",
      },
      {
        title: "RAK FTZ & Al Ghail Delivery",
        description:
          "Scheduled mobilization into RAK Free Trade Zone and Al Ghail Industrial Park, with free-zone entry paperwork handled ahead of the delivery.",
      },
      {
        title: "RAK Maritime City",
        description:
          "Forklifts, side loaders, and mobile cranes for bulk-handling and marine logistics operations at RAK Maritime City.",
      },
      {
        title: "Higher-Capacity Fleet",
        description:
          "RAK jobs skew heavy. We lead with 10–25 ton forklifts and larger crane capacities rather than the light units suited to warehouse work.",
      },
      {
        title: "Longer-Term Contracts",
        description:
          "Monthly and multi-month hire priced for the sustained equipment need at quarry, cement, and ceramics operations.",
      },
      {
        title: "Planned Mobilization",
        description:
          "We schedule RAK deliveries in advance so the right capacity arrives on the agreed day — no substituting a smaller unit to make a slot.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Ras Al Khaimah and RAK Free Trade Zone?",
        answer:
          "Yes. RAK Free Trade Zone, Al Ghail Industrial Park, Al Hamra Industrial Zone, and RAK Maritime City are all served. Because RAK is at the northern end of our route, we typically ask for a day or two of notice to schedule the right unit.",
      },
      {
        question: "Can you supply equipment for quarry and cement operations in Khor Khwair?",
        answer:
          "Yes. We supply higher-capacity forklifts, telehandlers, and mobile cranes to the quarry, aggregate, and cement operations along Khor Khwair, on monthly or project-length contracts with maintenance included.",
      },
      {
        question: "What crane capacities are available in Ras Al Khaimah?",
        answer:
          "Our mobile crane fleet runs from 25 ton to 500 ton and can be routed to RAK for plant installation, structural erection, and heavy machinery relocation. Larger capacities need advance scheduling for transport and permits.",
      },
      {
        question: "Do you offer long-term equipment rental in RAK?",
        answer:
          "Yes, and it is the most common arrangement here. Monthly and multi-month contracts suit RAK's continuous industrial operations, and long-term rates are meaningfully lower than daily hire.",
      },
      {
        question: "How much notice do you need for a RAK delivery?",
        answer:
          "For standard forklifts and telehandlers, 24 hours is usually enough. For larger cranes or specialised units, 3–5 days lets us confirm transport, permits, and the exact capacity you need.",
      },
    ],
    ctaHeading: "Need Equipment in Ras Al Khaimah?",
    ctaSubheading: "Share your site and capacity requirement — we'll schedule the right unit on our next RAK run.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Ras Al Khaimah.",

    metaTitle: "Heavy Equipment Rental Ras Al Khaimah | RAK FTZ",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Ras Al Khaimah. Serving RAK FTZ, Al Ghail, Al Hamra & the Khor Khwair quarry belt.",
    keywords: [
      "heavy equipment rental Ras Al Khaimah",
      "forklift rental RAK",
      "crane rental Ras Al Khaimah",
      "equipment rental RAK Free Trade Zone",
      "telehandler rental Ras Al Khaimah",
      "equipment rental Al Ghail",
    ],
    areaServed: ["Ras Al Khaimah", "RAK Free Trade Zone", "Al Ghail", "Al Hamra", "RAK Maritime City"],
    nearby: ["umm-al-quwain", "fujairah", "sharjah"],
    industries: [
      "quarrying and aggregate production",
      "cement and building materials",
      "ceramics and glass manufacturing",
      "marine and bulk logistics at RAK Maritime City",
    ],
    demandNote:
      "Ras Al Khaimah's demand is heavy and continuous — quarries, cement plants, and ceramics operations that run on monthly contracts rather than day hire.",
  },
  {
    slug: "fujairah",
    metaZoneShort: "Free Zone, Port & Al Hayl",
    title: "Heavy Equipment Rental in Fujairah",
    shortTitle: "Fujairah",
    cityName: "Fujairah",
    href: "/locations/fujairah",
    emirate: "Fujairah",
    description:
      "Forklift, crane, telehandler, and man lift rental for Fujairah Free Zone, Fujairah Port, the oil terminal, and Al Hayl Industrial Area.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container terminal operations at Fujairah Port",
    areas: [
      "Fujairah Free Zone (FFZ)",
      "Port of Fujairah",
      "Fujairah Oil Terminal (FOT)",
      "Al Hayl Industrial Area",
      "Dibba Al Fujairah",
      "Fujairah Creative City",
    ],
    geo: { latitude: 25.1288, longitude: 56.3265 },
    primary: false,

    eyebrow: "Fujairah · Port · Oil Terminal",
    intro:
      "Fujairah's economy runs on its port and oil terminal. We supply forklifts, mobile cranes, telehandlers, and access platforms to Fujairah Free Zone, the Port of Fujairah, the Fujairah Oil Terminal bunkering complex, and the Al Hayl Industrial Area.",
    whyHeading: "Why Fujairah Operators Choose Seven Lift",
    whyPoints: [
      {
        title: "Port & Bunkering Support",
        description:
          "Equipment for the Port of Fujairah and Fujairah Oil Terminal, where tank-farm and bunkering operations set the safety and documentation bar.",
      },
      {
        title: "East Coast Mobilization",
        description:
          "Fujairah sits across the Hajar mountains from our main routes. We plan transport properly rather than promising a same-day slot we cannot hold.",
      },
      {
        title: "Al Hayl Industrial Area",
        description:
          "Forklifts and telehandlers for the manufacturing, quarrying, and building-materials units at Al Hayl.",
      },
      {
        title: "Oil & Gas Documentation",
        description:
          "Third-party inspection certificates, load charts, and HSE documentation prepared to the standard terminal operators require.",
      },
      {
        title: "Project-Length Contracts",
        description:
          "Given the transport distance, Fujairah work is best served by weekly, monthly, and shutdown-length contracts.",
      },
      {
        title: "Certified Riggers",
        description:
          "Crane work at the terminals comes with certified riggers and a documented lift plan as standard.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Fujairah and the east coast?",
        answer:
          "Yes. We cover Fujairah Free Zone, the Port of Fujairah, Fujairah Oil Terminal, Al Hayl Industrial Area, and Dibba. Because the east coast is across the mountains from our Abu Dhabi and Dubai routes, we schedule Fujairah deliveries in advance rather than same-day.",
      },
      {
        question: "Can you supply equipment for tank farm and bunkering operations in Fujairah?",
        answer:
          "Yes. We supply forklifts, telehandlers, man lifts, and mobile cranes to the Fujairah Oil Terminal area with the inspection certificates, load charts, and HSE documentation that terminal operators require for site entry.",
      },
      {
        question: "How much notice do you need for a Fujairah delivery?",
        answer:
          "We ask for 2–3 days for standard equipment and around a week for larger cranes or shutdown work, which lets us confirm transport across the Hajar route and have documentation approved before the unit arrives.",
      },
      {
        question: "Do you support plant shutdowns and turnarounds in Fujairah?",
        answer:
          "Yes. Shutdown and turnaround work is a common reason clients call us here — we can supply multiple units under one contract for the duration, with replacement cover if a machine goes down mid-shutdown.",
      },
      {
        question: "What equipment is available for Al Hayl Industrial Area?",
        answer:
          "Al Hayl is mostly served by 3–10 ton forklifts and telehandlers for the manufacturing and building-materials units there, with mobile cranes available for machinery installation and structural work.",
      },
    ],
    ctaHeading: "Need Equipment in Fujairah?",
    ctaSubheading:
      "Tell us your site, dates, and documentation requirements — we'll schedule an east coast mobilization.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Fujairah.",

    metaTitle: "Heavy Equipment Rental Fujairah | Port & FFZ",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Fujairah. Serving Fujairah Free Zone, the Port, Oil Terminal & Al Hayl. Certified riggers.",
    keywords: [
      "heavy equipment rental Fujairah",
      "forklift rental Fujairah",
      "crane rental Fujairah",
      "equipment rental Fujairah Free Zone",
      "equipment rental Fujairah Port",
      "man lift rental Fujairah",
    ],
    areaServed: ["Fujairah", "Fujairah Free Zone", "Port of Fujairah", "Al Hayl", "Dibba"],
    nearby: ["ras-al-khaimah", "sharjah"],
    industries: [
      "oil storage, bunkering and terminal operations",
      "port and container logistics",
      "quarrying and building materials at Al Hayl",
      "plant shutdown and turnaround contracting",
    ],
    demandNote:
      "Fujairah's lifting demand centres on the port and the oil terminal complex, where documentation and shutdown scheduling matter as much as the machine itself.",
  },
  {
    slug: "umm-al-quwain",
    metaZoneShort: "UAQ FTZ & Industrial Area",
    title: "Heavy Equipment Rental in Umm Al Quwain",
    shortTitle: "Umm Al Quwain",
    cityName: "Umm Al Quwain",
    href: "/locations/umm-al-quwain",
    emirate: "Umm Al Quwain",
    description:
      "Forklift, crane, telehandler, and man lift rental for UAQ Free Trade Zone, the Industrial Area, and Al Salamah.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telehandler working on a construction site in Umm Al Quwain",
    areas: [
      "UAQ Free Trade Zone (UAQ FTZ)",
      "Umm Al Quwain Industrial Area",
      "Al Salamah",
      "Umm Al Quwain Port",
      "Falaj Al Mualla",
    ],
    geo: { latitude: 25.5641, longitude: 55.5552 },
    primary: false,

    eyebrow: "Umm Al Quwain · UAQ FTZ",
    intro:
      "Equipment rental across Umm Al Quwain — UAQ Free Trade Zone, the Industrial Area, Al Salamah, and the agricultural and light-industrial belt around Falaj Al Mualla. Forklifts, telehandlers, man lifts, and mobile cranes on our Northern Emirates route.",
    whyHeading: "Why UAQ Businesses Choose Seven Lift",
    whyPoints: [
      {
        title: "UAQ Free Trade Zone Delivery",
        description:
          "Warehouse forklifts and access platforms delivered into UAQ FTZ, with free-zone entry documentation prepared before dispatch.",
      },
      {
        title: "On the Northern Route",
        description:
          "UAQ sits between Ajman and Ras Al Khaimah on our regular corridor, which keeps mobilization cost and lead time down.",
      },
      {
        title: "Small-Site Suitability",
        description:
          "Much of UAQ is smaller units and open sites — compact telehandlers and 3–5 ton forklifts usually beat larger machines here.",
      },
      {
        title: "Construction & Development",
        description:
          "Telehandlers and man lifts for the residential and commercial development underway across UAQ.",
      },
      {
        title: "Certified Operators",
        description: "Licensed operators supplied with every unit, or self-drive hire for certified in-house staff.",
      },
      {
        title: "Flexible Terms",
        description: "Daily, weekly, and monthly hire, extendable on site without renegotiating the contract.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Umm Al Quwain and UAQ Free Trade Zone?",
        answer:
          "Yes. UAQ Free Trade Zone, the Umm Al Quwain Industrial Area, Al Salamah, and Falaj Al Mualla are covered on our Northern Emirates route, typically with next-day mobilization.",
      },
      {
        question: "What equipment is most commonly rented in Umm Al Quwain?",
        answer:
          "Telehandlers and 3–5 ton forklifts are the most common, reflecting UAQ's mix of construction sites, smaller industrial units, and free-zone warehousing. Man lifts are frequently hired for building maintenance and signage work.",
      },
      {
        question: "Can you supply mobile cranes in Umm Al Quwain?",
        answer:
          "Yes. Mobile cranes are routed to UAQ for machinery installation, structural erection, and precast work. We ask for a couple of days' notice to schedule transport and confirm the right capacity.",
      },
      {
        question: "Is equipment rental in UAQ more expensive because of the distance?",
        answer:
          "Mobilization is quoted per job, but because UAQ sits directly on our Ajman–Ras Al Khaimah corridor, transport cost is generally comparable to a Sharjah or Ajman delivery rather than a remote-site charge.",
      },
      {
        question: "Do you offer long-term rental for UAQ construction projects?",
        answer:
          "Yes. Monthly and project-length contracts are available and are the usual choice for development work, with servicing and breakdown replacement included for the contract duration.",
      },
    ],
    ctaHeading: "Need Equipment in Umm Al Quwain?",
    ctaSubheading: "Send your site location and equipment type — we'll confirm a slot on our next Northern route run.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Umm Al Quwain.",

    metaTitle: "Heavy Equipment Rental Umm Al Quwain | UAQ FTZ",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Umm Al Quwain. Serving UAQ Free Trade Zone, the Industrial Area & Al Salamah.",
    keywords: [
      "heavy equipment rental Umm Al Quwain",
      "forklift rental Umm Al Quwain",
      "crane rental UAQ",
      "equipment rental UAQ Free Trade Zone",
      "telehandler rental Umm Al Quwain",
    ],
    areaServed: ["Umm Al Quwain", "UAQ Free Trade Zone", "Al Salamah", "Falaj Al Mualla"],
    nearby: ["ajman", "ras-al-khaimah", "sharjah"],
    industries: [
      "free-zone warehousing and distribution",
      "residential and commercial development",
      "light manufacturing",
      "fishing, marine and agricultural operations",
    ],
    demandNote:
      "Umm Al Quwain's demand comes from free-zone warehousing and a steady development pipeline, where compact telehandlers and mid-size forklifts do most of the work.",
  },
  {
    slug: "al-ain",
    metaZoneShort: "Industrial City & Sanaiya",
    title: "Heavy Equipment Rental in Al Ain",
    shortTitle: "Al Ain",
    cityName: "Al Ain",
    href: "/locations/al-ain",
    emirate: "Abu Dhabi",
    description:
      "Forklift, crane, telehandler, and man lift rental for Al Ain Industrial City, Sanaiya, and the Al Ain construction belt.",
    heroImage: "/images/fleet/aerial-bucket-truck.jpg",
    heroImageAlt: "Aerial work platform on a maintenance job in Al Ain",
    areas: [
      "Al Ain Industrial City (ICAD Al Ain)",
      "Al Ain Sanaiya",
      "Al Ain Industrial Area",
      "Zayed Military City & Remah",
      "Al Ain Airport & Al Faqa",
      "Al Jimi & Al Muwaiji",
    ],
    geo: { latitude: 24.2075, longitude: 55.7447 },
    primary: false,

    eyebrow: "Al Ain · Sanaiya · Industrial City",
    intro:
      "Equipment rental across Al Ain and the eastern region of Abu Dhabi — Al Ain Industrial City, the Sanaiya workshop district, and the construction and agricultural belt running out to Remah and Al Faqa.",
    whyHeading: "Why Al Ain Contractors Choose Seven Lift",
    whyPoints: [
      {
        title: "Same Emirate, Direct Route",
        description:
          "Al Ain is served directly from our Abu Dhabi base along the Al Ain road, keeping mobilization straightforward and predictable.",
      },
      {
        title: "Sanaiya Workshop District",
        description:
          "Compact forklifts and telehandlers sized for the dense automotive and fabrication workshops in Al Ain Sanaiya.",
      },
      {
        title: "Al Ain Industrial City",
        description:
          "Warehouse and manufacturing equipment for the ZonesCorp-developed industrial estates on the city's outskirts.",
      },
      {
        title: "Heat-Rated Equipment",
        description:
          "Al Ain runs hotter than the coast. Our units are maintained and specified for sustained inland summer operation.",
      },
      {
        title: "Construction & Infrastructure",
        description:
          "Telehandlers, man lifts, and mobile cranes for the residential, institutional, and road projects across the Al Ain region.",
      },
      {
        title: "Certified Operators",
        description: "Licensed operators supplied with every rental, with documentation for municipality requirements.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Al Ain and Al Ain Industrial City?",
        answer:
          "Yes. Al Ain Industrial City, Al Ain Sanaiya, and the surrounding industrial areas are served directly from our Abu Dhabi base, with next-day mobilization standard and same-day possible for units already in the region.",
      },
      {
        question: "What equipment do Al Ain Sanaiya workshops usually need?",
        answer:
          "Sanaiya's automotive and fabrication workshops mostly hire 3–5 ton forklifts and compact telehandlers, which fit the narrow yards and handle engine blocks, steel sections, and pallet loads.",
      },
      {
        question: "Can you supply cranes for construction projects in Al Ain?",
        answer:
          "Yes. Our mobile crane fleet from 25 to 500 ton serves construction, infrastructure, and precast installation work across the Al Ain region, with certified riggers and lift plans included.",
      },
      {
        question: "Does equipment hold up in Al Ain's summer heat?",
        answer:
          "Yes. Inland temperatures run higher than the coast, so our units are serviced on a tighter cycle for cooling systems and hydraulics during summer, and we include breakdown replacement in every contract.",
      },
      {
        question: "Do you cover Remah, Al Faqa, and the outlying Al Ain areas?",
        answer:
          "Yes, we mobilize to Remah, Al Faqa, and the wider eastern region for agricultural, infrastructure, and military-city projects, typically with a day or two of scheduling notice.",
      },
    ],
    ctaHeading: "Need Equipment in Al Ain or Sanaiya?",
    ctaSubheading: "Tell us your site and load requirement — we'll dispatch from Abu Dhabi on the Al Ain route.",
    whatsappMessage: "Hi Seven Lift, I need heavy equipment rental in Al Ain.",

    metaTitle: "Heavy Equipment Rental Al Ain | Sanaiya",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in Al Ain. Serving Al Ain Industrial City, Sanaiya, Remah & Al Faqa. Next-day delivery.",
    keywords: [
      "heavy equipment rental Al Ain",
      "forklift rental Al Ain",
      "crane rental Al Ain",
      "forklift rental Al Ain Sanaiya",
      "equipment rental Al Ain Industrial City",
      "telehandler rental Al Ain",
    ],
    areaServed: ["Al Ain", "Al Ain Industrial City", "Al Ain Sanaiya", "Remah", "Al Faqa"],
    nearby: ["abu-dhabi-musaffah", "dubai"],
    industries: [
      "automotive and fabrication workshops in Sanaiya",
      "food processing and light manufacturing",
      "residential and institutional construction",
      "agriculture and landscaping contracting",
    ],
    demandNote:
      "Al Ain combines a dense workshop district at Sanaiya with steady construction and agricultural contracting across the eastern region.",
  },
]

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug)
}

/** The two flagship locations, surfaced first in the /locations index. */
export const primaryLocations = locations.filter((location) => location.primary)

export const secondaryLocations = locations.filter((location) => !location.primary)
