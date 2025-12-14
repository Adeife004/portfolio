import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiWhatsapp, SiTelegram } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration - Replace with your actual values
      await emailjs.send(
        'service_tpk3iru', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Adebowale Jasmine' // Replace with your name
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'adebowalejasmine437@gmail.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+234 806 876 4209',
      link: 'tel:+2348068764209'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Lagos, Nigeria',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/Adeife004', color: '#181717' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/adebowale-jasmine-324171340', color: '#0A66C2' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://x.com/AdebowaleJasmi1?s=09', color: '#1DA1F2' },
    { icon: <SiWhatsapp />, label: 'WhatsApp', url: 'https://wa.me/2348068764209', color: '#25D366' },
    { icon: <SiTelegram />, label: 'Telegram', url: 'https://t.me/Adeife004', color: '#0088cc' }
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
    <section className="contact" id="contact">
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="contact-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-line"></div>
        </motion.div>

        <motion.p variants={itemVariants} className="contact-subtitle">
          Have a project in mind or just want to chat? Drop me a message!
        </motion.p>

        <div className="contact-content">
          {/* Left Side - Contact Form */}
          <motion.div variants={itemVariants} className="contact-form-container">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Full Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status.message && (
                <motion.div
                  className={`status-message ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaEnvelope />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Contact Info & Socials */}
          <motion.div variants={itemVariants} className="contact-info-container">
            {/* Contact Info Cards */}
            <div className="info-cards">
              <h3>Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <div className="info-label">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="info-value">
                        {info.value}
                      </a>
                    ) : (
                      <div className="info-value">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-icon">{social.icon}</div>
                    <div className="social-label">{social.label}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              className="availability-badge"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(100, 255, 218, 0.3)',
                  '0 0 40px rgba(100, 255, 218, 0.5)',
                  '0 0 20px rgba(100, 255, 218, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="status-dot"></div>
              <span>Available for freelance work</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="contact-footer">
          <p>Designed & Built by <span className="highlight">Adebowale Jasmine</span></p>
          <p className="copyright">© 2025 All rights reserved</p>
        </motion.div>
      </motion.div>

      {/* Background Decoration */}
      <div className="contact-decoration">
        <motion.div
          className="decoration-circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="decoration-circle circle-2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default Contact;