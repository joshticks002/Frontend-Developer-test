import React from "react";
import Button from "../button/Button";
import { Outlet } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex flex-row justify-between mt-14 pt-10 h-screen">
        <div className="w-3/5 flex flex-col gap-x-24">
          <div className="w-3/4">
            <h1 className="text-3xl md:text-7xl font-medium">
              Discover amazing <span>art around the </span>
              <span className="text-[#FBAF00]">world</span>
            </h1>
          </div>
          <div>
            <p className="mt-11 md:w-2/5">
              Browse a curated selection of art around the world, Including
              museum exhibitions, gallery openings, upcoming and many more
            </p>
          </div>
          <div className="mt-11">
            <Button children="Explore arts" />
          </div>
        </div>
        <div className="relative mb-4 w-2/4 h-full">
          <span className="absolute z-30 md:mt-10 mr-14 md">
            <img src="/assets/vector.png" alt="strings" />
          </span>
          <span className="absolute z-20 ml-14">
            <img src="/assets/banner.png" alt="levi mattia" />
          </span>

          <span class="absolute z-10 bg-[#FBAF00] h-full"></span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Banner;
