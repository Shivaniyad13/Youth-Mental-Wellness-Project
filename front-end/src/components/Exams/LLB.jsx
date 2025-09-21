import React from 'react';
import { FaBook, FaGraduationCap, FaUserTie, FaClock, FaChartBar, FaDownload } from 'react-icons/fa';
import './LLB.css';

const LLB = ({ onBack }) => {
  return (
    <div className="llb-container">
      {/* Header with Back Button */}
      <div className="llb-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Dashboard
        </button>
        <h1>LLB (Bachelor of Laws) Entrance Exams</h1>
        <p>Your pathway to a successful career in law</p>
      </div>

      <div className="llb-content">
        {/* Exam Overview */}
        <div className="llb-section">
          <h2><FaGraduationCap /> Exam Overview</h2>
          <div className="overview-cards">
            <div className="overview-card">
              <h3>What is LLB?</h3>
              <p>LLB (Legum Baccalaureus) is an undergraduate degree in law offered by various universities in India. It's the first step toward becoming a legal professional.</p>
            </div>
            <div className="overview-card">
              <h3>Entrance Exams</h3>
              <ul>
                <li>CLAT (Common Law Admission Test)</li>
                <li>AILET (All India Law Entrance Test)</li>
                <li>LSAT (Law School Admission Test)</li>
                <li>University-specific entrance tests</li>
              </ul>
            </div>
            <div className="overview-card">
              <h3>Career Opportunities</h3>
              <ul>
                <li>Litigation Lawyer</li>
                <li>Corporate Lawyer</li>
                <li>Legal Advisor</li>
                <li>Judge</li>
                <li>Legal Analyst</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exam Pattern */}
        <div className="llb-section">
          <h2><FaChartBar /> Exam Pattern</h2>
          <div className="exam-pattern">
            <div className="pattern-card">
              <h3>CLAT Exam Pattern</h3>
              <div className="pattern-details">
                <div className="pattern-item">
                  <span className="pattern-label">Duration:</span>
                  <span className="pattern-value">2 hours</span>
                </div>
                <div className="pattern-item">
                  <span className="pattern-label">Questions:</span>
                  <span className="pattern-value">150 MCQs</span>
                </div>
                <div className="pattern-item">
                  <span className="pattern-label">Sections:</span>
                  <span className="pattern-value">English, GK, Legal Aptitude, Logical Reasoning, Quantitative Techniques</span>
                </div>
                <div className="pattern-item">
                  <span className="pattern-label">Marking:</span>
                  <span className="pattern-value">+1 for correct, -0.25 for incorrect</span>
                </div>
              </div>
            </div>
            <div className="pattern-card">
              <h3>AILET Exam Pattern</h3>
              <div className="pattern-details">
                <div className="pattern-item">
                  <span className="pattern-label">Duration:</span>
                  <span className="pattern-value">1.5 hours</span>
                </div>
                <div className="pattern-item">
                  <span className="pattern-label">Questions:</span>
                  <span className="pattern-value">150 MCQs</span>
                </div>
                <div className="pattern-item">
                  <span className="pattern-label">Sections:</span>
                  <span className="pattern-value">English, GK, Legal Aptitude, Logical Reasoning, Elementary Mathematics</span>
                </div>
                <div className="pattern-item">
                  <span className="pattern-label">Marking:</span>
                  <span className="pattern-value">+1 for correct, -0.25 for incorrect</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Resources */}
        <div className="llb-section">
          <h2><FaBook /> Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Recommended Books</h3>
              <ul>
                <li>Legal Aptitude for the CLAT and other Law Entrance Examinations by AP Bhardwaj</li>
                <li>Word Power Made Easy by Norman Lewis</li>
                <li>Analytical Reasoning by MK Pandey</li>
                <li>Universal's Guide to CLAT & LL.B. Entrance Examination</li>
                <li>Lucent's General Knowledge</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Online Resources</h3>
              <ul>
                <li>CLAT Official Website - Previous Year Papers</li>
                <li>LegalEdge (Online Preparation Platform)</li>
                <li>Lawctopus (Legal News and Updates)</li>
                <li>YouTube Channels for Legal Reasoning</li>
                <li>Mobile Apps for Current Affairs</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Practice Materials</h3>
              <ul>
                <li>Chapter-wise Practice Sets</li>
                <li>Previous 10 Years Question Papers</li>
                <li>Mock Test Series</li>
                <li>Legal Reasoning Workbooks</li>
                <li>Current Affairs Compilations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Preparation Strategy */}
        <div className="llb-section">
          <h2><FaClock /> Preparation Strategy</h2>
          <div className="strategy-content">
            <div className="strategy-card">
              <h3>6-Month Study Plan</h3>
              <div className="strategy-timeline">
                <div className="timeline-item">
                  <h4>Months 1-2: Foundation Building</h4>
                  <p>Focus on basic concepts of legal aptitude, grammar rules, and logical reasoning fundamentals.</p>
                </div>
                <div className="timeline-item">
                  <h4>Months 3-4: Subject Mastery</h4>
                  <p>Deep dive into each section, practice extensively, and work on speed and accuracy.</p>
                </div>
                <div className="timeline-item">
                  <h4>Months 5: Revision & Mock Tests</h4>
                  <p>Revise all topics and take regular mock tests to identify weak areas.</p>
                </div>
                <div className="timeline-item">
                  <h4>Month 6: Final Preparation</h4>
                  <p>Focus on current affairs, take full-length mocks, and work on time management.</p>
                </div>
              </div>
            </div>
            <div className="tips-card">
              <h3>Quick Tips for Success</h3>
              <ul>
                <li>Read newspapers daily for current affairs and English comprehension</li>
                <li>Practice legal reasoning questions regularly</li>
                <li>Take at least 2 mock tests per week</li>
                <li>Focus on accuracy rather than attempting all questions</li>
                <li>Stay updated with recent legal developments</li>
                <li>Improve reading speed for comprehension sections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Toppers Section */}
        <div className="llb-section">
          <h2><FaUserTie /> Previous Year Toppers</h2>
          <div className="toppers-grid">
            <div className="topper-card">
              <h3>2023 Topper</h3>
              <p className="topper-name">Aarav Mehta</p>
              <p className="topper-score">AIR 1</p>
              <p className="topper-college">NLSIU Bangalore</p>
            </div>
            <div className="topper-card">
              <h3>2022 Topper</h3>
              <p className="topper-name">Priya Sharma</p>
              <p className="topper-score">AIR 1</p>
              <p className="topper-college">NALSAR Hyderabad</p>
            </div>
            <div className="topper-card">
              <h3>2021 Topper</h3>
              <p className="topper-name">Rohan Kumar</p>
              <p className="topper-score">AIR 1</p>
              <p className="topper-college">NLU Delhi</p>
            </div>
          </div>
        </div>

        {/* Learning Videos */}
        <div className="llb-section">
          <h2>Learning Videos</h2>
          <div className="videos-grid">
            <div className="video-card">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/azwe9do9gQ0"
                title="How to Crack CLAT"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>How to Crack CLAT - Strategy Discussion</p>
            </div>
            <div className="video-card">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/jdEbLySbZdY"
                title="Legal Aptitude Preparation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Legal Aptitude Preparation Tips</p>
            </div>
            <div className="video-card">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/XbaLwS78TnA"
                title="Current Affairs for Law Exams"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Current Affairs Preparation for Law Entrance</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="llb-cta">
          <h2>Ready to Start Your Law Journey?</h2>
          <p>Join our comprehensive LLB preparation program with expert guidance, study materials, and mock tests.</p>
          <div className="cta-buttons">
            <a href="https://forms.gle/eWaiHdpVGWx7uR3X7" target="_blank" rel="noopener noreferrer">
              <button className="cta-btn primary">Enroll Now</button>
            </a>
            <button className="cta-btn secondary">
              <FaDownload /> Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLB;