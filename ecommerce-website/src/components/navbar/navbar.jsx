import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searcbar from './searchbar';

export default function MyNavbar({loggedIn, setLoggedIn}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {!loggedIn ? (
              <Nav.Link onClick={() => setLoggedIn(!loggedIn)}>Login</Nav.Link>
            ) : ''}
          </Nav>
        </Navbar.Collapse>
        {loggedIn ? (
          <NavDropdown title="Profile" id="basic-nav-dropdown" className='profile-nav'>
            <NavDropdown.Item >
              View Profile
            </NavDropdown.Item>
            <NavDropdown.Item >
              Orders
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLoggedIn(!loggedIn)}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : '' }
        <Searcbar/>
      </Container>
    </Navbar>
  );
}
