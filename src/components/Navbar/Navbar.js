import React from "react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
      <h1 className="fs-3 ubuntu navbar-brand">
        Rick & Morty <span className="text-primary"> Wiki </span>
      </h1>
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
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Pricing
            </a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
