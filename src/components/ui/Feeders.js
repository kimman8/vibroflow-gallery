import React from "react";
import Hero from "./Hero";
// import Image from "../../images/J237-2.JPG";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../../animations";

const Feeders = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transition}
    >
      <Hero
        image={Image}
        title="Feeders"
        description="Twin Mass, Direct Drive"
      />
    </motion.div>
  );
};

export default Feeders;
