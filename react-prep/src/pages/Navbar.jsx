import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/dashboard">dashboard</Link>
        <Link to="overview">Overview</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;