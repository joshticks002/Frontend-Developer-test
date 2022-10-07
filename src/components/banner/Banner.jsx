import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h2>Discover amazing art around the world</h2>
        <p>
          Browse a curated selection of art around the world, Including museum
          exhibitions, galley openings, upcoming and many more
        </p>
        <div>button</div>
        <div>logo</div>
      </div>
      <div>
        <img src="/assets/banner.png" alt="levi mattia" />
      </div>
    </div>
  );
};

export default Banner;
