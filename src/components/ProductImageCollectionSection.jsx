import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductImageCollectionCard from "./ProductImageCollectionCard";

const ProductImageCollectionSection = ({ products = [] }) => {
    return (
        <section className="bg-[#faf7f2] py-20 px-6 md:px-20 text-center">
            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium tracking-wide">
                Our Signature Styles
            </h3>
            <div className="w-20 h-[2px] bg-[#d2b48c] mx-auto mt-4 mb-14"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* LEFT ARROW */}
                <div className="swiper-button-prev absolute -left-2 top-1/2 -translate-y-1/2 z-10 text-[#a07a4a] hover:text-[#7a5a2e] transition-colors"></div>

                {/* RIGHT ARROW */}
                <div className="swiper-button-next absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#a07a4a] hover:text-[#7a5a2e] transition-colors"></div>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    autoplay={{ delay: 2800, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={24}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="px-4"
                >
                    {products.map((p, i) => (
                        <SwiperSlide key={i}>
                            <ProductImageCollectionCard image={p.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductImageCollectionSection;
