import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Backend authentication will be connected here
    navigate("/");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">

        <div className="auth-info">
          <p>WELCOME BACK</p>

          <h1>
            Your Wedding
            <br />
            Journey Continues.
          </h1>

          <span>
            Login to manage your wedding services,
            bookings and enquiries with VivahSeva.
          </span>
        </div>

        <div className="auth-card">
          <h2>Login</h2>

          <p className="auth-subtitle">
            Login to your VivahSeva account
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              Login
            </button>

          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
        </div>

      </div>
    </main>
  );
};