import "./App.css";
import { Layout } from "../src/components/ui/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import React, { useState } from "react";
import Header from "./components/ui/Header";
import Unit from "./components/units/Unit";
import Search from "./components/ui/Search";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Nav from "./components/ui/Nav";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="center">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/unit-:serial" component={Unit} />
            </Switch>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
