import React from "react";
import styles from "../../styles/NavBar.module.css";
import { NavDropdown, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className={styles.main}>
      <style>
        {`
      .navbar-toggler:focus,.navbar-toggler:active,.navbar-toggler-icon:focus {
        outline:none;
        box-shadow:none;
        }
       
       
        
        `}
      </style>
      <Navbar expand="lg" variant="dark" className="container px-3 py-3 ">
        <Navbar.Brand href="#">Construction</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="text-secondary border-0"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto fs-5" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action3">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action5">Projects</Nav.Link>

            <Nav.Link href="#action6">About</Nav.Link>
            <Nav.Link href="#action7">Contact</Nav.Link>
          </Nav>

          <Button className="rounded-0 px-3 py-2 fs-5">Quotation</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
