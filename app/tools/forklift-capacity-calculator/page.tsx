import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { FaqList } from "@/components/faq-list"
import { ContactForm } from "@/components/contact-form"
import { ForkliftCapacityCalculator } from "@/components/forklift-capacity-calculator"
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { formEquipmentLabel } from "@/lib/trust"
import type { Faq } from "@/lib/faqs"

const path = "/tools/forklift-capacity-calculator"
const description =
  "Free forklift capacity calculator: enter your forklift's data plate figures and the load's size to estimate the capacity at your load's centre."

export const metadata: Metadata = pageMetadata({
  title: "Forklift Capacity Calculator (Load Centre)",
  description,
  path,
  image: "/images/fleet/forklift-warehouse.jpg",
})

const faqs: Faq[] = [
  {
    question: "What is a forklift load centre?",
    answer:
      "It is the horizontal distance from the vertical face of the forks to the load's centre of gravity. Forklift capacity is rated at the load centre printed on the data plate, often 500 mm or 600 mm, and falls when the load's centre is further out.",
  },
  {
    question: "How do I calculate forklift capacity at a longer load centre?",
    answer:
      "A common rule of thumb is rated capacity multiplied by the rated load centre, divided by the actual load centre. A forklift rated at 3,000 kg at 500 mm carries about 1,875 kg at 800 mm. The forklift's load chart gives the exact figure.",
  },
  {
    question: "Does lift height change forklift capacity?",
    answer:
      "Yes. Many forklifts are de-rated at the top of a tall mast, and attachments such as side shifts, clamps or rotators reduce capacity too. The calculator does not include these, so check the data plate for your lift height and attachment.",
  },
  {
    question: "Where do I find the rated load centre?",
    answer:
      "On the forklift's data plate, next to the rated capacity. If the plate shows several capacities for different heights or attachments, use the line that matches how you will use the machine.",
  },
]

const relatedLinks = [
  { title: "Forklift Fleet Specifications", href: "/equipment/forklift" },
  { title: "Forklift Rental in Abu Dhabi", href: "/services/forklift-rental-abu-dhabi" },
  { title: "Forklift Rental in Dubai", href: "/services/forklift-rental-dubai" },
  { title: "Types of Forklifts and Which One Your Job Needs", href: "/blog/types-of-forklifts" },
  { title: "Choosing Forklift Capacity for a Warehouse", href: "/blog/choosing-forklift-capacity-warehouse-musaffah" },
]

export default function ForkliftCapacityCalculatorPage() {
  const url = `${siteConfig.url}${path}`

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Forklift Capacity Calculator", url },
          ]),
          webApplicationSchema({ name: "Forklift Capacity Calculator", description, url }),
          faqSchema(faqs),
        ]}
      />
      <Header />

      <section className="bg-gradient-to-b from-background to-secondary pb-12 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl space-y-4 px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Free Tool</p>
          <h1 className="text-foreground">Forklift Capacity Calculator</h1>
          <p className="max-w-3xl text-lg font-medium text-muted-foreground">
            A forklift only lifts its rated capacity when the load&apos;s centre sits at the rated load centre. Longer
            crates, machinery and odd-shaped loads push the centre further out, and capacity drops. Enter the figures
            from your forklift&apos;s data plate and your load below to estimate what it can carry at your load centre.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <ForkliftCapacityCalculator />
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4">
          <h2 className="text-foreground">How Forklift Load Centre Works</h2>
          <p className="font-medium leading-relaxed text-muted-foreground">
            A counterbalance forklift works like a see-saw with the front wheels as the pivot. The counterweight at the
            back balances the load on the forks. The further the load&apos;s centre of gravity sits from the fork face,
            the more leverage it has, and the less weight the forklift can lift before the rear wheels start to lift.
            That is why every forklift&apos;s data plate states its capacity at a specific load centre.
          </p>
          <p className="font-medium leading-relaxed text-muted-foreground">
            For an evenly spread load, the centre of gravity is half the load&apos;s length along the forks. A standard
            1,200 mm pallet loaded lengthways has its centre at 600 mm. A 1,600 mm crate has its centre at 800 mm. For
            machinery and uneven loads, the centre of gravity is often marked on the item or given in its documents.
          </p>

          <h2 className="pt-4 text-foreground">A Worked Example</h2>
          <p className="font-medium leading-relaxed text-muted-foreground">
            A 2,000 kg crate is 1,600 mm long and evenly loaded, so its centre is at 800 mm. A forklift whose data
            plate reads 3,000 kg at 500 mm can carry about 3,000 × 500 ÷ 800 = 1,875 kg at that centre. The crate is
            too heavy for it, even though 2,000 kg is well under 3,000 kg. The job needs a forklift whose capacity at
            800 mm covers the crate plus a safety margin, confirmed on that forklift&apos;s load chart.
          </p>

          <h2 className="pt-4 text-foreground">What the Calculator Does Not Cover</h2>
          <ul className="space-y-2.5 pl-1">
            {[
              "Reduced capacity at full mast height, shown on the data plate for tall masts",
              "Attachments such as side shifts, fork positioners, clamps and rotators, which reduce capacity",
              "Slopes, soft ground and uneven floors, which reduce stability",
              "Loads that can shift, swing or slide, such as liquids, hanging loads or loose stacks",
            ].map((item) => (
              <li key={item} className="flex gap-3 font-medium leading-relaxed text-foreground">
                <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-medium leading-relaxed text-muted-foreground">
            The calculator scales the rated capacity by the ratio of the rated load centre to your load centre. It is
            a rule-of-thumb planning aid for choosing which forklift to rent, not a substitute for the forklift&apos;s
            own load chart.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">Frequently Asked Questions</h2>
          </Reveal>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:items-start">
          <div className="space-y-5">
            <h2 className="text-foreground">Not Sure Which Forklift to Rent?</h2>
            <p className="font-medium leading-relaxed text-muted-foreground">
              Send the load weight, dimensions and lift height and we will recommend the forklift and quote it, with a
              certified operator if you need one. Diesel and electric forklifts from 3 to 25 ton, delivered across the
              UAE.
            </p>
            <ul className="space-y-3">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
                    {link.title}
                    <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm
            variant="hero"
            heading="Request a Forklift Quote"
            defaultEquipment={formEquipmentLabel.forklift}
            placement="calculator-form"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
