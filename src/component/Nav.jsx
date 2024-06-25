import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [search, setsearch] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/?category=${search}`)
  };

  return (
    <div className="flex w-full items-center justify-between gap-2">
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

      {/* inp */}

      {/* second part nav */}

      <div className="flex items-center h-full gap-3">
        <form onSubmit={submitHandler}>
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="bg-transparent px-2 py-[2px] text-zinc-200 border border-zinc-700 rounded-sm"
          />
        </form>
        <Link
          className="capitalize hidden md:block "
          to="/?category=wallpaper"
        >
          wallpaper
        </Link>
        <Link
          className="capitalize hidden md:block "
          to="/?category=nature"
        >
          nature
        </Link>
        <Link
          className="capitalize hidden md:block "
          to="/?category=3d-render"
        >
          3d render
        </Link>
        <Link
          className="capitalize hidden md:block "
          to="/?category=animal"
        >
          animal
        </Link>
        <Link
          className="capitalize hidden md:block "
          to="/?category=spirituality"
        >
          spirituality
        </Link>
      </div>
    </div>
  );
};

export default Nav;
