import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode } from 'react-icons/fa';
// import { FaReact, FaNode } from 'react-icons/fa';
import { SiJavascript, SiVuedotjs } from 'react-icons/si';
import './Projects.css';
import WeatherImage from '../assets/weather-app.png'
import DMAImage from '../assets/DMA_Styles.png'
const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Full-featured e-commerce platform with payment integration, cart management, and admin dashboard.',
      longDescription: 'Built a complete e-commerce solution from scratch with user authentication, product management, shopping cart, Stripe payment integration, and an admin panel for managing orders and inventory.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce.vercel.app',
      icon: <FaReact />
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'Collaborative task management tool with real-time updates and drag-and-drop functionality.',
      longDescription: 'Created a Trello-inspired task management application with real-time collaboration, drag-and-drop boards, team workspaces, and deadline tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com/yourusername/taskapp',
      live: 'https://your-taskapp.vercel.app',
      icon: <FaReact />
    },
    {
      id: 3,
      title: 'Fashion E-commerce Dashboard',
      category: 'fullstack',
      description: 'Interactive dashboard for fashion e-commerce with real-time analytics and insights.',
      longDescription: 'Built a dynamic dashboard for a fashion e-commerce platform with real-time analytics, user engagement insights, and interactive charts.',
      image: DMAImage,
      tags: ['Vue.js', 'Firebase',],
      github: 'https://github.com/Adeife004/dma_styles.git',
      live: 'https://dma-styles.web.app',
      icon: <SiVuedotjs />
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      category: 'frontend',
      description: 'Beautiful weather app with location-based forecasts and interactive maps.',
      longDescription: 'Built a sleek weather application using OpenWeather API with 7-day forecasts, hourly predictions, interactive maps, and location search functionality.',
      image: WeatherImage,
      tags: ['React', 'API Integration', 'CSS'],
      github: 'https://github.com/Adeife004/weather-app',
      live: 'https://weather-app-gamma-seven-29.vercel.app/',
      icon: <FaReact />
    },
    {
      id: 5,
      title: 'Blog CMS',
      category: 'fullstack',
      description: 'Content management system for bloggers with markdown support and SEO optimization.',
      longDescription: 'Created a full-featured blogging platform with markdown editor, image uploads, categories, tags, comments system, and built-in SEO optimization tools.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/blog-cms',
      live: 'https://your-blog.vercel.app',
      icon: <FaNode />
    },
    {
      id: 6,
      title: 'Portfolio Generator',
      category: 'frontend',
      description: 'Tool that helps developers create beautiful portfolios in minutes.',
      longDescription: 'Designed an interactive portfolio generator that allows users to input their information and generate a custom portfolio website with multiple themes and templates.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tags: ['React', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/yourusername/portfolio-gen',
      live: 'https://your-portfoliogen.vercel.app',
      icon: <SiJavascript />
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="projects" id="projects">
      <motion.div 
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="projects-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Things I've Built</h2>
          <div className="title-line"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="filter-buttons">
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  className="filter-underline"
                  layoutId="filterUnderline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Count */}
        <motion.div variants={itemVariants} className="project-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              
              <div className="modal-body">
                <div className="modal-header-content">
                  <div className="modal-icon">{selectedProject.icon}</div>
                  <h2>{selectedProject.title}</h2>
                </div>
                
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="modal-actions">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;