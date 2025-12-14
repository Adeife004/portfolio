import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaBrain, FaGamepad, FaBook, FaMusic, FaBolt, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: <FaRocket /> },
    { id: 'approach', label: 'My Approach', icon: <FaBrain /> },
    { id: 'current', label: 'Right Now', icon: <FaLaptopCode /> }
  ];

  const technologies = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 },
    { name: 'Vue.js', level: 75 }
  ];

  const interests = [
    { icon: <FaGamepad />, text: 'Gaming' },
    { icon: <FaBook />, text: 'Learning' },
    { icon: <FaMusic />, text: 'Music' },
    { icon: <FaBolt />, text: 'Tech Innovation' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="about" id="about">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="about-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Who Am I?</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="about-content">
          {/* Left Side - Interactive Tabs */}
          <motion.div variants={itemVariants} className="about-left">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      className="tab-indicator"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div 
              className="tab-content"
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'story' && (
                <div>
                  <h3>The Journey So Far</h3>
                  <p>
                    Started with a curiosity about how websites work, turned that into late-night 
                    coding sessions, and now I'm building full-stack applications that solve real problems.
                  </p>
                  <p>
                    Every project teaches me something new. Every bug makes me better. Every solution 
                    brings that rush that keeps me coming back for more.
                  </p>
                  <div className="fun-fact">
                    <FaLightbulb className="fun-fact-icon" />
                    <span>First line of code? A "Hello World" in HTML. Still gets me hyped.</span>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div>
                  <h3>How I Build Things</h3>
                  <p>
                    Code isn't just about making things work—it's about making them work elegantly. 
                    Clean, readable, maintainable. That's the goal.
                  </p>
                  <ul className="approach-list">
                    <li><span className="highlight">Think First, Code Second</span> - Plan it out, then build</li>
                    <li><span className="highlight">User-Focused</span> - If it's confusing, it's wrong</li>
                    <li><span className="highlight">Keep Learning</span> - Tech changes. I adapt.</li>
                    <li><span className="highlight">Debug Like a Detective</span> - Every error is a clue</li>
                  </ul>
                </div>
              )}

              {activeTab === 'current' && (
                <div>
                  <h3>What I'm Up To</h3>
                  <p>
                    Deep diving into the MERN stack, building projects that push my limits, 
                    and exploring new ways to create better user experiences.
                  </p>
                  <div className="current-focus">
                    <div className="focus-item">
                      <FaCode className="focus-icon" />
                      <span>Mastering React Patterns</span>
                    </div>
                    <div className="focus-item">
                      <FaLaptopCode className="focus-icon" />
                      <span>Building Real-World Apps</span>
                    </div>
                    <div className="focus-item">
                      <FaRocket className="focus-icon" />
                      <span>Learning DevOps</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Interests */}
            <div className="interests-section">
              <h4>When I'm Not Coding</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="interest-item"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="interest-icon">{interest.icon}</span>
                    <span>{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Tech Stack */}
          <motion.div variants={itemVariants} className="about-right">
            <div className="tech-stack-container">
              <h3 className="tech-title">
                <span className="code-bracket">{'<'}</span>
                Tech Stack
                <span className="code-bracket">{'/>'}</span>
              </h3>
              
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="tech-header">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-percentage">{tech.level}%</span>
                    </div>
                    <div className="tech-bar-container">
                      <motion.div
                        className="tech-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="stats-grid">
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Built</div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Commits</div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Learning Mode</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="about-decoration">
        <motion.div
          className="floating-code"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {'{ }'}
        </motion.div>
      </div>
    </section>
  );
};

export default About;