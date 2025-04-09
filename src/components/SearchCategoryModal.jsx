import React from "react";

const SearchCategoryModal = ({ isOpen, onClose, onSelectCategory }) => {
  const categories = {
    "Computers and Accessories": {
      Laptops: [
        "Mini Laptops",
        "Notebooks",
        "Ultrabooks",
        "Hybrid PCs",
        "MacBooks",
      ],
      "Desktop and Monitors": [
        "CPUs",
        "Monitors",
        "UPS",
        "Servers",
        "All in Ones",
      ],
      "Computing Accessories": [
        "Computer Peripherals",
        "Bags, Cases, Covers & Sleeves",
        "Laptop & Desktop Accessories",
        "Storage Devices",
      ],
      "Wifi & Networking": [
        "Switches",
        "Routers",
        "Modems",
        "Networking Peripherals",
      ],
      "Printers & Scanners": [
        "Printers",
        "Scanners",
        "Inks, Toners & Catridges",
      ],
      "PC Gaming": ["PC Games", "PC Gaming Accessories"],
    },
    "Phones and Tablets": {},
    Electronics: {},
    "Home and Kitchen": {},
    "Baby, Kids and Toys": {},
    Groceries: {},
    "Other Categories": {},
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex items-start justify-center pt-20"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-4">
        <div className="flex">
          {/* Main Categories */}
          <div className="w-1/4 bg-[#F5F5F5] p-4 rounded-l-lg">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className="py-3 px-4 cursor-pointer hover:bg-blue-50 rounded transition-colors text-gray-700 hover:text-[#00137F]"
              >
                {category}
              </div>
            ))}
          </div>

          {/* Subcategories Grid */}
          <div className="flex-1 p-6 grid grid-cols-3 gap-8">
            {/* Laptops Section */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-800">
                Laptops
              </h3>
              <ul className="space-y-3">
                {categories["Computers and Accessories"]["Laptops"].map(
                  (item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-[#00137F] text-gray-600"
                      onClick={() => {
                        onSelectCategory(item);
                        onClose();
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Desktop and Monitors Section */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-800">
                Desktop and Monitors
              </h3>
              <ul className="space-y-3">
                {categories["Computers and Accessories"][
                  "Desktop and Monitors"
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#00137F] text-gray-600"
                    onClick={() => {
                      onSelectCategory(item);
                      onClose();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Computing Accessories Section */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-800">
                Computing Accessories
              </h3>
              <ul className="space-y-3">
                {categories["Computers and Accessories"][
                  "Computing Accessories"
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#00137F] text-gray-600"
                    onClick={() => {
                      onSelectCategory(item);
                      onClose();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wifi & Networking Section */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-800">
                Wifi & Networking
              </h3>
              <ul className="space-y-3">
                {categories["Computers and Accessories"][
                  "Wifi & Networking"
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#00137F] text-gray-600"
                    onClick={() => {
                      onSelectCategory(item);
                      onClose();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Printers & Scanners Section */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-800">
                Printers & Scanners
              </h3>
              <ul className="space-y-3">
                {categories["Computers and Accessories"][
                  "Printers & Scanners"
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#00137F] text-gray-600"
                    onClick={() => {
                      onSelectCategory(item);
                      onClose();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PC Gaming Section */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-800">
                PC Gaming
              </h3>
              <ul className="space-y-3">
                {categories["Computers and Accessories"]["PC Gaming"].map(
                  (item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-[#00137F] text-gray-600"
                      onClick={() => {
                        onSelectCategory(item);
                        onClose();
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCategoryModal;
