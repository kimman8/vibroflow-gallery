import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ unit }) => {
  return (
    <Link to={`/unit-${unit.serial}`}>
      <div className="flex flex-col items-center  bg-opacity-75 hover:bg-gray-200 border-2 border-opacity-75 rounded-sm border-gray-700 hover:border-gray-700 font-mono text-black-400 text-opacity-100 hover:text-opacity-75 hover:text-gray-700 transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out">
        <img
          src={unit.image}
          unit={unit}
          key={unit.serial}
          className="hover:opacity-90 border-b-2 border-gray-700"
        />
        <h3 className="text-base md:text-lg lg:text-xl ">
          {unit.serial} - {unit.company}
        </h3>
        <p className="capitalize font-thin text-sm text-black italic">
          {unit.drive} {unit.type}
        </p>
      </div>
    </Link>
  );
};

export default CardImage;
