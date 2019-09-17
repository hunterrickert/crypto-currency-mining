import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavLeft className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">POS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">POW</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">News</NavLink>
              </NavItem>
            </NavLeft>
            <NavRight>
              <NavItem>
              <NavLink href="/components/">Sign Up</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/">Sign In</NavLink>
              </NavItem>
            </NavRight>
        </Navbar>
      </div>
    );
  }

export default Navbar;

