const HomeCollectionCard = ({ image, altText }) => {
  return (
    <div className="
      bg-[#fffaf4]
      rounded-2xl
      shadow-sm
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
    ">
      {/* image wrapper */}
      <div className="p-6">
        <img
          src={image}
          alt={altText}
          className="
            w-full
            max-h-[360px]
            object-contain
            mx-auto
            rounded-xl
          "
        />
      </div>
    </div>
  )
}

export default HomeCollectionCard;
