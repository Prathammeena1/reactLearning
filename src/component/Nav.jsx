import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex w-full items-center justify-between">
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

{/* second part nav */}


      <div className="flex items-center gap-3">
        <Link
          // className="font-medium "
          to="/?category=wallpaper"
        >
          wallpaper
        </Link>
        <Link
          // className="font-medium "
          to="/?category=nature"
        >
          nature
        </Link>
        <Link
          // className="font-medium "
          to="/?category=3d-render"
        >
          3d render
        </Link>
        <Link
          // className="font-medium "
          to="/?category=animal"
        >
          animal
        </Link>
        <Link
          // className="font-medium "
          to="/?category=spirituality"
        >
          spirituality
        </Link>
      </div>
    </div>
  );
};

export default Nav;
