import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Badge
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from "axios"


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

  logOut = (e) => {
    // e.preventDefault()
    console.log('logging out')
    axios.post('/v1/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          email: null
        })
        localStorage.clear();
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }



  render() {
    return (
      <div>
        <Navbar light expand="md" fixed="top" style={{
          backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%"
        }}>
          <NavbarToggler style={{
            backgroundColor: "white"
          }} onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Container>
              <Nav navbar>
                <NavItem active>
                  <NavLink to="/home" className={
                    window.location.pathname === "/" || window.location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                    style={{
                      color: "white"
                    }}>Home</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/pow" className={window.location.pathname === "/pow"
                    ? "nav-link active"
                    : "nav-link"}
                    style={{
                      color: "white"
                    }}>POW</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/pos" className={window.location.pathname === "/pos"
                    ? "nav-link active"
                    : "nav-link"}
                    style={{
                      color: "white"
                    }}>POS</NavLink>
                </NavItem>
                {/* <NavItem active>
                  <NavLink to="/news" className={window.location.pathname === "/news"
                    ? "nav-link active"
                    : "nav-link"}
                    style={{
                      color: "white"
                    }}>News</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink to="/calculator" className={window.location.pathname === "/Calculator"
                    ? "nav-link active"
                    : "nav-link"}
                    style={{
                      color: "white"
                    }}>Calculator</NavLink>
                </NavItem>
                {!this.props.loggedIn && (
                  <NavItem className="ml-auto">
                    <NavLink to="/signup" className={window.location.pathname === "/signup"
                      ? "nav-link active"
                      : "nav-link"}
                      style={{
                        color: "white"
                      }}><h5><Badge color="light" pill>Sign Up</Badge></h5></NavLink>
                  </NavItem>
                )}

                {!this.props.loggedIn && (
                  <NavItem className="ml-right">
                    <NavLink to="/login" className={window.location.pathname === "/login" 
                      ? "nav-link active" 
                      : "nav-link"}
                      style={{
                        color: "white"
                      }}><h5><Badge color="light" pill>Log In</Badge></h5></NavLink>
                  </NavItem>
                )}

                {this.props.loggedIn && (
                  <NavItem className="ml-auto">
                    <NavLink to="/home" className={window.location.pathname === "/home" 
                      ? "nav-link active" 
                      : "nav-link"}
                      style={{
                        color: "white"
                      }} onClick={this.logOut}><h5><Badge color="light" pill>Log Out</Badge></h5></NavLink>
                  </NavItem>
                )}

              </Nav>
            </Container>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
