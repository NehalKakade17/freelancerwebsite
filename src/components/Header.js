import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="FreelancerApp Logo"
            width="90"  // Adjust the width as needed
            height="80"  // Adjust the height as needed
            style={{
                borderRadius: '100%',  // Makes the image circular
              }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/hire">Hire Freelancers</Nav.Link>
            <Nav.Link as={Link} to="/find">Find Projects</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


