import React from "react";
import Hero from "./Hero";
// import Image from "../../images/J245.JPG";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations";

const Screens = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Hero
        image={Image}
        title="Screens"
        description="Twin Mass, Direct Drive"
      />
    </motion.div>
  );
};

export default Screens;
