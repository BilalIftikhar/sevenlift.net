import { Phone, Mail, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { siteConfig, waLink } from "@/lib/site-config"

export type EquipmentModel = {
  capacity: string
  specs: string[]
  price: string
}

export type EquipmentFeature = {
  title: string
  description: string
}

type EquipmentDetailTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  modelsHeading: string
  models: EquipmentModel[]
  featuresEyebrow: string
  featuresHeading: string
  features: EquipmentFeature[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
}

export function EquipmentDetailTemplate({
  eyebrow,
  title,
  intro,
  modelsHeading,
  models,
  featuresEyebrow,
  featuresHeading,
  features,
  ctaHeading,
  ctaSubheading,
  whatsappMessage,
}: EquipmentDetailTemplateProps) {
  const whatsappHref = waLink(whatsappMessage)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
            <h1 className="text-foreground">{title}</h1>
            <p className="max-w-2xl text-lg font-medium text-muted-foreground">{intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Fleet</p>
            <h2 className="text-foreground">{modelsHeading}</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {models.map((model) => (
              <div
                key={model.capacity}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-1 text-3xl font-extrabold text-foreground">{model.capacity}</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-accent">{model.price}</p>
                  </div>

                  <ul className="space-y-3">
                    {model.specs.map((spec) => (
                      <li key={spec} className="flex gap-3 text-sm font-medium text-foreground">
                        <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-accent px-4 py-3 text-center text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">{featuresEyebrow}</p>
            <h2 className="text-foreground">{featuresHeading}</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="font-medium text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">{ctaHeading}</h2>
          <p className="text-xl font-medium text-muted-foreground">{ctaSubheading}</p>

          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={siteConfig.telHref}
              className="flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone size={20} />
              Call Us
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-3 rounded-lg bg-secondary px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary/80"
            >
              <Mail size={20} />
              Email Us
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
