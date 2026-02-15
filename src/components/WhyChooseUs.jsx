import WhyChooseUsCard from './WhyChooseUsCard'

const WhyChooseUs = () => {
  const features = [
    {
      icon: '💍',
      title: 'Certified Jewellery',
      description: '100% BIS hallmarked gold and certified diamonds.'
    },
    {
      icon: '🔍',
      title: 'Complete Transparency',
      description: 'Clear pricing, certified materials, and no hidden charges at any step.'
    },
    {
      icon: '💰',
      title: 'Best Pricing',
      description: 'Fair pricing that reflects true value and craftsmanship.'
    },
    {
      icon: '🛡️',
      title: 'Trusted Brand',
      description: 'Years of trust, heritage, and satisfied customers.'
    }
  ]

  return (
    <section className="py-12 bg-[#f8f3ee]">

      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-[#7a5a2e] tracking-wide">
          Why Choose Us
        </h2>

        {/* subtle divider like premium sites */}
        <div className="mt-4 mx-auto w-24 h-[2px] bg-[#d6b77c] rounded"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <WhyChooseUsCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  )
}

export default WhyChooseUs
