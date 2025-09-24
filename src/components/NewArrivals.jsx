import React from "react";
import ProductCard from "./ProductCard";
import spic1 from "../assets/spic1.png";
import spic2 from "../assets/spic2.png";
import spic3 from "../assets/spic3.png";
import spic4 from "../assets/spic4.png";

// Mock data with different images
const newArrivalsData = [
  {
    id: 1,
    title: "Brown Leather Shoes 1",
    imageUrl: spic1,
    rating: 5,
    reviewCount: 85,
    price: 15000,
  },
  {
    id: 2,
    title: "Brown Leather Shoes 2",
    imageUrl: spic2,
    rating: 5,
    reviewCount: 85,
    price: 15100,
  },
  {
    id: 3,
    title: "Brown Leather Shoes 3",
    imageUrl: spic3,
    rating: 5,
    reviewCount: 85,
    price: 15200,
  },
  {
    id: 4,
    title: "Brown Leather Shoes 4",
    imageUrl: spic4,
    rating: 5,
    reviewCount: 85,
    price: 15300,
  },
  {
    id: 5,
    title: "Brown Leather Shoes 5",
    imageUrl: spic1,
    rating: 5,
    reviewCount: 85,
    price: 15400,
  },
  {
    id: 6,
    title: "Brown Leather Shoes 6",
    imageUrl: spic2,
    rating: 5,
    reviewCount: 85,
    price: 15500,
  },
  {
    id: 7,
    title: "Brown Leather Shoes 7",
    imageUrl: spic3,
    rating: 5,
    reviewCount: 85,
    price: 15600,
  },
  {
    id: 8,
    title: "Brown Leather Shoes 8",
    imageUrl: spic4,
    rating: 5,
    reviewCount: 85,
    price: 15700,
  },
  {
    id: 9,
    title: "Brown Leather Shoes 9",
    imageUrl: spic1,
    rating: 5,
    reviewCount: 85,
    price: 15800,
  },
  {
    id: 10,
    title: "Brown Leather Shoes 10",
    imageUrl: spic2,
    rating: 5,
    reviewCount: 85,
    price: 15900,
  },
  {
    id: 11,
    title: "Brown Leather Shoes 11",
    imageUrl: spic3,
    rating: 5,
    reviewCount: 85,
    price: 16000,
  },
  {
    id: 12,
    title: "Brown Leather Shoes 12",
    imageUrl: spic4,
    rating: 5,
    reviewCount: 85,
    price: 16100,
  },
];

const NewArrivals = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#C6CDE5] flex items-center px-4 lg:px-16 justify-between">
        <h1 className="text-2xl lg:text-4xl text-accent font-semibold py-4">
          New Arrivals
        </h1>
        <p className="text-[#5569B0] text-sm lg:text-default">View All</p>
      </div>
      {/* Mobile Grid (3 columns, 2 rows) */}
      <div className="grid grid-cols-3 gap-4 px-4 py-4 md:hidden">
        {newArrivalsData.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 lg:px-16 py-[32px]">
        {newArrivalsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
