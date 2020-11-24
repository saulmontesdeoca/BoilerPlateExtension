import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">My Boiler Plate</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/features">Features</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavBar;