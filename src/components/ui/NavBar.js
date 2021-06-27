import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
