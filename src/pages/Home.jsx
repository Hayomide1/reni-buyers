import React from "react";
import WelcomeDealCard from "../components/WelcomeDealCard";
import wellimg from "../assets/welimg.png";
import BeautyBanner from "../components/BeautyBanner";
import beautyBgImage from "../assets/beautybg.png";
import BlackFridayCard from "../components/BlackFridayCard";
import logoForBF from "../assets/logo.png";
import Popularcategories from "../components/Popularcategories";
import NewArrivals from "../components/NewArrivals";

// Mock data (this would typically come from an API/backend)
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

const Home = () => {
  return (
    <div className="font-Poppins mx-auto space-y-12">
      {/* Top Section: Welcome Deal, Beauty Banner, Black Friday */}
      <div className="px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-1/4 flex h-[400px]">
            <WelcomeDealCard deal={welcomeDeal} />
          </div>
          <div className="lg:flex-1 flex h-[400px]">
            <BeautyBanner
              title={beautyBannerData.title}
              subtitle={beautyBannerData.subtitle}
              backgroundImageUrl={beautyBannerData.backgroundImageUrl}
            />
          </div>
          <div className="lg:w-1/4 flex h-[400px]">
            <BlackFridayCard data={blackFridayData} />
          </div>
        </div>
      </div>

      {/* Popular Categories Section */}
      <Popularcategories />

      {/* New Arrivals Section */}
      <NewArrivals />
    </div>
  );
};

export default Home;
