import React from "react";
import { unitData } from "../../unitData";
import UnitItem from "./UnitItem";

const UnitGrid = ({ searchTerm, supportFrame, driveType, type, covers }) => {
  return (
    <section className="cards">
      {unitData
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
          driveType === "All"
            ? (unit) => unit
            : (unit) => driveType === unit.drive
        )
        .filter(type === "All" ? (unit) => unit : (unit) => type === unit.type)
        .filter(
          covers === "All" ? (unit) => unit : (unit) => covers === unit.covers
        )
        .filter(
          supportFrame === "All"
            ? (unit) => unit
            : (unit) => supportFrame === unit.supportFrame
        )
        .map((unit) => (
          <UnitItem unit={unit} key={unit.serial} />
        ))}
    </section>
  );
};

export default UnitGrid;
