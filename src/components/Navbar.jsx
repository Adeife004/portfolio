import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', number: '01' },
    { name: 'About', href: '#about', number: '02' },
    { name: 'Projects', href: '#projects', number: '03' },
    { name: 'Skills', href: '#skills', number: '04' },
    { name: 'Contact', href: '#contact', number: '05' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        {/* Logo with glitch effect */}
        <motion.div 
          className="nav-logo"
          whileHover={{ 
            textShadow: [
              "0 0 0px #64ffda",
              "2px 2px 4px #64ffda, -2px -2px 4px #ff6b9d",
              "0 0 0px #64ffda"
            ]
          }}
          transition={{ duration: 0.3 }}
        >
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
            <span className="logo-bracket">{'{'}</span>
            <span className="logo-text">JASMINE</span>
            <span className="logo-bracket">{'}'}</span>
          </a>
        </motion.div>

        {/* Desktop Menu with unique hover */}
        <ul className="nav-menu desktop">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, type: "spring" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)}
                className="nav-link"
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-text">{item.name}</span>
                
                {/* Unique animated background */}
                <motion.div
                  className="nav-bg"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Particle effect on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <>
                      <motion.span
                        className="particle particle-1"
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          x: [-20, -40],
                          y: [-10, -20]
                        }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.span
                        className="particle particle-2"
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          x: [20, 40],
                          y: [-10, -20]
                        }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Unique Hamburger with rotation */}
        <motion.button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: 90 }}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="line"
          />
          <motion.div
            animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="line"
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="line"
          />
        </motion.button>

        {/* Mobile Menu with stagger effect */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="nav-menu mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href} 
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      <span className="mobile-number">{item.number}</span>
                      <span>{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Decorative element */}
              <motion.div
                className="mobile-decoration"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;