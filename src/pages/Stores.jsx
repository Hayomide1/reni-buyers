import React from "react";
import spic1 from "../assets/spic1.png";
import spic2 from "../assets/spic2.png";
import spic3 from "../assets/spic3.png";
import spic4 from "../assets/spic4.png";
import { RiArrowDropRightLine } from "react-icons/ri";

const Stores = () => {
  const storesData = [
    {
      id: 1,
      name: "Sheda Store",
      followers: 300,
      rating: 5,
      products: [
        {
          id: 1,
          title: "Big Size Men Glossy",
          price: "₦39,600",
          reviews: 343,
          rating: 5,
          image: spic1,
        },
        {
          id: 2,
          title: "Oraimo FreePods",
          price: "₦12,900",
          reviews: 500,
          rating: 5,
          image: spic2,
        },
        {
          id: 3,
          title: "Brown Leather Shoes",
          price: "₦15,000",
          reviews: 85,
          rating: 5,
          image: spic3,
        },
        {
          id: 4,
          title: "Denim Jacket Korea",
          price: "₦10,350",
          reviews: 768,
          rating: 5,
          image: spic4,
        },
        {
          id: 5,
          title: "Brown Leather Shoes",
          price: "₦15,000",
          reviews: 85,
          rating: 5,
          image: spic3,
        },
        {
          id: 6,
          title: "Denim Jacket Korea",
          price: "₦10,350",
          reviews: 768,
          rating: 5,
          image: spic4,
        },
      ],
    },
    // Duplicate for demo (as in screenshot)
    {
      id: 2,
      name: "Sheda Store",
      followers: 300,
      rating: 5,
      products: [
        {
          id: 1,
          title: "Big Size Men Glossy",
          price: "₦39,600",
          reviews: 343,
          rating: 5,
          image: spic1,
        },
        {
          id: 2,
          title: "Oraimo FreePods",
          price: "₦12,900",
          reviews: 500,
          rating: 5,
          image: spic2,
        },
        {
          id: 3,
          title: "Brown Leather Shoes",
          price: "₦15,000",
          reviews: 85,
          rating: 5,
          image: spic3,
        },
        {
          id: 4,
          title: "Denim Jacket Korea",
          price: "₦10,350",
          reviews: 768,
          rating: 5,
          image: spic4,
        },
        {
          id: 5,
          title: "Brown Leather Shoes",
          price: "₦15,000",
          reviews: 85,
          rating: 5,
          image: spic3,
        },
        {
          id: 6,
          title: "Denim Jacket Korea",
          price: "₦10,350",
          reviews: 768,
          rating: 5,
          image: spic4,
        },
      ],
    },
    {
      id: 3,
      name: "Sheda Store",
      followers: 300,
      rating: 5,
      products: [
        {
          id: 1,
          title: "Big Size Men Glossy",
          price: "₦39,600",
          reviews: 343,
          rating: 5,
          image: spic1,
        },
        {
          id: 2,
          title: "Oraimo FreePods",
          price: "₦12,900",
          reviews: 500,
          rating: 5,
          image: spic2,
        },
        {
          id: 3,
          title: "Brown Leather Shoes",
          price: "₦15,000",
          reviews: 85,
          rating: 5,
          image: spic3,
        },
        {
          id: 4,
          title: "Denim Jacket Korea",
          price: "₦10,350",
          reviews: 768,
          rating: 5,
          image: spic4,
        },
        {
          id: 5,
          title: "Brown Leather Shoes",
          price: "₦15,000",
          reviews: 85,
          rating: 5,
          image: spic3,
        },
        {
          id: 6,
          title: "Denim Jacket Korea",
          price: "₦10,350",
          reviews: 768,
          rating: 5,
          image: spic4,
        },
      ],
    },
  ];

  const StarRating = ({ count }) => (
    <div className="flex text-yellow-400 text-xs gap-[1px]">
      {Array(count)
        .fill()
        .map((_, i) => (
          <span key={i}>★</span>
        ))}
    </div>
  );

  return (
    <div className="font-Poppins flex flex-col items-center max-w-7xl mx-auto">
      <div className="p-0 sm:p-4 bg-white  space-y-8 mb-8 ">
        <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 mt-2 sm:mt-0">
          Stores
        </h2>
        {storesData.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 px-2 sm:px-6 pt-4 pb-6"
          >
            {/* Store Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#00137F] p-2 rounded-full flex items-center justify-center w-10 h-10">
                  {/* Store SVG icon */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="12" fill="#00137F" />
                    <path
                      d="M7 10V8.5A2.5 2.5 0 0 1 9.5 6h5A2.5 2.5 0 0 1 17 8.5V10"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 10h16l-.6 3.6a3 3 0 0 1-3 2.4H7.6a3 3 0 0 1-3-2.4L4 10Z"
                      fill="#fff"
                    />
                    <rect
                      x="9"
                      y="15"
                      width="6"
                      height="3"
                      rx="1"
                      fill="#FFB800"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <span className="text-base sm:text-xl font-medium text-gray-800 leading-none">
                      {store.name}
                    </span>
                    <StarRating count={store.rating} />
                  </div>
                  <div className="text-base font-normal text-gray-500 leading-none">
                    {store.followers} Followers
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <button className="text-[#00137F] flex items-center gap-2 text-base font-normal hover:underline">
                  See Profile <RiArrowDropRightLine className="text-3xl" />
                </button>
                <button className="bg-[#FFB800] text-white px-5 py-1.5 rounded font-medium text-sm shadow-sm">
                  Follow
                </button>
              </div>
            </div>
            {/* Product List - Horizontal Scroll */}
            <div className="overflow-x-auto flex items-center justify-center scrollbar-hide">
              <div className="flex gap-7 min-w-[700px] sm:min-w-0">
                {store.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm min-w-[170px] max-w-[170px] flex-shrink-0 p-3 flex flex-col items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-40 h-40 object-contain mb-2"
                    />
                    <div className="font-normal text-gray-800 text-base text-center truncate w-full mb-1">
                      {product.title}
                    </div>
                    <StarRating count={product.rating} />
                    <div className="text-base text-gray-500">
                      ({product.reviews} Reviews)
                    </div>
                    <div className="text-base font-bold text-gray-900 mt-1">
                      {product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#FFB800] text-white px-10 py-5 rounded font-semibold text-xl">
        View more stores
      </button>
    </div>
  );
};

export default Stores;
