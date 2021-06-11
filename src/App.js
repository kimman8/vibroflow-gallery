import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import React, { useState } from "react";
import Unit from "./components/units/Unit";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Nav from "./components/ui/Nav";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/unit-:serial" component={Unit} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
