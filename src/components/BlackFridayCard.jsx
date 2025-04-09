import React from "react";

const BlackFridayCard = ({ data }) => {
  const { logoUrl, line1, line2, line3, dateRange } = data;

  return (
    <div className="bg-black text-white rounded-[2rem] p-10 w-[344px] flex flex-col justify-center">
      {/* Logo Section */}
      <div className="flex items-start mb-6">
        <div className="bg-[#00137F] p-2 rounded-xl inline-block mr-4">
          <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-[10px]">
          <h2 className="text-4xl font-semibold uppercase tracking-wider">
            {line1}
          </h2>
          <h2 className="text-4xl font-semibold uppercase tracking-wider">
            {line2}
          </h2>
          <h2 className="text-4xl font-semibold uppercase tracking-wider">
            {line3}
          </h2>
        </div>
      </div>

      {/* Date Range Section */}
      <div className="border-2 border-[#FFB800] rounded-[16px] px-6 py-2 self-center">
        <p className="text-white text-xl font-mediu">{dateRange}</p>
      </div>
    </div>
  );
};

export default BlackFridayCard;
