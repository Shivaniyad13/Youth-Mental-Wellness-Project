import React from "react";
import "./Contact.css"; // import CSS
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently seeking new opportunities in full-stack development.
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon email">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>shiviyadav1304@email.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon phone">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8726398174</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon location">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                <a href="https://www.linkedin.com/in/shivani-yadav-184032290" className="social-btn" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Shivaniyad13" className="social-btn" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://x.com/@ShiviYadav2005" className="social-btn" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href="#" className="social-btn" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form className="contact-form" id="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
