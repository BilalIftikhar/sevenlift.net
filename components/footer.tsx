import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig, serviceAreas } from "@/lib/site-config"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0b1526] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/brand/logo-icon-512.png"
                alt="Seven Lift General Transport logo"
                width={44}
                height={44}
                className="rounded-md"
              />
              <div>
                <span className="block text-base font-bold leading-none">Seven Lift</span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/60">
                  General Transport L.L.C.
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Certified forklift, mobile crane, telehandler, and man lift rental across the UAE — with dedicated
              coverage in Abu Dhabi (Musaffah, ICAD, KIZAD) and Dubai (JAFZA, Al Quoz, Dubai Industrial City).
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-white/80">
              <a href={siteConfig.telHref} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone size={16} className="shrink-0 text-accent" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-accent transition-colors"
              >
                <Mail size={16} className="shrink-0 text-accent" />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, UAE
              </p>
              <p className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0 text-accent" />
                Available 24/7 — Emergency Deployment
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="hover:text-accent transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/equipment" className="hover:text-accent transition-colors">
                  Full Equipment Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Locations</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link href={location.href} className="hover:text-accent transition-colors">
                    {location.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="hover:text-accent transition-colors">
                  All Coverage Areas
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">UAE Service Network</h3>
          <p className="text-sm leading-relaxed text-white/60">
            {serviceAreas.map((area) => area.name).join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
