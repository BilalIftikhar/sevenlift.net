import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site-config"

export default function ContactSection() {
  return (
    <section className="w-full bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Contact Us Now</p>
          <h2 className="mt-2 text-foreground">Get Your Equipment Today</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg font-medium text-muted-foreground">
            Reach out for instant quotes and immediate equipment availability
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5">
            <a
              href={siteConfig.telHref}
              className="flex w-full gap-4 rounded-xl border-2 border-accent/20 p-6 text-left transition-colors hover:border-accent/50"
            >
              <div className="h-fit rounded-lg bg-accent/10 p-3">
                <Phone size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">Call / WhatsApp</p>
                <p className="mt-1 text-2xl font-extrabold text-accent">{siteConfig.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex w-full gap-4 rounded-xl border-2 border-accent/20 p-6 text-left transition-colors hover:border-accent/50"
            >
              <div className="h-fit rounded-lg bg-accent/10 p-3">
                <Mail size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">Email</p>
                <p className="font-semibold text-foreground">{siteConfig.email}</p>
              </div>
            </a>

            <div className="flex gap-4 rounded-xl border-2 border-accent/20 p-6">
              <div className="h-fit rounded-lg bg-accent/10 p-3">
                <Clock size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">24/7 Available</p>
                <p className="font-semibold text-foreground">Emergency requests welcome anytime</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border-2 border-accent/20 p-6">
              <div className="h-fit rounded-lg bg-accent/10 p-3">
                <MapPin size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">Service Area</p>
                <p className="font-semibold text-foreground">Abu Dhabi, Dubai &amp; All UAE Regions</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
