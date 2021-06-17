import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ unit }) => {
  return (
    <Link to={`/unit-${unit.serial}`}>
      <div className="flex flex-col items-center bg-blue-500 bg-opacity-75 hover:bg-red-200 border-2 border-opacity-75 rounded-sm border-pink-700 hover:border-green-700 font-mono text-yellow-400 text-opacity-100 hover:text-opacity-75 hover:text-green-700 transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out">
        <img
          src={unit.image}
          unit={unit}
          key={unit.serial}
          className="hover:opacity-90 border-b-2 border-pink-700"
        />
        <h1 className="text-base md:text-lg lg:text-xl font-bold">
          {unit.serial} - {unit.company}
        </h1>
        <p className="capitalize font-thin text-sm text-black">
          {unit.drive} {unit.type}
        </p>
      </div>
    </Link>
  );
};

export default CardImage;
