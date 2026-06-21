import axios from "axios";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const goToSign = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const userRes = await axios.post("http://localhost:4004/api/login", user);
      if (userRes.status === 201) {
        localStorage.setItem("token", userRes.data.token);
        toast.success(userRes.data.message);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed");
    }
  };

  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const rotateY = x * 8; // degrees
    const rotateX = -y * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
  };

  return (
    <div className="login-wrap">
      <Toaster />
      <div
        className="login-card"
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={transformStyle}
      >
        <div className="login-title" style={{ textAlign: "center" }}>
          Login to Your Account
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Id
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handler}
              placeholder="Enter Email id"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handler}
              placeholder="Enter your password"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="form-text text-center mt-3">
            Don't have an account?{" "}
            <a href="#" onClick={goToSign}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
