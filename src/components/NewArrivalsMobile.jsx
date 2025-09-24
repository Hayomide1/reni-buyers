import React from "react";
import { Link } from "react-router-dom";
import { newArrivals } from "../data/newArrivals";

const NewArrivalsMobile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">New Arrivals</h2>
        <Link to="/new-arrivals" className="text-primary hover:underline">
          View All
        </Link>
      </div>

      {/* Mobile Grid (3 columns, 2 rows) */}
      <div className="grid grid-cols-3 gap-4">
        {newArrivals.slice(0, 6).map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium line-clamp-2">{item.name}</h3>
              <p className="text-primary font-semibold mt-1">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsMobile;
