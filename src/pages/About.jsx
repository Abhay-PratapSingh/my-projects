import React, { useState } from 'react'
import heroImage from "../assets/1brandsloganHeroImage.jpeg";
import OwnerImage from "../assets/ownerimage.jpeg";
import AboutShowroomCard from "../components/AboutShowroomcards";
import show1 from "../assets/showroomimage1.png";
import show2 from "../assets/showroomimage2.png";
import show3 from "../assets/showroomimage3.png";
import show4 from "../assets/showroomimage4.png";


const About = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      {/* Hero Image — Don't Touch */}
      <img
        src={heroImage}
        alt="Pradeep Jewellers Banner"
        className="w-full object-cover"
      />

      {/* About Us Section */}
      <section className="bg-[#f3eee8] py-16 px-6 md:px-20 text-center">

        <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium tracking-wide">
          About Us
        </h3>

        <div className="w-20 h-[2px] bg-[#d2b48c] mx-auto mt-4 mb-10"></div>

        {/* animated card */}
        <div className="max-w-4xl mx-auto bg-[#faf7f2] rounded-2xl shadow-lg p-8 md:p-12 text-[#6f5635] leading-8 text-lg
                        transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

          <p className="mb-6">
            Jewelry is not just an ornament; it is a reflection of heritage, emotion, and timeless elegance.
            At Pradeep Jewellers, every piece tells a story of tradition, craftsmanship, and trust passed
            through generations.
          </p>

          <p>
            Operating for 22+ years, we have proudly served families with jewellery that represents 100% purity
            and unmatched quality. We source premium jewellery across Kanpur and Delhi, offering
            gold and silver jewellery, stone-studded rings, coins, silver idols, elegant accessories, and custom
            designs crafted for life’s most special occasions.
          </p>

        </div>

      </section>


      {/* Promise Section */}
      <section className="bg-[#f3eee8] py-16 px-6 md:px-20">

        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium text-center tracking-wide">
            The Pradeep Jewellers Promise: Quality, Trust & Legacy
          </h3>

          <div className="w-20 h-[2px] bg-[#d2b48c] mx-auto mt-4 mb-12"></div>

          <div className="bg-[#faf7f2] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-10">

            {/* Image — FIXED HEIGHT BLOCK */}
            <div className="md:w-1/3 text-center">
              <div className="w-full h-[320px] overflow-hidden rounded-xl shadow-md">
                <img
                  src={OwnerImage}
                  alt="Mr. Pradeep Kumar Gupta"
                  onClick={() => setIsOpen(true)}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                />
              </div>

              <p className="mt-4 text-[#a07a4a] font-serif text-lg font-medium">
                Pradeep Kumar Gupta
              </p>
            </div>

            {/* Text */}
            <div className="md:w-2/3 text-[#6f5635] leading-8 text-lg flex flex-col justify-center">

              <h4 className="text-2xl font-serif text-[#a07a4a] font-medium mb-6">
                Man Behind the Brand
              </h4>

              <p className="mb-4">
                Mr. Pradeep Kumar Gupta, the founder of Pradeep Jewellers, represents a legacy built on
                dedication, integrity, and deep knowledge of the jewellery craft.
              </p>

              <p>
                Coming from a traditional family business background, he has been actively involved in the
                jewellery industry for over 30 years, leading Pradeep Jewellers successfully for the last
                22+ years with a promise of purity and trust.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Zoom Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50
                     animate-[fadeIn_.3s_ease]"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={OwnerImage}
            alt="Zoomed"
            className="max-w-[92%] max-h-[92%] rounded-xl shadow-2xl
                       transition-transform duration-300 scale-100"
          />
        </div>
      )}




























      {/* Showroom Glimpse Section */}
      <section className="bg-[#f3eee8] py-16 px-6 md:px-20">

        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium text-center tracking-wide">
            A Glimpse of Our Showroom
          </h3>

          <div className="w-20 h-[2px] bg-[#d2b48c] mx-auto mt-4 mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <AboutShowroomCard
              image={show1}
              title="Personalized Jewellery Selection Experience"



            />

            <AboutShowroomCard
              image={show2}
              title="One-to-One Customer Consultation"

            />

            <AboutShowroomCard
              image={show3}
              title="Live In-Store Customer Experience"

            />

            <AboutShowroomCard
              image={show4}
              title="Premium Display & Seating Lounge"

            />

          </div>

        </div>

      </section>


    </div>
  )
}

export default About
