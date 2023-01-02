import React from "react";
import Logo from "../assets/Logo";

const Footer = () => {
  return (
    <div className="h-full w-full flex justify-between items-center bg-white text-[#1C1340] p-4 py-[1rem]">
      <div className="h-full w-full max-w-[1240px] flex justify-between mx-auto">
        <div className="sm:flex items-center p-2 hidden ">
          <a href="#">
            <Logo />
          </a>
          <p className="px-3 text-sm font-semibold text-[#746E8C]">
            Goal-based project management.
          </p>
        </div>

        <div>
          <ul className="flex flex-row justify-between items-center gap-[2.5rem]">
            <li>
              <button className="text-sm font-semibold text-[#50D38D] rounded-lg hover:border-[#b3eece] hover:bg-[#b3eece] m-2 px-2 py-1">
                Twitter
              </button>
            </li>
            <li>
              <button className="text-sm font-semibold text-[#50D38D] rounded-lg hover:border-[#b3eece] hover:bg-[#b3eece] m-2 px-2 py-1">
                Contact Us
              </button>
            </li>
            <li>
              <button className="text-sm font-semibold text-[#50D38D] rounded-lg hover:border-[#b3eece] hover:bg-[#b3eece] m-2 px-2 py-1">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
