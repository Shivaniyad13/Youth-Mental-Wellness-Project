import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./dashboard.css";
import TributePage from "./TributePage";
// import TodoApp from "../Todoapp/TodoApp.jsx";
import FAQ from "./FAQ";
import BookStore from "../BookStore/BookStore";
import ArtGallery from "../Artgallery/ArtGallery";
import NEET from "../Exams/NEET.jsx";
import JEE from "../Exams/JEE.jsx";
import SSC from "../Exams/SSC.jsx";
import UPSC from "../Exams/UPSC.jsx";
import LLB from "../Exams/LLB.jsx";
import AIWellnessChatbot from "./AIWellnessChatbot";
import MoodTracking from "./MoodTracking";
import PrivateJournal from "./PrivateJournal";

export const Dashboard = () => {
  const [currentExam, setCurrentExam] = useState(null);
  const location = useLocation();

  // Handle ?exam= param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const exam = params.get("exam");
    if (exam) {
      setCurrentExam(exam.toLowerCase());
    }
  }, [location]);

  // Handle hash (#yoga, #book-store, etc.)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  // Exam page rendering
  if (currentExam) {
    switch (currentExam) {
      case "jee":
        return <JEE onBack={() => setCurrentExam(null)} />;
      case "neet":
        return <NEET onBack={() => setCurrentExam(null)} />;
      case "ssc":
        return <SSC onBack={() => setCurrentExam(null)} />;
      case "upsc":
        return <UPSC onBack={() => setCurrentExam(null)} />;
      case "llb":
        return <LLB onBack={() => setCurrentExam(null)} />;
      default:
        return <div>Exam not found</div>;
    }
  }

  // Service cards
  const services = [
    {
      id: 1,
      title: "Clear JEE",
      img: "/images/jee.jpg",
      desc: "Join our JEE explore web to gain valuable knowledge about JEE.",
      path: "/jee",
      examKey: "jee",
    },
    {
      id: 2,
      title: "Clear SSC",
      img: "/images/ssc.jpg",
      desc: "Join our SSC strategy to gain valuable skills.",
      path: "/ssc",
      examKey: "ssc",
    },
    {
      id: 3,
      title: "Clear NEET",
      img: "/images/neet.jpg",
      desc: "Qualify NEET by exploring your seniors' history.",
      path: "/neet",
      examKey: "neet",
    },
    {
      id: 4,
      title: "Civil Service",
      img: "/images/upsc.jpg",
      desc: "Get more experience with civil servants mentors.",
      path: "/upsc",
      examKey: "upsc",
    },
    {
      id: 5,
      title: "Join LLB",
      img: "/images/llb.png",
      desc: "Meet experienced judges and advocates in the LLB field.",
      path: "/llb",
      examKey: "llb",
    },
    {
      id: 6,
      title: "Yoga & Mindfulness",
      img: "/images/meditation.jpg",
      desc: "Improve focus and reduce stress with guided practices.",
      path: "/#yoga",
    },
    {
      id: 7,
      title: "Study Planner",
      img: "/images/motive2.png",
      desc: "Organize your schedule and tracking for every exam.",
      path: "/#todo-app",
    },
    {
      id: 8,
      title: "Journal Support",
      img: "/images/SplitImage.jpeg",
      desc: "Build confidence and keep mental wellness in check.",
      path: "/#private-journal",
    },
  ];

  return (
    <div>
      <h1>Student Mental Wellness & Productivity Hub</h1>

      {/* Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-img"
              src="/images/SplitImage.jpeg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src="/images/meditation.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src="/images/slide4.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src="/images/motive1.jpg"
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src="/images/motive2.png"
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src="/images/motive3.webp"
              alt="Sixth slide"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Yoga & Relaxation Section */}
      <div id="yoga" className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>Yoga & Relaxation Techniques</h2>
            <p className="lead">
              Discover practices that enhance focus, reduce stress, and improve
              academic performance
            </p>
          </div>
        </div>
        {/* Your yoga cards... */}
      </div>

      {/* Motivation section */}
      <div className="main">
        <div className="text">
          <h1>Warrior mind helps to boost your skill</h1>
          <p>
            Many people who struggle with anxiety-related conditions are
            negatively affected by their worrisome thoughts. However, worry is
            just one aspect of anxiety.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Spice_Global"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore more
          </a>
        </div>
        <img
          src="/images/motive2.png"
          alt="Motivation"
          className="card-img-top"
        />
      </div>

      <hr />

      {/* Services Section */}
      <div id="services" className="subbars">
        <h1>Services...</h1>
        <div className="services-container">
          {services.map((service) => (
            <div className="servicecont" key={service.id}>
              <img className="logo" src={service.img} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <div className="service-buttons">
                <button
                  type="button"
                  className="servicebtn"
                  onClick={() =>
                    service.path
                      ? navigate(service.path)
                      : setCurrentExam(service.examKey)
                  }
                >
                  Explore {service.title}
                </button>
                <a
                  href="https://forms.gle/eWaiHdpVGWx7uR3X7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="servicebtn join-btn">
                    Join Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Components Section */}
      <div id="book-store">
        <BookStore />
      </div>

      <div id="ai-chatbot">
        <AIWellnessChatbot />
      </div>

      <div id="mood-tracking">
        <MoodTracking />
      </div>

      <div id="private-journal">
        <PrivateJournal />
      </div>

      <ArtGallery />
      <FAQ />
    </div>
  );
};
