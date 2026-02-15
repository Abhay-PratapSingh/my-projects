const WhyChooseUsCard = ({ icon, title, description }) => {
  return (
    <div className="
      bg-[#fffaf4]
      border border-[#eadfce]
      rounded-2xl
      p-8
      text-center
      shadow-sm
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
    ">
      <div className="text-4xl mb-5 text-[#c8a45d]">
        {icon}
      </div>

      <h3 className="text-xl font-serif text-[#6b4f2c] mb-3">
        {title}
      </h3>

     <p className="text-[#7a746c] text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default WhyChooseUsCard
