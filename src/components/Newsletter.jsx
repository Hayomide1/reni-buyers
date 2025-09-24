import React from "react";
import newshead from "../assets/newshead.png";
import newstv from "../assets/newstv.png";

const Newsletter = () => {
  return (
    <div className="relative mx-4 lg:mx-16 h-[202px] lg:h-[375px] bg-[#C6CDE5] mb-[100px] font-Poppins overflow-visible rounded-2xl">
      {/* Left Image - Headphones */}
      <div className="absolute -left-9 -bottom-20 z-10">
        <img
          src={newshead}
          alt="Headphones"
          className="h-[116px] sm:h-[150px] lg:h-[300px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-accent text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
          Newsletter
        </h2>
        <p className="text-accent text-xs sm:text-sm lg:text-lg text-center max-w-[800px] mb-6">
          Subscribe to our newsletter to stay up-to-date with our latest offers
          and promotions
        </p>
        <div className="max-w-[25rem] lg:max-w-[37.5rem] px-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full text-sm lg:text-default px-6 py-3 rounded-xl text-gray-700 placeholder-gray-500 bg-white border-0 focus:outline-none pr-32"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FFB800] text-white px-6 py-2 rounded-xl text-sm lg:text-lg font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Right Image - TV */}
      <div className="absolute -right-3 lg:-right-6 -bottom-20 z-10">
        <img
          src={newstv}
          alt="Television"
          className="h-[116px] sm:h-[150px] lg:h-[354px] object-contain"
        />
      </div>
    </div>
  );
};

export default Newsletter;
