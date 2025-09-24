import React from "react";

const BeautyBanner = ({ title, subtitle, backgroundImageUrl }) => {
  return (
    <div
      className="w-full lg:w-[30.25rem] xl:w-[43.25rem] h-[215px]  lg:h-[400px] rounded-lg overflow-hidden bg-no-repeat bg-cover lg:bg-contain flex items-center justify-center  bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className=" inset-0  bg-opacity-10 flex flex-col items-center justify-center text-center text-[#333333]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-sm sm:text-default lg:text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default BeautyBanner;
