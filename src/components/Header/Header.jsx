import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ borderRadius: "5px" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="70px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand>MedReminder</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Logged in</Nav.Link>
            <Navbar.Text>
              <a href="#login">
                <FaUserAlt size={20} />
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
