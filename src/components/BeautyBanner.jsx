import React from "react";

const BeautyBanner = ({ title, subtitle, backgroundImageUrl }) => {
  return (
    <div
      className="relative w-[43.25rem]  h-93.5 rounded-lg overflow-hidden bg-no-repeat bg-contain  bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0  bg-opacity-10 flex flex-col items-center justify-center text-center text-[#333333]">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default BeautyBanner;
