import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ unit }) => {
  return (
    <Link to={`/unit-${unit.serial}`}>
      <div className="flex flex-col justify-center items-center bg-white font-mono py-10">
        <img
          src={unit.image}
          unit={unit}
          key={unit.serial}
          className="rounded mb-5 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">
            {unit.serial} - {unit.company}
          </h2>
          <p className="mb-2 capitalize">
            {unit.drive} {unit.type}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
