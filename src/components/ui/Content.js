import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import CardImage from "./CardImage";

const Content = ({
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
  useEffect(() => {
    const getUnits = async () => {
      const unitsFromServer = await fetchUnits();
      setUnits(unitsFromServer);
      setIsLoading(false);
    };
    getUnits();
  }, []);

  const fetchUnits = async () => {
    const res = await fetch("http://localhost:5000/units");
    const data = await res.json();

    return data;
  };
  console.log(units);
  return (
    <section className="container mx-auto">
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading..</h1>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {units
            .filter((unit) => {
              if (searchTerm === "") {
                return unit;
              } else if (
                unit.type.toLowerCase() ||
                [].includes(searchTerm.toLowerCase())
              ) {
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
              driveType === ""
                ? (unit) => unit
                : (unit) => driveType === unit.drive
            )
            .filter(type === "" ? (unit) => unit : (unit) => type === unit.type)
            .filter(
              screeningMedia === ""
                ? (unit) => unit
                : (unit) => screeningMedia === unit.screeningMedia
            )
            .filter(
              covers === "" ? (unit) => unit : (unit) => covers === unit.covers
            )
            .filter(
              liners === "" ? (unit) => unit : (unit) => liners === unit.liners
            )
            .filter(
              supports === ""
                ? (unit) => unit
                : (unit) => supports === unit.supports
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
            )
            .map((unit) => (
              <CardImage unit={unit} key={unit.serial} />
            ))}
        </div>
      )}
    </section>
  );
};

export default Content;
