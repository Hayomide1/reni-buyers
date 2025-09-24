import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const categories = () => {
  return (
    <div className="py-4 px-4 lg:px-16 w-full text-white bg-[#5569B0] font-Poppins text-default">
      <div className="flex text-xs sm:text-sm lg:text-base items-center lg:justify-start justify-center gap-6">
        <div className="flex items-center gap-4">
          <p>All Categories</p>
          <IoMdArrowDropdown className="hidden lg:block" />
        </div>
        <div className="flex items-center gap-4">
          <p>Today's Deals</p>
          <IoMdArrowDropdown className="hidden lg:block" />
        </div>
        <div>
          <p>Sell on ReniStore</p>
        </div>
        <div>
          <Link to="/stores" className="text-white hover:text-gray-300">
            <p>Stores</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default categories;
