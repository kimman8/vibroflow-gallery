import React from "react";

const UnitItem = ({ unit }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={unit.image} alt="" />
          {/* <img src={dsf} alt="" /> */}
        </div>
        <div className="card-back">
          <h1>
            {unit.serial}-{unit.company}
          </h1>
          <ul>
            <li>
              <strong>Drive Type: </strong> {unit.drive}
            </li>
            <li>
              <strong>Unit Type: </strong> {unit.type}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnitItem;
