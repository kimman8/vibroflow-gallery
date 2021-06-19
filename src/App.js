import "./App.css";
import "./index.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Unit from "./components/units/Unit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Nav from "./components/ui/Nav";
import Dropdown from "./components/ui/Dropdown";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <React.Fragment>
      <Router>
        <Nav toggle={toggle} />
        {isOpen && <Dropdown />}
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
