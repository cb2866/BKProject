import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";

const SiteNavbar = () => {
  return (
    <Navbar expand={`md`} bg="light" variant="light" style={{ padding: "0px" }}>
      <Container fluid style={{ paddingLeft: "10px" }}>
        <Navbar.Brand href="/">
          <img
            src="/cbmLogo.png"
            height="50"
            className="d-inline-block align-top"
            alt="CBM"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* <Nav.Link href="/game">Sample Game</Nav.Link> */}
              <Nav.Link href="/players">Players</Nav.Link>
              {/* <Nav.Link href="/playercharts">Player Charts</Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
