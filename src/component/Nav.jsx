import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { datacontext } from "./DataContext";

const Nav = () => {
    const {query,setquery} = useContext(datacontext)
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
      <div className="flex items-center gap-3">
        <h1 className="cursor-pointer hover:text-blue-400 transition-all ease capitalize" onClick={()=> setquery('wallpaper')}>wallpapers</h1>
        <h1 className="cursor-pointer hover:text-blue-400 transition-all ease capitalize" onClick={()=> setquery('nature')}>nature</h1>
        <h1 className="cursor-pointer hover:text-blue-400 transition-all ease capitalize" onClick={()=> setquery('3d-render')}>3d render</h1>
        <h1 className="cursor-pointer hover:text-blue-400 transition-all ease capitalize" onClick={()=> setquery('animal')}>animal</h1>
        <h1 className="cursor-pointer hover:text-blue-400 transition-all ease capitalize" onClick={()=> setquery('spirituality')}>spirituality</h1>
      </div>
    </div>
  );
};

export default Nav;
