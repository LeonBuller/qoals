import React from "react";
import GoalsImg from "../assets/GoalsImg3.svg";

const Goals3 = () => {
  return (
    <div className="h-full w-full flex justify-between items-center bg-white text-[#1C1340] sm:py-[10rem]">
      <div className="h-full w-full max-w-[1240px] mx-auto">
        {/* Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2">
          {/* Grid 1 */}

          <div className=" flex flex-col items-start justify-start  relative">
            <div className="absolute top-[-1rem] left-0 w-[23rem] h-[23rem] bg-[#FFB899] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div
              className="absolute bottom-0 right-[10rem]  w-[22rem] h-[22rem] bg-[#74e7d0] rounded-full 
        mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"
            ></div>
            <img src={GoalsImg} alt="" className="absolute" />
          </div>

          {/* Grid 2 */}

          <div className=" flex flex-col items-center justify-center py-[3.1rem]">
            <div className="w-full flex items-center justify-start px-[4rem] my-[2rem] mx-auto">
              <h1 className="text-4xl  font-semibold ">
                Collect resources, collectively.
              </h1>
            </div>
            <div className="flex items-center justify-start mx-[4rem]">
              <p className="text-xl text-[#746E8C] leading-relaxed ">
                Make the latest version of your documents, designs, issues,
                feedbacks... accessible. Just provide the link and voila! Living
                bookmarks for everyone, directly in your goal.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-col p-4 pt-[3rem] pb-[5rem]">
          <div className="my-[2rem]">
            <img src={GoalsImg} alt="" className="shadow-xl" />
          </div>
          <div className="flex items-center justify-start my-[1rem]">
            <h1 className="text-4xl pt-[1rem] pb-[2rem] font-semibold ">
              Set & prioritize your goals.
            </h1>
          </div>
          <div className="flex items-center justify-start ">
            <p className="text-xl text-[#746E8C] leading-relaxed ">
              Turn your project management into a source of information instead
              of a list of frustration. Communicate the timeframe & impact of
              your <br /> goals and democratize your roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals3;
