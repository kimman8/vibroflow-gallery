import React, { Fragment } from "react";
import Hero from "./Hero";
import Image from "../../images/J286.JPG";
import { motion } from "framer-motion";
import { animationThree, transition } from "../../animations";

const Conveyors = () => {
  return (
    <motion.div
      initial="in"
      animate="end"
      exit="out"
      transition={transition}
      variants={animationThree}
    >
      <Hero
        image={Image}
        title="Conveyors"
        description="Twin Mass, Direct Drive"
      />
    </motion.div>
  );
};

export default Conveyors;
