import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light navbar-expand-md mynav sticky-top">
      <img
        className="mynav-logo ms-5 me-auto navbar-brand"
        role="button"
        src={Logo}
        alt="not available"
        onClick={() => {
          navigate("/");
        }}
      />
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcollapse"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarcollapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-auto my-2">
            <NavLink
              activeClassName="active"
              color="yellow"
              className="mynav-link p-1 m-3"
              to="/"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item mx-auto my-2">
            <NavLink
              activeClassName="active"
              className="mynav-link p-1 m-3"
              to="/work"
            >
              work
            </NavLink>
          </li>
          {/* <li className="nav-item mx-auto my-2">
            <NavLink
              activeClassName="active"
              className="mynav-link p-1 m-3"
              to="/contact"
            >
              Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
