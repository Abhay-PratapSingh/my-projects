import React from 'react'
import colllectionHeroImage from "../assets/collectionhero3.png";

import CollectionCard from "../components/CollectionCard";
import ProductImageCollectionSection
  from "../components/ProductImageCollectionSection";
// ✅ added

import video1 from "../assets/model1.mp4";
import video2 from "../assets/model2.mp4";
import video3 from "../assets/model3.mp4";
import video4 from "../assets/model4.mp4";

// ✅ add your product images
import p1 from "../assets/redproduct1.png";
import p2 from "../assets/greenproduct1.png";
import p3 from "../assets/redproduct2.png";
import p4 from "../assets/greenproduct2.png";
import p5 from "../assets/redproduct3.png";
import p6 from "../assets/greenproduct3.png";
import p7 from "../assets/redproduct4.png";
import p8 from "../assets/redproduct5.png";

const Collection = () => {

  // ✅ signature styles data
  const signatureProducts = [
    { image: p1 },
    { image: p2 },
    { image: p3 },
    { image: p4 },
    { image: p5 },
    { image: p6 },
    { image: p7 },
    { image: p8 },
  ];

  return (
    <div>

      {/* Hero Image — Don't Touch */}
      <img
        src={colllectionHeroImage}
        alt="Pradeep Jewellers Banner"
        className="w-full object-cover"
      />




      {/* Luxury in Every Look Section */}
      <section className="bg-[#faf7f2] py-20 px-6 md:px-20 text-center">

        <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium tracking-wide">
          Luxury in Every Look
        </h3>

        <div className="w-20 h-[2px] bg-[#d2b48c] mx-auto mt-4 mb-14"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <CollectionCard videoSrc={video1} title="Bridal Elegance" />
          <CollectionCard videoSrc={video2} title="Modern Glamour" />
          <CollectionCard videoSrc={video3} title="Royal Tradition" />
          <CollectionCard videoSrc={video4} title="Everyday Luxury" />

        </div>

      </section>


















      {/* Discover Our Collection Section */}
      <section className="bg-[#f3eee8] py-16 px-6 md:px-20 text-center">

        <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium tracking-wide">
          Discover Our Collection
        </h3>

        <div className="w-20 h-[2px] bg-[#d2b48c] mx-auto mt-4 mb-10"></div>

        <div className="max-w-4xl mx-auto bg-[#faf7f2] rounded-2xl shadow-lg p-8 md:p-12 
                  text-[#6f5635] leading-8 text-lg
                  transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

          <p className="mb-6">
            At <strong>Pradeep Jewellers</strong>, discover a refined collection of gold and silver jewellery including
            stone-studded rings, elegant necklaces, traditional ornaments, premium gold coins, and beautifully crafted
            silver idols. Our designs blend rich Indian heritage with modern style, offering perfect pieces for weddings,
            festivals, celebrations, and everyday elegance — all crafted with purity, precision, and timeless beauty.
          </p>

        </div>

      </section>

      {/* ✅ ===== Our Signature Styles — New Section Added ===== */}
      <ProductImageCollectionSection products={signatureProducts} />
      {/* ✅ ===== End Section ===== */}


    </div>
  )
}

export default Collection
