import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './FloatingGithub.css';

const FloatingGithub = () => {
  return (
    <motion.a
      href="https://github.com/Adeife004"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-github"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <FaGithub className="github-icon" />
      <motion.div
        className="github-ping"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  );
};

export default FloatingGithub;