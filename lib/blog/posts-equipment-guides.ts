import type { BlogPost } from "@/lib/blog/types"

/**
 * Forklift and access guides. Several point at Dubai, Sharjah and Northern
 * Emirates pages, which otherwise get most of their internal links from menus.
 */
export const equipmentGuidePosts: BlogPost[] = [
  {
    slug: "forklift-licence-uae-operator-requirements",
    title: "Do You Need a Forklift Licence in the UAE? What Renters Should Know",
    seoTitle: "Forklift Licence in the UAE: What Renters Need",
    description:
      "The difference between a UAE forklift driving licence and an operator certificate, what sites check at the gate, and how to rent a forklift without one.",
    category: "Forklift Guides",
    datePublished: "2026-10-15",
    readingTime: "6 min read",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift operator moving a pallet in a warehouse",
    content: [
      {
        type: "paragraph",
        text:
          "\"Do I need a forklift licence in the UAE?\" is one of the most common questions we get from companies renting a forklift for the first time. The short answer is that whoever drives the forklift needs the right paperwork, and that there are two different documents people mean when they say \"licence\". This guide explains both, what sites check, and the simplest way to rent a forklift if nobody on your team holds them.",
      },
      { type: "heading", level: 2, text: "Two Different Documents" },
      { type: "heading", level: 3, text: "1. The Forklift Driving Licence" },
      {
        type: "paragraph",
        text:
          "This is a driving licence category issued by the emirate's traffic licensing authority, in the same system as car and truck licences. In Dubai, for example, the RTA licence system includes light forklift and heavy forklift categories, with training through approved driving institutes, an eye test and a road test. Age limits, documents, fees and the weight split between light and heavy forklifts are set by each authority and do change, so check the current requirements with the licensing authority in your emirate or an approved driving institute before you enrol.",
      },
      { type: "heading", level: 3, text: "2. The Operator Certificate" },
      {
        type: "paragraph",
        text:
          "Separately, sites expect the person driving to be trained and certified for the machine. Most Abu Dhabi sites, especially in ICAD, KIZAD and oil and gas facilities, will not let an uncertified operator use a forklift. Which certificate a site accepts, and whether it also wants the driving licence, is set by the site's own HSE rules, so ask before you book.",
      },
      { type: "heading", level: 2, text: "What to Ask the Site" },
      {
        type: "list",
        items: [
          "Which operator licence or certificate does the site accept for this forklift?",
          "Does it need the machine's third-party inspection certificate before arrival?",
          "What induction or gate pass is needed for the operator and the delivery truck?",
          "How far ahead must documents be sent?",
        ],
      },
      {
        type: "paragraph",
        text:
          "Requirements differ from site to site, including between free zones such as [Jebel Ali](/locations/dubai/jebel-ali) and [KIZAD](/locations/abu-dhabi/kizad-khalifa-port) and ordinary industrial areas. Ask the site's HSE or security team before the forklift arrives, not at the gate.",
      },
      { type: "heading", level: 2, text: "Renting Without a Licensed Operator" },
      {
        type: "paragraph",
        text:
          "If nobody on your team holds the right documents, rent the forklift with an operator. We can supply a certified operator with every Seven Lift forklift. Ask for the operator's certificates when you book, so the site can approve them in advance. For a short hire, this saves training your own staff for a machine you only need for a few days or weeks.",
      },
      {
        type: "paragraph",
        text:
          "Self-drive hire is available if your own team is certified. See [forklift rental in Dubai](/services/forklift-rental-dubai), [forklift rental in Abu Dhabi](/services/forklift-rental-abu-dhabi) or [forklift rental in Sharjah](/services/forklift-rental-sharjah) for local delivery details.",
      },
      { type: "heading", level: 2, text: "Check Certificates for Each Machine" },
      {
        type: "paragraph",
        text:
          "Do not assume a forklift certificate covers a telehandler, a man lift or a crane. If a job needs more than one type of machine, check that the operator's certificates name each one and that the site accepts them, or rent each machine with its own operator.",
      },
      { type: "heading", level: 2, text: "Before You Hire: A Short Checklist" },
      {
        type: "list",
        items: [
          "Decide whether you need an operator or will use your own",
          "If using your own, check their licence or certificate covers the forklift class and has not expired",
          "Ask the site what it checks at the gate and how far ahead documents are needed",
          "Send the operator's documents with the booking so nothing holds up delivery",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I rent a forklift in the UAE without a forklift licence?",
        answer:
          "Yes, rent it with one of our certified operators. Self-drive hire is available if your own team is certified.",
      },
      {
        question: "Is a forklift licence from another country valid in the UAE?",
        answer:
          "Do not assume it is. Licence recognition is decided by each emirate's licensing authority, and each site sets which operator certificates it accepts. Check with both before relying on an overseas licence.",
      },
      {
        question: "Does a forklift licence cover a telehandler?",
        answer:
          "Do not assume it does. A telehandler is a different machine, so check that the operator's certificate names telehandlers and that the site accepts it, or rent the telehandler with our operator.",
      },
    ],
    relatedLinks: [
      { title: "Forklift Rental in Dubai", href: "/services/forklift-rental-dubai" },
      { title: "Forklift Rental in Sharjah", href: "/services/forklift-rental-sharjah" },
      { title: "Forklift Fleet Specifications", href: "/equipment/forklift" },
    ],
  },
  {
    slug: "types-of-forklifts",
    title: "Types of Forklifts and Which One Your Job Needs",
    seoTitle: "Types of Forklifts: Which One to Rent",
    description:
      "Counterbalance diesel and electric, side loaders, rough-terrain and heavy forklifts compared, with a table to match each type of forklift to the job.",
    category: "Forklift Guides",
    datePublished: "2026-10-15",
    readingTime: "6 min read",
    heroImage: "/images/fleet/side-loader.jpg",
    heroImageAlt: "Side loader forklift carrying long materials",
    content: [
      {
        type: "paragraph",
        text:
          "\"Forklift\" covers a family of machines that look similar and do quite different jobs. Rent the wrong type and you get a machine that cannot get down your aisles, cannot cope with the yard surface, or cannot carry long loads safely. This guide compares the types of forklifts most UAE warehouses, yards and sites rent, and explains when each one fits.",
      },
      { type: "heading", level: 2, text: "Counterbalance Diesel Forklifts" },
      {
        type: "paragraph",
        text:
          "The standard forklift: forks at the front, a heavy counterweight at the back, and a diesel engine. It is the default for outdoor yards, loading bays, construction material and container work, and for long shifts where refuelling is quicker than recharging. Capacities run from 3 ton for general pallet work up to 25 ton for heavy industrial loads.",
      },
      { type: "heading", level: 2, text: "Counterbalance Electric Forklifts" },
      {
        type: "paragraph",
        text:
          "The same layout with a battery and electric drive. Electric forklifts produce no exhaust and are much quieter, so they suit indoor warehouses, cold stores and food or pharmaceutical sites where fumes are not allowed. They need charging time and power on site. See [electric forklift rental](/services/electric-forklift-rental) for the details.",
      },
      { type: "heading", level: 2, text: "Side Loaders" },
      {
        type: "paragraph",
        text:
          "A side loader carries its load along its side rather than in front. That makes it the right machine for long loads such as steel bars, pipes, timber and profiles, which would be unstable and hard to steer across the front of a normal forklift. Fabrication yards and steel stockists use them to move long material down narrow lanes.",
      },
      { type: "heading", level: 2, text: "Rough-Terrain Forklifts" },
      {
        type: "paragraph",
        text:
          "Rough-terrain forklifts have large, deep-tread tyres, higher ground clearance and often four-wheel drive. They work on sand, gravel and unfinished plots where a standard forklift would sink or stall. If the job also needs height or forward reach, for example placing materials on upper floors, a [telehandler](/services/telehandler-rental) is usually the better machine.",
      },
      { type: "heading", level: 2, text: "Heavy Forklifts" },
      {
        type: "paragraph",
        text:
          "7 to 10 ton forklifts handle container work, and 15 to 25 ton forklifts move machinery and steel coils. They are large machines that need firm ground and space to manoeuvre. Check the rated load centre on the data plate when you compare capacities, because it is not the same on every machine.",
      },
      { type: "heading", level: 2, text: "Comparison Table" },
      {
        type: "table",
        headers: ["Type", "Best for", "Not suited to"],
        rows: [
          ["Counterbalance diesel", "Yards, loading bays, containers, long shifts", "Enclosed spaces with poor ventilation"],
          ["Counterbalance electric", "Indoor warehouses, cold stores, food and pharma", "Rough or wet ground, very heavy loads"],
          ["Side loader", "Long steel, pipes, timber in narrow lanes", "Standard palletised goods"],
          ["Rough-terrain forklift", "Sand, gravel and unfinished plots", "Finished indoor floors"],
          ["Heavy forklift (7 to 25 ton)", "Containers, machinery, steel coils", "Tight aisles and weak floors"],
        ],
      },
      { type: "heading", level: 2, text: "What About Reach Trucks?" },
      {
        type: "paragraph",
        text:
          "Reach trucks and very-narrow-aisle machines are designed for high racking in tight aisles. If your racking was designed for them, tell us the aisle width and top beam height and we will advise on what fits.",
      },
      { type: "heading", level: 2, text: "Choosing Between Types" },
      {
        type: "list",
        items: [
          "Where will it work? Indoor, outdoor, or both, and on what floor or ground",
          "What is the heaviest load, and how long is it along the forks?",
          "How high is the top lift, and how wide are the aisles?",
          "How many hours a day will it run?",
          "Are there fume, noise or floor-marking restrictions?",
        ],
      },
      {
        type: "paragraph",
        text:
          "Once you know the type, size it with our [forklift capacity calculator](/tools/forklift-capacity-calculator) or our guide to [choosing forklift capacity](/blog/choosing-forklift-capacity-warehouse-musaffah). We rent forklifts across the country, including [forklift rental in Sharjah](/services/forklift-rental-sharjah) and [forklift rental in Ras Al Khaimah](/services/forklift-rental-ras-al-khaimah).",
      },
    ],
    faqs: [
      {
        question: "Which types of forklift does Seven Lift rent?",
        answer:
          "Diesel and electric counterbalance forklifts from 3 to 25 ton, side loaders for long loads, and rough-terrain forklifts for sand and unfinished ground, with or without a certified operator.",
      },
      {
        question: "When should I rent a side loader instead of a forklift?",
        answer:
          "When the load is long, such as steel bars, pipes or timber. A side loader carries long loads along its side, which keeps them stable and lets the machine travel down narrow lanes.",
      },
      {
        question: "Can an electric forklift work outdoors?",
        answer:
          "On firm, dry, paved surfaces, yes. For rough ground, sand, long outdoor shifts or heavy loads, a diesel or rough-terrain forklift is the better choice.",
      },
    ],
    relatedLinks: [
      { title: "Forklift Fleet Specifications", href: "/equipment/forklift" },
      { title: "Electric Forklift Rental", href: "/services/electric-forklift-rental" },
      { title: "Forklift Rental in Ras Al Khaimah", href: "/services/forklift-rental-ras-al-khaimah" },
    ],
  },
  {
    slug: "container-unloading-forklift-guide",
    title: "How to Unload a Shipping Container: Equipment and Methods",
    seoTitle: "Container Unloading: Which Forklift to Use",
    description:
      "How to unload a 20 ft or 40 ft shipping container at a dock or at ground level, which forklift fits inside, and when you need a crane instead.",
    category: "Forklift Guides",
    datePublished: "2026-10-15",
    readingTime: "6 min read",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Shipping containers stacked in a UAE port yard",
    content: [
      {
        type: "paragraph",
        text:
          "Container unloading looks simple until the container arrives and the forklift does not fit through the doors, the trailer is too high to reach, or the heaviest crate is at the back. The right equipment depends on three things: whether you have a loading dock, how the goods are packed, and how heavy the heaviest item is. This guide covers each case.",
      },
      { type: "heading", level: 2, text: "Know the Container" },
      {
        type: "paragraph",
        text:
          "Standard 20 ft and 40 ft containers have a door opening of roughly 2.3 m wide by 2.3 m high. High-cube containers are about 30 cm taller, with a door height of roughly 2.6 m. Inside, the forklift has to clear the door frame and the roof with its mast lowered, and lift loads high enough to stack or clear the floor without hitting the roof.",
      },
      { type: "heading", level: 2, text: "Method 1: At a Loading Dock" },
      {
        type: "paragraph",
        text:
          "With a dock and a dock leveller, the container floor is at warehouse floor height and a forklift drives straight in. This is the simplest method. The forklift needs a low lowered mast height to pass through the door and full free lift, meaning the forks can rise without the mast extending upwards. Forklifts set up this way are often described as having a container mast. Electric forklifts suit this work well where the dock is indoors.",
      },
      { type: "heading", level: 2, text: "Method 2: At Ground Level With a Ramp" },
      {
        type: "paragraph",
        text:
          "Without a dock, a mobile yard ramp bridges the gap between the ground and the container floor while it is still on the trailer. The forklift drives up the ramp and into the container. Ramps have a rated capacity, which must cover the forklift and its heaviest load together, and the trailer must be secured so it cannot move. Check the ramp's rating plate before the first lift.",
      },
      { type: "heading", level: 2, text: "Method 3: Unloading From the Doors" },
      {
        type: "paragraph",
        text:
          "If goods are palletised and near the doors, a forklift on the ground can sometimes reach the first pallets with its forks raised to trailer-bed height, then use extension forks or a pallet jack inside the container to bring the rest forward. It is slower and only works for lighter, well-packed loads, but it avoids the need for a dock or ramp.",
      },
      { type: "heading", level: 2, text: "When You Need a Crane Instead" },
      {
        type: "paragraph",
        text:
          "To lift a loaded container off a trailer and set it on the ground, use a crane. Taking a container off a trailer is typical work for a [25 ton crane](/services/25-ton-crane-rental-abu-dhabi), sized by the container's weight and the radius from where the crane stands. A crane is also the answer for very heavy single items, such as machinery, that are too heavy for the container floor or the ramp to carry a forklift with the load.",
      },
      { type: "heading", level: 2, text: "Loose and Floor-Loaded Cargo" },
      {
        type: "paragraph",
        text:
          "Cartons stacked loose on the container floor are usually unloaded by hand onto pallets at the doors, with a forklift taking the full pallets away. Planning the labour matters more than the machine here. If you receive loose cargo regularly, ask your shipper about palletising or slip sheets.",
      },
      { type: "heading", level: 2, text: "What to Tell Us Before We Send a Forklift" },
      {
        type: "list",
        items: [
          "Container size: 20 ft, 40 ft or high-cube",
          "Dock, ramp or ground level",
          "How goods are packed: pallets, crates, loose cartons or long items",
          "Weight and size of the heaviest item, and where it sits in the container",
          "How many containers, and how often",
        ],
      },
      {
        type: "paragraph",
        text:
          "For local delivery details, see our pages for [Jebel Ali](/locations/dubai/jebel-ali), [KIZAD and Khalifa Port](/locations/abu-dhabi/kizad-khalifa-port), [Sharjah Industrial Area](/locations/sharjah/industrial-area) and [forklift rental in Dubai](/services/forklift-rental-dubai).",
      },
    ],
    faqs: [
      {
        question: "What size forklift do I need to unload a container?",
        answer:
          "It depends on the heaviest pallet or crate and on whether the forklift has to drive inside the container. Send the container type, the heaviest item and whether you have a dock or ramp, and we will recommend a forklift. Any ramp must be rated for the forklift and load together.",
      },
      {
        question: "Can a forklift drive inside a shipping container?",
        answer:
          "Yes, if its lowered mast height clears the door and it has enough free lift to raise loads inside without the mast hitting the roof. It also needs a dock or a rated ramp to reach the container floor.",
      },
      {
        question: "How do I get a full container off a truck?",
        answer:
          "Use a crane rather than a forklift for a loaded container. Taking a container off a trailer is typical work for a 25 ton mobile crane, and the lift is checked against the crane's load chart for the container's weight and radius.",
      },
    ],
    relatedLinks: [
      { title: "Forklift Rental in Dubai", href: "/services/forklift-rental-dubai" },
      { title: "Equipment Rental in Sharjah Industrial Area", href: "/locations/sharjah/industrial-area" },
      { title: "25 Ton Crane Rental", href: "/services/25-ton-crane-rental-abu-dhabi" },
    ],
  },
  {
    slug: "man-lift-rental-exhibitions-events",
    title: "Man Lifts for Exhibition and Event Build-Up in the UAE",
    seoTitle: "Man Lift Rental for Exhibitions & Events",
    description:
      "Choosing scissor and boom lifts for exhibition stands, rigging and event build-up in UAE venues: indoor rules, delivery slots, operators and hire planning.",
    category: "Equipment Guides",
    datePublished: "2026-10-15",
    readingTime: "6 min read",
    heroImage: "/images/fleet/scissor-lift.jpg",
    heroImageAlt: "Scissor lift raised for installation work indoors",
    content: [
      {
        type: "paragraph",
        text:
          "Exhibition and event build-up runs on tight windows, at venues such as ADNEC in Abu Dhabi, Dubai World Trade Centre, Expo City Dubai and Expo Centre Sharjah, and stand builders, riggers and AV crews often need to work at height at the same time. The right man lift, delivered to the right door at the right time, saves hours. This guide covers how to choose and plan access equipment for exhibition and event work.",
      },
      { type: "heading", level: 2, text: "Read the Venue Rules First" },
      {
        type: "paragraph",
        text:
          "Check the rules the venue and the show organiser set for contractors before you book. Look for what they say about diesel or battery-electric machines indoors, tyre type, operator certificates, harnesses, registering equipment before build-up, and floor loading limits. Send those rules to your equipment supplier with the booking.",
      },
      { type: "heading", level: 2, text: "Scissor Lifts for Most Hall Work" },
      {
        type: "paragraph",
        text:
          "Electric [scissor lifts](/services/scissor-lift-rental) suit much of the work in a hall: hanging banners, fixing lighting, building stand structures and dressing walls. They are quiet, produce no exhaust and have a large platform for people and materials. Their limit is that they only go straight up, so they need clear floor space under the work.",
      },
      { type: "heading", level: 2, text: "Boom Lifts for Reaching Over Stands" },
      {
        type: "paragraph",
        text:
          "When the work is above a stand that is already built, or above seating, staging or displays, a [boom lift](/services/boom-lift-rental) reaches up and over without the base standing underneath. Articulating booms suit tight halls, and telescopic booms give the most outreach for high rigging points. Indoors, choose an electric or hybrid boom that meets the venue's rules.",
      },
      { type: "heading", level: 2, text: "Measuring What You Need" },
      {
        type: "list",
        items: [
          "Highest working point, such as the truss or the top of the stand, then subtract about 2 m to get the platform height needed",
          "Outreach: how far the work is from the nearest point the machine can stand",
          "Platform load: people, tools and the heaviest item lifted, such as a lighting fixture or signage panel",
          "Doors and routes: width and height of the hall doors, ramps and service corridors",
        ],
      },
      {
        type: "paragraph",
        text:
          "Our guide to [platform height and working height](/blog/platform-height-vs-working-height-man-lift) explains how to turn the height of the job into the right machine size.",
      },
      { type: "heading", level: 2, text: "Plan Around Build-Up and Breakdown" },
      {
        type: "paragraph",
        text:
          "Most event jobs have two busy windows, build-up and breakdown, with the show days in between. Ask for a price both ways: two short hires with an off-hire during the show, or one hire covering the whole period. Book the delivery time with the venue and share it with your supplier, so the machine arrives when the hall is open to you.",
      },
      { type: "heading", level: 2, text: "Operators and Safety on a Busy Floor" },
      {
        type: "list",
        items: [
          "Check whether the venue or organiser requires certified operators, and bring the certificates",
          "Follow the venue's and your company's harness rules for boom and scissor lifts",
          "Keep a clear zone around the machine; exhibition floors are crowded with other trades",
          "Never drive a raised machine over cables, ramps or floor covers that have not been checked",
        ],
      },
      {
        type: "paragraph",
        text:
          "Seven Lift rents scissor and boom lifts, including electric scissor lifts with non-marking tyres for finished floors, with a certified operator if you need one. Our dispatch team operates 24/7. See [man lift rental in Dubai](/services/man-lift-rental-dubai) and [man lift rental in Abu Dhabi](/services/man-lift-rental-abu-dhabi) for local details.",
      },
    ],
    faqs: [
      {
        question: "Which man lift is best for indoor exhibition halls?",
        answer:
          "For work directly overhead on a clear floor, an electric scissor lift with non-marking tyres. To reach over a built stand or displays, a boom lift that meets the venue's rules for indoor machines.",
      },
      {
        question: "Can you deliver at night for event build-up?",
        answer:
          "Our dispatch team operates 24/7, so deliveries outside normal hours can be arranged. Tell us the venue's delivery slot when you book.",
      },
      {
        question: "Do I need a certified man lift operator for an exhibition?",
        answer:
          "Check the venue's and organiser's rules for contractors. If your crew is not certified for the machine, rent the lift with one of our certified operators.",
      },
    ],
    relatedLinks: [
      { title: "Scissor Lift Rental", href: "/services/scissor-lift-rental" },
      { title: "Man Lift Rental in Dubai", href: "/services/man-lift-rental-dubai" },
      { title: "Boom Lift Rental", href: "/services/boom-lift-rental" },
    ],
  },
  {
    slug: "forklift-daily-inspection-checklist",
    title: "Forklift Daily Inspection Checklist (Free to Copy)",
    seoTitle: "Forklift Daily Pre-Use Inspection Checklist",
    description:
      "A forklift daily pre-use inspection checklist for UAE sites, with engine-off and engine-on checks, summer heat checks, and what to do when a check fails.",
    category: "Safety & Compliance",
    datePublished: "2026-10-15",
    readingTime: "5 min read",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift parked in a warehouse ready for its daily check",
    content: [
      {
        type: "paragraph",
        text:
          "A forklift daily inspection is a short walk-around and function check by the operator at the start of each shift, before the forklift carries any load. Your site may require it to be recorded on its own form. Use the checklist below as it is, or copy it into your own form. It applies to diesel and electric counterbalance forklifts, rented or owned, alongside the checks in the manufacturer's operator manual.",
      },
      { type: "heading", level: 2, text: "Before You Start: Engine Off" },
      {
        type: "table",
        caption: "Walk around the machine with the engine off and the forks lowered.",
        headers: ["Check", "Look for"],
        rows: [
          ["Tyres and wheels", "Cuts, chunks missing, low pressure on pneumatic tyres, loose wheel nuts"],
          ["Forks", "Cracks, bends, uneven tips, heel worn thin, locking pins in place"],
          ["Mast and chains", "Damaged rails, loose or kinked chains, missing chain pins"],
          ["Hydraulics", "Leaks or wet patches on cylinders, hoses and the floor under the machine"],
          ["Overhead guard and backrest", "Bent, cracked or missing parts"],
          ["Fluids", "Engine oil, coolant, hydraulic oil and fuel; for electric units, battery charge and connectors"],
          ["Data plate", "Present and readable, with the capacity and load centre visible"],
          ["Seat and seat belt", "Belt latches and retracts; seat secure"],
        ],
      },
      { type: "heading", level: 2, text: "Then: Engine On" },
      {
        type: "table",
        caption: "Run each function in a clear area before carrying any load.",
        headers: ["Check", "Look for"],
        rows: [
          ["Gauges and warning lights", "No warning lights after start-up"],
          ["Horn, lights, beacon, reverse alarm", "All working"],
          ["Service brake and parking brake", "Stops smoothly; parking brake holds"],
          ["Steering", "Smooth with no excess play"],
          ["Lift, lower, tilt and side shift", "Smooth movement, no jerking or unusual noise"],
          ["Inching pedal", "Works as expected"],
        ],
      },
      { type: "heading", level: 2, text: "Extra Checks in the UAE Summer" },
      {
        type: "list",
        items: [
          "Radiator and cooling fins free of dust and debris",
          "Coolant at the correct level, checked only when the engine is cool",
          "Tyre pressures checked in the morning before heat raises them",
          "Battery water level on lead-acid electric forklifts",
          "Seat and controls not too hot to handle after the machine stands in the sun",
        ],
      },
      {
        type: "paragraph",
        text:
          "Our guide to [running equipment through the summer](/blog/summer-heat-heavy-equipment-abu-dhabi-midday-break) covers heat stress for operators and the midday break rules.",
      },
      { type: "heading", level: 2, text: "When to Replace Forks" },
      {
        type: "paragraph",
        text:
          "Forks wear at the heel, where the blade meets the shank. A widely used rule is that a fork should be taken out of service when the heel is worn by 10 percent of its original thickness, because strength falls faster than thickness. It is measured with fork calipers. In a daily check, report any fork that looks thinner at the heel than the others, or has a crack, a bend or a tip higher than its pair.",
      },
      { type: "heading", level: 2, text: "When a Check Fails" },
      {
        type: "list",
        items: [
          "Do not use the forklift, even for a short move",
          "Remove the key and tag the machine out of service",
          "Report the fault to your supervisor and record it on the checklist",
          "For a rented forklift, call the rental company for a repair or a replacement",
        ],
      },
      {
        type: "paragraph",
        text:
          "When you rent from Seven Lift, breakdown replacement is included in every contract: call or WhatsApp us and we arrange the repair or a replacement machine. See [forklift rental in Abu Dhabi](/services/forklift-rental-abu-dhabi) or [forklift rental in Ajman](/services/forklift-rental-ajman) for hire options.",
      },
    ],
    faqs: [
      {
        question: "Who should do the daily check on a rented forklift?",
        answer:
          "The operator who will use it, at the start of each shift, recorded on the site's form if the site has one.",
      },
      {
        question: "What should I do if a rented forklift fails its daily check?",
        answer:
          "Do not use it. Tag it out of service, record the fault and call the rental company. Breakdown replacement is included in every Seven Lift contract.",
      },
      {
        question: "Is the daily check the same as a third-party inspection?",
        answer:
          "No. The daily check is a quick pre-use check by the operator. A third-party inspection is a thorough examination by an independent inspector at set intervals, recorded on a certificate.",
      },
    ],
    relatedLinks: [
      { title: "Forklift Rental in Abu Dhabi", href: "/services/forklift-rental-abu-dhabi" },
      { title: "Forklift Rental in Ajman", href: "/services/forklift-rental-ajman" },
      { title: "TPI Certificates for Cranes and Forklifts", href: "/blog/third-party-inspection-certificate-crane-forklift-uae" },
    ],
  },
  {
    slug: "platform-height-vs-working-height-man-lift",
    title: "Platform Height vs Working Height: Sizing a Man Lift",
    seoTitle: "Platform Height vs Working Height in Man Lifts",
    description:
      "The difference between platform height and working height, how outreach and platform load change the choice, and how to size a scissor or boom lift.",
    category: "Equipment Guides",
    datePublished: "2026-10-15",
    readingTime: "5 min read",
    heroImage: "/images/fleet/aerial-bucket-truck.jpg",
    heroImageAlt: "Aerial work platform raised to height",
    content: [
      {
        type: "paragraph",
        text:
          "Man lift sizes are quoted as heights, but not always the same height. One brochure lists working height, another platform height, and a 12 m machine from one supplier can be a 10 m machine from another. Mixing them up is the most common reason a lift arrives on site and comes up short. This guide explains the difference and how to size a lift from the job.",
      },
      { type: "heading", level: 2, text: "The Two Heights" },
      {
        type: "paragraph",
        text:
          "Platform height is the height of the platform floor at full extension, the surface the operator stands on. Working height is the height a person can work at from that platform, and by industry convention is the platform height plus about 2 m. A lift with a 10 m platform height therefore has a working height of about 12 m.",
      },
      {
        type: "quote",
        text: "Working height = platform height + about 2 m. Always ask which one a quote is giving you.",
      },
      { type: "heading", level: 2, text: "Sizing From the Job" },
      {
        type: "table",
        caption: "Platform height needed, before allowing for outreach or obstructions.",
        headers: ["Highest point of the work", "Working height needed", "Platform height needed"],
        rows: [
          ["6 m ceiling", "6 m", "About 4 m"],
          ["10 m racking or lighting", "10 m", "About 8 m"],
          ["14 m facade or signage", "14 m", "About 12 m"],
          ["20 m steel structure", "20 m", "About 18 m"],
          ["30 m structure", "30 m", "About 28 m"],
        ],
      },
      { type: "heading", level: 2, text: "Outreach Changes Everything" },
      {
        type: "paragraph",
        text:
          "A scissor lift only goes straight up, so its platform must be directly under the work. If the base cannot stand there, because of a stand, a planter, a slope or the building's own footprint, you need a [boom lift](/services/boom-lift-rental) and its outreach figure. Boom lifts lose height as they reach out, so check the machine's range chart for both height and distance together, not just its headline height.",
      },
      { type: "heading", level: 2, text: "Platform Load" },
      {
        type: "paragraph",
        text:
          "Every platform has a rated load in kilograms, which covers people, tools and materials together. Add up the people, their tools and any panels or fittings before choosing a machine, and compare the total with the platform rating of the [scissor lift](/services/scissor-lift-rental) or boom lift you are considering.",
      },
      { type: "heading", level: 2, text: "Ground and Access" },
      {
        type: "list",
        items: [
          "Slab or finished floor: electric machines with non-marking tyres",
          "Sand, gravel or an unfinished site: rough-terrain diesel machines",
          "Doors, ramps and lifts on the way in: check width, height and weight limits",
          "Slopes: check the machine's limits before raising it anywhere that is not firm and level",
        ],
      },
      { type: "heading", level: 2, text: "Three Numbers to Send With a Booking" },
      {
        type: "list",
        items: [
          "The highest point of the work, measured from the ground where the lift will stand",
          "The horizontal distance from where the lift can stand to the work",
          "The total weight on the platform: people, tools and materials",
        ],
      },
      {
        type: "paragraph",
        text:
          "With those we will match the machine and confirm both its platform height and working height. See our [man lift fleet](/equipment/man-lift), [man lift rental in Sharjah](/services/man-lift-rental-sharjah), or the guide comparing [scissor lifts and boom lifts](/blog/scissor-lift-vs-boom-lift-abu-dhabi).",
      },
    ],
    faqs: [
      {
        question: "What is the difference between platform height and working height?",
        answer:
          "Platform height is the height of the platform floor at full extension. Working height is the height a person can reach from it, conventionally the platform height plus about 2 m.",
      },
      {
        question: "What size scissor lift do I need for a 10 m ceiling?",
        answer:
          "A platform height of about 8 m, which gives a working height of about 10 m. Check the platform load and the floor first, and allow a little extra if the work is above fittings or racking.",
      },
      {
        question: "Why does a boom lift reach less height when it reaches out?",
        answer:
          "As the boom extends outwards, the machine's stability and the boom's geometry limit how high it can go. The range chart shows the height available at each outreach distance.",
      },
    ],
    relatedLinks: [
      { title: "Man Lift & Aerial Platform Fleet", href: "/equipment/man-lift" },
      { title: "Man Lift Rental in Sharjah", href: "/services/man-lift-rental-sharjah" },
      { title: "Scissor Lift Rental", href: "/services/scissor-lift-rental" },
    ],
  },
]
