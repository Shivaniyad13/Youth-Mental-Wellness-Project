import React from 'react';
import './NEET.css';

const NEET = ({ onBack }) => {
  return (
    <div className="neet-container">
      <div className="neet-header">
        <h1>NEET (National Eligibility cum Entrance Test)</h1>
        <p>Your pathway to medical education in India</p>
      </div>
      
      <div className="neet-content">
        <div className="neet-overview">
          <h2>Exam Overview</h2>
          <p>The National Eligibility cum Entrance Test (NEET) is the single medical entrance examination for admission to MBBS, BDS, BAMS, BSMS, BUMS, and BHMS courses in India. It is conducted by the National Testing Agency (NTA).</p>
        </div>
        
        <div className="neet-structure">
          <h2>Exam Structure</h2>
          <div className="structure-grid">
            <div className="structure-card">
              <h3>Exam Pattern</h3>
              <ul>
                <li>Mode: Pen and Paper Based Test (PBT)</li>
                <li>Duration: 3 hours</li>
                <li>Number of Questions: 180 (45 from each subject)</li>
                <li>Subjects: Physics, Chemistry, Botany, Zoology</li>
                <li>Marking: +4 for correct, -1 for incorrect</li>
              </ul>
            </div>
            <div className="structure-card">
              <h3>Eligibility</h3>
              <ul>
                <li>Age: Minimum 17 years</li>
                <li>Education: 10+2 with Physics, Chemistry, Biology/Biotechnology</li>
                <li>Minimum Marks: 50% for general, 40% for SC/ST/OBC</li>
                <li>Attempts: Maximum 3 attempts for general category</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="neet-resources">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Recommended Books</h3>
              <ul>
                <li>NCERT Biology (Class XI and XII)</li>
                <li>Objective Biology by Dinesh</li>
                <li>Objective Physics by DC Pandey</li>
                <li>Objective Chemistry for NEET</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Online Resources</h3>
              <ul>
                <li>NTA NEET official website</li>
                <li>NEET prep mobile apps</li>
                <li>Online mock test series</li>
                <li>YouTube NEET channels</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Practice Material</h3>
              <ul>
                <li>Previous 10 years question papers</li>
                <li>Chapter-wise practice questions</li>
                <li>Mock tests with detailed solutions</li>
                <li>Revision notes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="neet-toppers">
          <h2>Previous Year Toppers</h2>
          <div className="toppers-grid">
            <div className="topper-card">
              <h3>2022</h3>
              <p className="topper-name">Tanishka</p>
              <p className="topper-score">720/720</p>
            </div>
            <div className="topper-card">
              <h3>2021</h3>
              <p className="topper-name">Mridul Mittal</p>
              <p className="topper-score">720/720</p>
            </div>
            <div className="topper-card">
              <h3>2020</h3>
              <p className="topper-name">Soyeb Aftab</p>
              <p className="topper-score">720/720</p>
            </div>
          </div>
        </div>
        
        <div className="neet-videos">
          <h2>Learning Videos</h2>
          <div className="videos-grid">
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/TzYBCsw7JYU" 
                title="NEET Preparation Tips" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>NEET Preparation Tips</p>
            </div>
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/nhyDYUvENpo" 
                title="NEET Topper Strategy" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>NEET Topper Strategy</p>
            </div>
          </div>
        </div>
        
        <div className="neet-action">
          <a href="https://forms.gle/eWaiHdpVGWx7uR3X7" target="_blank" rel="noopener noreferrer">
            <button className="neet-join-btn">Join NEET Program</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NEET;