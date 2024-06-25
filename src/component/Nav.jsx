import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex  w-full">
      <div className="flex py-5 items-center gap-3">
        <NavLink
          className={(e) =>
            e.isActive
              ? "font-medium text-lg text-blue-500 transition-all ease-in-out"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "font-medium text-lg text-blue-500 transition-all ease-in-out"
              : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Nav;
