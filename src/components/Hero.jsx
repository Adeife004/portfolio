import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { HiMail } from 'react-icons/hi';
import { SiWhatsapp } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation texts
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRole];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

 const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/Adeife004', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/adebowale-jasmine-324171340', label: 'LinkedIn' },
  { icon: <FaTwitter />, url: 'https://x.com/AdebowaleJasmi1?s=09', label: 'Twitter' },
  { icon: <SiWhatsapp />, url: 'https://wa.me/2348068764209', label: 'WhatsApp' }
];

  return (
    <section className="hero" id="hero">
      {/* Animated background elements */}
      <div className="hero-background">
        <motion.div 
          className="floating-shape shape-1"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            rotate: 360
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="floating-shape shape-2"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
            rotate: -360
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="floating-shape shape-3"
          animate={{
            x: mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
            rotate: 360
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="hero-greeting">
          <span className="wave">👋</span>
          <span>Hi, my name is</span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="hero-name">
          A. Jasmine
        </motion.h1>

        {/* Animated Role */}
        <motion.div variants={itemVariants} className="hero-role">
          <span className="role-text">{displayText}</span>
          <span className="cursor">|</span>
        </motion.div>

        {/* Description */}
        <motion.p variants={itemVariants} className="hero-description">
          I'm a passionate developer specializing in building exceptional digital experiences. 
          Currently focused on creating responsive full-stack web applications with modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(100, 255, 218, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="hero-social">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ 
                y: -5,
                color: '#64ffda',
                textShadow: '0 0 20px rgba(100, 255, 218, 0.8)'
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </motion.div>
      </motion.div>

      {/* Code decoration */}
      <motion.div 
        className="code-decoration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <pre>
{`const developer = {
  name: "Adebowale Jasmine",
  skills: ["React", "Node.js", "MongoDB"],
  passion: "Coding and Debugging"
};`}
        </pre>
      </motion.div>
    </section>
  );
};

export default Hero;