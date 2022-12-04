import React, { useState, useEffect } from "react";
import { Radio, Skeleton } from "antd";
import style from "./styles/CompFill.module.css";
function Attractiveness() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
  });

  useEffect(() => {
    if (localStorage.getItem("resultAtt")) {
      let getDataLocal = JSON.parse(localStorage.getItem("resultAtt"));
      setResult(JSON.parse(localStorage.getItem("resultAtt")));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const onChange = (e) => {
    let dataTemp = { ...result, [e.target.name]: e.target.value };
    setResult(dataTemp);
    localStorage.setItem("resultAtt", JSON.stringify(dataTemp));
  };

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={style.title}>Attractiveness</h1>
          <p className={style.description}>Kategori ini akan mengukur daya tarik Aplikasi yang diuji </p>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaiamana kesan pemakaian aplikasi ini ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Menyusahkan</p>
                <fieldset id="group1" onChange={onChange} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q1" value={1} checked={result.q1 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q1" value={2} checked={result.q1 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q1" value={3} checked={result.q1 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q1" value={4} checked={result.q1 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q1" value={5} checked={result.q1 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q1" value={6} checked={result.q1 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q1" value={7} checked={result.q1 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Menyenangkan</p>
              </div>
            </div>
            {/* 2 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaimana kinerja dari aplikasi ini ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Buruk</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q2" value={1} checked={result.q2 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q2" value={2} checked={result.q2 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q2" value={3} checked={result.q2 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q2" value={4} checked={result.q2 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q2" value={5} checked={result.q2 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q2" value={6} checked={result.q2 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q2" value={7} checked={result.q2 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Baik</p>
              </div>
            </div>
            {/* 3 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah tampilan aplikasi nyaman saat aplikasi digunakan ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak nyaman</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q3" value="1" checked={result.q3 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q3" value="2" checked={result.q3 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q3" value="3" checked={result.q3 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q3" value="4" checked={result.q3 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q3" value="5" checked={result.q3 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q3" value="6" checked={result.q3 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q3" value="7" checked={result.q3 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Nyaman</p>
              </div>
            </div>
            {/* 4 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah tampilan aplikasi atraktif ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak attraktif</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q4" value="1" checked={result.q4 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q4" value="2" checked={result.q4 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q4" value="3" checked={result.q4 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q4" value="4" checked={result.q4 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q4" value="5" checked={result.q4 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q4" value="6" checked={result.q4 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q4" value="7" checked={result.q4 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Attraktif</p>
              </div>
            </div>
            {/* 5 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah aplikasi tersebut ramah pengguna ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak Ramah</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q5" value="1" checked={result.q5 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q5" value="2" checked={result.q5 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q5" value="3" checked={result.q5 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q5" value="4" checked={result.q5 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q5" value="5" checked={result.q5 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q5" value="6" checked={result.q5 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q5" value="7" checked={result.q5 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Ramah</p>
              </div>
            </div>
            {/* 6 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaimana tampilan aplikasi tersebut menurut pengguna ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak suka</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q6" value="1" checked={result.q6 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q6" value="2" checked={result.q6 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q6" value="3" checked={result.q6 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q6" value="4" checked={result.q6 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q6" value="5" checked={result.q6 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q6" value="6" checked={result.q6 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q6" value="7" checked={result.q6 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Suka</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Attractiveness;
