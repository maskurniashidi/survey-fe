import React, { useState, useEffect } from "react";
import { Radio, Skeleton } from "antd";
import style from "./styles/CompFill.module.css";
function Stimulation() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState({
    q19: null,
    q20: null,
    q21: null,
    q22: null,
  });

  useEffect(() => {
    if (localStorage.getItem("resultSti")) {
      let getDataLocal = JSON.parse(localStorage.getItem("resultSti"));
      setResult(JSON.parse(localStorage.getItem("resultSti")));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);
  const onChange = (e) => {
    let dataTemp = { ...result, [e.target.name]: e.target.value };
    setResult(dataTemp);
    localStorage.setItem("resultSti", JSON.stringify(dataTemp));
  };

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={style.title}>Stimulation</h1>
          <p className={style.description}>Kategori ini akan mengukur minat pengguna dalam pemakaian Aplikasi yang diuji</p>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah aplikasi ini bermanfaat ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak bermanfaat</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q19" value="1" checked={result.q19 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q19" value="2" checked={result.q19 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q19" value="3" checked={result.q19 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q19" value="4" checked={result.q19 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q19" value="5" checked={result.q19 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q19" value="6" checked={result.q19 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q19" value="7" checked={result.q19 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Bermanfaat</p>
              </div>
            </div>
            {/* 2 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaiamana perasaan anda saat menggunakan aplikasi ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Membosankan</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q20" value="1" checked={result.q20 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q20" value="2" checked={result.q20 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q20" value="3" checked={result.q20 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q20" value="4" checked={result.q20 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q20" value="5" checked={result.q20 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q20" value="6" checked={result.q20 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q20" value="7" checked={result.q20 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Mengasyikkan</p>
              </div>
            </div>
            {/* 3 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Bagaiamana kesan anda saat menggunakan alikasi ini ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak menarik</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q21" value="1" checked={result.q21 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q21" value="2" checked={result.q21 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q21" value="3" checked={result.q21 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q21" value="4" checked={result.q21 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q21" value="5" checked={result.q21 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q21" value="6" checked={result.q21 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q21" value="7" checked={result.q21 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Menarik</p>
              </div>
            </div>
            {/* 4 */}
            <div className={style.card}>
              <h3 className={style.cardTitle}>Apakah performa aplikasi memotivasi untuk memnggunakan aplikasi tersebut ?</h3>
              <div className={style.cardContent}>
                <p className={style.cardLeft}>Tidak memotivasi</p>
                <fieldset id="group1" onChange={onChange} value={value} className={style.groupRadio}>
                  <label className={style.label} for="group1-1">
                    1<br />
                    <input type="radio" id="group1-1" name="q22" value="1" checked={result.q22 == 1} />
                  </label>
                  <label className={style.label} for="group1-1">
                    2<br />
                    <input type="radio" id="group1-1" name="q22" value="2" checked={result.q22 == 2} />
                  </label>
                  <label className={style.label} for="group1-1">
                    3<br />
                    <input type="radio" id="group1-1" name="q22" value="3" checked={result.q22 == 3} />
                  </label>
                  <label className={style.label} for="group1-1">
                    4<br />
                    <input type="radio" id="group1-1" name="q22" value="4" checked={result.q22 == 4} />
                  </label>
                  <label className={style.label} for="group1-1">
                    5<br />
                    <input type="radio" id="group1-1" name="q22" value="5" checked={result.q22 == 5} />
                  </label>
                  <label className={style.label} for="group1-1">
                    6<br />
                    <input type="radio" id="group1-1" name="q22" value="6" checked={result.q22 == 6} />
                  </label>
                  <label className={style.label} for="group1-1">
                    7<br />
                    <input type="radio" id="group1-1" name="q22" value="7" checked={result.q22 == 7} />
                  </label>
                </fieldset>
                <p className={style.cardRight}>Memotivasi</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Stimulation;
