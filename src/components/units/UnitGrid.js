import React from "react";
import { Link } from "react-router-dom";
import { unitData } from "../../unitData";
import UnitItem from "./UnitItem";

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
          screeningMedia.length === 0
            ? (unit) => unit
            : (unit) => screeningMedia === unit.screeningMedia
        )
        .filter(
          covers === "All" ? (unit) => unit : (unit) => covers === unit.covers
        )
        .filter(
          liners.length === 0
            ? (unit) => unit
            : (unit) => liners === unit.liners
        )
        .filter(
          supports === "All"
            ? (unit) => unit
            : (unit) => supports === unit.supports
        )
        .filter(
          material === "All"
            ? (unit) => unit
            : (unit) => material === unit.materialConstruction
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
