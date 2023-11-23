import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './searchbar';
import CartBtn from './cartBtn';

export default function MyNavbar({loggedIn, setLoggedIn, profile, setProfile, setCartPage}) {
  useEffect(() => {
    setProfile(false)
  }, [loggedIn])

  function handleProfileClick() {
    setProfile(true)
    setCartPage(false)
  }

  function handleHomeClick() {
    setProfile(false)
    setCartPage(false)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleHomeClick()}>Home</Nav.Link>
            {!loggedIn ? (
              <Nav.Link onClick={() => setLoggedIn(!loggedIn)}>Login</Nav.Link>
            ) : ''}
          </Nav>
        </Navbar.Collapse>
        {loggedIn ? (
          <NavDropdown title="Profile" id="basic-nav-dropdown" className='profile-nav'>
            <NavDropdown.Item onClick={() => handleProfileClick()}>
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
        <SearchBar/>
        <CartBtn setCartPage={setCartPage} setProfile={setProfile}/>
      </Container>
    </Navbar>
  );
}
