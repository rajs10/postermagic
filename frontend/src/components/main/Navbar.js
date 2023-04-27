import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container">
        {/* Navbar brand */}
        
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/about">
                About
              </NavLink>
            </li>
          </ul>
          {/* Left links */}
          <div className="d-flex align-items-center">
          <NavLink to="/main/login" className="btn btn-light" data-mdb-ripple-color="dark">Login</NavLink>
          <NavLink to="/main/Signup" className="btn btn-dark">SignUp</NavLink>
            
          </div>
        </div>
        {/* Collapsible wrapper */}
      </div>
      {/* Container wrapper */}
    </nav>
    {/* Navbar */}
  </>
  )
}

export default Navbar