const TestimonialCard = ({ name, text }) => {
  return (
    <div
      className="
        bg-[#fffaf4]
        border border-[#eadfce]
        rounded-2xl
        p-6
        shadow-sm
        text-center
        h-[240px]
        flex
        flex-col
        justify-between
      "
    >
      <p
        className="
          text-[#5f4b32]
          text-[15px]
          leading-relaxed
          tracking-wide
          line-clamp-4
        "
      >
        “{text}”
      </p>

      <h4 className="text-[#6b4f2c] font-serif text-base mt-4">
        {name}
      </h4>
    </div>
  )
}

export default TestimonialCard
