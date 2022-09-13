import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.css";

// ! The one difference in this navigation, are the Link components.
function Navbar() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar">
          <ul className={showIcons ? "navbar-menu active" : "nav_menu"}>
            <li className="nav_item">
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/projects" className="navbar-item">
                Projects
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/about" className="navbar-item">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/interests" className="navbar-item">
                Interests
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/skills" className="navbar-item">
                Skills
              </Link>
            </li>
          </ul>
          <div
            onClick={() => {
              setShowIcons(!showIcons);
            }}
            className={showIcons ? "hamburger active" : "hamburger"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
