"use client"

export default function Features() {
  const features = [
    {
      title: "Electric & Diesel Options",
      description: "Choose between electric forklifts for indoor operations or diesel for outdoor heavy-duty work",
      icon: "⚡",
    },
    {
      title: "Multiple Capacity Ranges",
      description: "Equipment ranging from 1.5 tons to 10+ tons to match your specific requirements",
      icon: "📦",
    },
    {
      title: "Flexible Rental Terms",
      description: "Short-term daily rentals or long-term agreements with customized pricing",
      icon: "📅",
    },
    {
      title: "Professional Training",
      description: "Certified operator training and 24/7 maintenance support included",
      icon: "👷",
    },
    {
      title: "Quick Deployment",
      description: "Rapid equipment delivery and setup across all UAE locations",
      icon: "🚀",
    },
    {
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden charges, best rates for forklift rental",
      icon: "💰",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Forklift Rental Solutions</h2>
          <p className="text-gray-600 text-lg">Everything you need for efficient material handling operations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border border-gray-100">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
