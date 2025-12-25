"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCall = () => {
    window.location.href = "tel:+971566390908"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@sevenlift.net"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/971566390908", "_blank")
  }

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="bg-secondary/50 text-foreground py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between md:justify-center gap-8 flex-wrap text-xs md:text-sm font-light">
          <button
            onClick={handleCall}
            className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer group"
          >
            <Phone size={14} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>+971 56 639 0908</span>
          </button>
          <span className="hidden md:inline text-border">|</span>
          <button
            onClick={handleEmail}
            className="hidden md:flex items-center gap-2 hover:text-accent transition-colors cursor-pointer group"
          >
            <Mail size={14} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>info@sevenlift.net</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo - Minimalist design */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-light text-sm">
            SL
          </div>
          <div>
            <span className="text-xl font-light text-foreground block leading-none">Seven Lift</span>
            <span className="text-xs font-light text-muted-foreground tracking-widest">TRANSPORT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-foreground hover:text-accent transition font-light text-sm">
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-accent transition font-light text-sm">
            Services
          </Link>
          <Link href="/equipment" className="text-foreground hover:text-accent transition font-light text-sm">
            Equipment
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition font-light text-sm">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-light px-6 py-2 rounded text-sm transition-all hover:shadow-lg hover:scale-105 duration-300"
          >
            Request Quote
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-secondary border-t border-border p-4 flex flex-col gap-3 animate-slide-down">
          <Link
            href="/"
            className="text-foreground hover:text-accent font-light py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-foreground hover:text-accent font-light py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/equipment"
            className="text-foreground hover:text-accent font-light py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Equipment
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-accent font-light py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-light mt-2 rounded py-2 text-sm transition-all"
          >
            Request Quote
          </button>
        </nav>
      )}
    </header>
  )
}
