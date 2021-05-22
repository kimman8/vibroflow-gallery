import React, { useState } from "react";
import UnitGrid from "../units/UnitGrid";
import Form from "./Form";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [supportFrame, setSupportFrame] = useState("All");
  const [driveType, setDriveType] = useState("All");
  const [type, setType] = useState("All");
  const [covers, setCovers] = useState("All");
  const [liners, setLiners] = useState("");
  const [screeningMedia, setScreeningMedia] = useState("");
  const [supports, setSupports] = useState("All");
  const [material, setMaterial] = useState("All");

  return (
    <section className="search">
      <form>
        {/* <Form /> */}
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          autoFocus
        />
        <div>
          <label htmlFor="Drive Type">Drive Type: </label>
          <select
            name="drive"
            id="drive"
            value={driveType}
            onChange={(e) => {
              setDriveType(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="direct drive">Direct Drive</option>
            <option value="sub resonant">Sub Resonant</option>
          </select>
        </div>
        <div>
          <label htmlFor="Type">Type: </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="feeder">Feeder</option>
            <option value="conveyor">Conveyor</option>
            <option value="screen">Screen</option>
            <option value="flip flow">Flip Flow</option>
            <option value="blower">Blower</option>
            <option value="cooler">Cooler</option>
          </select>
        </div>
        <div>
          <label>Screening Media</label>
          <select
            name="screeningMedia"
            id="screeningMedia"
            value={screeningMedia}
            onChange={(e) => {
              setScreeningMedia(e.target.value);
            }}
          >
            <option value="">-</option>
            <option value="none">None</option>
            <option value="mesh">Woven Wire Mesh</option>
            <option value="poly panel">Poly Panel</option>
            <option value="poly mat">Poly Mat</option>
            <option value="perforated plate">Perforated Plate</option>
            <option value="finger">Finger</option>
          </select>
        </div>
        <div>
          <label htmlFor="Liner Type">Liner Type</label>
          <select
            name="liners"
            id="liners"
            value={liners}
            onChange={(e) => setLiners(e.target.value)}
          >
            <option value="">-</option>
            <option value="none">None</option>
            <option value="poly">Poly</option>
            <option value="bisalloy">Bisalloy</option>
            <option value="ceramic">Ceramic</option>
          </select>
        </div>
        <div>
          <label htmlFor="Material">Material</label>
          <select
            name="material"
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option value="All">All</option>
            <option value="MS G250">MS G250</option>
            <option value="SS">SS</option>
          </select>
        </div>

        <div>
          <label>Covers: </label>
          <select
            name="covers"
            id="covers"
            value={covers}
            onChange={(e) => {
              setCovers(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="with">With</option>
            <option value="without">Without</option>
          </select>
        </div>
        <div>
          <label htmlFor="Supports">Support Type</label>
          <select
            name="supports"
            id="supports"
            value={supports}
            onChange={(e) => setSupports(e.target.value)}
          >
            <option value="All">All</option>
            <option value="oscillating mounts">Oscillating Mounts</option>
            <option value="steel coils">Steel Coils</option>
          </select>
        </div>
        <div>
          <label>Support Frame: </label>
          <select
            name="supportFrame"
            id="supportFrame"
            value={supportFrame}
            onChange={(e) => setSupportFrame(e.target.value)}
          >
            <option value="All">All</option>
            <option value="with">With</option>
            <option value="without">Without</option>
          </select>
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

export default Search;
