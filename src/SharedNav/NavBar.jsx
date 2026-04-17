import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "btn btn-sm bg-green-700 text-white"
      : "btn btn-sm btn-ghost";

  return (
    <div className="navbar bg-base-200 px-4 md:px-8 shadow-sm">

      {/* Logo */}
      <div className="flex-1">
        <h1 className="text-lg md:text-xl font-bold">KeenKeeper</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/timeline" className={linkStyle}>Timeline</NavLink>
        <NavLink to="/stats" className={linkStyle}>Stats</NavLink>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-sm">☰</label>
        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/timeline">Timeline</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;