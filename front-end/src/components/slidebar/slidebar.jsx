import React from 'react';
import meditationImg from '../components/slide.jpg'; // adjust path as needed
import slide1Img from '../components/slide1.jpg';         // optional slide 1 image
import slide2Img from '../components/slide2.jpg';         // optional slide 2 image

const Header = () => {
  // ✅ Custom styles as JavaScript objects
  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '12px',
    padding: '15px 25px',
  };

  const h5Style = {
    color: '#4CAF50',
    fontSize: '28px',
    fontWeight: '700',
  };

  const pStyle = {
    color: '#f1f1f1',
    fontSize: '16px',
  };

  const imgStyle = {
    height: '500px',
    objectFit: 'cover',
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1Img} className="d-block w-100" style={imgStyle} alt="Healthy lifestyle" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5 style={h5Style}>Welcome to Worrior Mind</h5>
            <p style={pStyle}>Empower your mental health journey with personalized guidance.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2Img} className="d-block w-100" style={imgStyle} alt="Mental wellness" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5 style={h5Style}>AI-Powered Suggestions</h5>
            <p style={pStyle}>Smart recommendations based on your symptoms.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={meditationImg} className="d-block w-100" style={imgStyle} alt="Meditation" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5 style={h5Style}>Relax. Heal. Grow.</h5>
            <p style={pStyle}>Discover meditation and mental fitness practices curated for you.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
