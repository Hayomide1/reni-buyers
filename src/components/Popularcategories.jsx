import React, { useRef, useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import watch from "../assets/watch.png";
import television from "../assets/Televisions.png";
import laptop from "../assets/laptop.png";
import shirt from "../assets/shirt.png";
import earphones from "../assets/earphones.png";
import headphone from "../assets/headphones.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Mock data - Replace with your actual data/API call
const popularCategoriesData = [
  {
    id: 1,
    title: "Laptops",
    imageUrl: laptop,
  },
  {
    id: 2,
    title: "Men's Fashion",
    imageUrl: shirt,
  },
  {
    id: 3,
    title: "Headphones",
    imageUrl: headphone,
  },
  {
    id: 4,
    title: "Smart Watches",
    imageUrl: watch,
  },
  {
    id: 5,
    title: "Televisions",
    imageUrl: television,
  },
  {
    id: 6,
    title: "Mobile Assessories",
    imageUrl: earphones,
  },
];

const Popularcategories = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10 bg-white">
      <div className="bg-[#C6CDE5]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-accent font-semibold text-center py-4 my-[32px]">
          Popular Categories
        </h1>
      </div>
      <div className="relative">
        {/* Mobile Scroll Buttons */}
        <div className="md:hidden">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 p-3 rounded-full z-10 shadow-lg"
            >
              <FaChevronLeft className="text-white" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 p-3 rounded-full z-10 shadow-lg"
            >
              <FaChevronRight className="text-white" />
            </button>
          )}
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 items-center lg:justify-center overflow-x-auto scrollbar-hide px-4 lg:px-16 py-[32px] "
        >
          {popularCategoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularcategories;
