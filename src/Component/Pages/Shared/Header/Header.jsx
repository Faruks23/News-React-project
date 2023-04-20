import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";
import './Header.css'
const Header = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="fw-bolder">{moment().format("dddd ,MMM D, YYYY")}</p>
      </div>
      <div className="container align-items-center d-flex g-3 mb-5">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee className="text-danger">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... I can be a React component,
          multiple React components, or just some text.
        </Marquee>
      </div>

      {/* navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light "
        className="border rounded-3 sticky-top  nav-bar  shadow-sm"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-semibold">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
              
                <FaUserCircle className='user-icon'></FaUserCircle>
             
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="success">Log in</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;