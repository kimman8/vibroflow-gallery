import React from "react";
import { unitData } from "../../unitData";
import UnitItem from "./UnitItem";

const UnitGrid = ({ searchTerm }) => {
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
        .map((unit) => (
          <UnitItem unit={unit} key={unit.serial} />
        ))}
    </section>
  );
};

export default UnitGrid;
