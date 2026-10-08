import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Register.css";

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "customer",
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

    console.log("Registration Data:", formData);

    // Backend registration will be connected here
    navigate("/login");
  };

  return (
    <main className="register-page">

      <div className="register-container">

        <div className="register-card">

          <div className="register-heading">
            <p>JOIN VIVAHSEVA</p>

            <h1>Create Your Account</h1>

            <span>
              Start planning your perfect wedding with VivahSeva.
            </span>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">

              <label>Account Type</label>

              <div className="role-options">

                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={formData.role === "customer"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>Customer</strong>
                    <small>
                      Find & book wedding services
                    </small>
                  </div>
                </label>

                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="vendor"
                    checked={formData.role === "vendor"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>Vendor</strong>
                    <small>
                      Offer your wedding services
                    </small>
                  </div>
                </label>

              </div>

            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>

          </form>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>

      </div>

    </main>
  );
};