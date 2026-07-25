"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig, waLink } from "@/lib/site-config"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<"services" | "locations" | null>(null)

  const whatsappHref = waLink("Hi Seven Lift, I would like a quote for equipment rental.")

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="hidden bg-primary py-2 text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 text-xs">
          <div className="flex items-center gap-6">
            <a href={siteConfig.telHref} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={13} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={13} />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <p className="font-semibold uppercase tracking-wider text-primary-foreground/80">
            24/7 Emergency Deployment · Abu Dhabi &amp; Dubai
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/brand/logo-icon-512.png"
            alt="Seven Lift General Transport logo"
            width={44}
            height={44}
            className="rounded-md"
            priority
          />
          <div className="hidden sm:block">
            <span className="block text-base font-bold leading-none text-foreground">Seven Lift</span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              General Transport
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/equipment" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            Equipment
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors">
              Services
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="block rounded-lg px-3 py-2.5 text-sm hover:bg-secondary transition-colors"
                >
                  <span className="block font-semibold text-foreground">{service.shortTitle}</span>
                  <span className="block text-xs text-muted-foreground">{service.capacityRange}</span>
                </Link>
              ))}
              <Link
                href="/services"
                className="mt-1 block rounded-lg px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-accent hover:bg-secondary transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors">
              Locations
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                >
                  {location.shortTitle}
                </Link>
              ))}
              <Link
                href="/locations"
                className="mt-1 block rounded-lg px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-accent hover:bg-secondary transition-colors"
              >
                All Coverage Areas
              </Link>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={siteConfig.telHref}
            className="hidden items-center gap-2 rounded-lg border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors md:inline-flex"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-sm hover:bg-accent/90 hover:shadow-md transition-all sm:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-foreground lg:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background px-4 py-4 lg:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2.5 text-sm font-semibold text-foreground">
            Home
          </Link>
          <Link
            href="/equipment"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-sm font-semibold text-foreground"
          >
            Equipment
          </Link>

          <button
            onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
            className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-foreground"
          >
            Services
            <ChevronDown size={16} className={mobileSection === "services" ? "rotate-180" : ""} />
          </button>
          {mobileSection === "services" && (
            <div className="ml-3 mb-2 flex flex-col gap-1 border-l border-border pl-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm text-muted-foreground"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileSection(mobileSection === "locations" ? null : "locations")}
            className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-foreground"
          >
            Locations
            <ChevronDown size={16} className={mobileSection === "locations" ? "rotate-180" : ""} />
          </button>
          {mobileSection === "locations" && (
            <div className="ml-3 mb-2 flex flex-col gap-1 border-l border-border pl-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm text-muted-foreground"
                >
                  {location.shortTitle}
                </Link>
              ))}
            </div>
          )}

          <Link href="/blog" onClick={() => setIsOpen(false)} className="block py-2.5 text-sm font-semibold text-foreground">
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-sm font-semibold text-foreground"
          >
            Contact
          </Link>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-accent-foreground"
          >
            <MessageCircle size={18} />
            Request a Quote on WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
