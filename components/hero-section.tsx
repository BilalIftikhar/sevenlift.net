import { Phone, ShieldCheck, Clock3, BadgeCheck } from "lucide-react"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

export default function HeroSection() {
  const whatsappHref = waLink("Hi Seven Lift, I am interested in equipment rental across the UAE.")

  return (
    <section className="relative w-full overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/site/port-container-yard.jpg"
          alt="Heavy equipment operating at a UAE port and industrial yard"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="space-y-7">
          <span className="animate-slide-up inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            Abu Dhabi · Dubai · UAE-Wide
          </span>

          <h1 className="animate-slide-up text-white" style={{ animationDelay: "80ms" }}>
            Heavy Equipment Rental Built for the UAE&apos;s Toughest Job Sites
          </h1>

          <p
            className="animate-slide-up max-w-xl text-lg font-medium leading-relaxed text-white/85"
            style={{ animationDelay: "160ms" }}
          >
            Forklifts, mobile cranes, telehandlers, and man lifts with certified operators — deployed fast across
            Musaffah, ICAD, Khalifa Industrial Zone, JAFZA, and Dubai Industrial City. Flexible daily, weekly, and
            monthly terms with 24/7 emergency support.
          </p>

          <dl
            className="animate-slide-up grid grid-cols-3 gap-4 border-y border-white/15 py-5"
            style={{ animationDelay: "240ms" }}
          >
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                <BadgeCheck size={14} className="text-accent" /> Since {siteConfig.foundingYear}
              </dt>
              <dd className="mt-1 text-2xl font-extrabold">{siteConfig.yearsInBusiness}+ Yrs</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                <ShieldCheck size={14} className="text-accent" /> Certified
              </dt>
              <dd className="mt-1 text-2xl font-extrabold">Operators</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                <Clock3 size={14} className="text-accent" /> Support
              </dt>
              <dd className="mt-1 text-2xl font-extrabold">24/7</dd>
            </div>
          </dl>

          <div className="animate-slide-up flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] sm:flex-none"
            >
              <WhatsAppIcon size={18} />
              Request a Quote
            </a>
            <a
              href={siteConfig.telHref}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:flex-none"
            >
              <Phone size={18} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="animate-fade-in relative hidden md:block" style={{ animationDelay: "200ms" }}>
          <div className="animate-float relative h-full min-h-[420px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/fleet/telehandler-jcb.jpg"
              alt="Telehandler and mobile crane deployed on a UAE construction site"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-xl lg:block">
            <p className="text-3xl font-extrabold text-primary">500 Ton</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Max Crane Capacity</p>
          </div>
        </div>
      </div>
    </section>
  )
}
