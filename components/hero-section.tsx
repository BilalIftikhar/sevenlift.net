"use client"

import { ArrowRight, Shield, Zap, Award } from "lucide-react"

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971566390908", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+971566390908"
  }

  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-28 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <p className="text-accent font-black text-sm uppercase tracking-widest animate-fade-in">
              ⚡ PROFESSIONAL LIFTING SOLUTIONS
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">Heavy Equipment You Can Trust</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed font-medium">
              24/7 reliable forklift, crane, and telehandler rentals. Enterprise-grade equipment with certified
              operators for maximum safety and efficiency across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center hover-lift">
              <Shield size={28} className="mb-2 text-accent" />
              <span className="text-sm font-bold">ISO Certified</span>
            </div>
            <div className="flex flex-col items-center text-center hover-lift">
              <Award size={28} className="mb-2 text-accent" />
              <span className="text-sm font-bold">15+ Years</span>
            </div>
            <div className="flex flex-col items-center text-center hover-lift">
              <Zap size={28} className="mb-2 text-accent" />
              <span className="text-sm font-bold">24/7 Support</span>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all duration-700 ease-in-out cursor-pointer"
              onClick={handleCall}
            >
              <p className="text-sm opacity-80 mb-1">Call Now for Immediate Availability</p>
              <p className="text-2xl font-black text-accent">+971 56 639 0908</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-black px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:gap-3 hover:shadow-2xl hover:scale-105 duration-300"
              >
                REQUEST NOW
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleCall}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-black px-8 py-3 rounded-lg transition-all hover:shadow-2xl hover:scale-105 duration-300"
              >
                CALL NOW
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur-3xl animate-pulse" />
          <img
            src="/heavy-lifting-equipment-forklifts-industrial.jpg"
            alt="Heavy lifting equipment and forklifts"
            className="w-full h-auto rounded-2xl shadow-2xl relative z-10 animate-float"
          />
        </div>
      </div>
    </section>
  )
}
