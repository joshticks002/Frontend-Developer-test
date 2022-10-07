import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>
          <h2>Art in the collection</h2>
          <p>
            Browse a curated selection of art around the world, Including museum
            exhibitions, galley openings, upcoming and many more
          </p>
        </div>
        <div>
          <input placeholder="search" />
        </div>
      </div>
      <div>
        <h1>Body</h1>
      </div>
    </div>
  );
};

export default Categories;
