import React from "react";

const AboutShowroomCard = ({ image, title, }) => {
    return (
        <div className="bg-[#faf7f2] rounded-2xl shadow-lg overflow-hidden
                    transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

            {/* Portrait Image */}
            <div className="w-full h-[420px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Text */}
            <div className="p-6 text-center">
                <h4 className="text-xl font-serif text-[#a07a4a] font-medium mb-3">
                    {title}
                </h4>


            </div>
        </div>
    );
};

export default AboutShowroomCard;
