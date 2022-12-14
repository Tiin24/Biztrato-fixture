import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#28040E'}}>
      <Container >
        <Navbar.Brand href="#home"> <img src="https://i.imgur.com/MXvur8p.png" alt="logo" style={{width: '150px'}}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Fases" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Fase de grupos">Fase de grupos</NavDropdown.Item>
              <NavDropdown.Item href="/Fase final">Fase final</NavDropdown.Item>
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