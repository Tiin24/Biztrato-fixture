import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">FIFA WORLD CUP QATAR 2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Fases" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fase de grupos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Octavos de final</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cuartos de final</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Semifinales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Tercer puesto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Gran final</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default NavBar