import React from "react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
      <Link to="/" className="fs-3 ubuntu navbar-brand">
        Rick & Morty <span className="text-primary"> Wiki </span>
      </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink to ="/" class="nav-link" >
              Characters
            </NavLink>
            <NavLink to="/episodes"class="nav-link" >
              Episodes
            </NavLink>
            <NavLink to="/Location" class="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
