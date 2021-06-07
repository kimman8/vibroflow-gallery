import "./App.css";
import { Layout } from "../src/components/ui/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/ui/Header";
import Unit from "./components/units/Unit";
import Search from "./components/ui/Search";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Nav from "./components/ui/Nav";
import HeroSection from "./components/HeroSection";
import Hero from "./components/ui/Hero";
import Content from "./components/ui/Content";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <div className="center">
          {/* <Header /> */}
          <div>
            <Hero />
            <Content />
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
