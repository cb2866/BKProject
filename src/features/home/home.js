import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import AllGames from "../games/AllGames";
import Hero from "../hero/Hero";
import AllPlayers from "../players/AllPlayers";

import { BsArrowUp } from "react-icons/bs";

// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Home = () => {
  return (
    <>
      <Hero />
      <Section>
        <AllGames />
      </Section>
      <Section>
        <AllPlayers />
      </Section>
      <Button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        id="scroll-to-top"
      >
        <BsArrowUp />
      </Button>
    </>
  );
};

export default Home;
