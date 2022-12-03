import React, { useState, useEffect } from "react";
import { Radio, Skeleton } from "antd";
import style from "./styles/CompFill.module.css";
function Novelty() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState({
    q23: null,
    q24: null,
    q25: null,
    q26: null,
  });

  useEffect(() => {
    if (localStorage.getItem("resultNov")) {
      let getDataLocal = JSON.parse(localStorage.getItem("resultNov"));
      setResult(JSON.parse(localStorage.getItem("resultNov")));
      console.log(result);
      console.log(JSON.parse(localStorage.getItem("resultNov")));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const onChange = (e) => {
    let dataTemp = { ...result, [e.target.name]: e.target.value };
    setResult(dataTemp);
    localStorage.setItem("resultNov", JSON.stringify(dataTemp));
  };

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={style.title}>Novelty</h1>
          <p className={style.description}>Kategori ini akan mengukur keterbaruan dari Aplikasi yang diuji</p>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah tampilan aplikasi kreatif dibanding aplikasi lain yang serupa ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Monoton</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q23" value="1" checked={result.q23 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q23" value="2" checked={result.q23 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q23" value="3" checked={result.q23 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q23" value="4" checked={result.q23 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q23" value="5" checked={result.q23 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q23" value="6" checked={result.q23 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q23" value="7" checked={result.q23 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Kreatif</p>
              </div>
            </div>
            {/* 2 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah ada keterbaruan fitur dibanding aplikasi lain yang serupa ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Konvensional</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q24" value="1" checked={result.q24 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q24" value="2" checked={result.q24 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q24" value="3" checked={result.q24 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q24" value="4" checked={result.q24 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q24" value="5" checked={result.q24 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q24" value="6" checked={result.q24 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q24" value="7" checked={result.q24 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Terbarukan</p>
              </div>
            </div>
            {/* 3 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah aplikasi memiliki kelebihan dibanding aplikasi lain yang serupa ? </h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Biasa saja</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q25" value="1" checked={result.q25 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q25" value="2" checked={result.q25 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q25" value="3" checked={result.q25 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q25" value="4" checked={result.q25 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q25" value="5" checked={result.q25 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q25" value="6" checked={result.q25 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q25" value="7" checked={result.q25 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Memiliki kelebihan</p>
              </div>
            </div>
            {/* 4 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah adanya aplikasi merupakan suatu inovasi terbaru ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Konvensional</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q26" value="1" checked={result.q26 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q26" value="2" checked={result.q26 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q26" value="3" checked={result.q26 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q26" value="4" checked={result.q26 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q26" value="5" checked={result.q26 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q26" value="6" checked={result.q26 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q26" value="7" checked={result.q26 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Inovatif</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Novelty;
