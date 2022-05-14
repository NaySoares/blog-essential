import * as React from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";

const DragName = ({ children }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      style={{width:'100vh', width:'100wh'}}
      >
      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        dragConstraints={constraintsRef}
      >
        { children } 
      </motion.div>
    </motion.div>
  );
};

export { DragName }