import React from "react";

const Become = () => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-white text-[#1C1340] p-4 py-[8rem]">
      <div className="h-full w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[7rem]">
          <div className="pb-2 w-full flex flex-col item-center justify-center ">
            <h3 className="text-5xl font-semibold pb-2 px-4 pt-6 mx-auto mb-4">
              Become goal-oriented
            </h3>
            <p className="leading-[2rem] text-xl text-[#746E8C] py-2 mx-auto my-3 px-4">
              Reduce the noise and focus on what really matters the most. Your
              goals.
            </p>
            <div className="mx-auto">
              <button className="text-lg font-semibold rounded-lg my-4 px-10 py-4 bg-[#50D38D] text-white hover:bg-[#28b369]">
                Try beta for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
