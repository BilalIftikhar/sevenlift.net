import type { SpecialtyService } from "@/lib/specialty-services"
import { craneCapacityLinks } from "@/lib/crane-capacity-links"
import { cityLinksForEquipment } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

/**
 * Crane-by-capacity pages. People searching "50 ton crane rental Abu Dhabi"
 * already know the machine they need, so each page answers what that class
 * lifts, what it needs on site and what drives its price.
 *
 * Rules for editing:
 * - Every spec is a typical range for the class, labelled "confirm per job";
 *   the exact crane's load chart decides each lift.
 * - No prices. Rates are quote-based.
 * - Each page's copy is written for that class, not a number swap of another.
 * - The 500 ton page is UAE-wide, so it names no city (see lib/specialty-services.ts).
 */

const heroImage = "/images/mobile-crane.jpeg"
const phone = siteConfig.phoneDisplay

function included(framework: string) {
  return {
    title: "Included With Every Crane Hire",
    items: [
      "Certified crane operator",
      "Certified rigger and banksman to suit the lift",
      `Lift plan, method statement and risk assessment to ${framework}`,
      "Current third-party inspection certificate and load chart",
      "Insurance cover on the crane",
    ],
  }
}

const abuDhabiLinks = (slug: string) => [
  { name: "Mobile Crane Rental Abu Dhabi", href: "/services/mobile-crane-rental-abu-dhabi" },
  ...craneCapacityLinks.filter((link) => !link.href.endsWith(slug)),
  { name: "Equipment Rental Musaffah", href: "/locations/abu-dhabi-musaffah" },
  { name: "Equipment Rental ICAD", href: "/locations/abu-dhabi/icad" },
  { name: "Equipment Rental KIZAD & Khalifa Port", href: "/locations/abu-dhabi/kizad-khalifa-port" },
  { name: "Mobile Crane Specifications", href: "/equipment/mobile-crane" },
  { name: "Guide: Crane Safety Rules in Abu Dhabi", href: "/blog/mobile-crane-safety-guidelines-regulations-abu-dhabi" },
]

const abuDhabiServed = ["Abu Dhabi", "Musaffah", "ICAD", "KIZAD", "Khalifa Port"]

export const craneCapacityPages: SpecialtyService[] = [
  // ------------------------------------------------------------------ 25 ton
  {
    slug: "25-ton-crane-rental-abu-dhabi",
    href: "/services/25-ton-crane-rental-abu-dhabi",
    label: "25 Ton Crane Rental Abu Dhabi",
    family: "mobile-crane",
    eyebrow: "25 Ton Crane Rental · Abu Dhabi",
    h1: "25 Ton Crane Rental in Abu Dhabi",
    intro:
      "A 25 ton mobile crane is the workhorse for short, light lifts around Abu Dhabi: setting a generator in a Musaffah workshop, lifting a chiller onto a villa roof, or taking a container off a trailer. It drives to site on its own wheels, sets up quickly, and comes from our Musaffah yard with a certified operator and rigger.",
    heroImage,
    heroImageAlt: "25 ton mobile crane set up for a light lift in Abu Dhabi",
    metaTitle: "25 Ton Crane Rental Abu Dhabi | With Operator",
    metaDescription: `25 ton crane rental in Abu Dhabi with certified operator and rigger, from our Musaffah yard. Generators, AC units, containers. Call ${phone}.`,
    serviceType: "25 ton mobile crane rental",
    formLocation: "Abu Dhabi",
    areaServed: abuDhabiServed,
    specs: [
      { label: "Rated Capacity", value: "25 Ton" },
      { label: "Main Boom", value: "30–40 m" },
      { label: "Crew", value: "Operator + Rigger" },
      { label: "Support", value: "24/7" },
    ],
    siteFactsHeading: "Typical 25 Ton Crane Specs (confirm per job)",
    siteFacts: [
      { label: "Rated capacity", value: "25 t, at short radius only" },
      { label: "Main boom", value: "About 30 to 40 m" },
      { label: "Tip height with jib", value: "Up to about 48 m" },
      { label: "Outrigger spread", value: "About 5.5 by 6 m" },
      { label: "Counterweight", value: "Carried on the crane; one vehicle arrives" },
      { label: "From our Musaffah yard", value: "Usually same or next day across Abu Dhabi" },
    ],
    localContext: {
      heading: "What a 25 Ton Crane Really Lifts",
      paragraphs: [
        "The 25 ton rating applies only with the load close to the crane, at about 3 m radius on a short boom. Move the load out to 10 m and a typical 25 ton crane lifts roughly a quarter of that, and at full boom the figure drops again. That is why we ask for the load weight and the distance from where the crane can stand, not just the weight.",
        "In practice a 25 ton crane suits loads of a few tonnes placed within about 10 to 15 m: packaged AC units, mid-size generators, steel bundles, and machinery coming off a trailer. If the load is heavier or the crane has to stand further back, a 50 ton crane is usually the next step.",
        "Its small footprint is the other reason to choose it. With outriggers set at roughly 6 by 6 m, it fits inside most Musaffah plots and on residential streets where a larger crane cannot set up.",
      ],
    },
    bulletGroups: [
      {
        title: "Typical 25 Ton Crane Jobs in Abu Dhabi",
        items: [
          "Generator, transformer and chiller placement at Musaffah workshops",
          "Lifting containers and machinery off trailers in ICAD and Mafraq yards",
          "Placing AC units and water tanks on villa roofs in Khalifa City and Al Shamkha",
          "Small steel, signage and plant lifts on tight city plots",
        ],
      },
      {
        title: "What Affects the Daily Price",
        items: [
          "Hire period: a few hours, a full shift, or several days",
          "Distance from our Musaffah yard to your site",
          "Crew: operator only, or operator with rigger and banksman",
          "Night or weekend work on occupied sites",
          "Waiting time if the site or the load is not ready",
        ],
      },
      included("OSHAD-SF"),
    ],
    areasHeading: "More Crane Sizes and Abu Dhabi Coverage",
    areas: abuDhabiLinks("25-ton-crane-rental-abu-dhabi"),
    faqs: [
      {
        question: "How much does a 25 ton crane cost per day in Abu Dhabi?",
        answer:
          "The price depends on the hire period, the distance from our Musaffah yard, the crew you need and the working hours. Send the load weight, the lift radius and the site location and we reply with a fixed written quote.",
      },
      {
        question: "How much can a 25 ton crane lift at 10 m radius?",
        answer:
          "Roughly a quarter of its rating on a typical model, so around 5 to 6 tonnes on a short boom, and less as the boom extends. We confirm the figure from the exact crane's load chart before we quote.",
      },
      {
        question: "Should I hire a 25 ton or a 50 ton crane?",
        answer:
          "Choose by the load at your working radius, not by weight alone. A 25 ton crane suits loads of a few tonnes within about 10 to 15 m. Heavier loads, longer radius, or hook heights above about 35 m usually need a 50 ton crane.",
      },
      {
        question: "Can a 25 ton crane set up on a villa plot or a narrow street?",
        answer:
          "Usually, yes. Its outriggers need roughly 6 by 6 m of firm, level ground. Setting up on a public road may need municipality approval, so tell us exactly where the crane will stand and we will advise.",
      },
      {
        question: "Can I hire a 25 ton crane for a short job?",
        answer:
          "Yes. Short lifts such as placing a generator or an AC unit are common. Tell us the expected lift time and we quote for the job, including travel from Musaffah and setup.",
      },
    ],
    ctaHeading: "Need a 25 Ton Crane in Abu Dhabi?",
    ctaSubheading: "Send the load weight, the lift radius and a photo of where the crane can stand. We confirm the crane and a delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need a 25 ton crane in Abu Dhabi.",
  },

  // ------------------------------------------------------------------ 50 ton
  {
    slug: "50-ton-crane-rental-abu-dhabi",
    href: "/services/50-ton-crane-rental-abu-dhabi",
    label: "50 Ton Crane Rental Abu Dhabi",
    family: "mobile-crane",
    eyebrow: "50 Ton Crane Rental · Abu Dhabi",
    h1: "50 Ton Crane Rental in Abu Dhabi",
    intro:
      "The 50 ton mobile crane is where most Abu Dhabi contractors go when a 25 ton crane cannot reach: steel portal frames for new Musaffah warehouses, precast beams, machinery moves in ICAD and tank placement at KIZAD. In most cases it still arrives as a single vehicle, with a certified operator and rigger from our Musaffah yard.",
    heroImage,
    heroImageAlt: "50 ton all-terrain crane lifting steel on an Abu Dhabi site",
    metaTitle: "50 Ton Crane Rental Abu Dhabi | Crew Included",
    metaDescription: `50 ton crane rental in Abu Dhabi for steel erection, precast and machinery lifts. Operator, rigger and OSHAD lift plan included. Call ${phone}.`,
    serviceType: "50 ton mobile crane rental",
    formLocation: "Abu Dhabi",
    areaServed: abuDhabiServed,
    specs: [
      { label: "Rated Capacity", value: "50 Ton" },
      { label: "Main Boom", value: "40–48 m" },
      { label: "Crew", value: "Operator + Rigger" },
      { label: "Lift Plan", value: "OSHAD-SF" },
    ],
    siteFactsHeading: "Typical 50 Ton Crane Specs (confirm per job)",
    siteFacts: [
      { label: "Rated capacity", value: "50 t, at short radius only" },
      { label: "Main boom", value: "About 40 to 48 m" },
      { label: "Tip height with jib", value: "About 55 to 60 m" },
      { label: "Outrigger spread", value: "About 6 to 7.5 m each way" },
      { label: "Counterweight", value: "Usually carried on the crane" },
      { label: "From our Musaffah yard", value: "Usually next day; same day when available" },
    ],
    localContext: {
      heading: "What a 50 Ton Crane Really Lifts",
      paragraphs: [
        "A 50 ton crane reaches its rating only with the load a few metres from the crane. The useful figure is the load at your working radius: at 15 m a typical 50 ton crane lifts somewhere around 6 to 9 tonnes, depending on the boom length and counterweight. That covers most steel members, precast beams and packaged plant.",
        "Height is the other reason to step up from 25 ton. With about 40 to 48 m of main boom, a 50 ton crane places rafters and purlins on a high-bay warehouse, or lifts plant onto a three or four storey roof from the street side.",
        "Before booking, check the setup area. The outriggers spread roughly 6 to 7.5 m each way and need firm, level ground under each pad. Backfilled trenches and fresh fill in Musaffah yards are the most common problem, and we check for them at the site survey.",
      ],
    },
    bulletGroups: [
      {
        title: "Typical 50 Ton Crane Jobs in Abu Dhabi",
        items: [
          "Steel portal frame, rafter and purlin erection for new Musaffah warehouses",
          "Precast beam and slab lifts on low-rise projects",
          "Machinery installation and relocation inside ICAD factories",
          "Tank, skid and pump placement at KIZAD plants",
        ],
      },
      {
        title: "What Affects the Daily Price",
        items: [
          "Hire period: a single lift, a full shift, or a multi-day erection programme",
          "Whether extra counterweight or a fly jib is needed for the radius",
          "Distance from Musaffah and access for an all-terrain crane",
          "Crew size: riggers and banksmen for repeated steel lifts",
          "Lift planning and any permits or gate passes the site needs",
        ],
      },
      included("OSHAD-SF"),
    ],
    areasHeading: "More Crane Sizes and Abu Dhabi Coverage",
    areas: abuDhabiLinks("50-ton-crane-rental-abu-dhabi"),
    faqs: [
      {
        question: "How much does a 50 ton crane cost per day in Abu Dhabi?",
        answer:
          "The price depends on the hire period, the counterweight and jib the lift needs, the crew size, the travel from our Musaffah yard and any permits. Send the load, radius and site and we reply with a fixed written quote.",
      },
      {
        question: "How much can a 50 ton crane lift at 15 m radius?",
        answer:
          "A typical 50 ton crane lifts around 6 to 9 tonnes at 15 m, depending on the boom length and counterweight. We check your lift against the exact crane's load chart before confirming it.",
      },
      {
        question: "Can a 50 ton crane erect a warehouse steel frame?",
        answer:
          "Yes. Single-storey portal frames, rafters and purlins are typical 50 ton work, usually as a multi-day hire with a rigging crew. Long spans or heavy trusses lifted at a distance may need a larger crane, which we confirm from the drawings.",
      },
      {
        question: "Do I need a lift plan for a 50 ton crane in Abu Dhabi?",
        answer:
          "Yes. Crane lifts in Abu Dhabi are planned under OSHAD-SF. We prepare the lift plan, method statement and risk assessment and send them for your HSE team's approval before mobilization.",
      },
      {
        question: "When do I need a 100 ton crane instead of a 50 ton?",
        answer:
          "When the load at your radius is beyond the 50 ton crane's chart, when you need a hook height above about 45 m, or when the crane has to stand far from the load. A 100 ton crane keeps useful capacity at 20 m and beyond.",
      },
    ],
    ctaHeading: "Need a 50 Ton Crane in Abu Dhabi?",
    ctaSubheading: "Send the load weight, the radius and photos of the setup area. We confirm the crane, the crew and a mobilization slot.",
    whatsappMessage: "Hi Seven Lift, I need a 50 ton crane in Abu Dhabi.",
  },

  // ----------------------------------------------------------------- 100 ton
  {
    slug: "100-ton-crane-rental-abu-dhabi",
    href: "/services/100-ton-crane-rental-abu-dhabi",
    label: "100 Ton Crane Rental Abu Dhabi",
    family: "mobile-crane",
    eyebrow: "100 Ton Crane Rental · Abu Dhabi",
    h1: "100 Ton Crane Rental in Abu Dhabi",
    intro:
      "A 100 ton crane is the step up for heavy machinery, long-radius precast and lifts the crane cannot get close to. In Abu Dhabi it does most of its work in ICAD factories, at KIZAD and Khalifa Port, and on mid-rise projects where the crane stands at the street and lifts over the building. Each hire comes with a certified operator, riggers and an OSHAD lift plan.",
    heroImage,
    heroImageAlt: "100 ton mobile crane with outriggers set on an industrial site",
    metaTitle: "100 Ton Crane Rental Abu Dhabi | Lift Plans",
    metaDescription: `100 ton crane rental in Abu Dhabi for heavy machinery and long-radius lifts in ICAD, KIZAD and Khalifa Port. Crew and lift plan. Call ${phone}.`,
    serviceType: "100 ton mobile crane rental",
    formLocation: "Abu Dhabi",
    areaServed: abuDhabiServed,
    specs: [
      { label: "Rated Capacity", value: "100 Ton" },
      { label: "Main Boom", value: "50–60 m" },
      { label: "Crew", value: "Operator + Riggers" },
      { label: "Lift Plan", value: "OSHAD-SF" },
    ],
    siteFactsHeading: "Typical 100 Ton Crane Specs (confirm per job)",
    siteFacts: [
      { label: "Rated capacity", value: "100 t, at short radius only" },
      { label: "Main boom", value: "About 50 to 60 m" },
      { label: "Tip height with jib", value: "Up to about 80 m" },
      { label: "Outrigger spread", value: "About 8 to 9 m each way" },
      { label: "Counterweight", value: "Partly on board; the rest on a second truck" },
      { label: "Booking", value: "3 to 5 days ahead where possible" },
    ],
    localContext: {
      heading: "Why Choose a 100 Ton Crane",
      paragraphs: [
        "Most 100 ton hires are not about a 100 tonne load. They are about radius: a 10 tonne press that has to go 20 m into a factory, or precast panels placed on the far side of a building. A typical 100 ton crane still lifts around 10 to 15 tonnes at 20 m, where a 50 ton crane has run out of chart.",
        "Full capacity needs full counterweight, which usually travels on a second truck and is fitted on site. Allow time and space for it: the counterweight truck and its unloading area are part of the setup plan.",
        "The outriggers spread around 8 to 9 m each way and put high loads into the ground, so we check the setup area for buried services, trench backfill and soft fill, and specify crane mats where the ground needs them.",
      ],
    },
    bulletGroups: [
      {
        title: "Typical 100 Ton Crane Jobs in Abu Dhabi",
        items: [
          "Heavy machinery and press installation in ICAD factories",
          "Precast panel and long-radius steel lifts on mid-rise projects",
          "Vessel, skid and pipe-rack module lifts at KIZAD",
          "Heavy cargo and project-cargo lifts at Khalifa Port",
        ],
      },
      {
        title: "What Affects the Daily Price",
        items: [
          "Counterweight transport, which adds a truck to the mobilization",
          "Hire period and the number of lifts in the shift",
          "Crane mats or ground preparation where the ground needs them",
          "Crew size and supervision for critical lifts",
          "Port or free-zone passes, permits and lift-plan engineering",
        ],
      },
      included("OSHAD-SF"),
    ],
    areasHeading: "More Crane Sizes and Abu Dhabi Coverage",
    areas: abuDhabiLinks("100-ton-crane-rental-abu-dhabi"),
    faqs: [
      {
        question: "How much does a 100 ton crane cost per day in Abu Dhabi?",
        answer:
          "The price depends on the hire period, the counterweight truck, ground preparation, the crew and the permits the site needs. Send the load, radius and site location and we reply with a fixed written quote.",
      },
      {
        question: "Why would I rent a 100 ton crane for a 10 tonne load?",
        answer:
          "Because of radius. A crane's capacity falls quickly as the load moves away from it. If a 10 tonne load has to be placed 20 m away, a 50 ton crane usually cannot do it, while a typical 100 ton crane can.",
      },
      {
        question: "How much space does a 100 ton crane need?",
        answer:
          "Allow for the outriggers at around 8 to 9 m each way, room beside the crane for the counterweight truck to unload, and clear space behind it for the counterweight to swing. We confirm the layout in the lift plan.",
      },
      {
        question: "Can you lift at KIZAD and Khalifa Port with a 100 ton crane?",
        answer:
          "Yes. We arrange the gate passes and crew documents the port and free zone require. Allow a working day for pass approval on a first visit.",
      },
      {
        question: "How far ahead should I book a 100 ton crane?",
        answer:
          "Book 3 to 5 days ahead where possible, so the crane, the counterweight truck, the crew and any permits are confirmed before the lift date.",
      },
    ],
    ctaHeading: "Need a 100 Ton Crane in Abu Dhabi?",
    ctaSubheading: "Send the load weight, dimensions, radius and setup photos. We return a crane selection and lift plan for your approval.",
    whatsappMessage: "Hi Seven Lift, I need a 100 ton crane in Abu Dhabi.",
  },

  // ----------------------------------------------------------------- 200 ton
  {
    slug: "200-ton-crane-rental-abu-dhabi",
    href: "/services/200-ton-crane-rental-abu-dhabi",
    label: "200 Ton Crane Rental Abu Dhabi",
    family: "mobile-crane",
    eyebrow: "200 Ton Crane Rental · Abu Dhabi",
    h1: "200 Ton Crane Rental in Abu Dhabi",
    intro:
      "200 ton cranes handle Abu Dhabi's heavy and high lifts: large plant items in ICAD and KIZAD, tank and vessel lifts, and steel or plant placed on tall buildings. These jobs are planned rather than simply booked. We survey the site, check the ground, prepare the OSHAD critical lift plan, then mobilize the crane, counterweight and crew from Musaffah.",
    heroImage,
    heroImageAlt: "200 ton all-terrain crane rigged for a heavy lift",
    metaTitle: "200 Ton Crane Rental Abu Dhabi | Heavy Lifts",
    metaDescription: `200 ton crane rental in Abu Dhabi for heavy plant, tank and high lifts. Site survey, critical lift plan and certified crew. Call ${phone}.`,
    serviceType: "200 ton mobile crane rental",
    formLocation: "Abu Dhabi",
    areaServed: [...abuDhabiServed, "Ruwais", "Al Dhafra"],
    specs: [
      { label: "Rated Capacity", value: "200 Ton" },
      { label: "Main Boom", value: "60–72 m" },
      { label: "Site Survey", value: "Included" },
      { label: "Lift Plan", value: "Critical Lift" },
    ],
    siteFactsHeading: "Typical 200 Ton Crane Specs (confirm per job)",
    siteFacts: [
      { label: "Rated capacity", value: "200 t, at short radius only" },
      { label: "Main boom", value: "About 60 to 72 m" },
      { label: "Hook height with lattice jib", value: "Roughly 100 m" },
      { label: "Outrigger spread", value: "About 9 to 10 m each way" },
      { label: "Counterweight", value: "On 2 to 3 separate trucks" },
      { label: "Booking", value: "At least 5 days ahead; a week for critical lifts" },
    ],
    localContext: {
      heading: "Planning a 200 Ton Crane Lift",
      paragraphs: [
        "A 200 ton crane brings around 60 to 72 m of main boom and, with a lattice jib, hook heights of roughly 100 m. That reach is what most clients are paying for: lifting a heavy load at long radius, or placing plant on top of a tall structure from the ground.",
        "The crane arrives with its counterweight on separate trucks, typically two or three, and assembly takes a few hours. The outrigger loads are high enough that crane mats and a ground-bearing check are standard practice rather than an extra.",
        "Most 200 ton lifts in Abu Dhabi count as critical lifts under OSHAD-SF. The lift plan covers load and rigging calculations, ground bearing and the exclusion zone, and goes to your HSE team for approval before mobilization. Coastal and Al Dhafra lifts are usually scheduled for the calmer early-morning window, because summer winds can exceed the load chart's limits.",
      ],
    },
    bulletGroups: [
      {
        title: "Typical 200 Ton Crane Jobs in Abu Dhabi",
        items: [
          "Heavy plant and transformer lifts in ICAD and KIZAD",
          "Tank, vessel and column lifts for Ruwais and Al Dhafra contractors",
          "Steel and plant placement on tall buildings on Abu Dhabi island",
          "Long-radius lifts over existing structures and live plant",
        ],
      },
      {
        title: "What Affects the Daily Price",
        items: [
          "Number of counterweight trucks and the distance they travel",
          "Assembly time and the length of the hire",
          "Site survey, ground-bearing check and crane mats",
          "Critical lift planning and engineering",
          "Road movement permits where the route requires them",
        ],
      },
      included("OSHAD-SF"),
    ],
    areasHeading: "More Crane Sizes and Abu Dhabi Coverage",
    areas: [
      ...abuDhabiLinks("200-ton-crane-rental-abu-dhabi"),
      { name: "Equipment Rental Ruwais & Al Dhafra", href: "/locations/abu-dhabi/ruwais-al-dhafra" },
    ],
    faqs: [
      {
        question: "How much does a 200 ton crane cost per day in Abu Dhabi?",
        answer:
          "The price depends on the counterweight trucks, assembly time, hire length, ground preparation, lift engineering and any road permits. We quote after reviewing the lift details and, for most 200 ton jobs, a site survey.",
      },
      {
        question: "When do I need a 200 ton crane instead of a 100 ton?",
        answer:
          "When the load at your radius is beyond the 100 ton crane's chart, when the hook height needed is above about 70 m, or when the crane must lift over a building or live plant from a distance.",
      },
      {
        question: "Is a 200 ton crane lift a critical lift under OSHAD?",
        answer:
          "Usually, yes, especially when the lift uses a high share of the crane's chart or passes over live plant or occupied areas. We prepare the critical lift plan with calculations and send it to your HSE team for approval.",
      },
      {
        question: "Do you survey the site before a 200 ton lift?",
        answer:
          "Yes. We check the setup position, outrigger ground conditions, buried services, access for the crane and counterweight trucks, and overhead obstructions before the lift plan is finalized.",
      },
      {
        question: "How long does it take to set up a 200 ton crane?",
        answer:
          "Typically a few hours after arrival, mainly for fitting the counterweight and any jib. We plan arrival early so the lift itself falls in the calmer morning hours.",
      },
    ],
    ctaHeading: "Planning a 200 Ton Lift in Abu Dhabi?",
    ctaSubheading: "Send the load weight, dimensions, lift radius and site drawings. We arrange the survey and return a lift plan for approval.",
    whatsappMessage: "Hi Seven Lift, I need a 200 ton crane in Abu Dhabi.",
  },

  // ----------------------------------------------------------------- 500 ton
  {
    slug: "500-ton-crane-rental-uae",
    href: "/services/500-ton-crane-rental-uae",
    label: "500 Ton Crane Rental UAE",
    family: "mobile-crane",
    eyebrow: "500 Ton Crane Rental · UAE-Wide",
    h1: "500 Ton Crane Rental in the UAE",
    intro:
      "500 ton mobile cranes are for the heaviest lifts in the UAE: process modules and columns at refineries and plants, bridge girders, large transformers, and erecting or dismantling tower cranes. A crane of this class is a project in itself, so every hire starts with an engineered lift plan, a site survey and a mobilization schedule for the crane, its counterweight and crew.",
    heroImage,
    heroImageAlt: "500 ton class mobile crane with extended boom for a heavy lift",
    metaTitle: "500 Ton Crane Rental UAE | Heavy Lift Cranes",
    metaDescription: `500 ton crane rental across the UAE for modules, girders and heavy plant. Engineered lift plans, site survey and certified crew. Call ${phone}.`,
    serviceType: "500 ton mobile crane rental",
    specs: [
      { label: "Rated Capacity", value: "500 Ton" },
      { label: "Telescopic Boom", value: "50–85 m" },
      { label: "Lift Study", value: "Engineered" },
      { label: "Coverage", value: "All 7 Emirates" },
    ],
    siteFactsHeading: "Typical 500 Ton Crane Specs (confirm per job)",
    siteFacts: [
      { label: "Rated capacity", value: "500 t, at very short radius only" },
      { label: "Telescopic boom", value: "Roughly 50 to 85 m" },
      { label: "Hook height with luffing jib", value: "Over 100 m" },
      { label: "Outrigger spread", value: "Roughly 10 m or more each way" },
      { label: "Counterweight", value: "Up to about 165 t on the largest models, by truck convoy" },
      { label: "Booking", value: "Weeks ahead, for planning, permits and mobilization" },
    ],
    localContext: {
      heading: "What a 500 Ton Crane Hire Involves",
      paragraphs: [
        "The headline figure applies only at very short radius. What a 500 ton crane offers is capacity at distance and height: a telescopic boom of roughly 50 to 85 m, and luffing jibs that take hook heights well beyond 100 m. That is how a heavy module can be set into a congested plant from outside the unit.",
        "The crane travels on its own axles, but its counterweight, up to around 165 tonnes on the largest models in this class, comes on a convoy of trucks, and rigging the crane typically takes most of a day. Road movement permits, a route check and an assembly area are all part of the plan.",
        "Outrigger loads at this size need an engineered ground assessment and load-spreading mats under each pad. We agree the setup position, the exclusion zone and the wind limits with your engineers before the crane mobilizes.",
      ],
    },
    bulletGroups: [
      {
        title: "Typical 500 Ton Crane Jobs",
        items: [
          "Process modules, columns and heat exchangers at refineries and petrochemical plants",
          "Bridge girder and precast segment lifts on infrastructure projects",
          "Large transformer and generator installation at power and utility sites",
          "Tower crane erection and dismantling on high-rise projects",
        ],
      },
      {
        title: "What Affects the Price",
        items: [
          "Number of counterweight trucks and their travel distance",
          "Assembly and dismantling time for the crane and jib",
          "Engineering: lift study, ground assessment and rigging design",
          "Load-spreading mats and ground preparation",
          "Road movement permits and route surveys",
        ],
      },
      included("the site's safety framework"),
    ],
    areasHeading: "Mobile Crane Rental by City and Size",
    areas: [
      { name: "Mobile Crane Rental UAE", href: "/services/mobile-crane-rental-uae" },
      ...cityLinksForEquipment("mobile-crane"),
      ...craneCapacityLinks.filter((link) => !link.href.endsWith("500-ton-crane-rental-uae")),
      { name: "Mobile Crane Specifications", href: "/equipment/mobile-crane" },
    ],
    faqs: [
      {
        question: "How much does it cost to hire a 500 ton crane in the UAE?",
        answer:
          "Mobilization is a large share of the price: the counterweight convoy, assembly and dismantling, permits and the lift engineering, on top of the hire days. We quote after reviewing the lift details and surveying the site.",
      },
      {
        question: "How long does it take to rig a 500 ton crane?",
        answer:
          "Typically most of a day to fit the counterweight and any jib, and a similar time to dismantle. The lift plan schedules both, so the crane is ready when the load and your team are.",
      },
      {
        question: "How far ahead should a 500 ton crane be booked?",
        answer:
          "As early as possible, and usually weeks ahead. Send the lift details early so the site survey, lift study and road permits can run in parallel.",
      },
      {
        question: "What information do you need to plan a 500 ton lift?",
        answer:
          "The load weight and centre of gravity, its dimensions and lifting points, the lift radius and height, site drawings showing the setup area, ground information if available, and the site's HSE and permit requirements.",
      },
      {
        question: "Do you mobilize 500 ton cranes to every emirate?",
        answer:
          "Yes. We mobilize heavy cranes to sites across all seven emirates. The plan covers the route, the convoy and any movement permits from our yard to your site.",
      },
    ],
    ctaHeading: "Planning a 500 Ton Lift?",
    ctaSubheading: "Send the load data, site drawings and target date. We arrange the survey and an engineered lift plan for your approval.",
    whatsappMessage: "Hi Seven Lift, I am planning a 500 ton crane lift.",
  },
]
