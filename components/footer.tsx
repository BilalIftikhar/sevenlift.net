"use client"

export default function Footer() {
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
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-accent-foreground">
                SL
              </div>
              <span className="font-bold text-lg">Seven Lift</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Professional heavy equipment rental and lifting solutions across the UAE
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-background">Quick Links</h3>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-background">Services</h3>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Forklift Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Mobile Crane
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Telehandler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Man Lift Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-background">Contact</h3>
            <div className="space-y-3 text-background/80 text-sm">
              <button onClick={handleCall} className="cursor-pointer hover:text-accent transition block">
                📞 +971 56 639 0908
              </button>
              <button onClick={handleEmail} className="cursor-pointer hover:text-accent transition block">
                📧 info@sevenlift.net
              </button>
              <button onClick={handleWhatsApp} className="cursor-pointer hover:text-accent transition block">
                💬 WhatsApp
              </button>
              <p className="text-xs mt-4">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-background/70 text-sm">
            <p>&copy; 2025 Seven Lift General Transport L.L.C. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
