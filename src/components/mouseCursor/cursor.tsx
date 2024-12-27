'use client';

import { useMousePosition } from "./mouseProvider";
import { motion } from "framer-motion";

const Cursor: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full bg-yellow pointer-events-none z-50"
      style={{
        transform: `translate(${x - 20}px, ${y - 20}px)`, // Ajusta o centro do círculo
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
    />
  );
};

export default Cursor;
