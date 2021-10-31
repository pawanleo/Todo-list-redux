import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Todo-List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-item">
              {" "}
              <Link to="/login">Login</Link>
            </Nav.Link>

            <Nav.Link className="nav-item">
              {" "}
              <Link to="/todo">Todo</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
