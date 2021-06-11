import React, { Fragment, useState, useEffect } from "react";
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
        <div className="container mx-auto ">
          <h1 className="text-5xl font-mono flex justify-center mt-3">
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
