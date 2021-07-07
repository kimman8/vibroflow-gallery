import "./App.css";
import "./index.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Unit from "./components/units/Unit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/ui/Home";
import Feeders from "./components/ui/Feeders";
import Nav from "./components/ui/Nav";
import Dropdown from "./components/ui/Dropdown";
import Conveyors from "./components/ui/Conveyors";
import Screens from "./components/ui/Screens";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/ui/globalStyles";
import Sidebar from "./components/ui/Sidebar";
import {motion} from 'framer-motion'
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
      <Sidebar />
      <AnimatePresence exitBeforeEnter>
        {isOpen && <Dropdown />}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/screens" component={Screens} />
          <Route path="/feeders" component={Feeders} />
          <Route path="/conveyors" component={Conveyors} />
          <Route path="/unit-:serial" component={Unit} />
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default App;
