import React from "react";

const Button = ({ children, others }) => {
  return (
    <a
      href="#_"
      className="relative inline-block text-lg group w-40 text-center"
    >
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out  border-gray-900 rounded-tr-3xl rounded-bl-3xl group-hover:text-black">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-tr-3xl rounded-bl-3xl bg-[#FBAF00]"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#fff] group-hover:-rotate-180 ease"></span>
        <span className="relative text-sm flex flex-row justify-center">
          {children}
          <span className="ml-2 mt-1">{others}</span>
        </span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#fff] rounded-tr-3xl rounded-bl-3xl group-hover:-mb-1 group-hover:-mr-1 group-hover:bg-[#FBAF00]"
        data-rounded="rounded-lg"
      ></span>
    </a>
  );
};

export default Button;
