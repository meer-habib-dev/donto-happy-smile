import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../../image/logo.png";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className=" md:block lg:block header flex align-middle">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <div className="header-container flex justify-between w-10/12 m-auto ">
              <Navbar.Brand className="my-0 my-auto">
                <div className="">
                  <img src={img} alt="" />
                </div>
              </Navbar.Brand>
              <div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto my-0 my-auto">
                    {" "}
                    <NavLink className="py-4" to="/home">
                      Home
                    </NavLink>
                    <NavLink className="py-4" to="/service">
                      Services
                    </NavLink>
                    <NavLink className="py-4" to="/contact">
                      Contact
                    </NavLink>
                    {user?.email ? (
                      <button onClick={logOut}>Log Out</button>
                    ) : (
                      <NavLink className="py-4" to="/login">
                        Log In
                      </NavLink>
                    )}
                    {!user.email && <NavLink to="/register">Register</NavLink>}
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
