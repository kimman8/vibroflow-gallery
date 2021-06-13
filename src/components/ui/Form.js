import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import UnitGrid from "../units/UnitGrid";
import { useLocation } from "react-router-dom";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      background: "white",
      borderRadius: 5,
    },
  },
  colorSecondary: {
    "& .MuiInput-colorSecondary": {
      color: "secondary",
    },
  },
}));

const Form = () => {
  const classes = useStyles();
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
  const refreshPage = () => {
    window.location.reload();
  };

  let location = useLocation();

  return (
    <section className="container max-w-full px-52 mx-auto ">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="mt-5">
          <div className="flex justify-between">
            <TextField
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
            <div className="grid grid-cols-4 gap-4">
              <TextField
                id="supportFrame"
                select
                label="Support Frame"
                value={supportFrame}
                onChange={(e) => setSupportFrame(e.target.value)}
                helperText=""
                color="secondary"
              >
                {supportFrameOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="covers"
                select
                label="Covers"
                value={covers}
                onChange={(e) => setCovers(e.target.value)}
                helperText=""
              >
                {coverOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="material"
                select
                label="Material Construction"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                {materialOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="driveType"
                select
                label="Drive Type"
                value={driveType}
                onChange={(e) => setDriveType(e.target.value)}
                helperText=""
              >
                {driveTypeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="type"
                select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="screeningMedia"
                select
                label="Screening Media"
                value={screeningMedia}
                onChange={(e) => setScreeningMedia(e.target.value)}
              >
                {screeningMediaOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="liners"
                select
                label="Liners"
                value={liners}
                onChange={(e) => setLiners(e.target.value)}
              >
                {linerOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="supports"
                select
                label="Supports"
                value={supports}
                onChange={(e) => setSupports(e.target.value)}
              >
                {supportOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <button
                className="bg-red-500 hover:bg-red-600 ring ring-pink-600 ring-offset-2 mt-1 mb-5 ml-1 text-bold rounded text-white font-mono py-2 px-4"
                onClick={refreshPage}
              >
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
export default Form;
