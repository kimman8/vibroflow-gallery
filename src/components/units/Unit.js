import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { unitData } from "../../unitData";

const Unit = ({ match }) => {
  console.log(match);
  console.log(unitData);
  console.log(unitData[0].company);
  console.log(unitData.filter((unit) => unit.serial === match.params.serial));
  const [unitProfile, setUnitProfile] = useState([]);
  useEffect(() => {
    function fetchUnit() {
      setUnitProfile(
        unitData.filter((unit) => unit.serial === match.params.serial)
      );
    }
    fetchUnit();
  }, [unitProfile]);
  console.log(unitProfile);

  return (
    <Fragment>
      <div className="container">
        <h1>{match.params.serial}</h1>
        {/* <h2>{unitProfile[0].company}</h2>
        <img src={unitProfile[0].image} alt="" style={{ width: "500px" }} />
        <h3>Liners: {unitProfile[0].liners}</h3> */}
      </div>
    </Fragment>
  );
};

export default Unit;
