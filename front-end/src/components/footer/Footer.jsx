import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 600 100">
              <rect width="100%" height="100%" fill="#2c3e50" />
              <path d="M50,20 Q70,10 90,20 L90,60 Q70,80 50,60 Z" fill="#4CAF50" stroke="#2e7d32" strokeWidth="2"/>
              <circle cx="70" cy="40" r="5" fill="white" />
              <path d="M60,35 Q65,30 70,35 Q75,40 70,45 Q65,50 60,45 Q55,40 60,35" fill="none" stroke="white" strokeWidth="2"/>
              <text x="120" y="60" fontFamily="Verdana, sans-serif" fontSize="36" fill="white">
                <tspan fontWeight="bold">Warrior</tspan> <tspan fill="#4CAF50">Mind</tspan>
              </text>
            </svg>
            <p>Empowering students to achieve their academic goals through comprehensive exam preparation and personal development.</p>
          </div>

          <div className="footer-links" >
            <h3>Quick Links</h3>
            <ul>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/">Home</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/about-us">About Us</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/contact-us">Contact Us</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/tribute-page">Tribute Page</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/book-store">Book Store</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/todo-app">To-Do App</a></li>
            </ul>
          </div>

          <div className="footer-exams">
            <h3>Exam Preparation</h3>
            <ul>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/jee">JEE</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/neet">NEET</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/ssc">SSC</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/upsc">UPSC</a></li>
              <li style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}}><a href="/llb">LLB</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <FaEnvelope />
              <span>shiviyadav1304@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+8726398174</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>,Vigyan Khand ,Gomati nagar,Lucknow</span>
            </div>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/shivani-yadav-184032290"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Middle Section - Newsletter */}
        <div className="footer-middle">
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on exam patterns, study materials, and preparation tips.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Warrior Mind. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-conditions">Terms & Conditions</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
