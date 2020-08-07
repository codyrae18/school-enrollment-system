<div>
  <h1>Navbar Testing</h1>
  <h1>Retry</h1>
</div>;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

export default class CustomNav extends Component {
  render() {
    // console.log("CustomNav", this.props.currentUser);
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Brand>
            <Link to="/" className="brand">
              Photo and Camera
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search all Posts ..."
              className=" mr-sm-2"
              name="search"
            />
          </Form>
          <Navbar.Collapse>
            <Nav className="nav-links">
              <div>
                <NavItem>Home</NavItem>
              </div>
              {!window.localStorage.getItem("username") ? (
                <h1> {window.localStorage.getItem("username")}</h1>
              ) : (
                <Link to="/profile">
                  <NavItem>Profile</NavItem>
                </Link>
              )}
              {window.localStorage.getItem("username") ? (
                <h1> {window.localStorage.getItem("")}</h1>
              ) : (
                <div>
                  <Link to="/login">
                    <NavItem>Login</NavItem>
                  </Link>
                  <Link to="/signup">
                    <NavItem>Sign Up</NavItem>
                  </Link>
                </div>
              )}

              <NavItem>
                <Button>Logout</Button>
              </NavItem>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
