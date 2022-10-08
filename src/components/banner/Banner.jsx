import React from "react";
import Button from "../button/Button";
import { Outlet } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="w-2/4 flex flex-col gap-x-24">
          <div>
            <h1 className="text-7xl">
              Discover amazing art around the
              <span className="text-[#FBAF00]">world</span>
            </h1>
          </div>
          <div>
            <p>
              Browse a curated selection of art around the world, Including
              museum exhibitions, galley openings, upcoming and many more
            </p>
          </div>
          <div>
            <Button children="Explore arts" />
          </div>
        </div>
        <div className="relative">
          <span className="relative">
            <img src="/assets/banner.png" alt="levi mattia" />
          </span>
          <span class="absolute -mb-1 -mr-1 bg-[#FBAF00]"></span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Banner;
