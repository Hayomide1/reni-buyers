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
    <div className="relative mx-4 lg:mx-16  sm:h-[250px] h-[202px] lg:h-[375px] bg-[#C6CDE5] font-Poppins overflow-hidden rounded-2xl">
      {/* Content Container */}
      <div className="relative z-10 h-full flex">
        {/* Text Content */}
        <div className=" lg:pl-14 sm:pl-7 pl-3 max-w-[10.0625rem] sm:max-w-[15rem] lg:max-w-[36.5rem] pt-4 lg:pt-12 space-y-3">
          <h1 className="text-[#001E88] md:text-3xl sm:text-2xl text-[1.25rem] lg:text-[2.25rem] font-semibold">
            {promoData.title}
          </h1>
          <p className="text-[#1C3795] sm:text-sm  text-xs lg:text-default pr-4">
            {promoData.description}
          </p>
        </div>

        {/* Image Container */}
        <div className="absolute z-[999] left-40 md:left-90 sm:left-70 lg:left-170 top-40 lg:top-50 -translate-y-1/2">
          <img
            src={iphone}
            alt="iPhone"
            className="lg:h-[360px] sm:h-[200px] sm:w-full w-[10rem] lg:w-full object-contain z-20"
          />
        </div>
      </div>

      {/* Promo Tag */}
      <div className="absolute top-4  lg:top-12 -right-[-10px] sm:right-[40px] lg:right-50 z-100 flex flex-col items-center justify-center gap-1 lg:gap-2">
        <p className="text-[#0A3BA7] text-[1.25rem] sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          {promoData.promoTag}
        </p>
        <p className="text-[#0A3BA7] text-xs sm:text-sm  lg:text-xl">
          {promoData.dealType}
        </p>
        <button className="bg-[#FFB800] w-[4.625rem] sm:w-[8rem] lg:w-[18.1875rem] text-xs sm:text-sm flex items-center justify-center  text-white  py-3 rounded-xl lg:text-xl font-medium">
          {promoData.buttonText}
        </button>
      </div>

      {/* Background Spiral */}
      <div className="absolute h-[144px]  w-[20.305rem] lg:w-[36.75rem] sm:right-[-60px] right-[-100px] lg:right-0 z-[1] top-0 lg:h-[70%]">
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
