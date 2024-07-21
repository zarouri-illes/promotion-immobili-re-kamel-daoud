"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Title = (props) => {
  const [inView, setInView] = useState(false);

  return (
    <div className="mb-4 w-full">
      <motion.p
        initial={{ x: -200, opacity: 0 }}
        onViewportEnter={() => setInView(true)}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-primary xl:text-2xl md:text-lg"
      >
        {props.miniTitle}
      </motion.p>

      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        onViewportEnter={() => setInView(true)}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-secondary text-xl md:text-3xl font-bold "
      >
        {props.title}
      </motion.h1>
    </div>
  );
};

export default Title;
