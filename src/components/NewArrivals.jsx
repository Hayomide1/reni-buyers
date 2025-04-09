import React from "react";
import ProductCard from "./ProductCard";
import laptop from "../assets/laptop.png";

// Mock data - Replace with your actual data/API call
const newArrivalsData = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  title: `Brown Leather Shoes ${index + 1}`,
  imageUrl: laptop, // Replace with actual image URL
  rating: 5, // Example rating
  reviewCount: 85,
  price: 15000 + index * 100, // Example price variation
}));

const NewArrivals = () => {
  return (
    <div className="">
      <div className=" bg-[#C6CDE5] flex items-center px-16 justify-between">
        <h1 className="text-4xl text-accent font-semibold py-4">
          New Arrivals
        </h1>
        <p className="text-[#5569B0]">View All</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-16 py-[32px] ">
        {newArrivalsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
