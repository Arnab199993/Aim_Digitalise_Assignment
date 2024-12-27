import { useState } from "react";
import MenuList from "../MenuList/Index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-[#697780] text-white p-4">
        <button onClick={() => setIsOpen(true)} className="text-white ">
          <svg className="w-6 h-6" stroke="white">
            <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#697780] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 text-center text-lg font-semibold">Menu</div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white "
        >
          <svg className="w-6 h-6" stroke="white">
            <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <MenuList />
      </div>

      <div className="hidden md:block w-64 bg-[#697780] text-white">
        <div className="p-4 text-center text-lg font-semibold">Dashboard</div>
        <MenuList />
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 "
        ></div>
      )}
    </>
  );
};

export default Navbar;
