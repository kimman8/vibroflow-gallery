import React from "react";
import { Link } from "react-router-dom";

const UnitItem = ({ unit }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Link to={`/unit-${unit.serial}`}>
            <img src={unit.image} alt="" />
            <p>
              {unit.serial} - {unit.company}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnitItem;
