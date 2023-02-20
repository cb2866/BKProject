import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";

const SiteNavbar = () => {
  const scrollToComponent = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      expand={`md`}
      variant="dark"
      style={{ padding: "0px", position: "absolute" }}
    >
      <Container fluid style={{ paddingLeft: "10px" }}>
        <Nav className="ms-auto">
          <motion.a
            onClick={() => scrollToComponent("games-container")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Nav.Link> Games</Nav.Link>
          </motion.a>
          <motion.a
            onClick={() => scrollToComponent("players-container")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Nav.Link>Players</Nav.Link>
          </motion.a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
