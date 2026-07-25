export type Faq = { question: string; answer: string }

/** General company FAQs shown on the homepage. */
export const generalFaqs: Faq[] = [
  {
    question: "What areas in the UAE do you cover?",
    answer:
      "We deploy equipment across Abu Dhabi (Musaffah, ICAD, Khalifa Industrial Zone / KIZAD, Mussafah Industrial Area) and Dubai (JAFZA, Dubai Industrial City, Al Quoz, DIP), plus Sharjah and the wider UAE on request. Same-day mobilization is available for most sites within our core coverage areas.",
  },
  {
    question: "Do your rentals include a certified operator?",
    answer:
      "Yes. Every forklift, mobile crane, telehandler, and man lift rental includes a trained, certified operator as standard. Operator-only or self-drive arrangements can also be discussed for clients with in-house certified staff.",
  },
  {
    question: "What rental terms do you offer?",
    answer:
      "We offer flexible daily, weekly, and monthly rental terms with no long-term lock-in required. Long-term project rates are available for construction, oil & gas, and logistics contracts running several months or longer.",
  },
  {
    question: "Can you handle emergency or same-day equipment requests?",
    answer:
      "Yes — our dispatch team operates 24/7 and can typically mobilize equipment to your site within hours for urgent breakdowns, project delays, or unplanned lifts, subject to fleet availability in your area.",
  },
  {
    question: "Is your equipment insured and safety-certified?",
    answer:
      "All equipment in our fleet undergoes regular maintenance and safety inspection, and is covered by comprehensive insurance. Load charts, third-party inspection certificates, and safety documentation are provided for every crane and lifting job.",
  },
  {
    question: "How quickly can I get a quote?",
    answer:
      "Send us your equipment type, capacity, location, and rental duration via WhatsApp or our contact form, and our team will respond with pricing and availability in under 5 minutes during business hours.",
  },
]

/** FAQs specific to the Abu Dhabi / Musaffah location landing page. */
export const abuDhabiFaqs: Faq[] = [
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
]

/** FAQs specific to the Dubai location landing page. */
export const dubaiFaqs: Faq[] = [
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
]
