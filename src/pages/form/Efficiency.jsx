import React, { useState, useEffect } from "react";
import { Radio, Skeleton } from "antd";
import style from "./styles/CompFill.module.css";
function Efficiency() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState({
    q11: null,
    q12: null,
    q13: null,
    q14: null,
  });

  useEffect(() => {
    if (localStorage.getItem("resultEff")) {
      let getDataLocal = JSON.parse(localStorage.getItem("resultEff"));
      setResult(JSON.parse(localStorage.getItem("resultEff")));
      console.log(result);
      console.log(JSON.parse(localStorage.getItem("resultEff")));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const onChange = (e) => {
    let dataTemp = { ...result, [e.target.name]: e.target.value };
    setResult(dataTemp);
    localStorage.setItem("resultEff", JSON.stringify(dataTemp));
  };

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={style.title}>Efficiency</h1>
          <p className={style.description}>Kategori ini akan mengukur efisiensi kegunaan Aplikasi yang diuji </p>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaimana respon yang diberikan oleh aplikasi saat digunakan ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Lambat</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q11" value="1" checked={result.q11 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q11" value="2" checked={result.q11 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q11" value="3" checked={result.q11 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q11" value="4" checked={result.q11 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q11" value="5" checked={result.q11 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q11" value="6" checked={result.q11 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q11" value="7" checked={result.q11 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Cepat</p>
              </div>
            </div>
            {/* 2 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah aplikasi tersebut efisien ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak efisien</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q12" value="1" checked={result.q12 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q12" value="2" checked={result.q12 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q12" value="3" checked={result.q12 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q12" value="4" checked={result.q12 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q12" value="5" checked={result.q12 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q12" value="6" checked={result.q12 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q12" value="7" checked={result.q12 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Efisien</p>
              </div>
            </div>
            {/* 3 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah kegunaan aplikasi praktis ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak praktis</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q13" value="1" checked={result.q13 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q13" value="2" checked={result.q13 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q13" value="3" checked={result.q13 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q13" value="4" checked={result.q13 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q13" value="5" checked={result.q13 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q13" value="6" checked={result.q13 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q13" value="7" checked={result.q13 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Praktis</p>
              </div>
            </div>
            {/* 4 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaiamana tampilan dari aplikasi ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Berantakan</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q14" value="1" checked={result.q14 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q14" value="2" checked={result.q14 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q14" value="3" checked={result.q14 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q14" value="4" checked={result.q14 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q14" value="5" checked={result.q14 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q14" value="6" checked={result.q14 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q14" value="7" checked={result.q14 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Terorganisasi</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Efficiency;
