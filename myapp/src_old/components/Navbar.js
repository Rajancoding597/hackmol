import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          <NavLink to="/" exact="true" className="title">
            Klean
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                exact="true"
                className={(navData) =>
                  navData.isActive ? "nav-links-active" : "nav-links"
                }
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                exact="true"
                className={(navData) =>
                  navData.isActive ? "nav-links-active" : "nav-links"
                }
              >
                about
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
