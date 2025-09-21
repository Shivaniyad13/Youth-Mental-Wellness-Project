import React from 'react';
import './SSC.css';

const SSC = () => {
  return (
    <div className="ssc-container">
      <div className="ssc-header">
        <h1>SSC (Staff Selection Commission)</h1>
        <p>Your gateway to government jobs in India</p>
      </div>
      
      <div className="ssc-content">
        <div className="ssc-overview">
          <h2>Exam Overview</h2>
          <p>The Staff Selection Commission (SSC) is an organization under the Government of India to recruit staff for various posts in the various ministries and departments of the government. It conducts various exams like SSC CGL, CHSL, MTS, etc.</p>
        </div>
        
        <div className="ssc-exams">
          <h2>Major SSC Exams</h2>
          <div className="exams-grid">
            <div className="exam-card">
              <h3>SSC CGL</h3>
              <p>Combined Graduate Level Examination for graduate-level government jobs</p>
            </div>
            <div className="exam-card">
              <h3>SSC CHSL</h3>
              <p>Combined Higher Secondary Level Examination for 10+2 level jobs</p>
            </div>
            <div className="exam-card">
              <h3>SSC MTS</h3>
              <p>Multi-Tasking Staff Examination for non-technical posts</p>
            </div>
            <div className="exam-card">
              <h3>SSC JE</h3>
              <p>Junior Engineer Examination for engineering posts</p>
            </div>
          </div>
        </div>
        
        <div className="ssc-resources">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Recommended Books</h3>
              <ul>
                <li>Quantitative Aptitude by R.S. Aggarwal</li>
                <li>English Grammar by Wren & Martin</li>
                <li>General Knowledge by Lucent</li>
                <li>Reasoning by Arihant Publications</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Online Resources</h3>
              <ul>
                <li>SSC official website</li>
                <li>Online mock test platforms</li>
                <li>Current affairs apps</li>
                <li>YouTube preparation channels</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Practice Material</h3>
              <ul>
                <li>Previous year question papers</li>
                <li>Topic-wise practice sets</li>
                <li>Mock test series</li>
                <li>Quick revision notes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="ssc-toppers">
          <h2>Previous Year Toppers</h2>
          <div className="toppers-grid">
            <div className="topper-card">
              <h3>2022</h3>
              <p className="topper-name">Rahul Meena</p>
              <p className="topper-score">Rank 1</p>
            </div>
            <div className="topper-card">
              <h3>2021</h3>
              <p className="topper-name">Rohit Kumar</p>
              <p className="topper-score">Rank 1</p>
            </div>
            <div className="topper-card">
              <h3>2020</h3>
              <p className="topper-name">Praveen Kumar</p>
              <p className="topper-score">Rank 1</p>
            </div>
          </div>
        </div>
        
        <div className="ssc-videos">
          <h2>Learning Videos</h2>
          <div className="videos-grid">
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/FRKOYspUYLU" 
                title="SSC Preparation Strategy" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>SSC Preparation Strategy</p>
            </div>
            <div className="video-card">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/RKdloMsbLOk" 
                title="SSC CGL Topper Interview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>SSC CGL Topper Interview</p>
            </div>
          </div>
        </div>
        
        <div className="ssc-action">
          <a href="https://forms.gle/eWaiHdpVGWx7uR3X7" target="_blank" rel="noopener noreferrer">
            <button className="ssc-join-btn">Join SSC Program</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SSC;