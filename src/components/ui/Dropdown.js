import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="grid grid-rows-4 text-center items-center bg-gray-200">
      <Link className="p-4 font-mono hover:opacity-75" to="/">
        Home
      </Link>
      <Link className="p-4 font-mono hover:opacity-75" to="/screens">
        Screens
      </Link>
      <Link className="p-4 font-mono hover:opacity-75" to="/feeders">
        Feeders
      </Link>
      <Link className="p-4 font-mono hover:opacity-75" to="/conveyors">
        Conveyors
      </Link>
    </div>
  );
};

export default Dropdown;
