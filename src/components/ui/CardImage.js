import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ unit }) => {
  return (
    <Link to={`/unit-${unit.serial}`}>
      <div className="hover:bg-yellow-400 flex flex-col justify-center items-center bg-white font-mono py-7">
        <img
          src={unit.image}
          unit={unit}
          key={unit.serial}
          className="rounded mb-5 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl mb-2">
            {unit.serial} - {unit.company}
          </h3>
          <p className="capitalize">
            {unit.drive} {unit.type}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
