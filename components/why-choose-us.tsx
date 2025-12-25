"use client"

import { CheckCircle2, Clock, Award, Headphones } from "lucide-react"

export default function WhyChooseUs() {
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
      description: "ISO-certified machinery with rigorous maintenance ensuring maximum reliability",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personalized account management and technical support throughout your rental",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-black text-sm uppercase tracking-widest">WHY CHOOSE SEVEN LIFT</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Enterprise-Grade Solutions, Built on Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Over 15 years delivering professional lifting solutions with zero compromise on safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-border/50 hover:border-accent/50 hover:scale-105 group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
