import React from "react";
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
    <div>
      <div className=" bg-[#C6CDE5]">
        <h1 className="text-4xl text-accent font-semibold text-center py-4 my-[32px]">
          Official Stores
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="w-[211px] h-[121px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
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
