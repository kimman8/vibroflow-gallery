import React, { useState, useEffect } from "react";
import CardImage from "../ui/CardImage";
import Descending from "../ui/Descending";
import Spinner from "../ui/Spinner";
import View from "../ui/View";

const FeedersDD = ({
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
  const [reverse, setReverse] = useState(false);
  const [view, setView] = useState(false);
  const onReverse = (e) => {
    e.preventDefault();
    setReverse(!reverse);
  };

  const onView = (e) => {
    e.preventDefault();
    setView(!view);
  };

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
      .filter((unit) => unit.drive === "direct drive")
      .filter((unit) => unit.type === "feeder");
  };
  return (
    <section>
      {isLoading ? (
        <div className="flex flex-col justify-center">
          <h1 className="text-xl md: text-3xl lg:text-5xl xl:text-7xl text-center mt-32 font-mono">
            Loading..
          </h1>
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className="flex justify-center mb-5 text-gray-500 font-mono">
            {getParsedUnits().length} Direct Drive Feeders to show
          </h1>

          <div className="grid  xl:mx-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3">
            {reverse
              ? getParsedUnits().map((unit) => (
                  <CardImage unit={unit} key={unit.serial} />
                ))
              : getParsedUnits()
                  .reverse()
                  .map((unit) => <CardImage unit={unit} key={unit.serial} />)}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedersDD;
