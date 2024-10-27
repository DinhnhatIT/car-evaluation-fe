import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComp.css";

function NavbarComp() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
      }}
    >
      <Navbar expand="lg" bg="light" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="custom-brand">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="navbar-logo"
              style={{ height: "80px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link
                as={Link}
                to="/car-valuation"
                className="text-secondary fw-bold"
              >
                <div className="nav-tab">Định giá xe</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/price-list-used-car"
                className="text-secondary fw-bold"
              >
                <div className="nav-tab">Thông tin</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
