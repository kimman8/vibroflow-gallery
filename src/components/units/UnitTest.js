import React, { useState } from "react";
import CardImage from "../ui/CardImage";
import Descending from "../ui/Descending";
import Units from "./UnitD";

const UnitTest = ({
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
  // const [parsedUnits, setParsedUnits] = useState([]);
  const [reverse, setReverse] = useState(true);

  const onReverse = (e) => {
    e.preventDefault();
    setReverse(!reverse);
  };
  const getParsedUnits = () => {
    return Units.units
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
  return (
    <section>
      <h1 className="flex justify-center mb-5 text-gray-500 font-mono">
        {getParsedUnits().length} units to show
      </h1>
      <div className="flex justify-between">
        <Descending onReverse={onReverse} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reverse
          ? getParsedUnits()
              .reverse()
              .map((unit, index) => {
                return <CardImage unit={unit} key={unit.serial} />;
              })
          : getParsedUnits().map((unit, index) => {
              return <CardImage unit={unit} key={unit.serial} />;
            })}
      </div>
    </section>
  );
};

export default UnitTest;
