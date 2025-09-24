import React from "react";
import WelcomeDealCard from "./WelcomeDealCard";
import BeautyBanner from "./BeautyBanner";
import BlackFridayCard from "./BlackFridayCard";
import logoForBF from "../assets/logo.png";
import wellimg from "../assets/welimg.png";
import beautyBgImage from "../assets/beautybg.png";

const Promo = () => {
  const welcomeDeal = {
    title: "Welcome Deal",
    subtitle: "Enjoy exclusive welcome bonus",
    productImage: wellimg,
    currentPrice: 12960,
    originalPrice: 25920,
    discountPercentage: 50,
  };

  // Mock data for the Beauty Banner
  const beautyBannerData = {
    title: "Beauty products",
    subtitle: "Explore Top Sellers",
    backgroundImageUrl: beautyBgImage,
  };

  // Mock data for Black Friday Card
  const blackFridayData = {
    logoUrl: logoForBF,
    line1: "BLACK",
    line2: "FRIDAY",
    line3: "SALES",
    dateRange: "09 - 15 NOV",
  };

  return (
    <div className="px-4 lg:px-16">
      {/* Mobile View */}
      <div className=" w-full mb-4 lg:hidden ">
        <BeautyBanner {...beautyBannerData} />
      </div>
      <div className="flex gap-4 sm:gap-10 lg:gap-4 items-center justify-center">
        <div className="">
          <WelcomeDealCard deal={welcomeDeal} />
        </div>
        <div className="hidden lg:block">
          <BeautyBanner {...beautyBannerData} />
        </div>
        <div>
          <BlackFridayCard data={blackFridayData} />
        </div>
      </div>
    </div>
  );
};

export default Promo;
