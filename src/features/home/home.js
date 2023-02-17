import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useScroll, useInView } from "framer-motion";
import { fetchAllGames, selectGames } from "../games/gamesSlice";
import AllPlayers from "../players/AllPlayers";

const Home = () => {
  const dispatch = useDispatch();
  const fadeInUp = {
    start: {
      opacity: 0,

      translateX: 0,
      ranslateY: 100,
      ranslateZ: 0,
    },
    end: {
      opacity: 1,
      ranslateZ: 0,
    },
  };

  return (
    <div>
      <h1>dashboard</h1> <h1>dashboard</h1> <h1>dashboard</h1>{" "}
      <h1>dashboard</h1> <h1>dashboard</h1> <h1>dashboard</h1>{" "}
      <h1>dashboard</h1> <h1>dashboard</h1> <h1>dashboard</h1>{" "}
      <h1>dashboard</h1>
      <motion.div
        transition={{ delay: 0.4 }}
        initial={fadeInUp.start}
        whileInView={fadeInUp.end}
      >
        <AllPlayers />
      </motion.div>
    </div>
  );
};

export default Home;
