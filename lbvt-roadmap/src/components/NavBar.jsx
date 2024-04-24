import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/Help"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Help
        </NavLink>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
