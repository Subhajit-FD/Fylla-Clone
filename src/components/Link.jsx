import { motion } from "motion/react";

const Link = ({ children }) => {
  return (
    <motion.div 
      className="relative cursor-pointer w-fit group"
      initial="initial"
      whileHover="hover"
    >
      
      <span className="font-accent transition-colors duration-300 group-hover:text-black uppercase">
        {children}
      </span>

      
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-current origin-left"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
      />
    </motion.div>
  );
};

export default Link;