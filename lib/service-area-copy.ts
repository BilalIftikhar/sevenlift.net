import type { Faq } from "@/lib/faqs"
import type { EquipmentKey } from "@/lib/locations"

/**
 * Hand-written copy for each equipment × city page. The generated pages used
 * to share one intro, one bullet list, and one FAQ set with only the city name
 * swapped; everything here is specific to that machine in that city, so no two
 * pages read alike.
 *
 * Rules for editing: no em dashes, meta descriptions under 155 characters,
 * and every fact must describe real work in that city.
 */
export type ServiceAreaCopy = {
  intro: string
  metaDescription: string
  /** The machine we send most often for this city. */
  typicalUnit: string
  /** The jobs this machine does most often in this city. */
  jobs: string[]
  faqs: Faq[]
}

/** Facts about operating in a city, shared by its four equipment pages. */
export type CitySiteFacts = {
  driveFromYard: string
  standardLeadTime: string
  authority: string
  ground: string
}

export const citySiteFacts: Record<string, CitySiteFacts> = {
  "abu-dhabi-musaffah": {
    driveFromYard: "Yard is in Musaffah M-44; ICAD 10 min, KIZAD 40 min",
    standardLeadTime: "Same day, often within hours",
    authority: "OSHAD-SF; Abu Dhabi Municipality; ICAD and KIZAD gate passes",
    ground: "Compacted industrial yards; loose sand in Al Dhafra",
  },
  dubai: {
    driveFromYard: "About 1 hour to JAFZA, 1.5 hours to Al Quoz",
    standardLeadTime: "Same day for standard units",
    authority: "Dubai Municipality; JAFZA and DIC access permits; RTA movement windows",
    ground: "Finished warehouse slabs; tight city-centre plots",
  },
  sharjah: {
    driveFromYard: "About 2 hours to the Industrial Areas",
    standardLeadTime: "Same day or next morning",
    authority: "Sharjah Municipality; HFZA and SAIF Zone entry permits",
    ground: "Packed workshop yards with narrow access roads",
  },
  ajman: {
    driveFromYard: "About 2 hours 15 minutes to Al Jurf",
    standardLeadTime: "Next day on the scheduled northern route",
    authority: "Ajman Municipality and Planning Department; AFZ gate passes",
    ground: "Mid-size plots, often sharing walls with neighbours",
  },
  "ras-al-khaimah": {
    driveFromYard: "About 3 hours to Al Ghail and Al Hamra",
    standardLeadTime: "Next day; plan larger cranes 3 to 5 days ahead",
    authority: "RAK Municipality; RAK FTZ and plant permits to work",
    ground: "Dusty quarry benches and uneven plant yards",
  },
  fujairah: {
    driveFromYard: "About 3 hours over the Hajar mountains",
    standardLeadTime: "Next day; shutdown lifts booked weeks ahead",
    authority: "Fujairah Municipality; terminal permits to work and zone classification",
    ground: "Tank farm hardstanding; coastal and quarry ground",
  },
  "umm-al-quwain": {
    driveFromYard: "About 2 hours 30 minutes to UAQ FTZ",
    standardLeadTime: "Next day on the scheduled northern route",
    authority: "Umm Al Quwain Municipality; UAQ FTZ access",
    ground: "Warehouse slabs; soft ground near the lagoon and port",
  },
  "al-ain": {
    driveFromYard: "About 1 hour 45 minutes to Al Ain Industrial City",
    standardLeadTime: "Next day; same day when booked before 10 am",
    authority: "Al Ain City Municipality; OSHAD-SF",
    ground: "Workshop yards in Sanaiya; soft sand on farm sites",
  },
}

const copy: Record<string, ServiceAreaCopy> = {
  // ---------------------------------------------------------------- Abu Dhabi
  "forklift:abu-dhabi-musaffah": {
    intro:
      "Our forklifts are parked in Musaffah, a few streets from most of the workshops and warehouses that hire them. That is why a 5 ton diesel can reach an M-sector yard before lunch and a 10 ton unit can be stuffing containers at KIZAD the same afternoon.",
    metaDescription:
      "Forklift rental in Abu Dhabi from our Musaffah yard. 3 to 25 ton diesel and electric units, certified operators, same-day to ICAD and KIZAD.",
    typicalUnit: "5 ton diesel with side shift",
    jobs: [
      "Container stuffing and destuffing for Khalifa Port cargo at KIZAD",
      "Steel and pipe handling in ICAD fabrication plants",
      "Temporary cover while a Musaffah workshop's own forklift is repaired",
      "Stock moves during Ramadan and year-end peaks in Mussafah Shabiya retail stores",
    ],
    faqs: [
      {
        question: "Can I collect a forklift from your Musaffah yard myself?",
        answer:
          "Yes. Customers in Musaffah and ICAD with their own low-bed trailer can collect from our M-44 yard, which removes the delivery charge. We check the machine with your driver at handover.",
      },
      {
        question: "Do you supply forklifts for KIZAD cold stores?",
        answer:
          "Yes. For cold stores and food-grade warehouses in KIZAD we supply electric forklifts with non-marking tyres and cold-rated batteries, so they hold charge in chilled rooms.",
      },
    ],
  },
  "mobile-crane:abu-dhabi-musaffah": {
    intro:
      "Crane jobs in Abu Dhabi rarely start with the crane. They start with the OSHAD lift plan, the ICAD or Khalifa Port gate pass, and a check of the ground under each outrigger. We handle all three from our Musaffah base, then send 25 to 500 ton all-terrain cranes with certified riggers.",
    metaDescription:
      "Mobile crane rental in Abu Dhabi, 25 to 500 ton, with OSHAD lift plans and certified riggers. Serving Musaffah, ICAD, KIZAD and Khalifa Port.",
    typicalUnit: "60 ton all-terrain crane",
    jobs: [
      "Machinery installation and relocation inside ICAD factories",
      "Tank, vessel and pipe-spool lifts for Ruwais and Al Dhafra contractors",
      "Steel frame erection for new Musaffah warehouses",
      "Generator and chiller placement on Abu Dhabi island rooftops",
    ],
    faqs: [
      {
        question: "Who prepares the lift plan for a crane job in Abu Dhabi?",
        answer:
          "We do. Our lift planner prepares the method statement, lift plan and risk assessment to the OSHAD framework and sends them for your HSE team's approval before the crane is mobilized.",
      },
      {
        question: "Can you lift at Khalifa Port and inside KIZAD?",
        answer:
          "Yes. We regularly work inside both, and arrange the gate passes and crew documents the port and free zone require. Allow a working day for pass approval on a first visit.",
      },
    ],
  },
  "telehandler:abu-dhabi-musaffah": {
    intro:
      "Telehandler hire in Abu Dhabi is mostly villa work. Blocks go up onto roof slabs in Khalifa City, Al Shamkha and Yas, and a telehandler saves the builder the cost of a crane for the day. We send 3 to 10 ton units from Musaffah with fork, bucket and jib attachments to suit the job.",
    metaDescription:
      "Telehandler rental in Abu Dhabi, 3 to 10 ton with up to 17 m reach. Villa and plant work in Musaffah, Yas and Al Shamkha. Same-day delivery.",
    typicalUnit: "4 ton, 13 m reach with forks",
    jobs: [
      "Placing blockwork and roof tiles on villa projects in Al Shamkha and Riyadh City",
      "Unloading lorries on unmade ground at Yas and Saadiyat plots",
      "Lifting pipe and valves during ICAD plant maintenance",
      "Sand-rated four-wheel-drive units for Al Dhafra site works",
    ],
    faqs: [
      {
        question: "Can one telehandler cover several villa plots in Abu Dhabi?",
        answer:
          "Yes. Contractors building a row of villas often keep one telehandler on monthly hire and drive it between plots. We confirm it is licensed for short road moves inside the community.",
      },
      {
        question: "Do you supply a man basket with the telehandler?",
        answer:
          "Yes, a certified man basket is available for short access tasks. For longer work at height, a dedicated boom lift is safer and usually cheaper.",
      },
    ],
  },
  "man-lift:abu-dhabi-musaffah": {
    intro:
      "Abu Dhabi man lift jobs sit inside working facilities: a cable tray in a live ICAD factory, racking in a KIZAD warehouse, or lighting in a mall on the island. We send scissor lifts and booms from Musaffah with the insurance, inspection certificate and operator card the facility manager will ask for at the gate.",
    metaDescription:
      "Man lift rental in Abu Dhabi: scissor lifts and boom lifts from 10 to 50 m. Delivered from Musaffah to ICAD, KIZAD and the island. Operator available.",
    typicalUnit: "12 m electric scissor lift",
    jobs: [
      "Racking and sprinkler installation in KIZAD logistics sheds",
      "MEP and cable-tray work in ICAD factories during production",
      "Mall and hotel ceiling maintenance on Abu Dhabi island at night",
      "Pipe-rack inspection with articulating booms at Ruwais",
    ],
    faqs: [
      {
        question: "Can a scissor lift be delivered to an upper floor of an Abu Dhabi building?",
        answer:
          "Often, yes. Narrow 8 to 10 m electric scissor lifts fit most service lifts. Send us the lift car size and weight limit and we will confirm which model fits.",
      },
      {
        question: "Do you supply boom lifts for Ruwais and ADNOC contractor sites?",
        answer:
          "Yes. We supply rough-terrain booms with the operator certification and inspection records these sites require. Share the site's HSE requirements and we will match them.",
      },
    ],
  },

  // -------------------------------------------------------------------- Dubai
  "forklift:dubai": {
    intro:
      "Dubai warehouses in JAFZA, DIP and Dubai Industrial City run shifts around the clock, so a forklift that breaks at 2 am costs more than its rental. Our Dubai hires are mostly monthly contracts that include a replacement unit, with electric forklifts for high-bay racking and diesels for container yards.",
    metaDescription:
      "Forklift rental in Dubai for JAFZA, DIP and Al Quoz. Monthly contracts with a replacement unit, electric and diesel, 3 to 25 ton. Certified operators.",
    typicalUnit: "3 ton electric, 4.7 m triplex mast",
    jobs: [
      "Round-the-clock pallet handling in JAFZA 3PL warehouses",
      "Destuffing Jebel Ali containers at DIP distribution centres",
      "Steel and timber handling with side loaders in Al Quoz and Ras Al Khor",
      "Short hires for exhibition build-up at Dubai World Trade Centre and Expo City",
    ],
    faqs: [
      {
        question: "Can you supply forklifts for a JAFZA warehouse at short notice?",
        answer:
          "Yes. Standard 3 to 5 ton units reach JAFZA the same day from our Abu Dhabi fleet, which is about an hour away. We arrange the free zone gate pass with your warehouse team.",
      },
      {
        question: "Do you rent forklifts for exhibitions in Dubai?",
        answer:
          "Yes. Exhibition contractors hire compact forklifts for build-up and breakdown at Dubai World Trade Centre and Expo City. Book early for major shows, because demand peaks then.",
      },
    ],
  },
  "mobile-crane:dubai": {
    intro:
      "In Dubai the hardest part of a crane job is often getting the crane there. Heavy vehicles face timed road bans, city-centre setups need right-of-way permits, and a lift in Business Bay may be possible only overnight. We plan the route, the permits and the lift, then send cranes from 25 to 500 ton with certified crews.",
    metaDescription:
      "Mobile crane rental in Dubai, 25 to 500 ton, with route planning and night lifts for Business Bay and Downtown. JAFZA and DIP plant lifts. Certified crew.",
    typicalUnit: "100 ton all-terrain crane",
    jobs: [
      "HVAC and generator placement on Business Bay and Downtown rooftops",
      "Precast and steel erection in Dubai Industrial City and Dubai South",
      "Machinery relocation between JAFZA and DIP facilities",
      "Overnight lifts timed to Dubai road movement windows",
    ],
    faqs: [
      {
        question: "Can you do crane lifts in Dubai at night?",
        answer:
          "Yes. Many city-centre lifts are scheduled overnight to fit road closures and building management rules. We plan the crew rota and lighting for night work as part of the lift plan.",
      },
      {
        question: "Who arranges the road permit for a crane in Dubai?",
        answer:
          "We handle the crane's movement planning and supply everything needed for the right-of-way application. Your main contractor usually submits it, and we support them with documents.",
      },
    ],
  },
  "telehandler:dubai": {
    intro:
      "Dubai telehandlers step in when the tower crane has not arrived yet or has already left. Our 3 to 10 ton units lift block, rebar and finishes to upper floors on villa communities in Dubai South and on low-rise blocks in DIP. Four-wheel steer lets them work on tight community plots.",
    metaDescription:
      "Telehandler rental in Dubai, 3 to 10 ton with up to 17 m reach, for Dubai South villas, DIP blocks and logistics yards. Four-wheel steer units available.",
    typicalUnit: "3.5 ton compact, 7 m reach",
    jobs: [
      "Upper-floor material placement on Dubai South and Arabian Ranches villas",
      "External works after tower crane removal on mid-rise projects",
      "Unloading trucks on unmade ground at DIP and Dubai South logistics yards",
      "Landscape and hardscape material moves in new communities",
    ],
    faqs: [
      {
        question: "Can a telehandler work inside a gated Dubai community?",
        answer:
          "Yes, with the community's contractor access permit. We supply the machine documents and insurance certificate that community management asks for before entry.",
      },
      {
        question: "Is a telehandler cheaper than a mobile crane for a Dubai villa?",
        answer:
          "Usually, for loads under 4 tons within reach of the boom. A telehandler also stays on site all week, while a crane is normally booked by the lift.",
      },
    ],
  },
  "man-lift:dubai": {
    intro:
      "Most Dubai man lift hires are fit-out jobs: a ceiling in a Business Bay office, a shopfront in a mall, a hotel lobby refurbishment. The work often runs at night so the building can trade by day. We send quiet electric scissor lifts and booms with the insurance and operator papers the building manager checks at the loading bay.",
    metaDescription:
      "Man lift rental in Dubai for fit-out, malls and hotels. Quiet electric scissor lifts and booms, 10 to 50 m, night delivery, insurance papers supplied.",
    typicalUnit: "10 m narrow electric scissor lift",
    jobs: [
      "Night-shift ceiling and MEP fit-out in Business Bay offices",
      "Mall shopfront and signage installation",
      "Hotel atrium and lobby refurbishments with non-marking booms",
      "High-bay lighting upgrades in Al Quoz and Al Qusais warehouses",
    ],
    faqs: [
      {
        question: "Can you deliver a scissor lift to a Dubai mall at night?",
        answer:
          "Yes. We deliver in the loading-bay window the mall sets, usually late evening, and collect the same way. Send us the mall's contractor requirements when you book.",
      },
      {
        question: "What documents will a Dubai building manager ask for?",
        answer:
          "Usually the insurance certificate, the platform's third-party inspection certificate and the operator's card. We send copies in advance so your work permit is approved before delivery.",
      },
    ],
  },

  // ------------------------------------------------------------------ Sharjah
  "forklift:sharjah": {
    intro:
      "Sharjah's Industrial Areas pack hundreds of workshops into narrow streets, so the forklift has to fit the yard before it can lift the load. We send compact 3 to 5 ton diesels with tight turning circles and side loaders for steel and pipe, often for a single day of container unloading.",
    metaDescription:
      "Forklift rental in Sharjah for Industrial Areas 1 to 18, Hamriyah and SAIF Zone. Compact diesels, side loaders and day hire. Certified operators.",
    typicalUnit: "3 ton compact diesel",
    jobs: [
      "One-day container unloading in Industrial Areas 1 to 18",
      "Side loader hire for steel bar and pipe in fabrication shops",
      "Monthly electric forklifts for SAIF Zone air-freight warehouses",
      "Cover while a workshop's own forklift is out for repair",
    ],
    faqs: [
      {
        question: "Do you rent forklifts for just one day in Sharjah?",
        answer:
          "Yes. Day hire for container unloading is one of our most common Sharjah jobs. Tell us the container arrival time and we will schedule the forklift to meet it.",
      },
      {
        question: "Can your forklift fit into a small Sharjah workshop yard?",
        answer:
          "Send us the gate width and yard size. Our compact 3 ton units need about 3.5 m to turn, and we will suggest the smallest machine that handles your load safely.",
      },
    ],
  },
  "mobile-crane:sharjah": {
    intro:
      "Sharjah crane work is fabrication work. Finished steel structures are loaded onto trailers, machines are set down inside workshops and frames go up for new sheds. In the older Industrial Areas, overhead cables and narrow streets decide the crane size, so we survey the route and the setup spot before we quote.",
    metaDescription:
      "Mobile crane rental in Sharjah, 25 to 500 ton, for fabrication yards, Hamriyah and SAIF Zone. Route and setup surveys before every lift. Certified riggers.",
    typicalUnit: "50 ton all-terrain crane",
    jobs: [
      "Loading fabricated steel onto trailers in the Industrial Areas",
      "Heavy plant and marine lifts at Hamriyah Free Zone",
      "Machinery placement inside workshops through roof openings",
      "Steel frame erection for new industrial sheds in Al Sajaa",
    ],
    faqs: [
      {
        question: "Can a crane work under overhead cables in Sharjah's Industrial Areas?",
        answer:
          "Only with a safe clearance, which we check during the site survey. Where cables are too close, we plan a different setup spot or arrange a supervised isolation with the utility.",
      },
      {
        question: "Do you lift at Hamriyah Free Zone?",
        answer:
          "Yes. Hamriyah hosts heavier plant and marine lifts, and we arrange the free zone entry permits and crew documents as part of the booking.",
      },
    ],
  },
  "telehandler:sharjah": {
    intro:
      "Sharjah telehandlers work on residential and mixed-use buildings in Muwaileh and Al Qasimia, and in the building-materials belt around Al Sajaa. A single unit with a bucket, forks and a jib can do the work of two machines on a smaller site, which keeps hire costs down.",
    metaDescription:
      "Telehandler rental in Sharjah, 3 to 10 ton, for Muwaileh and Al Qasimia builds and Al Sajaa yards. Bucket, fork and jib attachments. Daily to monthly.",
    typicalUnit: "4 ton, 13 m reach with bucket",
    jobs: [
      "Blockwork and rebar placement on Muwaileh mid-rise sites",
      "Loading and stacking block at Al Sajaa building-materials yards",
      "Rough-terrain material moves on dusty quarry-belt ground",
      "Roof material placement on Industrial Area workshop extensions",
    ],
    faqs: [
      {
        question: "Can I swap telehandler attachments during the hire in Sharjah?",
        answer:
          "Yes. We can deliver a bucket or jib part way through the hire, so the same machine can move from unloading to site clean-up without a second rental.",
      },
      {
        question: "Which telehandler suits a Sharjah G+4 building?",
        answer:
          "A 4 ton unit with a 13 to 14 m boom reaches the roof slab of a typical G+4 building from a safe setback. For G+6 and above, we recommend the 17 m unit.",
      },
    ],
  },
  "man-lift:sharjah": {
    intro:
      "Many workshop sheds in Sharjah's Industrial Areas are decades old, and much of our man lift work there is roof sheeting, cladding and gutter repair on them. On uneven yards we send rough-terrain scissors and booms. Inside SAIF Zone warehouses we send electric units with non-marking tyres.",
    metaDescription:
      "Man lift rental in Sharjah: scissor and boom lifts for roof, cladding and signage work in the Industrial Areas and SAIF Zone. 10 to 50 m, with operator.",
    typicalUnit: "16 m articulating boom lift",
    jobs: [
      "Roof sheeting and cladding repair on older workshop sheds",
      "Signage installation on Industrial Area frontages",
      "Electrical and MEP work inside Hamriyah factories",
      "Reaching over racking with booms in SAIF Zone warehouses",
    ],
    faqs: [
      {
        question: "Which platform is best for a Sharjah workshop roof repair?",
        answer:
          "An articulating boom lift, because it can reach over the eaves and put the crew on the roof line without standing on fragile sheeting. We size it once we know the shed height.",
      },
      {
        question: "Can a scissor lift work on an uneven Sharjah yard?",
        answer:
          "A standard slab scissor cannot. A rough-terrain diesel scissor with outriggers can work on compacted, uneven yards, and we send that type for outdoor Sharjah jobs.",
      },
    ],
  },

  // -------------------------------------------------------------------- Ajman
  "forklift:ajman": {
    intro:
      "Ajman's furniture and woodworking factories handle long timber and board stock that is unsafe on a standard mast. We send side loaders and long-fork forklifts to Al Jurf and the Industrial Areas, and 3 to 5 ton diesels for the building-materials distributors who unload lorries all day.",
    metaDescription:
      "Forklift rental in Ajman for Al Jurf, the Industrial Areas and Ajman Free Zone. Side loaders for timber, 3 to 5 ton diesels, electric units. Monthly hire.",
    typicalUnit: "3 ton diesel with long forks",
    jobs: [
      "Timber and board handling with side loaders in furniture factories",
      "Pallet moves in Al Jurf plastics and packaging plants",
      "All-day lorry unloading at building-materials yards",
      "Electric forklifts for Ajman Free Zone warehouses",
    ],
    faqs: [
      {
        question: "Do you have side loaders for Ajman furniture factories?",
        answer:
          "Yes. Side loaders carry long timber and board lengthwise through narrow aisles, which is safer than balancing them across a standard forklift's forks.",
      },
      {
        question: "How is forklift delivery to Ajman scheduled?",
        answer:
          "Ajman is on our scheduled northern route, so next-day delivery is standard. When a unit is already nearby in Sharjah, same-day is often possible.",
      },
    ],
  },
  "mobile-crane:ajman": {
    intro:
      "Ajman crane jobs are usually mid-size: setting machines for a new Al Jurf factory, loading at Ajman Port or placing steel on a mid-rise building. A 25 to 80 ton crane covers most of them. Plots here often share walls with neighbours, so we fix the setup position and slew radius at the survey.",
    metaDescription:
      "Mobile crane rental in Ajman, 25 to 80 ton cranes for Al Jurf factories, Ajman Port and mid-rise builds. Larger cranes on request. Certified crew.",
    typicalUnit: "40 ton all-terrain crane",
    jobs: [
      "Machinery installation for new manufacturing units in Al Jurf",
      "Loading and unloading at Ajman Port",
      "Steel and precast placement on mid-rise buildings",
      "Tight-plot lifts planned around shared boundary walls",
    ],
    faqs: [
      {
        question: "Can you bring a 200 ton crane to Ajman?",
        answer:
          "Yes. Capacities over 100 tons come from our main fleet on a scheduled move, so we ask for three to five days' notice to route the crane and its counterweight trailers.",
      },
      {
        question: "What if my Ajman plot is too tight for the crane's outriggers?",
        answer:
          "We check this at the survey. Options include a smaller crane with a longer boom set up on the street side, subject to municipality approval, or a compact crawler.",
      },
    ],
  },
  "telehandler:ajman": {
    intro:
      "On Ajman sites a 3 to 4 ton telehandler with 7 to 13 m of reach does most of the work. It lifts block to the roof of a villa in Al Rawda, stacks cement bags in an Al Jurf yard, and is small enough to move between neighbouring plots without a trailer.",
    metaDescription:
      "Telehandler rental in Ajman, 3 to 4 ton units with 7 to 13 m reach for Al Rawda and Al Hamidiya builds and Al Jurf yards. Next-day delivery.",
    typicalUnit: "3.5 ton, 10 m reach",
    jobs: [
      "Roof and upper-floor material placement in Al Rawda and Al Hamidiya",
      "Block and cement bag stacking at Al Jurf materials yards",
      "Plot-to-plot moves on multi-villa contracts",
      "Unloading on rough site ground where a forklift gets stuck",
    ],
    faqs: [
      {
        question: "Is a small telehandler enough for an Ajman villa?",
        answer:
          "For a typical G+1 villa, yes. A 3.5 ton unit with 10 m reach places pallets on the roof slab from the plot boundary.",
      },
      {
        question: "Can I hire a telehandler for just a week in Ajman?",
        answer:
          "Yes. Weekly hire is common on Ajman villa jobs during the blockwork stage. You can extend on site without a new contract.",
      },
    ],
  },
  "man-lift:ajman": {
    intro:
      "Inside Ajman factories, man lifts are hired to fit mezzanines, hang high-bay lights and extraction ducts, and repair roofs. Outside, they are used for signage and facade cleaning along the Corniche. We send 8 to 12 m electric scissors for finished floors and booms for exterior reach.",
    metaDescription:
      "Man lift rental in Ajman: electric scissor lifts for factories and booms for Corniche facades and signage. 8 to 50 m working height. Next-day delivery.",
    typicalUnit: "10 m electric scissor lift",
    jobs: [
      "Mezzanine and racking installation in Al Jurf factories",
      "High-bay lighting and extraction duct fitting",
      "Facade cleaning and signage along Ajman Corniche",
      "Roof repairs on Industrial Area warehouses",
    ],
    faqs: [
      {
        question: "Do I need a permit to use a boom lift on an Ajman roadside?",
        answer:
          "Usually, yes. Roadside setups need Ajman Municipality approval. We supply the machine documents your application needs and can advise on the process.",
      },
      {
        question: "Which scissor lift fits through a standard factory door?",
        answer:
          "Our narrow 8 m and 10 m electric scissors are about 0.8 m wide and pass through standard personnel doors. Wider 12 m units need a roller shutter.",
      },
    ],
  },

  // ----------------------------------------------------------- Ras Al Khaimah
  "forklift:ras-al-khaimah": {
    intro:
      "Ras Al Khaimah's ceramics and glass plants move heavy pallets that break if handled roughly. They need a 7 to 10 ton forklift with smooth hydraulics and an operator who takes care. The quarries and cement works need diesels that run in dust all day. Almost every RAK hire is a monthly contract with servicing built in.",
    metaDescription:
      "Forklift rental in Ras Al Khaimah for ceramics, glass, cement and quarry sites. 3 to 25 ton, monthly contracts with dust-rated servicing. RAK FTZ too.",
    typicalUnit: "7 ton diesel with fork positioner",
    jobs: [
      "Handling ceramic tile and sanitaryware pallets in Al Hamra plants",
      "Glass pallet moves with smooth-hydraulic 7 to 10 ton units",
      "Dust-rated diesels for Khor Khwair cement and aggregate yards",
      "Warehouse forklifts for RAK FTZ trading companies",
    ],
    faqs: [
      {
        question: "How often are forklifts serviced on RAK quarry sites?",
        answer:
          "More often than elsewhere. In quarry and cement dust, we service air filters and cooling on a shorter interval, built into the monthly contract so the machine is not left to clog.",
      },
      {
        question: "Can you supply a forklift for a RAK plant shutdown?",
        answer:
          "Yes. Book the dates when the shutdown is scheduled and we will reserve the units and operators for the full window.",
      },
    ],
  },
  "mobile-crane:ras-al-khaimah": {
    intro:
      "Crane work in Ras Al Khaimah follows the plant calendar. Kilns, crushers and conveyors in the cement and quarry belt are lifted during planned shutdowns, and the date is fixed weeks ahead. We book the crane, riggers and lift plan against that window. Outrigger mats come as standard for loose quarry ground.",
    metaDescription:
      "Mobile crane rental in Ras Al Khaimah for cement, quarry and RAK Maritime City lifts. Shutdown booking, outrigger mats, certified riggers. 25 to 500 ton.",
    typicalUnit: "80 ton all-terrain crane",
    jobs: [
      "Crusher and conveyor lifts in the Khor Khwair quarry belt",
      "Kiln and mill component lifts during cement plant shutdowns",
      "Bulk and marine lifts at RAK Maritime City",
      "Steel erection for resort projects on Al Marjan Island",
    ],
    faqs: [
      {
        question: "How far ahead should I book a crane for a RAK shutdown?",
        answer:
          "As soon as the shutdown date is set, ideally two to four weeks ahead. That gives time to route a large crane north, prepare the lift plan and confirm the crew.",
      },
      {
        question: "Do you assess ground conditions on RAK quarry sites?",
        answer:
          "Yes. Quarry benches are often loose or backfilled, so we check ground bearing and bring outrigger mats sized to spread the load before the crane sets up.",
      },
    ],
  },
  "telehandler:ras-al-khaimah": {
    intro:
      "Ras Al Khaimah telehandlers do two very different jobs. On quarries and cement works, heavy four-wheel-drive units with buckets and jibs handle maintenance. On the coast, 13 to 17 m booms place materials on hotel and villa projects around Al Marjan Island and Al Hamra. Both kinds of site tend to run for months.",
    metaDescription:
      "Telehandler rental in Ras Al Khaimah for quarry maintenance and Al Marjan Island and Al Hamra builds. 3 to 10 ton, up to 17 m reach, monthly terms.",
    typicalUnit: "6 ton, 17 m reach",
    jobs: [
      "Plant maintenance lifts on cement and quarry sites",
      "Upper-floor placement on Al Marjan Island hotel projects",
      "Villa roof material on Al Hamra developments",
      "Bucket work clearing spill around crusher stations",
    ],
    faqs: [
      {
        question: "Which telehandler suits a hotel project on Al Marjan Island?",
        answer:
          "For mid-rise hotel blocks, a 17 m unit with a rotating option places material on upper floors from outside the building footprint. We confirm once we see the site layout.",
      },
      {
        question: "Can a telehandler work in quarry dust all day?",
        answer:
          "Yes, with the right servicing. We fit pre-cleaners where needed and service filters more often on quarry contracts.",
      },
    ],
  },
  "man-lift:ras-al-khaimah": {
    intro:
      "In Ras Al Khaimah, man lifts mostly lift crews to silos, conveyor galleries and kiln structures in the cement and ceramics belt, where rough-terrain booms reach over plant on dusty ground. On the coast, electric units with non-marking tyres handle fit-out and facade work on Al Marjan Island and Al Hamra resorts.",
    metaDescription:
      "Man lift rental in Ras Al Khaimah: rough-terrain booms for cement and ceramics plants, electric lifts for Al Marjan resort fit-out. 10 to 50 m.",
    typicalUnit: "26 m rough-terrain boom lift",
    jobs: [
      "Silo and conveyor gallery inspection at cement works",
      "Kiln area maintenance during planned shutdowns",
      "Resort fit-out on Al Marjan Island with non-marking units",
      "Facade and glazing work on Al Hamra hospitality projects",
    ],
    faqs: [
      {
        question: "Can your boom lifts reach over plant equipment at RAK factories?",
        answer:
          "Yes. Articulating and telescopic booms reach up and over conveyors and pipework. We size the boom from the obstacle height and the horizontal outreach you need.",
      },
      {
        question: "Do you supply man lifts for hotel fit-out in RAK?",
        answer:
          "Yes. Quiet electric scissors and compact booms with non-marking tyres are suited to finished hotel floors, and can work while other trades are on site.",
      },
    ],
  },

  // ----------------------------------------------------------------- Fujairah
  "forklift:fujairah": {
    intro:
      "Around Fujairah's oil terminals, forklifts move drums, spares and shutdown materials between tank farms under strict permit-to-work systems. Some areas are also classified for ignition risk. Tell us the site's area classification before we quote. For the Free Zone and Al Hayl yards, standard 3 to 10 ton diesels on monthly terms are the usual choice.",
    metaDescription:
      "Forklift rental in Fujairah for the Free Zone, Port of Fujairah and oil terminals. 3 to 10 ton diesels on monthly terms, permit-to-work ready.",
    typicalUnit: "5 ton diesel",
    jobs: [
      "Moving drums, spares and shutdown materials at oil terminals",
      "Container and general cargo handling at the Port of Fujairah",
      "Monthly diesel forklifts in Fujairah Free Zone warehouses",
      "Block and aggregate handling in Al Hayl yards",
    ],
    faqs: [
      {
        question: "Can you supply forklifts for work inside a Fujairah tank farm?",
        answer:
          "It depends on the area classification. Tell us the zone and the site's HSE rules, and we will confirm which machines can be used and what documents come with them.",
      },
      {
        question: "Is monthly hire better than day hire in Fujairah?",
        answer:
          "Usually, yes. Mobilizing across the mountains costs the same for a day as for a month, so a monthly contract spreads that cost over more working days.",
      },
    ],
  },
  "mobile-crane:fujairah": {
    intro:
      "Most crane work in Fujairah is for the oil storage hub: tank construction, terminal maintenance, and turnarounds that must finish on schedule. Operators expect full lift documentation and certified crews. Large cranes cross the Hajar mountains to reach the east coast, so we plan mobilization into the booking and lock in shutdown dates early.",
    metaDescription:
      "Mobile crane rental in Fujairah for oil terminals, tank construction and port lifts. 25 to 500 ton, full lift documents, shutdown scheduling.",
    typicalUnit: "100 ton all-terrain crane",
    jobs: [
      "Tank shell and roof lifts during terminal construction",
      "Valve, pump and pipe-spool lifts during turnarounds",
      "Heavy cargo lifts at the Port of Fujairah",
      "Crusher and plant work at Al Hayl quarries",
    ],
    faqs: [
      {
        question: "What documents do Fujairah terminals require for a crane?",
        answer:
          "Typically the lift plan, current third-party inspection and load-test certificates, and operator and rigger certificates. We submit them ahead so the crew is cleared before arrival.",
      },
      {
        question: "How long does a large crane take to reach Fujairah?",
        answer:
          "Cranes up to about 100 tons can arrive the day after booking. Larger cranes travel with separate counterweight trailers, so allow several days for mobilization.",
      },
    ],
  },
  "telehandler:fujairah": {
    intro:
      "Fujairah jobs are spread along the east coast, from Al Hayl quarries to hotel sites near Dibba. That makes a telehandler on monthly hire cheaper than repeated trips over the mountains. We send rough-terrain four-wheel-drive units for quarry and terminal work and compact 7 to 13 m units for coastal villas and hotels.",
    metaDescription:
      "Telehandler rental in Fujairah from Al Hayl to Dibba. Rough-terrain units for quarry and terminal work, compact units for coastal builds. Monthly terms.",
    typicalUnit: "4 ton, 13 m rough-terrain",
    jobs: [
      "Maintenance lifts at Al Hayl quarry and building-materials sites",
      "Terminal and port maintenance support",
      "Coastal hotel and villa material placement towards Dibba",
      "Unloading and stacking on rough terminal laydown areas",
    ],
    faqs: [
      {
        question: "Can one telehandler move between Fujairah sites?",
        answer:
          "Yes, on a monthly hire it can be moved between your sites. Tell us the sites up front and we will plan the transport between them.",
      },
      {
        question: "Do coastal conditions in Fujairah affect telehandlers?",
        answer:
          "Salt air speeds up corrosion on exposed parts, so our Fujairah units get extra washing and greasing during scheduled servicing.",
      },
    ],
  },
  "man-lift:fujairah": {
    intro:
      "Access platforms in Fujairah mostly work at the oil terminals. Crews use them to inspect tanks, apply coatings and maintain pipe racks, often during a planned shutdown. We send rough-terrain booms that reach over pipework, with operator certificates and current inspection papers. Salt air on this coast is hard on equipment that is not maintained.",
    metaDescription:
      "Man lift rental in Fujairah for tank inspection, coating and pipe-rack work at oil terminals. Rough-terrain booms, 10 to 50 m, inspection papers supplied.",
    typicalUnit: "20 m articulating boom lift",
    jobs: [
      "Tank shell inspection and coating at storage terminals",
      "Pipe-rack maintenance with articulating booms",
      "Port structure and crane-rail maintenance",
      "Free Zone warehouse lighting and roof work",
    ],
    faqs: [
      {
        question: "Can your boom lifts be used during a Fujairah terminal shutdown?",
        answer:
          "Yes. We supply rough-terrain booms with the operator certification and inspection records terminals require, booked against your shutdown dates.",
      },
      {
        question: "Which platform suits tank coating work?",
        answer:
          "A telescopic boom for straight reach up the shell, or an articulating boom where pipework sits at the base. We size it from the tank height and diameter.",
      },
    ],
  },

  // ------------------------------------------------------------ Umm Al Quwain
  "forklift:umm-al-quwain": {
    intro:
      "Umm Al Quwain forklift demand comes mainly from the small and mid-size trading and e-commerce warehouses in UAQ Free Trade Zone. They need a dependable 3 to 5 ton forklift and a replacement if it stops, not heavy capacity. Most UAQ hires are monthly, with electric units for finished floors and diesels for the Industrial Area.",
    metaDescription:
      "Forklift rental in Umm Al Quwain for UAQ Free Trade Zone and the Industrial Area. 3 to 5 ton electric and diesel, monthly hire with standby replacement.",
    typicalUnit: "2.5 ton electric forklift",
    jobs: [
      "Pallet handling in UAQ FTZ e-commerce and trading warehouses",
      "Monthly electric forklifts on finished warehouse floors",
      "Diesel units for Industrial Area building-materials yards",
      "Standby replacement so small warehouses keep moving",
    ],
    faqs: [
      {
        question: "Do you offer a standby forklift for UAQ warehouses?",
        answer:
          "Yes. On monthly hire we replace a broken-down unit, so a small UAQ warehouse does not have to own a backup machine.",
      },
      {
        question: "Is a 2.5 ton forklift enough for a UAQ FTZ warehouse?",
        answer:
          "For most trading and e-commerce pallets, yes. Tell us your heaviest pallet and top racking level and we will confirm the capacity and mast.",
      },
    ],
  },
  "mobile-crane:umm-al-quwain": {
    intro:
      "Umm Al Quwain lifts are usually mid-size: installing machines in the Industrial Area and Free Zone, lifting boats and marine equipment near the port, and placing steel on new buildings. A 25 to 80 ton crane handles most of them. Plots near the lagoon can be soft, so we check outrigger bearing at the survey.",
    metaDescription:
      "Mobile crane rental in Umm Al Quwain for Industrial Area, Free Zone and marine lifts. 25 to 80 ton cranes, larger on request. Ground checks at survey.",
    typicalUnit: "40 ton all-terrain crane",
    jobs: [
      "Machinery installation in UAQ Industrial Area and Free Zone units",
      "Boat and marine equipment lifts near Umm Al Quwain Port",
      "Steel and precast placement on new residential buildings",
      "Water tank and plant lifts for Falaj Al Mualla farms",
    ],
    faqs: [
      {
        question: "Can you lift a boat near Umm Al Quwain Port?",
        answer:
          "Yes. We plan marine lifts with spreader beams and slings rated for hull lifting, and confirm the quayside ground before setup.",
      },
      {
        question: "How soon can a crane reach Umm Al Quwain?",
        answer:
          "Cranes up to 80 tons usually arrive the next day on our scheduled route. Give us a few days' notice for anything over 100 tons.",
      },
    ],
  },
  "telehandler:umm-al-quwain": {
    intro:
      "On UAQ residential and commercial sites, a compact 3 to 4 ton telehandler with about 7 m of reach does most of the lifting. It places block, steel and roofing, and unloads deliveries over rough ground. For taller buildings we have 13 to 17 m booms. UAQ is on our scheduled route, so booking a day ahead gets the best slot.",
    metaDescription:
      "Telehandler rental in Umm Al Quwain, compact 3 to 4 ton units and 17 m booms for residential and commercial builds. Scheduled next-day delivery.",
    typicalUnit: "3.5 ton compact, 7 m reach",
    jobs: [
      "Block and steel placement on low-rise residential projects",
      "Roof material lifts on commercial buildings",
      "Unloading deliveries on unmade site ground",
      "Taller builds with 13 to 17 m boom units",
    ],
    faqs: [
      {
        question: "What is the cheapest way to hire a telehandler in UAQ?",
        answer:
          "Weekly or monthly hire booked a day ahead on our scheduled route. It avoids a dedicated delivery and gives the best rate.",
      },
      {
        question: "Can a telehandler replace a forklift on a UAQ site?",
        answer:
          "On rough ground, yes. With forks fitted, a telehandler unloads lorries where a standard forklift would get stuck.",
      },
    ],
  },
  "man-lift:umm-al-quwain": {
    intro:
      "Man lift work in Umm Al Quwain is mostly facility maintenance in Free Zone warehouses, retail and commercial fit-out, and finishing work on the outside of new buildings, such as signage, lighting and facade detailing. Tell us the working height and the ground, and we will send the smallest platform that does the job safely.",
    metaDescription:
      "Man lift rental in Umm Al Quwain for UAQ FTZ maintenance, retail fit-out and facade work. Scissor and boom lifts, 10 to 50 m, operator available.",
    typicalUnit: "12 m electric scissor lift",
    jobs: [
      "Warehouse lighting and roof maintenance in UAQ FTZ",
      "Retail and commercial fit-out on finished floors",
      "Signage and facade finishing on new buildings",
      "Reaching over obstacles with articulating booms",
    ],
    faqs: [
      {
        question: "Do you deliver scissor lifts to UAQ Free Trade Zone?",
        answer:
          "Yes, on our scheduled northern route, usually next day. We arrange Free Zone access with your facility team.",
      },
      {
        question: "Which man lift suits signage on a UAQ building?",
        answer:
          "A telescopic or articulating boom set up at the kerb, depending on how far the sign sits from the base. We size it from the height and outreach.",
      },
    ],
  },

  // -------------------------------------------------------------------- Al Ain
  "forklift:al-ain": {
    intro:
      "Al Ain forklift work is split between Sanaiya, where compact diesels move engines, parts and fabricated steel in tight workshop yards, and the dairy and food-processing plants, which need cold-store electric forklifts. Summer inland heat is fierce, so outdoor units come with enclosed, air-conditioned cabs.",
    metaDescription:
      "Forklift rental in Al Ain for Sanaiya workshops, Al Ain Industrial City and cold stores. Compact diesels, electric units and AC cabs. Next-day delivery.",
    typicalUnit: "3 ton diesel with enclosed AC cab",
    jobs: [
      "Engine and parts handling in Sanaiya workshop yards",
      "Cold-store electric forklifts for dairy and food processing",
      "Monthly 5 to 10 ton units in Al Ain Industrial City",
      "Feed and produce pallet handling on farm estates",
    ],
    faqs: [
      {
        question: "Do your Al Ain forklifts have air-conditioned cabs?",
        answer:
          "For outdoor summer work, yes. Enclosed AC cabs keep operators productive in Al Ain's inland heat, and we recommend them for any yard job from May to September.",
      },
      {
        question: "Can you supply forklifts for Al Ain cold stores?",
        answer:
          "Yes. Electric forklifts with cold-rated batteries and non-marking tyres are available for dairy and food-processing cold rooms.",
      },
    ],
  },
  "mobile-crane:al-ain": {
    intro:
      "Crane schedules in Al Ain are shaped by the heat. The midday work break applies from mid-June to mid-September, and inland temperatures are some of the highest in the country, so outdoor lifts go in the early morning or late afternoon. Our 25 to 500 ton cranes come from the Abu Dhabi fleet, with a day allowed for mobilization.",
    metaDescription:
      "Mobile crane rental in Al Ain, 25 to 500 ton, planned around the midday break. Steel erection, Industrial City machinery and utility lifts. Certified crew.",
    typicalUnit: "60 ton all-terrain crane",
    jobs: [
      "Steel erection for schools, hospitals and villas",
      "Machinery installation in Al Ain Industrial City",
      "Water, power and utility equipment lifts",
      "Agricultural plant and storage tank placement",
    ],
    faqs: [
      {
        question: "Can you lift in Al Ain during the summer midday break?",
        answer:
          "Outdoor work under direct sun stops from 12:30 to 3:00 pm between mid-June and mid-September. We plan lifts for early mornings or late afternoons in that period.",
      },
      {
        question: "How early should I book a crane for Al Ain?",
        answer:
          "A day ahead for cranes up to about 100 tons. For larger cranes, allow several days so the crane and counterweight can travel from Abu Dhabi.",
      },
    ],
  },
  "telehandler:al-ain": {
    intro:
      "Al Ain telehandlers work on villa, school and clinic projects, and also on farms and landscaping contracts where the ground is soft sand. For those sites we send four-wheel-drive units with bucket and fork attachments. Compact 7 m machines handle most villas, and long projects are cheaper on monthly terms.",
    metaDescription:
      "Telehandler rental in Al Ain for villa, school and farm projects. Four-wheel-drive units for sand, 3 to 10 ton, bucket and forks. Monthly terms available.",
    typicalUnit: "3.5 ton four-wheel drive, 7 m reach",
    jobs: [
      "Villa blockwork and roof placement in Al Jimi and Al Muwaiji",
      "School and healthcare building material lifts",
      "Farm feed, fencing and irrigation material moves on sand",
      "Landscaping soil and palm handling with bucket attachment",
    ],
    faqs: [
      {
        question: "Can a telehandler drive on Al Ain farm sand?",
        answer:
          "A four-wheel-drive rough-terrain unit with sand-rated tyres can. We send that type for farm and landscaping jobs rather than a standard two-wheel-drive machine.",
      },
      {
        question: "Is monthly hire worth it for an Al Ain villa?",
        answer:
          "If the structure and blockwork stages take more than two weeks, usually yes. Monthly rates work out well below the equivalent day hire.",
      },
    ],
  },
  "man-lift:al-ain": {
    intro:
      "Al Ain has a man lift job most cities do not: date palm maintenance. Articulating booms let crews prune and treat tall palms in parks, farms and private estates safely. We also send scissor lifts to Sanaiya and Industrial City workshops, and telescopic booms for exterior building work booked around the midday break.",
    metaDescription:
      "Man lift rental in Al Ain: boom lifts for date palm maintenance, scissor lifts for Sanaiya workshops, facade booms. 10 to 50 m, operator available.",
    typicalUnit: "18 m articulating boom lift",
    jobs: [
      "Date palm pruning and treatment in parks and estates",
      "Workshop and warehouse maintenance in Sanaiya",
      "Industrial City lighting and roof work",
      "Exterior facade work booked for early starts",
    ],
    faqs: [
      {
        question: "Do you rent boom lifts for palm tree maintenance in Al Ain?",
        answer:
          "Yes. Articulating booms of 16 to 20 m reach the crown of most date palms. Rough-terrain tyres let them work on farm and park ground.",
      },
      {
        question: "Can man lift work continue in Al Ain summer afternoons?",
        answer:
          "Outdoor work pauses for the midday break from mid-June to mid-September. Indoor jobs in shaded workshops can continue, subject to your site's heat-stress plan.",
      },
    ],
  },
}

export function serviceAreaCopyFor(equipment: EquipmentKey, locationSlug: string): ServiceAreaCopy | undefined {
  return copy[`${equipment}:${locationSlug}`]
}
