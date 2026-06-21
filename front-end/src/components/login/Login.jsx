import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handler = (e) => {
    // console.log(e);
    const { name, value } = e.target; // destrcting
    setUser({ ...user, [name]: value });
  };

  const goToSign = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const userRes = await axios.post("http://localhost:4004/api/login", user);
      console.log(userRes);
      if (userRes.status === 201) {
        localStorage.setItem("token", userRes.data.token);
        toast.success(userRes.data.message);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="row">
        <Toaster />
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="login-card">
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
                  placeholder="Enter Email id  "
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
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
