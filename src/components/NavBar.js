import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-sm mynav sticky-top">
      <img
        className="mynav-logo ms-5 me-auto navbar-brand"
        role="button"
        src={Logo}
        alt="not available"
        onClick={() => {
          navigate("/");
        }}
      />
      <div class="ms-auto me-5">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              color="yellow"
              className="mynav-link p-1 m-3"
              to="/"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="mynav-link p-1 m-3"
              to="/work"
            >
              work
            </NavLink>
          </li>
          {/* <li className="nav-item">
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
