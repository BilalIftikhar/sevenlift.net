"use client"

export default function CoverageSection() {
  const regions = [
    {
      emoji: "🏢",
      area: "Dubai Operations",
      locations: "Jebel Ali Free Zone, Dubai Industrial City, Al Quoz, DIFC, Business Bay",
    },
    {
      emoji: "⭐",
      area: "Abu Dhabi Services",
      locations: "Musaffah Industrial City, ICAD, Khalifa Industrial Zone, Ruwaiz",
    },
    {
      emoji: "🚀",
      area: "Northern Emirates",
      locations: "Ras Al Khaimah forklift rental, Sharjah Industrial Areas, Ajman, Fujairah",
    },
    {
      emoji: "🏭",
      area: "Eastern Region",
      locations: "Al Ain industrial facilities and manufacturing zones",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete UAE Coverage - Industrial Equipment Network
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive forklift rental services extend across every emirate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {regions.map((region, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <span className="text-3xl">{region.emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{region.area}</h3>
                  <p className="text-gray-600 text-sm mt-1">{region.locations}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img
              src="/forklift-lifting-boxes-industrial-warehouse.jpg"
              alt="Forklift loading cargo"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-red-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">NEED URGENT FORKLIFT?</h3>
          <button className="bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
            Call Now for Immediate Deployment
          </button>
        </div>
      </div>
    </section>
  )
}
