import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import UnitGrid from "./components/units/UnitGrid";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <Header className="center" />
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search units"
            autoFocus
          />
        </form>
      </section>
      <UnitGrid searchTerm={searchTerm} />
    </div>
  );
};

export default App;
