import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Nav = () => {
  return (
    <nav
      className="flex justify-between items-center h-24 bg-gray-800 text-white relative shadow-sm font-mono sticky top-0 "
      role="navigation"
    >
      <Link to="/" className="pl-1">
        <Header />
      </Link>
      <div className="px-4 cursor-pointer md:hidden hover:opacity-75">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden ">
        <Link className="p-4 font-mono hover:opacity-75" to="/">
          Home
        </Link>
        <Link className="p-4 font-mono hover:opacity-75" to="/menu">
          Menu
        </Link>
        <Link className="p-4 font-mono hover:opacity-75" to="/about">
          About
        </Link>
        <Link className="p-4 font-mono hover:opacity-75" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
