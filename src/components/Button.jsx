import {  motion } from "motion/react";

const Button = ({ children, className }) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      type="button"
      className={`grid grid-cols-1 grid-rows-1 overflow-hidden bg-foreground text-background rounded-md px-2 py-0.5 ${className}`}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" },
        }}
        className="col-start-1 row-start-1"
      >
        {children}
      </motion.div>

      <motion.div
        className="col-start-1 row-start-1"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default Button;
