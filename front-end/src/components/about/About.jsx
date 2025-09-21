import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Warrior Mind</h2>
          <p className="section-subtitle">
            Empowering students through comprehensive exam preparation and personal development
          </p>
        </div>

        {/* Content */}
        <div className="about-content">
          {/* Left Image */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Students learning and collaborating"
            />
          </div>

          {/* Right Text */}
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              Warrior Mind is dedicated to revolutionizing the way students prepare for competitive exams 
              and develop essential life skills. We believe that academic success and personal growth go 
              hand in hand, and our platform is designed to nurture both.
            </p>

            <h3>The Project Vision</h3>
            <p>
              I created Warrior Mind to address the challenges students face in accessing quality study 
              materials and motivation during their preparation journey. This platform integrates:
            </p>
            
            <ul className="feature-list">
              <li>Domain-specific book recommendations for various competitive exams</li>
              <li>Motivational content to boost confidence and maintain focus</li>
              <li>Interactive tools like to-do lists and study planners</li>
              <li>Direct e-commerce integration for seamless book purchases</li>
              <li>Inspirational content from successful individuals in various fields</li>
            </ul>

            <p>
              The platform specifically helps students preparing for JEE, NEET, SSC, UPSC, LLB, and other 
              competitive exams by providing tailored resources, success stories, and a supportive community.
            </p>

            {/* Stats */}
            <div className="stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Exam Categories</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Study Resources</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>

            {/* About the Developer */}
            <div className="developer-info">
              <h3>About the Developer</h3>
              <p>
                I'm a dedicated full-stack developer currently pursuing my B.Tech from
                Babu Banarasi Das University, Lucknow. With 6 months of professional
                experience at Interelite Pvt. Ltd., I've honed my skills in modern web
                development technologies.
              </p>
              <p>
                Originally from Deoria, I'm passionate about creating innovative solutions
                that bridge the gap between design and functionality. Warrior Mind represents
                my commitment to using technology to enhance education and student success.
              </p>
            </div>

            {/* Tags */}
            <div className="tags">
              <span className="tag tag-primary">Education Technology</span>
              <span className="tag tag-secondary">Student Success</span>
              <span className="tag tag-accent">E-Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;