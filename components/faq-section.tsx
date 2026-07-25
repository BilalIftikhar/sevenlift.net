import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import type { Faq } from "@/lib/faqs"

type FaqSectionProps = {
  faqs: Faq[]
  eyebrow?: string
  heading?: string
  subheading?: string
}

export function FaqSection({
  faqs,
  eyebrow = "Common Questions",
  heading = "Frequently Asked Questions",
  subheading,
}: FaqSectionProps) {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal className="mb-10 space-y-2 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2 className="text-foreground">{heading}</h2>
          {subheading && <p className="text-lg font-medium text-muted-foreground">{subheading}</p>}
        </Reveal>
        <FaqList faqs={faqs} />
      </div>
    </section>
  )
}
