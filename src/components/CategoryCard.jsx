import React from "react";

const CategoryCard = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="font-Poppins flex flex-col items-center justify-center gap-4">
      <div className="bg-white rounded-2xl w-[13.1875rem] overflow-hidden shadow-navShadow p-4 flex flex-col items-center text-center h-[293px]">
        <div className="flex-grow flex items-center justify-center mb-3 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-40 w-auto object-contain"
          />
        </div>
      </div>
      <p className="text-gray-700  font-medium text-sm ">{title}</p>
    </div>
  );
};

export default CategoryCard;
