import type { Metadata } from "next"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { cityLinksForEquipment } from "@/lib/service-areas"

const path = "/services/man-lift-access"

export const metadata: Metadata = pageMetadata({
  title: "Manlift Rental UAE | Scissor & Boom Lifts, 10 to 50 m",
  description:
    "Manlift rental across the UAE: scissor lifts, boom lifts and man baskets from 10 to 50 m working height, in every emirate. Certified operator available.",
  path,
  image: "/images/fleet/scissor-lift.jpg",
  keywords: [
    "man lift rental UAE",
    "manlift rental UAE",
    "man basket rental UAE",
    "aerial platform rental UAE",
    "boom lift rental UAE",
    "aerial work platform rental",
  ],
})

const faqs = [
  {
    question: "Is a manlift the same as a man lift or a man basket?",
    answer:
      "Yes, they are names for the same family of machines. \"Manlift\" and \"man lift\" both mean a powered platform that lifts people to height, usually a scissor lift or a boom lift. A man basket is a work cage lifted by a telehandler or crane; we supply those too when a self-propelled platform cannot reach the spot.",
  },
  {
    question: "What is the difference between a scissor lift and a boom lift?",
    answer:
      "Scissor lifts move straight up and down and are ideal for flat indoor/outdoor surfaces, while boom lifts articulate and extend outward, giving reach over obstacles for tasks like facade or roofline maintenance.",
  },
  {
    question: "What working heights are available?",
    answer:
      "Our man lift fleet covers 10m scissor lifts through 50m boom lifts, suitable for everything from warehouse racking maintenance to high-rise facade and MEP installation work.",
  },
  {
    question: "Are your aerial platforms certified and safe to operate?",
    answer:
      "Yes. Every unit includes guardrails, harness anchor points, and safety interlocks, and we provide trained, certified operators or safety briefings for your own site personnel.",
  },
  {
    question: "Do you deliver man lifts to every emirate?",
    answer:
      "Yes. We deliver scissor and boom lifts to all seven emirates. Lead times vary by emirate, and each emirate's own man lift page lists the local delivery details.",
  },
]

export default function ManLiftAccessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Man Lift & Aerial Access", url: `${siteConfig.url}${path}` },
          ]),
          serviceSchema({
            name: "Man Lift & Aerial Access Rental",
            serviceType: "Aerial work platform rental",
            description: "Scissor lift and boom lift rental from 10m to 50m working height across the UAE.",
            areaServed: ["United Arab Emirates"],
            url: `${siteConfig.url}${path}`,
          }),
          faqSchema(faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow="Man Lift & Aerial Access · UAE-Wide"
        title="Man Lift & Aerial Access Rental Across the UAE"
        intro="Manlift rental across the UAE: scissor lifts and boom lifts from 10 m to 50 m working height for safe maintenance, installation, and construction work at height, in every emirate. Each emirate has its own man lift page with local details; this page covers the platform types and how to choose one."
        heroImage="/images/fleet/scissor-lift.jpg"
        heroImageAlt="Scissor lift being used for elevated maintenance work in a UAE warehouse"
        localContext={{
          heading: "Choosing a Platform: Three Questions",
          paragraphs: [
            "How high is the work, and is anything in the way? Straight up with clear floor below means a scissor lift. Reaching over racking, pipework or a canopy means an articulating boom. Long straight reach to a facade or roofline means a telescopic boom.",
            "What is the floor? Finished slabs indoors need electric units with non-marking tyres. Compacted yards and site ground need rough-terrain diesel machines with four-wheel drive or outriggers.",
            "Who is on the platform, and for how long? Tell us the crew size and tools, so the platform capacity is right, and whether you need our certified operator or will use your own trained staff.",
          ],
        }}
        specs={[
          { label: "Working Height", value: "10–50m" },
          { label: "Platform Types", value: "Scissor & Boom" },
          { label: "Coverage", value: "All 7 Emirates" },
          { label: "Support", value: "24/7" },
        ]}
        bulletGroups={[
          {
            title: "Aerial Platform Types",
            items: [
              "10 to 18 m scissor lifts for indoor and flat-surface work",
              "26m articulating boom lifts for obstacle access",
              "50m telescopic boom lifts for maximum height",
              "Electric units available for indoor/dust-free sites",
            ],
          },
          {
            title: "Common Applications",
            items: [
              "Warehouse racking & lighting maintenance",
              "Facade cleaning and building maintenance",
              "MEP, HVAC & electrical installation work",
              "Steel structure and roofline construction access",
            ],
          },
          {
            title: "Safety & Support",
            items: [
              "Guardrails, harness points & safety interlocks",
              "Certified, trained operators available",
              "Daily equipment inspection and maintenance",
              "Flexible daily, weekly, monthly rental terms",
            ],
          },
        ]}
        areasHeading="Man Lift Rental by Emirate"
        areas={[
          ...cityLinksForEquipment("man-lift"),
          { name: "Scissor Lift Rental", href: "/services/scissor-lift-rental" },
          { name: "Boom Lift Rental", href: "/services/boom-lift-rental" },
          { name: "All Coverage Areas", href: "/locations" },
          { name: "Full Man Lift Fleet Specs", href: "/equipment/man-lift" },
        ]}
        faqs={faqs}
        ctaHeading="Need Safe Access at Height?"
        ctaSubheading="Tell us your required working height and site type. We will recommend the right platform."
        whatsappMessage="Hi Seven Lift, I need man lift / aerial platform rental in the UAE."
        equipment="man-lift"
        formEquipment="Man Lift / Scissor Lift / Boom Lift"
      />
    </>
  )
}
