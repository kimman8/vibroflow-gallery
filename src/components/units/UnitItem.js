import React from "react";

const UnitItem = ({ unit }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={unit.image} alt="" />
          <p>
            {unit.serial} - {unit.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnitItem;
