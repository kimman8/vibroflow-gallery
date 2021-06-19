import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="grid grid-rows-4 text-center items-center bg-yellow-500">
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
  );
};

export default Dropdown;
