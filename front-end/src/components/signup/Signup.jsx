import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const handler = (e) => {
    console.log(e);

    const { name, value } = e.target; // Object Destrsucting
    setUser({ ...user, [name]: value });
  };
  fetch("http://localhost:4004/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Shivani",
      email: "shivani@example.com",
      mobile: "1234567890",
      password: "yourpassword",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Fetch error:", err));

  const handleRegister = async (e) => {
    e.preventDefault(); // Not reload page
    // console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:4004/api/users",
        user
      );
      console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message);
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message); // Server‑side message
      } else {
        toast.error("Something went wrong"); // Fallback
      }
      console.error(err);
    }
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <Toaster />
        <div className="col-md-6 offset-md-3">
          <div className="login-card shadow p-4 rounded">
            <div className="login-title fs-4 fw-bold mb-3 text-center">
              Sign Up to Your Account
            </div>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handler}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handler}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  onChange={handler}
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
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
                  Sign Up
                </button>
              </div>

              <p className="form-text text-center mt-3">
                Already have an account?{" "}
                <a href="#" onClick={goToLogin}>
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
