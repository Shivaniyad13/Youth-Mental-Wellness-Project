import React from 'react';
import './UPSC.css';

const UPSC = () => {
  return (
    <div className="upsc-container">
      <div className="upsc-header">
        <h1>UPSC (Union Public Service Commission)</h1>
        <p>India's premier civil service examination</p>
      </div>
      
      <div className="upsc-content">
        <div className="upsc-overview">
          <h2>Exam Overview</h2>
          <p>The Union Public Service Commission (UPSC) is India's premier central recruiting agency for recruitment of all India services. It conducts various examinations including the Civil Services Examination (CSE) to recruit for various civil services of the Government of India.</p>
        </div>
        
        <div className="upsc-structure">
          <h2>Exam Structure</h2>
          <div className="structure-grid">
            <div className="structure-card">
              <h3>Preliminary Exam</h3>
              <ul>
                <li>Two papers: General Studies and CSAT</li>
                <li>Objective type questions</li>
                <li>Negative marking for wrong answers</li>
                <li>Screening test only - marks don't count for final ranking</li>
              </ul>
            </div>
            <div className="structure-card">
              <h3>Main Exam</h3>
              <ul>
                <li>9 papers of conventional essay type</li>
                <li>Includes one Indian language paper</li>
                <li>English language paper</li>
                <li>Essay, General Studies, and Optional subject papers</li>
              </ul>
            </div>
            <div className="structure-card">
              <h3>Personality Test</h3>
              <ul>
                <li>Interview of candidates who clear Main exam</li>
                <li>275 marks</li>
                <li>Tests personality traits and mental alertness</li>
                <li>Conducted by UPSC board members</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="upsc-resources">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Recommended Books</h3>
              <ul>
                <li>Indian Polity by M. Laxmikanth</li>
                <li>Indian Economy by Ramesh Singh</li>
                <li>Geography by Majid Hussain</li>
                <li>History by Bipin Chandra</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Online Resources</h3>
              <ul>
                <li>UPSC official website</li>
                <li>PIB (Press Information Bureau)</li>
                <li>Yojana and Kurukshetra magazines</li>
                <li>Online current affairs portals</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Practice Material</h3>
              <ul>
                <li>Previous year question papers</li>
                <li>Mock test series</li>
                <li>Essay practice sets</li>
                <li>Answer writing practice</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="upsc-toppers">
          <h2>Previous Year Toppers</h2>
          <div className="toppers-grid">
            <div className="topper-card">
              <h3>2022</h3>
              <p className="topper-name">Ishita Kishore</p>
              <p className="topper-score">Rank 1</p>
            </div>
            <div className="topper-card">
              <h3>2021</h3>
              <p className="topper-name">Shruti Sharma</p>
              <p className="topper-score">Rank 1</p>
            </div>
            <div className="topper-card">
              <h3>2020</h3>
              <p className="topper-name">Pradeep Singh</p>
              <p className="topper-score">Rank 1</p>
            </div>
          </div>
        </div>
        
        <div className="upsc-videos">
          <h2>Learning Videos</h2>
          <div className="videos-grid">
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/SmoOTfTjLUI" 
                title="UPSC Preparation Guide" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>UPSC Preparation Guide</p>
            </div>
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/SApYzHL3D4E" 
                title="UPSC Topper Journey" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>UPSC Topper Journey</p>
            </div>
          </div>
        </div>
        
        <div className="upsc-action">
          <a href="https://forms.gle/eWaiHdpVGWx7uR3X7" target="_blank" rel="noopener noreferrer">
            <button className="upsc-join-btn">Join UPSC Program</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UPSC;