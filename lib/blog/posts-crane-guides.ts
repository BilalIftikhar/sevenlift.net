import type { BlogPost } from "@/lib/blog/types"

/**
 * Crane and lift-planning guides. Each targets one question buyers search
 * before they book a crane, and links into the capacity page or district page
 * the answer points to.
 */
export const craneGuidePosts: BlogPost[] = [
  {
    slug: "what-size-crane-do-i-need",
    title: "What Size Crane Do I Need? Load, Radius and Height Explained",
    seoTitle: "What Size Crane Do I Need? A Sizing Guide",
    description:
      "Why a 25 ton crane rarely lifts 25 tons, the three numbers that decide crane size, and how to match a lift to a 25, 50, 100, 200 or 500 ton mobile crane.",
    category: "Crane Guides",
    datePublished: "2026-10-15",
    readingTime: "7 min read",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane with its boom raised over a construction site",
    content: [
      {
        type: "paragraph",
        text:
          "\"What size crane do I need?\" is the first question on almost every lift we quote, and the honest answer is that the weight of the load is only one third of it. A crane's tonnage is the most it can lift in its best position: boom fully retracted, load close in, outriggers fully out. Move the load a few metres further away and that number falls quickly. This guide explains the three numbers that decide crane size, so you can describe a lift in a way that gets the right machine first time.",
      },
      { type: "heading", level: 2, text: "Why a 25 Ton Crane Rarely Lifts 25 Tons" },
      {
        type: "paragraph",
        text:
          "Every mobile crane is named after its maximum rated capacity, which applies at the shortest radius the crane can work at, a few metres from its centre of rotation. Real lifts almost never happen there. The crane has to stand clear of the building, the trench or the truck, and the load has to travel to where it is needed. Further out, a crane may be able to lift only a small fraction of the figure on its side. That is why a light rooftop unit lifted far from the crane can need a bigger crane than a much heavier generator set down right beside it.",
      },
      { type: "heading", level: 2, text: "The Three Numbers That Size a Crane" },
      { type: "heading", level: 3, text: "1. The Total Lifted Weight" },
      {
        type: "paragraph",
        text:
          "Start with the load's weight from the manufacturer's data plate, the delivery note or the drawings, not an estimate. Then add everything else hanging from the hook: the hook block, slings, shackles, spreader beams and any lifting frame. Rigging on a heavy lift can add several hundred kilograms. The crane's capacity has to cover the total, not just the item.",
      },
      { type: "heading", level: 3, text: "2. The Radius" },
      {
        type: "paragraph",
        text:
          "Radius is the horizontal distance from the crane's centre of rotation to the centre of the load, measured where the load is picked up and where it is set down. Use the larger of the two. On a tight site, the crane's own set-up position decides the radius: if the crane can only stand on the road outside a plot, the radius is the distance from that road to the far side of the roof, not to the near edge.",
      },
      { type: "heading", level: 3, text: "3. The Height and Obstructions" },
      {
        type: "paragraph",
        text:
          "The boom has to be long enough to lift the load over the highest point in its path, such as a parapet, a roof edge, a pipe rack or a neighbouring building, with clearance for the rigging below the hook. More height means more boom, and more boom means less capacity at the same radius. Note anything the boom must clear on the way, including overhead power lines.",
      },
      { type: "heading", level: 2, text: "Typical Jobs for Each Crane Class" },
      {
        type: "table",
        caption: "A starting point only. The load chart for the actual lift decides the crane.",
        headers: ["Crane class", "Typical jobs", "Counterweight"],
        rows: [
          ["25 ton", "Generators, AC units, containers off trailers", "Carried on the crane"],
          ["50 ton", "Steel portal frames, precast beams, machinery moves, tank placement", "Usually carried on the crane"],
          ["100 ton", "Heavy machinery, long-radius precast, lifts over a building from the street", "Partly on board, the rest on a second truck"],
          ["200 ton", "Large plant items, tank and vessel lifts, steel or plant on tall buildings", "On 2 to 3 separate trucks"],
          ["500 ton", "Process modules, bridge girders, large transformers, tower crane erection", "By truck convoy"],
        ],
      },
      {
        type: "paragraph",
        text:
          "Each class has its own page with worked examples: [25 ton crane rental](/services/25-ton-crane-rental-abu-dhabi), [50 ton crane rental](/services/50-ton-crane-rental-abu-dhabi), [100 ton crane rental](/services/100-ton-crane-rental-abu-dhabi), [200 ton crane rental](/services/200-ton-crane-rental-abu-dhabi) and [500 ton crane rental](/services/500-ton-crane-rental-uae).",
      },
      { type: "heading", level: 2, text: "A Worked Example" },
      {
        type: "paragraph",
        text:
          "A contractor needs to lift a 3.5 ton rooftop unit onto a two-storey building. The rigging and hook block add about 0.5 ton, so the crane must carry 4 ton in total. The crane can only stand on the service road, which puts the set-down point 18 metres away, and the boom must clear a 9 metre parapet. The check is the chart value at 18 metres, read on the next larger radius row, with enough boom to clear the parapet. If a smaller crane's chart shows less than 4 ton there, a larger class is needed, even though the unit itself is light. If the crane could stand inside the plot at 8 metres, the smaller crane might be enough, which shows how much the set-up position matters.",
      },
      {
        type: "paragraph",
        text:
          "Our guide on [how to read a crane load chart](/blog/how-to-read-crane-load-chart) walks through this check step by step.",
      },
      { type: "heading", level: 2, text: "Do Not Forget the Set-Up Space" },
      {
        type: "list",
        items: [
          "Outrigger footprint: larger cranes need a wider, firmer pad than many sites expect",
          "Counterweight: 100 ton and larger cranes often arrive with counterweight on separate trucks, which need room to unload",
          "Access: gate widths, turning circles, ramps and overhead height on the way in",
          "Ground: backfill, trenches, buried services and soft sand under the outrigger positions",
          "Tail swing: the counterweight swings behind the crane and needs a clear zone",
        ],
      },
      { type: "heading", level: 2, text: "What to Send for a Crane Recommendation" },
      {
        type: "list",
        items: [
          "Load weight and dimensions, with photos or a data sheet",
          "Pick-up and set-down positions, ideally marked on a site plan or a screenshot from a map",
          "Lift height and the highest obstruction in the path",
          "Where the crane can stand, and what the ground is (asphalt, interlock, compacted sand, open desert)",
          "The site location and preferred date",
        ],
      },
      {
        type: "paragraph",
        text:
          "With those details we confirm the figure from the exact crane's load chart before we quote, and survey the site first for heavy lifts. For lifts anywhere in the country, see [mobile crane rental across the UAE](/services/mobile-crane-rental-uae) or send the details on WhatsApp.",
      },
    ],
    faqs: [
      {
        question: "Can a 25 ton crane lift 25 tons?",
        answer:
          "Only at its shortest radius, a few metres from the crane, with the boom retracted and outriggers fully extended. Further out the safe capacity is a fraction of the rated figure, so the load chart for the actual radius and boom length decides what it can lift.",
      },
      {
        question: "What weight should I give when asking for a crane?",
        answer:
          "Give the item's actual weight from its data plate or documents, plus its dimensions. The crane supplier adds the hook block and rigging, but tell them about any lifting frame or spreader beam you plan to supply, because that hangs from the hook too.",
      },
      {
        question: "Can you choose the crane size for me?",
        answer:
          "Yes. Send the load, the pick-up and set-down positions, the height and where the crane can stand. We confirm the figure from the exact crane's load chart before we quote.",
      },
    ],
    relatedLinks: [
      { title: "Mobile Crane Rental Across the UAE", href: "/services/mobile-crane-rental-uae" },
      { title: "50 Ton Crane Rental", href: "/services/50-ton-crane-rental-abu-dhabi" },
      { title: "Mobile Crane Fleet Specifications", href: "/equipment/mobile-crane" },
    ],
  },
  {
    slug: "how-to-read-crane-load-chart",
    title: "How to Read a Mobile Crane Load Chart",
    description:
      "A step-by-step guide to reading a mobile crane load chart: radius, boom length, deductions, configuration and the common mistakes that overload cranes.",
    category: "Crane Guides",
    datePublished: "2026-10-15",
    readingTime: "8 min read",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane boom extended for a lift",
    content: [
      {
        type: "paragraph",
        text:
          "A load chart is the table that tells a crane operator how much the crane can lift in a given configuration. It is the single most important document on a lift, and it is also where most planning errors start. You do not need to be an operator to understand one. Knowing how to read a mobile crane load chart lets you check a supplier's recommendation, spot an undersized crane before it arrives, and ask the right questions in a lift plan review.",
      },
      { type: "heading", level: 2, text: "What a Load Chart Shows" },
      {
        type: "paragraph",
        text:
          "Most charts are a grid. Down the side is the radius: the horizontal distance from the crane's centre of rotation to the load. Across the top is the boom length. Each cell shows the maximum load, in tonnes, the crane can lift at that radius with that boom length. A blank cell means the combination is not possible, usually because a long boom cannot be lowered far enough to reach a short radius, or a short boom cannot reach that far out.",
      },
      {
        type: "paragraph",
        text:
          "Every chart applies to one configuration, stated in its heading: outriggers fully extended or partly extended, the counterweight fitted, and the working area, such as 360 degrees or over the rear only. A crane can have many charts. Reading the wrong one is a classic mistake.",
      },
      { type: "heading", level: 2, text: "An Example Chart" },
      {
        type: "table",
        caption: "Illustrative chart for a fictional crane, in tonnes. Never use these figures for a real lift.",
        headers: ["Radius (m)", "11 m boom", "20 m boom", "29 m boom", "38 m boom"],
        rows: [
          ["3", "50.0", "n/a", "n/a", "n/a"],
          ["5", "36.0", "30.0", "n/a", "n/a"],
          ["8", "22.5", "21.0", "17.5", "n/a"],
          ["12", "n/a", "13.0", "12.0", "10.0"],
          ["16", "n/a", "8.5", "8.0", "7.2"],
          ["20", "n/a", "n/a", "5.8", "5.4"],
          ["26", "n/a", "n/a", "3.6", "3.4"],
        ],
      },
      {
        type: "paragraph",
        text:
          "The headline 50 tonnes appears in one cell only. At 20 metres the same crane manages under 6 tonnes, and at 26 metres under 4. That drop is normal for every mobile crane and is the reason the crane's name is a poor guide to what it can do on your site.",
      },
      { type: "heading", level: 2, text: "Reading the Chart Step by Step" },
      { type: "heading", level: 3, text: "Step 1: Work Out the Total Load" },
      {
        type: "paragraph",
        text:
          "Add the item's weight, the hook block, slings, shackles and any spreader beam. Many charts also require you to deduct stowed or rigged attachments such as a fly jib. Check the chart's notes, which list the deductions for that crane. Suppose the item weighs 4.0 tonnes and the hook block and rigging add 0.5 tonnes: the total is 4.5 tonnes.",
      },
      { type: "heading", level: 3, text: "Step 2: Find the Radius, Then Round Up" },
      {
        type: "paragraph",
        text:
          "Measure the largest radius in the lift, at pick-up or set-down. If it falls between two rows, use the larger radius, never the smaller one, and never average between rows. A lift at 18 metres in the example chart is read on the 20 metre row.",
      },
      { type: "heading", level: 3, text: "Step 3: Pick a Boom Length That Clears the Height" },
      {
        type: "paragraph",
        text:
          "Choose the boom length that gives enough height to clear the highest obstruction with the rigging below the hook. If you need more than 20 metres of boom at 20 metres of radius, you are in the 29 metre column, which shows 5.8 tonnes.",
      },
      { type: "heading", level: 3, text: "Step 4: Compare and Apply a Margin" },
      {
        type: "paragraph",
        text:
          "4.5 tonnes against a chart value of 5.8 tonnes is about 78 percent of capacity. That is inside the chart, but your site's HSE rules may class a lift above a set percentage of chart capacity as a critical lift, with extra planning and approval. Our [lift plan checklist](/blog/crane-lifting-plan-checklist-uae) covers what that involves.",
      },
      { type: "heading", level: 2, text: "Structural Limits and Stability Limits" },
      {
        type: "paragraph",
        text:
          "Many charts shade some cells or separate them with a bold line. On one side, capacity is limited by the strength of the boom and structure. On the other, it is limited by stability, meaning the crane would start to tip before anything broke. Neither limit gives any warning margin to rely on. A crane overloaded on the stability side can tip over without any structural failure at all, which is why ground conditions and outrigger set-up matter as much as the chart.",
      },
      { type: "heading", level: 2, text: "Common Load Chart Mistakes" },
      {
        type: "list",
        items: [
          "Reading the full-outrigger chart when the outriggers can only be partly extended on site",
          "Forgetting the hook block, rigging or a stowed jib in the total load",
          "Using the pick-up radius when the set-down radius is larger",
          "Rounding the radius down to the next row, or interpolating between rows",
          "Ignoring the wind speed limit stated for the configuration",
          "Using a chart from a brochure rather than the chart for the crane that will actually arrive",
        ],
      },
      { type: "heading", level: 2, text: "Charts and the Crane's Safety System" },
      {
        type: "paragraph",
        text:
          "Modern cranes carry a rated capacity indicator, often called an LMI, that compares the load on the hook with the chart for the configuration the operator has entered. It is a vital backstop, but only as good as the configuration entered and the ground under the outriggers. Planning still starts with the chart on paper.",
      },
      {
        type: "paragraph",
        text:
          "Before we quote a crane, we confirm the figure from the exact crane's load chart, and the load chart comes with the machine. See our [mobile crane fleet](/equipment/mobile-crane), or read [what size crane you need](/blog/what-size-crane-do-i-need) if you are still at the sizing stage.",
      },
    ],
    faqs: [
      {
        question: "Do I include the hook block in the load weight?",
        answer:
          "Yes, unless the chart's notes say otherwise. The hook block, slings, shackles, spreader beams and any stowed jib all count against capacity, and the notes on each chart list the deductions for that crane.",
      },
      {
        question: "What if my radius falls between two rows on the chart?",
        answer:
          "Read the row for the next larger radius. Interpolating between rows or rounding down can overstate the crane's capacity, and on the stability side of the chart that can tip the crane.",
      },
      {
        question: "Can I use a load chart from the manufacturer's brochure?",
        answer:
          "Only for rough early sizing. The lift plan must use the chart for the specific crane and configuration that will be on site, because counterweight, boom options and outrigger settings vary between machines of the same model.",
      },
    ],
    relatedLinks: [
      { title: "Mobile Crane Fleet Specifications", href: "/equipment/mobile-crane" },
      { title: "100 Ton Crane Rental", href: "/services/100-ton-crane-rental-abu-dhabi" },
      { title: "Mobile Crane Rental Across the UAE", href: "/services/mobile-crane-rental-uae" },
    ],
  },
  {
    slug: "mobile-crane-hire-cost-uae",
    title: "Mobile Crane Hire Cost in the UAE: How a Quote Is Built",
    seoTitle: "Mobile Crane Hire Cost in the UAE Explained",
    description:
      "What goes into a mobile crane hire quote in the UAE, from crane class and minimum hire to crew, mobilization and permits, and how to compare quotes fairly.",
    category: "Cost & Strategy",
    datePublished: "2026-10-15",
    readingTime: "7 min read",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Port yard with containers and lifting equipment in the UAE",
    content: [
      {
        type: "paragraph",
        text:
          "Two crane quotes for the same lift can look very different, and the cheaper one is not always cheaper by the time the invoice arrives. Mobile crane hire cost in the UAE depends on more than the crane's daily rate. Mobilization, crew, minimum charges, permits and waiting time can each add as much as the crane itself. This guide breaks a crane quote into its parts so you can compare offers line by line.",
      },
      { type: "heading", level: 2, text: "The Crane Class and Configuration" },
      {
        type: "paragraph",
        text:
          "The biggest single factor is the size of the crane the lift needs, which comes from the load, radius and height rather than the load alone. Our guide on [what size crane you need](/blog/what-size-crane-do-i-need) explains why. From about 100 ton, part or all of the counterweight travels on separate trucks, so the cost of a big crane is partly the cost of getting it ready to lift.",
      },
      { type: "heading", level: 2, text: "Minimum Hire and How Time Is Counted" },
      {
        type: "paragraph",
        text:
          "Ask whether a quote has a minimum charge, and how time is counted: from the crane leaving the yard, from arrival on site, or from the start of rigging. A short lift can cost more than its lifting time suggests once travel and set-up are included. Ask too how overtime, night work and weekend or public holiday work are charged.",
      },
      { type: "heading", level: 2, text: "Mobilization and Travel" },
      {
        type: "paragraph",
        text:
          "Travel to and from site is usually charged separately or built into the minimum. A crane based near the site costs less to mobilize. From our Musaffah yard, sites in ICAD and Mohammed Bin Zayed City are a short drive, while jobs in [Dubai](/services/mobile-crane-rental-dubai), [Sharjah](/services/mobile-crane-rental-sharjah) or the Northern Emirates involve more travel time. On a monthly hire, mobilization happens twice, so distance matters much less.",
      },
      { type: "heading", level: 2, text: "The Crew" },
      {
        type: "paragraph",
        text:
          "Seven Lift supplies every mobile crane with a certified operator, and a certified rigger and banksman to suit the lift. When you compare quotes, check whether each one includes the same crew, prices them separately, or assumes you provide them, and that the certificates match what your site requires.",
      },
      { type: "heading", level: 2, text: "Lift Planning and Engineering" },
      {
        type: "paragraph",
        text:
          "Every crane lift needs a lift plan, and critical lifts need a more detailed one. Some clients, particularly in oil and gas, require critical lift plans to be reviewed by an approved third party. Heavy lifts may also need a site survey and a ground check. Ask whether planning is included or charged, and who signs it off. Our [lift plan checklist](/blog/crane-lifting-plan-checklist-uae) shows what a complete plan contains.",
      },
      { type: "heading", level: 2, text: "Permits, Escorts and Road Movement" },
      {
        type: "paragraph",
        text:
          "Large cranes and counterweight convoys may need road movement permits, and some sites and free zones require gate passes and induction before a crane can enter. Lifts from a public road may need a road permit. These take time to arrange, so give your supplier as much notice as you can and ask who applies for each one.",
      },
      { type: "heading", level: 2, text: "A Side-by-Side Checklist" },
      {
        type: "table",
        caption: "Ask each supplier to confirm every line in writing.",
        headers: ["Cost item", "What to ask"],
        rows: [
          ["Crane rate", "Hourly, daily or monthly, and for exactly which crane"],
          ["Minimum charge", "How many hours, and when the clock starts and stops"],
          ["Mobilization", "Included, or a fixed charge each way"],
          ["Counterweight and assist crane", "Included for cranes that need them"],
          ["Crew", "Operator, rigger and banksman included, with certificates"],
          ["Lift plan", "Included, and whether critical lifts cost extra"],
          ["Overtime and nights", "Rate per hour outside standard hours"],
          ["Waiting time", "Charged if the site is not ready when the crane arrives"],
          ["Mats and ground", "Outrigger mats supplied, ground preparation by whom"],
          ["Permits", "Who applies, and whether fees are included"],
        ],
      },
      { type: "heading", level: 2, text: "Ways to Keep Crane Costs Down" },
      {
        type: "list",
        items: [
          "Give accurate weights and radii, so the crane is not oversized as a precaution",
          "Have the load rigged-ready, the ground prepared and the area cleared before the crane arrives",
          "Group several lifts into one visit rather than booking the crane twice",
          "Ask for a monthly rate if the crane will be on site for weeks",
          "Book heavy cranes early, because their lifts are planned and mobilized well in advance",
        ],
      },
      {
        type: "paragraph",
        text:
          "Seven Lift does not publish crane rates because the right price depends on the lift. Send the load, location and date for a quote, and ask us about any line above that is not clear. For heavy lifts, see [200 ton crane rental](/services/200-ton-crane-rental-abu-dhabi) and [500 ton crane rental](/services/500-ton-crane-rental-uae).",
      },
    ],
    faqs: [
      {
        question: "Why doesn't Seven Lift publish crane rates?",
        answer:
          "Because the rate depends on the crane class, the hire period, the rigging crew, the lift plan and permits, and the travel distance from our Musaffah yard. A quote based on the actual lift is the only figure worth comparing.",
      },
      {
        question: "Is the crane operator included in the hire?",
        answer:
          "At Seven Lift, yes. Every mobile crane is supplied with a certified operator, with a certified rigger and banksman to suit the lift. Confirm the crew with any supplier you compare.",
      },
      {
        question: "Is there a minimum charge for crane hire?",
        answer:
          "Ask for it on every quote you compare, along with how time is counted. The crane has to travel to site and set up even for a short lift, so these terms change the final cost of a short job more than the hourly rate does.",
      },
    ],
    relatedLinks: [
      { title: "Mobile Crane Rental Across the UAE", href: "/services/mobile-crane-rental-uae" },
      { title: "Mobile Crane Rental in Dubai", href: "/services/mobile-crane-rental-dubai" },
      { title: "25 Ton Crane Rental", href: "/services/25-ton-crane-rental-abu-dhabi" },
    ],
  },
  {
    slug: "crane-lifting-plan-checklist-uae",
    title: "Crane Lift Plans in the UAE: What Goes Into One",
    seoTitle: "Crane Lift Plan Checklist for UAE Sites",
    description:
      "What a crane lift plan contains, when a lift counts as critical, who prepares and approves it, and how lift planning differs between Abu Dhabi and Dubai sites.",
    category: "Safety & Compliance",
    datePublished: "2026-10-15",
    readingTime: "8 min read",
    heroImage: "/images/site/about-safety-officer.jpg",
    heroImageAlt: "Safety officer reviewing documents on a UAE site",
    content: [
      {
        type: "paragraph",
        text:
          "On most UAE sites, no crane lifts until a lift plan has been written and approved. The plan is how the crane supplier, the main contractor and the client's HSE team agree on what is being lifted, with which crane, from where, by whom and under what conditions. A good plan is short, specific and checked against the real crane. This guide sets out what a lift plan contains, when a lift becomes critical, and what to have ready so approval does not hold up the job.",
      },
      { type: "heading", level: 2, text: "Routine Lifts and Critical Lifts" },
      {
        type: "paragraph",
        text:
          "Lifts are usually graded by risk. A routine lift is a straightforward lift with a known load, well inside the crane's capacity, in a clear area. A critical lift has a higher consequence if anything goes wrong, and gets a more detailed plan and a more senior sign-off. Exact criteria come from the site's HSE system or the client's standard, and the thresholds differ between them, but lifting standards commonly treat a lift as critical when:",
      },
      {
        type: "list",
        items: [
          "The load uses a high percentage of the crane's chart capacity at the planned radius",
          "Two or more cranes share the load (a tandem lift)",
          "People are lifted in a basket or platform suspended from the crane",
          "The load passes over live plant, pipework or energised equipment",
          "The load's weight or centre of gravity is hard to determine, or changes during the lift",
        ],
      },
      { type: "heading", level: 2, text: "What a Lift Plan Contains" },
      { type: "heading", level: 3, text: "The Load" },
      {
        type: "paragraph",
        text:
          "Weight, dimensions, centre of gravity and lifting points, with the source of the weight. Add the rigging: slings, shackles and spreader beams, each with its rated working load limit.",
      },
      { type: "heading", level: 3, text: "The Crane and Its Configuration" },
      {
        type: "paragraph",
        text:
          "The crane model, counterweight, outrigger extension, boom length and radius, with the relevant extract from the load chart and the percentage of capacity used. If you want to check this part yourself, our guide on [reading a crane load chart](/blog/how-to-read-crane-load-chart) explains how.",
      },
      { type: "heading", level: 3, text: "The Ground" },
      {
        type: "paragraph",
        text:
          "The crane's set-up position, the outrigger loads, the mat sizes and the allowable bearing pressure of the ground. Buried services, trenches and recent backfill near the outriggers must be identified. We cover this in detail in [outrigger mats and ground bearing pressure](/blog/crane-outrigger-mats-ground-bearing-pressure).",
      },
      { type: "heading", level: 3, text: "The Area and the Sequence" },
      {
        type: "paragraph",
        text:
          "A drawing showing the crane position, load path, set-down point, exclusion zone and any obstructions, followed by the lift sequence step by step, including how the load will be controlled with tag lines and how it will be landed and unhooked.",
      },
      { type: "heading", level: 3, text: "People and Communication" },
      {
        type: "paragraph",
        text:
          "Named roles with their certificates: the person in charge of the lift, the crane operator, the rigger and the banksman or signaller. State how they communicate (radio channel or hand signals) and who can stop the lift.",
      },
      { type: "heading", level: 3, text: "Stop Conditions" },
      {
        type: "paragraph",
        text:
          "The maximum wind speed for the configuration, taken from the crane's chart, plus any site limits on visibility, heat or time of day. In the UAE, the summer midday work ban and shamal winds both belong in this section. Our guide on [running equipment through the summer](/blog/summer-heat-heavy-equipment-abu-dhabi-midday-break) covers the heat side.",
      },
      { type: "heading", level: 2, text: "Who Prepares and Who Approves" },
      {
        type: "paragraph",
        text:
          "The crane supplier usually prepares the crane side of the plan, because it knows the machine and its charts. The contractor adds site information such as access, ground data, other trades and permits. The client's HSE team or consultant approves it, often through a permit to work. Some clients, particularly in oil and gas, also require critical lift plans to be reviewed by an approved third party. Ask early which approvals your site needs, because they set the lead time.",
      },
      { type: "heading", level: 2, text: "Abu Dhabi, Dubai and Client Sites" },
      {
        type: "paragraph",
        text:
          "Abu Dhabi sites generally follow the OSHAD-SF framework, and contractors in ICAD, KIZAD and Khalifa Port expect documented lift plans as standard. Dubai sites follow Dubai Municipality requirements. Some clients apply their own lifting standards and forms on top of these. When the client has its own form, use it: it is the one the approver will check against.",
      },
      { type: "heading", level: 2, text: "Documents to Have Ready" },
      {
        type: "list",
        items: [
          "Third-party inspection certificate for the crane and the rigging gear",
          "Operator, rigger and banksman certificates",
          "Load chart extract for the planned configuration",
          "Site drawing with crane position and exclusion zone",
          "Ground bearing information or a ground assessment",
          "Permit to work and any gate pass or induction records",
        ],
      },
      {
        type: "paragraph",
        text:
          "Seven Lift's lift planner prepares the method statement, lift plan and risk assessment for crane jobs and sends them to your HSE team before mobilization, with critical lift plans for heavy and complex work. See [200 ton crane rental](/services/200-ton-crane-rental-abu-dhabi) and [500 ton crane rental](/services/500-ton-crane-rental-uae) for the lifts that usually need them, or our earlier guide to [crane safety rules in Abu Dhabi](/blog/mobile-crane-safety-guidelines-regulations-abu-dhabi).",
      },
    ],
    faqs: [
      {
        question: "Who writes the lift plan when I hire a crane?",
        answer:
          "Usually the crane supplier writes the crane side, with site information from the contractor, and the client's HSE team or consultant approves it. At Seven Lift, our lift planner prepares the lift plan and sends it for approval before the crane mobilizes.",
      },
      {
        question: "When is a crane lift considered critical?",
        answer:
          "Each site's HSE system sets the criteria, but common triggers are a high percentage of chart capacity, tandem lifts, lifting over occupied areas or live plant, lifting people, and loads of uncertain weight. A critical lift gets a more detailed plan and a more senior sign-off.",
      },
      {
        question: "How long does a lift plan take to prepare?",
        answer:
          "It depends on the lift. Critical lifts take longer than routine ones because they can need a site survey, ground data and third-party review, so give us the lift date when you ask for a quote and allow time for approvals.",
      },
    ],
    relatedLinks: [
      { title: "200 Ton Crane Rental", href: "/services/200-ton-crane-rental-abu-dhabi" },
      { title: "Equipment Rental in Ruwais & Al Dhafra", href: "/locations/abu-dhabi/ruwais-al-dhafra" },
      { title: "Mobile Crane Rental in Abu Dhabi", href: "/services/mobile-crane-rental-abu-dhabi" },
    ],
  },
  {
    slug: "crane-outrigger-mats-ground-bearing-pressure",
    title: "Outrigger Mats and Ground Bearing Pressure: Preparing a Site for a Crane",
    seoTitle: "Crane Outrigger Mats & Ground Bearing Pressure",
    description:
      "How to work out crane ground bearing pressure, size outrigger mats, and prepare UAE ground such as sand, backfill and interlock paving before a crane arrives.",
    category: "Crane Guides",
    datePublished: "2026-10-15",
    readingTime: "7 min read",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Heavy machinery being moved on a prepared site",
    content: [
      {
        type: "paragraph",
        text:
          "A crane can be perfectly sized, inspected and operated, and still tip because the ground under one outrigger gives way. A significant share of crane incidents start with the ground rather than the machine, and the ground can be checked before the crane arrives. This guide explains ground bearing pressure in plain terms, shows how outrigger mats reduce it, and lists the ground conditions on UAE sites that need checking before a crane sets up.",
      },
      { type: "heading", level: 2, text: "What Ground Bearing Pressure Means" },
      {
        type: "paragraph",
        text:
          "When a crane lifts, its weight, the counterweight and the load are carried by the outriggers. As the crane slews, most of that weight can shift onto one or two of them. Ground bearing pressure is that outrigger force divided by the area it rests on. The smaller the area, the higher the pressure. A bare outrigger pad is small, so the pressure under it can be far more than many surfaces can carry.",
      },
      { type: "heading", level: 2, text: "A Simple Worked Example" },
      {
        type: "paragraph",
        text:
          "Suppose the lift plan shows a maximum outrigger load of 30 tonnes. On a 1.2 m by 1.2 m mat, the area is 1.44 square metres. 30 tonnes is about 294 kilonewtons, so the pressure is about 204 kilonewtons per square metre (kPa). Double the mat to 2.0 m by 2.0 m, an area of 4 square metres, and the pressure falls to about 74 kPa. The crane and the load have not changed. Only the area has.",
      },
      {
        type: "paragraph",
        text:
          "The other half of the check is what the ground can safely carry, known as the allowable bearing pressure. That figure comes from a ground investigation, a geotechnical engineer or, for slabs and podiums, a structural engineer. If the pressure under the mat is higher than the allowable bearing pressure, you need a bigger mat, a different set-up position, or ground improvement.",
      },
      { type: "heading", level: 2, text: "Choosing Outrigger Mats" },
      {
        type: "list",
        items: [
          "Size: chosen from the outrigger load and the ground's allowable bearing pressure, not by habit",
          "Material: timber, steel or composite mats, each rated for a maximum load",
          "Condition: no cracks, rot or bending, and a level surface under the full mat",
          "Placement: the outrigger pad centred on the mat, and the mat bearing evenly with no voids underneath",
          "Stacking: mats should not be stacked loosely to gain height unless the arrangement is designed for it",
        ],
      },
      { type: "heading", level: 2, text: "Ground Conditions to Watch on UAE Sites" },
      { type: "heading", level: 3, text: "Loose Sand and Open Desert Plots" },
      {
        type: "paragraph",
        text:
          "Dry sand looks firm until it is loaded at a point. On new plots in areas such as [Al Wathba](/locations/abu-dhabi/al-wathba) and [Al Shamkha](/locations/abu-dhabi/al-shamkha-riyadh-city), a compacted pad or large mats are normally needed under each outrigger.",
      },
      { type: "heading", level: 3, text: "Coastal Ground and Reclaimed Land" },
      {
        type: "paragraph",
        text:
          "Coastal areas, quaysides and reclaimed land can have a firm surface over weaker layers, and salt flats (sabkha) can lose strength when wet. Port and quayside lifts at [KIZAD and Khalifa Port](/locations/abu-dhabi/kizad-khalifa-port) or [Mina Zayed](/locations/abu-dhabi/mina-zayed) should use the operator's ground data or a quay load limit.",
      },
      { type: "heading", level: 3, text: "Backfill, Trenches and Buried Services" },
      {
        type: "paragraph",
        text:
          "Recently backfilled trenches, manholes, drainage lines and cable routes are weak points that are easy to miss under a finished surface. Check service drawings and walk the set-up area before the crane arrives.",
      },
      { type: "heading", level: 3, text: "Interlock Paving, Kerbs and Slabs" },
      {
        type: "paragraph",
        text:
          "Interlock paving can move or sink under an outrigger, and what lies underneath is often unknown. Kerbs and slab edges should never sit under an outrigger. Basement roofs, podium decks and suspended slabs need a structural engineer's confirmation before any crane stands on them.",
      },
      { type: "heading", level: 2, text: "A Ground Check Before Mobilization" },
      {
        type: "list",
        items: [
          "Mark the planned crane position and all four outrigger points on a site drawing",
          "Get the maximum outrigger load from the lift plan for that crane and configuration",
          "Confirm the allowable bearing pressure, or ask for a ground assessment",
          "Check service drawings for anything buried near the outriggers",
          "Prepare a level, compacted pad where the ground is loose or uneven",
          "Agree the mat sizes and who supplies them",
        ],
      },
      {
        type: "paragraph",
        text:
          "Seven Lift checks the outrigger loads against the ground for crane jobs and supplies outrigger mats where the ground needs them. For heavier lifts, see [100 ton crane rental](/services/100-ton-crane-rental-abu-dhabi), or read our [lift plan checklist](/blog/crane-lifting-plan-checklist-uae) for the rest of the planning.",
      },
    ],
    faqs: [
      {
        question: "Do you supply outrigger mats with your cranes?",
        answer:
          "Yes. Outrigger mats come with our cranes where the ground needs them, such as sand and unfinished plots, and a ground-bearing check is standard practice on our crane jobs.",
      },
      {
        question: "How do I find the allowable bearing pressure of my site?",
        answer:
          "It comes from the site's ground investigation or a geotechnical engineer. For basement roofs, podiums and other slabs, a structural engineer must confirm the load the slab can carry.",
      },
      {
        question: "Can a crane set up on interlock paving?",
        answer:
          "Sometimes, with large mats and confirmation that there are no voids, trenches or services underneath. It needs checking case by case, and a different position or ground preparation may be the safer choice.",
      },
    ],
    relatedLinks: [
      { title: "100 Ton Crane Rental", href: "/services/100-ton-crane-rental-abu-dhabi" },
      { title: "Equipment Rental in KIZAD & Khalifa Port", href: "/locations/abu-dhabi/kizad-khalifa-port" },
      { title: "Equipment Rental in Al Wathba", href: "/locations/abu-dhabi/al-wathba" },
    ],
  },
  {
    slug: "third-party-inspection-certificate-crane-forklift-uae",
    title: "Third-Party Inspection Certificates for Cranes and Forklifts in the UAE",
    seoTitle: "TPI Certificates for Cranes & Forklifts, UAE",
    description:
      "What a third-party inspection (TPI) certificate covers, who issues it in the UAE, how often lifting equipment is inspected, and how to check one is genuine.",
    category: "Safety & Compliance",
    datePublished: "2026-10-15",
    readingTime: "6 min read",
    heroImage: "/images/site/about-safety-officer.jpg",
    heroImageAlt: "Inspector checking lifting equipment paperwork",
    content: [
      {
        type: "paragraph",
        text:
          "The first thing a gate officer or HSE inspector asks for when a crane, forklift or man lift arrives on a UAE site is its third-party inspection certificate, usually called the TPI certificate. Without a valid one, the machine does not work, however urgent the job. This guide explains what the certificate covers, who issues it, how often it is renewed and how to check the one you are handed.",
      },
      { type: "heading", level: 2, text: "What a TPI Certificate Is" },
      {
        type: "paragraph",
        text:
          "A TPI certificate is the record of a thorough examination of a piece of lifting equipment by an inspection body that is independent of the owner. The inspector checks the machine's structure, lifting mechanisms, safety devices and controls, and may carry out a load test. If it passes, the body issues a certificate stating the safe working load and the date the next examination is due.",
      },
      { type: "heading", level: 2, text: "Who Issues Them in the UAE" },
      {
        type: "paragraph",
        text:
          "Certificates are issued by inspection companies. Many are accredited as inspection bodies to ISO/IEC 17020 by the Emirates National Accreditation System (ENAS), with a published scope that lists the equipment types and standards they inspect against. Some clients, such as oil and gas operators, require approved third-party inspectors, so check which inspection companies your client accepts before mobilizing to their site.",
      },
      { type: "heading", level: 2, text: "What the Certificate Should Show" },
      {
        type: "list",
        items: [
          "Equipment type, make, model and serial or fleet number",
          "Safe working load, and any limits or conditions on use",
          "Date of examination and date the next examination is due",
          "Whether a load test was carried out, and the test load",
          "Inspector's name and the inspection company's details and accreditation",
          "A clear statement that the equipment is fit for use",
        ],
      },
      { type: "heading", level: 2, text: "How Often Equipment Is Inspected" },
      {
        type: "paragraph",
        text:
          "The interval depends on the type of equipment, the rules that apply to the site and the client's own standard, and it can differ between a crane, a man lift and the slings and shackles used with them. The certificate states when the next examination is due. Go by that date and by the site's rules, and ask the site's HSE team if you are unsure which interval applies.",
      },
      { type: "heading", level: 2, text: "The Certificate Is One Document of Several" },
      {
        type: "table",
        headers: ["Document", "What it covers"],
        rows: [
          ["TPI certificate", "The machine has passed a thorough examination for its rated load"],
          ["Rigging gear certificates", "Slings, shackles and spreader beams"],
          ["Operator certificate", "The operator is trained and certified for that machine"],
          ["Load chart", "Capacity in the configuration used"],
          ["Daily inspection record", "Pre-use checks done each shift"],
          ["Insurance", "Third-party liability for the equipment"],
        ],
      },
      { type: "heading", level: 2, text: "How to Check a Certificate Is Genuine" },
      {
        type: "list",
        items: [
          "Match the serial or fleet number on the certificate to the plate on the machine",
          "Check the next due date has not passed and will not pass during your hire",
          "Check the safe working load matches the machine and the job",
          "Look up the inspection company's accreditation and scope",
          "If anything looks wrong, call the inspection company and quote the certificate number",
        ],
      },
      { type: "heading", level: 2, text: "Where Certificates Matter Most" },
      {
        type: "paragraph",
        text:
          "Oil and gas facilities in [Ruwais and Al Dhafra](/locations/abu-dhabi/ruwais-al-dhafra), port areas at [KIZAD and Khalifa Port](/locations/abu-dhabi/kizad-khalifa-port) and free zones such as [Jebel Ali](/locations/dubai/jebel-ali) each have their own entry and HSE procedures, so ask the site what it needs before the machine travels. A certificate that expires mid-hire can stop a machine in the middle of a job, so check due dates against the full hire period.",
      },
      {
        type: "paragraph",
        text:
          "Third-party inspection certificates, operator licences and load charts are supplied with every [mobile crane](/equipment/mobile-crane), [forklift](/services/forklift-rental-abu-dhabi) and [man lift](/services/man-lift-access) we rent. Ask for copies when you book, so your HSE team can approve them before the machine arrives, and check the due dates cover your hire period.",
      },
    ],
    faqs: [
      {
        question: "How often do cranes and forklifts need third-party inspection in the UAE?",
        answer:
          "It depends on the equipment type, the site's rules and the client's standard. Every certificate states the date the next examination is due, so check that date covers your whole hire period.",
      },
      {
        question: "Can I see the TPI certificate before the machine arrives?",
        answer:
          "Yes, ask for copies when you book. The certificates come with the machine, and for crane jobs the crew's certificates are sent with the lift plan before mobilization.",
      },
      {
        question: "What happens if a certificate expires during the hire?",
        answer:
          "The machine should stop work until it is re-examined. Give your supplier the full hire period when you book, so they can confirm the certificate covers it or plan the re-examination in advance.",
      },
    ],
    relatedLinks: [
      { title: "Mobile Crane Fleet Specifications", href: "/equipment/mobile-crane" },
      { title: "Equipment Rental in Jebel Ali", href: "/locations/dubai/jebel-ali" },
      { title: "Man Lift & Aerial Access Rental", href: "/services/man-lift-access" },
    ],
  },
]
