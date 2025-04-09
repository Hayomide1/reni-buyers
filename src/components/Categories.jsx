import { IoMdArrowDropdown } from "react-icons/io";

const categories = () => {
  return (
    <div className="py-4 px-16 w-full text-white bg-[#5569B0] font-Poppins text-default">
      <div className="flex items-center justify-start gap-6">
        <div className="flex items-center gap-4">
          <p>All Categories</p>
          <IoMdArrowDropdown />
        </div>
        <div className="flex items-center gap-4">
          <p>Today's Deals</p>
          <IoMdArrowDropdown />
        </div>
        <div>
          <p>Sell on ReniStore</p>
        </div>
        <div>
          <p>Stores</p>
        </div>
      </div>
    </div>
  );
};

export default categories;
