import React from "react";
import Button from "../button/Button";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between mx-5 px-3 py-4">
        <div>
          <img src="/assets/logo.png" alt="artisto logo" />
        </div>
        <div className="w-3/5">
          <ul className="flex flex-row text-sm items-center justify-between text-white">
            <li>
              <a href="3">Events</a>
            </li>
            <li>
              <a href="3">Museums</a>
            </li>
            <li>
              <a href="3">Arts</a>
            </li>
            <li>
              <a href="3">Galleries</a>
            </li>
            <li>
              <Button children="Login" />
            </li>
            <li>
              <Button children="Explore arts" />
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
