import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Pupster
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pow"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              POW
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pos"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              POS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/news"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
