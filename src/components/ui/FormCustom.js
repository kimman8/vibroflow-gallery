import React, { useState } from "react";
import UnitGrid from "../units/UnitGrid";

const supportFrameOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "with",
    label: "With",
  },
  {
    value: "without",
    label: "Without",
  },
];

const linerOptions = [
  {
    value: "",
    label: "-",
  },
  {
    value: "none",
    label: "None",
  },
  {
    value: "poly",
    label: "Poly",
  },
  {
    value: "bisalloy",
    label: "Bisalloy",
  },
  {
    value: "ceramic",
    label: "Ceramic",
  },
];

const typeOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "feeder",
    label: "Feeder",
  },
  {
    value: "conveyor",
    label: "Conveyor",
  },
  {
    value: "screen",
    label: "Screen",
  },
  {
    value: "flip flow",
    label: "Flip Flow",
  },
  {
    value: "blower",
    label: "Blower",
  },
  {
    value: "cooler",
    label: "Cooler",
  },
  {
    value: "crusher",
    label: "Crusher",
  },
  {
    value: "spiral",
    label: "Spiral",
  },
];
const materialOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "MS G250",
    label: "MS G250",
  },
  {
    value: "SS",
    label: "SS",
  },
];

const coverOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "with",
    label: "With",
  },
  {
    value: "without",
    label: "Without",
  },
];

const driveTypeOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "direct drive",
    label: "Direct Drive",
  },
  {
    value: "sub resonant",
    label: "Sub Resonant",
  },
];

const screeningMediaOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "none",
    label: "None",
  },
  {
    value: "mesh",
    label: "Woven Wire Mesh",
  },
  {
    value: "poly panel",
    label: "Poly Panel",
  },
  {
    value: "poly mat",
    label: "Poly Mat",
  },
  {
    value: "perforated plate",
    label: "Perforated Plate",
  },
  {
    value: "ball deck",
    label: "Ball Deck",
  },
  {
    value: "finger",
    label: "Finger",
  },
];

const supportOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "steel coils",
    label: "Steel Coils",
  },
  {
    value: "oscillating mounts",
    label: "Oscillating Mounts",
  },
];

const FormCustom = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [supportFrame, setSupportFrame] = useState("");
  const [driveType, setDriveType] = useState("");
  const [type, setType] = useState("");
  const [covers, setCovers] = useState("");
  const [liners, setLiners] = useState("");
  const [screeningMedia, setScreeningMedia] = useState("");
  const [supports, setSupports] = useState("");
  const [material, setMaterial] = useState("");

  return (
    <section className="px-1 2xl:px-4 md:px-2 lg:px-3 mx-auto ">
      <form>
        <div className="mt-5 ">
          <div className="flex justify-between items-center">
            <select
              id="standard-basic"
              label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 ring ring-green-700 ring-offset-2 mt-1 mb-5 ml-1 text-bold rounded text-white font-mono py-2 px-4"
              onClick={(e) => {
                e.preventDefault();
                setShowFilters(!showFilters);
              }}
            >
              {showFilters ? "Hide Filters ▲" : "Add Filters ▼"}
            </button>
          </div>
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-1 bg-opacity-30 bg-clip-border p-1 bg-indigo-200 border-4 border-indigo-300 rounded">
              <select
                id="supportFrame"
                select
                label="Support Frame"
                value={supportFrame}
                onChange={(e) => setSupportFrame(e.target.value)}
                helperText=""
                color="secondary"
              >
                {supportFrameOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="flex flex-col">
                <label for="covers" className="font-mono p-1">
                  Covers:
                </label>
                <select
                  id="covers"
                  select
                  label="Covers"
                  value={covers}
                  onChange={(e) => setCovers(e.target.value)}
                  helperText=""
                  className="font-mono p-2 bg-green-500 rounded hover:bg-green-700"
                >
                  {coverOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <select
                id="material"
                select
                label="Material Construction"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                {materialOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                id="driveType"
                select
                label="Drive Type"
                value={driveType}
                onChange={(e) => setDriveType(e.target.value)}
                helperText=""
              >
                {driveTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                id="type"
                select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                id="screeningMedia"
                select
                label="Screening Media"
                value={screeningMedia}
                onChange={(e) => setScreeningMedia(e.target.value)}
              >
                {screeningMediaOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                id="liners"
                select
                label="Liners"
                value={liners}
                onChange={(e) => setLiners(e.target.value)}
              >
                {linerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                id="supports"
                select
                label="Supports"
                value={supports}
                onChange={(e) => setSupports(e.target.value)}
              >
                {supportOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button className="bg-red-500 hover:bg-red-600 ring ring-pink-600 ring-offset-2 mt-1 mb-2 ml-1 text-bold rounded text-white font-mono py-1 px-3">
                Clear Filters
              </button>
            </div>
          )}
          <UnitGrid
            searchTerm={searchTerm}
            supportFrame={supportFrame}
            driveType={driveType}
            type={type}
            covers={covers}
            liners={liners}
            screeningMedia={screeningMedia}
            supports={supports}
            material={material}
          />
        </div>
      </form>
    </section>
  );
};
export default FormCustom;
