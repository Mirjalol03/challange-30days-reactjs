import React from "react";
import { NavLink } from "react-router-dom";
// Context
const Navbar = () => {
  return (
    <nav className="navbar border mb-4">
      <div className="container">
        <div className="nav-links w-100 my-1 d-flex align-items-center justify-content-between">
          <NavLink className="btn btn-primary" to="/">
            Home
          </NavLink>

          <NavLink className="btn btn-primary" to="/create">
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
