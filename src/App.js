import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Header from "./components/ui/Header";
import UnitGrid from "./components/units/UnitGrid";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [supportFrameCheckbox, setSupportFrameCheckbox] = useState(false);
  const [coversCheckbox, setCoversCheckbox] = useState(false);

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
            <label>Support Frame</label>
            <input
              type="checkbox"
              value={supportFrameCheckbox}
              onChange={(e) => setSupportFrameCheckbox(e.currentTarget.checked)}
            />
          </div>
          <div>
            <label>Covers</label>
            <input
              type="checkbox"
              value={coversCheckbox}
              onChange={(e) => setCoversCheckbox(e.currentTarget.checked)}
            />
          </div>
        </form>
      </section>
      <UnitGrid
        searchTerm={searchTerm}
        supportFrameCheckbox={supportFrameCheckbox}
        coversCheckbox={coversCheckbox}
      />
    </div>
  );
};

export default App;
