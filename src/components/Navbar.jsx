import React from "react";
import Logo from "../assets/Logo";
const Navbar = () => {
  return (
    <div className="h-full w-full flex justify-between items-center bg-white text-[#1C1340] p-4 py-[1.5rem] sm:py-[3rem]">
      <div className="h-full w-full max-w-[1240px] flex justify-between mx-auto">
        <div className="flex items-center p-2">
          <a href="#">
            <Logo />
          </a>
        </div>
        {/* Above Mobile */}
        <div className="hidden sm:block">
          <button className=" font-semibold text-[#50D38D] rounded-lg hover:border-[#b3eece] hover:bg-[#b3eece] m-2 px-4 py-2">
            Login
          </button>
          <button className=" font-semibold rounded-lg m-2 px-4 py-2 bg-[#50D38D] text-white hover:bg-[#28b369]">
            Try for free
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button className=" font-semibold text-sm text-[#50D38D] rounded-lg hover:border-[#b3eece] hover:bg-[#b3eece] m-2 px-4 py-2">
            Login
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
