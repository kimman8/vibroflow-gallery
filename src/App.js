import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Header from "./components/ui/Header";
import UnitGrid from "./components/units/UnitGrid";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [supportFrame, setSupportFrame] = useState("All");
  const [driveType, setDriveType] = useState("All");
  const [type, setType] = useState("All");
  const [covers, setCovers] = useState("All");

  return (
    <div className="container">
      <Header className="center" />
      <section className="search">
        <form>
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
          </div>
        </form>
      </section>
      <UnitGrid
        searchTerm={searchTerm}
        supportFrame={supportFrame}
        driveType={driveType}
        type={type}
        covers={covers}
      />
    </div>
  );
};

export default App;
