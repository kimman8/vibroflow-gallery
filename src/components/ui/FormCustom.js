import React, { useState } from "react";
import UnitGrid from "../units/UnitGrid";
import SearchBar from "./SearchBar";

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
            {/* <select
              id="standard-basic"
              label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
            <div className="max-w-xl ">
              <div className="w-full flex items-center m-auto ">
                <a href="" className="absolute  hover:text-purple-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </a>
                <input
                  type="text"
                  className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded px-2 py-2 font-mono shadow-xl  text-center"
                  id="standard-basic"
                  placeholder="Search.."
                  label="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
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
              <div className="flex flex-col">
                <label for="supportFrame" className="font-mono p-1">
                  Support Frame:
                </label>
                <select
                  id="supportFrame"
                  select
                  label="Support Frame"
                  value={supportFrame}
                  onChange={(e) => setSupportFrame(e.target.value)}
                  helperText=""
                  color="secondary"
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {supportFrameOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

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
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {coverOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="covers" className="font-mono p-1">
                  Material Construction:
                </label>
                <select
                  id="material"
                  select
                  label="Material Construction"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {materialOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="driveType" className="font-mono p-1">
                  Drive Type:
                </label>
                <select
                  id="driveType"
                  select
                  label="Drive Type"
                  value={driveType}
                  onChange={(e) => setDriveType(e.target.value)}
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                  helperText=""
                >
                  {driveTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="type" className="font-mono p-1">
                  Type:
                </label>
                <select
                  id="type"
                  select
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {typeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="screeningMedia" className="font-mono p-1">
                  Screening Media:
                </label>
                <select
                  id="screeningMedia"
                  select
                  label="Screening Media"
                  value={screeningMedia}
                  onChange={(e) => setScreeningMedia(e.target.value)}
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {screeningMediaOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="liners" className="font-mono p-1">
                  Liners:
                </label>
                <select
                  id="liners"
                  select
                  label="Liners"
                  value={liners}
                  onChange={(e) => setLiners(e.target.value)}
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {linerOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="supports" className="font-mono p-1">
                  Supports:
                </label>
                <select
                  id="supports"
                  select
                  label="Supports"
                  value={supports}
                  onChange={(e) => setSupports(e.target.value)}
                  className="font-mono p-2 bg-green-400 rounded hover:bg-green-600"
                >
                  {supportOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

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
