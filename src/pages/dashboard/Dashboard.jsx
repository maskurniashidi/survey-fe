import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Dashboard.module.css";
import Navbar from "../../components/Navbar";

import { BsCheckCircle } from "react-icons/bs";
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role_id;
  console.log(role);
  return (
    <div className={style.wrapper}>
      <Navbar type="tester" />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.infoTop}>
            <h2 className={style.infoTopTitle}>Selamat Datang di Kuisionerin</h2>
            <p className={style.infoTopDesc}>Mulai pengamalan testing dengan mudah dan tepat</p>
          </div>
          {role === 2 && (
            <div className={style.cardBox}>
              <Link to="/form" className={style.card}>
                <div className={style.topCard}>
                  <BsCheckCircle className={style.icon} />
                  <h4 className={style.topCardInfo}>Kuisioner Selesai</h4>
                </div>
                <p className={style.topCardSum}>3</p>
              </Link>
              <Link to="/form" className={style.card}>
                <div className={style.topCard}>
                  <BsCheckCircle className={style.icon} />
                  <h4 className={style.topCardInfo}>Kuisioner Berjalan</h4>
                </div>
                <p className={style.topCardSum}>4</p>
              </Link>
            </div>
          )}

          {role === 3 && (
            <div className={style.cardBox}>
              <Link to="/form" className={style.card}>
                <div className={style.topCard}>
                  <BsCheckCircle className={style.icon} />
                  <h4 className={style.topCardInfo}>List Kuisioner</h4>
                </div>
                <p className={style.topCardSum}>3</p>
              </Link>
              <Link to="/form" className={style.card}>
                <div className={style.topCard}>
                  <BsCheckCircle className={style.icon} />
                  <h4 className={style.topCardInfo}>Kuisioner Selesai</h4>
                </div>
                <p className={style.topCardSum}>4</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
