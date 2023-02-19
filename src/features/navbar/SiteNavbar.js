import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const SiteNavbar = () => {
  return (
    <Navbar
      expand={`md`}
      variant="dark"
      style={{ padding: "0px", position: "absolute" }}
    >
      <Container fluid style={{ paddingLeft: "10px" }}>
        <Nav className="d-flex justify-content-end">
          <Nav.Link href="/games">Games</Nav.Link>
          <Nav.Link href="/players">Players</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
