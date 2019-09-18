import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import "./style.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Container>
              <Nav navbar>
                <NavItem active>
                  <NavLink to="/home" className={
                    window.location.pathname === "/" || window.location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }>Home</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/pow" className={window.location.pathname === "/pow" ? "nav-link active" : "nav-link"}>POW</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/pos" className={window.location.pathname === "/pos" ? "nav-link active" : "nav-link"}>POS</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/news" className={window.location.pathname === "/news" ? "nav-link active" : "nav-link"}>News</NavLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <NavLink to="#" className={window.location.pathname === "#" ? "nav-link active" : "nav-link"}>Sign Up</NavLink>
                </NavItem>
                <NavItem className="ml-right">
                  <NavLink to="#" className={window.location.pathname === "#" ? "nav-link active" : "nav-link"}>Log In</NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
