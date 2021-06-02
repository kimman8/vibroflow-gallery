import React, { Fragment, useState, useEffect } from "react";
import HeroSection from "../HeroSection";
import GadModal from "../ui/GadModal";
import ImageSlider from "../ui/ImageSlider";

const Unit = ({ match, unit }) => {
  const [unitProfile, setUnitProfile] = useState(null);
  useEffect(() => {
    const getUnits = async () => {
      const unitsFromServer = await fetchUnits();
      setUnitProfile(
        unitsFromServer.find((unit) => unit.serial === match.params.serial)
      );
    };
    getUnits();
  }, []);

  const fetchUnits = async () => {
    const res = await fetch("http://localhost:5000/units");
    const data = await res.json();

    return data;
  };
  return (
    <Fragment>
      {unitProfile && (
        <div className="center">
          <h1>
            {match.params.serial}-{unitProfile.company}
          </h1>
          <ImageSlider unitProfile={unitProfile} />
          <GadModal />
        </div>
      )}
    </Fragment>
  );
};

export default Unit;
