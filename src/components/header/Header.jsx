import React from "react";

const Header = () => {
  return (
    <div className="bg-[red] flex flex-row items-center justify-between mx-5 px-6 my-2">
      <div>
        <img src="/assets/logo.png" alt="artisto logo" />
      </div>
      <div>
        <ul className="flex flex-row items-center justify-between text-white">
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
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-none border-gray-700 rounded-tr-full rounded-bl-full group-hover:text-black w-48">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-tr-full rounded-bl-full bg-[#FBAF00]"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#fff] group-hover:-rotate-180 ease"></span>
                <span class="relative">Login</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-48 h-10 -mb-2 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-tr-full rounded-bl-full group-hover:mb-2 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </li>
          <li>
            <a href="3">
              <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Explore arts</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
