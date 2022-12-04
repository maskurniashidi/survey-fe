import React, { useState, useEffect } from "react";
import { Radio, Skeleton } from "antd";
import style from "./styles/CompFill.module.css";
function Perspicuity() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState({
    q7: null,
    q8: null,
    q9: null,
    q10: null,
  });

  useEffect(() => {
    if (localStorage.getItem("resultPer")) {
      let getDataLocal = JSON.parse(localStorage.getItem("resultPer"));
      setResult(JSON.parse(localStorage.getItem("resultPer")));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const onChange = (e) => {
    let dataTemp = { ...result, [e.target.name]: e.target.value };
    setResult(dataTemp);
    localStorage.setItem("resultPer", JSON.stringify(dataTemp));
  };

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={style.title}>Perspicuity</h1>
          <p className={style.description}>Kategori ini akan mengukur kemudahan untuk mengenai Aplikasi yang diuji</p>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaiamana kemudahan untuk memahami aplikasi ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Sulit dipahami</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q7" value="1" checked={result.q7 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q7" value="2" checked={result.q7 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q7" value="3" checked={result.q7 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q7" value="4" checked={result.q7 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q7" value="5" checked={result.q7 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q7" value="6" checked={result.q7 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q7" value="7" checked={result.q7 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Mudah dipahami</p>
              </div>
            </div>
            {/* 2 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaimana kemudahan dalam mempelajari aplikasi ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Sulit dipelajari</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q8" value="1" checked={result.q8 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q8" value="2" checked={result.q8 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q8" value="3" checked={result.q8 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q8" value="4" checked={result.q8 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q8" value="5" checked={result.q8 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q8" value="6" checked={result.q8 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q8" value="7" checked={result.q8 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>mudah dipelajari</p>
              </div>
            </div>
            {/* 3 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah aplikasi ini rumit ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Rumit</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q9" value="1" checked={result.q9 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q9" value="2" checked={result.q9 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q9" value="3" checked={result.q9 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q9" value="4" checked={result.q9 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q9" value="5" checked={result.q9 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q9" value="6" checked={result.q9 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q9" value="7" checked={result.q9 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Sederhana</p>
              </div>
            </div>
            {/* 4 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaimana aplikasi ini berjalan ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Membingungkan</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q10" value="1" checked={result.q10 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q10" value="2" checked={result.q10 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q10" value="3" checked={result.q10 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q10" value="4" checked={result.q10 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q10" value="5" checked={result.q10 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q10" value="6" checked={result.q10 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q10" value="7" checked={result.q10 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Jelas</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Perspicuity;
