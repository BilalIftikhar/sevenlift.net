import { Reveal } from "@/components/reveal"
import type { Faq } from "@/lib/faqs"

type FaqListProps = {
  faqs: Faq[]
  className?: string
}

/** Accessible, native <details> accordion shared by every FAQ section site-wide. */
export function FaqList({ faqs, className = "" }: FaqListProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, idx) => (
        <Reveal key={faq.question} delay={idx * 60}>
          <details className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground">
              {faq.question}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  )
}
