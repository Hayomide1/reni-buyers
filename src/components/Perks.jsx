import React from "react";
import plane from "../assets/plane.svg";
import gtd from "../assets/gtd.svg";
import slock from "../assets/slock.svg";
import timer from "../assets/timer.svg";
import support from "../assets/support.svg";
import shield from "../assets/shield.svg";

const Perks = () => {
  const perks = [
    {
      icon: plane,
      title: "Free Shipping",
    },
    {
      icon: gtd,
      title: "Money Guarantee",
    },
    {
      icon: slock,
      title: "Payment Method",
    },
    {
      icon: timer,
      title: "Swift Delivery",
    },
    {
      icon: support,
      title: "Online Support",
    },
    {
      icon: shield,
      title: "Buyer Protection",
    },
  ];

  return (
    <div className="flex font-Poppins justify-center">
      <div className=" grid grid-cols-3 lg:flex items-center lg:shadow-navShadow rounded-[16px] gap-8 lg:bg-white p-4">
        {perks.map((perk, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="lg:w-8 lg:h-8 w-6 sm:w-8 sm:h-8 h-6 mb-3">
              <img
                src={perk.icon}
                alt={perk.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-[#6B7CB4] text-center font-Poppins text-sm lg:text-base">
              {perk.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perks;
