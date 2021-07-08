import React, { useState, useEffect } from "react";
import CardImage from "../ui/CardImage";
import Descending from "../ui/Descending";
// import Spinner from "../ui/Spinner";
import unitz from './Unitz.json'

const UnitServerless = ({
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
//   const [isLoading, setIsLoading] = useState(true);
  const [reverse, setReverse] = useState(false);
  const onReverse = (e) => {
    e.preventDefault();
    setReverse(!reverse);
  };



  const getParsedUnits = () => {
    return unitz
      .filter((unit) => {
        if (searchTerm === "") {
          return unitz;
        } else if (unitz.type.toLowerCase().includes(searchTerm.toLowerCase())) {
          return unitz;
        } else if (
          unitz.company.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return unitz;
        } else if (
          unitz.serial.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return unitz;
        } else if (
          unitz.drive.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return unitz;
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
      {/* {isLoading ? (
        <div className="flex flex-col justify-center">
          <h1 className="text-xl md: text-3xl lg:text-5xl xl:text-7xl text-center mt-32 font-mono">
            Loading..
          </h1>
          <Spinner />
        </div>
      ) : ( */}
        <div>
          <h1 className="flex justify-center mb-5 text-gray-500 font-mono">
            {getParsedUnits().length} units to show
          </h1>
          <div className="flex justify-between">
            <Descending onReverse={onReverse} />
            {/* <View onView={onView} /> */}
          </div>
          {/* <div className={`grid grid-cols-${view ? "3" : "4"} gap-6`}> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reverse
              ? getParsedUnits().map((unit) => (
                  <CardImage unit={unit} key={unit.serial} />
                ))
              : getParsedUnits()
                  .reverse()
                  .map((unit) => <CardImage unit={unit} key={unit.serial} />)}
          </div>
        </div>
      {/* )} */}
    </section>
  );
};

export default UnitServerless;








