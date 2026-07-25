import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Request a Quote for Equipment Rental",
  description:
    "Contact Seven Lift General Transport for forklift, mobile crane, telehandler, and man lift rental quotes across Abu Dhabi, Dubai, and the UAE. Call, email, or WhatsApp — available 24/7.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Get In Touch</p>
            <h1 className="text-foreground">Contact Us</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Reach out for instant quotes, equipment inquiries, or to schedule a consultation with our team.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-5">
              <a
                href={siteConfig.telHref}
                className="flex w-full gap-4 rounded-xl border-2 border-accent/20 p-6 text-left transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <Phone size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">Phone / WhatsApp</p>
                  <p className="mt-1 text-2xl font-extrabold text-accent">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex w-full gap-4 rounded-xl border-2 border-accent/20 p-6 text-left transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <Mail size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">Email</p>
                  <p className="font-semibold text-foreground">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex gap-4 rounded-xl border-2 border-accent/20 p-6 transition-all hover:shadow-lg">
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <Clock size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">Availability</p>
                  <p className="font-semibold text-foreground">24/7 Available — Emergency Support</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border-2 border-accent/20 p-6 transition-all hover:shadow-lg">
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <MapPin size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">Service Area</p>
                  <p className="font-semibold text-foreground">Abu Dhabi, Dubai &amp; All UAE Regions — Same-Day Service</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border-2 border-accent/20 p-6 transition-all hover:shadow-lg">
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <MessageCircle size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">Response Time</p>
                  <p className="font-semibold text-foreground">Under 5 Minutes Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10">
              <ContactForm showEquipmentSelect />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
