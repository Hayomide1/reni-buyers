import React from "react";
import CategoryCard from "./CategoryCard";
import watch from "../assets/watch.png";
import television from "../assets/Televisions.png";
import laptop from "../assets/laptop.png";
import shirt from "../assets/shirt.png";
import earphones from "../assets/earphones.png";
import headphone from "../assets/headphones.png";
// Import the new card component

// Mock data - Replace with your actual data/API call
const popularCategoriesData = [
  {
    id: 1,
    title: "Laptops",
    imageUrl: laptop, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Men's Fashion",
    imageUrl: shirt, // Replace with actual image URL
  },
  {
    id: 3,
    title: "Headphones",
    imageUrl: headphone, // Replace with actual image URL
  },
  {
    id: 4,
    title: "Smart Watches",
    imageUrl: watch, // Replace with actual image URL
  },
  {
    id: 5,
    title: "Televisions",
    imageUrl: television, // Replace with actual image URL
  },
  {
    id: 6,
    title: "Mobile Assessories",
    imageUrl: earphones, // Replace with actual image URL
  },
];

const Popularcategories = () => {
  return (
    <div className="mb-10 bg-white">
      <div className=" bg-[#C6CDE5]">
        <h1 className="text-4xl text-accent font-semibold text-center py-4 my-[32px]">
          Popular Categories
        </h1>
      </div>
      <div className=" flex flex-wrap gap-6 items-center justify-center px-16 py-[32px]">
        {popularCategoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Popularcategories;
