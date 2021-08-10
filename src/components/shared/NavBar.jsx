import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

import '../../assets/css/NavBar.css'

class NavBar extends Component {

    render() {
        return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Universidad de Santiago de Chile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/postular" name="Postulation">Postular</Nav.Link>
            <Nav.Link href="/evaluar" name="Evaluate">Evaluar</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Conoce más</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        
    }

}

export default NavBar;