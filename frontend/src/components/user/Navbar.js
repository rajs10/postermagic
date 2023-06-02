import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const Navbar = () => {

  const { loggedIn, setLoggedIn, logout } = useUserContext();

  const showLoggedIn = () => {
    if (!loggedIn) {
      return (
        // <ul className="navbar-nav">
        <>
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/login">

            <button type="button" className="btn btn-primary me-3 mb-1">
              Login
            </button>
          </NavLink>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/signup">
            <button type="button" className="btn btn-primary me-3 mb-1">
              SignUp
            </button>
          </NavLink>
          {/* </li> */}
        </>
        // </ul >

      );
    }
  }

  const showLogout = () => {
    if (loggedIn) {
      return (
        <ul className="navbar-nav">
          {/* // <li className="nav-item"> */}
          {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                  Logout
              </button> */}
          <button type="button" className="btn btn-danger me-3 mb-2" onClick={logout}>
            LogOut
          </button>
          {/* // </li> */}
        </ul>
      );
    }
  }






  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0">
        {/* Container wrapper */}
        {/* Navbar brand */}
        <a className="navbar-brand m-0 p-1" href="/main/home">
          <img
            src="/images/ar.png"
            className="m-0"
            height={50}
            alt="Logo"
            loading="lazy"
          />
        </a>
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
              <NavLink className="nav-link" to="/user/manageimages">
                ManageMarker
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/managevideos">
                ManageVideo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/GeneratePoster">
                Create AR Poster
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/manageposters">
                Manage AR Poster
              </NavLink>
            </li>
            <li className="me-3 me-lg-0 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Contact us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/main/ContactUs">
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/main/about">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/main/feedback">
                    Feedback
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          {/* Left links */}
          <div className="d-flex align-items-center">
            {showLoggedIn()}
            {showLogout()}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
