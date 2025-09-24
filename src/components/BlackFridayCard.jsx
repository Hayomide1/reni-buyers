import React from "react";

const BlackFridayCard = ({ data }) => {
  const { logoUrl, line1, line2, line3, dateRange } = data;

  return (
    <div className="bg-black text-white rounded-2xl lg:rounded-[2rem] p-4 sm:p-6  xl:p-10 w-[11.9375rem] sm:w-[18rem] lg:w-[16rem]  xl:w-[21.5rem] xl:h-[400px] sm:h-[340px] flex flex-col items-center lg:items-start justify-center">
      {/* Logo Section */}
      <div className="lg:flex lg:flex-row flex-col items-center lg:items-start mb-6">
        <div className="bg-[#00137F] p-2 rounded-xl inline-block mr-4">
          <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-[10px]">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold uppercase tracking-wider">
            {line1}
          </h2>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold uppercase tracking-wider">
            {line2}
          </h2>
          <h2 className="text-2xl sm:text-3xl  xl:text-4xl font-semibold uppercase tracking-wider">
            {line3}
          </h2>
        </div>
      </div>

      {/* Date Range Section */}
      <div className="border-2 border-[#FFB800] rounded-[16px] px-6 py-2 self-center">
        <p className="text-white text-default sm:text-lg xl:text-2xl font-medium">
          {dateRange}
        </p>
      </div>
    </div>
  );
};

export default BlackFridayCard;
