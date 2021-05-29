import React, { Fragment, useState, useEffect } from "react";

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
  // console.log(unitProfile.profileImages);
  return (
    <Fragment>
      <div className="container">
        {unitProfile && (
          <div className="center">
            <h1>{match.params.serial}</h1>
            <h2>{unitProfile.type}</h2>
            <h2>{unitProfile.drive}</h2>
            <h2>Liners: {unitProfile.liners}</h2>

            {unitProfile.profileImages.map((profileImage, index) => (
              <img
                src={profileImage}
                alt=""
                profileImage={profileImage}
                key={index}
                className="profileImageContainer"
              />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Unit;
