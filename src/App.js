import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import React, { useState } from "react";
import Header from "./components/ui/Header";
import Unit from "./components/units/Unit";
import Search from "./components/ui/Search";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Nav from "./components/ui/Nav";
import lol from "../src/unit-imgs/J317.jpg";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header className="center" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/unit-:serial" component={Unit} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
