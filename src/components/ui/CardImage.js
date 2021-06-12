import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ unit }) => {
  return (
    <Link to={`/unit-${unit.serial}`}>
      <div className="flex flex-col justify-center items-center bg-green-50 hover:bg-red-200 border-2  border-opacity-75 rounded-sm border-pink-700 hover:border-green-700 font-mono text-pink-700 py-7 text-black text-opacity-100 hover:text-opacity-75 p-1 hover:text-green-700 ">
        <img
          src={unit.image}
          unit={unit}
          key={unit.serial}
          className="rounded mb-5 shadow opacity-100 hover:opacity-90 border-2 border-blue-500"
        />
        <h1 className="text-xl mb-2 font-bold  ">
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
