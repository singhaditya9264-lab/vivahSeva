import { NavLink } from "react-router-dom";
import "../style/Header.css";


export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">VivahSeva</NavLink>
      </div>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/vendors">Vendors</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-buttons">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/register" className="register-btn">
          Register
        </NavLink>
      </div>
    </header>
  );
};