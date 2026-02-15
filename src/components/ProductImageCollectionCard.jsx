import React from "react";

const ProductImageCollectionCard = ({ image }) => {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg bg-[#faf7f2] hover:shadow-xl transition">

            {/* fixed box prevents layout jump */}
            <div className="w-full h-[320px] flex items-center justify-center bg-[#faf7f2]">

                {/* object-contain = no cut */}
                <img
                    src={image}
                    alt="Product"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />

            </div>

        </div>
    );
};

export default ProductImageCollectionCard;
