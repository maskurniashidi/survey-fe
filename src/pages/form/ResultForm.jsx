import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import style from "./styles/ResultForm.module.css";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Skeleton } from "antd";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResultForm() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [totalResp, setTotalResp] = useState(0);
  const { id } = useParams();
  const [att, setAtt] = useState(0);
  const [per, setPer] = useState(0);
  const [nov, setNov] = useState(0);
  const [sti, setSti] = useState(0);
  const [dep, setDep] = useState(0);
  const [eff, setEff] = useState(0);

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api-dev.maskurdev.site/public/api/v1/survey/${id}`,
    };

    axios(config)
      .then(function (response) {
        setDetail(response.data.data);
        setTotalResp(response.data.data.result.length);
        console.log(response.data.data);
        const dataResultSum = response.data.data.result;
        let initAtt = 0;
        let initPer = 0;
        let initNov = 0;
        let initSti = 0;
        let initDep = 0;
        let initEff = 0;

        for (let i = 0; i < response.data.data.result.length; i++) {
          let dataSumObject = response.data.data.result[i];
          let arrObj = Object.values(dataSumObject);
          const attSum = arrObj.slice(1, 7).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
          const perSum = arrObj.slice(7, 11).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
          const effSum = arrObj.slice(11, 15).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
          const depSum = arrObj.slice(15, 19).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
          const stiSum = arrObj.slice(19, 23).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
          const novSum = arrObj.slice(23, 27).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
          initAtt = parseInt(initAtt) + parseInt(attSum);
          initPer = parseInt(initPer) + parseInt(perSum);
          initNov = parseInt(initNov) + parseInt(novSum);
          initSti = parseInt(initSti) + parseInt(stiSum);
          initDep = parseInt(initDep) + parseInt(depSum);
          initEff = parseInt(initEff) + parseInt(effSum);
          setAtt(initAtt);
          setPer(initPer);
          setNov(initNov);
          setSti(initSti);
          setDep(initDep);
          setEff(initEff);
          console.log(att);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // logic perhitungan
  // looping dulu arraynya, ambil satu satu
  // dapatkan values dari setiap index (object.values) => array
  // pecah jadi 6 part (array.slice)
  // hitung satu-satu dari 6 array diatas (array.reduce)
  // set ke valuenya

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = ["Attractiveness", "Perspicuity", "Efficiency", "Dependability", "Simulation", "Novelty"];

  var data = {
    labels,
    datasets: [
      {
        label: "",
        data: [(att / totalResp / 42) * 100, (per / totalResp / 28) * 100, (nov / totalResp / 28) * 100, (sti / totalResp / 28) * 100, (dep / totalResp / 28) * 100, (eff / totalResp / 28) * 100],
        backgroundColor: ["#008aff"],
      },
    ],
  };
  return (
    <div>
      <Navbar type="tester" />
      {loading ? (
        <Skeleton />
      ) : (
        <div className={style.container}>
          <div className={style.content}>
            <h2 className={style.title}>Hasil</h2>
            <div className={style.mainContent}>
              <div className={style.leftContent}>
                <Bar options={options} data={data} />
              </div>
              <div className={style.rightContent}>
                {/* <h3 className={style.contentTitle}>Uraian Hasil : </h3> */}

                <div className={style.info}>
                  <h2 className={style.infoHasilTitle}>Dskripsi Aplikasi</h2>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Nama Aplikasi</p>
                    <p className={style.textDesc}>: {detail.appsName}</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Link Aplikasi</p>
                    <p className={style.textDesc}>: {detail.appsLink}</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Jumlah Responden</p>
                    <p className={style.textDesc}>: {detail.maxTotalRespondent}</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Dibuat pada</p>
                    <p className={style.textDesc}>: {detail.created_at.slice(0, 10)}</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Deskripsi Aplikasi</p>
                    <p className={style.textDesc}>: {detail.appsDescription}</p>
                  </div>
                </div>
                <div className={style.infoHasil}>
                  <h2 className={style.infoHasilTitle}>Keterangan</h2>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Attractiveness</p>
                    <p className={style.textDesc}>: {((att / totalResp / 42) * 100).toLocaleString("id-ID")}%</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Perspiculity</p>
                    <p className={style.textDesc}>: {((per / totalResp / 42) * 100).toLocaleString("id-ID")}%</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Efficiency</p>
                    <p className={style.textDesc}>: {((eff / totalResp / 42) * 100).toLocaleString("id-ID")}%</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Dependability</p>
                    <p className={style.textDesc}>: {((dep / totalResp / 42) * 100).toLocaleString("id-ID")}%</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Stimulation</p>
                    <p className={style.textDesc}>: {((sti / totalResp / 42) * 100).toLocaleString("id-ID")}%</p>
                  </div>
                  <div className={style.infoText}>
                    <p className={style.textTitle}>Novelty</p>
                    <p className={style.textDesc}>: {((nov / totalResp / 42) * 100).toLocaleString("id-ID")}%</p>
                  </div>
                </div>
                <Link className={style.backFill} to="/form">
                  Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultForm;
