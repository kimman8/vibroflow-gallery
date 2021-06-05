import React from "react";
import { Link } from "react-router-dom";

const Card = ({ unit }) => {
  return (
    <Link to={`/unit-${unit.serial}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={unit.image} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-700 text-xl mb-1">
            {unit.serial} - {unit.company}
          </div>
          <ul>
            <li>
              <strong>Type: </strong>
              {unit.type}
            </li>
            <li>
              <strong>Drive: </strong>
              {unit.drive}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {unit.liners}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {unit.screeningMedia}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            {unit.materialConstruction}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
//rounded overflow-hidden
