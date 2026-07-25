import { Zap, Package, Calendar, HardHat, Rocket, Wallet } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    title: "Electric & Diesel Options",
    description: "Choose between electric forklifts for indoor operations or diesel for outdoor heavy-duty work",
    icon: Zap,
  },
  {
    title: "Multiple Capacity Ranges",
    description: "Equipment ranging from 3 tons to 500+ tons to match your specific project requirements",
    icon: Package,
  },
  {
    title: "Flexible Rental Terms",
    description: "Short-term daily rentals or long-term agreements with customized pricing",
    icon: Calendar,
  },
  {
    title: "Professional Training",
    description: "Certified operator training and 24/7 maintenance support included",
    icon: HardHat,
  },
  {
    title: "Quick Deployment",
    description: "Rapid equipment delivery and setup across all UAE locations",
    icon: Rocket,
  },
  {
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden charges, best rates for heavy equipment rental",
    icon: Wallet,
  },
]

export default function Features() {
  return (
    <section className="w-full bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 text-center">
          <h2 className="text-foreground">Complete Heavy Equipment Rental Solutions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-muted-foreground">
            Everything you need for efficient material handling and lifting operations
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={idx * 80} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
