import React from "react";

const CollectionCard = ({ videoSrc, title }) => {
    return (
        <div
            className="rounded-2xl overflow-hidden shadow-md bg-[#faf7f2]
                 hover:shadow-xl transition-all duration-300 group"
        >
            {/* Video Wrapper — theme background instead of black */}
            <div className="relative w-full h-[320px] flex items-center justify-center bg-[#f3eee8] overflow-hidden">

                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain
                     group-hover:scale-105 transition-transform duration-500"
                />

            </div>

            {/* Title */}
            <div className="py-4 text-center text-[#6f5635] font-medium tracking-wide">
                {title}
            </div>
        </div>
    );
};

export default CollectionCard;
