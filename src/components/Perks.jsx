import React from "react";
import Perk1 from "../assets/Perk1";
import Perk2 from "../assets/Perk2";
import Perk3 from "../assets/Perk3";

const Perks = () => {
  return (
    <div className="h-full w-full flex justify-between items-center bg-white text-[#1C1340] p-4 py-[8rem]">
      <div className="h-full w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[7rem]">
          <div className="pb-2">
            <Perk1 className="" />
            <h3 className="text-2xl font-semibold py-2 pt-6">Goal-based</h3>
            <p className="leading-[2rem] text-xl text-[#746E8C] py-2">
              Democratize your roadmap by setting goals with context, instead of
              creating a wall of tasks.
            </p>
          </div>
          <div className="pb-2">
            <Perk2 className="" />
            <h3 className="text-2xl font-semibold py-2 pt-6">Collaborative</h3>
            <p className="leading-[2rem] text-xl text-[#746E8C] py-2">
              Simple and effortless collaboration without any limitations.
              Everyone is invited to the party!
            </p>
          </div>
          <div className="pb-2">
            <Perk3 className="" />
            <h3 className="text-2xl font-semibold py-2 pt-6">Transparent</h3>
            <p className="leading-[2rem] text-xl text-[#746E8C] py-2">
              Get a birds-eye view of the progress you make as well as personal
              updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
