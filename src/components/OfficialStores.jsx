import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hpstore from "../assets/hpstore.png";
import samsungstore from "../assets/samsungstore.png";
import applestore from "../assets/applestore.png";
import huaweistore from "../assets/huaweistore.png";
import vivostore from "../assets/vivostore.png";
import lenovostore from "../assets/lenovostore.png";
import tgistore from "../assets/tgistore.png";
import drugfieldstore from "../assets/drugfieldstore.png";
import lgstore from "../assets/lgstore.png";
import intelstore from "../assets/intelstore.png";
import itecstore from "../assets/itecstore.png";
import tecnostore from "../assets/tecnostore.png";

const OfficialStores = () => {
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

  const stores = [
    { image: hpstore, name: "HP" },
    { image: itecstore, name: "Itec" },
    { image: intelstore, name: "Intel" },
    { image: tecnostore, name: "Tecno" },
    { image: samsungstore, name: "Samsung" },
    { image: applestore, name: "Apple" },
    { image: huaweistore, name: "Huawei" },
    { image: vivostore, name: "Vivo" },
    { image: lenovostore, name: "Lenovo" },
    { image: tgistore, name: "TGI" },
    { image: drugfieldstore, name: "Drugfield" },
    { image: lgstore, name: "LG" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#C6CDE5]">
        <h1 className="text-2xl lg:text-4xl text-accent font-semibold text-center py-4 my-[32px]">
          Official Stores
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
          className="flex gap-6 items-center overflow-x-auto scrollbar-hide px-4 lg:px-16 py-[32px] md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-1"
        >
          {stores.map((store, index) => (
            <div
              key={index}
              className="w-[122px] lg:w-[211px] h-[64px] lg:h-[121px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 min-w-[122px] md:min-w-0 gap-y-0 gap-x-0"
              style={{
                backgroundImage: `url(${store.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficialStores;
