import React, { useState, useEffect } from "react";
import CardImage from "../ui/CardImage";
import Spinner from "../ui/Spinner";

const UnitGrid = ({
  searchTerm,
  supportFrame,
  driveType,
  type,
  covers,
  liners,
  supports,
  material,
  screeningMedia,
}) => {
  const [units, setUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [parsedUnits, setParsedUnits] = useState([]);

  useEffect(() => {
    const getUnits = async () => {
      const unitsFromServer = await fetchUnits();
      setUnits(unitsFromServer);
      setIsLoading(false);
      // setParsedUnits(getParsedUnits());
    };
    getUnits();
  }, []);

  const fetchUnits = async () => {
    const res = await fetch("http://localhost:5000/units");
    const data = await res.json();
    return data;
  };

  const getParsedUnits = () => {
    return units
      .filter((unit) => {
        if (searchTerm === "") {
          return unit;
        } else if (unit.type.toLowerCase().includes(searchTerm.toLowerCase())) {
          return unit;
        } else if (
          unit.company.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return unit;
        } else if (
          unit.serial.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return unit;
        } else if (
          unit.drive.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return unit;
        }
      })
      .filter(
        driveType === "" ? (unit) => unit : (unit) => driveType === unit.drive
      )
      .filter(type === "" ? (unit) => unit : (unit) => type === unit.type)
      .filter(
        screeningMedia.length === 0
          ? (unit) => unit
          : (unit) => screeningMedia === unit.screeningMedia
      )
      .filter(covers === "" ? (unit) => unit : (unit) => covers === unit.covers)
      .filter(
        liners.length === 0 ? (unit) => unit : (unit) => liners === unit.liners
      )
      .filter(
        supports === "" ? (unit) => unit : (unit) => supports === unit.supports
      )
      .filter(
        material === ""
          ? (unit) => unit
          : (unit) => material === unit.materialConstruction
      )
      .filter(
        supportFrame === ""
          ? (unit) => unit
          : (unit) => supportFrame === unit.supportFrame
      );
  };
  console.log(getParsedUnits());
  return (
    <section>
      {isLoading ? (
        <div className="flex  flex-col justify-center">
          <h1 className="text-8xl text-center mt-32 font-mono">Loading..</h1>
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className="flex justify-center mb-5 text-gray-500 font-mono">
            {getParsedUnits().length} units to show
          </h1>
          <div className="grid grid-cols-4 gap-6">
            {getParsedUnits().map((unit) => (
              <CardImage unit={unit} key={unit.serial} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default UnitGrid;
