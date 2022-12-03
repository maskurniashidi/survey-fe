import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar({ type }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav className="navcomp-wrapper">
      {/* auth */}
      {type === "auth" && (
        <div className="navcomp">
          <input type="checkbox" id="navcomp-check" />
          <div className="navcomp-header">
            <div className="navcomp-title">
              <img className="navcomp-logo" src={Logo} alt="" />
            </div>
          </div>
          <div className="navcomp-btn">
            <label for="navcomp-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="navcomp-links">
            <Link className="navcomp-btn__register" to={"/register"}>
              Daftar
            </Link>
            <Link className="navcomp-btn__login" to={"/login"}>
              Masuk
            </Link>
          </div>
        </div>
      )}

      {/* tester */}
      {type === "tester" && (
        <div className="navcomp">
          <input type="checkbox" id="navcomp-check" />
          <div className="navcomp-header">
            <div className="navcomp-title">
              <img className="navcomp-logo" src={Logo} alt="" />
            </div>
          </div>
          <div className="navcomp-btn">
            <label for="navcomp-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="navcomp-links">
            <Link className="navcomp-btn__tester" to={"/dashboard"}>
              Dashboard
            </Link>
            <Link className="navcomp-btn__tester" to={"/form"}>
              Form
            </Link>
            <Link className="navcomp-btn__tester" to={"/about-us"}>
              About Us
            </Link>
            <button className="navcomp-btn__login" onClick={handleLogout}>
              Keluar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
