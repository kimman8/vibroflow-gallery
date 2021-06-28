import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import * as FaIcons from "react-icons/fa";

const Nav = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const [currentLink, setCurrentLink] = useState("");
  let background = {};
  switch (currentLink) {
    case "home":
      background = { backgroundColor: "rgba(31, 41, 55,1)" };
      break;
    case "screens":
      background = { backgroundColor: "transparent" };
      break;
    case "feeders":
      background = { backgroundColor: "transparent" };
      break;
    case "conveyors":
      background = { backgroundColor: "transparent" };
      break;
    default:
      background = {};
  }

  return (
    <nav
      className={`flex justify-between items-center h-16 bg-gray-800 text-white relative  font-bold font-mono transition duration-500 ease-in-out sticky top-0 z-10
        ${navbar && `sticky top-0 z-10 `}`}
      style={background}
      role="navigation"
    >
      <Link to="/" className="pl-1">
        <Header />
      </Link>
      <div className="px-4 cursor-pointer md:hidden hover:opacity-75">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden ">
        <Link
          className="p-4 font-mono hover:opacity-75"
          onClick={() => setCurrentLink("home")}
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 font-mono hover:opacity-75"
          onClick={() => setCurrentLink("screens")}
          to="/screens"
        >
          Screens
        </Link>
        <Link
          className="p-4 font-mono hover:opacity-75"
          onClick={() => setCurrentLink("feeders")}
          to="/feeders"
        >
          Feeders
        </Link>
        <Link
          className="p-4 font-mono hover:opacity-75"
          to="/conveyors"
          onClick={() => setCurrentLink("conveyors")}
        >
          Conveyors
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
