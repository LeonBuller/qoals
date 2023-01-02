import React from "react";
import HeroImg from "../assets/HeroImg.svg";

const Hero = () => {
  return (
    <div className="h-full w-full flex justify-between items-center bg-white text-[#1C1340] p-4 py-[3rem]">
      <div className="h-full w-full max-w-[1240px] mx-auto">
        {/* Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2">
          {/* Grid 1 */}
          <div className="py-[5rem] flex flex-col items-start justify-start">
            <h1 className="text-5xl w-full font-semibold  py-4 leading-[3.5rem] mb-6">
              Get aligned <br /> around your goals
            </h1>
            <p className="py-2 w-full text-xl text-[#746E8C] leading-relaxed">
              Simple & straightforward project management tool <br /> based on
              what really matters the most. Your goals.
            </p>
            <button className=" font-semibold rounded-lg my-4 px-10 py-5 bg-[#50D38D] text-white hover:bg-[#28b369]">
              Try beta for free
            </button>
          </div>

          {/* Grid 2 */}
          <div className="flex items-center relative">
            <div className="absolute top-[-1rem] left-0 w-[25rem] h-[25rem] bg-[#6A14BA] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 right-0  w-[20rem] h-[20rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[1rem] right-[2rem] w-[20rem] h-[20rem] bg-[#00C1FF] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-[-1rem]  left-0 w-[20rem] h-[20rem] bg-[#EB5757] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4500"></div>
            <img src={HeroImg} alt="" className="absolute" />
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-col ">
          <div>
            <img src={HeroImg} alt="" className="shadow-xl" />
          </div>
          <div className="py-[5rem] flex flex-col items-center justify-center">
            <h1 className="text-5xl w-full font-bold  py-4 leading-[3.5rem] mb-6">
              Get aligned <br /> around your goals
            </h1>
            <p className="py-2 w-full text-xl text-[#746E8C] leading-relaxed">
              Simple & straightforward project management tool <br /> based on
              what really matters the most. Your goals.
            </p>
            <button className=" font-semibold rounded-lg my-4 px-[4rem] py-5 bg-[#50D38D] text-white hover:bg-[#28b369]">
              Try beta for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
