import React from "react";
import Navbar from "../../components/Navbar";
import style from "./AboutUs.module.css";
function AboutUs() {
  return (
    <div className={style.wrapper}>
      <Navbar type={"tester"} />
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>About Us</h2>
          <p className={style.text}>
            Aplikasi Kuisionerin dibuat untuk membantu pengisian kuisioner pengujian usabilitas/ usability testing dengan menggunakan metode UEQ, dimana aplikasi ini akan menghasilkan data/hasil berupa statistik untuk aplikasi yang diuji
            setelah pengisian kuisioner dilakukan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
