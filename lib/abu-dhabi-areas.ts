import type { Faq } from "@/lib/faqs"
import { siteConfig } from "@/lib/site-config"

/**
 * District-level landing pages inside Abu Dhabi, served at
 * /locations/abu-dhabi/[slug] and linked from the Abu Dhabi hub
 * (/locations/abu-dhabi-musaffah).
 *
 * Musaffah itself has no entry here: the hub page targets it, and a second
 * Musaffah page would compete with the hub for the same searches.
 *
 * Every entry must describe what equipment work in that district actually
 * involves — sites, access, ground, permits. A page that only swaps the
 * district name is a doorway page and will not be indexed.
 */
export type AbuDhabiArea = {
  slug: string
  /** District name as it appears mid-sentence: "ICAD", "Yas Island". */
  name: string
  href: string
  title: string
  eyebrow: string
  intro: string
  heroImage: string
  heroImageAlt: string
  /** Sub-districts and sites covered, shown as the "Areas We Cover" list. */
  zones: string[]
  whyHeading: string
  whyPoints: { title: string; description: string }[]
  context: { heading: string; paragraphs: string[] }
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
  metaTitle: string
  metaDescription: string
  areaServed: string[]
  /** Slugs of neighbouring districts, for internal linking. */
  nearby: string[]
}

const base = "/locations/abu-dhabi"

export const abuDhabiAreas: AbuDhabiArea[] = [
  {
    slug: "icad",
    name: "ICAD",
    href: `${base}/icad`,
    title: "Heavy Equipment Rental in ICAD, Abu Dhabi",
    eyebrow: "Abu Dhabi · ICAD I, II & III",
    intro:
      "Forklift, mobile crane, telehandler, and man lift rental for the Industrial City of Abu Dhabi. ICAD borders Musaffah, where our yard is, so standard units reach ICAD I, II, and III factories the same day, usually within hours.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift moving pallets inside an industrial warehouse",
    zones: [
      "ICAD I",
      "ICAD II",
      "ICAD III",
      "Mussafah South",
      "ICAD Residential City",
      "Mussafah South logistics parks",
    ],
    whyHeading: "Why ICAD Factories Rent From Seven Lift",
    whyPoints: [
      {
        title: "Next Door to Our Yard",
        description:
          "ICAD sits directly beside Musaffah, so a replacement forklift or an urgent crane is a short drive away, not a cross-emirate mobilization.",
      },
      {
        title: "Built for Heavy Manufacturing",
        description:
          "Steel, pipe, cable, and building-materials plants in ICAD need 7 to 25 ton forklifts, side loaders, and cranes for plant installation. That is the core of our fleet.",
      },
      {
        title: "Shift-Pattern Support",
        description:
          "Many ICAD plants run around the clock. Monthly hire with breakdown replacement keeps a production line moving when a machine goes down at night.",
      },
      {
        title: "Documentation Ready",
        description:
          "Third-party inspection certificates, operator licences, and load charts are supplied with the machine, which is what plant HSE teams ask for at the gate.",
      },
    ],
    context: {
      heading: "Equipment Work in ICAD: What to Plan For",
      paragraphs: [
        "ICAD was planned for heavy industry, and the loads show it. Steel coil, pipe, rebar, cable drums, and precast elements move through its plants every day, so forklift requests here run heavier than in a typical warehouse. 10 ton units and side loaders are common, and 25 ton forklifts are used for machinery and coil handling.",
        "Most ICAD sites have gate security and a site induction. Send us the plant name and the contact who issues gate passes when you book, and the driver and operator can be registered before arrival rather than waiting at the gate.",
        "For plant installation and machinery moves inside factory halls, headroom and floor loading usually decide the method, not the lift weight. A crane may need to lift through a roof opening or set up outside the building, or a heavy forklift with a spreader may do the job instead. We check this at the site survey before quoting.",
      ],
    },
    faqs: [
      {
        question: "How quickly can you deliver a forklift to ICAD?",
        answer:
          "ICAD borders Musaffah, where our fleet is based, so same-day delivery is standard for 3–10 ton forklifts, and urgent requests are often on site within a few hours.",
      },
      {
        question: "Do you rent heavy forklifts for steel coil and pipe in ICAD?",
        answer:
          "Yes. We supply 10–25 ton forklifts and side loaders for coil, pipe, and long steel sections, with certified operators if you need them.",
      },
      {
        question: "Can you supply a crane for machinery installation inside an ICAD factory?",
        answer:
          "Yes. We survey the access, headroom, and floor or ground conditions first, then specify a mobile crane or heavy forklift method with a documented lift plan.",
      },
      {
        question: "Do you offer monthly equipment rental for ICAD plants?",
        answer:
          "Yes. Monthly hire, with servicing and breakdown replacement included, is how most ICAD plants run their rented forklifts and man lifts.",
      },
    ],
    ctaHeading: "Need Equipment in ICAD Today?",
    ctaSubheading: "Send the plant location and the load. Our Musaffah yard is minutes away.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in ICAD, Abu Dhabi.",
    metaTitle: "ICAD Equipment Rental | Forklift & Crane Hire",
    metaDescription:
      "Forklift, crane, telehandler & man lift rental in ICAD I, II & III. Next to our Musaffah yard for same-day delivery. Certified operators. Call now.",
    areaServed: ["ICAD", "Industrial City of Abu Dhabi", "Mussafah South", "Abu Dhabi"],
    nearby: ["mohammed-bin-zayed-city", "mafraq-baniyas", "kizad-khalifa-port"],
  },
  {
    slug: "kizad-khalifa-port",
    name: "KIZAD & Khalifa Port",
    href: `${base}/kizad-khalifa-port`,
    title: "Heavy Equipment Rental in KIZAD & Khalifa Port",
    eyebrow: "Abu Dhabi · KIZAD · Khalifa Port · Al Taweelah",
    intro:
      "Forklift, mobile crane, telehandler, and man lift rental for Khalifa Industrial Zone Abu Dhabi (KIZAD), Khalifa Port, and the Al Taweelah industrial area, halfway between Abu Dhabi and Dubai.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container stacks at a port terminal",
    zones: [
      "KIZAD Area A",
      "KIZAD Area B",
      "Khalifa Port",
      "Al Taweelah",
      "KIZAD logistics parks",
    ],
    whyHeading: "Why KIZAD Operators Rent From Seven Lift",
    whyPoints: [
      {
        title: "Container & Logistics Handling",
        description:
          "7 to 10 ton forklifts for container stuffing and destuffing, and 3 to 5 ton electric units for the logistics parks' finished floors.",
      },
      {
        title: "Port-Side Crane Lifts",
        description:
          "Mobile cranes from 25 to 500 ton with certified riggers and lift plans for heavy cargo, plant, and terminal work around Khalifa Port.",
      },
      {
        title: "Planned Mobilization",
        description:
          "KIZAD is roughly an hour from Musaffah, so we schedule delivery windows around your gate and shift times rather than leaving you waiting.",
      },
      {
        title: "Long-Term Contracts",
        description:
          "Most KIZAD warehouses and plants rent monthly, with a standby unit arrangement so a breakdown never stops a shift.",
      },
    ],
    context: {
      heading: "Renting Equipment in KIZAD & Khalifa Port",
      paragraphs: [
        "KIZAD is one of the largest industrial zones in the region, with heavy industry such as aluminium, metals, and chemicals alongside food, logistics, and free-zone warehousing, all built around Khalifa Port. Equipment demand here is steady and long-term rather than project-based.",
        "Port and free-zone areas control vehicle and equipment entry. Allow time for the entry permits your operator or tenant sponsor has to arrange, and share the gate you want us to use. For equipment going into the port itself, the terminal's own permit-to-work rules apply on top of the equipment certificates we supply.",
        "The coastal site is exposed to strong seasonal winds, so heavy crane lifts at Khalifa Port are usually scheduled for the calmer morning hours. Build a weather contingency into the programme for any critical lift.",
      ],
    },
    faqs: [
      {
        question: "Do you deliver equipment to KIZAD and Khalifa Port?",
        answer:
          "Yes. KIZAD, Khalifa Port, and Al Taweelah are part of our regular Abu Dhabi coverage. We schedule the delivery slot around your gate and shift times.",
      },
      {
        question: "Can you supply forklifts for container stuffing in KIZAD?",
        answer:
          "Yes. 7–10 ton forklifts with the right fork length for container work are our standard KIZAD logistics specification, available daily, weekly, or monthly.",
      },
      {
        question: "Do you provide cranes with lift plans for port lifts?",
        answer:
          "Yes. Every crane job includes a documented lift plan, load charts, third-party certificates, and certified operators and riggers, which terminal operators require.",
      },
      {
        question: "How far is KIZAD from your yard?",
        answer:
          "Our yard is in Musaffah, roughly an hour's drive from KIZAD. For monthly contracts we can keep a unit on site so there is no daily travel.",
      },
    ],
    ctaHeading: "Need Equipment in KIZAD or Khalifa Port?",
    ctaSubheading: "Tell us the plot, the gate, and the load. We'll plan the delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in KIZAD / Khalifa Port.",
    metaTitle: "Equipment Rental KIZAD & Khalifa Port",
    metaDescription:
      "Forklift & crane rental in KIZAD, Khalifa Port & Al Taweelah. Container handling, port lifts with lift plans, monthly contracts. Certified operators.",
    areaServed: ["KIZAD", "Khalifa Industrial Zone Abu Dhabi", "Khalifa Port", "Al Taweelah", "Abu Dhabi"],
    nearby: ["icad", "al-samha-al-rahba", "al-reem-island", "yas-island"],
  },
  {
    slug: "mohammed-bin-zayed-city",
    name: "Mohammed Bin Zayed City",
    href: `${base}/mohammed-bin-zayed-city`,
    title: "Equipment Rental in Mohammed Bin Zayed City & Shabiya",
    eyebrow: "Abu Dhabi · MBZ City · Mussafah Shabiya",
    intro:
      "Telehandler, man lift, forklift, and crane rental for Mohammed Bin Zayed City and Mussafah Shabiya, the residential and commercial districts beside Musaffah Industrial Area. Short hires, fast delivery, and compact machines sized for residential streets.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telehandler lifting building material on a construction site",
    zones: [
      "Mohammed Bin Zayed City (Zones 1–30+)",
      "Mussafah Shabiya (ME sectors)",
      "Mussafah Commercial",
      "Mazyad Mall area",
      "Mussafah residential blocks",
    ],
    whyHeading: "Why MBZ City Contractors Use Seven Lift",
    whyPoints: [
      {
        title: "Minutes From Our Yard",
        description:
          "MBZ City and Shabiya are right next to Musaffah, so even a one-day hire makes sense. Short jobs don't carry a long mobilization charge.",
      },
      {
        title: "Compact Machines for Villa Plots",
        description:
          "Compact telehandlers and narrow scissor lifts fit residential streets and villa plots where larger machines can't turn.",
      },
      {
        title: "Shop & Signage Work",
        description:
          "Boom lifts and scissor lifts for shopfront signage, facade repairs, and fit-out along MBZ City and Shabiya commercial strips.",
      },
      {
        title: "Certified Operators",
        description:
          "Every machine can come with a licensed operator, so small contractors don't need their own certified staff for a short job.",
      },
    ],
    context: {
      heading: "Equipment Work in MBZ City & Shabiya",
      paragraphs: [
        "Most equipment work in Mohammed Bin Zayed City is villa-scale: new builds, extensions, boundary walls, and roof works. A compact 3–4 ton telehandler with around 7 m of reach handles most of it, lifting blockwork and roof material without the cost of a crane.",
        "In Mussafah Shabiya's mixed blocks of shops, offices, and apartments, the typical job is at height: signage, AC and facade maintenance, and cleaning. Road-side setups on public streets may need municipality approval and traffic management. Tell us exactly where the machine will stand and we'll advise.",
        "Residential streets are tight, and parked cars are the usual obstacle. Share the plot number and the best time of day for delivery so the low-bed can reach the site without blocking neighbours.",
      ],
    },
    faqs: [
      {
        question: "Can I rent a telehandler for one day in MBZ City?",
        answer:
          "Yes. MBZ City is next to our Musaffah yard, so daily hire is practical. Same-day delivery is usually possible for compact telehandlers.",
      },
      {
        question: "Do you rent man lifts for shop signage in Mussafah Shabiya?",
        answer:
          "Yes. We supply scissor lifts and boom lifts for signage, facade, and AC work. For road-side setups, check whether your job needs municipality approval.",
      },
      {
        question: "Will a telehandler fit into a villa plot?",
        answer:
          "Usually, yes. Compact units are around 2.3 m wide. Send the gate width and a photo of the plot and we'll confirm which machine fits.",
      },
      {
        question: "Do you supply an operator with the machine?",
        answer:
          "Yes. Certified operators are available with every telehandler, man lift, forklift, and crane we rent.",
      },
    ],
    ctaHeading: "Need a Machine in MBZ City Today?",
    ctaSubheading: "Send the plot location and what you need to lift. We're minutes away.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Mohammed Bin Zayed City.",
    metaTitle: "Equipment Rental MBZ City & Mussafah Shabiya",
    metaDescription:
      "Telehandler, man lift & forklift rental in Mohammed Bin Zayed City and Mussafah Shabiya. Compact machines, daily hire, same-day delivery from Musaffah.",
    areaServed: ["Mohammed Bin Zayed City", "Mussafah Shabiya", "Abu Dhabi"],
    nearby: ["icad", "khalifa-city", "al-shamkha-riyadh-city"],
  },
  {
    slug: "khalifa-city",
    name: "Khalifa City",
    href: `${base}/khalifa-city`,
    title: "Equipment Rental in Khalifa City & Al Raha",
    eyebrow: "Abu Dhabi · Khalifa City · Al Raha",
    intro:
      "Telehandler, man lift, forklift, and crane rental for Khalifa City, Al Raha Gardens, and Al Raha Beach. We cover villa construction, school and community building projects, and fit-out, with compact machines for residential sites.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telehandler working on a residential building site",
    zones: [
      "Khalifa City A",
      "Khalifa City B",
      "Al Raha Gardens",
      "Al Raha Beach",
      "Golf Gardens",
      "Al Raha community centres",
    ],
    whyHeading: "Why Khalifa City Contractors Choose Seven Lift",
    whyPoints: [
      {
        title: "Villa & Community Projects",
        description:
          "Compact telehandlers and small cranes for villa builds, extensions, and community facilities across Khalifa City and Al Raha.",
      },
      {
        title: "Occupied-Building Access",
        description:
          "Electric scissor lifts with non-marking tyres for school, clinic, and retail fit-out while the building stays in use.",
      },
      {
        title: "Short Drive From Musaffah",
        description:
          "Khalifa City is a short drive up the highway from our yard, so same-day delivery is normal for standard units.",
      },
      {
        title: "Flexible Hire",
        description:
          "Daily hire for a single lift, or monthly for a villa build programme. Extend on site without a new contract.",
      },
    ],
    context: {
      heading: "Renting Equipment in Khalifa City & Al Raha",
      paragraphs: [
        "Khalifa City is one of Abu Dhabi's largest villa districts, and most equipment work here follows villa construction: foundations, blockwork, roof slabs, and landscaping. Telehandlers do most of the lifting. A small mobile crane comes in for precast elements, roof steel, or placing a pool or water tank.",
        "Community projects such as schools, clinics, and retail centres add fit-out and maintenance work at height. Many of these buildings stay occupied during the work, so specify low-noise electric scissor lifts and agree access times with the facility manager.",
        "Many Al Raha Gardens and Golf Gardens communities are gated, with their own rules on contractor access times and vehicle size. Check with the community management office before booking, and we'll plan the delivery around it.",
      ],
    },
    faqs: [
      {
        question: "Do you deliver telehandlers to Khalifa City villa sites?",
        answer:
          "Yes. Khalifa City A and B are a short drive from our Musaffah yard, and same-day delivery is standard for compact telehandlers.",
      },
      {
        question: "Can I get a small crane for a villa lift in Al Raha?",
        answer:
          "Yes. A 25–50 ton mobile crane covers most villa lifts, such as precast, steel, tanks, and equipment. We check the access and setup position first.",
      },
      {
        question: "Do you have scissor lifts suitable for schools and clinics?",
        answer:
          "Yes. Electric scissor lifts with non-marking tyres work quietly indoors on finished floors and fit through standard doorways in narrow-chassis models.",
      },
      {
        question: "Can deliveries be scheduled around community access rules?",
        answer:
          "Yes. Tell us the permitted contractor hours for your community and we'll book the delivery and collection inside them.",
      },
    ],
    ctaHeading: "Need Equipment in Khalifa City?",
    ctaSubheading: "Send the plot or community name and the job. We'll recommend the right machine.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Khalifa City, Abu Dhabi.",
    metaTitle: "Equipment Rental Khalifa City & Al Raha",
    metaDescription:
      "Telehandler, crane & scissor lift rental in Khalifa City A & B, Al Raha Gardens and Al Raha Beach. Villa and fit-out work, same-day delivery, operators.",
    areaServed: ["Khalifa City", "Al Raha", "Al Raha Gardens", "Al Raha Beach", "Abu Dhabi"],
    nearby: ["yas-island", "masdar-city-airport", "mohammed-bin-zayed-city"],
  },
  {
    slug: "yas-island",
    name: "Yas Island",
    href: `${base}/yas-island`,
    title: "Equipment Rental on Yas Island, Abu Dhabi",
    eyebrow: "Abu Dhabi · Yas Island",
    intro:
      "Man lift, telehandler, forklift, and crane rental for Yas Island, covering residential construction, hotel and venue maintenance, and the event builds that come with a year-round calendar of concerts and motorsport.",
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAlt: "Scissor lift raised for elevated installation work",
    zones: [
      "Yas North residential",
      "Yas South & Yas Acres",
      "Yas Marina & Circuit area",
      "Yas Mall & Etihad Arena district",
      "Yas Bay",
      "Yas hotel cluster",
    ],
    whyHeading: "Why Yas Island Projects Use Seven Lift",
    whyPoints: [
      {
        title: "Event Build Access",
        description:
          "Boom lifts, scissor lifts, and telehandlers for rigging, lighting, screens, and staging during venue and event builds, available on short notice.",
      },
      {
        title: "Venue & Hotel Maintenance",
        description:
          "Low-noise electric platforms with non-marking tyres for work inside venues, malls, and hotels that stay open.",
      },
      {
        title: "Residential Construction",
        description:
          "Telehandlers and mobile cranes for the island's ongoing villa and apartment developments.",
      },
      {
        title: "Night & Weekend Work",
        description:
          "Deliveries and collections scheduled around event load-in and load-out windows, including overnight.",
      },
    ],
    context: {
      heading: "Equipment Work on Yas Island",
      paragraphs: [
        "Yas Island combines major entertainment venues, hotels, and a growing residential population, so equipment demand swings with the event calendar. Large motorsport weekends and arena concerts mean compressed build and strip-out periods. Access platforms and telehandlers are needed for days at a time, and they must arrive and leave within fixed windows.",
        "For event builds, book platforms early. Peak event weeks put pressure on availability across the whole emirate. Venue operators will ask for machine inspection certificates, operator licences, and insurance before a machine is allowed on the floor, so we send those with the booking.",
        "On the residential side, in Yas Acres, Yas South, and the newer apartment districts, the work is standard construction lifting. Telehandlers handle material placement, and cranes handle precast and steel. Coastal wind affects both boom lifts and crane lifts here, so allow a weather margin in the programme.",
      ],
    },
    faqs: [
      {
        question: "Can you supply boom lifts for an event build on Yas Island?",
        answer:
          "Yes. We supply boom lifts, scissor lifts, and telehandlers for event rigging and staging, delivered and collected within your load-in and load-out windows.",
      },
      {
        question: "Do you deliver overnight for venue work?",
        answer:
          "Yes. Overnight and early-morning deliveries can be arranged to fit venue access schedules. Tell us the permitted window when you book.",
      },
      {
        question: "Which documents do venues ask for?",
        answer:
          "Usually the machine's third-party inspection certificate, operator licence, and insurance. We provide them with the booking.",
      },
      {
        question: "Do you rent cranes for residential projects on Yas Island?",
        answer:
          "Yes. We supply 25–160 ton mobile cranes with lift plans for precast, steel, and plant lifts on Yas residential and hospitality projects.",
      },
    ],
    ctaHeading: "Planning Work on Yas Island?",
    ctaSubheading: "Send the venue or site and your access window. We'll plan the delivery.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental on Yas Island.",
    metaTitle: "Equipment Rental Yas Island | Lifts & Cranes",
    metaDescription:
      "Boom lift, scissor lift, telehandler & crane rental on Yas Island for event builds, venue maintenance and construction. Overnight delivery available.",
    areaServed: ["Yas Island", "Abu Dhabi"],
    nearby: ["saadiyat-island", "khalifa-city", "al-shahama-al-bahia", "masdar-city-airport"],
  },
  {
    slug: "saadiyat-island",
    name: "Saadiyat Island",
    href: `${base}/saadiyat-island`,
    title: "Equipment Rental on Saadiyat Island, Abu Dhabi",
    eyebrow: "Abu Dhabi · Saadiyat Island",
    intro:
      "Mobile crane, telehandler, man lift, and forklift rental for Saadiyat Island. We cover the Cultural District's major construction, luxury villa and hotel projects, and the maintenance of finished landmark buildings.",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane with extended boom on a construction site",
    zones: [
      "Saadiyat Cultural District",
      "Saadiyat Beach villas",
      "Saadiyat Grove",
      "Saadiyat Lagoons",
      "Saadiyat hotel cluster",
      "Mamsha Al Saadiyat",
    ],
    whyHeading: "Why Saadiyat Projects Use Seven Lift",
    whyPoints: [
      {
        title: "Heavy Lifts With Full Documentation",
        description:
          "Mobile cranes up to 500 ton with engineered lift plans, certified riggers, and inspection certificates, as main contractors on major projects require.",
      },
      {
        title: "Premium-Finish Sites",
        description:
          "Non-marking electric platforms for work around finished stone, glazing, and gallery-grade interiors.",
      },
      {
        title: "Villa Construction",
        description:
          "Compact telehandlers and small cranes for the island's high-end villa and community developments.",
      },
      {
        title: "Scheduled Access",
        description:
          "Deliveries booked into the logistics slots that large Saadiyat sites run, so the machine arrives when the gate expects it.",
      },
    ],
    context: {
      heading: "Renting Equipment on Saadiyat Island",
      paragraphs: [
        "Saadiyat Island is home to some of Abu Dhabi's most complex construction. The Cultural District's landmark museums sit alongside luxury hotels and villa communities. On large projects, main contractors run controlled logistics, with booked delivery slots, inductions, and permit-to-work. Share your site's logistics requirements when you book so the delivery matches them.",
        "Finished and near-finished buildings on Saadiyat have high-value surfaces, including stone floors, large glazing, and curated interiors. Work at height here usually calls for electric platforms with non-marking tyres, floor protection, and careful route planning inside the building. Tell us the floor finish and the door and lift dimensions in advance.",
        "Parts of Saadiyat's coastline are protected nesting habitat for hawksbill turtles, and beach-front projects may have environmental conditions on working hours, lighting, and access. Check your project's environmental requirements before scheduling work near the beach.",
      ],
    },
    faqs: [
      {
        question: "Do you supply large mobile cranes on Saadiyat Island?",
        answer:
          "Yes. We supply mobile cranes from 25 to 500 ton with engineered lift plans, certified riggers, and third-party inspection certificates.",
      },
      {
        question: "Can your man lifts work on finished stone floors?",
        answer:
          "Yes. We supply electric scissor lifts and boom lifts with non-marking tyres. For delicate finishes we recommend floor protection along the travel route as well.",
      },
      {
        question: "Can you deliver into a booked logistics slot?",
        answer:
          "Yes. Give us the slot time and gate, and we'll schedule the delivery to arrive inside it.",
      },
      {
        question: "Do you rent telehandlers for Saadiyat villa projects?",
        answer:
          "Yes. We supply compact and mid-size telehandlers for villa construction, with operators if you need them.",
      },
    ],
    ctaHeading: "Need Equipment on Saadiyat Island?",
    ctaSubheading: "Send the site, the logistics slot, and the lift. We'll plan it with you.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental on Saadiyat Island.",
    metaTitle: "Equipment Rental Saadiyat Island | Cranes",
    metaDescription:
      "Mobile crane, telehandler & man lift rental on Saadiyat Island. Lift plans, certified riggers, non-marking platforms for finished interiors.",
    areaServed: ["Saadiyat Island", "Abu Dhabi"],
    nearby: ["yas-island", "al-reem-island", "mina-zayed"],
  },
  {
    slug: "al-reem-island",
    name: "Al Reem Island & Abu Dhabi City",
    href: `${base}/al-reem-island`,
    title: "Equipment Rental in Al Reem Island & Abu Dhabi City",
    eyebrow: "Abu Dhabi · Al Reem · City Centre",
    intro:
      "Man lift, crane, telehandler, and forklift rental for Al Reem Island, Al Maryah Island, and Abu Dhabi's downtown. We cover high-rise fit-out, facade and building maintenance, and city-centre lifts on tight plots.",
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAlt: "Electric scissor lift raised indoors for ceiling work",
    zones: [
      "Al Reem Island",
      "Al Maryah Island",
      "Corniche & Al Khalidiya",
      "Hamdan Street & Tourist Club",
      "Al Zahiyah & Al Markaziyah",
      "Al Mina & Mina Zayed",
    ],
    whyHeading: "Why City-Centre Projects Use Seven Lift",
    whyPoints: [
      {
        title: "Fit-Out Platforms",
        description:
          "Narrow-chassis electric scissor lifts that fit tower service lifts, for office, retail, and apartment fit-out on upper floors.",
      },
      {
        title: "Facade & Maintenance Access",
        description:
          "Telescopic and articulating boom lifts for podium facades, signage, and external maintenance where a gondola isn't practical.",
      },
      {
        title: "Tight-Plot Crane Lifts",
        description:
          "Compact all-terrain cranes and careful setup planning for city-centre lifts, where space for outriggers is limited.",
      },
      {
        title: "Out-of-Hours Delivery",
        description:
          "Early-morning and overnight deliveries to avoid downtown traffic and building loading-bay restrictions.",
      },
    ],
    context: {
      heading: "Equipment Work on Al Reem & in the City Centre",
      paragraphs: [
        "In Abu Dhabi's centre, most equipment work happens inside or on the outside of existing towers: office and apartment fit-out, MEP upgrades, signage, and facade repairs. The deciding factor is often the building's service lift. Send us the lift car's internal dimensions and weight limit, and we'll specify a scissor lift that actually fits.",
        "City-centre crane lifts on tight plots and public roads normally need municipality approval for road occupancy and traffic management, plus building-management sign-off. Allow time for approvals in the programme. A documented lift plan from us is part of the application.",
        "Loading bays in towers on Al Reem and Al Maryah usually have booked time slots and height limits. Most deliveries downtown are early-morning or overnight, which also avoids the worst traffic.",
      ],
    },
    faqs: [
      {
        question: "Will your scissor lift fit in a tower's service lift?",
        answer:
          "Narrow-chassis electric scissor lifts are built for this. Send the lift car's door width, depth, and weight limit, and we'll confirm the model.",
      },
      {
        question: "Do city-centre crane lifts need a permit?",
        answer:
          "Lifts that occupy a public road or pavement generally need municipality approval and traffic management. We provide the lift plan and machine documents for the application.",
      },
      {
        question: "Can you deliver overnight to Al Reem Island?",
        answer:
          "Yes. We schedule early-morning and overnight deliveries to match building loading-bay slots and avoid traffic.",
      },
      {
        question: "Do you rent boom lifts for facade work in Abu Dhabi city?",
        answer:
          "Yes. We supply articulating and telescopic boom lifts for podium facades, signage, and external maintenance, with certified operators.",
      },
    ],
    ctaHeading: "Working in a City-Centre Tower?",
    ctaSubheading: "Send the building and the lift dimensions. We'll specify a platform that fits.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental on Al Reem Island / Abu Dhabi city.",
    metaTitle: "Equipment Rental Al Reem Island & Abu Dhabi",
    metaDescription:
      "Scissor lift, boom lift & crane rental on Al Reem, Al Maryah and downtown Abu Dhabi. Tower fit-out, facade access, overnight delivery, operators.",
    areaServed: ["Al Reem Island", "Al Maryah Island", "Abu Dhabi City", "Abu Dhabi"],
    nearby: ["saadiyat-island", "mina-zayed", "kizad-khalifa-port", "masdar-city-airport"],
  },
  {
    slug: "al-shamkha-riyadh-city",
    name: "Al Shamkha & Riyadh City",
    href: `${base}/al-shamkha-riyadh-city`,
    title: "Equipment Rental in Al Shamkha, Riyadh City & Al Falah",
    eyebrow: "Abu Dhabi · Al Shamkha · Riyadh City · Al Falah",
    intro:
      "Telehandler, crane, forklift, and man lift rental for Abu Dhabi's large new residential communities: Al Shamkha, Madinat Al Riyadh (Riyadh City), and Al Falah. We rent monthly for villa build programmes, or daily for single lifts.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telehandler placing blocks on a villa construction site",
    zones: [
      "Al Shamkha",
      "Al Shamkha South",
      "Madinat Al Riyadh (Riyadh City)",
      "Al Falah",
      "Shakhbout City",
    ],
    whyHeading: "Why Villa Contractors in Al Shamkha Rent From Seven Lift",
    whyPoints: [
      {
        title: "Villa Programme Rates",
        description:
          "Monthly telehandler and forklift hire that moves between plots with you as a multi-villa programme progresses.",
      },
      {
        title: "Rough-Terrain Machines",
        description:
          "Four-wheel-drive telehandlers with sand-rated tyres for unpaved community roads and unfinished plots.",
      },
      {
        title: "Small Cranes for Villa Lifts",
        description:
          "25 to 50 ton mobile cranes for precast, steel, roof elements, tanks, and pools, with a lift plan for each.",
      },
      {
        title: "Close to Musaffah",
        description:
          "These communities are a short drive east of our yard, so delivery the same day or next morning is normal.",
      },
    ],
    context: {
      heading: "Equipment for Villa Construction in Abu Dhabi's New Communities",
      paragraphs: [
        "Al Shamkha, Riyadh City, and Al Falah are among the largest residential development areas in Abu Dhabi, with thousands of villa plots being built by many contractors at once. The workhorse here is a telehandler. It unloads blocks and steel from trucks, stacks them, and places them on roofs and upper floors without calling in a crane.",
        "New plots often front onto roads that are not yet paved, with loose sand around the site. Specify a four-wheel-drive, rough-terrain telehandler, and ask for a sand check before sending a crane, because outriggers need firm, level ground or proper mats.",
        "If you are building several villas in the same community, a monthly machine that moves from plot to plot is usually much cheaper than repeated daily hires. Tell us how many plots are in the programme and we'll quote on that basis.",
      ],
    },
    faqs: [
      {
        question: "Can one rented telehandler move between my villa plots?",
        answer:
          "Yes. On monthly hire the machine can move between your plots in the same community. Just let us know if it will be working across more than one site.",
      },
      {
        question: "Do you have telehandlers that work on sand?",
        answer:
          "Yes. Our rough-terrain four-wheel-drive telehandlers with sand-rated tyres are the standard choice for unpaved plots in Al Shamkha and Riyadh City.",
      },
      {
        question: "What size crane do I need for a villa lift?",
        answer:
          "A 25–50 ton mobile crane covers most villa lifts. The right size depends on the load, the radius, and where the crane can set up. Send us the details and we'll size it.",
      },
      {
        question: "How fast can you deliver to Riyadh City or Al Falah?",
        answer:
          "Delivery the same day or the next morning is normal, as these communities are a short drive from our Musaffah yard.",
      },
    ],
    ctaHeading: "Building Villas in Al Shamkha or Riyadh City?",
    ctaSubheading: "Tell us the number of plots and the programme. We'll quote the right machine.",
    whatsappMessage: "Hi Seven Lift, I need equipment for a villa project in Al Shamkha / Riyadh City.",
    metaTitle: "Equipment Rental Al Shamkha & Riyadh City",
    metaDescription:
      "Telehandler & crane rental for villa construction in Al Shamkha, Riyadh City & Al Falah. Rough-terrain machines, monthly programme rates.",
    areaServed: ["Al Shamkha", "Madinat Al Riyadh", "Al Falah", "Shakhbout City", "Abu Dhabi"],
    nearby: ["mafraq-baniyas", "al-wathba", "mohammed-bin-zayed-city", "masdar-city-airport"],
  },
  {
    slug: "mafraq-baniyas",
    name: "Mafraq & Baniyas",
    href: `${base}/mafraq-baniyas`,
    title: "Equipment Rental in Mafraq Industrial Area & Baniyas",
    eyebrow: "Abu Dhabi · Mafraq · Baniyas",
    intro:
      "Forklift, crane, telehandler, and man lift rental for Mafraq Industrial Area, Baniyas, and the corridor on the eastern side of Abu Dhabi. We supply workshops and yards, and support residential and commercial construction.",
    heroImage: "/images/fleet/side-loader.jpg",
    heroImageAlt: "Side loader handling long materials in an industrial yard",
    zones: [
      "Mafraq Industrial Area",
      "Mafraq Workers City",
      "Baniyas East & West",
      "Al Mafraq",
      "Baniyas commercial",
    ],
    whyHeading: "Why Mafraq & Baniyas Businesses Use Seven Lift",
    whyPoints: [
      {
        title: "Workshop & Yard Forklifts",
        description:
          "3 to 10 ton diesel forklifts and side loaders for the steel, timber, and equipment yards across Mafraq Industrial Area.",
      },
      {
        title: "Fast From Musaffah",
        description:
          "Mafraq and Baniyas are a short drive from our yard, so same-day delivery is standard for common units.",
      },
      {
        title: "Construction Support",
        description:
          "Telehandlers and mobile cranes for residential and commercial construction across Baniyas.",
      },
      {
        title: "Breakdown Replacement",
        description:
          "If a rented unit fails, we replace it. That matters for yards that load trucks all day.",
      },
    ],
    context: {
      heading: "Equipment Work in Mafraq & Baniyas",
      paragraphs: [
        "Mafraq Industrial Area is a working district of fabrication shops, material yards, and equipment depots. The typical request is a forklift for loading and unloading trucks. Side loaders are the better choice for long steel sections, pipe, and timber, because they carry the load along the machine rather than across it.",
        "Yard surfaces in Mafraq are often compacted ground rather than concrete. Diesel forklifts with pneumatic tyres, or a telehandler with forks, handle this better than a warehouse-spec machine with solid tyres.",
        "Baniyas combines established residential areas with ongoing commercial and villa construction. Here the work is similar to the other residential districts: telehandlers for material placement, small cranes for precast and steel, and scissor lifts for shop and building maintenance.",
      ],
    },
    faqs: [
      {
        question: "Do you rent side loaders in Mafraq Industrial Area?",
        answer:
          "Yes. Side loaders are available for long materials such as steel sections, pipe, and timber, on daily, weekly, or monthly terms.",
      },
      {
        question: "Which forklift works on an unpaved yard?",
        answer:
          "A diesel forklift with pneumatic tyres, or a rough-terrain telehandler with forks. Solid-tyre warehouse forklifts struggle on loose or uneven ground.",
      },
      {
        question: "How fast can you deliver to Baniyas?",
        answer:
          "Same-day delivery is standard for common forklifts and telehandlers, as Baniyas is a short drive from our Musaffah yard.",
      },
      {
        question: "Do you supply cranes for construction in Baniyas?",
        answer:
          "Yes. We supply 25–160 ton mobile cranes with lift plans and certified crews for residential and commercial projects.",
      },
    ],
    ctaHeading: "Need a Forklift in Mafraq Today?",
    ctaSubheading: "Send the yard location and the load. We'll confirm a unit and a delivery time.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Mafraq / Baniyas.",
    metaTitle: "Equipment Rental Mafraq & Baniyas, Abu Dhabi",
    metaDescription:
      "Forklift, side loader, telehandler & crane rental in Mafraq Industrial Area and Baniyas, Abu Dhabi. Same-day delivery from Musaffah, certified operators.",
    areaServed: ["Mafraq", "Mafraq Industrial Area", "Baniyas", "Abu Dhabi"],
    nearby: ["al-shamkha-riyadh-city", "al-wathba", "icad", "masdar-city-airport"],
  },
  {
    slug: "masdar-city-airport",
    name: "Masdar City & the Airport",
    href: `${base}/masdar-city-airport`,
    title: "Equipment Rental in Masdar City & Zayed International Airport",
    eyebrow: "Abu Dhabi · Masdar City · Airport",
    intro:
      "Forklift, man lift, telehandler, and crane rental for Masdar City, the Zayed International Airport area, and the logistics and air-cargo operations around it.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift handling cargo pallets in a warehouse",
    zones: [
      "Masdar City",
      "Zayed International Airport area",
      "Abu Dhabi Airport Free Zone",
      "Air-cargo & logistics warehouses",
      "Al Shahama road corridor",
    ],
    whyHeading: "Why Masdar & Airport Operators Rent From Seven Lift",
    whyPoints: [
      {
        title: "Electric Equipment",
        description:
          "Electric forklifts and scissor lifts with zero exhaust emissions, for indoor facilities and sustainability-focused sites.",
      },
      {
        title: "Air-Cargo Handling",
        description:
          "Forklifts sized for cargo pallets and ULD handling in airport-side logistics warehouses, with monthly contracts for peak seasons.",
      },
      {
        title: "Security-Controlled Sites",
        description:
          "Machine and operator documentation prepared in advance for sites where entry passes must be arranged before arrival.",
      },
      {
        title: "Central Location",
        description:
          "Masdar and the airport sit between Musaffah and Yas, a short drive from our yard.",
      },
    ],
    context: {
      heading: "Renting Equipment in Masdar City & Around the Airport",
      paragraphs: [
        "Masdar City was designed as a low-carbon district, and many of its tenants and developers set environmental targets for their sites. Electric forklifts and scissor lifts meet that requirement indoors. Ask the site whether it also restricts diesel machines outdoors before booking.",
        "Around Zayed International Airport, the demand is logistics: air-cargo and free-zone warehouses that need reliable forklifts across shifts, with extra units during peak seasons. Monthly hire with a standby arrangement is the usual set-up.",
        "Airside and restricted areas have their own security clearance and vehicle permit procedures, which the site operator arranges and which take time. Landside warehouses and Masdar sites are simpler, but still expect gate registration for the driver and operator.",
      ],
    },
    faqs: [
      {
        question: "Do you rent electric forklifts in Masdar City?",
        answer:
          "Yes. We supply electric forklifts and electric scissor lifts, which suit indoor work and low-emission site requirements.",
      },
      {
        question: "Can you supply forklifts for air-cargo warehouses?",
        answer:
          "Yes. We supply forklifts sized for cargo pallets on monthly terms, with extra units for peak periods.",
      },
      {
        question: "Can you deliver to airport-side sites?",
        answer:
          "Yes, for landside sites. For restricted airside areas, the site operator must arrange security passes. We provide the machine and operator documents they need.",
      },
      {
        question: "How quickly can you deliver to Masdar City?",
        answer:
          "Same-day delivery is standard for common units, as Masdar City is a short drive from our Musaffah yard.",
      },
    ],
    ctaHeading: "Need Equipment in Masdar or Near the Airport?",
    ctaSubheading: "Send the site and access requirements. We'll prepare the documents in advance.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Masdar City / airport area.",
    metaTitle: "Equipment Rental Masdar City & Airport",
    metaDescription:
      "Electric forklift & scissor lift rental in Masdar City and around Zayed International Airport. Air-cargo warehouse forklifts, monthly contracts.",
    areaServed: ["Masdar City", "Zayed International Airport", "Abu Dhabi"],
    nearby: ["khalifa-city", "yas-island", "mafraq-baniyas"],
  },
  {
    slug: "ruwais-al-dhafra",
    name: "Ruwais & Al Dhafra",
    href: `${base}/ruwais-al-dhafra`,
    title: "Heavy Equipment Rental in Ruwais & Al Dhafra",
    eyebrow: "Abu Dhabi · Ruwais · Al Dhafra",
    intro:
      "Crane, forklift, telehandler, and man lift rental for Ruwais, Madinat Zayed, Ghayathi, Mirfa, and the Al Dhafra region. We run long-term contracts for oil, gas, petrochemical, and infrastructure work in Abu Dhabi's western region.",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Heavy equipment loaded on a low-bed trailer for transport",
    zones: [
      "Ruwais Industrial Complex",
      "Ruwais Housing Complex",
      "Madinat Zayed",
      "Ghayathi",
      "Mirfa",
      "Liwa",
    ],
    whyHeading: "Why Al Dhafra Contractors Rent From Seven Lift",
    whyPoints: [
      {
        title: "Long-Term Site Contracts",
        description:
          "Monthly and multi-month hire with the machine staying on site, so you pay once to transport it instead of every day.",
      },
      {
        title: "HSE Documentation",
        description:
          "Third-party inspection certificates, operator licences, and lift plans prepared for oil, gas, and petrochemical site entry.",
      },
      {
        title: "Shutdown & Turnaround Support",
        description:
          "Cranes, man lifts, and telehandlers booked against planned shutdown windows, confirmed well ahead.",
      },
      {
        title: "Planned Mobilization",
        description:
          "Delivery from Musaffah is scheduled a day or two ahead given the distance, with transport included in the quote.",
      },
    ],
    context: {
      heading: "Renting Equipment for Ruwais & Al Dhafra",
      paragraphs: [
        "Ruwais is one of the UAE's main oil-refining and petrochemical centres, and most equipment work in the region supports it: plant maintenance, planned shutdowns and turnarounds, and construction for expansion and infrastructure projects. Contractors here expect full documentation and certified crews before a machine is allowed through the gate.",
        "Ruwais is about 240 km west of our Musaffah yard. Mobilization is planned rather than same-day, and long-term hire, with the machine staying on site for the whole contract, is far more economical than short rentals. For shutdowns, book the cranes and access platforms as soon as the dates are fixed, because the whole region competes for equipment in the same windows.",
        "Across Madinat Zayed, Ghayathi, and Liwa, work is on open desert ground with high summer temperatures. Specify rough-terrain machines, plan for crane outrigger mats on sand, and schedule outdoor lifts outside the UAE's midday work break in summer.",
      ],
    },
    faqs: [
      {
        question: "Do you deliver equipment to Ruwais?",
        answer:
          "Yes. We deliver to Ruwais and across Al Dhafra, typically on a one- or two-day schedule from Musaffah. Long-term hire is the most economical option at this distance.",
      },
      {
        question: "Can you support a plant shutdown in Ruwais?",
        answer:
          "Yes. We supply cranes, man lifts, and telehandlers for planned shutdowns. Book as soon as the dates are fixed, as regional demand peaks in the same windows.",
      },
      {
        question: "What documents do you provide for oil and gas sites?",
        answer:
          "Third-party inspection certificates, load charts, operator and rigger certifications, and documented lift plans. Share the site's HSE requirements and we'll match them.",
      },
      {
        question: "Do you have equipment suited to desert ground?",
        answer:
          "Yes. We supply rough-terrain telehandlers and forklifts, and outrigger mats for cranes working on sand.",
      },
    ],
    ctaHeading: "Planning Work in Ruwais or Al Dhafra?",
    ctaSubheading: "Send the site, the dates, and the HSE requirements. We'll plan mobilization.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Ruwais / Al Dhafra.",
    metaTitle: "Equipment Rental Ruwais & Al Dhafra",
    metaDescription:
      "Crane, man lift, telehandler & forklift rental in Ruwais, Madinat Zayed & Al Dhafra. Long-term contracts, shutdown support, full HSE documentation.",
    areaServed: ["Ruwais", "Al Dhafra", "Madinat Zayed", "Ghayathi", "Mirfa", "Liwa"],
    nearby: ["icad", "mafraq-baniyas"],
  },
  {
    slug: "mina-zayed",
    name: "Mina Zayed",
    href: `${base}/mina-zayed`,
    title: "Equipment Rental in Mina Zayed & Al Mina, Abu Dhabi",
    eyebrow: "Abu Dhabi · Mina Zayed · Zayed Port · Al Mina",
    intro:
      "Forklift, mobile crane, man lift, and telehandler rental for Zayed Port and the Al Mina district at the north-east end of Abu Dhabi island. We supply warehouses and trading stores, port-side cargo lifts, and maintenance work at height, with every delivery planned around island traffic.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Cargo and containers stacked on a port quay",
    zones: [
      "Zayed Port (Mina Zayed)",
      "Zayed Port cruise terminal",
      "Al Mina warehouses and cold stores",
      "Al Mina wholesale markets",
      "Al Zahiyah",
    ],
    whyHeading: "Why Al Mina Businesses Rent From Seven Lift",
    whyPoints: [
      {
        title: "Forklifts for Trading Stores",
        description:
          "3 to 5 ton forklifts, diesel for open yards and electric for enclosed and chilled stores, on daily or monthly terms for the warehouses that supply the island.",
      },
      {
        title: "Port Cargo Lifts",
        description:
          "Mobile cranes with certified riggers and lift plans for general cargo, project cargo, and vessel equipment at the Zayed Port quays.",
      },
      {
        title: "Island Delivery Planning",
        description:
          "Low-bed deliveries timed outside peak hours, so the machine reaches Al Mina without waiting in city traffic.",
      },
      {
        title: "Work at Height",
        description:
          "Scissor and boom lifts for warehouse roofs, signage, lighting, and building maintenance across the district.",
      },
    ],
    context: {
      heading: "Renting Equipment in Mina Zayed: What to Plan For",
      paragraphs: [
        "Most container traffic left Mina Zayed when Khalifa Port opened, but Zayed Port still handles general cargo, roll-on roll-off vessels, and cruise ships, and the Al Mina district around it is packed with warehouses, cold stores, and wholesale markets. That mix decides the equipment: compact forklifts for stores with tight aisles, and mobile cranes for heavy or awkward items at the quay.",
        "Port work needs paperwork before the machine moves. Lifts inside Zayed Port need gate passes for the crane and crew, and the port's own safety rules apply on top of the OSHAD lift plan. Send the berth or yard location and the cargo details early, and allow a working day for passes on a first visit.",
        "From our Musaffah yard, Al Mina is a drive onto the island and through the city, about 35 to 45 minutes depending on traffic. Heavy vehicles face peak-hour movement restrictions in the city, so we deliver low-bed loads early in the morning or in the evening, and move mobile cranes outside the rush.",
        "Many Al Mina stores share access lanes with neighbouring units and customers' cars. Tell us whether the forklift works inside the store, in a yard, or on the street at the shutter, and how wide the door is, so we send a machine that fits.",
      ],
    },
    faqs: [
      {
        question: "Can you supply a crane for a lift inside Zayed Port?",
        answer:
          "Yes. We arrange gate passes for the crane and crew, prepare the OSHAD lift plan, and follow the port's safety requirements. Allow a working day for passes on a first visit.",
      },
      {
        question: "How long does delivery from Musaffah to Al Mina take?",
        answer:
          "About 35 to 45 minutes of driving. Because heavy vehicles face peak-hour restrictions in the city, we usually deliver early in the morning or in the evening and confirm the slot when you book.",
      },
      {
        question: "Which forklift suits an Al Mina warehouse?",
        answer:
          "For most stores a 3 ton forklift is enough. Choose electric for cold stores and enclosed food warehouses, and diesel for open yards or heavier pallets. Send the door and aisle widths and we confirm the model.",
      },
      {
        question: "Can I hire a forklift for one day to unload a container in Al Mina?",
        answer:
          "Yes. Single-day hires for container unloading are common. Book the day before so the forklift is on site before the container arrives.",
      },
      {
        question: "Do you rent man lifts for warehouse roofs and signage in Al Mina?",
        answer:
          "Yes. Boom lifts reach roofs and shop signs over parked vehicles, and electric scissor lifts suit indoor and paved areas. A certified operator can be supplied with the machine.",
      },
    ],
    ctaHeading: "Need Equipment in Mina Zayed?",
    ctaSubheading: "Send the store or berth location, the load, and the date. We plan the delivery around island traffic.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Mina Zayed / Al Mina.",
    metaTitle: "Equipment Rental Mina Zayed & Al Mina",
    metaDescription: `Forklift, crane and man lift rental in Mina Zayed, Zayed Port and Al Mina, Abu Dhabi. Port passes and island delivery timing. Call ${siteConfig.phoneDisplay}.`,
    areaServed: ["Mina Zayed", "Zayed Port", "Al Mina", "Al Zahiyah", "Abu Dhabi"],
    nearby: ["al-reem-island", "saadiyat-island"],
  },
  {
    slug: "al-wathba",
    name: "Al Wathba",
    href: `${base}/al-wathba`,
    title: "Equipment Rental in Al Wathba, Abu Dhabi",
    eyebrow: "Abu Dhabi · Al Wathba · Al Wathba South",
    intro:
      "Telehandler, crane, man lift, and forklift rental for Al Wathba, east of Musaffah along the Al Ain road: the villa communities of Al Wathba South, the festival and racing grounds, labour accommodation projects, and farms. Our yard is about half an hour away, so most deliveries arrive the same day or the next morning.",
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAlt: "Scissor lift raised for installation work at height",
    zones: [
      "Al Wathba South",
      "Al Wathba",
      "Sheikh Zayed Festival grounds",
      "Al Wathba camel racetrack",
      "Labour accommodation sites",
      "Farms along the Al Ain road",
    ],
    whyHeading: "Why Al Wathba Projects Rent From Seven Lift",
    whyPoints: [
      {
        title: "Villa Community Machines",
        description:
          "Rough-terrain telehandlers and 25 to 50 ton cranes for villa plots in Al Wathba South, on daily or monthly terms that follow your programme.",
      },
      {
        title: "Event Build Support",
        description:
          "Scissor lifts, boom lifts, and telehandlers for staging, lighting, and structures at the festival grounds, booked across the build and strip-out dates.",
      },
      {
        title: "Sand-Ready Equipment",
        description:
          "Four-wheel-drive machines with sand-rated tyres, and crane mats for outriggers on open desert ground.",
      },
      {
        title: "Half an Hour From Our Yard",
        description:
          "Al Wathba is about 30 minutes from Musaffah, so delivery the same day or the next morning is normal.",
      },
    ],
    context: {
      heading: "Working in Al Wathba: What to Plan For",
      paragraphs: [
        "Al Wathba covers very different jobs within a few kilometres. Al Wathba South is a large villa development where contractors need telehandlers and small cranes on monthly hire. The Sheikh Zayed Festival grounds need access equipment for each season's build. Around them sit labour accommodation projects, the camel racetrack, and working farms.",
        "Much of the ground is open sand, even next to finished roads. Telehandlers should be four-wheel drive with sand tyres, and cranes need firm ground or mats under every outrigger. Before a crane lift, send a photo of where the crane will stand so we can check whether mats are needed.",
        "Event work runs to a fixed opening date. If you are building for the festival season, book access machines as soon as the build programme is set, because demand for scissor and boom lifts rises across Abu Dhabi in the same weeks.",
        "Summer work here falls under the UAE midday outdoor work break, from 12:30 to 3 pm between 15 June and 15 September. We plan crane lifts and deliveries for the morning so the break does not cut a lift in half.",
      ],
    },
    faqs: [
      {
        question: "How quickly can you deliver to Al Wathba South?",
        answer:
          "Al Wathba is about 30 minutes from our Musaffah yard. Delivery the same day or the next morning is normal for telehandlers, forklifts, and man lifts. Cranes are best booked a day or more ahead.",
      },
      {
        question: "Do you supply equipment for the Sheikh Zayed Festival build?",
        answer:
          "Yes. We supply scissor lifts, boom lifts, and telehandlers for event structures, staging, and lighting. Send the build and strip-out dates so the machines are reserved for the whole period.",
      },
      {
        question: "Will a telehandler work on the sand in Al Wathba?",
        answer:
          "Yes, if it is a four-wheel-drive rough-terrain model with sand tyres, which is what we send to Al Wathba plots. Two-wheel-drive machines and electric units are not suited to loose sand.",
      },
      {
        question: "Do cranes need mats on Al Wathba plots?",
        answer:
          "Often, yes. Loose or recently filled ground cannot take outrigger loads safely. We check the setup area from your photos and bring crane mats where the ground needs them.",
      },
      {
        question: "Can crane work continue during the summer midday break?",
        answer:
          "Outdoor work in direct sun stops from 12:30 to 3 pm between 15 June and 15 September. We schedule lifts and deliveries around that window, usually in the early morning.",
      },
    ],
    ctaHeading: "Working in Al Wathba?",
    ctaSubheading: "Send the plot or site location, the job, and the dates. We confirm the machine and a delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Al Wathba.",
    metaTitle: "Equipment Rental Al Wathba, Abu Dhabi",
    metaDescription: `Telehandler, crane and man lift rental in Al Wathba and Al Wathba South: villa plots, festival builds, sand-ready machines. Call ${siteConfig.phoneDisplay}.`,
    areaServed: ["Al Wathba", "Al Wathba South", "Abu Dhabi"],
    nearby: ["al-shamkha-riyadh-city", "mafraq-baniyas"],
  },
  {
    slug: "al-shahama-al-bahia",
    name: "Al Shahama & Al Bahia",
    href: `${base}/al-shahama-al-bahia`,
    title: "Equipment Rental in Al Shahama & Al Bahia, Abu Dhabi",
    eyebrow: "Abu Dhabi · Al Shahama · Al Bahia",
    intro:
      "Forklift, telehandler, crane, and man lift rental for Al Shahama and Al Bahia, the established residential districts on the Abu Dhabi to Dubai road north of Yas Island. Most work here is villa building and extension, retail and community maintenance, and road and utility projects, delivered from our Musaffah yard in about 40 minutes.",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane lifting equipment beside a residential street",
    zones: [
      "Al Shahama",
      "Al Bahia",
      "Villa communities north of Yas",
      "Shops and markets along the E11",
      "Abu Dhabi to Dubai road corridor",
    ],
    whyHeading: "Why Al Shahama and Al Bahia Projects Rent From Seven Lift",
    whyPoints: [
      {
        title: "Villa Extensions and Rebuilds",
        description:
          "Compact telehandlers and 25 ton cranes that fit established villa plots with walls, trees, and neighbours on every side.",
      },
      {
        title: "Retail and Community Maintenance",
        description:
          "Scissor and boom lifts for signage, lighting, and roof work on shops, mosques, and community buildings.",
      },
      {
        title: "Road and Utility Works",
        description:
          "Telehandlers and mobile cranes for culvert, pipe, and precast placement along the E11 corridor.",
      },
      {
        title: "Forty Minutes From Our Yard",
        description:
          "Morning bookings for forklifts, telehandlers, and man lifts can often be delivered the same day.",
      },
    ],
    context: {
      heading: "Working in Al Shahama and Al Bahia: What to Plan For",
      paragraphs: [
        "Unlike the new communities east of Musaffah, Al Shahama and Al Bahia are built up. Much of the work is on existing villas: extensions, majlis additions, roof work, and rebuilds, where the machine has to fit through a gate and set up beside a boundary wall rather than on an open plot.",
        "That changes the equipment. A compact telehandler with four-wheel steer, or a 25 ton crane with a small outrigger footprint, usually does more here than a bigger machine. Measure the gate width, check the street for overhead cables and trees, and tell us where the machine can stand before you book.",
        "Community streets are shared with residents, and a crane set up on a public road may need permission first. We agree a delivery window outside the early-morning and school-run traffic so the low-bed does not block neighbours.",
        "Both districts sit along the Abu Dhabi to Dubai road, about 40 minutes from our Musaffah yard. That puts them within same-day reach for most machines when you book in the morning, and a day's notice is enough for cranes.",
      ],
    },
    faqs: [
      {
        question: "Will a telehandler fit through a villa gate in Al Shahama?",
        answer:
          "Compact telehandlers are roughly 1.8 to 2.1 m wide, so they fit most villa gates. Send the gate width and height and we confirm the model before delivery.",
      },
      {
        question: "Can a crane set up on the street outside my villa?",
        answer:
          "Often, yes, but a street setup may need municipality approval and traffic management. Tell us exactly where the crane will stand and we advise on the permit and the crane size.",
      },
      {
        question: "How fast can you deliver to Al Bahia?",
        answer:
          "Al Bahia is about 40 minutes from our Musaffah yard. Morning bookings can often be delivered the same day. For a crane, give us a day's notice so we can check the street setup first.",
      },
      {
        question: "Can you lift AC units and water tanks onto villa roofs?",
        answer:
          "Yes. A 25 ton crane handles most rooftop AC units and tanks on villas. Send the weight and the distance from where the crane can stand to the roof position, and we confirm the crane.",
      },
      {
        question: "Do you rent man lifts for shop signage and lighting?",
        answer:
          "Yes. Boom lifts reach over parked cars and pavements to shop fronts, and scissor lifts suit flat, firm ground. Night work can be arranged where the site needs it.",
      },
    ],
    ctaHeading: "Working in Al Shahama or Al Bahia?",
    ctaSubheading: "Send the address, the gate width, and the job. We confirm a machine that fits and a delivery slot.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Al Shahama / Al Bahia.",
    metaTitle: "Equipment Rental Al Shahama & Al Bahia",
    metaDescription: `Telehandler, crane and man lift rental in Al Shahama and Al Bahia: compact machines for villa plots, street lifts and signage. Call ${siteConfig.phoneDisplay}.`,
    areaServed: ["Al Shahama", "Al Bahia", "Abu Dhabi"],
    nearby: ["yas-island", "al-samha-al-rahba"],
  },
  {
    slug: "al-samha-al-rahba",
    name: "Al Samha, Al Rahba & Ghantoot",
    href: `${base}/al-samha-al-rahba`,
    title: "Equipment Rental in Al Samha, Al Rahba & Ghantoot",
    eyebrow: "Abu Dhabi · Al Rahba · Al Samha · Ghantoot",
    intro:
      "Crane, telehandler, forklift, and man lift rental along the Abu Dhabi to Dubai road from Al Rahba to the Dubai border: Al Rahba, Al Samha, and Ghantoot. We support villa and community construction, hospitality and estate maintenance, and sites that sit closer to Jebel Ali than to Abu Dhabi city.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telehandler unloading materials on a villa plot",
    zones: [
      "Al Rahba",
      "Al Samha",
      "Ghantoot",
      "Villa communities along the E11",
      "Estates and open land near the Dubai border",
    ],
    whyHeading: "Why Projects From Al Rahba to Ghantoot Rent From Seven Lift",
    whyPoints: [
      {
        title: "Villa and Community Builds",
        description:
          "Rough-terrain telehandlers and 25 to 50 ton cranes for villa districts in Al Samha and Al Rahba, on daily or monthly terms.",
      },
      {
        title: "On Our KEZAD Route",
        description:
          "Al Samha borders KEZAD, where we deliver regularly, so machines often reach Al Samha and Al Rahba sites the same day.",
      },
      {
        title: "Border-Zone Coverage",
        description:
          "Ghantoot sites sit between Abu Dhabi and Jebel Ali. We work on both sides of the border and plan to each emirate's rules.",
      },
      {
        title: "Hospitality and Estate Work",
        description:
          "Boom and scissor lifts for resort and club maintenance, and telehandlers and cranes for tanks, generators, and shade structures on private estates.",
      },
    ],
    context: {
      heading: "Working Between Al Rahba and Ghantoot: What to Plan For",
      paragraphs: [
        "This stretch of the Abu Dhabi to Dubai road has three kinds of site. Al Rahba and Al Samha are residential districts where villas are still being built and extended. Ghantoot, at the border, has hospitality and leisure sites, including the polo club, plus private estates and open land. The equipment follows the site: telehandlers and small cranes for villas, access equipment for maintenance, and rough-terrain machines for open ground.",
        "Al Samha borders KEZAD, with Al Rahba just to its south, so both are about 40 minutes from our Musaffah yard and sit on the same delivery route as our KEZAD jobs. Ghantoot is about an hour away.",
        "Sites near Ghantoot are sometimes closer to Jebel Ali than to Abu Dhabi, and a project can sit just on either side of the emirate border. Check which emirate's municipality issues your permits: Abu Dhabi sites follow OSHAD-SF lift planning, while Dubai sites follow Dubai Municipality requirements. We prepare the lift plan for whichever applies.",
        "Much of the land outside the villa districts is sand. Send photos of the access road and the setup area, so we can send four-wheel-drive machines, and crane mats where the ground needs them.",
      ],
    },
    faqs: [
      {
        question: "How long does delivery to Al Samha or Al Rahba take?",
        answer:
          "About 40 minutes from our Musaffah yard. These districts are on our regular KEZAD route, so same-day delivery is often possible for forklifts, telehandlers, and man lifts.",
      },
      {
        question: "Do you deliver to Ghantoot?",
        answer:
          "Yes. Ghantoot is about an hour from our yard. Delivery is the same day or the next morning depending on the machine, and crane mobilizations are planned a day or more ahead.",
      },
      {
        question: "My site is near the Abu Dhabi and Dubai border. Which rules apply?",
        answer:
          "The rules of the emirate your site is in. Abu Dhabi sites follow OSHAD-SF lift planning, and Dubai sites follow Dubai Municipality requirements. Tell us the site location and we prepare the documents for the right authority.",
      },
      {
        question: "Can I hire a telehandler for a villa in Al Samha?",
        answer:
          "Yes. Rough-terrain telehandlers with forks or a bucket are the usual choice for villa plots here. Daily, weekly, and monthly hire are all available.",
      },
      {
        question: "Do you rent man lifts for resort and club maintenance in Ghantoot?",
        answer:
          "Yes. Electric scissor lifts suit indoor and paved areas, and boom lifts reach facades, roofs, and lighting over landscaping. A certified operator can be supplied.",
      },
    ],
    ctaHeading: "Working in Al Samha, Al Rahba or Ghantoot?",
    ctaSubheading: "Send the site location, the job, and the dates. We plan delivery from Musaffah on our KEZAD route.",
    whatsappMessage: "Hi Seven Lift, I need equipment rental in Al Samha / Al Rahba / Ghantoot.",
    metaTitle: "Equipment Rental Al Samha, Al Rahba & Ghantoot",
    metaDescription: `Crane, telehandler and man lift rental in Al Samha, Al Rahba and Ghantoot on the Abu Dhabi to Dubai road. Villa and border sites. Call ${siteConfig.phoneDisplay}.`,
    areaServed: ["Al Samha", "Al Rahba", "Ghantoot", "Abu Dhabi"],
    nearby: ["kizad-khalifa-port", "al-shahama-al-bahia"],
  },
]

export function getAbuDhabiArea(slug: string) {
  return abuDhabiAreas.find((area) => area.slug === slug)
}
