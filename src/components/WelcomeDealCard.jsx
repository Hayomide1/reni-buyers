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
    <div className="bg-white rounded-[20px] font-Poppins xl:py-[14.5px] sm:py-[12px] py-[7px] px-[10px] sm:px-[20px] xl:px-[35px] shadow-sm sm:max-w-[21.5rem] max-w-[18rem]">
      <div className="flex flex-col item-start xl:gap-[8px]">
        {/* Title Section */}
        <div className="flex flex-col">
          <h2 className="text-[#FFB800] text-lg sm:text-xl xl:text-2xl font-semibold">
            {title}
          </h2>
          <p className="text-black text-xs sm:text-sm lg:text-default">
            {subtitle}
          </p>
        </div>

        {/* Product Image and Discount */}
        <div className=" relative">
          <img
            src={productImage}
            alt={title}
            className="w-full h-[190px] sm:h-[250px] xl:h-full object-contain"
          />
          <div className="absolute top-0 right-1 bg-[#00137F] text-white rounded-full px-1 py-2 xl:py-6 text-sm xl:text-2xl font-medium">
            -{discountPercentage}%
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between ">
          <span className="text-black font-semibold text-xs sm:text-sm xl:text-lg">
            {formatPrice(currentPrice)}
          </span>
          <span className="text-gray-400 font-semibold line-through text-xs sm:text-sm xl:text-lg">
            {formatPrice(originalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDealCard;
