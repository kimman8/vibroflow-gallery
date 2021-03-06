import React from "react";
import logo from "../../img/vibroflow-logo.png";

const Header = () => {
  return (
    <header className="w-40 h-16 flex items-center ml-12 hover:opacity-75 cursor-pointer">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
