import React, { useState, useEffect } from "react";
import { Radio, Skeleton } from "antd";
import style from "./styles/CompFill.module.css";
function Dependability() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState({
    q15: null,
    q16: null,
    q17: null,
    q18: null,
  });

  useEffect(() => {
    if (localStorage.getItem("resultDep")) {
      let getDataLocal = JSON.parse(localStorage.getItem("resultDep"));
      setResult(JSON.parse(localStorage.getItem("resultDep")));
      console.log(result);
      console.log(JSON.parse(localStorage.getItem("resultDep")));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);
  const onChange = (e) => {
    let dataTemp = { ...result, [e.target.name]: e.target.value };
    setResult(dataTemp);
    localStorage.setItem("resultDep", JSON.stringify(dataTemp));
  };

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={style.title}>Dependability</h1>
          <p className={style.description}>Kategori ini akan mengukur ketepatan fitur dan desain Aplikasi yang diuji </p>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah flow apklikasi dapat diprediksi ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak dapat diprediksi</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q15" value="1" checked={result.q15 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q15" value="2" checked={result.q15 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q15" value="3" checked={result.q15 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q15" value="4" checked={result.q15 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q15" value="5" checked={result.q15 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q15" value="6" checked={result.q15 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q15" value="7" checked={result.q15 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Dapat diprediksi</p>
              </div>
            </div>
            {/* 2 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah guide dalam aplikasi mendukung pemakaian aplikasi tersebut ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak mendukung</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q16" value="1" checked={result.q16 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q16" value="2" checked={result.q16 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q16" value="3" checked={result.q16 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q16" value="4" checked={result.q16 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q16" value="5" checked={result.q16 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q16" value="6" checked={result.q16 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q16" value="7" checked={result.q16 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Mendukung</p>
              </div>
            </div>
            {/* 3 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah aplikasi ini aman dari serangan cyber ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak aman</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q17" value="1" checked={result.q17 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q17" value="2" checked={result.q17 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q17" value="3" checked={result.q17 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q17" value="4" checked={result.q17 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q17" value="5" checked={result.q17 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q17" value="6" checked={result.q17 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q17" value="7" checked={result.q17 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Aman</p>
              </div>
            </div>
            {/* 4 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah alur kinerja aplikasi sesuai ekspektasi pengguna ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak sesuai ekspektasi</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q18" value="1" checked={result.q18 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q18" value="2" checked={result.q18 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q18" value="3" checked={result.q18 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q18" value="4" checked={result.q18 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q18" value="5" checked={result.q18 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q18" value="6" checked={result.q18 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q18" value="7" checked={result.q18 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Sesuai ekspektasi</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dependability;
