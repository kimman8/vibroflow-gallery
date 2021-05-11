import React from "react";
import { unitData } from "../../unitData";
import UnitItem from "./UnitItem";

const UnitGrid = ({ searchTerm, supportFrameCheckbox, coversCheckbox }) => {
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
          //trying to experiment with checkbox searching
          //only works with supportframe by itself or covers by itself but not both.

          // else
          // if (
          //   supportFrameCheckbox === unit.supportFrame &&
          //   coversCheckbox === unit.covers
          // ) {
          //   return unit;
          // }
          // else
          // if (coversCheckbox === unit.covers) {
          //   return unit;
          // }
        })
        .map((unit) => (
          <UnitItem unit={unit} key={unit.serial} />
        ))}
    </section>
  );
};

export default UnitGrid;
