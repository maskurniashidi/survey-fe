import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import style from "./styles/ResultForm.module.css";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResultForm() {
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
      url: "http://127.0.0.1:8000/api/v1/survey/1",
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data.data);
        setTotalResp(response.data.data.result.length);
        const dataResultSum = response.data.data.result;
        console.log(dataResultSum.length);
        let initAtt = 0;
        let initPer = 0;
        let initNov = 0;
        let initSti = 0;
        let initDep = 0;
        let initEff = 0;
        for (let i = 0; i < response.data.data.result.length; i++) {
          let dataSumObject = response.data.data.result[i];
          let arrObj = Object.values(dataSumObject);
          const attSum = arrObj.slice(1, 7).reduce((acc, curr) => acc + curr);
          const perSum = arrObj.slice(7, 11).reduce((acc, curr) => acc + curr);
          const effSum = arrObj.slice(11, 15).reduce((acc, curr) => acc + curr);
          const depSum = arrObj.slice(15, 19).reduce((acc, curr) => acc + curr);
          const stiSum = arrObj.slice(19, 23).reduce((acc, curr) => acc + curr);
          const novSum = arrObj.slice(23, 27).reduce((acc, curr) => acc + curr);
          initAtt = initAtt + attSum;
          initPer = initPer + perSum;
          initNov = initNov + novSum;
          initSti = initSti + stiSum;
          initDep = initDep + depSum;
          initEff = initEff + effSum;
          setAtt(initAtt);
          setPer(initPer);
          setNov(initNov);
          setSti(initSti);
          setDep(initDep);
          setEff(initEff);
          console.log(att);
        }
      })
      .catch(function (error) {
        console.log(error);
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

  const labels = ["Attractiveness", "Perspicuity", "Novelty", "Simulation", "Dependability", "Efficiency"];

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
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Hasil</h2>
          <div className={style.mainContent}>
            <div className={style.leftContent}>
              <Bar options={options} data={data} />
            </div>
            <div className={style.rightContent}>
              <h3 className={style.contentTitle}>Uraian Hasil : </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, animi. Harum eaque fugit aliquid. Harum iure culpa, perspiciatis provident fugiat doloribus assumenda in id repellendus laborum. Illum architecto
                voluptates quae repellendus, ipsa reprehenderit adipisci. In inventore nihil obcaecati, molestiae reiciendis voluptatem aut ipsa veniam animi beatae libero omnis consequatur recusandae, cum facilis nesciunt, ea explicabo
                similique fuga repudiandae provident unde! Aut, ducimus quaerat! Quam neque sunt dolore ipsa accusamus hic, doloremque laboriosam in tempore, numquam necessitatibus ratione laudantium magni odit voluptate expedita
                exercitationem. Dolorem sit temporibus deserunt, aspernatur perspiciatis quaerat necessitatibus eius ipsam labore aut magni quam tempore unde dolorum.
              </p>
              <Link to="/form">Kembali</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultForm;
