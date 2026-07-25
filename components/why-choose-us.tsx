import { CheckCircle2, Clock, Award, Headphones } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle2,
    title: "Expert Operators",
    description: "Certified professionals with decades of combined lifting experience and safety expertise",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Rapid deployment and emergency support anytime for your urgent lifting needs",
  },
  {
    icon: Award,
    title: "Premium Equipment",
    description: "Rigorously maintained machinery with safety certifications ensuring maximum reliability",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personalized account management and technical support throughout your rental",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Why Choose Seven Lift</p>
          <h2 className="text-foreground">Enterprise-Grade Solutions, Built on Trust</h2>
          <p className="text-lg font-medium text-muted-foreground">
            {"Over 15 years delivering professional lifting solutions with zero compromise on safety"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded-xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <div className="mb-4 w-fit rounded-lg bg-accent/10 p-3">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{reason.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
