import React from "react";

const WelcomeDealCard = ({ deal }) => {
  const {
    title,
    subtitle,
    productImage,
    currentPrice,
    originalPrice,
    discountPercentage,
  } = deal;

  const formatPrice = (price) => {
    return `NGN ${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-[20px] font-Poppins py-[14.5px] px-[35px] shadow-sm max-w-[21.5rem]">
      <div className="flex flex-col item-start gap-[16px]">
        {/* Title Section */}
        <div className="flex flex-col">
          <h2 className="text-[#FFB800] text-2xl font-semibold">{title}</h2>
          <p className="text-gray-600 text-default">{subtitle}</p>
        </div>

        {/* Product Image and Discount */}
        <div className="relative">
          <img
            src={productImage}
            alt={title}
            className="w-full object-contain"
          />
          <div className="absolute top-0 right-1 bg-[#00137F] text-white rounded-full px-1 py-6 text-2xl font-medium">
            -{discountPercentage}%
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-black font-semibold text-lg">
            {formatPrice(currentPrice)}
          </span>
          <span className="text-gray-400 font-semibold line-through text-lg">
            {formatPrice(originalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDealCard;
