import React, { useState } from "react";
import { Radio } from "antd";
import style from "./styles/CompFill.module.css";
function Attractiveness() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.name, e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Attractiveness</h1>
      <p className={style.description}>Kategori ini akan mengukur daya tarik Aplikasi yang diuji </p>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Bagaiamana kesan pemakaian aplikasi ini ? </h3>
          <div className={style.cardContent}>
            <p className={style.cardLeft}>Menyusahkan</p>
            <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
              <label className={style.label} for="group1-1">
                1<br />
                <input type="radio" id="group1-1" name="a1" value="1" />
              </label>
              <label className={style.label} for="group1-1">
                2<br />
                <input type="radio" id="group1-1" name="a1" value="2" />
              </label>
              <label className={style.label} for="group1-1">
                3<br />
                <input type="radio" id="group1-1" name="a1" value="3" />
              </label>
              <label className={style.label} for="group1-1">
                4<br />
                <input type="radio" id="group1-1" name="a1" value="4" />
              </label>
              <label className={style.label} for="group1-1">
                5<br />
                <input type="radio" id="group1-1" name="a1" value="5" />
              </label>
              <label className={style.label} for="group1-1">
                6<br />
                <input type="radio" id="group1-1" name="a1" value="6" />
              </label>
              <label className={style.label} for="group1-1">
                7<br />
                <input type="radio" id="group1-1" name="a1" value="7" />
              </label>
            </fieldset>
            <p className={style.cardRight}>Menyenangkan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attractiveness;
