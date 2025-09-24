import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineHelpOutline } from "react-icons/md";
import SearchCategoryModal from "./SearchCategoryModal";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [searchCategory, setSearchCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSearchCategory(category);
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-[#00137F] font-Poppins flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16 py-[26px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Reni's Logo"
              className="xl:h-16 xl:w-16 lg:h-14 lg:w-14 h-10 w-10"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="lg:flex-1 hidden lg:block max-w-3xl mx-4">
          <div className="flex">
            <div className="relative">
              <button
                className="h-16 px-4 bg-[#E3E3E3] text-[#8C8C8C] rounded-l-2xl flex items-center gap-2.5"
                onClick={() => setIsModalOpen(true)}
              >
                {searchCategory}
                <IoMdArrowDropdown className="text-[#8C8C8C]" />
              </button>
            </div>
            <div className="flex-1 rounded-r-2xl bg-white relative">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full text-default h-16 px-4 border-0 outline-none"
              />
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xl flex items-center justify-center text-white bg-[#FFC91C] rounded-[0.625rem] p-[1rem] z-[5]">
                <FiSearch className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm">🇺🇸</span>
            <span>EN</span>
            <IoMdArrowDropdown className="text-sm" />
          </div>

          {/* User Profile */}
          <div className="hidden lg:flex items-center gap-2 text-white">
            <FaRegCircleUser className="text-2xl" />
            <div className="flex flex-col">
              <span className="text-sm">Hello, sign in</span>
            </div>
            <IoMdArrowDropdown className="text-sm" />
          </div>

          {/* Help Button */}
          <div className="hidden lg:flex items-center gap-2 text-white">
            <MdOutlineHelpOutline className="text-2xl" />
            <span>Help</span>
            <IoMdArrowDropdown className="text-sm" />
          </div>

          {/* Cart */}
          <div className="relative text-white">
            <CiShoppingCart className="text-4xl lg:text-3xl" />
            <span className="absolute -top-2 -right-2 bg-[#FFB800] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              1
            </span>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <IoMenu className="text-white text-4xl" />
          </div>
        </div>
      </nav>

      <SearchCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectCategory={handleCategorySelect}
      />
    </>
  );
};

export default Navbar;
