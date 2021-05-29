import React, { useState, useEffect } from "react";
import UnitItem from "./UnitItem";
import UnitItemCard from "./UnitItemCard";

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
  useEffect(() => {
    const getUnits = async () => {
      const unitsFromServer = await fetchUnits();
      setUnits(unitsFromServer);
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
    <section className="cards">
      {units
        .filter((unit) => {
          if (searchTerm === "") {
            return unit;
          } else if (
            unit.type.toLowerCase().includes(searchTerm.toLowerCase())
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
          driveType === "" ? (unit) => unit : (unit) => driveType === unit.drive
        )
        .filter(type === "" ? (unit) => unit : (unit) => type === unit.type)
        .filter(
          screeningMedia.length === 0
            ? (unit) => unit
            : (unit) => screeningMedia === unit.screeningMedia
        )
        .filter(
          covers === "" ? (unit) => unit : (unit) => covers === unit.covers
        )
        .filter(
          liners.length === 0
            ? (unit) => unit
            : (unit) => liners === unit.liners
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
          <UnitItemCard unit={unit} key={unit.serial} />
        ))}
    </section>
  );
};

export default UnitGrid;
