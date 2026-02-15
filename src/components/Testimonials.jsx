import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Anjali Sharma',
      text: 'Beautiful designs and certified gold quality. The craftsmanship is excellent and the buying experience was smooth and transparent. Truly a trusted jewellery store.'
    },
    {
      name: 'Rohit Verma',
      text: 'Amazing bridal collection with elegant designs. Pricing was very clear and staff guided us properly at every step. Highly recommended for wedding shopping.'
    },
    {
      name: 'Pooja Singh',
      text: 'Loved the finishing and overall quality of the jewellery. Staff behaviour was polite and helpful, making the entire experience comfortable and pleasant.'
    },
    {
      name: 'Amit Jain',
      text: 'One of the best jewellery stores in the city. Great variety, genuine gold quality, and fair pricing. Definitely a place you can trust.'
    },
    {
      name: 'Neha Gupta',
      text: 'Elegant designs with a very premium feel. The jewellery looks exactly as promised and the attention to detail is impressive.'
    },
    {
      name: 'Suresh Patel',
      text: 'Our family jeweller for many years. Consistent quality, honest pricing, and excellent service every time. Highly recommended.'
    },
    {
      name: 'Kavita Mehta',
      text: 'Perfect wedding and festive collection. Designs are classy and timeless, and the quality speaks for itself.'
    },
    {
      name: 'Rahul Agarwal',
      text: 'Great quality jewellery with fair and transparent pricing. The collection is modern yet traditional, suitable for every occasion.'
    },
  ]

  return (
    <section className="py-12 bg-[#f8f3ee]">
      <div className="text-center mb-8">

        <h2 className="text-4xl font-serif text-[#7a5a2e]">
          What Our Customers Say
        </h2>
        <div className="mt-4 mx-auto w-24 h-[2px] bg-[#d6b77c] rounded"></div>
      </div>

      {/* Slider Wrapper */}
      <div className="relative max-w-7xl mx-auto">

        {/* LEFT ARROW */}
        <div
          className="
            swiper-button-prev
            absolute
            -left-2
            top-1/2
            -translate-y-1/2
            z-10
            text-[#b8892f]
            hover:text-[#7a5a2e]
            transition-colors
          "
        ></div>

        {/* RIGHT ARROW */}
        <div
          className="
            swiper-button-next
            absolute
            -right-2
            top-1/2
            -translate-y-1/2
            z-10
            text-[#b8892f]
            hover:text-[#7a5a2e]
            transition-colors
          "
        ></div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-10"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials
