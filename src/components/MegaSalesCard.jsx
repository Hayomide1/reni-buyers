import React from "react";
import spiral from "../assets/spiral.svg";
import iphone from "../assets/iphone.png";

const MegaSalesCard = () => {
  // This would typically come from an API
  const promoData = {
    title: "Mega Sales Extravanganza",
    description:
      "Unleash unbeatable deals and exclusive discounts! Dive into a shopping spree with jaw-dropping offers on top-tier products.",
    promoTag: "Promo",
    dealType: "Friday deal",
    buttonText: "Shop now",
  };

  return (
    <div className="relative mx-16  h-[375px] bg-[#C6CDE5] font-Poppins overflow-hidden rounded-2xl">
      {/* Content Container */}
      <div className="relative z-10 h-full flex">
        {/* Text Content */}
        <div className=" pl-14 pt-12 space-y-3">
          <h1 className="text-[#001E88] text-[36px] font-semibold">
            {promoData.title}
          </h1>
          <p className="text-[#1C3795] max-w-[32.5rem] text-default pr-4">
            {promoData.description}
          </p>
        </div>

        {/* Image Container */}
        <div className="absolute left-170 top-50 -translate-y-1/2">
          <img
            src={iphone}
            alt="iPhone"
            className="h-[360px] object-contain z-20"
          />
        </div>
      </div>

      {/* Promo Tag */}
      <div className="absolute  top-12 right-50 z-10 flex flex-col items-center justify-center gap-2">
        <p className="text-[#0A3BA7] text-[32px] font-semibold">
          {promoData.promoTag}
        </p>
        <p className="text-[#0A3BA7] text-xl">{promoData.dealType}</p>
        <button className="bg-[#FFB800] text-white px-12 py-3 rounded-xl text-xl font-medium">
          {promoData.buttonText}
        </button>
      </div>

      {/* Background Spiral */}
      <div className="absolute right-0 z-50 top-0 h-[70%]">
        <img
          src={spiral}
          alt="background pattern"
          className="h-full object-cover opacity-50"
        />
      </div>
    </div>
  );
};

export default MegaSalesCard;
