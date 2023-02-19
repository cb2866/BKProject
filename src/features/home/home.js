import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useScroll, useInView } from "framer-motion";
import { fetchAllGames, selectGames } from "../games/gamesSlice";
import AllPlayers from "../players/AllPlayers";
import AllGames from "../games/AllGames";
import Hero from "../hero/Hero";
import SiteNavbar from "../navbar/SiteNavbar";

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
      <Section>
        <Hero />
      </Section>
      <Section>
        <AllGames />
      </Section>
      <Section>
        <AllPlayers />
      </Section>
    </>
  );
};

export default Home;
