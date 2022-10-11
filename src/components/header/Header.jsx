import React from "react";
import Button from "../button/Button";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="md:flex flex-row items-center justify-between md:mx-5 md:px-3 md:py-4 lg:py-4 flex">
        <div>
          <img src="/assets/logo.png" alt="artisto logo" />
        </div>
        <div className="w-3/5">
          <ul className="items-center justify-center flex-1 hidden space-x-8 md:flex">
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
        <h3 className="md:hidden lg:hidden" style={{ color: "white" }}>
          <GiHamburgerMenu />
        </h3>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
