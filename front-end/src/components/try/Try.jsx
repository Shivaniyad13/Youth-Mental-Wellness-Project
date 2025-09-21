// src/components/Try.jsx
import React, { useState } from "react";
import "./try.css";

const Try = () => {
  const [showDetail, setShowDetail] = useState(null);

  const services = [
    {
      id: 1,
      title: "Python",
      description: "Learn Python programming with hands-on projects.",
      logo: "/assets/python.png",
      resources: ["Python Docs", "W3Schools Python", "Real Python"],
      toppers: [
        { year: "2022", name: "Aman Gupta", score: "98%" },
        { year: "2021", name: "Riya Sharma", score: "96%" },
      ],
      videos: [
        { id: "rfscVS0vtbw", title: "Python Tutorial for Beginners" },
        { id: "nLRL_NcnK-4", title: "Advanced Python Full Course" },
      ],
    },
    {
      id: 2,
      title: "Java",
      description: "Master Java for building scalable applications.",
      logo: "/assets/java.png",
      resources: ["Java Docs", "GeeksforGeeks Java", "TutorialsPoint Java"],
      toppers: [
        { year: "2022", name: "Arjun Verma", score: "97%" },
        { year: "2021", name: "Simran Kaur", score: "95%" },
      ],
      videos: [
        { id: "grEKMHGYyns", title: "Java Tutorial for Beginners" },
        { id: "GoXwIVyNvX0", title: "OOP in Java" },
      ],
    },
    {
      id: 3,
      title: "Web Development",
      description: "Full-stack development with HTML, CSS, JS & React.",
      logo: "/assets/webdev.png",
      resources: ["MDN Docs", "FreeCodeCamp", "W3Schools Web"],
      toppers: [
        { year: "2022", name: "Neha Singh", score: "99%" },
        { year: "2021", name: "Kunal Mehta", score: "97%" },
      ],
      videos: [
        { id: "bMknfKXIFA8", title: "React Tutorial" },
        { id: "3JluqTojuME", title: "HTML & CSS Crash Course" },
      ],
    },
  ];

  if (showDetail) {
    const data = services.find((s) => s.id === showDetail);
    return (
      <div className="service-detail">
        <div className="service-header">
          <h1>{data.title} Details</h1>
          <p>{data.description}</p>
        </div>

        <div className="service-content">
          {/* toppers */}
          <div className="toppers-section">
            <h2>Previous Year Toppers</h2>
            <div className="toppers-grid">
              {data.toppers.map((topper) => (
                <div key={topper.year} className="topper-card">
                  <h3>{topper.year}</h3>
                  <p className="topper-name">{topper.name}</p>
                  <p className="topper-score">
                    {topper.score || topper.rank || topper.college}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* videos */}
          <div className="videos-section">
            <h2>Related Videos</h2>
            <div className="videos-grid">
              {data.videos.map((video) => (
                <div key={video.id} className="video-card">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* resources */}
          <div className="resources-section">
            <h2>Study Resources</h2>
            <ul>
              {data.resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="action-section">
          <button className="join-now-btn">Join Now</button>
          <button className="back-btn" onClick={() => setShowDetail(null)}>
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="services">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="servicecont visible">
            <img
              src={service.logo}
              alt={service.title}
              className="logo"
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button
              className="servicebtn"
              onClick={() => setShowDetail(service.id)}
            >
              View Details
            </button>
            <button className="servicebtn join-btn">Join</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Try;
