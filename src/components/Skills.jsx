import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNode, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDatabase,
  FaNpm,
  FaGithub
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFirebase
} from 'react-icons/si';
import { BiCodeBlock } from 'react-icons/bi';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <BiCodeBlock />,
      color: '#64ffda',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 75, color: '#4FC08D' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95, color: '#1572B6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
        { name: 'Redux', icon: <SiRedux />, level: 80, color: '#764ABC' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaDatabase />,
      color: '#ff6b9d',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 85, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, level: 85, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
        { name: 'Firebase', icon: <SiFirebase />, level: 75, color: '#FFCA28' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <FaGitAlt />,
      color: '#00ff88',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, level: 85, color: '#181717' },
        { name: 'NPM', icon: <FaNpm />, level: 80, color: '#CB3837' },
        { name: 'Postman', icon: <SiPostman />, level: 80, color: '#FF6C37' },
        { name: 'Vercel', icon: <SiVercel />, level: 85, color: '#000000' },
        { name: 'Netlify', icon: <SiNetlify />, level: 80, color: '#00C7B7' }
      ]
    }
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="skills" id="skills">
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="skills-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">My Arsenal</h2>
          <div className="title-line"></div>
        </motion.div>

        <motion.p variants={itemVariants} className="skills-subtitle">
          Technologies and tools I work with to bring ideas to life
        </motion.p>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Category Header */}
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={`skill-item ${hoveredSkill === `${catIndex}-${skillIndex}` ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Skill Icon */}
                    <motion.div 
                      className="skill-icon"
                      style={{ color: skill.color }}
                      animate={
                        hoveredSkill === `${catIndex}-${skillIndex}` 
                          ? { rotate: [0, -10, 10, -10, 0], scale: 1.2 }
                          : { rotate: 0, scale: 1 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <div className="skill-name">{skill.name}</div>

                    {/* Skill Level Bar */}
                    <div className="skill-level-container">
                      <motion.div
                        className="skill-level-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color} 0%, ${category.color} 100%)`
                        }}
                      >
                        <motion.div
                          className="skill-level-glow"
                          animate={
                            hoveredSkill === `${catIndex}-${skillIndex}`
                              ? { opacity: [0.5, 1, 0.5] }
                              : { opacity: 0 }
                          }
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>

                    {/* Skill Percentage */}
                    <motion.div 
                      className="skill-percentage"
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredSkill === `${catIndex}-${skillIndex}`
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                    >
                      {skill.level}%
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div 
          variants={itemVariants} 
          className="experience-section"
        >
          <h3 className="experience-title">
            <span className="code-bracket">{'<'}</span>
            Learning Journey
            <span className="code-bracket">{'/>'}</span>
          </h3>
          
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              whileHover={{ x: 10 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023 - Present</div>
                <div className="timeline-text">Building full-stack applications with MERN stack</div>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              whileHover={{ x: 10 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2022 - 2023</div>
                <div className="timeline-text">Deep dive into React and modern JavaScript</div>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              whileHover={{ x: 10 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2022</div>
                <div className="timeline-text">Started with HTML, CSS, and JavaScript fundamentals</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div 
          variants={itemVariants}
          className="fun-stats"
        >
          <motion.div 
            className="stat-box"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Coding</div>
          </motion.div>
          
          <motion.div 
            className="stat-box"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </motion.div>
          
          <motion.div 
            className="stat-box"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="stat-number">∞</div>
            <div className="stat-label">Problems Solved</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <motion.div
          className="float-icon float-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <FaReact />
        </motion.div>
        <motion.div
          className="float-icon float-2"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <FaNode />
        </motion.div>
        <motion.div
          className="float-icon float-3"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <SiMongodb />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;