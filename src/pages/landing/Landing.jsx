import React from "react";
import style from "./Landing.module.css";
import Navbar from "../../components/Navbar";
import Header from "../../assets/landing-hp.png";
function Landing() {
  return (
    <div className={style.wrapper}>
      <Navbar type="auth" />
      <div className={style.content}>
        <h1 className={style.title}>Permudah kegiatan testing aplikasi Anda dengan hasil yang terpercaya</h1>
        <img className={style.imgLanding} src={Header} alt="logo" />
      </div>
    </div>
  );
}

export default Landing;
