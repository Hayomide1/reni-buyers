import React from "react";
import Popularcategories from "../components/Popularcategories";
import NewArrivals from "../components/NewArrivals";
import OfficialStores from "../components/OfficialStores";
import Perks from "../components/Perks";
import MegaSalesCard from "../components/MegaSalesCard";
import Newsletter from "../components/Newsletter";
import Promo from "../components/Promo";
// Mock data (this would typically come from an API/backend)

const Home = () => {
  return (
    <div className="font-Poppins mx-auto space-y-12">
      <Promo />
      <Perks />
      <Popularcategories />
      <NewArrivals />
      <MegaSalesCard />
      <OfficialStores />
      <Newsletter />
    </div>
  );
};

export default Home;
