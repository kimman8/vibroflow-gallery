import "./App.css";
import "./index.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Unit from "./components/units/Unit";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/ui/Home";
import Nav from "./components/ui/Nav";
import Dropdown from "./components/ui/Dropdown";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/ui/globalStyles";
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
  let location = useLocation();

  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav toggle={toggle} />
      {/* <Sidebar /> */}
      <AnimatePresence exitBeforeEnter>
        {isOpen && <Dropdown />}
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/unit-:serial" component={Unit} />
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default App;
