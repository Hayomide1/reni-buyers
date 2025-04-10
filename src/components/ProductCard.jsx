import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { imageUrl, title, reviewCount, rating, price } = product;

  const formatPrice = (price) => {
    // Basic NGN formatting, adjust if needed for more complex rules
    return `NGN ${price.toLocaleString()}`;
  };

  return (
    <div className="flex flex-col items-center w-full font-Poppins">
      {/* Image Card Section */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md w-full p-4 border border-gray-200 mb-4">
        <div className="flex items-center justify-center w-full aspect-square">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Details Section (Below Card) */}
      <div className="w-full text-center">
        <p className="text-gray-700 font-medium text-sm mb-2 truncate">
          {title}
        </p>
        <div className="flex items-center justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-yellow-400 ${i < rating ? "" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-gray-500 text-xs mb-2">({reviewCount} Reviews)</p>
        <p className="text-black font-semibold text-lg">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
