import React, { Fragment, useState, useEffect } from "react";
import { unitData } from "../../unitData";

const Unit = ({ match }) => {
  const [unitProfile, setUnitProfile] = useState([]);
  useEffect(() => {
    function fetchUnit() {
      setUnitProfile(
        unitData.find((unit) => unit.serial === match.params.serial)
      );
    }
    fetchUnit();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h1>{match.params.serial}</h1>
        <h2>{unitProfile.type}</h2>
        <img key={unitProfile.serial} src={unitProfile.image} alt="" />

        <img src={unitProfile.profileImages1} alt="" />
        <img src={unitProfile.profileImages2} alt="" />
        <img src={unitProfile.profileImages3} alt="" />
        <img src={unitProfile.profileImages4} alt="" />
        <img src={unitProfile.profileImages5} alt="" />
        <img src={unitProfile.profileImages6} alt="" />
        <img src={unitProfile.profileImages7} alt="" />
        <h3>Liners: {unitProfile.liners}</h3>
      </div>
    </Fragment>
  );
};

export default Unit;
