import React from 'react';
import HomeCollectionCard from './HomeCollectionCard';
import ring from '../assets/1.png';
import bracelet from '../assets/2.png';
import earrings from '../assets/3.png';
import necklace from '../assets/4.png';

const HomeCollection = () => {
  const collection = [
    { image: ring, altText: 'Gold Ring' },
    { image: bracelet, altText: 'Gold Bracelet' },
    { image: earrings, altText: 'Gold Earrings' },
    { image: necklace, altText: 'Gold Necklace' },
  ];

  return (
    <section className="py-16 bg-[#f8f3ee]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-[#7a5a2e]">
          Our Exquisite Gold Collection
        </h2>
        <div className="mt-3 mx-auto w-20 h-[2px] bg-[#d6b77c]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
        {collection.map((item, index) => (
          <HomeCollectionCard
            key={index}
            image={item.image}
            altText={item.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCollection;
