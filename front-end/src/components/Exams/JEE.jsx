import React from 'react';
import './JEE.css';

const JEE = ({ onBack }) => {
  return (
    <div className="jee-container">
      <div className="jee-header">
        <h1>JEE (Joint Entrance Examination)</h1>
        <p>Your gateway to India's premier engineering institutes</p>
      </div>
      
      <div className="jee-content">
        <div className="jee-overview">
          <h2>Exam Overview</h2>
          <p>The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It is constituted by two different examinations: JEE Main and JEE Advanced.</p>
        </div>
        
        <div className="jee-structure">
          <h2>Exam Structure</h2>
          <div className="structure-grid">
            <div className="structure-card">
              <h3>JEE Main</h3>
              <ul>
                <li>Two papers: Paper 1 (B.E./B.Tech) and Paper 2 (B.Arch/B.Planning)</li>
                <li>Computer Based Test (CBT)</li>
                <li>Subjects: Physics, Chemistry, and Mathematics</li>
                <li>Duration: 3 hours</li>
              </ul>
            </div>
            <div className="structure-card">
              <h3>JEE Advanced</h3>
              <ul>
                <li>Two papers: Paper 1 and Paper 2</li>
                <li>Both papers are mandatory</li>
                <li>Subjects: Physics, Chemistry, and Mathematics</li>
                <li>Duration: 3 hours per paper</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="jee-resources">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Recommended Books</h3>
              <ul>
                <li>Concepts of Physics by H.C. Verma</li>
                <li>Organic Chemistry by O.P. Tandon</li>
                <li>Mathematics by R.D. Sharma</li>
                <li>Problems in General Physics by I.E. Irodov</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Online Resources</h3>
              <ul>
                <li>NTA JEE Main official website</li>
                <li>JEE Advanced official website</li>
                <li>Khan Academy JEE preparation</li>
                <li>BYJU'S JEE materials</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Practice Tests</h3>
              <ul>
                <li>Previous year question papers</li>
                <li>Mock test series</li>
                <li>Chapter-wise tests</li>
                <li>Revision tests</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="jee-toppers">
          <h2>Previous Year Toppers</h2>
          <div className="toppers-grid">
            <div className="topper-card">
              <h3>2022</h3>
              <p className="topper-name">Prabhanjan J</p>
              <p className="topper-score">100 percentile</p>
            </div>
            <div className="topper-card">
              <h3>2021</h3>
              <p className="topper-name">Chitraang Murdia</p>
              <p className="topper-score">100 percentile</p>
            </div>
            <div className="topper-card">
              <h3>2020</h3>
              <p className="topper-name">Chirag Falor</p>
              <p className="topper-score">100 percentile</p>
            </div>
          </div>
        </div>
        
        <div className="jee-videos">
          <h2>Learning Videos</h2>
          <div className="videos-grid">
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/eiwvd6JtbYs" 
                title="JEE Preparation Strategy" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>JEE Preparation Strategy</p>
            </div>
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/3b3wlw737zg" 
                title="JEE Topper Interview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>JEE Topper Interview</p>
            </div>
          </div>
        </div>
        
        <div className="jee-action">
          <a href="https://forms.gle/eWaiHdpVGWx7uR3X7" target="_blank" rel="noopener noreferrer">
            <button className="jee-join-btn">Join JEE Program</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JEE;