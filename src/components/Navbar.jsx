import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "./styles/Navbar.css";

function Navbar({ type }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(location.pathname.slice(0, 5));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to={"/profile"}>Profile</Link>,
        },
        {
          key: "2",
          label: (
            <button className="navcomp-btn__login" onClick={handleLogout}>
              Keluar
            </button>
          ),
        },
      ]}
    />
  );
  return (
    <nav className="navcomp-wrapper">
      {/* auth */}
      {type === "auth" && (
        <div className="navcomp">
          <input type="checkbox" id="navcomp-check" />
          <div className="navcomp-header">
            <Link to={"/"} className="navcomp-title">
              <img className="navcomp-logo" src={Logo} alt="" />
            </Link>
          </div>
          <div className="navcomp-btn">
            <label for="navcomp-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="navcomp-links navcomp-links__auth">
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
            <Link to={"/"} className="navcomp-title">
              <img className="navcomp-logo" src={Logo} alt="" />
            </Link>
          </div>
          <div className="navcomp-btn">
            <label for="navcomp-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="navcomp-links">
            <Link className={location.pathname.slice(0, 10) === "/dashboard" ? "navcomp-btn__color" : "navcomp-btn__tester"} to={"/dashboard"}>
              Dashboard
            </Link>
            <Link className={location.pathname.slice(0, 5) === "/form" ? "navcomp-btn__color" : "navcomp-btn__tester"} to={"/form"}>
              Form
            </Link>
            <Link className={location.pathname.slice(0, 9) === "/about-us" ? "navcomp-btn__color" : "navcomp-btn__tester"} to={"/about-us"}>
              About Us
            </Link>
            <Link className={location.pathname.slice(0, 9) === "/profile" ? "navcomp-btn__color" : "navcomp-btn__tester"} to={"/profile"}>
              Profile
            </Link>
            <button className="navcomp-btn__login" onClick={handleLogout}>
              Keluar
            </button>
            {/* <Dropdown overlay={menu} className="nav-profile">
              <a onClick={(e) => e.preventDefault()}>
                <Space className="nav-profile__text">
                  {user.name}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown> */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
